import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import { getDataFromLS, setDataFromLS, addTask } from "./Controller";
import Message from "./Message";
import propTypes from "prop-types";
import "./style.css";

const InputForm = () => {
  const getLocalStorage = getDataFromLS();
  const [taskList, setTaskList] = useState(getLocalStorage);
  const [taskName, setTaskName] = useState("");

  const onSubmitBtn = (e) => {
    e.preventDefault();
    addTask(taskName, taskList, setTaskList, setTaskName);
  };

  
  const deleteTask = (id) => {
    const deleteData = taskList.filter((e) => {
      return e.id !== id;
    });
    setTaskList(deleteData);
  };

  useEffect(() => {
    setDataFromLS(taskList);
  }, [taskList]);

  return (
    <>
      <div className="main">
        <div className="form-wrapper">
          <div>
            <form className="form-control" onSubmit={onSubmitBtn}>
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

InputForm.propTypes = {
  tasks: propTypes.array.isRequired,
  deleteTask: propTypes.string,
};

InputForm.defaultProps = {
  tasks: ["1", "name"],
  deleteTask: "1",
};

export default InputForm;
