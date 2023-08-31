import type { Metadata } from "next";

import "@/styles/globals.scss";
import "@/styles/markdown.scss";

import BackToTop from "@/components/back-to-top";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Kuusei.moe - Blog",
  description: "一个小前端的乱七八糟记录博客",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"flex min-h-screen flex-col items-center p-12 md:p-24 md:pt-12"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header className={"sticky pb-12"}></Header>
          {children}
          <TailwindIndicator />
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
