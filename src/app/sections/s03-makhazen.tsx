import { Package, Target, Lightbulb, Warehouse, BarChart3, AlertTriangle, Award, QrCode, ClipboardCheck, TrendingUp, Database } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import SequenceDiagram from "@/components/SequenceDiagram";
import { storeRulesCols, storeRulesRows } from "@/lib/data-s2";

const challengesCols = [{ key: "n", label: "#" }, { key: "challenge", label: "التحدي" }, { key: "impact", label: "الأثر" }];
const challengesRows = [
  { n: "1", challenge: "عدم توفر القطع وقت الحاجة", impact: "تأخير الإصلاحات وزيادة زمن التوقف" },
  { n: "2", challenge: "شراء متكرر لنفس القطع", impact: "هدر في الميزانية" },
  { n: "3", challenge: "تراكم مخزون غير مستخدم", impact: "تكلفة تخزين ورأس مال راكد" },
  { n: "4", challenge: "ضعف التتبع والجرد", impact: "خسائر غير مكتشفة" },
  { n: "5", challenge: "فقدان القطع أو سوء استخدامها", impact: "تكاليف إضافية" },
  { n: "6", challenge: "صعوبة تحديد الاحتياجات الفعلية", impact: "سوء التخطيط للشراء" },
];
const goalsCols = [{ key: "goal", label: "الهدف" }, { key: "desc", label: "الوصف" }];
const goalsRows = [
  { goal: "ضمان توفر قطع الغيار الحرجة", desc: "منع توقف التشغيل بسبب نقص القطع" },
  { goal: "تقليل الأعطال الناتجة عن نقص القطع", desc: "تحسين سرعة الإصلاح" },
  { goal: "رفع كفاءة إدارة المخزون", desc: "تحسين معدل دوران المخزون" },
  { goal: "تقليل الهدر والتكاليف", desc: "خفض المخزون الراكد" },
  { goal: "تحسين سرعة الاستجابة للصيانة", desc: "تقليل زمن الحصول على القطعة" },
  { goal: "تنظيم عمليات الصرف والشراء", desc: "توثيق كل حركة مخزون" },
  { goal: "إنشاء قاعدة بيانات دقيقة", desc: "ربط المخازن مع نظام الصيانة المركزي" },
];
const philosophyCols = [{ key: "principle", label: "المبدأ" }, { key: "concept", label: "المفهوم" }];
const philosophyRows = [
  { principle: "الربط بالصيانة", concept: "المخزون مرتبط بأوامر العمل — كل صرف مرتبط بمهمة" },
  { principle: "الشفافية", concept: "جميع الحركات مسجلة وقابلة للتتبع" },
  { principle: "الكفاءة", concept: "تحديد الحد الأدنى والتنبيه عند انخفاضه" },
  { principle: "الاستباقية", concept: "تحليل الاستهلاك للتنبؤ بالاحتياجات المستقبلية" },
];
const structureCols = [{ key: "aspect", label: "المقارنة" }, { key: "central", label: "المخزن المركزي" }, { key: "sub", label: "المخازن الفرعية" }];
const structureRows = [
  { aspect: "المحتوى", central: "قطع رئيسية واستراتيجية ومرتفعة القيمة", sub: "قطع استهلاكية سريعة الحركة" },
  { aspect: "الإدارة", central: "يدير المخزون العام والمشتريات", sub: "يخدم الموقع مباشرة" },
  { aspect: "التغذية", central: "يستقبل من المشتريات", sub: "يتزود من المخزن المركزي" },
  { aspect: "المتابعة", central: "متابعة الحد الأدنى والمخزون الراكد", sub: "متابعة الاستهلاك اليومي" },
];
const criticalCols = [{ key: "part", label: "القطعة" }, { key: "impact", label: "الأثر" }, { key: "example", label: "أمثلة" }];
const criticalRows = [
  { part: "كروت تحكم إلكترونية", impact: "توقف الأنظمة", example: "PLC، لوحات تحكم" },
  { part: "قطع أنظمة الحريق", impact: "مخاطر سلامة", example: "كواشف، صمامات" },
  { part: "ضواغط وأجزاء HVAC رئيسية", impact: "توقف التكييف المركزي", example: "ضواغط، مكثفات" },
  { part: "مضخات حريق ومياه رئيسية", impact: "تعطل الخدمات الحيوية", example: "مضخات، مواتير" },
];
const classMatrixCols = [{ key: "class", label: "الفئة" }, { key: "cost", label: "التكلفة" }, { key: "lead", label: "زمن التوريد" }, { key: "critical", label: "الحرجة" }, { key: "strategy", label: "إستراتيجية الإدارة" }];
const classMatrixRows = [
  { class: "A", cost: "عالية", lead: "طويل", critical: "حرجة", strategy: "مخزون استراتيجي ورقابة مشددة" },
  { class: "B", cost: "متوسطة", lead: "متوسط", critical: "متوسطة", strategy: "مخزون أمان مع حد أدنى" },
  { class: "C", cost: "منخفضة", lead: "قصير", critical: "عادية", strategy: "شراء حسب الطلب" },
];
const registerCols = [{ key: "field", label: "الحقل" }, { key: "desc", label: "الوصف" }];
const registerRows = [
  { field: "الكود", desc: "رمز تعريف فريد لكل قطعة" },
  { field: "الوصف", desc: "اسم ومواصفات القطعة" },
  { field: "الشركة المصنعة", desc: "Manufacturer" },
  { field: "المورد", desc: "المورد المعتمد" },
  { field: "الكمية", desc: "الرصيد الحالي والحد الأدنى والأقصى" },
  { field: "الموقع", desc: "المخزن والرف والخانة" },
];
const trackCols = [{ key: "data", label: "البيانات المسجلة" }, { key: "purpose", label: "الغرض" }];
const trackRows = [
  { data: "من قام بالصرف؟", purpose: "تحديد المسؤولية" },
  { data: "لأي أصل؟", purpose: "ربط التكلفة بالأصل" },
  { data: "لأي أمر عمل؟", purpose: "ربط المصروفات بالمهمة" },
  { data: "تاريخ الحركة", purpose: "إمكانية الرجوع لأي حركة سابقة" },
];
const inventoryCols = [{ key: "type", label: "نوع الجرد" }, { key: "freq", label: "التكرار" }, { key: "purpose", label: "الغرض" }];
const inventoryRows = [
  { type: "جرد سريع", freq: "أسبوعي", purpose: "للقطع الحرجة وسريعة الحركة" },
  { type: "جرد جزئي", freq: "شهري", purpose: "لعينة مختارة من الأصناف" },
  { type: "جرد كامل", freq: "سنوي", purpose: "مطابقة المخزون الفعلي مع النظام" },
];
const workCycleCols = [{ key: "step", label: "الخطوة" }, { key: "event", label: "الحدث" }];
const workCycleRows = [
  { step: "1", event: "الفني يستلم أمر العمل من النظام" },
  { step: "2", event: "النظام يعرض قطع الغيار المطلوبة" },
  { step: "3", event: "الفني يتجه للمخزن للصرف" },
  { step: "4", event: "أمين المخزن يسجل الصرف ويربطه بأمر العمل" },
  { step: "5", event: "المخزون يُحدث تلقائيا" },
  { step: "6", event: "الفني ينفذ الإصلاح ويغلق الأمر" },
  { step: "7", event: "النظام ينبه عند انخفاض المخزون" },
];
const officeRoleCols = [{ key: "task", label: "المهمة" }, { key: "desc", label: "الوصف" }];
const officeRoleRows = [
  { task: "مراجعة الاحتياجات الفنية", desc: "تحديد الأولويات للقطع المطلوبة" },
  { task: "اعتماد طلبات الشراء", desc: "الموافقة الفنية قبل الرفع" },
  { task: "متابعة القطع الحرجة", desc: "التأكد من توفر القطع الحيوية" },
  { task: "تحليل الاستهلاك", desc: "دراسة أنماط الاستهلاك لتحسين التخطيط" },
  { task: "مراجعة التكاليف", desc: "مراقبة تكاليف قطع الغيار" },
];
const barcodeCols = [{ key: "feature", label: "الميزة" }, { key: "benefit", label: "الفائدة" }];
const barcodeRows = [
  { feature: "سرعة الجرد", benefit: "مسح ضوئي بدلا من العد اليدوي" },
  { feature: "سرعة الصرف", benefit: "مسح القطعة وربطها بأمر العمل" },
  { feature: "تقليل الأخطاء", benefit: "إدخال دقيق دون تدخل بشري" },
  { feature: "تتبع القطع", benefit: "معرفة تاريخ وحركة كل قطعة" },
  { feature: "مواقع التخزين", benefit: "تحديد الرف والخانة بدقة" },
];
const problemCols = [{ key: "challenge", label: "التحدي" }, { key: "solution", label: "الحل" }, { key: "priority", label: "الأولوية" }];
const problemRows = [
  { challenge: "ضعف بيانات المخزون الحالية", solution: "حصر شامل وإعادة تسجيل", priority: "عاجلة" },
  { challenge: "قطع غير مسجلة", solution: "حملة حصر ميدانية", priority: "عاجلة" },
  { challenge: "اختلاف طرق التخزين", solution: "توحيد إجراءات التخزين والترميز", priority: "عاجلة" },
  { challenge: "تكرار الشراء", solution: "قاعدة بيانات موحدة مع تنبيهات", priority: "متوسطة" },
  { challenge: "عدم وجود أكواد موحدة", solution: "وضع نظام ترميز موحد", priority: "متوسطة" },
];
const resultsCols = [{ key: "n", label: "#" }, { key: "result", label: "النتيجة" }, { key: "measure", label: "مؤشر القياس" }];
const resultsRows = [
  { n: "1", result: "تقليل الأعطال الناتجة عن نقص القطع", measure: "انخفاض أعطال نقص القطع" },
  { n: "2", result: "تحسين سرعة الاستجابة", measure: "متوسط وقت الحصول على القطعة" },
  { n: "3", result: "تقليل الهدر والتكاليف", measure: "انخفاض تكاليف المخزون الراكد" },
  { n: "4", result: "رفع كفاءة إدارة المخزون", measure: "تحسين معدل دوران المخزون" },
  { n: "5", result: "تحسين التخطيط للشراء", measure: "دقة توقعات الاحتياج" },
];

