import express from "express";
import { authenticateHandler } from "../../midelware/authentication.mdw";
import { Board_Controller } from "../controllers/board.controller";
import { authorize } from "../../midelware/authorization.mdw";
export const boardRouter = express.Router();

boardRouter.get(
  "/getBoards",
  authenticateHandler,
  authorize("admin","user"),
  Board_Controller.getAllBoardForUser
);
  
boardRouter.post(
    "",
    authenticateHandler,
    authorize("admin","user"),
    Board_Controller.createBoard
);

boardRouter.patch(
  "/:id",
  authenticateHandler,
  authorize("admin","user"),
  Board_Controller.updateBoard
);
  
boardRouter.delete(
  "/:id",
  authenticateHandler,
  authorize("admin","user"),
  Board_Controller.deleteBoard
);
