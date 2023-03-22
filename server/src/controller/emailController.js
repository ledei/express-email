import {
  createUser,
  deleteMail,
  fetchAllUser,
  findUser,
  sendToUser,
} from "../service/emailService.js";
import crypto from "crypto";

async function userContent(req, res) {
  console.log(req.session.email);
  const content = await findUser(req.session.email);
  res.send(content);
}

async function createEmail(req, res) {
  let createUser = req.body;
  const findEmail = await findUser(createUser.email);

  if (findEmail == null) {
    const createEmailAddr = await createUser(createUser);
    if (res.status(201)) {
      res.send(createEmailAddr);
    } else {
      res.send("error");
    }
  } else {
    res.status(400);
    res.send("This email already exist");
  }
}

async function sendEmail(req, res) {
  let mailData = {
    from: req.session.email,
    to: req.body.to,
    subject: req.body.subject,
    msg: req.body.msg,
  };
  const findEmail = await findUser(mailData.to);

  if (findEmail == null) {
    res.status(404);
    res.send("error 404");
  } else if (findEmail.email == mailData.to) {
    mailData.id = crypto.randomInt(10e8, 10e9);
    mailData.date = new Date();
    const sent = sendToUser(mailData);
    res.send(sent);
  } else {
    res.status(400);
    res.send("error 400");
  }
}

async function deleteEmail(req, res) {
  let mailId = {
    email: req.session.email,
    id: req.body.id,
  };
  const deletedMail = await deleteMail(mailId);
  res.send(deletedMail);
}

async function fetchUsers(req, res) {
  console.log(req.session.id);
  console.log(req.session.email);
  const users = await fetchAllUser();
  res.send(users);
}

export default { createEmail, sendEmail, deleteEmail, fetchUsers, userContent };
