import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cookieParser());
app.use(json());
app.use(urlencoded());

app.get("/", (req, res) => {
  return res.json({ welcome: "/" });
});

app.use("/auth", authRoutes);

export default app;