export default function Section03() {
  return (
    <section className="space-y-6 print:space-y-4">

      <SectionHeader icon={Package} title="نظام إدارة مخازن قطع الغيار" subtitle="إدارة موحدة وفعالة للمخزون في جميع المواقع" />

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          تعد مخازن قطع الغيار من أهم العناصر المؤثرة على كفاءة أعمال الصيانة والتشغيل. يعتمد نجاح أي منظومة صيانة بشكل مباشر على توفر القطع المناسبة في الوقت المناسب، وسهولة الوصول إليها، وتنظيم عمليات الصرف والشراء، والتحكم في التكاليف والمخزون.
        </p>
      </div>

      <CallOutBox type="critical" title="التحديات في الأنظمة التقليدية">
        <DataTable columns={challengesCols} rows={challengesRows} />
      </CallOutBox>

      <CallOutBox type="goal" title="الهدف">
        بناء على ما تقدم، تنشأ الحاجة إلى إنشاء نظام مركزي منظم لإدارة مخازن وقطع الغيار ضمن منظومة الصيانة المركزية.
      </CallOutBox>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Target} title="أهداف النظام المركزي للمخازن" />
        <DataTable columns={goalsCols} rows={goalsRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Lightbulb} title="فلسفة النظام المقترح" />
        <p className="text-slate-700 leading-relaxed mb-4">
          يقوم النظام على إنشاء منظومة مخازن مركزية ذكية مرتبطة مباشرة بأعمال الصيانة والتشغيل، بحيث لا تعمل المخازن بشكل منفصل عن الصيانة، بل تكون جزءا أساسيا من دورة التشغيل اليومية.
        </p>
        <DataTable columns={philosophyCols} rows={philosophyRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Warehouse} title="الهيكل المقترح للمخازن" />
        <DataTable columns={structureCols} rows={structureRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">آلية العمل بين المخازن</h4>
        <FlowChart
          nodes={[
            { id: "مخازن", label: "منظومة المخازن", icon: "🏭", color: "navy" },
            { id: "مركزي", label: "المخزن المركزي", icon: "🏗️" },
            { id: "فرعي", label: "المخازن الفرعية", icon: "🏠" },
            { id: "محتوى_مركزي", label: "قطع رئيسية + مرتفعة القيمة", icon: "💎" },
            { id: "محتوى_فرعي", label: "قطع استهلاكية يومية", icon: "📦" },
            { id: "يدير", label: "يدير المخزون والمشتريات", icon: "⚙️" },
            { id: "يخدم", label: "يخدم الموقع يومياً", icon: "✅" },
          ]}
          edges={[
            { from: "مخازن", to: "مركزي" }, { from: "مخازن", to: "فرعي" },
            { from: "مركزي", to: "محتوى_مركزي" }, { from: "فرعي", to: "محتوى_فرعي" },
            { from: "مركزي", to: "يدير" }, { from: "فرعي", to: "يخدم" },
            { from: "مركزي", to: "فرعي" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Database} title="تصنيف قطع الغيار" />
        <h4 className="text-md font-bold text-slate-700 mb-2">قطع غيار حرجة</h4>
        <p className="text-sm text-slate-600 mb-3">القطع التي يؤدي عدم توفرها إلى توقف التشغيل أو مخاطر عالية:</p>
        <DataTable columns={criticalCols} rows={criticalRows} />
        <h4 className="text-md font-bold text-slate-700 mt-4 mb-2">قطع غيار تشغيلية</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <p className="text-sm font-bold text-slate-700">القطع اليومية</p>
            <p className="text-xs text-slate-600">فلاتر، أحزمة، لمبات، جوان</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <p className="text-sm font-bold text-slate-700">القطع الاستهلاكية</p>
            <p className="text-xs text-slate-600">مواد تشحيم، غازات تبريد</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <p className="text-sm font-bold text-slate-700">الأدوات البسيطة</p>
            <p className="text-xs text-slate-600">مسامير، وصلات، أختام</p>
          </div>
        </div>
        <h4 className="text-md font-bold text-slate-700 mt-4 mb-2">قطع نادرة أو مرتفعة التكلفة</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="border border-amber-200 rounded-lg p-3 bg-amber-50">
            <p className="text-sm font-bold text-amber-700">رقابة خاصة</p>
            <p className="text-xs text-amber-600">موافقات متعددة المستويات</p>
          </div>
          <div className="border border-amber-200 rounded-lg p-3 bg-amber-50">
            <p className="text-sm font-bold text-amber-700">توثيق دقيق</p>
            <p className="text-xs text-amber-600">سجل استخدام كامل</p>
          </div>
          <div className="border border-amber-200 rounded-lg p-3 bg-amber-50">
            <p className="text-sm font-bold text-amber-700">تخطيط شراء دقيق</p>
            <p className="text-xs text-amber-600">تحليل الحاجة والتكلفة</p>
          </div>
        </div>
        <h4 className="text-md font-bold text-slate-700 mb-3">مصفوفة التصنيف</h4>
        <DataTable columns={classMatrixCols} rows={classMatrixRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ClipboardCheck} title="إدارة المخزون" />
        <h4 className="text-md font-bold text-slate-700 mb-3">تسجيل القطع</h4>
        <DataTable columns={registerCols} rows={registerRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">تحديد الحد الأدنى للمخزون</h4>
        <FlowChart
          dir="LR"
          nodes={[
            { id: "مخزون", label: "مستوى المخزون", icon: "📊", color: "navy" },
            { id: "أعلى", label: "أعلى من الحد — تشغيل عادي", icon: "✅", color: "green" },
            { id: "إنذار", label: "عند الحد الأدنى — تنبيه إعادة طلب", icon: "⚠️", color: "amber" },
            { id: "خطر", label: "أقل من الحد — إجراء عاجل", icon: "🚨", color: "red" },
            { id: "طلب", label: "إصدار طلب شراء", icon: "📋" },
            { id: "إجراء", label: "شراء طارئ وتنبيه للإدارة", icon: "📢" },
          ]}
          edges={[
            { from: "مخزون", to: "أعلى" }, { from: "مخزون", to: "إنذار" },
            { from: "مخزون", to: "خطر" },
            { from: "إنذار", to: "طلب" }, { from: "خطر", to: "إجراء" },
          ]}
        />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">متابعة الحركة</h4>
        <DataTable columns={trackCols} rows={trackRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">الجرد الدوري</h4>
        <DataTable columns={inventoryCols} rows={inventoryRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={TrendingUp} title="الربط بين المخازن وأوامر العمل" />
        <SequenceDiagram
          participants={[
            { id: "ف", label: "الفني", icon: "🔧", color: "slate" },
            { id: "ن", label: "نظام CMMS", icon: "💻", color: "blue" },
            { id: "م", label: "أمين المخزن", icon: "📦", color: "green" },
          ]}
          steps={[
            { from: "ف", to: "ن", label: "استلام أمر العمل" },
            { from: "ن", to: "ف", label: "عرض القطع المطلوبة" },
            { from: "ف", to: "م", label: "طلب صرف القطع" },
            { from: "م", to: "ن", label: "تسجيل صرف القطع" },
            { from: "ن", to: "م", label: "تحديث المخزون تلقائياً" },
            { from: "ف", to: "ن", label: "إغلاق أمر العمل بعد الإصلاح" },
          ]}
        />
        <h4 className="text-md font-bold text-slate-700 mt-4 mb-3">دورة العمل</h4>
        <DataTable columns={workCycleCols} rows={workCycleRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={BarChart3} title="العلاقة بين المخازن والمشتريات" />
        <FlowChart
          nodes={[
            { id: "انخفاض", label: "انخفاض المخزون للحد الأدنى", icon: "📉", color: "amber" },
            { id: "تنبيه", label: "تنبيه تلقائي", icon: "🔔" },
            { id: "مراجعة", label: "مراجعة المكتب الفني", icon: "🔍" },
            { id: "طلب", label: "إصدار طلب شراء", icon: "📋" },
            { id: "اعتماد", label: "اعتماد", icon: "✅", color: "green" },
            { id: "مشتريات", label: "تنفيذ الشراء", icon: "🛒" },
            { id: "استلام", label: "استلام وإضافة للمخزون", icon: "📦" },
            { id: "تحديث", label: "تحديث المخزون في النظام", icon: "💻" },
          ]}
          edges={[
            { from: "انخفاض", to: "تنبيه" },
            { from: "تنبيه", to: "مراجعة" },
            { from: "مراجعة", to: "طلب" },
            { from: "طلب", to: "اعتماد" },
            { from: "اعتماد", to: "مشتريات" },
            { from: "مشتريات", to: "استلام" },
            { from: "استلام", to: "تحديث" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ClipboardCheck} title="دور المكتب الفني في إدارة المخزون" />
        <DataTable columns={officeRoleCols} rows={officeRoleRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={QrCode} title="الباركود و QR Code" />
        <DataTable columns={barcodeCols} rows={barcodeRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={AlertTriangle} title="التحديات المتوقعة والحلول" />
        <DataTable columns={problemCols} rows={problemRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={BarChart3} title="النتائج المتوقعة" />
        <DataTable columns={resultsCols} rows={resultsRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Award} title="خلاصة القسم الثالث" />
        <CallOutBox type="goal" title="خلاصة">
          يمثل نظام إدارة مخازن وقطع الغيار أحد الأعمدة الرئيسية لنجاح منظومة الصيانة المركزية. يساهم النظام في ضمان توفر الاحتياجات التشغيلية، ورفع كفاءة أعمال الصيانة، وتقليل التكاليف والهدر، وتحسين التخطيط والمتابعة، ودعم التحول الرقمي في إدارة الأصول.
        </CallOutBox>
        <CallOutBox type="critical" title="التوصية الإجرائية">
          البدء بحصر قطع الغيار الحرجة (تصنيف A) في موقع واحد، وتسجيلها في نظام CMMS مع تحديد الحد الأدنى للمخزون، كبداية تجريبية قبل تعميم النظام على جميع المواقع.
        </CallOutBox>
      </div>

    </section>
  );
}
