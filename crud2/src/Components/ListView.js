import React from "react";
import { Button } from "react-bootstrap";

const ListView = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((post) => (
        <tr key={post.id}>
          <td>{post.taskName}</td>
          <td>
            <Button variant="danger" onClick={() => deleteTask(post.id)}><i class="fas fa-trash"></i></Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListView;
