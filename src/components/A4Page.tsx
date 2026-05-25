import React from "react";

interface A4PageProps {
  children: React.ReactNode;
  pageNum?: number;
  showFooter?: boolean;
  showHeader?: boolean;
}

export default function A4Page({
  children,
  pageNum,
  showFooter = true,
  showHeader = true,
}: A4PageProps) {
  return (
    <div className="a4-page relative flex flex-col justify-between">
      {/* Header */}
      {showHeader && (
        <div className="absolute top-[10mm] left-[18mm] right-[18mm] flex justify-between items-center border-b border-slate-200 pb-2 text-[8pt] text-slate-500 direction-rtl">
          <span className="font-extrabold text-[#1e3a5f]">دراسة تأسيس منظومة الصيانة المركزية</span>
          <img src="/images/cigalah_logo.png" alt="Cigalah Group" className="h-6 w-auto object-contain" />
        </div>
      )}

      {/* Content */}
      <div className="flex-grow flex flex-col justify-start overflow-hidden mt-[2mm] mb-[2mm]">
        {children}
      </div>

      {/* Footer */}
      {showFooter && (
        <div className="absolute bottom-[10mm] left-[18mm] right-[18mm] flex justify-between items-center border-t border-slate-200 pt-2 text-[8pt] text-slate-500 direction-rtl">
          <span />
          {pageNum !== undefined && (
            <span className="font-bold text-[#1e3a5f]">
              صفحة {pageNum}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
