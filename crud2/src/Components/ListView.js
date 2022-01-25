import React from 'react';

const ListView = ({tasks,deleteTask}) => {
  return (
      tasks.map((post) => (
        <tr key={post.taskName}>
        <td>{post.taskName}</td>
        
        <td> <button onClick={()=>deleteTask(post.taskName)}> 
            delete</button>
        </td>           
    </tr>            
      ))
  );
};

export default ListView;
