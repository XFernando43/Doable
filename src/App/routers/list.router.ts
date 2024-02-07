import express from "express";
import { authenticateHandler } from "../../midelware/authentication.mdw";
import { List_Controller } from "../controllers/list.controller";
export const listRouter = express.Router();

listRouter.get(
  "/getLists/:id",
  authenticateHandler,
  //authorize("admin"),
  List_Controller.getAllListForUser
);
  
  
listRouter.post(
    "/:id",
    authenticateHandler,
    //schemaValidation(UserSchema),
    List_Controller.createList
);

listRouter.patch(
  "/:id",
  //schemaValidation(UpdateUserSchema),
  authenticateHandler,
  //authorize("admin","user"),
  List_Controller.updateList
);

listRouter.delete(
  "/:id",
  authenticateHandler,
  List_Controller.deleteList
);
