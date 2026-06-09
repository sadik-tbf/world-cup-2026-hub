import { teams } from '@/lib/data';

export default function StandingsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Standings</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Real-time group tables</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Track points, goals, qualification status, and tiebreaker performance as the tournament develops.</p>
      </div>
      <div className="grid gap-6">
        {['A', 'B', 'C', 'D'].map((group) => (
          <section key={group} className="section-card overflow-hidden p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Group {group}</p>
                <h2 className="text-2xl font-semibold text-white">Qualification battle</h2>
              </div>
              <span className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300">Updated live</span>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-300">
                <thead className="border-b border-slate-800 text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Team</th>
                    <th className="px-4 py-3">P</th>
                    <th className="px-4 py-3">GF</th>
                    <th className="px-4 py-3">GA</th>
                    <th className="px-4 py-3">GD</th>
                    <th className="px-4 py-3">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.slice(0, 3).map((team) => (
                    <tr key={team.id} className="border-b border-slate-800/70 hover:bg-slate-900/70">
                      <td className="px-4 py-4 text-white">{team.name}</td>
                      <td className="px-4 py-4">{team.played}</td>
                      <td className="px-4 py-4">{team.goalsFor}</td>
                      <td className="px-4 py-4">{team.goalsAgainst}</td>
                      <td className="px-4 py-4">{team.goalsFor - team.goalsAgainst}</td>
                      <td className="px-4 py-4">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
