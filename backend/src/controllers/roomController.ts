import { NextFunction, Request, Response } from "express";
import User from "src/models/users";

export const getRoom = (
  req: Request<{}, {}, { id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  const user = User.findById(id);

  if (!user) {
    res.json({ success: false, message: "user doesnt exist" });
  }
};
