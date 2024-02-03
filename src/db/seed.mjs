import { createClient } from "@libsql/client";
import "dotenv/config";

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

const runAllSeeds = async () => {
  try {
    await runSeed(userSeed);
    console.log("SEED OK");
  } catch (err) {
    console.log("SEED FAILED", err);
  }
}

runAllSeeds();