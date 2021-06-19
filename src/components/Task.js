import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
function Task(props) {
  const [modalShow2, setModalShow2] = React.useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    ifcheked();
  });
  function ifcheked() {
    props.done
      ? (document.getElementById(props.id).checked = true)
      : (document.getElementById(props.id).checked = false);
  }
  const MyVerticallyCenteredModal2 = (props) => {
    console.log(id);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1 className="display-3 text-center">
              Do u want to delete this task?
            </h1>
            <div className="mt-5">
              <p className="text-center mb-0 mt-10">This can't be undone</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="mr-auto ml-auto text-center">
            <Button
              className="mr-auto ml-auto"
              variant="danger"
              onClick={() => deleteTaskss()}
            >
              Sure
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };
  function deleteTaskss() {
    props.deleteTask(id);
  }
  return (
    <div className="mr-1 ml-1 mt-5 col-xl-2 col-lg-3 col-md-5 col-sm-5 col-xs-12">
      <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
      <div
        className={
          props.done
            ? "card text-black bg-success"
            : "card text-black bg-danger"
        }
      >
        <div className="header mr-100">
          <div className="text-right">
            <Button
              variant="light"
              size="sm"
              onClick={() => {
                setId(props.id);
                setModalShow2(true);
              }}
            >
              <i className="large material-icons" style={{ fontSize: "25px" }}>
                delete
              </i>
            </Button>
          </div>
        </div>
        <div className="card-body mb-auto">
          <div className="card-title">
            <h1
              className="card-title text-center"
              style={{
                color: props.done ? "white" : "black",
                textDecoration: props.done ? "line-through" : "none",
              }}
            >
              {props.title}
            </h1>

            <div className="mt-auto mr-auto ml-auto">
              <p
                className="card-text text-center"
                style={{
                  color: props.done ? "white" : "black",
                  textDecoration: props.done ? "line-through" : "none",
                }}
              >
                {props.description}
              </p>
              <form>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    id={props.id}
                    onClick={() => props.checkedf(props.id)}
                  />
                  <span className="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
