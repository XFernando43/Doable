"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRouter = void 0;
const express_1 = __importDefault(require("express"));
const authentication_mdw_1 = require("../../midelware/authentication.mdw");
const list_controller_1 = require("../controllers/list.controller");
const authorization_mdw_1 = require("../../midelware/authorization.mdw");
exports.listRouter = express_1.default.Router();
exports.listRouter.get("/getLists/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), list_controller_1.List_Controller.getAllListForUser);
exports.listRouter.post("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), list_controller_1.List_Controller.createList);
exports.listRouter.patch("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), list_controller_1.List_Controller.updateList);
exports.listRouter.delete("/:id", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), list_controller_1.List_Controller.deleteList);
