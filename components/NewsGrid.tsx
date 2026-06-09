import type { NewsItem } from '@/types';

export function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.id} className="section-card overflow-hidden transition hover:-translate-y-1 hover:shadow-glow">
          <div className="relative h-52 overflow-hidden rounded-[1.5rem] bg-slate-800">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent p-4">
              <span className="inline-flex rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">{item.category}</span>
            </div>
          </div>
          <div className="space-y-3 p-5">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{item.date}</span>
              <span className="text-cyan-300">Read more</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-6 text-slate-300">{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
