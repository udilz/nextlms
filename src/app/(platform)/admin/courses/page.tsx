import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { CourseServices } from "@/services/course.services";

export default async function Page() {
  const courses = await CourseServices.getAllCourses();
  return (
    <main className="space-y-8">
      <section className="flex items-center justify-between">
        <h3>Courses</h3>
        <Button className="w-fit" size="sm">
          Create course
        </Button>
      </section>
      <section className="grid grid-cols-4 gap-6">
        {courses.map((course) => {
          return (
            <div key={course.id} className="relative overflow-hidden rounded-xl border bg-white shadow-sm">
              <Image
                src={`${process.env.R2_PUBLIC_URL}/nextlms/courses/${course.id}/${course.coverImage}`}
                alt={course.title}
                width={1000}
                height={500}
              />
              <section className="space-y-3 p-4">
                <div>{course.title}</div>
                <div className="grid grid-cols-2 gap-3">
                  <Button size="sm">Stats</Button>
                  <Link href={`/admin/courses/${course.slug}`}>
                    <Button size="sm">Edit Content</Button>
                  </Link>
                </div>
              </section>
            </div>
          );
        })}
      </section>
    </main>
  );
}
