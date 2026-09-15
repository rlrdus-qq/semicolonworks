import React from 'react';
import { Phone, Code2 } from 'lucide-react';

interface HeaderProps {
  onScrollToConsult: () => void;
  onOpenSourceModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToConsult, onOpenSourceModal }) => {
  return (
    <header
      id="main-header"
      className="fixed top-[34px] sm:top-[36px] inset-x-0 z-40 bg-[#0B0C0E]/92 backdrop-blur-md border-b border-white/10 px-4 h-14 flex items-center justify-between transition-colors"
    >
      <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
        <a
          href="#"
          id="header-logo-link"
          className="flex items-center bg-white px-2.5 py-1 rounded shadow-sm hover:opacity-95 transition-opacity"
        >
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1UDCYrlgkhqT7vBUaqScmKwrMcEyuAizO2sw0mbb8-U87c27q2yTt6B0W9jQHPrFl_QSsl5DSlJci9sRh70p3soJ48KFRq_1F8nm8DseXC9xhGobfLQAilkNZwPx-okc7u9SLvrY8-PTq6Cc-kv6NuQL3truCvPpmh423h9cX7qTmggTCaIc6uXAcjXl_QFBwunrVSMpkspIOPHHfqNeORwgf1ir9eAfabGLJ2F5AZmnodiZ0PetS83gA"
            alt="워싱턴크리스찬스쿨 공식 로고"
            className="h-6 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        <div className="flex items-center gap-2">
          {onOpenSourceModal && (
            <button
              type="button"
              onClick={onOpenSourceModal}
              id="header-source-button"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white text-[11px] font-bold transition-all"
              title="웹 소스 코드 (wcs_web.html) 보기 및 복사"
            >
              <Code2 className="w-3.5 h-3.5 text-orange-400" />
              <span>웹 소스 (HTML)</span>
            </button>
          )}

          <a
            href="tel:01085059800"
            id="header-call-button"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white active:scale-95 transition-all"
            title="전화 상담"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onScrollToConsult}
            id="header-consult-button"
            className="px-3.5 py-1.5 rounded-full bg-[#FF5600] hover:bg-[#E04C00] text-white text-[12px] font-extrabold flex items-center gap-1 active:scale-95 transition-all shadow-md"
          >
            <span>선착순 상담</span>
          </button>
        </div>
      </div>
    </header>
  );
};

