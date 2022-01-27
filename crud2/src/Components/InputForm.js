import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import { local } from "./Constant";
import { getDataFromLS } from "./Controller";
import Message from "./Message";
import "./style.css";

const InputForm = () => {
  const getLocalStorage = getDataFromLS();
  const [taskList, setTaskList] = useState(getLocalStorage);
  const [taskName, setTaskName] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime().toString(),
      taskName,
    };
    setTaskList([...taskList, newTask]);
    setTaskName("");
    console.log(newTask);
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
      <div className="main">
        <div className="form-wrapper">
          <div>
            <form className="form-control" onSubmit={addTask}>
              <input
                className="nameBox"
                type="text"
                value={taskName}
                placeholder="Enter Task"
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
              <button className="btn-submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="table-wrapper">
          {taskList.length > 0 && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Task Names</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <ListView tasks={taskList} deleteTask={deleteTask} />
                </tbody>
              </table>
            </>
          )}

          {taskList.length < 1 && <Message success="No Tasks added yet" />}
        </div>
      </div>
    </>
  );
};

export default InputForm;
