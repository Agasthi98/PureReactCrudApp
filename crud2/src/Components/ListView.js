import React from "react";
import "../Styles/style.css";

const ListView = ({ tasks, deleteTask }) => {
  return (
    <>
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
    </>
  );
};

export default ListView;
