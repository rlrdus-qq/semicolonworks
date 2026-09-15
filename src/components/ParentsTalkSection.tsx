import React from 'react';
import { MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const ParentsTalkSection: React.FC = () => {
  const talks = [
    {
      id: 'talk-1',
      question: '우리 애는 영어가 많이 서툰데, 현지 수업을 따라갈 수 있을까요?',
      highlight: '1:1 맞춤형 ESL 집중 케어',
      answerSuffix: '로 3개월 안에 원어민 수준 소통 능력을 강제 완성합니다!',
    },
    {
      id: 'talk-2',
      question: '필리핀 의대 나와서 진짜 한국에서 의사 국시를 볼 수 있나요?',
      prefix: '보건복지부 인정 해외 의대 졸업 시, ',
      highlight: '한국 의사 예비시험 및 KMLE 국시 응시 자격',
      answerSuffix: ' 100% 부여!',
    },
    {
      id: 'talk-3',
      question: '아이 혼자 보내는데 현지 치안이나 기숙사 관리가 불안해요.',
      prefix: '최고급 빌리지 더뷰포트 리조트 파크에서 ',
      highlight: '한국인 사감 24H 상주 + 영양 한식',
      answerSuffix: ' 완벽 케어!',
    },
  ];

  return (
    <section
      id="parents-talk-section"
      className="w-full px-4 py-8 bg-[#121316] border-y border-white/10 flex flex-col gap-5"
    >
      <div className="flex flex-col text-center items-center gap-1.5">
        <span className="text-xs font-black text-orange-400 tracking-widest uppercase flex items-center gap-1">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          REAL PARENTS TALK
        </span>
        <h2 className="text-[22px] sm:text-[24px] font-black leading-snug text-white">
          "솔직히 이런 걱정 때문에<br />
          유학 망설이셨죠?"
        </h2>
      </div>

      {/* Bubble Q&A Stream */}
      <div className="flex flex-col gap-4">
        {talks.map((talk) => (
          <div key={talk.id} id={talk.id} className="flex flex-col gap-2">
            {/* Question bubble */}
            <div className="self-start max-w-[88%] sm:max-w-[80%] bg-[#24262C] border border-white/10 rounded-2xl rounded-bl-sm p-3.5 text-[13px] text-gray-200 relative bubble-tail-left shadow-sm">
              💬 "{talk.question}"
            </div>

            {/* Answer bubble */}
            <div className="self-end max-w-[90%] sm:max-w-[85%] bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl rounded-br-sm p-3.5 text-[13px] font-bold shadow-md">
              👉 {talk.prefix}
              <span className="underline underline-offset-3 decoration-yellow-300 font-extrabold text-yellow-100">
                {talk.highlight}
              </span>
              {talk.answerSuffix}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
