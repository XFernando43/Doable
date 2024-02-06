import { Request, Response } from "express";
import { Board_Service } from "../services/board.service";
export class BoardController{
    async getAllBoardForUser(req:Request, res:Response){
        return await Board_Service.getBoardsById(req, res);
    }

    async updateBoard(req:Request, res:Response){
        return await Board_Service.updateBoard(req,res);
    }

    async deleteBoard(req:Request, res:Response){
        return await Board_Service.deleteBoard(req,res);
    }

    async createBoard(req:Request, res:Response){
        return await Board_Service.createBoard(req, res);   
    }
}


export const Board_Controller = new BoardController();

