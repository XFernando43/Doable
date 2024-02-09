"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateList = exports.deleteList = exports.getAllListsByUser = exports.createList = void 0;
const db_1 = require("../../db");
async function createList(data) {
    const _query = "INSERT INTO lists(list_name,board_id) VALUES($1,$2) RETURNING *";
    const queryParams = [data.list_name, data.board_id];
    const result = await (0, db_1.query)(_query, queryParams);
    return result.rows[0];
}
exports.createList = createList;
async function getAllListsByUser(id) {
    const _query = `Select * from lists where board_id = ${id}`;
    const result = await (0, db_1.query)(_query);
    return result.rows;
}
exports.getAllListsByUser = getAllListsByUser;
async function deleteList(id) {
    const consult = `Delete from lists where list_Id = ${id} RETURNING *;`;
    const result = await (0, db_1.query)(consult);
    return result.rows[0];
}
exports.deleteList = deleteList;
async function updateList(data) {
    const consult = `

    UPDATE lists
    SET list_name = $1,
        orderList = $2
    WHERE list_Id = $3
    RETURNING *;
    
    `;
    const queryParams = [data.list_name, data.orderList, data.list_id];
    const result = await (0, db_1.query)(consult, queryParams);
    return result.rows[0];
}
exports.updateList = updateList;
