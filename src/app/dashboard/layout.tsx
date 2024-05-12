import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return;
  <section className="space-y-4">
    <nav className="flex  items-center justify-between">
      <link className="underline" href="/dashboard/about" />
      <link className="underline" href="/dashboard/about" />
    </nav>
    {children}
  </section>;
}
