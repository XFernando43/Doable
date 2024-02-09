"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = __importDefault(require("express"));
const authentication_mdw_1 = require("../../midelware/authentication.mdw");
const board_controller_1 = require("../controllers/board.controller");
const authorization_mdw_1 = require("../../midelware/authorization.mdw");
exports.boardRouter = express_1.default.Router();
exports.boardRouter.get("/getBoards", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), board_controller_1.Board_Controller.getAllBoardForUser);
exports.boardRouter.post("", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), board_controller_1.Board_Controller.createBoard);
exports.boardRouter.patch("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), board_controller_1.Board_Controller.updateBoard);
exports.boardRouter.delete("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), board_controller_1.Board_Controller.deleteBoard);
