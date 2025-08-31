import { Router } from "express";

import {
  signupController,
  signinController,
  logoutController,
  refreshTokenController,
} from "../../src/controllers/authController";
import { authMiddleware } from "../../src/middleware/authMiddleware";

const router = Router();

router.post("/signin", signinController);
router.post("/signup", signupController);
router.post("/logout", authMiddleware, logoutController);
router.get("/refresh", authMiddleware, refreshTokenController);

export default router;
