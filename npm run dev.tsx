'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const R16_MATCHUPS = [
  { id: 'r16-1', match: 'Runner Up Group A vs Runner Up Group B', teamA: 'USA', teamB: 'Mexico' },
  { id: 'r16-2', match: 'Winner Group C vs Third Place A/B/F', teamA: 'England', teamB: 'Senegal' },
  { id: 'r16-3', match: 'Winner Group B vs Third Place A/C/D/E', teamA: 'France', teamB: 'Netherlands' },
  { id: 'r16-4', match: 'Winner Group A vs Third Place C/D/E', teamA: 'Argentina', teamB: 'Germany' },
];

export default function PredictionsPage() {
  const [predictions, setPredictions] = useState<Record<string, string>>({});

  const handlePick = (matchId: string, team: string) => {
    setPredictions(prev => ({ ...prev, [matchId]: team }));
  };

  const handleSubmit = () => {
    alert('Prediction brackets successfully committed to the AI analytics ledger!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="space-y-2 border-b border-zinc-800/80 pb-6">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Prediction Center
          </h1>
          <p className="text-zinc-400 font-light text-sm">
            Submit your knockout stage predictions and verify bracket progression.
          </p>
        </div>

        {/* Bracket Grid */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
            Knockout Phase: Round of 16
          </h2>

          <div className="grid gap-4">
            {R16_MATCHUPS.map((item) => {
              const picked = predictions[item.id];

              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#121212] border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
                >
                  <div className="flex-1 text-center md:text-left space-y-1">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                      {item.match}
                    </span>
                    <span className="font-bold text-zinc-200 text-sm tracking-wide">
                      Who advances to the Quarter Finals?
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto justify-center">
                    <Button
                      onClick={() => handlePick(item.id, item.teamA)}
                      className={`flex-1 md:flex-initial min-w-[120px] py-6 rounded-xl font-bold border transition-all ${
                        picked === item.teamA 
                          ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-500' 
                          : 'bg-zinc-950 border-zinc-700 text-zinc-300 hover:bg-zinc-900'
                      }`}
                    >
                      {item.teamA}
                    </Button>
                    <span className="text-xs font-mono text-zinc-600">OR</span>
                    <Button
                      onClick={() => handlePick(item.id, item.teamB)}
                      className={`flex-1 md:flex-initial min-w-[120px] py-6 rounded-xl font-bold border transition-all ${
                        picked === item.teamB 
                          ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-500' 
                          : 'bg-zinc-950 border-zinc-700 text-zinc-300 hover:bg-zinc-900'
                      }`}
                    >
                      {item.teamB}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Submit action */}
        <div className="flex justify-end pt-4 border-t border-zinc-800/50">
          <Button 
            onClick={handleSubmit}
            className="bg-zinc-200 hover:bg-white text-slate-950 font-black px-10 py-6 rounded-xl tracking-wide uppercase text-xs transition-all shadow-2xl"
          >
            Lock in Predictions
          </Button>
        </div>

      </div>
    </div>
  );
}