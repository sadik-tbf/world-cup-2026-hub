import { players, teams } from '@/lib/data';

type Props = { params: { playerId: string } };

export function generateStaticParams() {
  return players.map((player) => ({ playerId: player.id }));
}

export default function PlayerPage({ params }: Props) {
  const player = players.find((item) => item.id === params.playerId);
  if (!player) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-slate-300">
        <p>Player not found.</p>
      </div>
    );
  }
  const team = teams.find((item) => item.id === player.teamId);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-card overflow-hidden p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Player profile</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">{player.name}</h1>
            <p className="mt-4 max-w-2xl text-slate-300">Position: {player.position} • Club: {player.club} • Market value: {player.marketValue}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/90 p-6 text-right text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Team</p>
            <p className="mt-2 text-2xl font-semibold">{team?.name ?? 'N/A'}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            ['Appearances', player.appearances],
            ['Goals', player.goals],
            ['Assists', player.assists]
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl bg-slate-900/80 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{label}</p>
              <p className="mt-3 text-4xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
