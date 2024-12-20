import React from "react";

import { Menu } from "@/components/menu";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-screen flex">
      <aside className="w-[260px] bg-white border-r border-slate-200 text-slate-950 flex flex-col gap-6 p-4">
        <div className="font-semibold text-lg tracking-tight text-black ml-3 mt-2">nextlms.</div>
        <section>
          <h5 className="text-xs font-medium ml-3 text-slate-500">Platform Menu</h5>
          <Menu label="My Courses" href="/dashboard/my-courses" />
          <Menu label="Certificates" href="/dashboard/certificates" />
          <Menu label="My Courses" href="/dashboard/orders" />
        </section>
        <section>
          <h5 className="ml-3 text-xs font-medium text-slate-500">Admin Menu</h5>
          <Menu label="Analytics" href="/admin/analytics" />
          <Menu label="Flash sale" href="/admin/flash-sale" />
          <Menu label="Courses" href="/admin/courses" />
          <Menu label="Certificates Approval" href="/admin/certificates" />
          <Menu label="Users" href="/admin/users" />
        </section>
      </aside>
      <main className="w-[calc(100%-260px)] bg-white h-screen overflow-y-auto p-8">{children}</main>
    </div>
  );
}
