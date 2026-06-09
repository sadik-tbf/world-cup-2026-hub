import Link from 'next/link';
import type { Fixture } from '@/types';

export function FeaturedMatches({ fixtures }: { fixtures: Fixture[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {fixtures.map((fixture) => (
        <Link key={fixture.id} href={`/fixtures/${fixture.id}`} className="section-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">{fixture.stage}</span>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">{fixture.kickoff}</span>
          </div>
          <div className="mt-6 grid items-center gap-3 sm:grid-cols-[1fr_1fr] sm:items-end">
            <div className="space-y-1 text-left">
              <p className="text-2xl font-semibold text-white">{fixture.homeTeam}</p>
              <p className="text-sm text-slate-400">{fixture.stadium}</p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-2xl font-semibold text-white">{fixture.awayTeam}</p>
              <p className="text-sm text-slate-400">{fixture.city}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
