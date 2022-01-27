import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import { local  } from "./Constant";
import { getDataFromLS } from "./Controller";

// const getDatafromLS = () => {
//   const data = localStorage.getItem(local);
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

const InputForm = () => {

  const getLocalStorage = getDataFromLS()
  const [taskList, setTaskList] = useState(getLocalStorage);
  const [taskName, setTaskName] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    const task = {
      id: new Date().getTime().toString(),
      taskName,
    };
    setTaskList([...taskList, task]);
    setTaskName("");
    console.log(task);
  };

  const deleteTask = (id) => {
    const deleteData = taskList.filter((e) => {
      return e.id !== id;
    });
    setTaskList(deleteData);
  };

  useEffect(() => {
    localStorage.setItem(local, JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <div className="container">
        <div>
          <form onSubmit={addTask}>
            <input
              type="text"
              value={taskName}
              placeholder="Enter Task"
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <button
              variant="outline-success"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="container">
        <center>
          {taskList.length > 0 && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Task Names</th>
                    <th style={{ width: "5px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <ListView tasks={taskList} deleteTask={deleteTask} />
                </tbody>
              </table>
            </>
          )}

          {taskList.length < 1 && <h5>No Tasks are added yet</h5>}
        </center>
      </div>
    </>
  );
};

export default InputForm;
