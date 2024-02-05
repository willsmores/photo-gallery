"use server"

import { createClient } from "@libsql/client";
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

  return redirect("/albums");
};