import { Monitor, Database, Settings2, Users, BarChart3, Shield, Target, Smartphone, Cloud, AlertTriangle, Award, Link2, QrCode } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section05() {
  const compareCols = [{ key: "area", label: "المجال" }, { key: "old", label: "الوضع التقليدي" }, { key: "new", label: "الوضع المستهدف" }];
  const compareRows = [
    { area: "متابعة الأعطال", old: "اتصالات هاتفية وملاحظات ورقية", new: "منصة رقمية موحدة" },
    { area: "تنظيم فرق العمل", old: "توزيع يدوي", new: "توزيع ذكي ومتابعة آنية" },
    { area: "متابعة التكاليف", old: "فواتير متناثرة", new: "تقارير تكاليف شاملة" },
    { area: "حفظ بيانات الأصول", old: "ملفات ورقية قابلة للفقد", new: "قاعدة بيانات رقمية آمنة" },
    { area: "التخطيط للصيانة الوقائية", old: "جداول يدوية تنسى غالبا", new: "أتمتة كاملة مع تنبيهات" },
    { area: "استخراج التقارير", old: "يدوي ويستغرق أياما", new: "بنقرة زر آني ودقيق" },
  ];
  const goalsCols = [{ key: "goal", label: "الهدف" }, { key: "desc", label: "الوصف" }];
  const goalsRows = [
    { goal: "تنظيم أعمال الصيانة", desc: "من البلاغ إلى الإغلاق بشكل رقمي متكامل" },
    { goal: "تحسين إدارة الأصول", desc: "قاعدة بيانات شاملة لكل أصل" },
    { goal: "متابعة فرق العمل", desc: "توزيع المهام وقياس الأداء" },
    { goal: "تقليل الأعطال المفاجئة", desc: "صيانة وقائية مجدولة ومنتظمة" },
    { goal: "تحسين سرعة الاستجابة", desc: "تنبيهات فورية وتوزيع ذكي" },
    { goal: "تقليل التكاليف", desc: "تحليل التكاليف ومنع الهدر" },
    { goal: "دعم اتخاذ القرار", desc: "تقارير ومؤشرات أداء دقيقة" },
  ];
  const woCompareCols = [{ key: "element", label: "العنصر" }, { key: "before", label: "قبل CMMS" }, { key: "after", label: "بعد CMMS" }];
  const woCompareRows = [
    { element: "استقبال البلاغات", before: "اتصال هاتفي", after: "بلاغ رقمي موثق" },
    { element: "توزيع المهام", before: "يدوي حسب المتاح", after: "توزيع ذكي حسب المعايير" },
    { element: "متابعة التنفيذ", before: "متابعة هاتفية", after: "متابعة آنية عبر لوحة التحكم" },
    { element: "إغلاق الأعمال", before: "شفهي أو ورقي", after: "إغلاق رقمي مع توثيق كامل" },
    { element: "أرشفة التاريخ", before: "ملفات ورقية", after: "قاعدة بيانات رقمية قابلة للبحث" },
  ];
  const pmBenefitsCols = [{ key: "benefit", label: "الفائدة" }, { key: "result", label: "النتيجة" }];
  const pmBenefitsRows = [
    { benefit: "منع نسيان الأعمال المجدولة", result: "لا مهام فائتة" },
    { benefit: "تقليل الأعطال المفاجئة", result: "استقرار تشغيلي أعلى" },
    { benefit: "إطالة عمر الأصول", result: "عائد أفضل على الاستثمار" },
    { benefit: "تحسين التخطيط للموارد", result: "توزيع أفضل للفنيين وقطع الغيار" },
  ];
  const assetDataCols = [{ key: "field", label: "البيان" }, { key: "benefit", label: "الفائدة" }];
  const assetDataRows = [
    { field: "بيانات الأصل", benefit: "تعريف فريد لكل أصل" },
    { field: "الموقع", benefit: "معرفة مكان كل أصل بدقة" },
    { field: "المواصفات", benefit: "معلومات فنية دقيقة للإصلاح" },
    { field: "تاريخ الشراء", benefit: "حساب عمر الأصل" },
    { field: "المورد", benefit: "سهولة التواصل" },
    { field: "الضمان", benefit: "الاستفادة منه قبل انتهائه" },
    { field: "العقود", benefit: "عقود الصيانة المرتبطة" },
    { field: "الوثائق", benefit: "ملفات رقمية مرتبطة متوفرة دائما" },
  ];
  const warrantyCols = [{ key: "function", label: "الوظيفة" }, { key: "benefit", label: "الفائدة" }];
  const warrantyRows = [
    { function: "متابعة الضمانات", benefit: "تنبيه قبل انتهاء الضمان" },
    { function: "التنبيه قبل انتهاء العقود", benefit: "إعادة التعاقد في الوقت المناسب" },
    { function: "تحديد المسؤول عن الإصلاح", benefit: "معرفة هل العطل تحت الضمان" },
    { function: "تقييم أداء الموردين", benefit: "تقييم موضوعي مبني على بيانات" },
  ];
  const mobileAppCols = [{ key: "feature", label: "الميزة" }, { key: "tech", label: "الفني" }, { key: "sup", label: "مشرف الموقع" }, { key: "mgr", label: "مدير الصيانة" }];
  const mobileAppRows = [
    { feature: "استلام أوامر العمل وتحديث الحالة", tech: "✅", sup: "✅", mgr: "قراءة فقط" },
    { feature: "تصوير الأعطال والإصلاحات", tech: "✅", sup: "✅", mgr: "✅" },
    { feature: "مسح QR Code للأصول", tech: "✅", sup: "✅", mgr: "✅" },
    { feature: "طلب قطع غيار من المخزن", tech: "✅", sup: "—", mgr: "—" },
    { feature: "التوقيع الإلكتروني على الإنجاز", tech: "✅", sup: "✅", mgr: "—" },
    { feature: "لوحة مؤشرات الأداء", tech: "—", sup: "✅ مبسطة", mgr: "✅ كاملة" },
    { feature: "إشعارات فورية (Push Notifications)", tech: "✅", sup: "✅", mgr: "✅" },
    { feature: "رفع بلاغ صيانة جديد", tech: "—", sup: "✅", mgr: "—" },
  ];
  const offlineCols = [{ key: "feature", label: "الميزة" }, { key: "detail", label: "التفاصيل" }];
  const offlineRows = [
    { feature: "التخزين المحلي", detail: "آخر 50 أمر عمل مخزنة على الجوال" },
    { feature: "الصور", detail: "تخزين الصور محلياً ورفعها عند عودة الاتصال" },
    { feature: "المزامنة", detail: "تلقائية عند عودة الاتصال — بدون تدخل الفني" },
    { feature: "حجم البيانات", detail: "لا يتجاوز 10 ميغابايت لكل أمر عمل" },
    { feature: "توافق الأجهزة", detail: "Android و iOS عبر PWA" },
  ];
  const roleCols = [{ key: "element", label: "عنصر الدعم" }, { key: "desc", label: "كيف يساعد النظام" }];
  const roleRows = [
    { element: "ربط المواقع", desc: "منصة واحدة لجميع المواقع" },
    { element: "توحيد الإجراءات", desc: "إجراءات مدمجة في النظام" },
    { element: "إدارة الفرق", desc: "توزيع ومتابعة وتقييم" },
    { element: "متابعة الميدان", desc: "تطبيق جوال للفنيين" },
    { element: "تنظيم الموارد", desc: "حجز وتتبع وإدارة مخزون" },
    { element: "مراقبة الأداء", desc: "مؤشرات أداء وتقارير دورية" },
  ];
  const integrationCols = [{ key: "system", label: "النظام الحالي" }, { key: "integration", label: "نقطة التكامل" }, { key: "benefit", label: "الفائدة" }];
  const integrationRows = [
    { system: "النظام المحاسبي والمالي (ERP)", integration: "ترحيل أوامر الشراء والفواتير، ربط تكاليف الصيانة بالأصول", benefit: "دقة التكاليف، إغلاق الحلقات المالية" },
    { system: "إدارة الموارد البشرية (HR)", integration: "مزامنة بيانات الموظفين والفنيين، إدارة الإجازات والدوام", benefit: "تحديث تلقائي لبيانات الفريق" },
    { system: "نظام المخازن الحالي", integration: "توحيد المخزون، ربط الصرف بأوامر العمل", benefit: "منع الازدواجية والتكرار" },
    { system: "أنظمة التحكم في المباني (BMS/BAS)", integration: "استيراد أعطال BMS كطلبات صيانة تلقائية", benefit: "استباق الأعطال" },
    { system: "أنظمة الأمن والمراقبة", integration: "ربط بلاغات الطوارئ بفريق الصيانة", benefit: "سرعة الاستجابة للحوادث" },
    { system: "البريد الإلكتروني المؤسسي", integration: "إشعارات تلقائية بحالة الطلبات", benefit: "تواصل شفاف مع المستخدمين" },
  ];
  const migrationCols = [{ key: "src", label: "المصدر" }, { key: "data", label: "نوع البيانات" }, { key: "status", label: "حالتها" }, { key: "options", label: "خيارات الترحيل" }];
  const migrationRows = [
    { src: "سجلات ورقية", data: "بلاغات صيانة سابقة، فواتير", status: "غير منظمة", options: "إدخال يدوي للأساسيات فقط" },
    { src: "جداول Excel", data: "أصول، قطع غيار، عقود", status: "شبه منظمة", options: "استيراد مباشر إلى CMMS" },
    { src: "معرفة الفنيين", data: "تاريخ الأعطال، خبرات", status: "غير موثقة", options: "توثيق قبل الترحيل" },
    { src: "فواتير الموردين", data: "تكاليف القطع", status: "منظمة", options: "استيراد من النظام المحاسبي" },
  ];
  const migrationPlanCols = [{ key: "phase", label: "المرحلة" }, { key: "content", label: "المحتوى" }, { key: "method", label: "الأسلوب" }, { key: "duration", label: "المدة" }];
  const migrationPlanRows = [
    { phase: "1 — البيانات الأساسية", content: "الأصول (بعد حصرها ميدانياً)", method: "إدخال ميداني + QR", duration: "8 - 12 أسبوعاً" },
    { phase: "2 — المستخدمون", content: "الموظفين والصلاحيات", method: "استيراد من HR", duration: "أسبوع واحد" },
    { phase: "3 — البلاغات الجارية", content: "طلبات الصيانة المفتوحة", method: "إدخال يدوي + إغلاق القديم", duration: "3 أيام" },
    { phase: "4 — المخزون", content: "قطع الغيار والكميات", method: "استيراد + جرد ميداني", duration: "4 أسابيع" },
    { phase: "5 — التاريخي", content: "سجلات سابقة للتحليل", method: "إدخال تدريجي", duration: "مستمر" },
  ];
  const riskCols = [{ key: "risk", label: "المخاطرة" }, { key: "prob", label: "الاحتمال" }, { key: "impact", label: "التأثير" }, { key: "mitigation", label: "خطة التخفيف" }];
  const riskRows = [
    { risk: "اختراق حساب مستخدم", prob: "متوسط", impact: "عالي", mitigation: "كلمة مرور قوية + مصادقة ثنائية" },
    { risk: "فقدان البيانات", prob: "منخفض", impact: "عالٍ جداً", mitigation: "نسخ احتياطي يومي + استضافة سحابية" },
    { risk: "هجوم إلكتروني", prob: "منخفض", impact: "عالي", mitigation: "تحديثات أمنية + جدار حماية" },
    { risk: "تسريب بيانات الأصول", prob: "منخفض", impact: "متوسط", mitigation: "صلاحيات وصول محدودة + تشفير" },
    { risk: "انقطاع الخدمة", prob: "متوسط", impact: "متوسط", mitigation: "خطة استرداد + استضافة احتياطية" },
  ];
  const securityCols = [{ key: "area", label: "المجال" }, { key: "action", label: "الإجراء" }];
  const securityRows = [
    { area: "المصادقة", action: "اسم مستخدم + كلمة مرور قوية (8 أحرف + رمز)" },
    { area: "المصادقة الثنائية", action: "اختيارية للحسابات الحساسة (المدراء)" },
    { area: "الصلاحيات", action: "كل مستخدم يرى فقط ما يحتاجه — فني يرى مهامه فقط" },
    { area: "تشفير البيانات", action: "جميع البيانات مشفرة (SSL/TLS) أثناء النقل" },
    { area: "النسخ الاحتياطي", action: "تلقائي يومي — احتفاظ بنسخ آخر 30 يوماً" },
    { area: "سجل التدقيق", action: "كل حركة مسجلة: من فعل ماذا ومتى" },
    { area: "إدارة الجلسات", action: "تسجيل خروج تلقائي بعد 30 دقيقة خمول" },
    { area: "تحديثات أمنية", action: "تحديث شهري للمكتبات والاعتماديات" },
  ];
  const bcCols = [{ key: "scenario", label: "السيناريو" }, { key: "action", label: "الإجراء البديل" }, { key: "resp", label: "الجهة المسؤولة" }];
  const bcRows = [
    { scenario: "انقطاع الإنترنت في موقع واحد", action: "استخدام تطبيق الجوال Offline Mode + مزامنة لاحقة", resp: "الفني + مشرف الموقع" },
    { scenario: "انقطاع الإنترنت في جميع المواقع", action: "تفعيل خطة الطوارئ اليدوية + نماذج ورقية موحدة", resp: "مدير الصيانة" },
    { scenario: "توقف سيرفر CMMS بالكامل", action: "الرجوع للنسخة الاحتياطية على سيرفر بديل خلال 4 ساعات", resp: "فريق الدعم التقني" },
    { scenario: "عطل في قاعدة البيانات", action: "استرجاع آخر نسخة احتياطية صالحة (خسارة قصوى: يوم)", resp: "فريق الدعم التقني" },
    { scenario: "هجوم إلكتروني", action: "عزل السيرفر المصاب فوراً + تفعيل الخطة اليدوية", resp: "مدير الصيانة + الدعم التقني" },
    { scenario: "استقالة المطور الوحيد", action: "تسليم الكود المصدري + التعاقد مع مطور بديل", resp: "مدير الصيانة + إدارة المشتريات" },
  ];
  const bmsCols = [{ key: "system", label: "نظام BMS" }, { key: "protocol", label: "البروتوكول" }, { key: "data", label: "نوع البيانات" }, { key: "benefit", label: "الفائدة" }];
  const bmsRows = [
    { system: "Honeywell", protocol: "BACnet/IP", data: "أعطال HVAC، درجة حرارة، ضغط", benefit: "إنشاء طلب صيانة تلقائي عند تجاوز الحدود" },
    { system: "Siemens", protocol: "BACnet/IP + Modbus", data: "إنذارات الحريق، أعطال المضخات", benefit: "استباق الأعطال قبل بلاغ المستخدم" },
    { system: "Schneider", protocol: "Modbus TCP", data: "استهلاك الطاقة، أعطال اللوحات", benefit: "تحسين كفاءة الطاقة + صيانة تنبؤية" },
    { system: "Johnson Controls", protocol: "BACnet", data: "جميع أنظمة المبنى", benefit: "توحيد جميع الإنذارات في CMMS" },
    { system: "BMS محلي", protocol: "REST API أو MQTT", data: "حسب التصميم", benefit: "مرونة كاملة في التكامل" },
  ];
  const bmsPhaseCols = [{ key: "phase", label: "المرحلة" }, { key: "scope", label: "النطاق" }, { key: "duration", label: "المدة" }];
  const bmsPhaseRows = [
    { phase: "1", scope: "ربط BMS لمبنى واحد تجريبي + اختبار", duration: "4 - 6 أسابيع" },
    { phase: "2", scope: "تعميم على جميع المباني المزودة بـ BMS", duration: "3 - 4 أشهر" },
    { phase: "3", scope: "إضافة تحليلات للأعطال المتكررة + تكامل الطاقة", duration: "2 - 3 أشهر" },
  ];
  const resultsCols = [{ key: "n", label: "#" }, { key: "result", label: "النتيجة" }];
  const resultsRows = [
    { n: "1", result: "تحسين جودة أعمال الصيانة" },
    { n: "2", result: "تقليل الأعطال المفاجئة" },
    { n: "3", result: "رفع كفاءة فرق العمل" },
    { n: "4", result: "تحسين استغلال الموارد وخفض التكاليف" },
    { n: "5", result: "تحسين سرعة الاستجابة للأعطال" },
    { n: "6", result: "قاعدة بيانات مركزية شاملة للأصول" },
    { n: "7", result: "دعم اتخاذ القرار ببيانات دقيقة" },
  ];
  const kitCols = [{ key: "item", label: "المحتوى" }, { key: "qty", label: "الكمية المطلوبة" }];
  const kitRows = [
    { item: "نموذج بلاغ صيانة طارئ", qty: "50 نسخة — في كل موقع" },
    { item: "نموذج أمر عمل عاجل", qty: "30 نسخة" },
    { item: "نموذج تصريح عمل آمن", qty: "30 نسخة" },
    { item: "نموذج صرف قطع غيار (طارئ)", qty: "30 نسخة" },
    { item: "دليل الإجراءات اليدوية المختصر", qty: "1 نسخة لكل مشرف موقع" },
  ];

  return (
    <>
      {/* Page 36 */}
      <A4Page pageNum={41}>
        <SectionHeader icon={Monitor} title="استخدام نظام CMMS في إدارة الصيانة والأصول" subtitle="Computerized Maintenance Management System" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              مع توسع المباني والمرافق وتعدد فرق الصيانة والأصول داخل المجموعة، أصبحت إدارة أعمال الصيانة بالطرق التقليدية تمثل تحديا كبيرا على عدة مستويات:
            </p>
          </div>

          <DataTable columns={compareCols} rows={compareRows} />

          <CallOutBox type="goal" title="الهدف">
            من هنا تظهر الحاجة إلى استخدام نظام رقمي متخصص لإدارة أعمال الصيانة والأصول، وهو ما يعرف باسم CMMS.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 37 */}
      <A4Page pageNum={42}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Database} title="تعريف نظام CMMS" />
            <p className="text-slate-700 leading-relaxed mb-4 text-xs">
              CMMS هو نظام إلكتروني متخصص يستخدم لإدارة وتنظيم جميع أعمال الصيانة والأصول من خلال منصة مركزية موحدة. يقوم النظام بتحويل أعمال الصيانة من أعمال عشوائية أو ورقية إلى منظومة رقمية منظمة قابلة للمتابعة والتحليل.
            </p>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "قبل", label: "قبل تطبيق النظام", icon: "📋" },
                { id: "عشوائي", label: "أعمال ورقية وعشوائية", icon: "📝" },
                { id: "يدوي", label: "متابعة يدوية", icon: "👤" },
                { id: "بعد", label: "بعد تطبيق النظام", icon: "💻" },
                { id: "رقمي", label: "منظومة رقمية منظمة", icon: "✅" },
                { id: "فوري", label: "متابعة آنية", icon: "⚡" },
                { id: "تحليل", label: "تحليل وتقارير", icon: "📊" },
              ]}
              edges={[
                { from: "قبل", to: "عشوائي" }, { from: "قبل", to: "يدوي" },
                { from: "بعد", to: "رقمي" }, { from: "بعد", to: "فوري" }, { from: "بعد", to: "تحليل" },
                { from: "قبل", to: "بعد" },
              ]}
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Target} title="أهداف نظام CMMS" />
            <DataTable columns={goalsCols} rows={goalsRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 38 */}
      <A4Page pageNum={43}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Settings2} title="أهمية CMMS في إدارة الصيانة" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">تنظيم أوامر العمل</h4>
            <DataTable columns={woCompareCols} rows={woCompareRows} />
            <h4 className="text-xs font-bold text-slate-700 mt-4 mb-2">إدارة الصيانة الوقائية</h4>
            <DataTable columns={pmBenefitsCols} rows={pmBenefitsRows} />
          </div>

          <CallOutBox type="tip" title="رفع كفاءة اتخاذ القرار">
            يوفر النظام تقارير دورية آلية، وإحصائيات دقيقة عن الأداء والتكاليف، ومؤشرات أداء تساعد الإدارة على اتخاذ قرارات مبنية على بيانات حقيقية.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 39 */}
      <A4Page pageNum={44}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Database} title="أهمية CMMS في إدارة الأصول" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">قاعدة بيانات مركزية للأصول</h4>
            <DataTable columns={assetDataCols} rows={assetDataRows} />
          </div>

          <CallOutBox type="tip" title="تتبع تاريخ الأصل">
            يوفر النظام سجلا كاملا لكل أصل يشمل الأعطال وتكاليف الصيانة، مما يمكن من اتخاذ قرارات مدروسة بشأن الإصلاح أو الاستبدال.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 40 */}
      <A4Page pageNum={45}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">تحسين قرارات الإصلاح والاستبدال</h4>
            <FlowChart
              nodes={[
                { id: "تحليل", label: "تحليل بيانات الأصل", icon: "🔍", color: "navy" },
                { id: "معايير", label: "معايير القرار", icon: "⚖️", color: "amber" },
                { id: "أعطال", label: "عدد الأعطال", icon: "🔢" },
                { id: "تكلفة", label: "تكلفة الصيانة التراكمية", icon: "💰" },
                { id: "عمر", label: "عمر الأصل", icon: "📅" },
                { id: "قرار", label: "القرار", icon: "🎯", color: "amber" },
                { id: "إصلاح", label: "إصلاح", icon: "🔧", color: "green" },
                { id: "استبدال", label: "استبدال", icon: "🔄", color: "red" },
              ]}
              edges={[
                { from: "تحليل", to: "معايير" },
                { from: "معايير", to: "أعطال" }, { from: "معايير", to: "تكلفة" },
                { from: "معايير", to: "عمر" },
                { from: "أعطال", to: "قرار" }, { from: "تكلفة", to: "قرار" },
                { from: "عمر", to: "قرار" },
                { from: "قرار", to: "إصلاح" }, { from: "قرار", to: "استبدال" },
              ]}
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">إدارة العقود والضمانات</h4>
            <DataTable columns={warrantyCols} rows={warrantyRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 41 */}
      <A4Page pageNum={46}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Smartphone} title="تطبيق CMMS الجوال" subtitle="مميزات التطبيق الجوال للفنيين والمشرفين" />
            <DataTable columns={mobileAppCols} rows={mobileAppRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 44 */}
      <A4Page pageNum={47}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">آلية العمل بدون إنترنت (Offline Mode)</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "فني", label: "الفني", icon: "👤" },
                { id: "اتصال", label: "اتصال إنترنت؟", icon: "📶", color: "amber" },
                { id: "مباشر", label: "تحديث آني", icon: "⚡", color: "green" },
                { id: "غير_متصل", label: "Offline Mode", icon: "📵", color: "amber" },
                { id: "تخزين", label: "تخزين محلي للأوامر", icon: "💾" },
                { id: "تنفيذ", label: "تنفيذ + تصوير + تسجيل", icon: "✅" },
                { id: "استعادة", label: "مزامنة تلقائية", icon: "🔄", color: "green" },
              ]}
              edges={[
                { from: "فني", to: "اتصال" },
                { from: "اتصال", to: "مباشر", label: "نعم" },
                { from: "اتصال", to: "غير_متصل", label: "لا" },
                { from: "غير_متصل", to: "تخزين" },
                { from: "تخزين", to: "تنفيذ" },
                { from: "تنفيذ", to: "استعادة" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 45 */}
      <A4Page pageNum={48}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">آلية العمل بدون اتصال</h4>
            <DataTable columns={offlineCols} rows={offlineRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Settings2} title="دور النظام في التشغيل المركزي" />
            <DataTable columns={roleCols} rows={roleRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 46 */}
      <A4Page pageNum={49}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Link2} title="التكامل مع الأنظمة الحالية للمجموعة" />
            <DataTable columns={integrationCols} rows={integrationRows} />
          </div>

          <CallOutBox type="tip" title="ملاحظة">
            يتم التكامل تدريجياً. المرحلة الأولى تكتفي بالتشغيل المستقل، وتربط الأنظمة تباعاً حسب الأولوية.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 44 */}
      <A4Page pageNum={50}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Database} title="خطة ترحيل البيانات (Data Migration)" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">مصادر البيانات الحالية</h4>
            <DataTable columns={migrationCols} rows={migrationRows} />
            <h4 className="text-xs font-bold text-slate-700 mt-4 mb-2">خطة الترحيل على 5 مراحل</h4>
            <DataTable columns={migrationPlanCols} rows={migrationPlanRows} />
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-1">
            <p className="font-bold text-slate-700">قواعد الترحيل الأساسية:</p>
            <ol className="text-slate-600 space-y-0.5 list-decimal list-inside">
              <li>ندخل الأساسيات أولاً: الأصول + المستخدمون + البلاغات الجارية</li>
              <li>التحقق بعد الترحيل: مراجعة 10% من البيانات للتأكد من دقتها</li>
              <li>فترة انتقالية: العمل بالنظام القديم والجديد بالتوازي لمدة أسبوعين</li>
            </ol>
          </div>
        </div>
      </A4Page>

      {/* Page 45 */}
      <A4Page pageNum={51}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Shield} title="الأمن السيبراني وأمان البيانات" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">تصنيف المخاطر الأمنية</h4>
            <DataTable columns={riskCols} rows={riskRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">إجراءات الأمان في CMMS</h4>
            <DataTable columns={securityCols} rows={securityRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 48 */}
      <A4Page pageNum={52}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="سيناريوهات تعطل النظام (Business Continuity)" />
            <DataTable columns={bcCols} rows={bcRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">الحقيبة الورقية للطوارئ</h4>
            <DataTable columns={kitCols} rows={kitRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 49 */}
      <A4Page pageNum={53}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">خطة الاستمرارية التشغيلية</h4>
            <FlowChart
              nodes={[
                { id: "عصل", label: "عطل في النظام", icon: "🚨", color: "red" },
                { id: "كلي", label: "تعطل كامل (سيرفر/DB)", icon: "🚫", color: "red" },
                { id: "تفعيل", label: "تفعيل خطة الطوارئ", icon: "📋" },
                { id: "يدوي", label: "تشغيل النماذج الورقية", icon: "📝" },
                { id: "استعادة", label: "استعادة من الاحتياطي", icon: "🔄", color: "green" },
                { id: "تعويض", label: "إدخال النماذج بأثر رجعي", icon: "📥" },
              ]}
              edges={[
                { from: "عصل", to: "كلي" },
                { from: "كلي", to: "تفعيل" },
                { from: "تفعيل", to: "يدوي" },
                { from: "يدوي", to: "استعادة" },
                { from: "استعادة", to: "تعويض" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 50 */}
      <A4Page pageNum={54}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Monitor} title="تكامل CMMS مع أنظمة المباني (BMS/BAS)" />
            <DataTable columns={bmsCols} rows={bmsRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">سيناريو التكامل</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "bms", label: "BMS", icon: "🏗️" },
                { id: "cmms", label: "نظام CMMS", icon: "💻", color: "blue" },
                { id: "مدير", label: "مدير الصيانة", icon: "👨‍💼" },
                { id: "فني", label: "الفني", icon: "🔧" },
              ]}
              edges={[
                { from: "bms", to: "cmms", label: "إنذار تلقائي" },
                { from: "cmms", to: "مدير" },
                { from: "مدير", to: "فني" },
                { from: "فني", to: "cmms", label: "إغلاق" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 51 */}
      <A4Page pageNum={55}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">خطة التكامل التدريجي</h4>
            <DataTable columns={bmsPhaseCols} rows={bmsPhaseRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BarChart3} title="النتائج المتوقعة" />
            <DataTable columns={resultsCols} rows={resultsRows} />
          </div>
        </div>
      </A4Page>
    </>
  );
}
