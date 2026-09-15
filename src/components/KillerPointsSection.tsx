import React from 'react';
import { Stethoscope, Users, Award, Check } from 'lucide-react';

export const KillerPointsSection: React.FC = () => {
  return (
    <section id="killer-points-section" className="px-4 py-8 flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-black text-yellow-400 tracking-wider uppercase">
          WHY WASHINGTON CHRISTIAN SCHOOL?
        </span>
        <h2 className="text-[24px] font-black text-white leading-tight">
          학부모 만족도 98%<br />
          WCS만의 3대 킬러 포인트
        </h2>
      </div>

      <div className="flex flex-col gap-3.5">
        {/* Point 1: Medical School Track */}
        <article
          id="killer-card-medical"
          className="p-4 rounded-2xl bg-[#17181C] border border-[#FF5600]/30 flex flex-col gap-2 relative overflow-hidden shadow-md hover:border-[#FF5600]/60 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-400 text-[11px] font-extrabold tracking-tight">
              KILLER 01 • 글로벌 의대 진학
            </span>
            <Stethoscope className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-[17px] font-black text-white pt-1">
            필리핀 의대 졸업 후 <span className="text-yellow-300">‘한국 의사 국가고시’</span> 응시 자격!
          </h3>
          <ul className="text-[13px] text-gray-300 space-y-1.5 pt-1">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>보건복지부 인정 필리핀 명문 의·치대 최단기 연계 진학</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>해외 의사 면허 + 한국 의사 예비시험 양방향 커리어 보장</span>
            </li>
          </ul>
        </article>

        {/* Point 2: 1:1 ~ 1:4 Ratio */}
        <article
          id="killer-card-tutoring"
          className="p-4 rounded-2xl bg-[#17181C] border border-blue-500/25 flex flex-col gap-2 relative overflow-hidden shadow-md hover:border-blue-500/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[11px] font-extrabold tracking-tight">
              KILLER 02 • 초밀착 튜터링
            </span>
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-[17px] font-black text-white pt-1">
            선생님이 학생보다 많다! <span className="text-blue-300">1:1 ~ 1:4 전담 멘토링</span>
          </h3>
          <ul className="text-[13px] text-gray-300 space-y-1.5 pt-1">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>방임 제로! 매일 원어민 1:1 에세이 첨삭 및 스피킹 피드백</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>부모님 안심 데일리 학습 리포트 및 식단 실시간 투명 공유</span>
            </li>
          </ul>
        </article>

        {/* Point 3: IB Candidate School */}
        <article
          id="killer-card-ib"
          className="p-4 rounded-2xl bg-[#17181C] border border-emerald-500/25 flex flex-col gap-2 relative overflow-hidden shadow-md hover:border-emerald-500/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-extrabold tracking-tight">
              KILLER 03 • 세계 공인 학위
            </span>
            <Award className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-[17px] font-black text-white pt-1">
            암기 주입 NO! <span className="text-emerald-300">IB(국제 바칼로레아) 정규 후보교</span>
          </h3>
          <ul className="text-[13px] text-gray-300 space-y-1.5 pt-1">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>미국 K-12 인가 기반 전 세계 및 한국 학교 100% 학력 인정</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>아이비리그 및 글로벌 명문대 학종 전형 최적화 커리큘럼</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
