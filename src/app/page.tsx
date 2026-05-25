"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, ClipboardList, Monitor, ArrowLeft, ChevronLeft, ShieldCheck, Settings, Users2 } from "lucide-react";

export default function LandingPage() {
  const cards = [
    {
      title: "الدراسة الكاملة للمشروع",
      subtitle: "المشروع الكامل المدمج",
      path: "/all",
      pages: "82 صفحة",
      badge: "فني وتفصيلي",
      color: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/10 hover:shadow-blue-500/20",
      border: "hover:border-blue-500/50",
      glow: "bg-blue-500/10 text-blue-400",
      description: "الدراسة الفنية والتشغيلية الشاملة لكافة أقسام منظومة الصيانة المركزية (المكتب الفني، توحيد الفرق، إدارة المخازن والقطع، العُهد والعدد، نظام CMMS المخصص GridFix، وحوكمة السلامة بالمنشآت).",
      icon: BookOpen,
    },
    {
      title: "الملخص التنفيذي للمنظومة",
      subtitle: "ملخص مخصص للإدارة العليا",
      path: "/sum",
      pages: "15 صفحة",
      badge: "نظرة عامة والجدوى",
      color: "from-emerald-600 to-teal-500",
      shadow: "shadow-emerald-500/10 hover:shadow-emerald-500/20",
      border: "hover:border-emerald-500/50",
      glow: "bg-emerald-500/10 text-emerald-400",
      description: "نظرة سريعة ومكثفة تغطي أهداف المبادرة، الوضع الحالي، الفلسفة التشغيلية المقترحة لفرق الصيانة، مقارنة التكاليف على 5 سنوات والوفر المالي التراكمي، وتوصيات الاعتماد والبدء الفوري.",
      icon: ClipboardList,
    },
    {
      title: "العرض التقديمي الموجه للإدارة",
      subtitle: "Management Presentation",
      path: "/pre",
      pages: "15 شريحة",
      badge: "تصوري وسيناريوهات",
      color: "from-violet-600 to-fuchsia-500",
      shadow: "shadow-violet-500/10 hover:shadow-violet-500/20",
      border: "hover:border-violet-500/50",
      glow: "bg-violet-500/10 text-violet-400",
      description: "عرض بصري تفاعلي يركز على المشكلة والحلول المقارنة، تفاصيل دورة يوم العمل للفني عبر تطبيق الجوال، مصفوفة التقييم الكمي، مقارنة GridFix مع Maximo و Fiix، ومسار تحويل النظام لمنتج استثماري تجاري.",
      icon: Monitor,
    },
  ];

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen flex flex-col justify-between overflow-x-hidden relative font-sans selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-blue-900/10 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-12 right-12 w-[350px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-12 left-12 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Header */}
      <header className="w-full border-b border-slate-800/80 bg-slate-900/30 backdrop-blur-md relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
              <Settings className="w-6 h-6 text-blue-400 animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white font-sans">بوابة الصيانة المركزية</h1>
              <p className="text-xs text-slate-400">مجموعة مؤسسات سقالة &middot; المنظومة الموحدة</p>
            </div>
          </div>

          <div className="flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
            <img 
              src="/images/cigalah_logo.png" 
              alt="Cigalah Group Logo" 
              className="h-10 w-auto object-contain filter brightness-110" 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 md:py-20 relative z-10">
        <div className="max-w-6xl w-full mx-auto px-4 text-center">
          
          {/* Main Title Banner */}
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4 animate-pulse">
              <ShieldCheck className="w-3.5 h-3.5" />
              النسخة الرقمية المعتمدة لعام 2026
            </span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
              تأسيس وإدارة <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">منظومة الصيانة المركزية</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              بوابة الوصول الموحدة للدراسة الهندسية والجدوى الاقتصادية لمنظومة الصيانة وربطها بنظام إدارة الأصول الرقمي المخصص. الرجاء اختيار المستند المطلوب للاستعراض.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            {cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <Link 
                  key={card.path} 
                  href={card.path}
                  className={`group relative flex flex-col justify-between bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 shadow-2xl ${card.shadow} ${card.border} overflow-hidden`}
                >
                  {/* Subtle hover gradient inside card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Icon & Metadata Grid */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg shadow-black/30 transform group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                          {card.pages}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${card.glow}`}>
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    {/* Titles */}
                    <span className="text-xs text-blue-400 font-semibold tracking-wider block mb-1">
                      {card.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300 mb-3">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                      {card.description}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-slate-300 group-hover:text-white transition-colors duration-300">
                    <span className="text-xs font-semibold">استعراض المستند الفوري</span>
                    <div className="flex items-center gap-1 bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/50 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300">
                      <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-800/60 bg-slate-950/40 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Users2 className="w-4 h-4 text-slate-600" />
            <span>تمت الدراسة وإعدادها بواسطة: <strong className="text-slate-400">وائل عبد الجليل</strong></span>
          </div>
          <div className="flex gap-4">
            <span>حقوق الطبع والتملك فكرياً للمجموعة محفوظة</span>
            <span>&middot;</span>
            <span>2026م</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
