import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "منظومة الصيانة المركزية | مقترح فني — سقالة",
  description: "دراسة تأسيس منظومة الصيانة المركزية لمجموعة مؤسسات سقالة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="max-w-[210mm] mx-auto bg-white min-h-screen shadow-[0_0_20px_rgba(0,0,0,0.05)] print:shadow-none relative z-10">
        {children}
        <div className="text-center text-[9px] text-[#94a3b8] py-3 border-t border-[#d9e0ed] print:fixed print:bottom-0 print:left-0 print:right-0 print:bg-white print:py-2 z-0 print:z-0">
          <span className="tracking-[0.15em]">مَجْمُوعَةُ مُؤَسَّسَاتِ سَقَالَة &middot; مَنْظُومَةُ الصِّيَانَةِ المَرْكَزِيَّة &middot; 2026</span>
          <span className="mx-2">|</span>
          <span className="page-number" />
        </div>
      </body>
    </html>
  );
}

