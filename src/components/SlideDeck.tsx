"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideProps {
  children: React.ReactNode;
  slideNum: number;
  totalSlides?: number;
  showHeader?: boolean;
  showFooter?: boolean;
  isActive?: boolean;
}

export function Slide({
  children,
  slideNum,
  totalSlides = 15,
  showHeader = true,
  showFooter = true,
  isActive = false,
}: SlideProps) {
  return (
    <div className={`slide-landscape-page relative flex flex-col justify-between ${isActive ? "active" : ""}`}>
      {/* Header */}
      {showHeader && (
        <div className="absolute top-[8mm] left-[15mm] right-[15mm] flex justify-between items-center border-b border-slate-200 pb-2 text-[8pt] text-slate-500 direction-rtl">
          <span className="font-extrabold text-[#1e3a5f] text-xs">عرض تقديمي للإدارة · منظومة الصيانة المركزية</span>
          <img src="/images/cigalah_logo.png" alt="Cigalah Group" className="h-6 w-auto object-contain" />
        </div>
      )}

      {/* Content */}
      <div className="flex-grow flex flex-col justify-start overflow-hidden mt-[10mm] mb-[6mm]">
        {children}
      </div>

      {/* Footer */}
      {showFooter && (
        <div className="absolute bottom-[8mm] left-[15mm] right-[15mm] flex justify-between items-center border-t border-slate-200 pt-2 text-[8pt] text-slate-500 direction-rtl">
          <span className="font-medium text-slate-400">مجموعة مؤسسات سقالة</span>
          <span className="font-bold text-[#1e3a5f]">
            شريحة {slideNum} من {totalSlides}
          </span>
        </div>
      )}
    </div>
  );
}

interface SlideDeckProps {
  children: React.ReactNode;
}

export default function SlideDeck({ children }: SlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement<SlideProps>[];
  const total = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < total - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        // Since Arabic reads right to left, ArrowLeft is NEXT for RTL layout,
        // but let's align: ArrowRight (prev/next depending on direction).
        // Let's standardise: ArrowLeft goes back (previous), ArrowRight goes forward (next).
        nextSlide();
      } else if (e.key === "ArrowRight") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="slide-deck-wrapper w-full flex flex-col items-center">
      {/* Dynamic landscape page styling override only for presentation page */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 landscape !important;
            margin: 0 !important;
          }
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .slide-deck-controls {
            display: none !important;
          }
          .slide-landscape-page {
            display: flex !important;
            width: 297mm !important;
            height: 210mm !important;
            max-height: 210mm !important;
            padding: 16mm 15mm 16mm 15mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            background: white !important;
            page-break-after: always !important;
            break-after: page !important;
            border-radius: 0 !important;
            overflow: hidden !important;
            position: relative !important;
            box-sizing: border-box !important;
          }
        }
        
        @media screen {
          .slide-landscape-page {
            width: 297mm;
            height: 210mm;
            padding: 16mm 15mm 16mm 15mm;
            margin: 0 auto;
            background: white;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            display: none;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide-landscape-page.active {
            display: flex;
          }
        }
      `}} />

      {/* Screen Mode: Widescreen Slideshow */}
      <div className="relative w-full max-w-[297mm] flex flex-col items-center select-none print:hidden">
        {/* Active Slide Container */}
        <div className="w-full flex justify-center items-center">
          {slides.map((child, index) =>
            React.cloneElement(child, {
              isActive: index === currentSlide,
              slideNum: index + 1,
              totalSlides: total,
              key: index,
            })
          )}
        </div>

        {/* Side navigation arrows */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`absolute left-[-60px] top-[105mm] -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-slate-700 rounded-full shadow-md transition-all ${
            currentSlide === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
          }`}
          aria-label="الشريحة السابقة"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === total - 1}
          className={`absolute right-[-60px] top-[105mm] -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-slate-700 rounded-full shadow-md transition-all ${
            currentSlide === total - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
          }`}
          aria-label="الشريحة التالية"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Bottom controls panel */}
        <div className="slide-deck-controls mt-6 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-between gap-6 w-full max-w-[500px]">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-xs font-bold text-slate-500 hover:text-navy-500 disabled:opacity-30 disabled:hover:text-slate-500 cursor-pointer"
          >
            السابق
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-6 bg-navy-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                title={`شريحة ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === total - 1}
            className="text-xs font-bold text-slate-500 hover:text-navy-500 disabled:opacity-30 disabled:hover:text-slate-500 cursor-pointer"
          >
            التالي
          </button>
        </div>
      </div>

      {/* Print Mode: All slides printed sequentially */}
      <div className="hidden print:block w-full">
        {slides.map((child, index) =>
          React.cloneElement(child, {
            isActive: true,
            slideNum: index + 1,
            totalSlides: total,
            key: `print-${index}`,
          })
        )}
      </div>
    </div>
  );
}
