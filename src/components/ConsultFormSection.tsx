import React, { useState } from 'react';
import { Send, Lock, CheckCircle2 } from 'lucide-react';
import { LeadFormData } from '../types';

interface ConsultFormSectionProps {
  onSubmitSuccess: (data: LeadFormData) => void;
}

export const ConsultFormSection: React.FC<ConsultFormSectionProps> = ({ onSubmitSuccess }) => {
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [studentGrade, setStudentGrade] = useState('');
  const [programs, setPrograms] = useState<string[]>(['early']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleProgram = (progId: string) => {
    setPrograms(prev =>
      prev.includes(progId) ? prev.filter(p => p !== progId) : [...prev, progId]
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 7) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    } else if (value.length > 3) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    }
    setParentPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !parentPhone.trim() || !studentGrade) {
      return;
    }

    setIsSubmitting(true);

    const leadData: LeadFormData = {
      parentName: parentName.trim(),
      parentPhone: parentPhone.trim(),
      studentGrade,
      programs: programs.length > 0 ? programs : ['early'],
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage for demo persistence
    try {
      const stored = localStorage.getItem('wcs_leads');
      const leads = stored ? JSON.parse(stored) : [];
      leads.unshift(leadData);
      localStorage.setItem('wcs_leads', JSON.stringify(leads));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(leadData);
    }, 400);
  };

  return (
    <section
      id="consult-section"
      className="px-4 py-8 bg-[#121316] border-t border-white/10 flex flex-col gap-4 scroll-mt-20"
    >
      <div className="flex flex-col gap-1 text-center">
        <span className="text-xs font-black text-orange-400 tracking-wider uppercase">
          FAST APPLICATION
        </span>
        <h2 className="text-[22px] sm:text-[24px] font-black text-white leading-tight">
          선착순 잔여석 &amp; 1:1 맞춤 로드맵 신청
        </h2>
        <p className="text-[13px] text-gray-400">
          정보를 남겨주시면 담당 입학 실장님이 30분 내로 친절히 연락드립니다.
        </p>
      </div>

      <form
        id="leadForm"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3.5 bg-[#1A1C20] p-4 rounded-2xl border border-white/10 shadow-xl"
      >
        {/* Parent Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-300" htmlFor="parentName">
            학부모 성함 *
          </label>
          <input
            id="parentName"
            type="text"
            required
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            placeholder="예: 김학부모"
            className="h-11 px-3.5 rounded-lg bg-[#24262C] border border-white/15 text-white text-[14px] placeholder:text-gray-500 focus:border-[#FF5600] focus:ring-1 focus:ring-[#FF5600] outline-none transition-all"
          />
        </div>

        {/* Contact Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-300" htmlFor="parentPhone">
            연락처 *
          </label>
          <input
            id="parentPhone"
            type="tel"
            required
            value={parentPhone}
            onChange={handlePhoneChange}
            placeholder="예: 010-1234-5678"
            className="h-11 px-3.5 rounded-lg bg-[#24262C] border border-white/15 text-white text-[14px] placeholder:text-gray-500 focus:border-[#FF5600] focus:ring-1 focus:ring-[#FF5600] outline-none transition-all"
          />
        </div>

        {/* Student Grade */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-300" htmlFor="studentGrade">
            자녀 현재 학년 *
          </label>
          <select
            id="studentGrade"
            required
            value={studentGrade}
            onChange={(e) => setStudentGrade(e.target.value)}
            className="h-11 px-3.5 rounded-lg bg-[#24262C] border border-white/15 text-white text-[14px] focus:border-[#FF5600] focus:ring-1 focus:ring-[#FF5600] outline-none transition-all cursor-pointer"
          >
            <option value="" className="bg-[#24262C] text-gray-400">
              자녀 학년을 선택하세요
            </option>
            <option value="초등 1~3학년" className="bg-[#24262C] text-white">
              초등 1~3학년
            </option>
            <option value="초등 4~6학년" className="bg-[#24262C] text-white">
              초등 4~6학년
            </option>
            <option value="중학교 1~3학년" className="bg-[#24262C] text-white">
              중학교 1~3학년
            </option>
            <option value="고등학교 1~3학년" className="bg-[#24262C] text-white">
              고등학교 1~3학년
            </option>
          </select>
        </div>

        {/* Program Checkboxes */}
        <div className="flex flex-col gap-1.5 pt-1">
          <span className="text-xs font-bold text-gray-300">관심 프로그램 (중복 선택)</span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { id: 'early', label: '정규 조기유학' },
              { id: 'camp', label: '방학 몰입캠프' },
              { id: 'golf', label: '주니어 골프' },
              { id: 'cyber', label: '온라인 스쿨' },
            ].map((p) => {
              const isChecked = programs.includes(p.id);
              return (
                <label
                  key={p.id}
                  id={`program-label-${p.id}`}
                  className={`flex items-center gap-2.5 p-2.5 rounded-lg border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'border-[#FF5600] bg-orange-500/15 text-white'
                      : 'border-white/10 bg-[#24262C] text-gray-300 hover:border-white/20'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleProgram(p.id)}
                    className="rounded border-white/20 text-[#FF5600] focus:ring-0 accent-[#FF5600] w-4 h-4"
                  />
                  <span className="font-bold text-[13px]">{p.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Big Orange Submit Action Button */}
        <button
          type="submit"
          id="submit-consult-button"
          disabled={isSubmitting}
          className="w-full h-13 py-3.5 mt-2 rounded-xl bg-[#FF5600] hover:bg-[#E04C00] text-white text-[16px] font-black flex items-center justify-center gap-2 active:scale-98 transition-all btn-glow shadow-lg cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              신청 접수 중...
            </span>
          ) : (
            <>
              <span>무료 입학 가이드북 &amp; 로드맵 신청</span>
              <Send className="w-5 h-5 text-white shrink-0" />
            </>
          )}
        </button>

        <p className="text-[11.5px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-0.5">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          개인정보는 입학 상담 외 용도로 사용되지 않습니다.
        </p>
      </form>
    </section>
  );
};
