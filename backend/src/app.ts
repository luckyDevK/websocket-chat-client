import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import authRoutes from "./routes/authRoutes";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cookieParser());
app.use(json());
app.use(urlencoded());

app.get("/", (req, res) => {
  return res.json({ welcome: "/" });
});

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use("/auth", authRoutes);

export default app;
