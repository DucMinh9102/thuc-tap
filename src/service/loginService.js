import dataLogin from "../Data/dataLogin.js";

const findUser = (username) => {
  return dataLogin.find((user) => user.username === username);
};

export default findUser;