import express from "express";
import { authenticateHandler } from "../../midelware/authentication.mdw";
import { Card_Controller } from "../controllers/card.controller";
import { authorize } from "../../midelware/authorization.mdw";
export const cardRouter = express.Router();

cardRouter.get(
    "/getCards/:id",
    authenticateHandler,
    authorize("admin","user"),
    Card_Controller.getAllCardsForList
);
    
    
cardRouter.post(
    "/:id",
    authenticateHandler,
    authorize("admin","user"),
    Card_Controller.createCard
);

cardRouter.patch(
    "/:id",
    authenticateHandler,
    authorize("admin","user"),
    Card_Controller.updateCard
);
    
cardRouter.delete(
    "/:id",
    authenticateHandler,
    authorize("admin","user"),
    Card_Controller.deleteCard
);
