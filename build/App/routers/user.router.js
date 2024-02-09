"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const authentication_mdw_1 = require("../../midelware/authentication.mdw");
const authorization_mdw_1 = require("../../midelware/authorization.mdw");
const schema_validation_1 = require("../Schemas/schema.validation");
const user_schema_1 = require("../Schemas/user.schema");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/getAll", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin"), user_controller_1.User_Controller.getAllUsers);
exports.userRouter.get("/me", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), user_controller_1.User_Controller.getMe);
exports.userRouter.post("/signup", (0, schema_validation_1.schemaValidation)(user_schema_1.UserSchema), user_controller_1.User_Controller.createUser);
exports.userRouter.patch("/me", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), user_controller_1.User_Controller.updateMe);
exports.userRouter.delete("/me", authentication_mdw_1.authenticateHandler, (0, authorization_mdw_1.authorize)("admin", "user"), user_controller_1.User_Controller.deleteMe);
exports.userRouter.post("/SignIn", async (_req, res) => {
    user_controller_1.User_Controller.SignIn(_req, res);
});
