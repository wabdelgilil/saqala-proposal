"use client";

import { Building2, Target, Lightbulb, Users, ClipboardList, ShoppingCart, FileText, Activity, Shield, BarChart3, Monitor, BookOpen, Award, AlertTriangle, Key, Heart, HelpCircle, Wrench, Settings2, Smartphone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import SequenceDiagram from "@/components/SequenceDiagram";
import A4Page from "@/components/A4Page";
import CoverPage from "@/components/CoverPage";

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
    { phase: "تكلفة السنة الأولى", ready: "80,000 - 130,000 ريال", gridfix: "30,000 - 55,000 ريال (تطوير + استضافة)" },
    { phase: "تكلفة السنة الثانية", ready: "80,000 - 130,000' ريال", gridfix: "6,000 - 12,000 ريال (استضافة فقط)" },
    { phase: "تكلفة السنة الثالثة", ready: "85,000 - 140,000' ريال", gridfix: "6,000 - 12,000 ريال (استضافة فقط)" },
    { phase: "تكلفة السنة الرابعة", ready: "85,000 - 140,000' ريال", gridfix: "6,000 - 12,000 ريال (استضافة فقط)" },
    { phase: "تكلفة السنة الخامسة", ready: "90,000 - 150,000' ريال", gridfix: "6,000 - 12,000' ريال (استضافة فقط)" },
    { phase: "إجمالي التكلفة في 5 سنوات", ready: "420,000 - 690,000 ريال", gridfix: "✅ 54,000 - 103,000 ريال" },
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
    { sys: "البريد الإلكتروني المؤسسي", point: "إشعارات بحالة الطلبات وتنبيهات المهام المتأخرة", benefit: "تواصل سريع وشفاف وموثق لكافة أطراف المنظومة" },
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

  return (
    <div className="w-full bg-[#f1f5f9] min-h-screen relative print:bg-white print:w-auto py-2 print:p-0 print:m-0 animate-fadeIn">
      {/* Cover Page */}
      <CoverPage domain="عرض تقديمي للإدارة · النسخة الأولى" />

      {/* Page 1 */}
      <A4Page pageNum={1}>
        <SectionHeader icon={AlertTriangle} title="المشكلة التي يحلها نظام GridFix" subtitle="تحويل عمليات الصيانة من العشوائية اليدوية إلى التوثيق الرقمي الممنهج" />
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed mb-4">
              يعتمد النظام التقليدي على الاتصالات الهاتفية والورقية التي تؤدي لتشتت المهام وضياع البلاغات، بينما يضمن نظام GridFix تسجيل البلاغ ومتابعته رقمياً بالكامل.
            </p>
            <FlowChart
              nodes={[
                { id: "قبل", label: "قبل GridFix — عمليات يدوية", icon: "❌", color: "red" },
                { id: "أ1", label: "اتصال هاتفي غير موثق", icon: "📞" },
                { id: "أ2", label: "ملاحظة ورقية معرضة للضياع", icon: "📝" },
                { id: "أ3", label: "تشتت الفنيين وغياب الجدول", icon: "👤" },
                { id: "بعد", label: "بعد GridFix — عمليات رقمية", icon: "✅", color: "green" },
                { id: "ب1", label: "رفع طلب من الجوال مباشرة", icon: "📱" },
                { id: "ب2", label: "تسجيل الطلب وجدولته آلياً", icon: "💻" },
                { id: "ب3", label: "الفني ينفذ ويوثق رقمياً", icon: "🔧" },
              ]}
              edges={[
                { from: "قبل", to: "أ1" }, { from: "أ1", to: "أ2" }, { from: "أ2", to: "أ3" },
                { from: "بعد", to: "ب1" }, { from: "ب1", to: "ب2" }, { from: "ب2", to: "ب3" },
                { from: "قبل", to: "بعد" },
              ]}
            />
          </div>

          <CallOutBox type="goal" title="ما هو GridFix؟">
            هو منصة رقمية متكاملة (SaaS) لإدارة الصيانة والأصول، تعمل على الويب والجوال، مصممة خصيصاً لربط جميع أطراف الصيانة (الإدارة، المشرفين، الفنيين، والموظفين) في منظومة عمل موحدة.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 2 */}
      <A4Page pageNum={2}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
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
      </A4Page>

      {/* Page 3 */}
      <A4Page pageNum={3}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardList} title="سيناريوهات الاستخدام الفعلية للمنصة" subtitle="السيناريو 1: التعامل مع بلاغ عطل طارئ" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
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
      </A4Page>

      {/* Page 4 */}
      <A4Page pageNum={4}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">السيناريو 2: طلبات الإضافة وتعديل المواقع (غير الأعطال)</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "موظف", label: "موظف يطلب تركيب جديد", icon: "📝", color: "navy" },
                { id: "نوع", label: "نوع الطلب؟", icon: "❓", color: "amber" },
                { id: "إصلاح", label: "إصلاح: لمدير الصيانة فوراً", icon: "🔧", color: "green" },
                { id: "إضافة", label: "إضافة: موافقة المدير المباشر", icon: "👨‍💼", color: "amber" },
                { id: "قرار", label: "اعتماد المدير المباشر؟", icon: "⚖️", color: "amber" },
                { id: "تنفيذ", label: "صيانة: جدولة وتنفيذ", icon: "✅", color: "green" },
                { id: "رفض", label: "رفض الطلب وإشعار الموظف", icon: "❌", color: "red" },
              ]}
              edges={[
                { from: "موظف", to: "نوع" },
                { from: "نوع", to: "إصلاح", label: "عطل" },
                { from: "نوع", to: "إضافة", label: "إضافة" },
                { from: "إضافة", to: "قرار" },
                { from: "قرار", to: "تنفيذ", label: "موافق" },
                { from: "قرار", to: "رفض", label: "مرفوض" },
                { from: "إصلاح", to: "تنفيذ" },
              ]}
            />
          </div>

          <CallOutBox type="safety" title="أتمتة الحوكمة والموافقة">
            النظام يمنع الفنيين من تنفيذ أي أعمال تركيبات أو إضافات جديدة للمكاتب دون وجود موافقة مسجلة وموثقة إلكترونياً من المدير المباشر للموقع المعني.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 5 */}
      <A4Page pageNum={5}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">السيناريو 3: دورة وتفاصيل يوم عمل الفني الميداني</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "صباح", label: "🌅 بداية اليوم", sub: "فتح التطبيق الميداني", icon: "📱", color: "navy" },
                { id: "مهام", label: "📋 استعراض المهام", sub: "مرتبة حسب الأولوية", icon: "📋" },
                { id: "تنفيذ", label: "🔧 تنفيذ المهام", sub: "تصوير قبل وبعد العمل", icon: "🔧", color: "green" },
                { id: "نهاية", label: "🌇 نهاية اليوم", sub: "توثيق وإغلاق المهام", icon: "✅", color: "green" },
              ]}
              edges={[
                { from: "صباح", to: "مهام" },
                { from: "مهام", to: "تنفيذ" },
                { from: "تنفيذ", to: "نهاية" },
              ]}
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <DataTable columns={techDayCols} rows={techDayRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 6 */}
      <A4Page pageNum={6}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={BarChart3} title="مقارنة GridFix مع الأنظمة الجاهزة بالسوق" subtitle="لماذا نطور بدلاً من استئجار رخص خارجية؟" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <DataTable columns={cmmsCompareCols} rows={cmmsCompareRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 7 */}
      <A4Page pageNum={7}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مصفوفة التقييم الكمي (Quantitative Evaluation Matrix)</h4>
            <DataTable columns={evalMatrixCols} rows={evalMatrixRows} />
          </div>

          <CallOutBox type="goal" title="خلاصة التقييم الموزون">
            يحقق نظام GridFix تقييماً موزوناً مرتفعاً جداً (9.3/10) مقارنة بالأنظمة الجاهزة (3.2/10) نظراً لوفره المالي الشديد، مرونته التشغيلية ودعمه الكامل للعربية دون تكاليف تراخيص تصاعدية.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 8 */}
      <A4Page pageNum={8}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ShoppingCart} title="التحليل المالي والمقارنة الاقتصادية" subtitle="مقارنة التكلفة والوفر المالي التراكمي على 5 سنوات" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">التكاليف المقارنة التقديرية في 5 سنوات</h4>
            <DataTable columns={fiveYearCostCols} rows={fiveYearCostRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">أثر الصرف المالي ومميزات التملك</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "جاهز", label: "الأنظمة الجاهزة (5 سنوات)", sub: "420,000 - 690,000 ريال", icon: "💸", color: "red" },
                { id: "جريد", label: "نظام GridFix (5 سنوات)", sub: "54,000 - 103,000 ريال", icon: "✅", color: "green" },
                { id: "فرق", label: "وفر مالي تظل في المجموعة", sub: "وفر 366,000 - 587,000 ريال", icon: "💰", color: "green" },
              ]}
              edges={[
                { from: "جاهز", to: "فرق" },
                { from: "جريد", to: "فرق" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 9 */}
      <A4Page pageNum={9}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">أين تذهب الميزانية؟ (تفاصيل الصرف والملكية)</h4>
            <DataTable columns={cashFlowCols} rows={cashFlowRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مقارنة GridFix مع أشهر أنظمة الصيانة العالمية بالسوق</h4>
            <DataTable columns={marketCompareCols} rows={marketCompareRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 10 */}
      <A4Page pageNum={10}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Monitor} title="التكامل التقني والتطوير الاستثماري للمجموعة" subtitle="الربط مع البرمجيات القائمة ومسار التحول لمنتج تجاري" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">نقاط التكامل مع أنظمة المجموعة الحالية</h4>
            <DataTable columns={integrationCols} rows={integrationRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مسار التحول من نظام تشغيلي داخلي لمنتج تجاري استثماري</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "y1", label: "السنة الأولى: تشغيل داخلي", sub: "دعم مرافق المجموعة بالوظائف الأساسية", icon: "🏗️", color: "navy" },
                { id: "y2", label: "السنة الثانية: ميزات متقدمة", sub: "إضافة الذكاء الاصطناعي والتحليل", icon: "💻", color: "blue" },
                { id: "y3", label: "السنة الثالثة: استقرار كلي", sub: "تأمين الكود واستقرار البنية التحتية", icon: "⚙️", color: "green" },
                { id: "y4", label: "السنة الرابعة: تسويق خارجي", sub: "البيع للشركات والقطاعات الخارجية", icon: "💰", color: "green" },
              ]}
              edges={[
                { from: "y1", to: "y2" },
                { from: "y2", to: "y3" },
                { from: "y3", to: "y4" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 11 */}
      <A4Page pageNum={11}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">نموذج العمل المقترح للتسويق التجاري المستقبلي</h4>
            <DataTable columns={marketingCols} rows={marketingRows} />
          </div>

          <CallOutBox type="tip" title="ميزة استثمارية فريدة لا يقدمها أي نظام جاهز">
            يتحول نظام GridFix بالكامل من كونه مركز تكلفة للمجموعة إلى كونه أصل استثماري رقمي يدر عائداً مالياً سنوياً متوقعاً يقدر بـ 200,000 - 500,000 ريال بعد استقراره وتسويقه.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 12 */}
      <A4Page pageNum={12}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Wrench} title="المميزات الفنية والتشغيلية لنظام GridFix" subtitle="1️⃣ إدارة طلبات الصيانة الذكية و 2️⃣ المهام اليومية للفنيين" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">1️⃣ نظام طلبات الصيانة وإجراءات الموافقات</h4>
            <DataTable columns={reqSystemCols} rows={reqSystemRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">2️⃣ نظام المهام اليومية وإغلاق أعمال الفنيين</h4>
            <DataTable columns={techSystemCols} rows={techSystemRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 13 */}
      <A4Page pageNum={13}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Settings2} title="المميزات الفنية والتشغيلية لنظام GridFix" subtitle="3️⃣ لوحات التحكم والتقارير و 4️⃣ إدارة الأصول ومخازن قطع الغيار" />

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">3️⃣ لوحات التحكم التفاعلية والتقارير الفنية والمالية</h4>
            <DataTable columns={repSystemCols} rows={repSystemRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">4️⃣ نظام إدارة الأصول ومخازن قطع الغيار</h4>
            <DataTable columns={assetSystemCols} rows={assetSystemRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 14 */}
      <A4Page pageNum={14}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Activity} title="خطة التطوير والأسئلة الشائعة من الإدارة" subtitle="خطة التطوير والأسئلة الفنية المتوقعة وإجاباتها" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">خطة مراحل تطوير وتشغيل نظام GridFix</h4>
            <DataTable columns={devPhasesCols} rows={devPhasesRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">الأسئلة المتوقعة من الإدارة العليا وإجاباتها الفنية والمالية</h4>
            <DataTable columns={qaCols} rows={qaRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 15 */}
      <A4Page pageNum={15}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Award} title="التوصية النهائية للإدارة العليا" subtitle="قرار اعتماد نظام CMMS الرسمي لمجموعة مؤسسات سقالة" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">منهجية اتخاذ القرار لاعتماد نظام CMMS</h4>
            <FlowChart
              nodes={[
                { id: "قرار", label: "قرار نظام CMMS للمجموعة", icon: "🎯", color: "navy" },
                { id: "جاهز", label: "❌ الأنظمة الجاهزة بالسوق", icon: "🚫", color: "red", sub: "إيجار مستمر ومكلفة وصعبة التخصيص" },
                { id: "جريد", label: "✅ نظام GridFix الداخلي", icon: "✅", color: "green", sub: "ملكية فكرية كاملة وتوفير 587 ألف ريال" },
                { id: "اعتماد", label: "يوصى بالاعتماد الفوري والتشغيل", icon: "🚀", color: "green" },
              ]}
              edges={[
                { from: "قرار", to: "جاهز" },
                { from: "قرار", to: "جريد" },
                { from: "جريد", to: "اعتماد" },
              ]}
            />
          </div>

          <CallOutBox type="critical" title="التوصية والخطوات الفورية للبدء">
            <p className="text-xs leading-relaxed text-slate-800 font-medium">
              <strong>نوصي باعتماد نظام GridFix كنظام CMMS الموحد للمجموعة والبدء فوراً بـ:</strong>
              <br />
              1. تشكيل فريق المكتب الفني لبدء التخطيط وتوزيع العمل.
              <br />
              2. إطلاق المرحلة الأولى لتطوير نظام GridFix بوظائفه الأساسية (الأصول وأوامر العمل وتطبيق الجوال).
              <br />
              3. حصر أصول موقع تجريبي وتركيب QR للتحقق والتقييم قبل التعميم الكامل.
            </p>
          </CallOutBox>
        </div>
      </A4Page>
    </div>
  );
}
