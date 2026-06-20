"use client";

import React from "react";
import A4Page from "@/components/A4Page";
import { 
  Building2, 
  Users, 
  ShoppingCart, 
  Wrench, 
  Settings, 
  Activity, 
  Shield, 
  Heart, 
  ShieldCheck, 
  FileText, 
  ListCollapse 
} from "lucide-react";

interface TocSubItem {
  label: string;
  page: string;
}

interface TocItem {
  id: number;
  title: string;
  pages: string;
  icon: React.ComponentType<any>;
  subItems: TocSubItem[];
}

export default function TableOfContents() {
  const leftColItems: TocItem[] = [
    {
      id: 1,
      title: "الجزء الأول: المكتب الفني المركزي",
      pages: "١ - ٢٩",
      icon: Building2,
      subItems: [
        { label: "الهيكل والمهام التشغيلية للمكتب", page: "٦" },
        { label: "إجراءات حوكمة المقاولين والمشتريات", page: "١٦" },
        { label: "نماذج الزيارة والتقييم ومحاضر الاستلام", page: "٢٤" },
      ]
    },
    {
      id: 2,
      title: "الجزء الثاني: توحيد فرق الصيانة الميدانية",
      pages: "٣٠ - ٥٠",
      icon: Users,
      subItems: [
        { label: "بطاقة التوصيف الوظيفي الموحد للفني", page: "٣٣" },
        { label: "مصفوفة توزيع الكوادر الفنية جغرافياً", page: "٣٨" },
        { label: "سجلات ومستندات تدريب الفنيين الفردية", page: "٤٥" },
      ]
    },
    {
      id: 3,
      title: "الجزء الثالث: إدارة مخازن قطع الغيار",
      pages: "٥١ - ٦٨",
      icon: ShoppingCart,
      subItems: [
        { label: "ترميز الأصول والقطع وتصنيف الباركود", page: "٥٤" },
        { label: "حوكمة الصرف والدورة المستودعية للأعطال", page: "٥٩" },
        { label: "استمارات مطابقة المخزن والجرد الدوري", page: "٦٤" },
      ]
    },
    {
      id: 4,
      title: "الجزء الرابع: إدارة العدد والأدوات الفنية",
      pages: "٦٩ - ٨٢",
      icon: Wrench,
      subItems: [
        { label: "عهد الفنيين وحقيبة العدد الفردية", page: "٧٢" },
        { label: "نظام حجز واستعارة العدد المشتركة والـ QR", page: "٧٦" },
        { label: "سجلات الفحص والتدقيق الأسبوعي للحقائب", page: "٨٠" },
      ]
    },
    {
      id: 5,
      title: "الجزء الخامس: نظام CMMS (منصة GridFix)",
      pages: "٨٣ - ١٠٨",
      icon: Settings,
      subItems: [
        { label: "حصر الأصول وتصنيفها وترميز الـ QR", page: "٨٦" },
        { label: "دورة أوامر العمل وتطبيق الجوال للميدان", page: "٩٢" },
        { label: "تحليل الأعطال المتكررة Bad Actors واستمرارية العمل", page: "٩٩" },
      ]
    }
  ];

  const rightColItems: TocItem[] = [
    {
      id: 6,
      title: "الجزء السادس: مراحل التنفيذ وإدارة التغيير",
      pages: "١٠٩ - ١١٧",
      icon: Activity,
      subItems: [
        { label: "خطة مراحل التحول الرقمي ومصفوفة النقل", page: "١١١" },
        { label: "نموذج اختبار القبول UAT ومصفوفة تقييم المخاطر", page: "١١٤" },
      ]
    },
    {
      id: 7,
      title: "الجزء السابع: الورشة المركزية المتخصصة",
      pages: "١١٨ - ١٢٥",
      icon: Wrench,
      subItems: [
        { label: "تخطيط وتوزيع مناطق الورشة وأجهزة المعايرة", page: "١١٩" },
        { label: "إجراء التشغيل SOP لتعمير وعمرة الضواغط الكبيرة", page: "١٢٢" },
      ]
    },
    {
      id: 8,
      title: "الجزء الثامن: حوكمة السلامة بالمنشآت",
      pages: "١٢٦ - ١٣١",
      icon: Shield,
      subItems: [
        { label: "قائمة امتثال المباني وتراخيص الدفاع المدني", page: "١٢٧" },
        { label: "سجل رصد الحوادث ولائحة جزاءات السلامة", page: "١٢٩" },
      ]
    },
    {
      id: 9,
      title: "الجزء التاسع: سلامة الموظفين والوقاية",
      pages: "١٣٢ - ١٣٦",
      icon: Heart,
      subItems: [
        { label: "إجراء التشغيل SOP لسيناريو انقطاع الكهرباء", page: "١٣٣" },
        { label: "جدول التدريبات الوهمية والوقاية في الفروع", page: "١٣٥" },
      ]
    },
    {
      id: 10,
      title: "الجزء العاشر: سلامة الفنيين والمقاولين",
      pages: "١٣٧ - ١٤٠",
      icon: ShieldCheck,
      subItems: [
        { label: "نموذج تصريح العمل الآمن PTW للمواقع", page: "١٣٨" },
        { label: "استمارة تصريح العمل الساخن للمهمات الحساسة", page: "١٣٩" },
      ]
    }
  ];

  const renderColumn = (items: TocItem[]) => {
    return (
      <div className="space-y-5">
        {items.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.id} className="bg-slate-50/40 border border-slate-200/30 p-3 rounded-xl shadow-xs no-break hover:bg-slate-50/80 transition-colors duration-200">
              {/* Parent Item */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-lg shrink-0">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-800 tracking-tight leading-tight">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[10px] font-black text-[#1e3a5f] bg-[#1e3a5f]/5 px-2 py-0.5 rounded-full shrink-0">
                  صفحة {item.pages}
                </span>
              </div>

              {/* Hierarchical Sub-items Tree */}
              <div className="mr-3 pr-3.5 border-r border-slate-200 space-y-2 mt-1">
                {item.subItems.map((sub, idx) => (
                  <div key={idx} className="relative flex items-center justify-between text-[8.5px] leading-tight text-slate-600 group">
                    {/* Horizontal connector line */}
                    <span className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-2.5 h-[1px] bg-slate-200 group-hover:bg-blue-400 transition-colors" />
                    <span className="font-medium text-slate-600 group-hover:text-blue-600 transition-colors pl-2" style={{ wordBreak: "keep-all" }}>
                      {sub.label}
                    </span>
                    <span className="text-slate-400 font-extrabold shrink-0">
                      ص {sub.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <A4Page pageNum={undefined} showHeader={true} showFooter={true}>
      <div className="space-y-4">
        {/* Title Header */}
        <div className="text-center pb-2 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold bg-[#1e3a5f]/5 text-[#1e3a5f] mb-1">
            <ListCollapse className="w-3.5 h-3.5" />
            <span>فهرس الدراسة الشجري</span>
          </div>
          <h2 className="text-lg font-black text-slate-800 tracking-tight">
            جدول المحتويات وتقسيم الصفحات التفصيلي
          </h2>
          <p className="text-[10px] text-slate-500 max-w-xl mx-auto leading-normal">
            توضح هذه الصفحة الهيكل الفني للدراسة وأرقام الصفحات لكل جزء من الأجزاء العشرة مع أهم النماذج والإجراءات المعيارية المضمنة في كل قسم.
          </p>
        </div>

        {/* Tree Contents Grid (2 Columns) */}
        <div className="grid grid-cols-2 gap-4 text-right direction-rtl">
          {/* Column 1 (Right in RTL - Parts 1 to 5) */}
          <div className="order-1">
            {renderColumn(leftColItems)}
          </div>

          {/* Column 2 (Left in RTL - Parts 6 to 10) */}
          <div className="order-2">
            {renderColumn(rightColItems)}
          </div>
        </div>
      </div>
    </A4Page>
  );
}
