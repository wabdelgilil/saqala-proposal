"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Printer, Palette } from "lucide-react";

export default function PrintControlBar() {
  const [isGrayscale, setIsGrayscale] = useState(false);

  useEffect(() => {
    // Check initial state from body class
    if (typeof document !== "undefined") {
      setIsGrayscale(document.body.classList.contains("theme-grayscale"));
    }
  }, []);

  const toggleGrayscale = () => {
    if (typeof document !== "undefined") {
      const active = document.body.classList.toggle("theme-grayscale");
      setIsGrayscale(active);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 print:hidden flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-700/60 shadow-xl transition-all duration-300 hover:shadow-blue-500/10">
      {/* Home Link */}
      <Link
        href="/"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold"
        title="العودة إلى البوابة الرئيسية"
      >
        <Home className="w-4.5 h-4.5" />
        <span>الرئيسية</span>
      </Link>

      <div className="w-[1px] h-4 bg-slate-800" />

      {/* Grayscale Toggle */}
      <button
        onClick={toggleGrayscale}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-xs font-semibold cursor-pointer ${
          isGrayscale
            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
            : "text-slate-300 hover:text-white hover:bg-white/5"
        }`}
        title="نمط موفر الحبر (أبيض وأسود)"
      >
        <Palette className="w-4.5 h-4.5" />
        <span>{isGrayscale ? "وضع الألوان" : "وضع موفر الحبر (رمادي)"}</span>
      </button>

      <div className="w-[1px] h-4 bg-slate-800" />

      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all text-xs font-semibold cursor-pointer"
        title="بدء طباعة المستند"
      >
        <Printer className="w-4.5 h-4.5" />
        <span>طباعة / تصدير PDF</span>
      </button>
    </div>
  );
}
