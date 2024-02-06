import express from "express";
import { authenticateHandler } from "../../midelware/authentication.mdw";
// import { authorize } from "../../midelware/authorization.mdw";
import { Board_Controller } from "../controllers/board.controller";
export const boardRouter = express.Router();

boardRouter.get(
  "/getBoards",
  authenticateHandler,
  //authorize("admin"),
  Board_Controller.getAllBoardForUser
  
  );
  
  
boardRouter.post(
    "",
    authenticateHandler,
  //    schemaValidation(UserSchema),
    Board_Controller.createBoard
);

boardRouter.patch(
  "/:id",
  //schemaValidation(UpdateUserSchema),
  authenticateHandler,
  //authorize("admin","user"),
    Board_Controller.updateBoard
);

boardRouter.delete(
  "/:id",
  authenticateHandler,
  Board_Controller.deleteBoard
);
