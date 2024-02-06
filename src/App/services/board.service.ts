import { Request, Response } from "express";
import type { Board, BoardData } from "../../Domain/models/board.model";
import { createBoard, deleteBoard, getAllBoardByUser, updateBoard } from "../data/board.data";
import type { IBoardUpdateDto } from "../../Domain/Interfaces/IBoard.interface";

class BoardService {
  
  async getBoardsById(req:Request, res:Response): Promise<Board|any> {
    try{
      const userId = req.userId;
      const board = await getAllBoardByUser(userId);
      return res.status(200).json({
          ok:true,
          boards:board
      });
    }catch(error){
      return res.status(500).json({
          ok: false,
          msg: "Error de Servidor",
          data: error,
      });
    }
  }

  async createBoard(req:Request, res:Response) {
    try{
        const userId = req.userId;
        const name = req.body.name;
        const color = req.body.color;
    
        const boardData: BoardData = {
            board_name: name,
            board_color: color,
            user_Id: userId,
        };
        const user = await createBoard(boardData);
        return res.status(200).json({
            ok: true,
            user: user,
        });
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error de Servidor",
            data: error,
        });
    }
  }

  async updateBoard(req:Request, res:Response){
    try{
        const name = req.body.name;
        const color = req.body.color;
        const boardId = Number(req.params["id"]);
        
        if(!req.body.name || !req.body.color){
            return res.status(200).json({
                ok:false,
                me:"Campos faltantes"
            });
        } 

        const boardData: IBoardUpdateDto = {
            board_Id: boardId,
            board_name:name,
            board_color:color,
        };

        const result = await updateBoard(boardData);
        
        if(result){ 
          return res.status(200).json({
            ok:true,
            board:boardData
          });
        }else{
          return res.status(404).json({
            ok:true,
            message: "no se encontro la tabla"
          });
        }
          
    }catch(error){
        return {
            ok: false,
            message: "problemas con el servidor",
        };
    }
  }

  async deleteBoard(req:Request, res:Response){
    try{
        const boardId = req.params["id"];
        const BoardFromDb = await deleteBoard(boardId);

        if(BoardFromDb){ 
          return res.status(200).json({
            ok:true,
            user:BoardFromDb,
            message:"Board Eliminado"
          });
        }else{
          return res.status(404).json({
            ok:true,
            message: "no se encontro la tabla"
          });
        }

    }catch(error){
      return res.status(500).json({
        ok: false,
        msg: "Error de Servidor",
        data: error,
      });
    }
  }

}

export const Board_Service = new BoardService();