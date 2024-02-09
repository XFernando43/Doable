"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board_Service = void 0;
const board_data_1 = require("../data/board.data");
class BoardService {
    async getBoardsById(req, res) {
        try {
            const userId = req.userId;
            const board = await (0, board_data_1.getAllBoardByUser)(userId);
            return res.status(200).json({
                ok: true,
                boards: board
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
    async createBoard(req, res) {
        try {
            const userId = req.userId;
            const name = req.body.name;
            const color = req.body.color;
            const boardData = {
                board_name: name,
                board_color: color,
                user_Id: userId,
            };
            const user = await (0, board_data_1.createBoard)(boardData);
            return res.status(200).json({
                ok: true,
                user: user,
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
    async updateBoard(req, res) {
        try {
            const name = req.body.name;
            const color = req.body.color;
            const boardId = Number(req.params["id"]);
            if (!req.body.name || !req.body.color) {
                return res.status(200).json({
                    ok: false,
                    me: "Campos faltantes"
                });
            }
            const boardData = {
                board_Id: boardId,
                board_name: name,
                board_color: color,
            };
            const result = await (0, board_data_1.updateBoard)(boardData);
            if (result) {
                return res.status(200).json({
                    ok: true,
                    board: boardData
                });
            }
            else {
                return res.status(404).json({
                    ok: true,
                    message: "no se encontro la tabla"
                });
            }
        }
        catch (error) {
            return {
                ok: false,
                message: "problemas con el servidor",
            };
        }
    }
    async deleteBoard(req, res) {
        try {
            const boardId = req.params["id"];
            const BoardFromDb = await (0, board_data_1.deleteBoard)(boardId);
            if (BoardFromDb) {
                return res.status(200).json({
                    ok: true,
                    user: BoardFromDb,
                    message: "Board Eliminado"
                });
            }
            else {
                return res.status(404).json({
                    ok: true,
                    message: "no se encontro la tabla"
                });
            }
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
}
exports.Board_Service = new BoardService();
