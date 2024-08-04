import express from "express";
import { create, getUsersData } from "../controller/userController.js";
const route = express.Router();

route.post("/createuser", create);
route.get("/users", getUsersData);
/*route.get("/user/:id", getOneUsersData);  getOneUsersData,
  deleteUserData,
  updateUserData
route.put("/updateuser/:id", updateUserData);
route.delete("/deleteuser/:id", deleteUserData);*/

export default route;
