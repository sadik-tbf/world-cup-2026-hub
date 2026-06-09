import { news } from '@/lib/data';

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">News</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">World Cup 2026 headlines</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Stay ahead of every tournament story with live updates, tactical previews and exclusive analysis.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {news.map((item) => (
          <article key={item.id} className="section-card overflow-hidden">
            <div className="relative h-64 overflow-hidden bg-slate-800">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent p-5">
                <span className="inline-flex rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">{item.category}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-400">{item.date}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
