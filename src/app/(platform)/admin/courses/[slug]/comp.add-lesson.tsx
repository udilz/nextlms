import { Button } from "@/components/ui/button";
import React from "react";
import { addLessonAction } from "./action.add-lesson";

export const AddLessonBtn = ({sectionId} : {sectionId: string}) => {
  return (
    <form action={addLessonAction}>
      <input name="sectionId" type="hidden" value={sectionId} />
      <Button size="sm" variant="primary" className="w-fit">
        Add lesson
      </Button>
    </form>
  );
};
