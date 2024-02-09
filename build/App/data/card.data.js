"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCard = exports.deleteCard = exports.getAllCardsByList = exports.createCard = void 0;
const db_1 = require("../../db");
async function createCard(data) {
    const _query = "INSERT INTO Cards(card_title, list_Id) VALUES($1,$2) RETURNING *";
    const queryParams = [data.card_title, data.list_Id];
    const result = await (0, db_1.query)(_query, queryParams);
    return result.rows[0];
}
exports.createCard = createCard;
async function getAllCardsByList(id) {
    const _query = `select* from cards where list_id = ${id}`;
    const result = await (0, db_1.query)(_query);
    return result.rows;
}
exports.getAllCardsByList = getAllCardsByList;
async function deleteCard(id) {
    const consult = `Delete from cards where card_Id = ${id} RETURNING *;`;
    const result = await (0, db_1.query)(consult);
    return result.rows[0];
}
exports.deleteCard = deleteCard;
async function updateCard(data) {
    const consult = `
    UPDATE Cards
    SET card_title = $1 
    WHERE card_Id = $2
    RETURNING *;`;
    const queryParams = [data.card_title, data.card_id];
    const result = await (0, db_1.query)(consult, queryParams);
    return result.rows[0];
}
exports.updateCard = updateCard;
