import React from "react";
import "./App.css";
import Tasks from "./components/Tasks";
// import Tasks from "./components/Tasks";
// import task from "./components/Task";
function App() {
  // state = {
  //   tasks: [],
  // };
  // check = (id) => {
  //   const newTasks = this.state.tasks.map((t) => {
  //     if (id === t.id) {
  //       t.done = !t.done;
  //     }
  //     return task;
  //   });
  //   this.setState({ task: newTasks });
  // };
  return (
    <div className="container-fluid p-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <h1
            className="display-1 text-center mx-auto"
            style={{ fontFamily: "Montserrat", fontSize: "130px" }}
          >
            Your todo list
          </h1>
        </div>

        <div className="col-sm-12">
          <Tasks />
        </div>
        {/* <Tasks tareas={this.state.tasks} check={this.check} /> */}
      </div>
    </div>
  );
}
export default App;
