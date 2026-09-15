import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="imageModal"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-all cursor-zoom-out"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full max-h-[90vh] bg-[#17181C] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
      >
        <div className="flex items-center justify-between p-3.5 border-b border-white/10 bg-[#121316]">
          <span className="text-[14px] font-bold text-gray-200 truncate pr-2">
            {title}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-2 overflow-auto flex items-center justify-center bg-black/50 min-h-[260px] max-h-[75vh]">
          <img
            src={imageUrl}
            alt={title}
            className="w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-3 bg-[#121316] border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-bold"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
