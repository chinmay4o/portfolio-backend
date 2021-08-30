import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {routerMail} from "./router/contact.js";
import bodyParser from "body-parser";
// dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
dotenv.config({path: "./config.env"});

app.use(express.json());

app.use("/" , routerMail);

app.listen(process.env.PORT , () => console.log("listening on port " + process.env.PORT));

