import React from 'react';
import { Award, Users, Stethoscope, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToConsult: () => void;
  onOpenImageModal?: (url: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToConsult,
  onOpenImageModal,
}) => {
  const campusImg =
    'https://lh3.googleusercontent.com/aida/AEtjO1UIN_K2Wmar0RcYKhtHIWplJZ4DcH-kGJPkW--WeOLB-fsDuFrkUgbrBzBI6vkPs1aQAysb0EfdP4WhzwAu4OdHD9xiggEOr5H1PdxWERKCF8I_OHPpvq-wXt1Iptp47SewWbFkNWdFmD87wO6KV4KablK01jpTacfFXNoM6nWvioeYsDwXlqbHCVhEKI8UVG9UvM-bO-F3ItVkK8uAdkqNGvWxEzGXjL8EA0skZEw9dcehqMhG_MJJR4Q';

  return (
    <section id="hero-section" className="px-4 pt-4 pb-8 flex flex-col gap-4">
      {/* 3 Facts Badges */}
      <div className="flex flex-wrap gap-1.5" id="hero-badges-group">
        <span
          id="badge-ib-candidate"
          className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[11px] font-bold text-gray-200 flex items-center gap-1.5"
        >
          <Award className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
          IB 후보학교 공인
        </span>
        <span
          id="badge-care-ratio"
          className="px-2.5 py-1 rounded-md bg-orange-500/20 border border-[#FF5600]/40 text-[11px] font-bold text-orange-400 flex items-center gap-1.5"
        >
          <Users className="w-3.5 h-3.5 text-orange-400 shrink-0" />
          1:1~1:4 초밀착 케어
        </span>
        <span
          id="badge-doctor-license"
          className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[11px] font-bold text-yellow-300 flex items-center gap-1.5"
        >
          <Stethoscope className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
          한국 의사 국시 자격
        </span>
      </div>

      {/* Bold Punchline Headline */}
      <div className="flex flex-col gap-1.5" id="hero-text-block">
        <p className="text-[#FF5600] font-extrabold text-[13px] tracking-wider uppercase flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF5600] inline-block animate-pulse"></span>
          WASHINGTON CHRISTIAN SCHOOL
        </p>
        <h1 className="text-[30px] sm:text-[34px] leading-[38px] sm:leading-[42px] font-black tracking-tight text-white">
          단순 어학연수 그만.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
            의대·글로벌 명문대 직행
          </span><br />
          확실한 로드맵!
        </h1>
        <p className="text-gray-400 text-[14px] leading-relaxed pt-1">
          공인 IB 커리큘럼 × 미국 인가 정규 K-12 학위 취득.<br />
          24시간 안전 리조트 기숙사에서 완성되는 독점 프리미엄 스쿨링.
        </p>
      </div>

      {/* Hero Visual Card (Campus Image) */}
      <div
        id="hero-campus-card"
        onClick={() => onOpenImageModal?.(campusImg, 'The Viewfort Park 전용 캠퍼스')}
        className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#1D1E22] aspect-[16/10] cursor-pointer group"
      >
        <img
          src={campusImg}
          alt="워싱턴크리스찬스쿨 캠퍼스"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
            <span className="text-xs font-bold text-gray-100">The Viewfort Park 전용 캠퍼스</span>
          </div>
          <span className="text-[11px] font-black text-yellow-400 bg-yellow-400/20 border border-yellow-400/40 px-2.5 py-1 rounded-lg backdrop-blur-sm">
            진학률 98.2%
          </span>
        </div>
      </div>

      {/* Quick Action Hero CTA Button */}
      <button
        type="button"
        id="hero-cta-button"
        onClick={onScrollToConsult}
        className="w-full py-4 rounded-xl bg-[#FF5600] hover:bg-[#E04C00] text-white text-[16px] font-black flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all btn-glow mt-1"
      >
        <span>선착순 1:1 맞춤 진학 로드맵 받기</span>
        <ArrowRight className="w-5 h-5 text-white" />
      </button>
    </section>
  );
};
