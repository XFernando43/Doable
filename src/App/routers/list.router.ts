import express from "express";
import { authenticateHandler } from "../../midelware/authentication.mdw";
import { List_Controller } from "../controllers/list.controller";
import { authorize } from "../../midelware/authorization.mdw";
export const listRouter = express.Router();

listRouter.get(
  "/getLists/:id",
  authenticateHandler,
  authorize("admin","user"),
  List_Controller.getAllListForUser
);
   
listRouter.post(
  "/:id",
  authenticateHandler,
  authorize("admin","user"),
  List_Controller.createList
);

listRouter.patch(
  "/:id",
  authenticateHandler,
  authorize("admin","user"),
  List_Controller.updateList
);
  
listRouter.delete(
  "/:id",
  authenticateHandler,
  authorize("admin","user"),
  List_Controller.deleteList
);
