import React from 'react';

const ListView = ({tasks,deleteTask}) => {
  return (
      tasks.map((post) => (
        <tr key={post.id}>
        <td>{post.taskName}</td>
        <td> <button onClick={()=>deleteTask(post.id)}> 
            delete</button>
        </td>           
    </tr>            
      ))
  );
};

export default ListView;
