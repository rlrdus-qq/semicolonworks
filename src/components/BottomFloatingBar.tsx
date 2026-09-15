import React from 'react';
import { MessageCircle, CalendarCheck, Code2 } from 'lucide-react';

interface BottomFloatingBarProps {
  onScrollToConsult: () => void;
  onOpenSourceModal?: () => void;
}

export const BottomFloatingBar: React.FC<BottomFloatingBarProps> = ({
  onScrollToConsult,
  onOpenSourceModal,
}) => {
  return (
    <aside
      id="bottom-floating-bar"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#121316]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 pb-safe flex items-center justify-center transition-all"
    >
      <div className="max-w-3xl mx-auto w-full flex items-center gap-2.5">
        {/* Kakao Quick Link */}
        <a
          id="btn-kakao-chat"
          href="https://open.kakao.com/o/sYq1QUhd"
          target="_blank"
          rel="noopener noreferrer"
          title="카카오톡 문의"
          className="h-12 px-4 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] text-[13px] font-black flex items-center justify-center gap-1.5 shrink-0 active:scale-95 transition-all shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-[#191919]" />
          <span className="hidden xs:inline">카톡 상담</span>
          <span className="xs:hidden">카톡</span>
        </a>

        {/* Source Code View on desktop */}
        {onOpenSourceModal && (
          <button
            type="button"
            onClick={onOpenSourceModal}
            id="btn-bottom-source"
            className="hidden md:flex h-12 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white text-[13px] font-bold items-center justify-center gap-1.5 shrink-0 transition-all"
            title="웹 소스 코드 (wcs_web.html)"
          >
            <Code2 className="w-4 h-4 text-orange-400" />
            <span>웹 소스 (HTML)</span>
          </button>
        )}

        {/* Big Apply CTA */}
        <button
          type="button"
          id="btn-bottom-apply"
          onClick={onScrollToConsult}
          className="flex-1 h-12 rounded-xl bg-[#FF5600] hover:bg-[#E04C00] text-white text-[15px] font-black flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all btn-glow cursor-pointer"
        >
          <CalendarCheck className="w-5 h-5 text-white" />
          <span>선착순 1:1 맞춤 로드맵 신청</span>
        </button>
      </div>
    </aside>
  );
};

