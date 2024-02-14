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

  const sql = `
    SELECT *, photos.url
    FROM albums
    JOIN photos ON albums.cover_id = photos.id
    WHERE albums.user_id = ?
  `

  const result = await client.execute({ 
    sql: sql, 
    args: [userId],
  });

  return result.rows;
}

export const getPhotosByAlbumId = async (albumId) => {
const sql = `
  SELECT *, photos.url
  FROM albums
  JOIN photos ON albums.id = photos.album_id
  WHERE albums.id = ?
`

const result = await client.execute({ 
  sql: sql, 
  args: [albumId],
});

return result.rows;
}

export const getAlbumTitleById = async (albumId) => {
  const sql = `
    SELECT *
    FROM albums
    WHERE albums.id = ?
  `
  
  const result = await client.execute({ 
    sql: sql, 
    args: [albumId],
  });
  
  return result.rows[0].title;
  }