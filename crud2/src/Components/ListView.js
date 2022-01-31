import React from "react";
import Message from "./Message";
import "../Styles/style.css";

const ListView = ({ tasks, deleteTask }) => {
  return (
    <>
      <div className="table-wrapper">
        {tasks.length > 0 && (
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
                {tasks.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.taskName}</td>
                    <td>
                      <button
                        className="delete-btn"
                        variant="danger"
                        onClick={() => deleteTask(post.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {tasks.length < 1 && <Message success="No Tasks added yet" />}
      </div>
    </>
  );
};

export default ListView;
