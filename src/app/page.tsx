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
    <div className="max-w-[210mm] mx-auto bg-white print:bg-white min-h-screen">
      <CoverPage />

      <div className="px-6 py-8 print:px-[18mm] print:py-[16mm] space-y-10 print:space-y-8">
        <div className="print:break-before-page">
          <Section01 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section02 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section03 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section04 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section05 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section06 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section07 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section08 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section09 />
        </div>

        <hr className="border-t-2 border-blue-600 print:border-blue-600" />

        <div className="print:break-before-page">
          <Section10 />
        </div>
      </div>
    </div>
  );
}
