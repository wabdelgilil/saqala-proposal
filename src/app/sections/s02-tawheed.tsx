import { Users, Target, Lightbulb, Database, Building2, Briefcase, Gauge, Award, AlertTriangle, Clock, FileText, ListChecks, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";

const challengesCols = [{ key: "n", label: "#" }, { key: "challenge", label: "التحدي" }, { key: "impact", label: "الأثر التشغيلي" }];
const challengesRows = [
  { n: "1", challenge: "تفاوت مستوى الأداء بين المواقع", impact: "صعوبة ضمان جودة موحدة" },
  { n: "2", challenge: "ضعف الاستفادة من الموارد البشرية", impact: "تكرار التخصصات دون حاجة حقيقية" },
  { n: "3", challenge: "أوقات خمول مقابل ضغط في مواقع أخرى", impact: "عدم توازن توزيع العمل" },
  { n: "4", challenge: "صعوبة الاستفادة من التخصصات المشتركة", impact: "الحاجة لمقاولين خارجيين" },
  { n: "5", challenge: "زيادة الاعتماد على المقاولين الخارجيين", impact: "ارتفاع التكاليف وضعف السيطرة على الجودة" },
  { n: "6", challenge: "عدم مرونة في تغطية الأعطال الطارئة", impact: "طول فترة التوقف" },
];
const goalsCols = [{ key: "goal", label: "الهدف" }, { key: "mechanism", label: "آلية التحقيق" }];
const goalsRows = [
  { goal: "إنشاء فريق صيانة موحد", mechanism: "جميع الفنيين تحت مظلة إدارة مركزية واحدة" },
  { goal: "رفع كفاءة استغلال الفنيين", mechanism: "توزيع العمل حسب الاحتياج الفعلي" },
  { goal: "تحسين توزيع التخصصات", mechanism: "الاستفادة من التخصصات النادرة على مستوى المجموعة" },
  { goal: "سرعة الاستجابة للأعطال", mechanism: "تحريك الفرق حسب الأولوية والموقع" },
  { goal: "تقليل الاعتماد على المقاولين", mechanism: "تنفيذ أكبر قدر من الأعمال داخليا" },
  { goal: "تحسين جودة الصيانة", mechanism: "إشراف مركزي وتوحيد معايير العمل" },
  { goal: "رفع كفاءة التخطيط", mechanism: "جداول عمل وجدولة ذكية عبر نظام CMMS" },
];
const techDbCols = [{ key: "field", label: "الحقل" }, { key: "purpose", label: "الغرض" }];
const techDbRows = [
  { field: "التخصص", purpose: "كهرباء، تكييف، سباكة، أنظمة سلامة..." },
  { field: "مستوى الخبرة", purpose: "مبتدئ — متوسط — خبير" },
  { field: "الموقع الأساسي", purpose: "الموقع الافتراضي للفني" },
  { field: "المهارات الفنية", purpose: "المهارات المتخصصة الإضافية" },
  { field: "الشهادات", purpose: "شهادات مهنية سارية (LOTO، عمل على ارتفاع...)" },
  { field: "التقييم الفني", purpose: "تقييم الأداء التراكمي" },
  { field: "الجاهزية", purpose: "متاح — في مهمة — إجازة — تدريب" },
];
const fixedSiteCols = [{ key: "type", label: "نوع الموقع" }, { key: "reason", label: "مبرر التواجد الدائم" }];
const fixedSiteRows = [
  { type: "مواقع التشغيل على مدار الساعة", reason: "استمرارية الخدمة تتطلب استجابة فورية" },
  { type: "المواقع الحساسة", reason: "أنظمة دعم حياة، مراكز بيانات" },
  { type: "المواقع ذات الأحمال التشغيلية العالية", reason: "كثافة الأصول والمعدات" },
];
const specsCols = [{ key: "n", label: "#" }, { key: "spec", label: "التخصص" }, { key: "scope", label: "نطاق العمل" }];
const specsRows = [
  { n: "1", spec: "كهرباء", scope: "تمديدات، لوحات، قواطع، إضاءة" },
  { n: "2", spec: "تكييف وتبريد", scope: "وحدات HVAC، ضواغط، مجاري هواء" },
  { n: "3", spec: "سباكة", scope: "مواسير، مضخات، خزانات، شبكات مياه" },
  { n: "4", spec: "أنظمة سلامة", scope: "إنذار حريق، إطفاء، مخارج طوارئ" },
  { n: "5", spec: "أعمال مدنية", scope: "بناء، دهان، بلاط، صيانة المباني" },
  { n: "6", spec: "أنظمة تحكم", scope: "BMS، PLC، أتمتة المباني" },
  { n: "7", spec: "أعمال ميكانيكية", scope: "محركات، مضخات، مصاعد، سلالم متحركة" },
];
const distCols = [{ key: "criteria", label: "المعيار" }, { key: "desc", label: "الوصف" }, { key: "example", label: "مثال" }];
const distRows = [
  { criteria: "نوع العطل", desc: "توزيع الفني حسب تخصصه", example: "عطل كهربائي ← فني كهرباء" },
  { criteria: "أولوية البلاغ", desc: "تحديد سرعة الاستجابة", example: "طارئ ← فوري" },
  { criteria: "الموقع الجغرافي", desc: "أقرب فني متاح للموقع", example: "تقليل زمن الحركة" },
  { criteria: "مستوى الخبرة", desc: "تناسب الخبرة مع تعقيد العمل", example: "أعمال معقدة ← فني خبير" },
  { criteria: "حجم العمل", desc: "عدد الفنيين المطلوبين", example: "مشروع كبير ← فريق كامل" },
];
const prioritiesCols = [{ key: "level", label: "مستوى الأولوية" }, { key: "time", label: "زمن الاستجابة المستهدف" }, { key: "method", label: "آلية التوزيع" }];
const prioritiesRows = [
  { level: "طارئ", time: "أقل من 30 دقيقة", method: "توجيه فوري لأقرب فني متاح" },
  { level: "عالي", time: "أقل من ساعتين", method: "توزيع خلال 15 دقيقة" },
  { level: "عادي", time: "خلال يوم العمل", method: "توزيع ضمن جدول العمل اليومي" },
  { level: "مجدول", time: "حسب الجدول المخطط", method: "توزيع مسبق ضمن خطط الصيانة" },
];
const slaCols = [{ key: "level", label: "مستوى الأولوية" }, { key: "resp", label: "زمن الاستجابة" }, { key: "fix", label: "زمن الإنجاز المستهدف" }, { key: "trigger", label: "آلية التصعيد" }, { key: "path", label: "مسار التصعيد" }];
const slaRows = [
  { level: "طارئ 🔴", resp: "أقل من 30 دقيقة", fix: "أقل من 4 ساعات", trigger: "إذا لم يتم التوزيع خلال 15 دقيقة", path: "مشرف الموقع ← مهندس المكتب الفني ← مدير الصيانة" },
  { level: "عالي 🟡", resp: "أقل من ساعتين", fix: "أقل من 24 ساعة", trigger: "إذا لم يتم الإنجاز خلال 12 ساعة", path: "مشرف الموقع ← مهندس المكتب الفني" },
  { level: "عادي 🟢", resp: "خلال يوم العمل", fix: "أقل من 3 أيام", trigger: "إذا تأخر عن 3 أيام", path: "مهندس المكتب الفني" },
  { level: "مجدول 🔵", resp: "حسب الجدول", fix: "حسب الجدول", trigger: "إذا تأخر عن الجدول بيوم", path: "مدير الصيانة" },
];
const finesCols = [{ key: "violation", label: "المخالفة" }, { key: "penalty", label: "العقوبة المقترحة" }];
const finesRows = [
  { violation: "تجاوز زمن الاستجابة للبلاغ الطارئ", penalty: "غرامة 500 ريال عن كل ساعة تأخير" },
  { violation: "تجاوز زمن الإنجاز للأعمال الطارئة", penalty: "غرامة 1,000 ريال عن كل يوم تأخير" },
  { violation: "عدم التزام بجدول الصيانة الوقائية", penalty: "خصم 10% من قيمة العقد الشهري" },
  { violation: "تكرار المخالفة 3 مرات", penalty: "إنذار رسمي + تخفيض نطاق الأعمال" },
];
const slaFormCols = [{ key: "field", label: "الحقل" }, { key: "desc", label: "الوصف" }];
const slaFormRows = [
  { field: "تاريخ ووقت البلاغ", desc: "—" },
  { field: "رقم أمر العمل", desc: "—" },
  { field: "مستوى الأولوية", desc: "طارئ / عالي / عادي / مجدول" },
  { field: "تاريخ ووقت التوزيع على الفني", desc: "—" },
  { field: "تاريخ ووقت الإنجاز الفعلي", desc: "—" },
  { field: "الفرق عن SLA", desc: "—" },
  { field: "سبب التأخير (إن وجد)", desc: "—" },
  { field: "الإجراء التصحيحي", desc: "—" },
];
const maintTypesCols = [{ key: "type", label: "النوع" }, { key: "desc", label: "الوصف" }];
const maintTypesRows = [
  { type: "صيانة طارئة", desc: "أعطال مفاجئة، توقف الأنظمة الحرجة، بلاغات عاجلة" },
  { type: "صيانة وقائية", desc: "أعمال مجدولة، فحوصات دورية، معايرة أجهزة" },
  { type: "صيانة تصحيحية", desc: "إصلاح أعطال متكررة، تحسينات وتطوير" },
];
const officeRoleCols = [{ key: "task", label: "المهمة" }, { key: "desc", label: "الوصف" }, { key: "method", label: "الآلية" }];
const officeRoleRows = [
  { task: "إصدار أوامر العمل", desc: "إنشاء الأوامر الرقمية في نظام CMMS", method: "آلي للصيانة الوقائية ويدوي للبلاغات" },
  { task: "توزيع الفرق", desc: "توزيع المهام حسب التخصص والأولوية", method: "توزيع ذكي عبر النظام" },
  { task: "متابعة التنفيذ", desc: "متابعة حالة كل أمر عمل", method: "لوحة تحكم آنية وتنبيهات للتأخير" },
  { task: "الدعم الفني", desc: "إرشاد الفرق ميدانيا أو عن بُعد", method: "دعم هاتفي وزيارات ميدانية" },
  { task: "متابعة الأداء", desc: "قياس مؤشرات الأداء", method: "تقارير أسبوعية وشهرية" },
  { task: "إعادة توزيع الموارد", desc: "تحريك الفرق حسب الضغط التشغيلي", method: "مرونة في التوزيع" },
];
const benefitsCols = [{ key: "n", label: "#" }, { key: "benefit", label: "الميزة" }, { key: "desc", label: "الشرح" }];
const benefitsRows = [
  { n: "1", benefit: "رفع كفاءة استغلال الفنيين", desc: "تقليل أوقات الخمول وتوزيع عادل للأعباء" },
  { n: "2", benefit: "الاستفادة من التخصصات المشتركة", desc: "تخصص واحد يخدم جميع المواقع" },
  { n: "3", benefit: "سرعة الاستجابة", desc: "تحريك الفرق حسب الحاجة" },
  { n: "4", benefit: "تقليل التكاليف", desc: "تقليل الحاجة لتعيينات ومقاولين خارجيين" },
  { n: "5", benefit: "تحسين جودة الصيانة", desc: "إشراف مركزي وتوحيد إجراءات العمل" },
];
const challengesSolCols = [{ key: "challenge", label: "التحدي" }, { key: "solution", label: "الحل المقترح" }];
const challengesSolRows = [
  { challenge: "مقاومة التغيير من بعض المواقع", solution: "التطبيق التدريجي وإشراك الفرق الحالية" },
  { challenge: "اختلاف مستويات الفنيين", solution: "برنامج تدريبي وتأهيلي موحد" },
  { challenge: "تنظيم الحركة والتنقل", solution: "نظام حجز وجدولة في CMMS" },
  { challenge: "الحاجة لنظام متابعة قوي", solution: "تطبيق ميداني للفنيين" },
];
const escalCols = [{ key: "case", label: "الحالة" }, { key: "l1", label: "المستوى 1" }, { key: "l2", label: "المستوى 2" }, { key: "l3", label: "المستوى 3" }];
const escalRows = [
  { case: "بلاغ طارئ لم يُستجب له خلال 30 دقيقة", l1: "مشرف الموقع", l2: "مهندس المكتب الفني", l3: "مدير الصيانة" },
  { case: "أمر عمل تأخر إنجازه 50% عن SLA", l1: "مهندس التخطيط", l2: "مهندس أول المكتب الفني", l3: "مدير الصيانة" },
  { case: "عدم توفر قطعة غيار حرجة", l1: "أمين المخزن", l2: "مهندس المكتب الفني", l3: "إدارة المشتريات" },
  { case: "خلاف فني بين فريقين", l1: "مهندس المكتب الفني", l2: "مهندس أول المكتب الفني", l3: "مدير الصيانة" },
  { case: "مخالفة سلامة خطيرة", l1: "مسؤول السلامة", l2: "مدير الموقع", l3: "الإدارة العليا" },
  { case: "تجاوز الميزانية الشهرية", l1: "مهندس التخطيط", l2: "مدير الصيانة", l3: "الإدارة العليا" },
  { case: "شكوى متكررة من مستخدم", l1: "مشرف الموقع", l2: "مهندس المكتب الفني", l3: "مدير الصيانة" },
];

export default function Section02() {
  return (
    <section className="space-y-6 print:space-y-4">

      <SectionHeader icon={Users} title="توحيد فرق الصيانة ضمن منظومة التشغيل المركزية" subtitle="نموذج تشغيلي موحد لجميع فرق الصيانة في المجموعة" />

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          في الوضع الحالي، تعمل فرق الصيانة داخل كل موقع بشكل مستقل، حيث يمتلك كل مبنى أو منشأة فريقه الخاص وإدارته التشغيلية المنفصلة. يترتب على ذلك عدة تحديات:
        </p>
      </div>

      <FlowChart
        dir="LR"
        nodes={[
          { id: "m1", label: "الموقع A — فريق مستقل", icon: "🏗️" },
          { id: "m2", label: "الموقع B — فريق مستقل", icon: "🏢" },
          { id: "m3", label: "الموقع C — فريق مستقل", icon: "🏠" },
          { id: "c1", label: "تفاوت مستوى الأداء", icon: "📉", color: "red" },
          { id: "c2", label: "ضعف استغلال الموارد", icon: "📦", color: "red" },
          { id: "c3", label: "خمول في بعض المواقع", icon: "😴", color: "red" },
          { id: "c4", label: "عدم مرونة في الطوارئ", icon: "🚨", color: "red" },
        ]}
        edges={[
          { from: "m1", to: "c1" },
          { from: "m2", to: "c2" }, { from: "m2", to: "c3" },
          { from: "m3", to: "c4" },
        ]}
      />

      <DataTable columns={challengesCols} rows={challengesRows} />

      <CallOutBox type="goal" title="الهدف من التوحيد">
        بناء على ما تقدم، تبرز أهمية إنشاء منظومة تشغيل مركزية موحدة لفرق الصيانة.
      </CallOutBox>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Target} title="أهداف توحيد فرق الصيانة" />
        <FlowChart
          nodes={[
            { id: "هدف", label: "توحيد فرق الصيانة", icon: "🎯", color: "navy" },
            { id: "أ1", label: "إنشاء فريق موحد للمجموعة", icon: "👥" },
            { id: "أ2", label: "رفع كفاءة استغلال الفنيين", icon: "📈" },
            { id: "أ3", label: "تحسين توزيع التخصصات", icon: "🎨" },
            { id: "أ4", label: "سرعة الاستجابة للأعطال", icon: "⚡" },
            { id: "أ5", label: "تقليل الاعتماد على المقاولين", icon: "📉" },
            { id: "أ6", label: "تحسين جودة الصيانة", icon: "✅" },
            { id: "أ7", label: "رفع كفاءة التخطيط", icon: "📊" },
          ]}
          edges={[
            { from: "هدف", to: "أ1" }, { from: "هدف", to: "أ2" },
            { from: "هدف", to: "أ3" }, { from: "هدف", to: "أ4" },
            { from: "هدف", to: "أ5" }, { from: "هدف", to: "أ6" },
            { from: "هدف", to: "أ7" },
          ]}
        />
        <DataTable columns={goalsCols} rows={goalsRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Lightbulb} title="فلسفة التشغيل المقترحة" />
        <p className="text-slate-700 leading-relaxed mb-4">
          يقوم النظام المقترح على تجميع جميع فرق الصيانة ضمن منظومة تشغيل مركزية موحدة، وتوزيع الفنيين بناء على مجموعة من المعايير التشغيلية الديناميكية:
        </p>
        <FlowChart
          nodes={[
            { id: "توزيع", label: "أسس توزيع الفنيين", icon: "🎯", color: "navy" },
            { id: "أمر", label: "أوامر العمل", icon: "📋" },
            { id: "أولوية", label: "الأولويات", icon: "🔢" },
            { id: "تخصص", label: "التخصص الفني", icon: "🔧" },
            { id: "موقع", label: "الموقع الجغرافي", icon: "📍" },
            { id: "حجم", label: "حجم الأعمال", icon: "📏" },
            { id: "نتيجة", label: "التوزيع حسب الاحتياج الفعلي", icon: "✅", color: "green" },
          ]}
          edges={[
            { from: "توزيع", to: "أمر" }, { from: "توزيع", to: "أولوية" },
            { from: "توزيع", to: "تخصص" }, { from: "توزيع", to: "موقع" },
            { from: "توزيع", to: "حجم" },
            { from: "أمر", to: "نتيجة" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Database} title="آلية التشغيل المركزية" />
        <h4 className="text-md font-bold text-slate-700 mb-3">قاعدة بيانات موحدة للفنيين</h4>
        <p className="text-sm text-slate-600 mb-3">يتم تسجيل جميع الفنيين في نظام CMMS مع البيانات التالية:</p>
        <DataTable columns={techDbCols} rows={techDbRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Building2} title="تصنيف الفرق الفنية" />
        <h4 className="text-md font-bold text-slate-700 mb-3">فرق ثابتة في المواقع الحرجة</h4>
        <DataTable columns={fixedSiteCols} rows={fixedSiteRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">فرق تشغيل مركزية متحركة</h4>
        <FlowChart
          nodes={[
            { id: "مركز", label: "المكتب الفني المركزي", icon: "🏗️", color: "navy" },
            { id: "نظام", label: "نظام CMMS", icon: "💻", color: "blue" },
            { id: "تحليل", label: "تحليل الاحتياج", icon: "🔍" },
            { id: "قرار", label: "توزيع الفرق", icon: "⚖️", color: "amber" },
            { id: "طارئ", label: "أعطال طارئة", icon: "🚨" },
            { id: "مجدول", label: "صيانة مجدولة", icon: "📅" },
            { id: "احتياج", label: "ضغط تشغيلي", icon: "📊" },
            { id: "تحريك", label: "تحريك الفريق المناسب", icon: "🚚", color: "green" },
          ]}
          edges={[
            { from: "مركز", to: "نظام" },
            { from: "نظام", to: "تحليل" },
            { from: "تحليل", to: "قرار" },
            { from: "قرار", to: "طارئ" },
            { from: "قرار", to: "مجدول" },
            { from: "قرار", to: "احتياج" },
            { from: "طارئ", to: "تحريك" },
            { from: "مجدول", to: "تحريك" },
            { from: "احتياج", to: "تحريك" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Briefcase} title="توزيع الفرق حسب التخصص" />
        <h4 className="text-md font-bold text-slate-700 mb-3">التخصصات الرئيسية</h4>
        <DataTable columns={specsCols} rows={specsRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">آلية توزيع الفنيين</h4>
        <DataTable columns={distCols} rows={distRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">تصنيف الأولويات</h4>
        <DataTable columns={prioritiesCols} rows={prioritiesRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Gauge} title="هيكل مستوى الخدمة (SLA Framework)" />
        <h4 className="text-md font-bold text-slate-700 mb-3">مصفوفة SLA الكاملة</h4>
        <DataTable columns={slaCols} rows={slaRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">عقوبات التأخير (للمقاولين)</h4>
        <DataTable columns={finesCols} rows={finesRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">نموذج الإبلاغ عن خرق SLA</h4>
        <DataTable columns={slaFormCols} rows={slaFormRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ListChecks} title="أنواع أعمال الصيانة" />
        <DataTable columns={maintTypesCols} rows={maintTypesRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={FileText} title="دور المكتب الفني في إدارة الفرق" />
        <DataTable columns={officeRoleCols} rows={officeRoleRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={BarChart3} title="مميزات النظام المركزي" />
        <DataTable columns={benefitsCols} rows={benefitsRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={AlertTriangle} title="التحديات المتوقعة والحلول" />
        <DataTable columns={challengesSolCols} rows={challengesSolRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Award} title="خلاصة القسم الثاني" />
        <CallOutBox type="goal" title="خلاصة">
          يهدف نظام التشغيل المركزي لفرق الصيانة إلى إنشاء منظومة موحدة، تقوم على تجميع الموارد البشرية تحت إدارة مركزية، وتوزيع الفرق حسب الاحتياج الفعلي، مع تحسين استغلال التخصصات الفنية، والحفاظ على استقرار المواقع الحرجة والاستفادة من الكفاءات الحالية.
        </CallOutBox>
        <CallOutBox type="critical" title="التوصية الإجرائية">
          إجراء حصر شامل لمهارات جميع الفنيين الحاليين في المجموعة، وتصنيفهم حسب التخصص والمستوى، كخطوة أولى نحو بناء قاعدة بيانات موحدة للفريق الفني.
        </CallOutBox>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Clock} title="مصفوفة التصعيد (Escalation Matrix)" />
        <h4 className="text-md font-bold text-slate-700 mb-3">متى نُصعّد؟</h4>
        <DataTable columns={escalCols} rows={escalRows} />
        <div className="mt-4 space-y-2">
          <p className="text-sm text-slate-700"><strong>قواعد التصعيد:</strong></p>
          <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
            <li><strong>التصعيد الرأسي:</strong> إذا لم يحل المستوى الأدنى المشكلة خلال المهلة المحددة، تنتقل تلقائياً للمستوى الأعلى</li>
            <li><strong>التصعيد الأفقي:</strong> إذا كانت المشكلة تحتاج تخصصاً آخر، تُحول مباشرة مع إشعار الطرفين</li>
            <li><strong>التوثيق إلزامي:</strong> كل خطوة تصعيد تُسجل في CMMS مع زمنها</li>
            <li><strong>لا تخطي للمستويات:</strong> يجب البدء من المستوى 1 إلا في الحالات الحرجة المهددة للحياة</li>
          </ol>
        </div>
      </div>

    </section>
  );
}
