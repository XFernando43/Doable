"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateTable = void 0;
const _1 = require(".");
const truncateTable = async (tableName) => {
    await (0, _1.query)(`TRUNCATE TABLE ${tableName} RESTART IDENTITY CASCADE`);
};
exports.truncateTable = truncateTable;
