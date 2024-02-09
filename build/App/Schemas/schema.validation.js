"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidation = void 0;
const zod_1 = require("zod");
const schemaValidation = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync(req.body);
        next();
        return;
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json({
                ok: false,
                message: error.errors,
            });
        }
        console.error("Error during schema validation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.schemaValidation = schemaValidation;
