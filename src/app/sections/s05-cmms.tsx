import { Monitor, Database, Settings2, Users, BarChart3, Shield, Target, Smartphone, Cloud, AlertTriangle, Award, Link2, QrCode, ClipboardCheck } from "lucide-react";
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
      <A4Page pageNum={83}>
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
      <A4Page pageNum={84}>
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
        </div>
      </A4Page>

      {/* Page 37.5 */}
      <A4Page pageNum={85}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Target} title="أهداف نظام CMMS" />
            <DataTable columns={goalsCols} rows={goalsRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 38 */}
      <A4Page pageNum={86}>
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
      <A4Page pageNum={87}>
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
      <A4Page pageNum={88}>
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
        </div>
      </A4Page>

      {/* Page 40.5 */}
      <A4Page pageNum={89}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">إدارة العقود والضمانات</h4>
            <DataTable columns={warrantyCols} rows={warrantyRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 41 */}
      <A4Page pageNum={90}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Smartphone} title="تطبيق CMMS الجوال" subtitle="مميزات التطبيق الجوال للفنيين والمشرفين" />
            <DataTable columns={mobileAppCols} rows={mobileAppRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 44 */}
      <A4Page pageNum={91}>
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
      <A4Page pageNum={92}>
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
      <A4Page pageNum={93}>
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
      <A4Page pageNum={94}>
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
      <A4Page pageNum={95}>
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
      <A4Page pageNum={96}>
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
      <A4Page pageNum={97}>
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
      <A4Page pageNum={98}>
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
      <A4Page pageNum={99}>
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

      {/* Page 52 (Page 94) - النموذج 11: كرت حصر الأصول الميدانية */}
      <A4Page pageNum={100}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={QrCode} title="النموذج 11: كرت حصر الأصول الميدانية" subtitle="بطاقة جمع البيانات الفنية للأصول لتوليد ملصق التعريف الموحد (QR Code)" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-2 gap-2 font-bold text-center">
                <div>رقم معرف الأصل الرقمي: AST-HVAC-0842</div>
                <div>تاريخ المسح والحصر: 25-05-2026</div>
              </div>
              <div className="p-3 space-y-3">
                <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 bg-slate-50 font-bold w-1/3">نوع الأصل وتصنيفه</td>
                      <td className="p-1.5 w-2/3">وحدة مناولة الهواء (Air Handling Unit - AHU)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 bg-slate-50 font-bold">الشركة المصنعة والموديل</td>
                      <td className="p-1.5 font-mono">Trane - Model: T4291-AHU</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 bg-slate-50 font-bold">الرقم التسلسلي من المصنع</td>
                      <td className="p-1.5 font-mono">S/N: TR-890212-M</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 bg-slate-50 font-bold">الموقع الميداني الدقيق</td>
                      <td className="p-1.5">مستودع الأدوية بجدة - الدور الثاني - زاوية 3</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 bg-slate-50 font-bold">الخصائص الكهربائية والميكانيكية</td>
                      <td className="p-1.5">415 فولت - 3 فاز - سحب تيار 15 أمبير - قدرة تبريد 12 طن</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                  <strong>اعتماد المطابقة وإدخال البيانات:</strong> تم حصر الأصل ميدانياً ومطابقة بياناته وإدخالها على قاعدة بيانات CMMS، وجار طباعة ولصق QR Code المقاوم للحرارة.
                  <div className="flex justify-between pt-2">
                    <span>توقيع فني الحصر الميداني: __________________</span>
                    <span>توقيع مهندس الأصول بالقسم: __________________</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 53 (Page 95) - النموذج 12: طلب إنشاء أو تعديل أصل رقمي */}
      <A4Page pageNum={101}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Settings2} title="النموذج 12: طلب إنشاء أو تعديل أصل رقمي" subtitle="استمارة تعديل البيانات الهيكلية للأصول على قاعدة بيانات نظام CMMS الموحد" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>رقم طلب التعديل: Mdf-AST-038</div>
                <div>تاريخ الطلب: 25-05-2026</div>
                <div>الحالة: 🟡 بانتظار الاعتماد</div>
              </div>
              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>مقدم الطلب:</strong> م. طارق فؤاد (مهندس دعم فني)</div>
                  <div><strong>كود الأصل المعني:</strong> AST-PMP-0382</div>
                </div>
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                  <strong>السبب الفني لطلب التعديل أو التحديث:</strong>
                  <p className="text-[10px] text-slate-600 mt-1">
                    تم استبدال مضخة المياه القديمة التالفة (1 حصان) بمضخة جديدة ذات قدرة أعلى (2.5 حصان) لزيادة ضغط المياه بالمبنى. نحتاج لتحديث الخصائص الميكانيكية والكهربائية وتعديل الحد الأدنى لقطع غيار المضخة وجدول الصيانة الوقائية السنوي ليتناسب مع الموديل الجديد.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-[10px]">
                  <div>
                    <strong>البيانات القديمة الملغاة:</strong>
                    <ul className="list-disc list-inside text-slate-500">
                      <li>الموديل: Pedrollo 1HP</li>
                      <li>التيار الاسمي: 4 أمبير</li>
                    </ul>
                  </div>
                  <div>
                    <strong>البيانات الجديدة المعتمدة:</strong>
                    <ul className="list-disc list-inside text-green-700 font-semibold">
                      <li>الموديل: Grundfos 2.5HP</li>
                      <li>التيار الاسمي: 9 أمبير</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between pt-2 text-[9px] text-slate-500 border-t border-slate-200">
                  <span>توقيع مقدم الطلب: __________________</span>
                  <span>اعتماد مهندس المكتب الفني: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 54 (Page 96) - النموذج 13: تقرير تحليل الأعطال المتكررة */}
      <A4Page pageNum={102}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="النموذج 13: تقرير تحليل الأعطال المتكررة" subtitle="استمارة دراسة الأسباب الجذرية (RCA) للأصول سيئة الأداء (Bad Actors) وحل مشاكلها" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>كود التقرير: RCA-2026-039</div>
                <div>كود الأصل: AST-CHLR-02</div>
                <div>الحالة التشغيلية: 🔴 حرج جداً</div>
              </div>
              <div className="p-3 space-y-3 text-[10px]">
                <div><strong>وصف العطل المتكرر:</strong> توقف ضاغط الشيلر رقم 2 بشكل مفاجئ 4 مرات خلال الـ 60 يوماً الماضية نتيجة لارتفاع درجة الحرارة الداخلية للضاغط.</div>
                <div className="border border-red-100 p-2 rounded bg-red-50 text-red-800">
                  <strong>تحليل الأسباب الجذرية (5 Whys Analysis):</strong>
                  <ol className="list-decimal list-inside space-y-0.5 mt-1">
                    <li>لماذا توقف الضاغط؟ بسبب زيادة الحمل والحرارة الداخلية.</li>
                    <li>لماذا زادت الحرارة؟ بسبب نقص في تدفق غاز التبريد (الفريون).</li>
                    <li>لماذا نقص الغاز؟ لوجود تسريب غير مكتشف عند اللحام الخلفي للمكثف.</li>
                    <li>لماذا لم يكتشف التسريب؟ لعدم إجراء فحص التسرب الدوري بالرغوة أو الأجهزة المتخصصة.</li>
                  </ol>
                </div>
                <div className="bg-green-50 p-2 rounded border border-green-200 text-green-800">
                  <strong>الإجراءات التصحيحية الفورية لمنع التكرار:</strong>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>إعادة لحام مكثف التبريد بالفضة واختبار الضغط بالنيتروجين لمدة 12 ساعة.</li>
                    <li>إضافة بند (فحص تسريب الغاز بالأجهزة) إلى جدول الصيانة الوقائية الشهري للشيلر.</li>
                  </ul>
                </div>
                <div className="flex justify-between text-[8px] pt-1 border-t border-slate-200">
                  <span>المحلل الفني: م. أحمد المطيري</span>
                  <span>توقيع مدير الصيانة: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 55 (Page 97) - واجهات وتصميم تطبيق الجوال الخاص بالفنيين */}
      <A4Page pageNum={103}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Monitor} title="واجهات تطبيق الجوال الميداني للفنيين" subtitle="استعراض هيكل ومسارات القوائم لتطبيق GridFix المحمول لتسهيل أعمال الصيانة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed text-[11px]">
              يتميز تطبيق الجوال الميداني بواجهات عربية مبسطة تعتمد على الأيقونات والأزرار الكبيرة لتسهيل تفاعل الفني مع النظام في مواقع العمل المفتوحة:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px]">
              <h5 className="font-bold text-slate-800">الهيكل التنظيمي لواجهات التطبيق:</h5>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span>📱 1. الصفحة الرئيسية (Dashboard)</span>
                  <span className="text-slate-500">أزرار سريعة: "مسح QR كود الأصل" - "أوامر العمل اليومية"</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span>📋 2. قائمة أوامر العمل (Work Orders)</span>
                  <span className="text-slate-500">تفاصيل المهمة، التوقيت المستهدف، كروكي الموقع</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span>🛠️ 3. صفحة إدخال المواد والصرف</span>
                  <span className="text-slate-500">البحث وربط قطع الغيار المستهلكة من المخزن الفرعي</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>📸 4. رفع التقارير والصور</span>
                  <span className="text-slate-500">التقاط صور ما قبل وما بعد الإصلاح وكتابة ملاحظات الإغلاق</span>
                </li>
              </ul>
            </div>
            <CallOutBox type="tip" title="سهولة الاستخدام">
              تطبيق الجوال مصمم ليعمل بلمسات شاشة محدودة جداً لضمان سرعة إنجاز وتوثيق الحركات الميدانية دون تعطيل الفني عن عمله الأساسي.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 56 (Page 98) - آلية وإجراءات مزامنة البيانات دون اتصال بالإنترنت */}
      <A4Page pageNum={104}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Database} title="مزامنة البيانات دون اتصال بالإنترنت (Offline Sync)" subtitle="السياسات التقنية لتخزين البيانات محلياً وتحديثها تلقائياً عند الاتصال بالشبكة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed font-semibold">
              لتفادي توقف توثيق الصيانة في مستودعات الأدوية الخرسانية أو الطوابق السفلية المعزولة عن شبكة الإنترنت (صفر تغطية)، يعمل النظام وفق آلية المزامنة التلقائية التالية:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2">
              <h5 className="font-bold text-slate-800">بروتوكول تشغيل النظام بدون اتصال:</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>يتم تحميل كامل أوامر عمل الفني اليومية وجداول الأصول مسبقاً في ذاكرة الهاتف عند بدء الدوام.</li>
                <li>عند انقطاع الشبكة، يتم تخزين كافة البيانات وحركات الصرف وصور إتمام العمل محلياً في قاعدة بيانات الهاتف (SQLite).</li>
                <li>يقوم تطبيق الجوال بفحص جودة الشبكة تلقائياً كل 60 ثانية في الخلفية.</li>
                <li>بمجرد استعادة الاتصال بالإنترنت، يرسل التطبيق البيانات المخزنة بترتيب زمني ويحدث قاعدة البيانات الرئيسية دون فقد أي معلومة.</li>
              </ul>
            </div>
            <CallOutBox type="critical" title="توجيه أمان البيانات">
              يمنع مسح ذاكرة التخزين المؤقت للتطبيق يدوياً في حال وجود أوامر عمل غير متزامنة لتفادي ضياع التوثيق.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 57 (Page 99) - تفاصيل الربط البرمجي (APIs) لنظام CMMS مع ERP/HR */}
      <A4Page pageNum={105}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Settings2} title="الربط والتحامل البرمجي (CMMS API System)" subtitle="تفاصيل ربط قاعدة بيانات الصيانة مع نظام الموارد البشرية وبوابة المشتريات بالمجموعة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              لتحقيق تكامل الأعمال ومنع إدخال البيانات المكررة، يتم ربط نظام CMMS برمجياً مع الأنظمة الأخرى عبر قنوات API الآمنة التالية:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px]" dir="ltr">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="font-bold text-slate-800">1. CMMS &lt;-&gt; HR API (إدارة الموظفين)</span>
                <span className="text-blue-700">تحديث حضور وغياب الفنيين والورديات لحظة بلحظة.</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="font-bold text-slate-800">2. CMMS &lt;-&gt; Procurement (المشتريات)</span>
                <span className="text-blue-700">توليد طلبات الشراء تلقائياً عند انخفاض قطع الغيار للحد الأدنى.</span>
              </div>
              <div className="flex justify-between pb-0.5">
                <span className="font-bold text-slate-800">3. CMMS &lt;-&gt; ERP Finance (المالية)</span>
                <span className="text-blue-700">ترحيل فواتير قطع الغيار وتكاليف صيانة المقاولين لحساب التكاليف.</span>
              </div>
            </div>
            <CallOutBox type="goal" title="أمن المعلومات">
              تتم كافة عمليات نقل البيانات وتكامل النظام عبر تشفير كامل للبيانات (TLS 1.3) لضمان أمن وسرية البيانات التشغيلية للمجموعة.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 58 (Page 100) - مصفوفة الأذونات والصلاحيات للمستخدمين */}
      <A4Page pageNum={106}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="مصفوفة صلاحيات مستخدمي نظام CMMS" subtitle="تحديد الأذونات والمهام المسموحة لكل دور وظيفي على قاعدة بيانات الصيانة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              لتنظيم مدخلات النظام وضمان أمن العمليات والشفافية المالية، يتم تقسيم صلاحيات الوصول على تطبيق ومنصة CMMS كالتالي:
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  <th className="p-2 border-l border-slate-200">الدور الوظيفي</th>
                  <th className="p-2 border-l border-slate-200 text-center">أوامر العمل (WOs)</th>
                  <th className="p-2 border-l border-slate-200 text-center">إدارة الأصول</th>
                  <th className="p-2 border-l border-slate-200">صلاحيات المخازن وقطع الغيار</th>
                  <th className="p-2 text-center">اعتماد الفواتير</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">فني ميداني</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-600">عرض وتنفيذ وإغلاق</td>
                  <td className="p-2 border-l border-slate-200 text-center text-slate-500">عرض فقط</td>
                  <td className="p-2 border-l border-slate-200">صرف القطع المرتبطة بأمر العمل فقط</td>
                  <td className="p-2 text-center text-red-600 font-bold">❌ لا يوجد</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">مهندس تخطيط</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-600">إنشاء وتوزيع ومتابعة</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-600">إنشاء وتعديل وحذف</td>
                  <td className="p-2 border-l border-slate-200">مراقبة الحد الأدنى وتعديل الأرصدة</td>
                  <td className="p-2 text-center text-red-600 font-bold">❌ لا يوجد</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">مدير الصيانة</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-600">تغطية وإشراف كامل</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-600">تغطية وإشراف كامل</td>
                  <td className="p-2 border-l border-slate-200">تغطية وإشراف كامل</td>
                  <td className="p-2 text-center text-green-700 font-bold">✅ حتى 15,000 ريال</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="tip" title="مراجعة الحسابات">
              يتم سحب وإيقاف صلاحيات أي مستخدم من النظام فور تغيير مسماه الوظيفي أو انتهاء فترة تعاقده مع المجموعة لضمان أمن المعلومات.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 59 (Page 101) - دليل صياغة جدول الصيانة الوقائية */}
      <A4Page pageNum={107}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Settings2} title="دليل إعداد خطة الصيانة الوقائية (PM Guide)" subtitle="خطوات وإجراءات صياغة وتثبيت جداول الفحوصات للأصول الجديدة في CMMS" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed font-semibold">
              عند إدخال أي أصل جديد على النظام، يجب صياغة خطة الصيانة الوقائية له بناء على التوجيهات الفنية المعتمدة للشركة المصنعة:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px]">
              <h5 className="font-bold text-slate-800">خطوات بناء جدول الصيانة الوقائية:</h5>
              <ol className="list-decimal list-inside space-y-1 text-slate-600">
                <li>استيراد قائمة بنود الفحص الموصى بها من كتيب التشغيل والصيانة الخاص بالجهاز.</li>
                <li>تحديد التكرار المطلوب لكل بند (يومي، أسبوعي، شهري، سنوي).</li>
                <li>ربط البلاغات والخطط بقطع الغيار والعدد المطلوبة لتسهيل إعداد الفني قبل الانطلاق.</li>
                <li>توزيع أوامر العمل الوقائية آلياً وتوزيعها على الوردية الصباحية لتلافي التأخير.</li>
              </ol>
            </div>
            <CallOutBox type="critical" title="توجيه الجدولة">
              يمنع تأجيل أي أمر عمل وقائي للأصول الحرجة (مثل شيلرات مستودعات الأدوية) لأكثر من 48 ساعة دون إشعار فني مسبق معتمد من مدير الصيانة.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 60 (Page 102) - جدول خطة النسخ الاحتياطي لقاعدة بيانات CMMS */}
      <A4Page pageNum={108}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Database} title="خطة النسخ الاحتياطي واستعادة البيانات" subtitle="جدول وبروتوكول حماية قاعدة بيانات الصيانة المركزية من الفقد والتلف في حالات الطوارئ" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              لضمان استمرارية تشغيل النظام المركزي وسرعة استعادة البيانات في حال وقوع كوارث تقنية أو تعطل السيرفرات الرئيسية، يتم تطبيق سياسة الحفظ التالية:
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  <th className="p-2 border-l border-slate-200">نوع النسخة الاحتياطية (Backup)</th>
                  <th className="p-2 border-l border-slate-200 text-center">التكرار وجدولة الحفظ</th>
                  <th className="p-2 border-l border-slate-200">موقع تخزين النسخة الاحتياطية</th>
                  <th className="p-2 text-center">زمن الاستعادة المستهدف (RTO)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">نسخ احتياطي لحظي (Real-Time Replication)</td>
                  <td className="p-2 border-l border-slate-200 text-center">مستمر (ثانية بثانية)</td>
                  <td className="p-2 border-l border-slate-200">سيرفر احتياطي منفصل جغرافياً (جدة - مركز ب)</td>
                  <td className="p-2 text-center font-mono font-bold text-green-700">&lt; 5 دقائق</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">نسخ احتياطي يومي كامل (Full Daily Backup)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">يومياً الساعة 02:00 صباحاً</td>
                  <td className="p-2 border-l border-slate-200">خوادم الحفظ السحابي الآمنة (Cloud Server)</td>
                  <td className="p-2 text-center font-mono font-bold text-green-700">&lt; 30 دقيقة</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">نسخ أسبوعي مشفر (Weekly Encrypted)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">كل نهاية يوم جمعة</td>
                  <td className="p-2 border-l border-slate-200">أشرطة تخزين خارجية مغلقة بخزنة المكتب الرئيسي</td>
                  <td className="p-2 text-center font-mono font-bold text-blue-700">خلال يوم عمل واحد</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="tip" title="اختبار الاستعادة">
              تقوم إدارة تقنية المعلومات بإجراء فحص ومحاكاة عملية لاستعادة قاعدة البيانات بالكامل مرة كل 3 أشهر للتأكد من سلامة النسخ المأخوذة وصلاحيتها للاستخدام.
            </CallOutBox>
          </div>
        </div>
      </A4Page>
    </>
  );
}
