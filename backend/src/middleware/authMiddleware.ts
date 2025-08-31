import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";

interface IReq extends Request {
  username: string;
  id: string;
}

export const authMiddleware = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorization" });
    return;
  }

  const token = authHeader.split(" ")[1];
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;

  if (!accessTokenSecret) {
    throw new Error(
      "ACCESS_TOKEN_SECRET is not defined in environment variables"
    );
  }

  jwt.verify(token, accessTokenSecret, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    if (typeof decoded === "object") {
      req.username = decoded.username;
      req.id = decoded.id;
      next();
    } else {
      res.status(403).json({ message: "Invalid token structure" });
    }
  });
};
