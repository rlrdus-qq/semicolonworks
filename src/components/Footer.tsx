import React from 'react';
import { Phone, MapPin, Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="px-4 py-8 bg-[#0B0C0E] border-t border-white/10 text-gray-400 text-[11px] flex flex-col gap-3.5 pb-28"
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-gray-200 font-bold text-[13px] tracking-tight">
          워싱턴크리스찬스쿨 (Washington Christian School)
        </span>
        <div className="flex items-start gap-1.5 text-gray-400">
          <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
          <span>Lot3 South Horizon1 Governor's Drive Brgy. Cabilang Baybay Carmona Cavite, Philippines</span>
        </div>
        <div className="flex items-start gap-1.5 text-gray-400">
          <Building2 className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
          <span>전용 기숙사 : Carmona cavite The Viewfort Park</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10 text-gray-300">
        <a
          href="tel:01085059800"
          className="flex items-center gap-1 hover:text-[#FF5600] transition-colors"
        >
          <Phone className="w-3 h-3 text-orange-400" />
          <span>한국 직통 : 010-8505-9800</span>
        </a>
        <span className="text-gray-600 hidden sm:inline">•</span>
        <a
          href="tel:09499807778"
          className="flex items-center gap-1 hover:text-[#FF5600] transition-colors"
        >
          <Phone className="w-3 h-3 text-orange-400" />
          <span>필리핀 오피스 : 0949-980-7778</span>
        </a>
      </div>

      <p className="text-gray-500 text-[10.5px]">
        Copyright © Washington Christian School. All Rights Reserved.
      </p>
    </footer>
  );
};
