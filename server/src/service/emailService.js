import { fetchCollection } from "../mongodb/emailClientMongoDB.js";

export function createUser(quary) {
  return fetchCollection("user").insertOne(quary);
}

export function fetchAllUser() {
  return fetchCollection("user").find().toArray();
}

export function sendToUser(data) {
  const sendTo = { email: data.to };
  const dataTo = { $push: { incoming: data } };
  const sendFrom = { email: data.from };
  const dataFrom = { $push: { sent: data } };
  function insertMail() {
    fetchCollection("user").updateOne(sendTo, dataTo, { upsert: true });
    fetchCollection("user").updateOne(sendFrom, dataFrom, { upsert: true });
  }
  return insertMail();
}

export function deleteMail(dataMail) {
  const critera = { email: dataMail.email };
  const data = { $pull: { incoming: { id: dataMail.id } } };
  return fetchCollection("user").updateOne(critera, data, { upsert: true });
}

export function findUser(user) {
  return fetchCollection("user").findOne({ email: user });
}
