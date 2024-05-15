import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return;
  <section className="space-y-4">
    <nav className="flex  items-center justify-between">
      <Link className="underline" href="/dashboard/about" about </Link>
      <Link className="underline" href="/dashboard/ticket" buy ticket</Link>
    </nav>
    {children}
  </section>;
}
