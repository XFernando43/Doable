import express from "express";
import { authenticateHandler } from "../../midelware/authentication.mdw";
import { Card_Controller } from "../controllers/card.controller";
export const cardRouter = express.Router();

cardRouter.get(
    "/getCards/:id",
    authenticateHandler,
    //authorize("admin"),
    Card_Controller.getAllCardsForList
);
  
  
cardRouter.post(
    "/:id",
    authenticateHandler,
    //schemaValidation(UserSchema),
    Card_Controller.createCard
);

cardRouter.patch(
    "/:id",
    //schemaValidation(UpdateUserSchema),
    authenticateHandler,
    //authorize("admin","user"),
    Card_Controller.updateCard
);

cardRouter.delete(
    "/:id",
    authenticateHandler,
    Card_Controller.deleteCard
);
