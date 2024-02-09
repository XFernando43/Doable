"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoard = exports.deleteBoard = exports.getAllBoardByUser = exports.createBoard = void 0;
const db_1 = require("../../db");
async function createBoard(data) {
    const _query = "INSERT INTO boards (board_name, board_color, user_Id) VALUES($1,$2,$3) RETURNING *";
    const queryParams = [data.board_name, data.board_color, data.user_Id];
    const result = await (0, db_1.query)(_query, queryParams);
    return result.rows[0];
}
exports.createBoard = createBoard;
async function getAllBoardByUser(id) {
    const _query = `Select* from Boards where user_id = ${id}`;
    const result = await (0, db_1.query)(_query);
    return result.rows;
}
exports.getAllBoardByUser = getAllBoardByUser;
async function deleteBoard(id) {
    const consult = `Delete from Boards where board_id = ${id} RETURNING *;`;
    const result = await (0, db_1.query)(consult);
    return result.rows[0];
}
exports.deleteBoard = deleteBoard;
async function updateBoard(data) {
    const consult = `
    UPDATE Boards
    SET 
        board_name = $1,
        board_color = $2
    WHERE board_Id = $3
    RETURNING *;`;
    const queryParams = [data.board_name, data.board_color, data.board_Id];
    const result = await (0, db_1.query)(consult, queryParams);
    return result.rows[0];
}
exports.updateBoard = updateBoard;
