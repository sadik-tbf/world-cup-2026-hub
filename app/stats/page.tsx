import { players, teams } from '@/lib/data';

export default function StatsPage() {
  const topScorers = players.slice(0, 3);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Statistics center</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Key tournament metrics</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Top scorers, assists leaders, clean sheet candidates, and team power metrics assembled in one premium hub.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="section-card p-6">
          <h2 className="text-xl font-semibold text-white">Top scorers</h2>
          <div className="mt-6 space-y-4">
            {topScorers.map((player) => (
              <div key={player.id} className="rounded-3xl bg-slate-900/90 p-4">
                <p className="font-semibold text-white">{player.name}</p>
                <p className="text-sm text-slate-400">Goals: {player.goals}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-card p-6">
          <h2 className="text-xl font-semibold text-white">Most valuable players</h2>
          <div className="mt-6 space-y-4">
            {players
              .sort((a, b) => Number(b.marketValue.slice(1).replace('M', '')) - Number(a.marketValue.slice(1).replace('M', '')))
              .slice(0, 3)
              .map((player) => (
                <div key={player.id} className="rounded-3xl bg-slate-900/90 p-4">
                  <p className="font-semibold text-white">{player.name}</p>
                  <p className="text-sm text-slate-400">Value: {player.marketValue}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="section-card p-6">
          <h2 className="text-xl font-semibold text-white">Team power metrics</h2>
          <div className="mt-6 space-y-4">
            {teams.slice(0, 3).map((team) => (
              <div key={team.id} className="rounded-3xl bg-slate-900/90 p-4">
                <p className="font-semibold text-white">{team.name}</p>
                <p className="text-sm text-slate-400">Market value: {team.marketValue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
