"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminClient = exports.query = exports.pool = void 0;
const pg_1 = require("pg");
require("dotenv/config");
exports.pool = new pg_1.Pool({
    host: process.env["HOST"],
    port: Number(process.env["DBPORT"]),
    database: process.env["DATABASE"],
    user: process.env["USER"],
    password: process.env["PASSWORD"],
});
const query = async (text, params) => {
    // const initTime = Date.now();
    // console.log(text, params);
    const results = await exports.pool.query(text, params);
    // const endTime = Date.now();
    // console.log("Query time: ", endTime - initTime, "ms");
    return results;
};
exports.query = query;
exports.adminClient = new pg_1.Client({
    host: "localhost",
    port: 5432,
    database: "Codeable",
    user: "postgres",
    password: "123456789",
});
