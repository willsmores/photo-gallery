"use server";

import { cookies } from "next/headers";
const { createClient } = require("@libsql/client")

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

export const getAlbumsByCookie = async () => {
  const userId = Number(cookies().get("userId")?.value);

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

  const userId = Number(cookies().get("userId")?.value);

  const sql = `
    SELECT *
    FROM photos
    JOIN albums ON albums.id = photos.album_id
    WHERE album_id = ?
  `;

  const args = [albumId];

  const result = await client.execute({ 
    sql, 
    args
  });

  if (result.rows[0].user_id !== userId) {
    return redirect("/");
  }

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