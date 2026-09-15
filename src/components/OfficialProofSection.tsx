import React from 'react';
import { Award, ZoomIn } from 'lucide-react';
import { ProofItem } from '../types';

interface OfficialProofSectionProps {
  onOpenImageModal?: (url: string, title: string) => void;
}

export const OfficialProofSection: React.FC<OfficialProofSectionProps> = ({
  onOpenImageModal,
}) => {
  const proofItems: ProofItem[] = [
    {
      id: 'proof-ib',
      tag: '📜 IB 공식 인가 보고서',
      tagColor: 'text-yellow-300',
      title: '글로벌 최고 권위 IB World School 공식 후보 승인',
      description: '국제 바칼로레아(IB) 정규 후보교로서 전 세계 통용 학력을 공인받았습니다.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida/AEtjO1U14dH9Wj_56u0ketFYodWzAb5FOS-1xN_zTa8JAKw1aWNbTLopfyY7Q-iREOIoPkNnEjTEUp_274rOXoSZFXapvrVWXNRPpS8Qslgwjyqx8_q0ozODTxaFCwpil4sV9_HFR_1enNZWutS-ks91i8B6IEizkdOVQCx4LDIQmv2L4B3t60CsIATLMq_1S9J480zjj_YbXlHTfiFpNyXBSTSU4vo8aMKBbC5LneEIZLsASo0h1UEmQCbgUA',
    },
    {
      id: 'proof-grad',
      tag: '🎓 명문대 진학 졸업 세레머니',
      tagColor: 'text-orange-300',
      title: '전 세계 유수 대학으로 진학하는 자랑스러운 졸업생들',
      description: '의대 및 글로벌 상위 랭킹 명문대에 매년 합격자를 안정적으로 배출하고 있습니다.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida/AEtjO1WR-oncLSjLgA7E_fqtdCn8L6624_jyZjF4xCffJzvBEp28_CgaPEgo5iT8GFubL-LmRzXCjTpvZywi3rBqsRd-0EMCwBl8ZimIGQSFZq_AiFoNtCBwNx_qEe_Xc7sfrWMuUcQlJ7SMAKQJvGiyo_DL9W5igZTiAzuSlq2FmM9YXnA6StV-YG5zjtFchA9o7AIwnWTNOqrUb9BFfZbfgy_8-M3oXg1pzHazcUFJV95ZshmGYoqLyq-KkQ',
    },
    {
      id: 'proof-campus',
      tag: '🏫 신학기 캠퍼스 라이프',
      tagColor: 'text-emerald-300',
      title: '원어민 교사진과 한국인 전담 사감의 따뜻한 첫 환영',
      description: '24시간 철저한 안전 관리와 영양식단, 세심한 적응 지도로 편안한 환경을 제공합니다.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida/AEtjO1X4GwXkZfFgsLE3ltw2-eaRWXdcLyTMXV9QFgCDOhDKtVEkemF9bguuYNfb6usVSBVGbzD6d7oTcQo4IYpJWhUvQvHWovk9GP_QxqPgf3NT8vODslzXTDUHdfjqg-pXWXr1dhRsUFdBt3wQTB-ebXE0aZeNyFV8CcorbmQwTi9EzTy8MhXCsqjhMcN3H7tNt1r9q3omBUw6NrKNW55WJefvpgCDY3met-c5yB8FGWVDw_ykauoTlcxlYw',
    },
  ];

  return (
    <section id="official-proof-section" className="px-4 py-8 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-black text-yellow-400 tracking-wider uppercase flex items-center gap-1">
          <Award className="w-3.5 h-3.5" />
          OFFICIAL PROOF
        </span>
        <h2 className="text-[22px] sm:text-[24px] font-black text-white leading-tight">
          눈으로 확인하는 공식 인증과 결과
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3.5">
        {proofItems.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="p-3 rounded-xl bg-[#15161A] border border-white/10 flex flex-col gap-2.5 hover:border-white/20 transition-all shadow-md"
          >
            <div
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/5 bg-black/40 cursor-pointer group"
              onClick={() => onOpenImageModal?.(item.imageUrl, item.title)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <span
                className={`absolute top-2 left-2 px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-sm ${item.tagColor} text-[10.5px] font-bold`}
              >
                {item.tag}
              </span>
              <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[13px] font-bold text-gray-200 px-0.5 leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
