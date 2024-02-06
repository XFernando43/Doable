import type { IBoardUpdateDto } from "../../Domain/Interfaces/IBoard.interface";
import type { IListUpdateDto } from "../../Domain/Interfaces/IList.interface";
import type { List, ListData } from "../../Domain/models/list.model";
import { query } from "../../db";

export async function createList(data: ListData):Promise<List>{
    const _query = "INSERT INTO board(list_name,board_id) VALUES($1,$2) RETURNING *"
    const queryParams = [data.list_name,data.board_id];
    const result = await query(_query,queryParams);
    return result.rows[0];
}

export async function getAllListsByUser(id:string):Promise<List[]>{
    const _query = `Select * from lists where list_Id = ${id}`;
    const result = await query(_query);
    return result.rows;
}

export async function deleteList(id:string):Promise<List>{
  const consult = `Delete from lists where list_Id = ${id} RETURNING *;`;
    const result = await query(consult);
    return result.rows[0];
}

export async function updateList(data:IListUpdateDto):Promise<List>{
  const consult = `
    UPDATE LISTS
    SET list_name = $1 
        orderList = $2
    WHERE list_Id = $3
    RETURNING *;`;
    const queryParams = [data.list_name,data.orderList,data.orderList];
    const result = await query(consult,queryParams);
    return result.rows[0];
}


