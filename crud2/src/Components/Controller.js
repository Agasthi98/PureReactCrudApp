import React from "react";
import { local } from "./Constant";

const Controller = () => {
  const data = localStorage.getItem(local);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default Controller;
