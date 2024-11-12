"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

import { Button } from "@/components/button";
import { FileInput } from "@/components/file-input";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";

export default function Page() {
  const [preview, setPreview] = useState("");

  function handleCreatePreview(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const file = event.target.files[0];
    setPreview(URL.createObjectURL(file));
  }
  return (
    <main className="m-auto max-w-lg space-y-6">
      <section>
        <h3>Create new courses</h3>
      </section>
      <section>
        <form className="space-y-2">
          {preview ? <Image src={preview} width={800} height={300} alt="Course cover" className="rounded-lg" /> : null}
          <FileInput name="coverImage" placeholder="Choose the course cover" onChange={handleCreatePreview} />
          <Input name="title" placeholder="Course title" />
          <Textarea name="description" placeholder="Course description" />
          <Input name="price" placeholder="Course prices" />
          <Button>Save Draft</Button>
        </form>
      </section>
    </main>
  );
}
