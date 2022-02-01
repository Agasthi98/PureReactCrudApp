import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import { Validations } from "./Validations";
import {
  getDataFromLS,
  setDataFromLS,
  addTask,
  deleteItem,
} from "./Controller";
import "../Styles/style.css";

const InputForm = () => {
  const getLocalStorage = getDataFromLS();
  const [taskList, setTaskList] = useState(getLocalStorage);
  const [taskName, setTaskName] = useState("");

  const [errors, setErrors] = useState({});

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (!taskName) {
      setErrors(Validations(taskName));
    } else {
      addTask(taskName, taskList, setTaskList, setTaskName);
    }
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
            <form className="form-control">
              <input
                className="nameBox"
                type="text"
                value={taskName}
                placeholder="Enter Task"
                onChange={(e) => setTaskName(e.target.value)}
              />
              <div>
                {errors.taskName && (
                  <h6 className="errorMsg">{errors.taskName}</h6>
                )}
              </div>
              <button
                className="btn-submit"
                type="submit"
                onClick={onSubmitBtn}
              >
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



export default InputForm;
