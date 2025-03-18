/* eslint-disable @typescript-eslint/no-unused-vars */

"use server";
import bcrypt from "bcryptjs";
import z from "zod";

import { UserServices } from "@/services/user.services";

const registerSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function registerAction(prevData: unknown, formData: FormData) {
  const name = formData.get("name") as string; // nullable by default
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const inputValidation = registerSchema.safeParse({ name, email, password });
  if (!inputValidation.success) {
    return {
      status: "error",
      errors: inputValidation.error.flatten().fieldErrors,
      data: {
        name,
        email,
        password,
      },
    };
  }

  // push to db
  try {
    const hashedPassword = await bcrypt.hash(password, 13)
    await UserServices.createUser({
      name,
      email,
      password : hashedPassword,
    });
    return {
      status: "success",
      message: "Register Success",
    };
  } catch (error) {
    return {
      status: "failed",
      message: "Register failed",
    };
  }
}
