"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board_Controller = exports.BoardController = void 0;
const board_service_1 = require("../services/board.service");
class BoardController {
    async getAllBoardForUser(req, res) {
        return await board_service_1.Board_Service.getBoardsById(req, res);
    }
    async updateBoard(req, res) {
        return await board_service_1.Board_Service.updateBoard(req, res);
    }
    async deleteBoard(req, res) {
        return await board_service_1.Board_Service.deleteBoard(req, res);
    }
    async createBoard(req, res) {
        return await board_service_1.Board_Service.createBoard(req, res);
    }
}
exports.BoardController = BoardController;
exports.Board_Controller = new BoardController();
