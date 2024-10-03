import ThemeModeProvider from "@/components/providers/theme-mode-provider";
import Navbar from "@/components/system/Navbar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <ThemeModeProvider>
      <section className="w-full md:mt-0 mt-4">
        <Navbar />
        <div className="container grid md:grid-cols-[.3fr_1fr] grid-cols-1 gap-2">
          <div className="w-full">Sidebar</div>
          <div className="w-full md:p-5">{children}</div>
        </div>
      </section>
    </ThemeModeProvider>
  );
}
