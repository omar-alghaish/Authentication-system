import express from "express";
import {
  forgetPassword,
  login,
  resetPassword,
  singup,
  verifyResetCode,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  signUpValidator,
} from "../utils/validators/authValidator.js";

const router = express.Router();

router.post("/signup", signUpValidator, singup);
router.post("/login", loginValidator, login);
router.post("/forgetPassword", forgetPassword);
router.post("/verifyResetCode", verifyResetCode);
router.put("/resetPassword", resetPassword);

export default router;
