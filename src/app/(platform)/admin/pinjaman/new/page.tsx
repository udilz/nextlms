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
          <Input name="asuransi" placeholder="Asuransi" />
          <Input name="payment" placeholder="Down Payment" />
          <Input name="lama_kredit" placeholder="Lama Kredit" />
          <Input name="angsuran" placeholder="Angsuran" />
          <Button>Save Draft</Button>
        </form>
      </section>
    </main>
  );
}
