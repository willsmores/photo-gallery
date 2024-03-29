"use server"

import { createClient } from "@libsql/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

export const authenticateUser = async (formData) => {
  const email = formData.get("email");

  const result = await client.execute({ 
    sql: "SELECT * FROM users WHERE email = ?", 
    args: [email],
  });

  // console.log(result.rows);

  const user = result.rows[0];
  
  if (!user) {
    return redirect("/");
  }

  cookies().set("userId", user.id);
  return redirect("/albums");
};

export const getUserByCookie = async () => {
  const userId = cookies().get("userId")?.value;

  if (!userId) {
    return null;
  }

  const result = await client.execute({ 
    sql: "SELECT * FROM users WHERE id = ?", 
    args: [userId],
  });

  console.log(result.rows[0]);

  return result.rows[0];
}