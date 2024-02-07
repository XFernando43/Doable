import { Request, Response } from "express";
import { Card_Service } from "../services/card.service";
export class CardController{
    async getAllCardsForList(req:Request, res:Response){
        return await Card_Service.getAllCardByList(req, res);
    }

    async updateCard(req:Request, res:Response){
        return await Card_Service.updateCard(req,res);
    }

    async deleteCard(req:Request, res:Response){
        return await Card_Service.deleteCard(req,res);
    }

    async createCard(req:Request, res:Response){
        return await Card_Service.createCard(req, res);   
    }
}


export const Card_Controller = new CardController();

