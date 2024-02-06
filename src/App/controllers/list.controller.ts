import { Request, Response } from "express";
import { List_Service } from "../services/list.service";
export class ListController{
    async getAllBoardForUser(req:Request, res:Response){
        return await List_Service.getListsByBoard(req, res);
    }

    async updateBoard(req:Request, res:Response){
        return await List_Service.updateList(req,res);
    }

    async deleteBoard(req:Request, res:Response){
        return await List_Service.deleteList(req,res);
    }

    async createBoard(req:Request, res:Response){
        return await List_Service.createList(req, res);   
    }
}


export const List_Controller = new ListController();

