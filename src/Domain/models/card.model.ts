export class Card{
    card_id: number;
    card_title:string;
    list_Id:number;
}

export type CardData = Omit<Card, "card_id">;
