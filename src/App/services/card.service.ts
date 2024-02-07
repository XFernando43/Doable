import { Request, Response } from "express";
import { createCard, deleteCard, getAllCardsByList, updateCard } from "../data/card.data";
import type { Card, CardData } from "../../Domain/models/card.model";
import type { ICardUpdateDto } from "../../Domain/Interfaces/ICard.interface";

class CardService {
  
  async getAllCardByList(req:Request, res:Response): Promise<Card[] | any> {
    try{
      const listId = req.params["id"];
      const cards = await getAllCardsByList(listId);
      return res.status(200).json({
          ok:true,
          cards:cards
      });
    }catch(error){
      return res.status(500).json({
          ok: false,
          msg: "Error de Servidor",
          data: error,
      });
    }
  }

  async createCard(req:Request, res:Response) {
    try{
        const card_title = req.body.card_title;
        const list_id = Number(req.params["id"]); 

        const cardData: CardData = {
            card_title:card_title,
            list_Id:list_id,
        };

        console.log(cardData);

        const card = await createCard(cardData);
        return res.status(200).json({
            ok: true,
            card: card,
        });
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error de Servidor",
            data: error,
        });
    }
  }

  async updateCard(req:Request, res:Response){
    try{
        const card_title = req.body.card_title;
        const card_id = Number(req.params["id"]); 
      
        const cardData: ICardUpdateDto = {
            card_id: card_id,
            card_title:card_title,
        };      
        const result = await updateCard(cardData);

        console.log(result);

        if(result){
          return res.status(200).json({
            ok:true,
            card:cardData
          });
        }else{
          return res.status(404).json({
            ok: false,
            msg: "List no encontrada",
          });
        }

    }catch(error){
        return {
            ok: false,
            message: "problemas con el servidor",
        };
    }
  }

  async deleteCard(req:Request, res:Response){
    try{
        const cardId = req.params["id"];
        const listFromDb = await deleteCard(cardId);

        return res.status(200).json({
            ok:true,
            list:listFromDb,
            message:"List Eliminado"
        });

    }catch(error){
      return res.status(500).json({
        ok: false,
        msg: "Error de Servidor",
        data: error,
      });
    }
  }

}

export const Card_Service = new CardService();