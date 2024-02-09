"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.deleteUsername = exports.getUserByName = exports.getUserById = exports.getAllUsers = exports.UpdateUsernameById = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = require("bcrypt");
const db_1 = require("../../db");
require("dotenv/config");
const jwtSecret = process.env["JWTSECRET"];
async function registerUser(data) {
    const existingUser = await getUserByName(data.username);
    if (existingUser) {
        return "Usuarname ya utilizado";
    }
    else {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const _query = "INSERT INTO users(name,username,password,role) VALUES($1,$2,$3,$4) RETURNING *";
        const queryParams = [data.name, data.username, hashedPassword, data.role];
        const result = await (0, db_1.query)(_query, queryParams);
        return result.rows[0];
    }
}
exports.registerUser = registerUser;
async function UpdateUsernameById(id, data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const _query = `
      UPDATE users 
      SET name = $1, username = $2, password = $3, mail = $4
      WHERE user_id = $5
      RETURNING *;
  
      `;
    const queryParams = [data.name, data.username, hashedPassword, data.mail, id];
    const result = await (0, db_1.query)(_query, queryParams);
    return result.rows[0];
}
exports.UpdateUsernameById = UpdateUsernameById;
async function getAllUsers() {
    const _query = "Select* from Users";
    const result = await (0, db_1.query)(_query);
    return result.rows;
}
exports.getAllUsers = getAllUsers;
async function getUserById(id) {
    let _query = `Select* From users where user_id = ${id}`;
    const result = await (0, db_1.query)(_query);
    return result.rows[0];
}
exports.getUserById = getUserById;
async function getUserByName(username) {
    const consult = `SELECT * FROM users WHERE username = $1`;
    const result = await (0, db_1.query)(consult, [username]);
    return result.rows[0];
}
exports.getUserByName = getUserByName;
async function deleteUsername(userId) {
    const consult = `Delete from users where user_id = ${userId} RETURNING *;`;
    const result = await (0, db_1.query)(consult);
    return result.rows[0];
}
exports.deleteUsername = deleteUsername;
async function Login(data) {
    const userFromBb = await getUserByName(data.username);
    if (userFromBb === undefined) {
        return {
            ok: false,
            message: "Usuario no encontrado",
        };
    }
    const checkPassword = await bcrypt.compare(data.password, userFromBb.password);
    console.log("-->: ", userFromBb);
    console.log("-->: ", userFromBb.user_id);
    console.log("-->: ", userFromBb.role);
    const payload = {
        userId: userFromBb.user_id,
        userRole: userFromBb.role,
    };
    const token = jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: "50m" });
    if (checkPassword) {
        const data = {
            ok: true,
            user: userFromBb,
            token: token,
        };
        return data;
    }
    else {
        return {
            ok: false,
            message: "Error",
        };
    }
}
exports.Login = Login;
