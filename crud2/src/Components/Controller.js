import { local } from "./Constant";

export const getDataFromLS = () => {
  const data = localStorage.getItem(local);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const setDataFromLS = (taskList) => {
  localStorage.setItem(local, JSON.stringify(taskList));
};

export const addTask = (taskName,taskList,setTaskList,setTaskName) => {
  const newTask = {
    id: new Date().getTime().toString(),
    taskName,
  };
  setTaskList([...taskList, newTask])
  setTaskName('')
  console.log(newTask)
};

// const addTask = (e) => {
//   e.preventDefault();

//   // const newTask = {
//   //   id: new Date().getTime().toString(),
//   //   taskName,
//   // };
//   setTaskList([...taskList, newTask]);
//   setTaskName("");
//   console.log(newTask);
// }
