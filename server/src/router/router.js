import express from "express";
import authController from "../controller/authController.js";
import emailController from "../controller/emailController.js";
import authFilter from "../filter/authFilter.js";

const router = express.Router();

router.post("/logout", authController.logout);
router.post("/login", authController.login);
router.get("/allUser", emailController.fetchUsers);
router.get("/user", authFilter.auth, emailController.userContent);
router.post("/createUser", emailController.createEmail);
router.post("/send", authFilter.auth, emailController.sendEmail);
router.put("/delete", authFilter.auth, emailController.deleteEmail);

export default router;
