"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = exports.UserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.UserSchema = zod_1.default.object({
    username: zod_1.default
        .string({ description: "debe ser un string" })
        .min(3, { message: "debe contener almenos 3 caracter" }),
    password: zod_1.default
        .string({
        description: "contraseña es muy corta debe ser mayora 6 caracteres",
    })
        .min(6, { message: "la constraseña debe contener al menos 6 caracteres" }),
});
exports.UpdateUserSchema = zod_1.default.object({
    email: zod_1.default
        .string({ description: "debe ser un string" })
        .min(3, { message: "debe contener almenos 3 caracter" }),
    firstName: zod_1.default
        .string({
        description: "firstName es muy corta debe ser mayora 6 caracteres",
    })
        .min(3, { message: "Es muy corto" }),
    lastName: zod_1.default
        .string({
        description: "lastName es muy corta debe ser mayora 6 caracteres",
    })
        .min(3, { message: "Es muy corto" }),
});
