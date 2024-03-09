import "dotenv/config";

import { Sequelize } from "sequelize-typescript";
import { resolve } from "path";
import { readdirSync } from "fs";

const database = process.env.DB_NAME || "nodejs";
const username = process.env.DB_USER || "root";
const password = process.env.DB_PASS || "root";
const host = process.env.DB_HOST || "localhost";

console.log(database, username, password, host);

readdirSync(resolve(__dirname, "..", "app", "models"))
  .filter((file) => !file.includes("index"))
  .forEach((file) => {
    require(resolve(__dirname, "..", "app", "models", file));
  });



export const DB = new Sequelize({
  database: database,
  username: username,
  password: password,
  host: host,
  dialect: "mysql",
  logging: false,
  models: [resolve(__dirname, "..", "app", "models")],
});

console.log(resolve(__dirname, "..", "app", "models"));

export default DB;
