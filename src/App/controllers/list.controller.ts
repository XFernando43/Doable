import { Request, Response } from "express";
import { List_Service } from "../services/list.service";
export class ListController{
    async getAllListForUser(req:Request, res:Response){
        return await List_Service.getListsByBoard(req, res);
    }

    async updateList(req:Request, res:Response){
        return await List_Service.updateList(req,res);
    }

    async deleteList(req:Request, res:Response){
        return await List_Service.deleteList(req,res);
    }

    async createList(req:Request, res:Response){
        return await List_Service.createList(req, res);   
    }
}


export const List_Controller = new ListController();

