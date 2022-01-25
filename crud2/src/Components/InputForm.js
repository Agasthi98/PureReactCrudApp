import React, { useState, useEffect } from "react";
import ListView from "./ListView";

const getDatafromLS = () => {
  const data = localStorage.getItem("tasks");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const InputForm = () => {
  const [taskList, setTaskList] = useState(getDatafromLS());
  const [taskName, setTaskName] = useState("");

  const AddTask = (e) => {
    e.preventDefault();

    const task = {
      taskName,
    };
    setTaskList([...taskList, task]);
    setTaskName("");
    console.log(task);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
    <div className="container">
      <div>
        <form onSubmit={AddTask}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <button type="submit">Submit </button>
        </form>
      </div>

      <div className="container">
        <center>
        {taskList.length > 0 && (
          <>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <ListView tasks = {taskList} />
                </tbody>
              </table>
            </div>
            <button>
              Remove All
            </button>
          </>
        )}
        {taskList.length < 1 && <h5>No books are added yet</h5>}
        </center>
      </div>
      </div>
    </>
  );
};

export default InputForm;
