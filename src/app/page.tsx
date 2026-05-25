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
    <div className="w-full bg-[#f1f5f9] min-h-screen relative print:bg-white print:w-auto py-2 print:p-0 print:m-0">
      <CoverPage />

      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <Section10 />
    </div>
  );
}
