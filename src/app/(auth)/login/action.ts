"use server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

import { UserServices } from "@/services/user.services";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validation = loginSchema.safeParse({ email, password });

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
      message: "User Not Found",
      data: {
        email,
        password,
      },
    };
  }
  if (!user.password) {
    return {
      status: "error",
      message: "You might create your account with google, please try to continue login with google",
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
      }
    };
  }

  // GENERATE JWT TOKEN
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatarUrl: user.avatarUrl
  }
  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);

  // SET COOKIE
  (await cookies()).set("token", jwtToken, {
    httpOnly: true,
    path: "/"
  })

  redirect("/my-courses")
}
