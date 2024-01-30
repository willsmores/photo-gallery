"use server"

import { redirect } from "next/navigation";

export const authenticateUser = (formData) => {
  const email = formData.get("email");
  
  if (email === "scwillsmore@gmail.com") {
    redirect("/albums");
  } else {
    redirect("/");
  }
};