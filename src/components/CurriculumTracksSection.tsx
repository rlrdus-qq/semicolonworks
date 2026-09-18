import React from 'react';
import { BookOpen } from 'lucide-react';

interface CurriculumTracksSectionProps {
  onOpenImageModal?: (url: string, title: string) => void;
}

export const CurriculumTracksSection: React.FC<CurriculumTracksSectionProps> = ({
  onOpenImageModal,
}) => {
  const golfImg = 'images/golf-academy.svg';

  return (
    <section
      id="curriculum-tracks-section"
      className="px-4 py-8 bg-[#121316] border-y border-white/10 flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-black text-orange-400 tracking-wider uppercase flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" />
          CURRICULUM TRACKS
        </span>
        <h2 className="text-[22px] sm:text-[24px] font-black text-white leading-tight">
          목적에 맞게 선택하는 4대 트랙
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Track 1: 정규 조기유학 */}
        <div
          id="track-card-1"
          className="p-3.5 rounded-xl bg-[#1A1C20] border border-white/10 flex flex-col gap-2 hover:border-white/25 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-white/15 text-[11px] font-black text-white">
              트랙 01
            </span>
            <span className="text-[11px] font-bold text-yellow-400">
              미국 학력 100% 인정
            </span>
          </div>
          <h4 className="text-[16px] font-extrabold text-white">K-12 정규 조기유학</h4>
          <p className="text-[13px] text-gray-400 leading-snug">
            미국 정규 커리큘럼 이수 + 토플·SAT 밀착 케어로 아이비리그 및 명문대 직행
          </p>
        </div>

        {/* Track 2: 몰입형 방학캠프 */}
        <div
          id="track-card-2"
          className="p-3.5 rounded-xl bg-[#1A1C20] border border-white/10 flex flex-col gap-2 hover:border-white/25 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-orange-500/20 text-[11px] font-black text-orange-400">
              트랙 02
            </span>
            <span className="text-[11px] font-bold text-red-400 bg-red-500/20 px-1.5 py-0.5 rounded">
              마감임박
            </span>
          </div>
          <h4 className="text-[16px] font-extrabold text-white">몰입형 단기 영어캠프 (4주/8주)</h4>
          <p className="text-[13px] text-gray-400 leading-snug">
            하루 10시간 이상 1:1 스피킹 몰입 훈련 + 리조트 액티비티로 단기 자신감 극대화
          </p>
        </div>

        {/* Track 3: 주니어 골프 아카데미 with Image */}
        <div
          id="track-card-3"
          className="rounded-xl bg-[#1A1C20] border border-white/10 overflow-hidden flex flex-col hover:border-white/25 transition-colors"
        >
          <div
            className="relative w-full h-36 cursor-pointer group"
            onClick={() => onOpenImageModal?.(golfImg, '주니어 골프 아카데미')}
          >
            <img
              src={golfImg}
              alt="WCS 주니어 골프 아카데미"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <span className="absolute bottom-2 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[11px] font-black text-yellow-300">
              트랙 03 • 주니어 골프 유학
            </span>
          </div>
          <div className="p-3.5 flex flex-col gap-1">
            <h4 className="text-[16px] font-extrabold text-white">주니어 골프 아카데미</h4>
            <p className="text-[13px] text-gray-400 leading-snug">
              18홀 챔피언십 필드 레슨 주 4~5회 + 미국 정규 고교 디플로마 동시 취득
            </p>
          </div>
        </div>

        {/* Track 4: 사이버 온라인 스쿨 */}
        <div
          id="track-card-4"
          className="p-3.5 rounded-xl bg-[#1A1C20] border border-white/10 flex flex-col gap-2 hover:border-white/25 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-white/15 text-[11px] font-black text-white">
              트랙 04
            </span>
            <span className="text-[11px] font-bold text-gray-300">
              국내 수강 가능
            </span>
          </div>
          <h4 className="text-[16px] font-extrabold text-white">사이버 온라인스쿨 (Cyber Center)</h4>
          <p className="text-[13px] text-gray-400 leading-snug">
            한국 거주 중에도 미국 공인 고교 학점 취득 및 공식 졸업장(Diploma) 발급
          </p>
        </div>
      </div>
    </section>
  );
};
