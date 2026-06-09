import { fixtures } from '@/lib/data';

type Props = { params: { matchId: string } };

export function generateStaticParams() {
  return fixtures.map((item) => ({ matchId: item.id }));
}

export default function FixturePage({ params }: Props) {
  const match = fixtures.find((item) => item.id === params.matchId);
  if (!match) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-slate-300">
        <p>Match not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-card overflow-hidden p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Match details</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">{match.homeTeam} vs {match.awayTeam}</h1>
            <p className="mt-4 max-w-2xl text-slate-300">{match.stage} • {match.date} • {match.kickoff}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/90 p-6 text-right text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Venue</p>
            <p className="mt-2 text-2xl font-semibold">{match.stadium}</p>
            <p className="mt-2 text-sm text-slate-400">{match.city}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Status</p>
            <p className="mt-3 text-xl font-semibold text-white">{match.status}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Stage</p>
            <p className="mt-3 text-xl font-semibold text-white">{match.stage}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Kickoff</p>
            <p className="mt-3 text-xl font-semibold text-white">{match.kickoff}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
