import { SimulatorPanel } from '@/components/SimulatorPanel';

export default function SimulatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Tournament Simulator</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Simulate every outcome</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Enter scores manually, watch probabilities update, and compare thousands of possible paths to the title.</p>
      </div>
      <SimulatorPanel />
    </div>
  );
}
