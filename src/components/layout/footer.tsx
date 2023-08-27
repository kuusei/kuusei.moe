import { ThemeToggle } from "../theme-toggle";

export function Footer() {
  return (
    <div className="mt-24 items-center justify-between font-mono text-sm lg:flex">
      <p className="mr-8">
        <span className="pr-2">Powered by</span>
        <code className="font-mono font-bold">Next.js 13 and Vercel</code>
      </p>
      <ThemeToggle />
    </div>
  );
}
