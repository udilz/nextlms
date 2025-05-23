import React from "react";

import { Menu } from "@/components/ui/menu";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-screen">
      <aside className="flex w-[260px] flex-col gap-6 border-r border-slate-200 bg-white p-4 text-slate-950">
        <div className="mt-2 ml-3 text-lg font-semibold tracking-tight text-black">nextlms.</div>
        <section>
          <h5 className="ml-3 text-xs font-medium text-slate-500">Platform Menu</h5>
          <Menu label="My Courses" href="/dashboard/my-courses" />
          <Menu label="Certificates" href="/dashboard/certificates" />
          <Menu label="Orders" href="/dashboard/orders" />
        </section>
        <section>
          <h5 className="ml-3 text-xs font-medium text-slate-500">Admin Menu</h5>
          <Menu label="Analytics" href="/admin/analytics" />
          <Menu label="Flash Sale" href="/admin/flash-sale" />
          <Menu label="Courses" href="/admin/courses" />
          <Menu label="Certifitaces Approval" href="/admin/certificates" />
          <Menu label="Users" href="/admin/users" />
        </section>
      </aside>
      <main className="h-screen w-[calc(100%-260px)] overflow-y-auto bg-white p-8">{children}</main>
    </div>
  );
}
