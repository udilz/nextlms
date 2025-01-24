"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Page() {
  return (
    <main className="m-auto max-w-lg space-y-6">
      <section>
        <h3>Create new Data</h3>
      </section>
      <section>
        <form className="space-y-2">
          <Input name="nama" placeholder="Nama" />
          <Input name="nik" placeholder="NIK" />
          <Input name="tanggal_lahir" placeholder="Tanggal Lahir" />
          <Input name="status" placeholder="Status Perkawinan" />
          <Input name="data_pasangan" placeholder="Data Pasangan" />
          <Button>Save Draft</Button>
        </form>
      </section>
    </main>
  );
}
