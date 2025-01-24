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
          <Input name="dealer" placeholder="Dealer" />
          <Input name="merk" placeholder="Merk Kendaraan" />
          <Input name="tipe" placeholder="Tipe Kendaraan" />
          <Input name="warna" placeholder="Warna Kendaraan" />
          <Input name="harga" placeholder="Harga Kendaraan" />
          <Button>Save Draft</Button>
        </form>
      </section>
    </main>
  );
}
