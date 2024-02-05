import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

// Create users db schema
const schema = `
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS albums;

  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
  );

  CREATE TABLE albums (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE photos (
    id INTEGER PRIMARY KEY,
    album_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    url TEXT NOT NULL,
    title TEXT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES albums(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`;

export const runSchema = async () => {
  const result = await client.executeMultiple(schema);
  return result;
};

runSchema().then(() => console.log("SUCCESS")).catch(() => console.log("WHOOPS"));