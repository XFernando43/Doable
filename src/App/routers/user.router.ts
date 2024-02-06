import express from "express";
import { User_Controller } from "../controllers/user.controller";
import { authenticateHandler } from "../../midelware/authentication.mdw";
import { authorize } from "../../midelware/authorization.mdw";
export const userRouter = express.Router();

userRouter.get(
  "/getAll",
  // authenticateHandler,
  //authorize("admin"),
  User_Controller.getAllUsers
  
);

userRouter.get(
  "/me",
  authenticateHandler,
  authorize("admin","user"),
  User_Controller.getMe
  
);

userRouter.post(
  "/signup",
//   schemaValidation(UserSchema),
  User_Controller.createUser
);

userRouter.patch(
  "/me",
//   schemaValidation(UpdateUserSchema),
  authenticateHandler,
//   authorize("admin","user"),
  User_Controller.updateMe
);

userRouter.delete(
  "/me",
  authenticateHandler,
  User_Controller.deleteMe
);

userRouter.post("/SignIn", async (_req, res) => {
  User_Controller.SignIn(_req, res);
});