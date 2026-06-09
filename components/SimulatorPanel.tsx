'use client';

import { useMemo, useState } from 'react';
import { fixtures } from '@/lib/data';

export function SimulatorPanel() {
  const [results, setResults] = useState(() => fixtures.map((fixture) => ({ matchId: fixture.id, homeScore: 1, awayScore: 1 })));
  const winCounts = useMemo(() => {
    const counts = new Map<string, number>();
    results.forEach((result) => {
      const fixture = fixtures.find((item) => item.id === result.matchId);
      if (!fixture) return;
      const winner = result.homeScore > result.awayScore ? fixture.homeTeam : result.awayScore > result.homeScore ? fixture.awayTeam : 'Draw';
      counts.set(winner, (counts.get(winner) ?? 0) + 1);
    });
    return counts;
  }, [results]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_0.6fr]">
      <div className="section-card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Tournament simulator</p>
            <h2 className="text-3xl font-semibold text-white">Manual score entry</h2>
          </div>
          <div className="rounded-3xl bg-slate-900/90 p-4 text-right text-slate-300">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Simulated matches</p>
            <p className="mt-2 text-2xl font-semibold text-white">{results.length}</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {results.map((result) => {
            const fixture = fixtures.find((item) => item.id === result.matchId);
            if (!fixture) return null;
            return (
              <div key={result.matchId} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-4 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-400">{fixture.stage}</p>
                  <p className="text-lg font-semibold text-white">{fixture.homeTeam} vs {fixture.awayTeam}</p>
                </div>
                <div className="mt-4 flex gap-2 sm:mt-0">
                  <input
                    type="number"
                    min={0}
                    value={result.homeScore}
                    onChange={(event) => {
                      const homeScore = Number(event.target.value);
                      setResults((current) => current.map((item) => item.matchId === result.matchId ? { ...item, homeScore } : item));
                    }}
                    className="w-20 rounded-3xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-center text-white outline-none"
                  />
                  <span className="flex items-center px-2 text-slate-300">—</span>
                  <input
                    type="number"
                    min={0}
                    value={result.awayScore}
                    onChange={(event) => {
                      const awayScore = Number(event.target.value);
                      setResults((current) => current.map((item) => item.matchId === result.matchId ? { ...item, awayScore } : item));
                    }}
                    className="w-20 rounded-3xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-center text-white outline-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <aside className="section-card p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Simulator output</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Most likely winners</h3>
        <div className="mt-6 space-y-4">
          {[...winCounts.entries()].slice(0, 4).map(([team, count]) => (
            <div key={team} className="rounded-3xl bg-slate-900/90 p-4 text-white">
              <p>{team}</p>
              <p className="mt-2 text-sm text-slate-400">Wins in simulation: {count}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
