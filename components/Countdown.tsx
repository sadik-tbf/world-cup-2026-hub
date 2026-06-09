'use client';

import { useEffect, useState } from 'react';

function formatTime(value: number) {
  return String(value).padStart(2, '0');
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid gap-4 sm:grid-cols-4">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => {
        const value = index === 0 ? time.days : index === 1 ? time.hours : index === 2 ? time.minutes : time.seconds;
        return (
          <div key={label} className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5 text-center">
            <p className="text-4xl font-semibold text-white">{formatTime(value)}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{label}</p>
          </div>
        );
      })}
    </div>
  );
}
