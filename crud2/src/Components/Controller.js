import { local } from "../Constants/Constant";

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

export const deleteItem = (id,taskList,setTaskList) => {
  const deleteData = taskList.filter((e) => {
    return e.id !== id;
  });
  setTaskList(deleteData);
};
