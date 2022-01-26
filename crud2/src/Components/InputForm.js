import React, { useState, useEffect } from "react";
import { Table, Button, Form, FormControl } from "react-bootstrap";
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
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "12%" }}>
          <Form onSubmit={AddTask}>
            <FormControl
              style={{ width: "40%", marginLeft: "20%" }}
              type="text"
              value={taskName}
              placeholder="Enter Task"
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <Button
              style={{ marginTop: "-67px", marginLeft: "30%" }}
              variant="outline-success"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <div className="container" style={{ marginTop: "5%" }}>
        <center>
          {taskList.length > 0 && (
            <>
              <Table striped bordered hover style={{ width: "40%" }}>
                <thead>
                  <tr>
                    <th>Task Names</th>
                    <th style={{ width: "5px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <ListView tasks={taskList} deleteTask={deleteTask} />
                </tbody>
              </Table>
            </>
          )}

          {taskList.length < 1 && <h5>No Tasks are added yet</h5>}
        </center>
      </div>
    </>
  );
};

export default InputForm;
