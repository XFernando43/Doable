"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardRouter = void 0;
const express_1 = __importDefault(require("express"));
const authentication_mdw_1 = require("../../midelware/authentication.mdw");
const card_controller_1 = require("../controllers/card.controller");
const authorization_mdw_1 = require("../../midelware/authorization.mdw");
exports.cardRouter = express_1.default.Router();
exports.cardRouter.get("/getCards/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), card_controller_1.Card_Controller.getAllCardsForList);
exports.cardRouter.post("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), card_controller_1.Card_Controller.createCard);
exports.cardRouter.patch("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), card_controller_1.Card_Controller.updateCard);
exports.cardRouter.delete("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), card_controller_1.Card_Controller.deleteCard);
