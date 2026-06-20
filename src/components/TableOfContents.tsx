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
  ListCollapse 
} from "lucide-react";

interface TocSubChild {
  label: string;
  page: string;
}

interface TocSubItem {
  label: string;
  page: string;
  children?: TocSubChild[];
}

interface TocItem {
  id: number;
  title: string;
  pages: string;
  icon: React.ComponentType<any>;
  subItems: TocSubItem[];
}

export default function TableOfContents() {
  const page1Items: TocItem[] = [
    {
      id: 1,
      title: "الجزء الأول: المكتب الفني المركزي لإدارة الصيانة",
      pages: "١ - ٢٩",
      icon: Building2,
      subItems: [
        {
          label: "الرؤية والأهداف والفلسفة التشغيلية للمنظومة",
          page: "١",
          children: [
            { label: "تحديات الوضع الحالي ورؤية التغيير", page: "١" },
            { label: "الأهداف الاستراتيجية الهندسية والمالية", page: "٣" },
            { label: "الفلسفة التشغيلية المقترحة للمنظومة الموحدة", page: "٥" }
          ]
        },
        {
          label: "الهيكل والمهام التشغيلية للمكتب الفني",
          page: "٦",
          children: [
            { label: "الهيكل التنظيمي للمكتب والمهام الفردية", page: "٦" },
            { label: "طبيعة أعمال الصيانة وتوزيع الفنيين", page: "٩" },
            { label: "تصنيف وترتيب المواقع فنيًا (SLA)", page: "١١" }
          ]
        },
        {
          label: "حوكمة المقاولين والمشتريات التشغيلية",
          page: "١٣",
          children: [
            { label: "إجراءات شراء المواد الطارئة ودورة الصرف", page: "١٣" },
            { label: "حوكمة أعمال مقاولي الباطن والضمانات", page: "١٦" },
            { label: "بطاقة تقييم الموردين ومصفوفة الصلاحيات (RACI)", page: "٢٠" },
            { label: "خطة إحلال الكوادر الوطنية ونقل الخبرة", page: "٢٤" }
          ]
        },
        {
          label: "النماذج الفنية والاستمارات التشغيلية المعتمدة",
          page: "٢٤",
          children: [
            { label: "نموذج تقرير تدقيق جودة المواقع وصيانة مقاول", page: "٢٤" },
            { label: "بطاقة الأداء الشهري للمقاولين (Scorecard)", page: "٢٥" },
            { label: "نموذج طلب شراء فني طارئ (Purchase Request)", page: "٢٦" },
            { label: "شهادة استلام أعمال مقاول الباطن (Completion)", page: "٢٧" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "الجزء الثاني: توحيد فرق الصيانة الميدانية",
      pages: "٣٠ - ٥٠",
      icon: Users,
      subItems: [
        {
          label: "التوصيف الوظيفي والسجلات المعتمدة للفريق",
          page: "٣٣",
          children: [
            { label: "بطاقة التوصيف الوظيفي للفني (Job Specs)", page: "٣٣" },
            { label: "سجل التدريب الفني للفنيين الفردي (Training Log)", page: "٤٥" }
          ]
        },
        {
          label: "توزيع الكوادر الفنية وهندسة الفرق الجغرافية",
          page: "٣٨",
          children: [
            { label: "توزيع الفرق الميدانية وقنوات الاتصال", page: "٣٨" },
            { label: "تقييم الأداء الفني ومؤشرات الإنتاجية", page: "٥٠" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "الجزء الثالث: إدارة مخازن قطع الغيار",
      pages: "٥١ - ٦٨",
      icon: ShoppingCart,
      subItems: [
        {
          label: "ترميز الأصول والقطع وتصنيف الباركود",
          page: "٥٤",
          children: [
            { label: "آلية الترميز وإنشاء قاعدة بيانات المخزون", page: "٥٤" },
            { label: "حوكمة الصرف وربط المخازن بأوامر العمل", page: "٥٩" }
          ]
        },
        {
          label: "استمارات جرد ومطابقة المخزون التشغيلية",
          page: "٦٤",
          children: [
            { label: "محضر فحص واستلام قطع الغيار بالمخازن", page: "٦٤" },
            { label: "بطاقة جرد مخزن فرعي ومطابقة CMMS", page: "٦٦" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "الجزء الرابع: إدارة العدد والأدوات الفنية",
      pages: "٦٩ - ٨٢",
      icon: Wrench,
      subItems: [
        {
          label: "عهدة الفنيين وحقيبة العدد الشخصية المعتمدة",
          page: "٧٢",
          children: [
            { label: "مكونات الحقيبة وتوزيع العهد الفردية", page: "٧٢" },
            { label: "سجل فحص الأدوات الشخصية الأسبوعي للفني", page: "٨١" }
          ]
        },
        {
          label: "نظام حجز واستعارة العدد المشتركة برمز QR",
          page: "٧٦",
          children: [
            { label: "إجراءات الحجز والمسؤولية والـ QR كود", page: "٧٦" },
            { label: "نموذج طلب حجز واستعارة معدة مشتركة", page: "٨٠" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "الجزء الخامس: نظام CMMS المخصص (منصة GridFix)",
      pages: "٨٣ - 10٨",
      icon: Settings,
      subItems: [
        {
          label: "حصر الأصول وترميز الـ QR كود في المرافق",
          page: "٨٦",
          children: [
            { label: "كرت حصر الأصول الميدانية التفصيلي", page: "١٠٢" },
            { label: "طلب إنشاء أو تعديل أصل رقمي على النظام", page: "١٠٤" }
          ]
        },
        {
          label: "دورة أوامر العمل وتطبيق الجوال للميدان",
          page: "٩٢",
          children: [
            { label: "دورة البلاغ وأمر العمل الرقمي والتطبيق", page: "٩٢" },
            { label: "تقارير تحليل الأعطال المتكررة Bad Actors", page: "١٠٦" }
          ]
        },
        {
          label: "استمرارية الأعمال والأوفلاين وإجراءات الطوارئ",
          page: "١٠٨",
          children: [
            { label: "إجراء التشغيل بدون إنترنت (Offline Mode)", page: "١٠٨" }
          ]
        }
      ]
    }
  ];

  const page2Items: TocItem[] = [
    {
      id: 6,
      title: "الجزء السادس: مراحل التنفيذ وإدارة التغيير",
      pages: "١٠٩ - ١١٧",
      icon: Activity,
      subItems: [
        {
          label: "خطة مراحل التحول الرقمي الخمسة للمشروع",
          page: "١٠٩",
          children: [
            { label: "مراحل إطلاق النظام والجدول الزمني الحركي", page: "١٠٩" },
            { label: "جدول اللجنة التوجيهية وتوزيع المسؤوليات", page: "١١٢" }
          ]
        },
        {
          label: "استمارات إدارة التغيير والقبول والتحليل",
          page: "١١٤",
          children: [
            { label: "نموذج اختبار قبول المستخدم للنظام (UAT Sign-off)", page: "١١٤" },
            { label: "مصفوفة تقييم مخاطر التحول والتشغيل والحد منها", page: "١١٦" }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "الجزء السابع: الورشة المركزية المتخصصة",
      pages: "١١٨ - ١٢٥",
      icon: Wrench,
      subItems: [
        {
          label: "تجهيز وتوزيع مناطق وأجهزة الفحص بالورشة",
          page: "١١٩",
          children: [
            { label: "تصميم وتقسيم مناطق الورشة المركزية", page: "١١٩" },
            { label: "بطاقة أصل ومعايرة أجهزة القياس بالورشة", page: "١٢١" }
          ]
        },
        {
          label: "إجراءات عمرة وصيانة الضواغط الكبيرة",
          page: "١٢٢",
          children: [
            { label: "SOP إجراء التشغيل المعتمد لإعمار الضواغط", page: "١٢٢" },
            { label: "تقرير فحص وتعمير وحدة ضاغط تبريد بالورشة", page: "١٢٥" }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "الجزء الثامن: حوكمة السلامة بالمنشآت",
      pages: "١٢٦ - ١٣١",
      icon: Shield,
      subItems: [
        {
          label: "امتثال المباني وتراخيص الدفاع المدني",
          page: "١٢٧",
          children: [
            { label: "قائمة تدقيق الدفاع المدني وسلامة المنشأة", page: "١٢٧" }
          ]
        },
        {
          label: "سجلات رصد حوادث الصيانة وجداول العقوبات",
          page: "١٢٩",
          children: [
            { label: "نموذج سجل رصد حوادث الصيانة الميدانية", page: "١٢٩" },
            { label: "لائحة الجزاءات ومخالفات السلامة المعتمدة", page: "١٣١" }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "الجزء التاسع: سلامة الموظفين والوقاية",
      pages: "١٣٢ - ١٣٦",
      icon: Heart,
      subItems: [
        {
          label: "خطط الوقاية وإجراءات الطوارئ للمباني",
          page: "١٣٣",
          children: [
            { label: "SOP إجراء الطوارئ لسيناريو انقطاع الكهرباء", page: "١٣٣" },
            { label: "تقويم التدريبات الوهمية والوقاية السنوي", page: "١٣٥" },
            { label: "نموذج تقرير تقييم تجربة إخلاء وهمية بالفروع", page: "١٣٦" }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "الجزء العاشر: سلامة الفنيين والمقاولين",
      pages: "١٣٧ - ١٤٠",
      icon: ShieldCheck,
      subItems: [
        {
          label: "تصاريح العمل الآمن والساخن للمهمات",
          page: "١٣٨",
          children: [
            { label: "نموذج تصريح العمل الآمن الكهربائي والارتفاعات", page: "١٣٨" },
            { label: "استمارة تصريح العمل الساخن وأعمال اللحام", page: "١٣٩" },
            { label: "قائمة التحقق لمعدات الوقاية الفردية للفني", page: "١٤٠" }
          ]
        }
      ]
    }
  ];

  const renderTree = (items: TocItem[]) => {
    return (
      <div className="space-y-4">
        {items.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.id} className="bg-slate-50/40 border border-slate-200/20 p-2.5 rounded-xl shadow-xs no-break hover:bg-slate-50/85 transition-colors duration-200">
              {/* Level 1: Parent Section Title */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="p-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-lg shrink-0">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-800 tracking-tight leading-tight">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[9px] font-black text-[#1e3a5f] bg-[#1e3a5f]/5 px-2 py-0.5 rounded-full shrink-0">
                  ص {item.pages}
                </span>
              </div>

              {/* Level 2: Children Tree */}
              <div className="mr-3 pr-3.5 border-r border-slate-200/80 space-y-2 mt-1">
                {item.subItems.map((sub, idx) => (
                  <div key={idx} className="space-y-1">
                    {/* Level 2 Item */}
                    <div className="relative flex items-center justify-between text-[8.5px] leading-tight text-slate-700 font-extrabold group">
                      <span className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-2.5 h-[1px] bg-slate-200/80 group-hover:bg-blue-400 transition-colors" />
                      <span className="group-hover:text-blue-600 transition-colors pl-2" style={{ wordBreak: "keep-all" }}>
                        {sub.label}
                      </span>
                      <span className="text-slate-400 font-bold shrink-0">
                        ص {sub.page}
                      </span>
                    </div>

                    {/* Level 3: Sub-children Tree */}
                    {sub.children && (
                      <div className="mr-2 pr-3.5 border-r border-dashed border-slate-200 space-y-1 mt-0.5 mb-1.5">
                        {sub.children.map((child, cIdx) => (
                          <div key={cIdx} className="relative flex items-center justify-between text-[7.5px] leading-tight text-slate-500 group/child">
                            <span className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-2.5 h-[1px] border-b border-dashed border-slate-200 group-hover/child:border-blue-400 transition-colors" />
                            <span className="group-hover/child:text-blue-500 transition-colors pl-2" style={{ wordBreak: "keep-all" }}>
                              {child.label}
                            </span>
                            <span className="text-slate-400 font-normal shrink-0">
                              ص {child.page}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
    <>
      {/* TOC PAGE 1 */}
      <A4Page pageNum={undefined} showHeader={true} showFooter={true}>
        <div className="space-y-3">
          {/* Header Title */}
          <div className="text-center pb-2.5 border-b border-slate-200">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[8.5px] font-bold bg-[#1e3a5f]/5 text-[#1e3a5f] mb-1">
              <ListCollapse className="w-3.5 h-3.5" />
              <span>فهرس الدراسة الشجري المفصل</span>
            </div>
            <h2 className="text-base font-black text-slate-800 tracking-tight">
              جدول المحتويات وتقسيم الأقسام والهياكل (الجزء الأول)
            </h2>
            <p className="text-[8.5px] text-slate-500 max-w-xl mx-auto leading-normal">
              يوضح هذا الفهرس التقسيم الشجري الهرمي للـ 140 صفحة الخاصة بالدراسة الكاملة، ويغطي هذا الجزء الأقسام من الأول إلى الخامس والملفات التشغيلية المضمنة بها.
            </p>
          </div>

          {/* 2-Column Grid for Parts 1 to 5 */}
          <div className="grid grid-cols-2 gap-4 text-right direction-rtl">
            {/* Right Column (Parts 1, 2) */}
            <div className="order-1 space-y-4">
              {renderTree(page1Items.slice(0, 2))}
            </div>

            {/* Left Column (Parts 3, 4, 5) */}
            <div className="order-2 space-y-4">
              {renderTree(page1Items.slice(2, 5))}
            </div>
          </div>
        </div>
      </A4Page>

      {/* TOC PAGE 2 */}
      <A4Page pageNum={undefined} showHeader={true} showFooter={true}>
        <div className="space-y-3">
          {/* Header Title */}
          <div className="text-center pb-2.5 border-b border-slate-200">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[8.5px] font-bold bg-[#1e3a5f]/5 text-[#1e3a5f] mb-1">
              <ListCollapse className="w-3.5 h-3.5" />
              <span>فهرس الدراسة الشجري المفصل</span>
            </div>
            <h2 className="text-base font-black text-slate-800 tracking-tight">
              جدول المحتويات وتقسيم الأقسام والهياكل (الجزء الثاني)
            </h2>
            <p className="text-[8.5px] text-slate-500 max-w-xl mx-auto leading-normal">
              يغطي هذا الجزء الأقسام من السادس إلى العاشر الخاصة بخطط التنفيذ، وحوكمة السلامة بالمنشآت، وتصاريح العمل الآمن والساخن.
            </p>
          </div>

          {/* 2-Column Grid for Parts 6 to 10 */}
          <div className="grid grid-cols-2 gap-4 text-right direction-rtl">
            {/* Right Column (Parts 6, 7) */}
            <div className="order-1 space-y-4">
              {renderTree(page2Items.slice(0, 2))}
            </div>

            {/* Left Column (Parts 8, 9, 10) */}
            <div className="order-2 space-y-4">
              {renderTree(page2Items.slice(2, 5))}
            </div>
          </div>
        </div>
      </A4Page>
    </>
  );
}
