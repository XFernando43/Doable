"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Service = void 0;
const users_data_1 = require("../data/users.data");
class UserService {
    async getUsers(req, res) {
        try {
            const users = await (0, users_data_1.getAllUsers)();
            return res.status(200).json({
                ok: true,
                users: users
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
    async getUserById(req, res) {
        try {
            const userId = req.userId;
            console.log("--> midelware", userId);
            const user = await (0, users_data_1.getUserById)(userId);
            return res.status(200).json({
                ok: true,
                me: user
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
    async createUser(req, res) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const role = req.body.role;
            const userData = {
                name: "No ingresado",
                mail: '',
                username: username,
                password: password,
                role: role || 'user',
            };
            const user = await (0, users_data_1.registerUser)(userData);
            if (user === 'Usuarname ya utilizado') {
                return res.status(409).json({
                    ok: true,
                    message: user,
                });
            }
            else {
                return res.status(200).json({
                    ok: true,
                    user: user,
                });
            }
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
    async updateUser(req, res) {
        try {
            const user_id = req.userId;
            const userFromDb = await (0, users_data_1.getUserById)(user_id);
            const userId = userFromDb.user_id;
            if (!req.body.mail || !req.body.name || !req.body.username || !req.body.password) {
                return res.status(200).json({
                    ok: false,
                    me: "Campos faltantes"
                });
            }
            const userData = {
                name: req.body.name,
                mail: req.body.mail,
                username: req.body.username,
                password: req.body.password
            };
            if (Number(userId) === Number(user_id)) {
                await (0, users_data_1.UpdateUsernameById)(user_id, userData);
                return res.status(200).json({
                    ok: true,
                    me: userData
                });
            }
            else {
                return {
                    ok: false,
                    message: "this post no pertenece al usuario",
                };
            }
        }
        catch (error) {
            return {
                ok: false,
                message: "problemas con el servidor",
            };
        }
    }
    async deleteMe(req, res) {
        try {
            const userId = req.userId;
            const userFromDb = await (0, users_data_1.deleteUsername)(userId);
            console.log(userFromDb);
            return res.status(200).json({
                ok: true,
                user: userFromDb,
                me: "Usuario Eliminado"
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
    async signIn(req, res) {
        try {
            const request = {
                username: req.body.username,
                password: req.body.password,
            };
            const response = await (0, users_data_1.Login)(request);
            if (response.ok) {
                return res.status(200).json({
                    message: "Login",
                    data: response,
                });
            }
            else {
                return res
                    .status(401)
                    .json({ message: "Nose pudo ingresar", data: response });
            }
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Error de Servidor",
                data: error,
            });
        }
    }
}
exports.User_Service = new UserService();
