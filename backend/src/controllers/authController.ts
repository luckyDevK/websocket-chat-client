import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";

import { ISignIn, ISignUp } from "../../../packages/types/auth";
import User from "../../src/models/users";

// ✅ utils
function isEmpty(input: string) {
  return input.trim().length === 0;
}

function isNotValidUsername(username: string) {
  return isEmpty(username) || username.length < 3;
}

function isNotValidPassword(password: string) {
  return (
    isEmpty(password) ||
    password.length < 5 ||
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(password)
  );
}

// ✅ signup
export const signupController = async (
  req: Request<{}, {}, ISignUp>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, confirmPw, password } = req.body;

    if (isNotValidUsername(username)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username" });
    }

    if (isNotValidPassword(password)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }

    if (isEmpty(confirmPw) || password !== confirmPw) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    // prevent duplicate usernames
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Username already exists" });
    }

    const hashedPw = await bcrypt.hash(password, 12);
    await User.create({ username, password: hashedPw });

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    next(err);
  }
};

// ✅ signin
export const signinController = async (
  req: Request<{}, {}, ISignIn>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, username } = req.body;

    if (isNotValidUsername(username) || isNotValidPassword(password)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;

    const accessToken = jwt.sign(
      { username, id: user._id },
      accessTokenSecret,
      {
        expiresIn: "20m",
      }
    );

    const refreshToken = jwt.sign({ id: user._id }, refreshTokenSecret, {
      expiresIn: "8d",
    });

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 8 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Successfully signed in", accessToken });
  } catch (err) {
    next(err);
  }
};

// ✅ refresh token
export const refreshTokenController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies?.jwt;
    if (!refreshToken) return res.status(401).json({ message: "Unauthorized" });

    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;

    jwt.verify(
      refreshToken,
      refreshTokenSecret,
      async (err: VerifyErrors, decoded: JwtPayload) => {
        if (err || typeof decoded !== "object") {
          return res.status(403).json({ message: "Forbidden" });
        }

        const { id } = decoded;
        const user = await User.findById(id);

        if (!user) return res.status(401).json({ message: "Unauthorized" });

        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;
        const accessToken = jwt.sign(
          { id: user._id, username: user.username },
          accessTokenSecret,
          { expiresIn: "20m" }
        );

        res.json({ accessToken });
      }
    );
  } catch (err) {
    next(err);
  }
};

// ✅ logout
export const logoutController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.cookies?.jwt) return res.sendStatus(204); // no content

    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    res.json({ message: "Cookie cleared" });
  } catch (err) {
    next(err);
  }
};
