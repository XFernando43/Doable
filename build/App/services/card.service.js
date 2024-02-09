"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card_Service = void 0;
const card_data_1 = require("../data/card.data");
class CardService {
    async getAllCardByList(req, res) {
        try {
            const listId = req.params["id"];
            const cards = await (0, card_data_1.getAllCardsByList)(listId);
            return res.status(200).json({
                ok: true,
                cards: cards
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
    async createCard(req, res) {
        try {
            const card_title = req.body.card_title;
            const list_id = Number(req.params["id"]);
            const cardData = {
                card_title: card_title,
                list_Id: list_id,
            };
            console.log(cardData);
            const card = await (0, card_data_1.createCard)(cardData);
            return res.status(200).json({
                ok: true,
                card: card,
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
    async updateCard(req, res) {
        try {
            const card_title = req.body.card_title;
            const card_id = Number(req.params["id"]);
            const cardData = {
                card_id: card_id,
                card_title: card_title,
            };
            const result = await (0, card_data_1.updateCard)(cardData);
            console.log(result);
            if (result) {
                return res.status(200).json({
                    ok: true,
                    card: cardData
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
    async deleteCard(req, res) {
        try {
            const cardId = req.params["id"];
            const listFromDb = await (0, card_data_1.deleteCard)(cardId);
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
exports.Card_Service = new CardService();
