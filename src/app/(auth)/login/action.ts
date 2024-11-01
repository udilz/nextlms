"use server";

import bcrypt from "bcrypt";
import z from "zod";

import { UserServices } from "@/services/user.services";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 chars"),
});

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validation = loginSchema.safeParse({
    email,
    password,
  });
  if (!validation.success) {
    return {
      status: "error",
      errors: validation.error.flatten().fieldErrors,
      data: {
        email,
        password,
      },
    };
  }
  const user = await UserServices.findUser(email);

  if (!user) {
    return {
      status: "error",
      message: "User not found",
      data: {
        email,
        password,
      },
    };
  }
  if (!user.isVerified) {
    return {
      status: "error",
      message: "Please verify your account",
    };
  }
  if (!user.password) {
    return {
      status: "error",
      message: "You might create your account with google, please try continue with google",
    };
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return {
      status: "error",
      message: "Invalid Credentials",
      data: {
        email,
        password,
      },
    };
  }

  // JWT TOKEN
}
