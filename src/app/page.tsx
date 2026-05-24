"use client";

import CoverPage from "@/components/CoverPage";
import Section01 from "@/app/sections/s01-maktab";
import Section02 from "@/app/sections/s02-tawheed";
import Section03 from "@/app/sections/s03-makhazen";
import Section04 from "@/app/sections/s04-adawat";
import Section05 from "@/app/sections/s05-cmms";
import Section06 from "@/app/sections/s06-marahil";
import Section07 from "@/app/sections/s07-warsha";
import Section08 from "@/app/sections/s08-hawkama";
import Section09 from "@/app/sections/s09-salamat-mowazafin";
import Section10 from "@/app/sections/s10-salamat-faniyeen";

export default function Home() {
  return (
    <div className="max-w-[210mm] mx-auto bg-white print:bg-white min-h-screen relative">
      {/* Custom print header repeating on every page */}
      <div className="print-header hidden print:flex">
        <span className="font-extrabold text-[#1e3a5f]">دراسة تأسيس منظومة الصيانة المركزية</span>
        <span>مجموعة مؤسسات سقالة</span>
      </div>

      {/* Custom print footer repeating on every page */}
      <div className="print-footer hidden print:flex">
        <span>وثيقة سرية &middot; ٢٠٢٦</span>
        <span className="page-number font-bold text-[#1e3a5f]"></span>
      </div>

      <CoverPage />

      <div className="px-6 py-8 print:p-0 print:m-0 space-y-10 print:space-y-0">
        <div className="page-break">
          <Section01 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section02 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section03 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section04 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section05 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section06 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section07 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section08 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section09 />
        </div>

        <hr className="border-t-2 border-blue-600 print:hidden" />

        <div className="page-break">
          <Section10 />
        </div>
      </div>
    </div>
  );
}
