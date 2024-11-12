"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { CourseServices } from "@/services/course.services";

const courseSchema = z.object({
  title: z.string().min(8, "Title must be at least 8 chars"),
  description: z.string().min(1, "Description must be at least 1 chars"),
  price: z.number().min(1, "Price must be at least 1"),
  coverImage: z.instanceof(File),
});

export async function createCourseAction(_: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const coverImage = formData.get("coverImage");

  const validation = courseSchema.safeParse({ title, description, price, coverImage });

  if (!validation.success) {
    return {
      status: "error",
      errors: validation.error.flatten().fieldErrors,
      data: { title, description, price, coverImage },
    };
  }

  const newCourse = await CourseServices.createCourse({
    title: validation.data.title,
    description: validation.data.description,
    price: validation.data.price,
    coverImage: validation.data.coverImage.name,
  });

  if (!newCourse) {
    return {
      status: "error",
      message: "Course not created",
    };
  }
  // Implement upload file

  redirect("/admin/courses");
}
