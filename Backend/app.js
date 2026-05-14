import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
config({ path: ".env" });

app.use(cors({}));
console.log("hello backend")
app.use((req, res, next) => {
    console.log("REQ:", req.method, req.url, "ORIGIN:", req.headers.origin);
    next();
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/env-check", (req, res) => {
    res.json({
        FRONTEND_URI: process.env.FRONTEND_URI,
        DASHBOARD_URI: process.env.DASHBOARD_URI,
        PRODUCTION_URL: process.env.PRODUCTION_URL,
        PRODUCTION_DASHBOARD_URI:
            process.env.PRODUCTION_DASHBOARD_URI,
    });
});

app.post("/check-post", (req, res) => {
    res.json({
        body: req.body
    });
});


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome"
    })
})
dbConnection();

export default app;
