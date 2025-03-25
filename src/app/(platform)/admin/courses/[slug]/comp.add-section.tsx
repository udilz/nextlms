import { Button } from "@/components/ui/button";
import React from "react";
import { addSectionAction } from "./action.add-section";

export const AddSectionBtn = ({courseId}: {courseId: string}) => {
  return (
    <form action={addSectionAction}>
      <input name="courseId" type="hidden" value={courseId} required />
      <Button variant="secondary" size="sm">
        Add Section
      </Button>
    </form>
  );
};
