'use client';

import { useMemo, useState } from 'react';
import { players } from '@/lib/data';

export default function PlayersPage() {
  const [search, setSearch] = useState('');
  const filteredPlayers = useMemo(
    () => players.filter((player) => player.name.toLowerCase().includes(search.toLowerCase()) || player.club.toLowerCase().includes(search.toLowerCase()) || player.position.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Players</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">World Cup player profiles</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Search, compare and evaluate the tournament’s most valuable players before the first whistle.</p>
      </div>
      <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_320px]">
        <div className="section-card rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-6">
          <label className="block text-sm font-semibold text-slate-400">Search players</label>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, club or position"
            className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>
        <div className="section-card rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Filter hints</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Search by club or position.</li>
            <li>• Compare match-ready talent.</li>
            <li>• View market values and performance metrics.</li>
          </ul>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredPlayers.map((player) => (
          <article key={player.id} className="section-card overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center gap-4">
              <img src={player.photo} alt={player.name} className="h-16 w-16 rounded-3xl object-cover" />
              <div>
                <h2 className="text-xl font-semibold text-white">{player.name}</h2>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{player.position}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Club</p>
                <p>{player.club}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Value</p>
                <p>{player.marketValue}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-900/80 p-3">
                <p className="font-semibold text-white">Goals</p>
                <p>{player.goals}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-3">
                <p className="font-semibold text-white">Assists</p>
                <p>{player.assists}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-3">
                <p className="font-semibold text-white">Apps</p>
                <p>{player.appearances}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
