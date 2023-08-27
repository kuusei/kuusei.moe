import type { Metadata } from "next";

import "@/styles/globals.scss";
import "@/styles/markdown.scss";

import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"flex min-h-screen flex-col items-center justify-between p-12 md:p-24"}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
