import { MongoClient } from "mongodb";

let db = undefined;
const username = "ledei";
const password = "LxWCnPcYmM8Iq3l6";
const dbName = "email";

export function fetchCollection(name) {
  return connectDB().collection(name);
}

function connectDB() {
  if (db != undefined) {
    return db;
  }

  const url = `mongodb+srv://${username}:${password}@hamsterwar.mxbr3qq.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  db = client.db(dbName);

  return db;
}
