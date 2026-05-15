import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: "https://cozy-florentine-857e6c.netlify.app",
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true
  });
});

app.get("/env-check", (req, res) => {
  res.json({
    success: true
  });
});

app.post("/check-post", (req, res) => {
  res.json({
    body: req.body
  });
});

export default app;