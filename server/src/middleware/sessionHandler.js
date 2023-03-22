import session from "express-session";
import express from "express";
import crypto from "crypto";

const sessionHandler = express.Router();

const details = {
  secure: true,
  saveUnintializedData: true,
  secret: crypto.randomUUID(),
};

sessionHandler.use(session(details));

export default sessionHandler;
