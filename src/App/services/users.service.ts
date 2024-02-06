import type { User, UserData } from "../../Domain/models/user.model";
import { Request, Response } from "express";
import { Login, UpdateUsernameById, deleteUsername, getAllUsers, getUserById, registerUser } from "../data/users.data";
import type { IUserUpdateDto } from "../../Domain/Interfaces/IUser.interface";

class UserService {
  
  async getUsers(req:Request, res:Response): Promise<User[]|any> {
    try{
      const users = await getAllUsers();
        return res.status(200).json({
            ok:true,
            users:users
        });
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error de Servidor",
            data: error,
        });
    }
  }

  async getUserById(req:Request, res:Response): Promise<User|any> {
    // try{
      const userId = req.userId;
      console.log("--> midelware",userId);
      const user = await getUserById(userId);
      return res.status(200).json({
          ok:true,
          me:user
      });
    // }catch(error){
    //   return res.status(500).json({
    //       ok: false,
    //       msg: "Error de Servidor",
    //       data: error,
    //   });
    // }
  }

  async createUser(req:Request, res:Response) {
    try{
        const username = req.body.username;
        const password = req.body.password;
        const role = req.body.role;
        const userData: UserData = {
            name: "No ingresado",
            mail:'',
            username: username,
            password: password,
            role: role||'user',
        };
        const user = await registerUser(userData);
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

  async updateUser(req:Request, res:Response){
    try{
      const user_id = req.userId;
      
      const userFromDb = await getUserById(user_id);
      const userId = userFromDb.user_id;
      
      if(!req.body.mail || !req.body.name || !req.body.username|| !req.body.password){
          return res.status(200).json({
            ok:false,
            me:"Campos faltantes"
          });
      }

      const userData:IUserUpdateDto = {
        name:req.body.name,
        mail:req.body.mail,
        username:req.body.username,
        password:req.body.password
      }


      if(Number(userId) === Number(user_id)){
          await UpdateUsernameById(user_id,userData);
          return res.status(200).json({
            ok:true,
            me:userData
          });
      }else{
        return{
            ok:false,
            message:"this post no pertenece al usuario",
        }
      }
    }catch(error){
      return {
        ok: false,
        message: "problemas con el servidor",
      };
    }
  }

  async deleteMe(req:Request, res:Response){
    try{
      const userId = req.userId;
      const userFromDb = await deleteUsername(userId);

      console.log(userFromDb);

      return res.status(200).json({
        ok:true,
        user:userFromDb,
        me:"Usuario Eliminado"
      });

    }catch(error){
      return res.status(500).json({
        ok: false,
        msg: "Error de Servidor",
        data: error,
      });
    }
  }

  async signIn(req:Request, res:Response) {    
    try{
      const request: any = {
          username: req.body.username,
          password: req.body.password,
        };
        const response = await Login(request);
        if (response.ok) {
          return res.status(200).json({
            message: "Login",
            data: response,
          });
        } else {
          return res
            .status(401)
            .json({ message: "Nose pudo ingresar", data: response });
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

export const User_Service = new UserService();