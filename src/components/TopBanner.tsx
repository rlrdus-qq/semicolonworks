import React, { useState, useEffect } from 'react';
import { Timer, Radio } from 'lucide-react';

export const TopBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 29 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 18, seconds: 29 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <aside
      id="top-banner"
      className="w-full bg-[#FF5600] text-white px-4 py-2 flex items-center justify-between text-xs font-bold tracking-tight fixed top-0 inset-x-0 z-50 pt-safe shadow-md select-none"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 live-pulse"></span>
          LIVE 마감임박
        </span>
        <span className="truncate text-[11px] sm:text-[12px] font-extrabold">
          2025-26 정규·캠프 선착순 잔여 <span className="text-yellow-200 underline underline-offset-2">단 3석</span>
        </span>
      </div>
      <div className="flex items-center gap-1 shrink-0 font-mono text-[11px] bg-black/25 px-2 py-0.5 rounded border border-black/10">
        <Timer className="w-3.5 h-3.5 text-white/90" />
        <span id="countdown">
          {formatNum(timeLeft.hours)}:{formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
        </span>
      </div>
    </aside>
  );
};
