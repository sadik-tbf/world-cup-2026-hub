import { Countdown } from '@/components/Countdown';
import { FeatureCard } from '@/components/FeatureCard';
import { NewsGrid } from '@/components/NewsGrid';
import { PlayerGrid } from '@/components/PlayerGrid';
import { TeamSpotlight } from '@/components/TeamSpotlight';
import { FeaturedMatches } from '@/components/FeaturedMatches';
import { news, players, teams, fixtures } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 rounded-[2rem] border border-slate-800/60 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              World Cup 2026 Hub
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The definitive destination for World Cup 2026 coverage.
            </h1>
            <p className="max-w-2xl text-slate-300 sm:text-lg">
              Follow every match, scout every player, build your fantasy squad, and predict the knockout path with premium insights.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#news" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Latest news
              </a>
              <a href="/fixtures" className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-white">
                View fixtures
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-900/90 p-8 text-white ring-1 ring-white/5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Countdown to final</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Los Angeles Final</h2>
              </div>
              <div className="rounded-3xl bg-cyan-500/10 p-4 text-cyan-300">
                <span className="text-2xl">🏟️</span>
              </div>
            </div>
            <div className="mt-8">
              <Countdown targetDate="2026-07-19T20:00:00Z" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <FeatureCard title="48 teams" description="Complete tournament depth with every squad profile." />
              <FeatureCard title="Real-time standings" description="Track group tables and qualification status live." />
              <FeatureCard title="AI predictions" description="Probability-based forecasts for every knockout match." />
              <FeatureCard title="Fantasy made easy" description="Build teams, score points, and own the leaderboard." />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 space-y-6" id="news">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Latest updates</p>
            <h2 className="text-3xl font-semibold text-white">Tournament news and analysis</h2>
          </div>
          <a href="/news" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-100">
            Explore all stories →
          </a>
        </div>
        <NewsGrid items={news} />
      </section>

      <section className="mb-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured fixtures</p>
            <h2 className="text-3xl font-semibold text-white">Must-watch matches</h2>
          </div>
          <a href="/fixtures" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-100">
            Full schedule →
          </a>
        </div>
        <FeaturedMatches fixtures={fixtures} />
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <TeamSpotlight teams={teams} />
        <PlayerGrid players={players} />
      </section>
    </div>
  );
}
