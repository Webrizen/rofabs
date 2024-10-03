import { DM_Sans } from "next/font/google";
import "./globals.css";
import UIProvider from "@/components/providers/ui-provider";

export const metadata = {
  title: "Rofabs For Operations",
  description: "created with love and hate by developers at Rofabs!",
};

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <UIProvider>{children}
        </UIProvider>
      </body>
    </html>
  );
}
