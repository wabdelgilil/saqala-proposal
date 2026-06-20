"use client";

import { Building2, Target, Lightbulb, Users, ClipboardList, ShoppingCart, FileText, Activity, Shield, BarChart3, Monitor, BookOpen, Award, AlertTriangle, Key, Heart, HelpCircle, Wrench, Settings2, Smartphone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import SequenceDiagram from "@/components/SequenceDiagram";
import SlideDeck, { Slide } from "@/components/SlideDeck";
import PrintControlBar from "@/components/PrintControlBar";

export default function PresentationPage() {

  // Data Definitions
  const techDayCols = [{ key: "step", label: "الخطوة" }, { key: "desc", label: "الوصف" }];
  const techDayRows = [
    { step: "🌅 بداية اليوم", desc: "الفني يفتح تطبيق الجوال ويستعرض المهام المسندة إليه لليوم مرتبة حسب الأولوية" },
    { step: "📋 تحديد المتطلبات", desc: "معرفة موقع العطل، مواصفات الأصل، والأدوات أو قطع الغيار المطلوبة قبل التوجه للموقع" },
    { step: "🔧 تنفيذ المهام بالتتالي", desc: "التوجه للمواقع، الإصلاح الميداني، والتقاط صور قبل وبعد العمل للتوثيق" },
    { step: "🌇 نهاية اليوم", desc: "تسجيل التقارير الفنية وإغلاق أوامر العمل رقمياً لضمان حساب مؤشرات الأداء تلقائياً" },
  ];

  const cmmsCompareCols = [{ key: "area", label: "مجال المقارنة" }, { key: "ready", label: "الأنظمة الجاهزة بالسوق" }, { key: "custom", label: "✅ نظام GridFix (تطوير داخلي)" }];
  const cmmsCompareRows = [
    { area: "التكلفة السنوية", ready: "60,000 - 120,000 ريال (تتزايد مع المستخدمين)", custom: "6,000 - 12,000 ريال (تكلفة الاستضافة السحابية فقط)" },
    { area: "التكلفة في 5 سنوات", ready: "420,000 - 690,000 ريال (بدون أصول مملوكة)", custom: "54,000 - 103,000 ريال (شامل التطوير والاستضافة)" },
    { area: "ملكية الكود والنظام", ready: "استئجار مؤقت (يتوقف النظام فور توقف الدفع)", custom: "تملك كامل وحصري للمجموعة (أصل استثماري فني)" },
    { area: "التخصيص والتعريب", ready: "محدود وواجهات مترجمة آلياً ومقيدة", custom: "كامل وتفصيلي ومصمم بالكامل لعمليات سقالة" },
    { area: "طلبات الموظفين", ready: "تحتاج رخص إضافية مكلفة (Add-on)", custom: "مفتوحة ومدمجة مجاناً لجميع موظفي المجموعة" },
    { area: "دعم العمل دون اتصال", ready: "محدود ويحتاج باقات مرتفعة التكلفة", custom: "مدمج تلقائياً (Offline Mode) للفنيين عبر الجوال" },
    { area: "التكامل مع ERP و HR", ready: "معقد ومكلف ويحتاج تراخيص ربط إضافية", custom: "مرن ومفتوح بالكامل عبر واجهات برمجية مخصصة" },
    { area: "إمكانية بيعه تجارياً", ready: "غير ممكنة على الإطلاق", custom: "ممكنة لشركات صيانة أخرى لإنشاء مصدر دخل جديد" },
  ];

  const evalMatrixCols = [
    { key: "criteria", label: "المعيار" },
    { key: "weight", label: "الوزن" },
    { key: "ready", label: "الأنظمة الجاهزة" },
    { key: "gridfix", label: "GridFix" }
  ];
  const evalMatrixRows = [
    { criteria: "التكلفة طويلة المدى (TCO)", weight: "25%", ready: "2/10", gridfix: "10/10" },
    { criteria: "التخصيص والمرونة التشغيلية", weight: "20%", ready: "2/10", gridfix: "10/10" },
    { criteria: "دعم واجهات الموظفين المجانية", weight: "15%", ready: "3/10", gridfix: "10/10" },
    { criteria: "دعم اللغة العربية الكامل", weight: "10%", ready: "3/10", gridfix: "10/10" },
    { criteria: "التحكم في البيانات والملكية", weight: "10%", ready: "2/10", gridfix: "10/10" },
    { criteria: "سرعة التشغيل الأولي", weight: "10%", ready: "7/10", gridfix: "6/10" },
    { criteria: "دعم فني وتواصل فوري", weight: "10%", ready: "7/10", gridfix: "7/10" },
    { criteria: "المجموع الموزون النهائي", weight: "100%", ready: "3.2/10", gridfix: "✅ 9.3/10" },
  ];

  const fiveYearCostCols = [
    { key: "phase", label: "البيان التشغيلي" },
    { key: "ready", label: "الأنظمة الجاهزة" },
    { key: "gridfix", label: "GridFix" }
  ];
  const fiveYearCostRows = [
    { phase: "تكلفة السنة الأولى", ready: "80,000 - 130,000 ريال", gridfix: "30,000 - 55,000 ريال (تتطوير + استضافة)" },
    { phase: "تكلفة السنة الثانية", ready: "80,000 - 130,000 ريال", gridfix: "6,000 - 12,000 ريال (استضافة فقط)" },
    { phase: "تكلفة السنة الثالثة", ready: "85,000 - 140,000 ريال", gridfix: "6,000 - 12,000 ريال (استضافة فقط)" },
    { phase: "تكلفة السنة الرابعة", ready: "85,000 - 140,000 ريال", gridfix: "6,000 - 12,000 ريال (استضافة فقط)" },
    { phase: "تكلفة السنة الخامسة", ready: "90,000 - 150,000 ريال", gridfix: "6,000 - 12,000 ريال (استضافة فقط)" },
    { phase: "إجمالي التكلفة في 5 سنوات", ready: "420,000 - 690,000 ريال", gridfix: "✅ 54,000 - 103,000' ريال" },
  ];

  const cashFlowCols = [{ key: "item", label: "المصروف والملكية" }, { key: "ready", label: "الأنظمة الجاهزة" }, { key: "gridfix", label: "GridFix" }];
  const cashFlowRows = [
    { item: "مدفوع لشركات برمجيات خارجية (خارج المجموعة)", ready: "420,000 - 690,000 ريال", gridfix: "50,000 ريال (تكلفة التطوير الأولي)" },
    { item: "أموال تظل في خزينة المجموعة (وفر مالي)", ready: "0 ريال", gridfix: "370,000 - 587,000 ريال" },
    { item: "أصل رقمي وفني مملوك بالكامل للمجموعة", ready: "لا تملك شيئاً (عقد إيجار)", gridfix: "✅ نعم، ملكية فكرية وحصرية مطلقة" },
    { item: "إمكانية تسويق وبيع النظام تجارياً للغير", ready: "مستحيل", gridfix: "✅ نعم، ترخيص واشتراكات لشركات صيانة أخرى" },
  ];

  const marketCompareCols = [
    { key: "criteria", label: "المجال المقارن" },
    { key: "maximo", label: "Maximo (IBM)" },
    { key: "fiix", label: "Fiix" },
    { key: "upkeep", label: "UpKeep" },
    { key: "gridfix", label: "GridFix ✅" }
  ];
  const marketCompareRows = [
    { criteria: "التكلفة السنوية التقديرية", maximo: "+150,000 ريال", fiix: "80,000 - 120,000", upkeep: "60,000 - 100,000", gridfix: "6,000 - 12,000" },
    { criteria: "ملكية الكود والنظام", maximo: "إيجار رخص", fiix: "إيجار رخص", upkeep: "إيجار رخص", gridfix: "تملك كامل" },
    { criteria: "دعم واجهة الموظفين مجاناً", maximo: "add-on", fiix: "add-on", upkeep: "محدود", gridfix: "مدمج تلقائياً" },
    { criteria: "التكلفة الإجمالية في 5 سنوات", maximo: "+750,000 ريال", fiix: "400,000 - 600,000", upkeep: "300,000 - 500,000", gridfix: "54,000 - 103,000" },
  ];

  const integrationCols = [{ key: "sys", label: "النظام الحالي" }, { key: "point", label: "التكامل مع GridFix" }, { key: "benefit", label: "الفائدة المباشرة" }];
  const integrationRows = [
    { sys: "النظام المالي (ERP)", point: "تصدير فواتير قطع الغيار وتكاليف الصيانة للأصول", benefit: "دقة محاسبية كاملة وربط تكلفة الأصل بقيمته الدفترية" },
    { sys: "HR / شؤون الموظفين", point: "مزامنة بيانات الفنيين والإجازات والدوام اليومي", benefit: "تحديث توزيع المهام التلقائي ومنع إرسال بلاغ لفني مجاز" },
    { sys: "أنظمة المباني (BMS)", point: "تحويل إنذارات الأعطال والحرارة لبلاغات صيانة تلقائياً", benefit: "استباق الأعطال التشغيلية قبل أن يشعر بها الموظف أو العميل" },
    { sys: "البريد الإلكتروني المؤسسة", point: "إشعارات بحالة الطلبات وتنبيهات المهام المتأخرة", benefit: "تواصل سريع وشفاف وموثق لكافة أطراف المنظومة" },
  ];

  const marketingCols = [{ key: "element", label: "العنصر" }, { key: "detail", label: "التفاصيل" }];
  const marketingRows = [
    { element: "السوق المستهدف للتسويق", detail: "شركات الصيانة، شركات إدارة المرافق، الفنادق، المستشفيات، والمجمعات السكنية" },
    { element: "نموذج التسعير المخطط", detail: "اشتراك شهري/سنوي مرن (SaaS) يشمل الدعم الفني والاستضافة السحابية" },
    { element: "الميزة التنافسية لـ GridFix", detail: "تكلفة أقل بنسبة 70% مقارنة بالأنظمة العالمية + دعم كامل ومتميز للغة العربية" },
    { element: "العائد المالي السنوي المتوقع", detail: "200,000 - 500,000 ريال سنوياً بعد السنة الرابعة من التطبيق والاستقرار" },
  ];

  const reqSystemCols = [{ key: "feature", label: "الميزة" }, { key: "desc", label: "الوصف والتشغيل" }];
  const reqSystemRows = [
    { feature: "رفع طلب صيانة", desc: "من الويب أو الجوال — أي موظف في المجموعة بضغطة زر" },
    { feature: "تصنيف تلقائي للطلب", desc: "إصلاح عطل ← يذهب لمدير الصيانة، طلب إضافة جديدة ← يحتاج موافقة مدير الموقع" },
    { feature: "توثيق شامل", desc: "تسجيل تاريخ ووقت الطلب، من قام برفعه، حالته الفورية، وتاريخ الإنجاز والتقييم" },
    { feature: "متابعة آنية للموظف", desc: "الموظف يستطيع استعراض حالة البلاغ (قيد الانتظار — قيد التنفيذ — منجز)" },
    { feature: "إشعارات وصور", desc: "إشعارات فورية وتنبيهات عبر الجوال، مع إمكانية رفع صور العطل والإصلاح الفعلي" },
  ];

  const techSystemCols = [{ key: "feature", label: "الميزة" }, { key: "desc", label: "الوصف والتشغيل" }];
  const techSystemRows = [
    { feature: "جدول يومي منظم", desc: "يستعرض الفني مهامه لليوم على شاشة جواله مرتبة حسب الأولوية والموقع" },
    { feature: "توجيه جغرافي ذكي", desc: "أقرب فني متاح لموقع العطل يستلم المهمة تلقائياً لتقليل زمن الاستجابة" },
    { feature: "توثيق الإنجاز الميداني", desc: "رفع تقرير الإصلاح الفني وصور القطع التالفة والجديدة المستخدمة" },
    { feature: "إبلاغ المشكلات", desc: "إمكانية إرسال ملاحظة فورية للمشرف في حال وجود عوائق فنية أو تشغيلية" },
  ];

  const repSystemCols = [{ key: "rep", label: "التقرير الفني" }, { key: "freq", label: "الدورية" }];
  const repSystemRows = [
    { rep: "إجمالي طلبات الصيانة وتصنيفها (مفتوح / منجز / قيد الانتظار)", freq: "يومي + شهري" },
    { rep: "متوسط زمن الاستجابة للبلاغات الفورية (SLA)", freq: "شهري" },
    { rep: "أداء الفنيين ومعدل إنجاز المهام لكل فني", freq: "شهري" },
    { rep: "تكاليف الصيانة وقطع الغيار حسب المبنى والأصل", freq: "شهري" },
    { rep: "تقرير الأعطال المتكررة وتحليل أسبابها الجذرية", freq: "ربع سنوي" },
    { rep: "تقرير جرد المخازن وحالة قطع الغيار الحرجة", freq: "أسبوعي" },
  ];

  const assetSystemCols = [{ key: "feature", label: "الميزة" }, { key: "desc", label: "الوصف والتشغيل" }];
  const assetSystemRows = [
    { feature: "قاعدة بيانات الأصول", desc: "تسجيل شامل لكل أصل (الموقع، المواصفات، تاريخ الشراء، الضمان، وتاريخ الصيانة)" },
    { feature: "ملصقات الاستجابة QR", desc: "توليد ملصق QR فريد لكل أصل، مسحه بالجوال يعرض كامل تاريخه الفني وتكلفته" },
    { feature: "إدارة المخازن الذكية", desc: "متابعة أرصدة قطع الغيار وتنبيه المكتب الفني تلقائياً عند الاقتراب من الحد الأدنى" },
    { feature: "ربط المخزن بأوامر العمل", desc: "تسجيل صرف القطع وربط تكلفتها برقم أمر العمل والأصل مباشرة" },
  ];

  const devPhasesCols = [{ key: "phase", label: "المرحلة" }, { key: "duration", label: "المدة" }, { key: "content", label: "المحتوى البرمجي والتشغيلي" }];
  const devPhasesRows = [
    { phase: "🥇 الأولى: الأساس التشغيلي", duration: "6 - 8 أسابيع", content: "قاعدة الأصول + أوامر العمل + طلبات الموظفين + تطبيق الفنيين للجوال" },
    { phase: "🥈 الثانية: إدارة الموارد", duration: "4 - 6 أسابيع", content: "إدارة المخازن وجرد قطع الغيار + إدارة عهود العدد والأدوات + العقود والموردين" },
    { phase: "🥉 الثالثة: التقارير والسلامة", duration: "4 - 6 أسابيع", content: "لوحات التحكم التفاعلية للإدارة + تقارير الأداء + تصاريح العمل والامتثال للدفاع المدني" },
    { phase: "🏆 الرابعة: التطوير والتحليل", duration: "مستمر", content: "إدخال مميزات الذكاء الاصطناعي والتكامل مع BMS والتحليل التنبؤي للأعطال" },
  ];

  const qaCols = [{ key: "q", label: "السؤال المتوقع من الإدارة" }, { key: "a", label: "الإجابة وحقائق الواقع" }];
  const qaRows = [
    { q: "لماذا لا نشتري نظاماً جاهزاً بدلاً من التطوير؟", a: "لأن النظام الجاهز استئجار مستمر يكلف 587,000 ريال إضافية في 5 سنوات دون تملك. GridFix تملكه للأبد ويوفر هذا الهدر." },
    { q: "هل الكود والنظام سيكون آمناً وموثوقاً؟", a: "نعم، يتم تشغيله على استضافة سحابية سيكيور مشفرة بالكامل SSL مع نسخ احتياطي يومي وسجل تدقيق شامل لكل حركة." },
    { q: "ماذا لو احتجنا ميزة جديدة مستقبلاً؟", a: "نضيفها مباشرة وبدون تكاليف إضافية لأننا نملك الكود بالكامل، بينما النظام الجاهز تضطر لدفع مبالغ ضخمة للتخصيص." },
    { q: "هل واجهات الموظفين معقدة؟", a: "بالعكس، تم تصميم واجهة بسيطة للغاية تتيح للموظف العادي رفع البلاغ في أقل من 15 ثانية، مع إمكانية تتبع الحالة وصور العطل." },
  ];

  const workshopZoneCols = [{ key: "zone", label: "المنطقة" }, { key: "use", label: "الاستخدام" }, { key: "size", label: "المساحة التقريبية" }];
  const workshopZoneRows = [
    { zone: "⚙️ منطقة الصيانة الميكانيكية", use: "أعمال التصنيع والإصلاح والخراطة واللحام للمعدات الكبرى والضواغط", size: "30% (60-90 م٢)" },
    { zone: "⚡ منطقة الصيانة الكهربائية", use: "إصلاح وصيانة اللوحات ولوحات التحكم PLC والمواتير الدقيقة ومعايرتها", size: "15% (30-45 م٢)" },
    { zone: "📦 منطقة التخزين والاستلام", use: "مخزن قطع الغيار المستلمة وأرفف تخزين العدد والمعدات وحقائب الفنيين", size: "30% (60-90 م٢)" },
    { zone: "🔍 منطقة الاختبار والمحاكاة", use: "تجريب المعدات بعد صيانها تحت الحمل لضمان الجودة قبل النقل للموقع", size: "10% (20-30 م٢)" },
  ];

  const safetyComplianceCols = [{ key: "item", label: "بند الامتثال والوقاية" }, { key: "action", label: "الإجراء التشغيلي" }, { key: "status", label: "الأهمية والدفاع المدني" }];
  const safetyComplianceRows = [
    { item: "🚒 تراخيص الدفاع المدني", action: "التأكد من سريان التراخيص لجميع الفروع وتحديثها آلياً عبر المكتب الفني", status: "حرج جداً - متطلب بلدي" },
    { item: "🧯 طفايات الحريق والإنذار", action: "فحص أسبوعي مجدول عبر تطبيق الفني وصيانة سنوية معتمدة", status: "إجباري - سلامة مباني" },
    { item: "📋 تصاريح العمل الآمن (PTW)", action: "إصدار رقمي عبر CMMS للأعمال الخطرة (الكهرباء، الارتفاعات، والأماكن المغلقة)", status: "وقاية - سلامة الفنيين" },
    { item: "🔥 تصاريح العمل الساخن", action: "تأمين الموقع بالكامل قبل أعمال اللحام والقطع الصاروخي بمتابعة مسؤول السلامة", status: "إجباري - منع الحرائق" },
  ];

  return (
    <div className="w-full bg-[#f1f5f9] min-h-screen flex items-center justify-center py-6 print:p-0 print:m-0 print:bg-white">
      <SlideDeck>
        {/* Slide 1 - Cover Page */}
        <Slide slideNum={1} showHeader={false} showFooter={false}>
          <div className="relative flex flex-col items-center justify-center h-full bg-white text-center px-12">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#1e3a5f]" />
              <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1e3a5f]/5" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-500/5" />
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-[650px] my-auto">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1e3a5f] text-white mb-6 shadow-lg">
                <Building2 size={36} />
              </div>

              <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
                عرض تقديمي للإدارة · النسخة الأولى
              </span>

              <h1 className="text-2xl font-bold text-[#1e3a5f] leading-tight mb-2">
                دراسة تأسيس منظومة<br />
                <span className="text-blue-500">الصيانة المركزية (نظام GridFix)</span>
              </h1>

              <p className="text-xs text-slate-500 mb-4">
                مجموعة مؤسسات سقالة
              </p>

              <div className="w-16 h-0.5 bg-blue-500/40 my-3" />

              <p className="text-[10px] text-slate-400 leading-relaxed max-w-[460px]">
                عرض استراتيجي لتوحيد إدارة الصيانة في جميع مباني ومرافق المجموعة
                وتملك نظام إدارة أصول رقمي CMMS ذكي ومخصص
              </p>

              <div className="mt-8 pt-4 border-t border-slate-100 w-full">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { val: "١٦ شريحة", label: "مجموع العرض" },
                    { val: "٣ مستويات", label: "هيكل التشغيل" },
                    { val: "٩٣٪ وفر", label: "مقارنة بالجاهز" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-sm font-bold text-[#1e3a5f]">{s.val}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 text-[10px] text-slate-400 font-medium">
              تمت الدراسة وإعدادها بواسطة: وائل عبد الجليل
            </div>
          </div>
        </Slide>

        {/* Slide 2 */}
        <Slide slideNum={2}>
          <SectionHeader icon={AlertTriangle} title="المشكلة التي يحلها نظام GridFix" subtitle="تحويل عمليات الصيانة من العشوائية اليدوية إلى التوثيق الرقمي الممنهج" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm text-xs">
              <p className="text-slate-700 leading-relaxed mb-3">
                يعتمد النظام التقليدي على الاتصالات الهاتفية والورقية التي تؤدي لتشتت المهام وضياع البلاغات، بينما يضمن نظام GridFix تسجيل البلاغ ومتابعته رقمياً بالكامل.
              </p>
              <FlowChart
                dir="LR"
                nodes={[
                  { id: "قبل", label: "قبل GridFix — يدوي", icon: "❌", color: "red" },
                  { id: "أ1", label: "اتصال غير موثق", icon: "📞" },
                  { id: "أ2", label: "ورقة ضائعة", icon: "📝" },
                  { id: "بعد", label: "بعد GridFix — رقمي", icon: "✅", color: "green" },
                  { id: "ب1", label: "بلاغ جوال مباشر", icon: "📱" },
                  { id: "ب2", label: "جدولة آلية", icon: "💻" },
                ]}
                edges={[
                  { from: "قبل", to: "أ1" }, { from: "أ1", to: "أ2" },
                  { from: "بعد", to: "ب1" }, { from: "ب1", to: "ب2" },
                  { from: "قبل", to: "بعد" },
                ]}
              />
            </div>

            <CallOutBox type="goal" title="ما هو GridFix؟">
              هو منصة رقمية متكاملة (SaaS) لإدارة الصيانة والأصول، تعمل على الويب والجوال، مصممة خصيصاً لربط جميع أطراف الصيانة (الإدارة، المشرفين، الفنيين، والموظفين) في منظومة عمل موحدة.
            </CallOutBox>
          </div>
        </Slide>

        {/* Slide 3 */}
        <Slide slideNum={3}>
          <SectionHeader icon={Monitor} title="منصة GridFix والأطراف المستفيدة منها" subtitle="لوحة تحكم إدارية وتطبيقات جوال مخصصة للفنيين والموظفين" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-2">منصة GridFix والأطراف المستفيدة منها</h4>
              <FlowChart
                dir="LR"
                nodes={[
                  { id: "منصة", label: "منصة GridFix", icon: "🧩", color: "navy" },
                  { id: "ويب", label: "🌐 لوحة ويب للإدارة", icon: "💻" },
                  { id: "جوال", label: "📱 تطبيق الجوال للميدان", icon: "📱" },
                  { id: "إدارة", label: "إدارة الصيانة (تقارير)", icon: "👨‍💼" },
                  { id: "فني", label: "الفنيين (مهام وتوثيق)", icon: "🔧" },
                  { id: "موظف", label: "الموظفين (رفع بلاغات)", icon: "👤" },
                ]}
                edges={[
                  { from: "منصة", to: "ويب" }, { from: "منصة", to: "جوال" },
                  { from: "ويب", to: "إدارة" }, { from: "جوال", to: "فني" }, { from: "جوال", to: "موظف" },
                ]}
              />
            </div>

            <CallOutBox type="tip" title="تكامل الأدوار والمستويات">
              يتميز النظام بتقديم واجهات مخصصة لكل فئة: واجهة إدارة كبرى لمدير الصيانة، تطبيق جوال مبسط للفنيين للتنفيذ والرفع، وواجهة جوال سريعة للموظفين للإبلاغ عن المشكلات.
            </CallOutBox>
          </div>
        </Slide>

        {/* Slide 4 */}
        <Slide slideNum={4}>
          <SectionHeader icon={ClipboardList} title="سيناريوهات الاستخدام الفعلية للمنصة" subtitle="السيناريو 1: التعامل مع بلاغ عطل طارئ" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-2">تسلسل بلاغ صيانة نموذجي (مكيف لا يبرد)</h4>
              <SequenceDiagram
                participants={[
                  { id: "موظف", label: "الموظف بالمكتب", icon: "👤", color: "slate" },
                  { id: "جوال", label: "تطبيق الجوال", icon: "📱", color: "blue" },
                  { id: "نظام", label: "GridFix CMMS", icon: "💻", color: "navy" },
                  { id: "مدير", label: "مدير الصيانة", icon: "👨‍💼", color: "green" },
                  { id: "فني", label: "الفني الميداني", icon: "🔧", color: "amber" },
                ]}
                steps={[
                  { from: "موظف", to: "جوال", label: "يرفع بلاغ عطل" },
                  { from: "جوال", to: "نظام", label: "تسجيل الطلب والموقع" },
                  { from: "نظام", to: "مدير", label: "تنبيه فوري بالطلب" },
                  { from: "مدير", to: "فني", label: "توزيع المهمة ميدانياً" },
                  { from: "فني", to: "جوال", label: "توجه للموقع والإصلاح" },
                  { from: "فني", to: "نظام", label: "إغلاق الطلب وتحديث الأداء" },
                ]}
              />
            </div>

            <CallOutBox type="goal" title="الفرق الجوهري في التشغيل">
              الطلب يمر بشكل تلقائي كامل ويتم أرشفته وتوثيق صور الإصلاح ومعدل رضا الموظف تلقائياً دون أي تدخل ورقي أو اتصال هاتفي قد ينسى.
            </CallOutBox>
          </div>
        </Slide>

        {/* Slide 5 */}
        <Slide slideNum={5}>
          <SectionHeader icon={ClipboardList} title="سيناريوهات الاستخدام الفعلية للمنصة" subtitle="السيناريو 2: طلبات الإضافة وتعديل المواقع (غير الأعطال)" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-2">طلبات الإضافة وتعديل المواقع</h4>
              <FlowChart
                dir="LR"
                nodes={[
                  { id: "موظف", label: "طلب تركيب جديد", icon: "📝", color: "navy" },
                  { id: "نوع", label: "نوع الطلب؟", icon: "❓", color: "amber" },
                  { id: "إضافة", label: "إضافة: موافقة المدير", icon: "👨‍💼", color: "amber" },
                  { id: "قرار", label: "اعتماد المدير؟", icon: "⚖️", color: "amber" },
                  { id: "تنفيذ", label: "صيانة: جدولة وتنفيذ", icon: "✅", color: "green" },
                  { id: "رفض", label: "رفض الطلب وإشعار", icon: "❌", color: "red" },
                ]}
                edges={[
                  { from: "موظف", to: "نوع" },
                  { from: "نوع", to: "إضافة", label: "إضافة" },
                  { from: "إضافة", to: "قرار" },
                  { from: "قرار", to: "تنفيذ", label: "موافق" },
                  { from: "قرار", to: "رفض", label: "مرفوض" },
                ]}
              />
            </div>

            <CallOutBox type="safety" title="أتمتة الحوكمة والموافقة">
              النظام يمنع الفنيين من تنفيذ أي أعمال تركيبات أو إضافات جديدة للمكاتب دون وجود موافقة مسجلة وموثقة إلكترونياً من المدير المباشر للموقع المعني.
            </CallOutBox>
          </div>
        </Slide>

        {/* Slide 6 */}
        <Slide slideNum={6}>
          <SectionHeader icon={ClipboardList} title="سيناريوهات الاستخدام الفعلية للمنصة" subtitle="السيناريو 3: دورة وتفاصيل يوم عمل الفني الميداني" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm">
              <FlowChart
                dir="LR"
                nodes={[
                  { id: "صباح", label: "🌅 بداية اليوم", sub: "فتح التطبيق", icon: "📱", color: "navy" },
                  { id: "مهام", label: "📋 استعراض المهام", sub: "جدولة حسب الأولوية", icon: "📋" },
                  { id: "تنفيذ", label: "🔧 تنفيذ المهام", sub: "صور قبل وبعد العمل", icon: "🔧", color: "green" },
                  { id: "نهاية", label: "🌇 نهاية اليوم", sub: "إغلاق رقمي وتوثيق", icon: "✅", color: "green" },
                ]}
                edges={[
                  { from: "صباح", to: "مهام" },
                  { from: "مهام", to: "تنفيذ" },
                  { from: "تنفيذ", to: "نهاية" },
                ]}
              />
            </div>

            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm">
              <DataTable columns={techDayCols} rows={techDayRows} />
            </div>
          </div>
        </Slide>

        {/* Slide 7 */}
        <Slide slideNum={7}>
          <SectionHeader icon={BarChart3} title="مقارنة GridFix مع الأنظمة الجاهزة بالسوق" subtitle="مقارنة الفروق التشغيلية والتقنية بين الخيارات المتاحة" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm overflow-hidden">
              <DataTable columns={cmmsCompareCols} rows={cmmsCompareRows} />
            </div>
          </div>
        </Slide>

        {/* Slide 8 */}
        <Slide slideNum={8}>
          <SectionHeader icon={BarChart3} title="مصفوفة التقييم الكمي للمفاضلة" subtitle="التقييم الفني والمالي الموزون بين الأنظمة المتاحة" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <DataTable columns={evalMatrixCols} rows={evalMatrixRows} />
            </div>

            <CallOutBox type="goal" title="خلاصة التقييم الموزون">
              يحقق نظام GridFix تقييماً موزوناً مرتفعاً جداً (9.3/10) مقارنة بالأنظمة الجاهزة (3.2/10) نظراً لوفره المالي الشديد، مرونته التشغيلية ودعمه الكامل للعربية دون تكاليف تراخيص تصاعدية.
            </CallOutBox>
          </div>
        </Slide>

        {/* Slide 9 */}
        <Slide slideNum={9}>
          <SectionHeader icon={ShoppingCart} title="التحليل المالي والمقارنة الاقتصادية" subtitle="مقارنة التكلفة والوفر المالي التراكمي على مدى 5 سنوات" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <DataTable columns={fiveYearCostCols} rows={fiveYearCostRows} />
            </div>

            <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm">
              <FlowChart
                dir="LR"
                nodes={[
                  { id: "جاهز", label: "الأنظمة الجاهزة (5 سنوات)", sub: "420k - 690k ريال", icon: "💸", color: "red" },
                  { id: "جريد", label: "نظام GridFix (5 سنوات)", sub: "54k - 103k ريال", icon: "✅", color: "green" },
                  { id: "وفر", label: "الوفر الإجمالي المتبقي بخزينة المجموعة", sub: "وفر 366k - 587k ريال", icon: "💰", color: "green" },
                ]}
                edges={[
                  { from: "جاهز", to: "وفر" },
                  { from: "جريد", to: "وفر" },
                ]}
              />
            </div>
          </div>
        </Slide>

        {/* Slide 10 */}
        <Slide slideNum={10}>
          <SectionHeader icon={ShoppingCart} title="أين تذهب الميزانية والملكيات الفنية؟" subtitle="أثر الصرف المالي ومقارنة الخصائص الفكرية والاستثمارية" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <DataTable columns={cashFlowCols} rows={cashFlowRows} />
            </div>

            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <DataTable columns={marketCompareCols} rows={marketCompareRows} />
            </div>
          </div>
        </Slide>

        {/* Slide 11 */}
        <Slide slideNum={11}>
          <SectionHeader icon={Monitor} title="التكامل التقني والتطوير الاستثماري للمجموعة" subtitle="الربط مع البرمجيات القائمة ومسار التحول لمنتج تجاري" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm overflow-hidden">
              <DataTable columns={integrationCols} rows={integrationRows} />
            </div>

            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm">
              <FlowChart
                dir="LR"
                nodes={[
                  { id: "y1", label: "سنة 1: تشغيل داخلي", sub: "دعم مرافق المجموعة بالوظائف الأساسية", icon: "🏗️", color: "navy" },
                  { id: "y2", label: "سنة 2: ميزات متقدمة", sub: "إضافة الذكاء الاصطناعي والتحليل", icon: "💻", color: "blue" },
                  { id: "y3", label: "سنة 3: استقرار واستثمار", sub: "تسويق خارجي لشركات الصيانة", icon: "💰", color: "green" },
                ]}
                edges={[
                  { from: "y1", to: "y2" },
                  { from: "y2", to: "y3" },
                ]}
              />
            </div>
          </div>
        </Slide>

        {/* Slide 12 */}
        <Slide slideNum={12}>
          <SectionHeader icon={Monitor} title="نموذج الاستثمار والتسويق التجاري المقترح" subtitle="تفاصيل الترويج لـ GridFix كمنصة SaaS في الأسواق المحلية والإقليمية" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm overflow-hidden">
              <DataTable columns={marketingCols} rows={marketingRows} />
            </div>

            <CallOutBox type="tip" title="ميزة استثمارية فريدة لا يقدمها أي نظام جاهز">
              يتحول نظام GridFix بالكامل من كونه مركز تكلفة للمجموعة إلى كونه أصل استثماري رقمي يدر عائداً مالياً سنوياً متوقعاً يقدر بـ 200,000 - 500,000 ريال بعد استقراره وتسويقه.
            </CallOutBox>
          </div>
        </Slide>

        {/* Slide 13 */}
        <Slide slideNum={13}>
          <SectionHeader icon={Wrench} title="إدارة الورشة المركزية والمعدات المشتركة" subtitle="تأسيس مركز متكامل ومجدول لصيانة المعدات والعدد المشتركة" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <DataTable columns={workshopZoneCols} rows={workshopZoneRows} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm">
                <h4 className="text-[10px] font-bold text-slate-700 mb-1">دورة حجز واستعارة المعدات المشتركة</h4>
                <FlowChart
                  dir="LR"
                  nodes={[
                    { id: "req", label: "طلب حجز بالـ CMMS", icon: "📝", color: "blue" },
                    { id: "chk", label: "فحص وتأكيد جاهزية", icon: "🔍", color: "navy" },
                    { id: "del", label: "تسليم الفني والتوقيع", icon: "🤝", color: "green" },
                    { id: "ret", label: "إرجاع وفحص فني", icon: "📦", color: "amber" },
                  ]}
                  edges={[
                    { from: "req", to: "chk" },
                    { from: "chk", to: "del" },
                    { from: "del", to: "ret" },
                  ]}
                />
              </div>

              <CallOutBox type="goal" title="أهمية الورشة وحوكمة المعدات">
                <p className="text-[9px] leading-relaxed text-slate-800 font-medium">
                  <strong>الورشة المركزية هي خط الدفاع الثاني</strong> للمرافق حيث توفر:
                  <br />
                  ١. مكان مخصص للمعايرة الدورية للأدوات (Form 16).
                  <br />
                  ٢. حظر صرف أو استخدام الأدوات الحساسة إلا بعد إتمام الفحص الأسبوعي (Form 10) وتوثيقه رقمياً.
                </p>
              </CallOutBox>
            </div>
          </div>
        </Slide>

        {/* Slide 14 */}
        <Slide slideNum={14}>
          <SectionHeader icon={Shield} title="حوكمة السلامة وتصاريح العمل الآمن والامتثال" subtitle="إطار حماية الأرواح والأصول وتطبيق شروط الدفاع المدني" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <DataTable columns={safetyComplianceCols} rows={safetyComplianceRows} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm">
                <h4 className="text-[10px] font-bold text-slate-700 mb-1">مسار التحقيق في الحوادث والحيود</h4>
                <FlowChart
                  dir="LR"
                  nodes={[
                    { id: "rep", label: "إبلاغ فوري بالـ CMMS", icon: "🚨", color: "red" },
                    { id: "sec", label: "تأمين الموقع والتحقيق", icon: "🚧", color: "amber" },
                    { id: "root", label: "تحليل السبب الجذري", icon: "🧠", color: "blue" },
                    { id: "act", label: "إجراء وقائي وتصحيح", icon: "✅", color: "green" },
                  ]}
                  edges={[
                    { from: "rep", to: "sec" },
                    { from: "sec", to: "root" },
                    { from: "root", to: "act" },
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm text-[9px] text-slate-700 leading-relaxed font-medium space-y-1">
                <strong>حظر العمل الميداني بدون تصريح:</strong>
                <br />
                • <strong>تصريح العمل الساخن (Form 20):</strong> إلزامي لأعمال اللحام والقطع الصاروخي.
                <br />
                • <strong>تصريح العمل الآمن (Form 19):</strong> للكهرباء والارتفاعات والأماكن المغلقة.
                <br />
                • <strong>التحقق السلوكي:</strong> سلم عقوبات صارم متكامل لحماية الأرواح يربط أوتوماتيكياً بمكافآت الفنيين.
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 15 */}
        <Slide slideNum={15}>
          <SectionHeader icon={Wrench} title="المميزات الفنية والتشغيلية لنظام GridFix" subtitle="1️⃣ إدارة طلبات الصيانة الذكية و 2️⃣ المهام اليومية للفنيين" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm overflow-hidden">
              <h4 className="text-[10px] font-bold text-slate-700 mb-1">1️⃣ نظام طلبات الصيانة وإجراءات الموافقات</h4>
              <DataTable columns={reqSystemCols} rows={reqSystemRows} />
            </div>

            <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm overflow-hidden">
              <h4 className="text-[10px] font-bold text-slate-700 mb-1">2️⃣ نظام المهام اليومية وإغلاق أعمال الفنيين</h4>
              <DataTable columns={techSystemCols} rows={techSystemRows} />
            </div>
          </div>
        </Slide>

        {/* Slide 16 */}
        <Slide slideNum={16}>
          <SectionHeader icon={Settings2} title="المميزات الفنية والتشغيلية لنظام GridFix" subtitle="3️⃣ لوحات التحكم والتقارير و 4️⃣ إدارة الأصول ومخازن قطع الغيار" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm overflow-hidden">
              <h4 className="text-[10px] font-bold text-slate-700 mb-1">3️⃣ لوحات التحكم التفاعلية والتقارير الفنية والمالية</h4>
              <DataTable columns={repSystemCols} rows={repSystemRows} />
            </div>

            <div className="bg-white rounded-xl border border-slate-150 p-2.5 shadow-sm overflow-hidden">
              <h4 className="text-[10px] font-bold text-slate-700 mb-1">4️⃣ نظام إدارة الأصول ومخازن قطع الغيار</h4>
              <DataTable columns={assetSystemCols} rows={assetSystemRows} />
            </div>
          </div>
        </Slide>

        {/* Slide 17 */}
        <Slide slideNum={17}>
          <SectionHeader icon={Activity} title="خطة التطوير والأسئلة الشائعة من الإدارة" subtitle="مراحل إطلاق المنصة وجلسات الإجابة وتدقيق الاستفسارات" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <h4 className="text-[10px] font-bold text-slate-700 mb-1">خطة مراحل تطوير وتشغيل نظام GridFix</h4>
              <DataTable columns={devPhasesCols} rows={devPhasesRows} />
            </div>

            <div className="bg-white rounded-xl border border-slate-150 p-2 shadow-sm overflow-hidden">
              <h4 className="text-[10px] font-bold text-slate-700 mb-1">الأسئلة المتوقعة من الإدارة العليا وإجاباتها الفنية والمالية</h4>
              <DataTable columns={qaCols} rows={qaRows} />
            </div>
          </div>
        </Slide>

        {/* Slide 18 */}
        <Slide slideNum={18}>
          <SectionHeader icon={Award} title="التوصية النهائية للاعتماد والتشغيل" subtitle="توصية المكتب الفني ومراحل اتخاذ القرار المناسب للشركة" />
          <div className="space-y-2 mt-2 px-4 flex-grow flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-slate-150 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-2">منهجية اتخاذ القرار لاعتماد نظام CMMS</h4>
              <FlowChart
                dir="LR"
                nodes={[
                  { id: "قرار", label: "قرار نظام CMMS للمجموعة", icon: "🎯", color: "navy" },
                  { id: "جاهز", label: "❌ الأنظمة الجاهزة بالسوق", icon: "🚫", color: "red", sub: "إيجار مستمر ومكلفة وصعبة التخصيص" },
                  { id: "جريد", label: "✅ نظام GridFix الداخلي", icon: "✅", color: "green", sub: "ملكية فكرية كاملة وتوفير 587 ألف ريال" },
                  { id: "اعتماد", label: "يوصى بالاعتماد والتشغيل", icon: "🚀", color: "green" },
                ]}
                edges={[
                  { from: "قرار", to: "جاهز" },
                  { from: "قرار", to: "جريد" },
                  { from: "جريد", to: "اعتماد" },
                ]}
              />
            </div>

            <CallOutBox type="critical" title="التوصية والخطوات الفورية للبدء">
              <p className="text-[10px] leading-relaxed text-slate-800 font-medium">
                <strong>نوصي باعتماد نظام GridFix كنظام CMMS الموحد للمجموعة والبدء فوراً بـ:</strong>
                <br />
                ١. تشكيل فريق المكتب الفني لبدء التخطيط وتوزيع العمل الموحد.
                <br />
                ٢. إطلاق المرحلة الأولى لتطوير نظام GridFix بوظائفه الأساسية (الأصول وأوامر العمل وتطبيق الجوال).
                <br />
                ٣. حصر أصول موقع تجريبي وتركيب QR للتحقق والتقييم قبل التعميم الكامل.
              </p>
            </CallOutBox>
          </div>
        </Slide>
      </SlideDeck>

      <PrintControlBar />
    </div>
  );
}

