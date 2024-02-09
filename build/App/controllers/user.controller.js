"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Controller = exports.UserController = void 0;
const users_service_1 = require("../services/users.service");
class UserController {
    async getAllUsers(req, res) {
        return await users_service_1.User_Service.getUsers(req, res);
    }
    async getMe(req, res) {
        return await users_service_1.User_Service.getUserById(req, res);
    }
    async updateMe(req, res) {
        return await users_service_1.User_Service.updateUser(req, res);
    }
    async SignIn(req, res) {
        return await users_service_1.User_Service.signIn(req, res);
    }
    async deleteMe(req, res) {
        return await users_service_1.User_Service.deleteMe(req, res);
    }
    async createUser(req, res) {
        return await users_service_1.User_Service.createUser(req, res);
    }
}
exports.UserController = UserController;
exports.User_Controller = new UserController();
