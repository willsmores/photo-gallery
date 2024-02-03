import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

// Create users db schema
const schema = `
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
  );
`;

export const runSchema = async () => {
  const result = client.executeMultiple(schema);
  return result;
};

runSchema().then(() => console.log("SUCCESS")).catch(() => console.log("WHOOPS"));