import { MongoClient } from "mongodb";

let client;

const dbURI = `mongodb+srv://admin:admin@cluster0.orajswt.mongodb.net/database?retryWrites=true&w=majority`;

export const initializeDbConnection = async () => {
  client = await MongoClient.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => {
  const db = client.db("database");
  return db;
};
