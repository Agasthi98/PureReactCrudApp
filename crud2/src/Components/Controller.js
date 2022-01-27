import { local } from "./Constant";

export const getDataFromLS = () => {
  const data = localStorage.getItem(local);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
