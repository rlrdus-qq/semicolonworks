import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2 } from 'lucide-react';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceCodeModal: React.FC<SourceCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      const res = await fetch('/wcs_web.html');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const link = document.createElement('a');
      link.href = '/wcs_web.html';
      link.target = '_blank';
      link.click();
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/wcs_web.html';
    a.download = 'wcs_web.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleOpenNewTab = () => {
    window.open('/wcs_web.html', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#17181C] rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-5 py-4 bg-[#0B0C0E] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF5600]/20 text-[#FF5600] flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-white">웹 전용 소스 코드 (wcs_web.html)</h3>
              <p className="text-[11px] text-gray-400">
                디자인과 구성이 100% 동일한 독립형 단일 웹 HTML 파일
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="px-5 py-3 bg-[#131418] border-b border-white/10 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <span className="text-xs text-gray-300 font-medium">
            어떤 웹 호스팅·서버에도 파일 1개로 즉시 배포 가능합니다.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-[#FF5600] hover:bg-[#E04C00] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '복사 완료!' : '전체 소스 복사'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>HTML 파일 다운로드</span>
            </button>
            <button
              onClick={handleOpenNewTab}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-yellow-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>새 탭에서 미리보기</span>
            </button>
          </div>
        </div>

        {/* Content Info */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-gray-300">
          <div className="p-3.5 rounded-xl bg-[#0B0C0E] border border-white/10 space-y-2">
            <div className="font-bold text-white text-[13px] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              웹 버전 파일 구성 안내
            </div>
            <p className="text-gray-400 leading-relaxed">
              본 웹 소스는 외부 의존성(빌드 도구, Node.js) 없이 브라우저에서 직접 구동되는 단독 HTML5 파일입니다.
              기존 앱과 <strong>동일한 다크 프리미엄 테마(#0B0C0E)</strong>, <strong>공식 로고 및 캠퍼스·골프·인증서 고화질 사진</strong>, <strong>카운트다운 타이머</strong>, <strong>상담 신청 폼</strong>, <strong>라이트박스 줌</strong> 기능이 모두 포함되어 있습니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 rounded bg-white/5 border border-white/5">
                <span className="text-gray-500 block">파일 경로</span>
                <span className="text-orange-400 font-bold">/public/wcs_web.html</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5">
                <span className="text-gray-500 block">스타일링 엔진</span>
                <span className="text-blue-400 font-bold">Tailwind CSS (CDN)</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5">
                <span className="text-gray-500 block">호환성</span>
                <span className="text-emerald-400 font-bold">PC & 모바일 반응형</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B0C0E] border border-white/10 space-y-2">
            <div className="font-bold text-white text-[13px]">웹 서버 배포 방법 3가지</div>
            <ol className="list-decimal list-inside space-y-1.5 text-gray-400 leading-relaxed">
              <li>
                <strong className="text-gray-200">일반 웹호스팅 (카페24, 가비아, AWS S3 등):</strong> 다운로드한 <code className="text-orange-300">wcs_web.html</code>의 이름을 <code className="text-orange-300">index.html</code>로 변경하여 FTP 업로드하면 즉시 사이트가 오픈됩니다.
              </li>
              <li>
                <strong className="text-gray-200">기존 웹사이트에 서브 랜딩페이지로 삽입:</strong> 도메인 루트 또는 하위 폴더에 <code className="text-orange-300">wcs_web.html</code>을 그대로 넣어 링크를 연결합니다.
              </li>
              <li>
                <strong className="text-gray-200">iFrame 임베드:</strong> 다른 CMS(워드프레스, 노션 등)에서 <code className="text-orange-300">&lt;iframe src="wcs_web.html"&gt;</code>로 직접 삽입할 수 있습니다.
              </li>
            </ol>
          </div>
        </div>

        {/* Footer Close */}
        <div className="px-5 py-3 bg-[#0B0C0E] border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
