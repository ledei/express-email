import { MongoClient } from "mongodb";

let db = undefined;
const username = "********";
const password = "*********";
const dbName = "email";

export function fetchCollection(name) {
  return connectDB().collection(name);
}

function connectDB() {
  if (db != undefined) {
    return db;
  }

  const url = `************`;
  const client = new MongoClient(url);

  db = client.db(dbName);

  return db;
}
