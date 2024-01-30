"use server"

import { redirect } from "next/dist/server/api-utils"

export const authenticateUser = (formData) => {
  const email = formData.get("email");
  
  if (email === "scwillsmore@gmail.com") {
    return redirect("/albums");
  } else {
    return redirect("/");
  }
};