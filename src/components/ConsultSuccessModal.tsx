import React from 'react';
import { CheckCircle2, MessageCircle, X, Sparkles, BookCheck } from 'lucide-react';
import { LeadFormData } from '../types';

interface ConsultSuccessModalProps {
  isOpen: boolean;
  leadData: LeadFormData | null;
  onClose: () => void;
}

export const ConsultSuccessModal: React.FC<ConsultSuccessModalProps> = ({
  isOpen,
  leadData,
  onClose,
}) => {
  if (!isOpen) return null;

  const getProgramLabel = (code: string) => {
    switch (code) {
      case 'early':
        return 'K-12 정규 조기유학';
      case 'camp':
        return '방학 몰입캠프';
      case 'golf':
        return '주니어 골프 아카데미';
      case 'cyber':
        return '온라인 스쿨';
      default:
        return code;
    }
  };

  return (
    <div
      id="consultSuccessModal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all"
    >
      <div
        className="w-full max-w-sm p-6 rounded-2xl bg-[#1A1C20] border border-[#FF5600]/60 shadow-2xl flex flex-col items-center text-center gap-3 relative animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 text-gray-400 hover:text-white rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-13 h-13 rounded-full bg-orange-500/20 text-[#FF5600] flex items-center justify-center mt-1">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-[18px] font-black text-white">
          상담 신청이 정상 완료되었습니다!
        </h3>

        <p className="text-[13px] text-gray-300 leading-relaxed">
          {leadData?.parentName ? (
            <span className="text-white font-bold">{leadData.parentName}</span>
          ) : (
            '학부모'
          )}
          님, 남겨주신 연락처(
          <span className="text-yellow-300 font-bold">{leadData?.parentPhone}</span>
          )로 담당 입학 실장님이 1:1 맞춤 로드맵과 브로슈어를 즉시 발송해 드립니다.
        </p>

        {leadData && (
          <div className="w-full bg-[#121316] border border-white/10 rounded-xl p-3 text-left text-xs text-gray-300 flex flex-col gap-1.5 mt-1">
            <div className="flex justify-between">
              <span className="text-gray-400">자녀 학년:</span>
              <span className="font-bold text-white">{leadData.studentGrade}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">신청 분야:</span>
              <span className="font-bold text-orange-400 text-right">
                {leadData.programs.map(getProgramLabel).join(', ')}
              </span>
            </div>
          </div>
        )}

        <div className="w-full pt-2 flex flex-col gap-2">
          <a
            id="modal-btn-kakao"
            href="https://open.kakao.com/o/sYq1QUhd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] text-[13px] font-black flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-[#191919]" />
            <span>기다림 없이 카카오톡 즉시 문의</span>
          </a>

          <button
            type="button"
            id="modal-btn-close"
            onClick={onClose}
            className="w-full h-10 rounded-xl bg-white/10 hover:bg-white/15 text-gray-200 text-[13px] font-bold transition-colors cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
