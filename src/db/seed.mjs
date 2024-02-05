import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

import * as userSeed from "./users.mjs";
import * as albumSeed from "./albums.mjs";
import * as photoSeed from "./photos.mjs";

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
    console.log("USER SEED ✅");
  } catch (err) {
    console.log("USER SEED ⛔", err);
  }
  try {
    await runSeed(albumSeed);
    console.log("ALBUM SEED ✅");
  } catch (err) {
    console.log("ALBUM SEED ⛔", err);
  }
  try {
    await runSeed(photoSeed);
    console.log("PHOTO SEED ✅");
  } catch (err) {
    console.log("PHOTO SEED ⛔", err);
  }
}

runAllSeeds();