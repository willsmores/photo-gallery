import { cookies } from "next/headers";

const { createClient } = require("@libsql/client");

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

export const getAlbumsByCookie = async () => {
  const userId = cookies().get("userId")?.value;

  if (!userId) {
    return null;
  }

  const result = await client.execute({ 
    sql: "SELECT * FROM albums WHERE user_id = ?", 
    args: [userId],
  });

  return result.rows;
}

