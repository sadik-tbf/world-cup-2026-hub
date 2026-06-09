export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-card overflow-hidden p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Admin dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Manage teams, players and tournament data</h1>
        <p className="mt-4 text-slate-300">An administration console for content managers to update squads, fixtures, news, standings and statistics using Firestore-powered datastore actions.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            'Manage teams',
            'Manage players',
            'Manage fixtures',
            'Manage news',
            'Manage stats',
            'Team performance'
          ].map((task) => (
            <div key={task} className="rounded-3xl border border-slate-800/70 bg-slate-900/90 p-6">
              <p className="font-semibold text-white">{task}</p>
              <p className="mt-2 text-sm text-slate-400">A secure admin experience to power the World Cup 2026 Hub content pipeline.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
