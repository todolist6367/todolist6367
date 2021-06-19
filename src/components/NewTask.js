import React, { useState, useEffect, useRef } from "react"; 
var submited = false;
function NewTask(props) {
  const initvalues = {
    title: "",
    description: "",
    done: false,
  };
  const [values, setValues] = useState(initvalues);
 
  const handleSub = (s) => {
    submited = true;
    s.preventDefault();
    var title = document.getElementById("task").value;
    var description = document.getElementById("description").value;
    setValues({ ...values, title: title, description: description });
  };
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (submited){
      props.addNewTask(values);
      submited = false;
      
    }
     
  });
  return (
    <form className="card car-body" id="form" onSubmit={handleSub}>
      <div className="form-group mt-10">
        <h1 className="display-4 text-center" style={{ marginTop: "15px", fontFamily: "Montserrat"}}>
          Add new task!
        </h1>
      </div>
      <div className="form-group input-group">
        <div className="input-group-text">
          <i className="material-icons" style={{ fontSize: "50px" }}>
            assignment
          </i>
        </div>
        <input
          type="text"
          className="form-control mt-auto mb-auto mr-3"
          id="task"
          placeholder="Your task"
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text">
          <i className="material-icons" style={{ fontSize: "50px" }}>
            description
          </i>
        </div>
        <textarea
          rows="3"
          className="form-control mt-auto mb-auto mr-3"
          id="description"
          placeholder="Your Description"
        />
      </div>
      <button type="submit" className="btn btn-outline-danger mx-auto mb-3">
        Submit
      </button>
    </form>
  );
}

export default NewTask;
