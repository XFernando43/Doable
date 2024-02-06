import { Request, Response } from "express";
import type { List } from "../../Domain/models/list.model";
import { getAllBoardByUser } from "../data/board.data";
import type { IListCreateDto, IListUpdateDto } from "../../Domain/Interfaces/IList.interface";
import { createList, deleteList, updateList } from "../data/list.data";

class ListService {
  
  async getListsByBoard(req:Request, res:Response): Promise<List[] | any> {
    try{
      const userId = req.userId;
      const lists = await getAllBoardByUser(userId);
      return res.status(200).json({
          ok:true,
          lists:lists
      });
    }catch(error){
      return res.status(500).json({
          ok: false,
          msg: "Error de Servidor",
          data: error,
      });
    }
  }

  async createList(req:Request, res:Response) {
    try{
        const list_name = req.body.list_name;
        const board_Id = req.params["id"]; 
        const listData: IListCreateDto = {
            list_name : list_name,
            board_id: Number(board_Id),
        };
        const user = await createList(listData);
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

  async updateList(req:Request, res:Response){
    try{
        const list_name = req.body.list_name;
        const order = req.body.order;
        const board_Id = Number(req.params["id"]); 
        

        if(!req.body.name || !req.body.color){
            return res.status(200).json({
                ok:false,
                me:"Campos faltantes"
            });
        } 

        const boardData: IListUpdateDto = {
            list_name:list_name,
            orderList:order,
            board_id: board_Id,
        };

        await updateList(boardData);
        return res.status(200).json({
            ok:true,
            me:boardData
        });
      
    }catch(error){
        return {
            ok: false,
            message: "problemas con el servidor",
        };
    }
  }

  async deleteList(req:Request, res:Response){
    try{
        const listId = req.params["id"];
        const listFromDb = await deleteList(listId);

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

export const List_Service = new ListService();