import { createClient } from "@libsql/client/.";


const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

import * as userSeed from "./users.mjs";

export const runSeed = async (seed) => {
  const parsedQueries = seed.entries.map((entry) => ({
    sql: seed.statement,
    args: entry,
  }))

  const result = await client.batch(parsedQueries, "write");

  return result;
}

runSeed(userSeed);