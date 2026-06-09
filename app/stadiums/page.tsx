import { stadiums } from '@/lib/data';

export default function StadiumsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Stadium guides</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Host venues across North America</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Discover arena capacity, location, and match assignments for the tournament’s most iconic stadiums.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stadiums.map((stadium) => (
          <article key={stadium.id} className="section-card overflow-hidden">
            <div className="relative h-60 overflow-hidden bg-slate-800">
              <img src={stadium.image} alt={stadium.name} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5">
                <h2 className="text-xl font-semibold text-white">{stadium.name}</h2>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{stadium.city}, {stadium.country}</p>
              <p className="text-sm text-slate-300">Capacity: {stadium.capacity.toLocaleString()}</p>
              <p className="text-sm text-slate-300">Matches hosted: {stadium.hostedMatches.join(', ') || 'TBD'}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
