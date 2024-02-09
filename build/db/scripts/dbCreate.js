"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const __1 = require("..");
const dbName = process.env["DATABASE"];
__1.adminClient.connect();
__1.adminClient.query(`CREATE DATABASE "${dbName}"`, (err) => {
    if (err) {
        console.error("Error al crear la base de datos", err.stack);
    }
    else {
        console.log(`Base de datos "${dbName}" creada exitosamente`);
    }
    __1.adminClient.end();
});
