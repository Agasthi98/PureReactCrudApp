import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import {
  getDataFromLS,
  setDataFromLS,
  addTask,
  deleteItem,
} from "./Controller";
import propTypes from "prop-types";
import "../Styles/style.css";

const InputForm = () => {
  const getLocalStorage = getDataFromLS();
  const [taskList, setTaskList] = useState(getLocalStorage);
  const [taskName, setTaskName] = useState("");

  const onSubmitBtn = (e) => {
    e.preventDefault();
    addTask(taskName, taskList, setTaskList, setTaskName);
  };

  const deleteTask = (id) => {
    deleteItem(id, taskList, setTaskList);
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
        <ListView tasks={taskList} deleteTask={deleteTask} />
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
