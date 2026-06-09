import { PredictionCenter } from '@/components/PredictionCenter';

export default function PredictionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Prediction Center</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Make your World Cup 2026 forecasts</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Predict every match result, choose your champion, and save your bracket locally for replay and sharing.</p>
      </div>
      <PredictionCenter />
    </div>
  );
}
