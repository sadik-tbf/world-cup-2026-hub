import { teams } from '@/lib/data';

type Props = { params: { teamId: string } };

export function generateStaticParams() {
  return teams.map((team) => ({ teamId: team.id }));
}

export default function TeamPage({ params }: Props) {
  const team = teams.find((item) => item.id === params.teamId);
  if (!team) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-slate-300">
        <p>Team not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-card overflow-hidden p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Team profile</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">{team.name}</h1>
            <p className="mt-4 max-w-2xl text-slate-300">Coach: {team.coach} • FIFA ranking: {team.ranking} • Market value: {team.marketValue}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/90 p-5 text-right text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Group</p>
            <p className="mt-2 text-3xl font-semibold">{team.group}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Team statistics</h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {[
                ['Played', team.played],
                ['Wins', team.wins],
                ['Draws', team.draws],
                ['Losses', team.losses],
                ['Goals for', team.goalsFor],
                ['Goals against', team.goalsAgainst],
                ['Points', team.points]
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="font-semibold text-white">{label}</p>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Squad</h2>
            <div className="mt-5 space-y-3">
              {team.squad.length ? team.squad.map((player) => (
                <div key={player.id} className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
                  <p className="font-semibold text-white">{player.name}</p>
                  <p className="text-sm text-slate-400">{player.position} • {player.club}</p>
                </div>
              )) : <p className="text-sm text-slate-400">Full squad details will be available closer to kickoff.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
