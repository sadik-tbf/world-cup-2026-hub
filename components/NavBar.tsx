import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500 text-2xl shadow-glow">WC</span>
          <span>World Cup 2026 Hub</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          <Link href="/teams" className="transition hover:text-white">Teams</Link>
          <Link href="/players" className="transition hover:text-white">Players</Link>
          <Link href="/fixtures" className="transition hover:text-white">Fixtures</Link>
          <Link href="/standings" className="transition hover:text-white">Standings</Link>
          <Link href="/predictions" className="rounded-full bg-cyan-500 px-4 py-2 text-slate-950 transition hover:bg-cyan-400">Predict</Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/account" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-white">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
