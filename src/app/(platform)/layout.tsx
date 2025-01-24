import React from "react";

import { Menu } from "@/components/menu";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-screen flex">
      <aside className="w-[260px] bg-white border-r border-slate-200 text-slate-950 flex flex-col gap-6 p-4">
        <div className="font-semibold text-lg tracking-tight text-black ml-3 mt-2">nextupload.</div>
        <section>
          <h5 className="text-xs font-medium ml-3 text-slate-500">Platform Menu</h5>
          <Menu label="Upload Data Konsumen" href="/admin/courses/new" />
          <Menu label="Upload Data Kendaraan" href="/admin/kendaraan/new" />
          <Menu label="Upload Data Pinjaman" href="/admin/pinjaman/new" />
        </section>
      </aside>
      <main className="w-[calc(100%-260px)] bg-white h-screen overflow-y-auto p-8">{children}</main>
    </div>
  );
}
