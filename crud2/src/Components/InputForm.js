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
    const filter = taskList.filter((e) => {
      return e.id !== id;
    });
    setTaskList(filter);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "10%" }}>
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
              Submit{" "}
            </Button>
          </Form>
        </div>

        <div className="container" style={{ marginTop: "10%" }}>
          <center>
            {taskList.length > 0 && (
              <>
                <Table striped bordered hover style={{ width: "40%" }}>
                  <thead>
                    <tr>
                      <th>Task Names</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ListView tasks={taskList} deleteTask={deleteTask} />
                  </tbody>
                </Table>
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
