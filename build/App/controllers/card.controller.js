"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card_Controller = exports.CardController = void 0;
const card_service_1 = require("../services/card.service");
class CardController {
    async getAllCardsForList(req, res) {
        return await card_service_1.Card_Service.getAllCardByList(req, res);
    }
    async updateCard(req, res) {
        return await card_service_1.Card_Service.updateCard(req, res);
    }
    async deleteCard(req, res) {
        return await card_service_1.Card_Service.deleteCard(req, res);
    }
    async createCard(req, res) {
        return await card_service_1.Card_Service.createCard(req, res);
    }
}
exports.CardController = CardController;
exports.Card_Controller = new CardController();
