"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List_Controller = exports.ListController = void 0;
const list_service_1 = require("../services/list.service");
class ListController {
    async getAllListForUser(req, res) {
        return await list_service_1.List_Service.getListsByBoard(req, res);
    }
    async updateList(req, res) {
        return await list_service_1.List_Service.updateList(req, res);
    }
    async deleteList(req, res) {
        return await list_service_1.List_Service.deleteList(req, res);
    }
    async createList(req, res) {
        return await list_service_1.List_Service.createList(req, res);
    }
}
exports.ListController = ListController;
exports.List_Controller = new ListController();
