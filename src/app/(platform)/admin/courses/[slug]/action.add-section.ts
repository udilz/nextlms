"use server"

import { CourseServices } from "@/services/course.services"
import { revalidatePath } from "next/cache"

export async function addSectionAction(formData: FormData) {
  const courseId = formData.get("courseId") as string

  // add section to course
  await CourseServices.createSection(courseId)


  revalidatePath("/admin/courses/[slug]", "page")
}
