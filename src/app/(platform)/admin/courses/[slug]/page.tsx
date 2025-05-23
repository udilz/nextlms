import { redirect } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { CourseServices } from "@/services/course.services";
import { AddSectionBtn } from "./comp.add-section";
import { Card } from "@/components/ui/card";
import { AddLessonBtn } from "./comp.add-lesson";
import { SectionCard } from "./comp.section-card";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const course = await CourseServices.getCourseDetail(params.slug);

  if (!course) {
    redirect("/admin/courses");
  }

  console.log(course);
  return (
    <main className="m-auto max-w-2xl space-y-8">
      <section className="space-y-2">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <Button size="sm" className="w-fit">
          Publish Course
        </Button>
      </section>
      <section className="space-y-4">
        <AddSectionBtn courseId={course.id} />
        <section className="space-y-2">
          {course.Section.map((section) => {
            return (
              <SectionCard key={section.id} section={section}/>
            );
          })}
        </section>
      </section>
    </main>
  );
}
