import { Client, Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
  host: process.env["HOST"],
  port: Number(process.env["DBPORT"]),
  database: process.env["DATABASE"],
  user: process.env["USER"],
  password: process.env["PASSWORD"],
});

export const query = async (
  text: string,
  params?: (string | number | boolean)[]
) => {
  // const initTime = Date.now();
  // console.log(text, params);
  const results = await pool.query(text, params);
  // const endTime = Date.now();
  // console.log("Query time: ", endTime - initTime, "ms");
  return results;
};

export const adminClient = new Client({
  host: "localhost",
  port: 5432,
  database: "Codeable",
  user: "postgres",
  password: "123456789",
});
