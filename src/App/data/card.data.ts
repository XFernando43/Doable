
import type { ICardUpdateDto } from "../../Domain/Interfaces/ICard.interface";
import { Card, CardData } from "../../Domain/models/card.model";
import { query } from "../../db";

export async function createCard(data: CardData):Promise<Card>{
    const _query = "INSERT INTO Cards(card_title, list_Id) VALUES($1,$2) RETURNING *"
    const queryParams = [data.card_title,data.list_Id];
    const result = await query(_query,queryParams);
    return result.rows[0];
}

export async function getAllCardsByList(id:string):Promise<Card[]>{
    const _query = `select* from cards where list_id = ${id}`;
    const result = await query(_query);
    return result.rows;
}

export async function deleteCard(id:string):Promise<Card>{
  const consult = `Delete from cards where card_Id = ${id} RETURNING *;`;
    const result = await query(consult);
    return result.rows[0];
}

export async function updateCard(data:ICardUpdateDto):Promise<Card>{
  const consult = `
    UPDATE Cards
    SET card_title = $1 
    WHERE card_Id = $2
    RETURNING *;`;
    const queryParams = [data.card_title,data.card_id];
    const result = await query(consult,queryParams);
    return result.rows[0];
}


