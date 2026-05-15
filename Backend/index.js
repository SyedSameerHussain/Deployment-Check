import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: "https://cozy-florentine-857e6c.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // IMPORTANT for POST preflight

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/env-check", (req, res) => {
  res.json({ success: true });
});

app.post("/check-post", (req, res) => {
  res.json({ body: req.body });
});

export default app;