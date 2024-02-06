import jwt from 'jsonwebtoken';
const bcrypt = require("bcrypt");
import { query } from "../../db";
import type { User, UserData } from "../../Domain/models/user.model";
import type { IUserLoginDto, IUserUpdateDto } from "../../Domain/Interfaces/IUser.interface";

const jwtSecret = "TUNOMETECRABASARAMBINCHE2014";

export async function registerUser(data: UserData):Promise<User>{
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const _query = "INSERT INTO users(name,username,password) VALUES($1,$2,$3) RETURNING *"
    const queryParams = [ data.name,data.username,hashedPassword];
    
    const result = await query(_query,queryParams);
    return result.rows[0];
}

export async function UpdateUsernameById(id:string,data:IUserUpdateDto): Promise<User>{

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const _query = `
      UPDATE users 
      SET name = $1, username = $2, password = $3
      WHERE id = $4
      RETURNING *;
  
      `;  
  const queryParams = [data.name, data.username, hashedPassword, id];
  const result = await query(_query, queryParams);
  return result.rows[0];
}

export async function getAllUsers():Promise<User[]>{
    const _query = "Select* from Users"
    const result = await query(_query);
    return result.rows;
}

export async function getUserById(id:string):Promise<User>{
  let _query = `Select* From users where users.id = ${id}`;
  const result = await query(_query);
  return result.rows[0];
}

export async function getUserByName(username: string): Promise<User> {
    const consult = `SELECT * FROM users WHERE username = $1`;
    const result = await query(consult, [username]);
    return result.rows[0];
}

export async function deleteUsername(userId:string):Promise<User>{
  const consult = `Delete from users where id = ${userId} RETURNING *;`;
    const result = await query(consult);
    return result.rows[0];
}

export async function Login(data:IUserLoginDto){
    const userFromBb = await getUserByName(data.username);

    console.log("Aqui ",userFromBb);
    
    if(userFromBb === undefined){
      return {
        ok: false,
        message: "Usuario no encontrado",
      };
    }

    const checkPassword = await bcrypt.compare(
      data.password,
      userFromBb.password
    );
    
    console.log("usuario de DB: ",userFromBb);
    console.log("ID ",userFromBb.userId);
    
    const payload = {
      userId: userFromBb.userId,
    };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "50m" });

    if (checkPassword) {
      const data = {
        ok: true,
        user: userFromBb,
        token: token,
      };
      return data;
    } else {
      return {
        ok: false,
        message: "Error",
      };
    }
}
