'use client';

import { useEffect, useMemo, useState } from 'react';
import { fixtures, teams } from '@/lib/data';
import type { Prediction } from '@/types';

const STORAGE_KEY = 'wc2026-predictions';

function getDefaultPredictions() {
  return fixtures.map((fixture) => ({ matchId: fixture.id, homeScore: 1, awayScore: 1 }));
}

export function PredictionCenter() {
  const [predictions, setPredictions] = useState<Prediction[]>(getDefaultPredictions);
  const [champion, setChampion] = useState('Brazil');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Prediction[];
      setPredictions(parsed);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(predictions));
  }, [predictions]);

  const selectedTeam = teams.find((team) => team.name === champion) ?? teams[0];
  const bracketScore = useMemo(() => predictions.reduce((sum, pred) => sum + pred.homeScore + pred.awayScore, 0), [predictions]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
      <div className="section-card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Prediction center</p>
            <h2 className="text-3xl font-semibold text-white">Forecast every match</h2>
          </div>
          <div className="rounded-3xl bg-slate-900/90 p-4 text-right text-slate-300">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Prediction activity</p>
            <p className="mt-2 text-2xl font-semibold text-white">{bracketScore} points</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {fixtures.map((fixture) => (
            <div key={fixture.id} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-4 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-400">{fixture.stage}</p>
                <p className="text-lg font-semibold text-white">{fixture.homeTeam} vs {fixture.awayTeam}</p>
              </div>
              <div className="mt-4 flex gap-2 sm:mt-0">
                <input
                  type="number"
                  min={0}
                  value={predictions.find((item) => item.matchId === fixture.id)?.homeScore ?? 0}
                  onChange={(event) => {
                    const homeScore = Number(event.target.value);
                    setPredictions((current) => current.map((item) => item.matchId === fixture.id ? { ...item, homeScore } : item));
                  }}
                  className="w-20 rounded-3xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-center text-white outline-none"
                />
                <span className="flex items-center px-2 text-slate-300">—</span>
                <input
                  type="number"
                  min={0}
                  value={predictions.find((item) => item.matchId === fixture.id)?.awayScore ?? 0}
                  onChange={(event) => {
                    const awayScore = Number(event.target.value);
                    setPredictions((current) => current.map((item) => item.matchId === fixture.id ? { ...item, awayScore } : item));
                  }}
                  className="w-20 rounded-3xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-center text-white outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="section-card p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Champion pick</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Predict the winner</h3>
        <select
          value={champion}
          onChange={(event) => setChampion(event.target.value)}
          className="mt-5 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-white outline-none"
        >
          {teams.map((team) => (
            <option key={team.id} value={team.name}>{team.name}</option>
          ))}
        </select>
        <div className="mt-6 rounded-3xl bg-slate-900/90 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Current pick</p>
          <p className="mt-3 text-xl font-semibold text-white">{selectedTeam.flag} {selectedTeam.name}</p>
          <p className="mt-2 text-sm text-slate-400">Based on your saved predictions, this pick is the tournament favorite in your bracket.</p>
        </div>
      </aside>
    </div>
  );
}
