import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import NewTask from "./NewTask";
import { db } from "../init.js";
import Task from "./Task";

function Tasks() {
  const [tasks, settasks] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
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
          <NewTask addNewTask={addNewTask} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const deleteTask = async (id) => {
    console.log(id);
    await db.collection("task").doc(id).delete();
    toast("Task deleted", {
      type: "error",
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const addNewTask = async (values) => {
    //console.log(values);
    await db.collection("task").doc().set(values);
    toast("New Task Added", {
      type: "success",
      position: toast.POSITION.TOP_CENTER,
    });
    setModalShow(false);
    document.getElementById("form").reset();
  };
  const checkedf = async (id) => {
    console.log(id);
    tasks.map((t) => {
      if (t.id === id) {
        db.collection("task").doc(id).update({ done: !t.done });
      }
      return false;
    });
  };

  const getTasks = async () => {
    db.collection("task").onSnapshot((querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
      });
      console.log(tasks);
      settasks(tasks);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <div className="mr-auto ml-auto text-center">
        <Button variant="success" onClick={() => setModalShow(true)}>
          <i className="large material-icons" style={{ fontSize: "45px" }}>
            add
          </i>
        </Button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ToastContainer />
      <div className="row col-md-12 mr-auto ml-auto d-flex justify-content-center">
        {tasks.map((t) => (
          <Task
            key={t.id}
            title={t.title}
            description={t.description}
            id={t.id}
            done={t.done}
            checkedf={checkedf}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
