"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List_Service = void 0;
const list_data_1 = require("../data/list.data");
class ListService {
    async getListsByBoard(req, res) {
        try {
            const boardId = req.params["id"];
            const lists = await (0, list_data_1.getAllListsByUser)(boardId);
            return res.status(200).json({
                ok: true,
                lists: lists
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
    async createList(req, res) {
        try {
            const list_name = req.body.list_name;
            const board_Id = req.params["id"];
            const listData = {
                list_name: list_name,
                board_id: Number(board_Id),
            };
            const user = await (0, list_data_1.createList)(listData);
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
    async updateList(req, res) {
        try {
            const list_name = req.body.list_name;
            const order = req.body.order;
            const board_Id = Number(req.params["id"]);
            const boardData = {
                list_name: list_name,
                orderList: order,
                list_id: board_Id,
            };
            console.log(boardData);
            const result = await (0, list_data_1.updateList)(boardData);
            console.log(result);
            if (result) {
                return res.status(200).json({
                    ok: true,
                    me: boardData
                });
            }
            else {
                return res.status(404).json({
                    ok: false,
                    msg: "List no encontrada",
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
    async deleteList(req, res) {
        try {
            const listId = req.params["id"];
            const listFromDb = await (0, list_data_1.deleteList)(listId);
            return res.status(200).json({
                ok: true,
                list: listFromDb,
                message: "List Eliminado"
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
}
exports.List_Service = new ListService();
