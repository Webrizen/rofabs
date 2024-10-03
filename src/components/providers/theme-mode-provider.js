import React from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeModeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
