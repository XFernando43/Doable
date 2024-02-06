import type { IBoardUpdateDto } from "../../Domain/Interfaces/IBoard.interface";
import type { Board, BoardData } from "../../Domain/models/board.model";
import { query } from "../../db";

export async function createBoard(data: BoardData):Promise<Board>{
    const _query = "INSERT INTO boards (board_name, board_color, user_Id) VALUES($1,$2,$3) RETURNING *"
    const queryParams = [data.board_name, data.board_color, data.user_Id];
    const result = await query(_query,queryParams);
    return result.rows[0];
}

export async function getAllBoardByUser(id:string):Promise<Board[]>{
    const _query = `Select* from Boards where user_id = ${id}`;
    const result = await query(_query);
    return result.rows;
}

export async function deleteBoard(id:string):Promise<Board>{
  const consult = `Delete from Boards where board_id = ${id} RETURNING *;`;
    const result = await query(consult);
    return result.rows[0];
}



export async function updateBoard(data:IBoardUpdateDto):Promise<Board>{
  const consult = `
    UPDATE Boards
    SET 
        board_name = $1,
        board_color = $2
    WHERE board_Id = $3
    RETURNING *;`;
    const queryParams = [data.board_name,data.board_color,data.board_Id];
    const result = await query(consult,queryParams);
    return result.rows[0];
}


