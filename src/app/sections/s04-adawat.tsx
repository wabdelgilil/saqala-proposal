import { Wrench, Target, Lightbulb, QrCode, Settings2, Monitor, ClipboardCheck, AlertTriangle, Award, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";

const challengesCols = [{ key: "n", label: "#" }, { key: "challenge", label: "التحدي" }, { key: "impact", label: "الأثر" }];
const challengesRows = [
  { n: "1", challenge: "فقدان الأدوات", impact: "تكرار الشراء وتكاليف إضافية" },
  { n: "2", challenge: "سوء الاستخدام", impact: "تلف الأدوات وأعطال متكررة" },
  { n: "3", challenge: "غياب تتبع العهد", impact: "عدم معرفة المسؤول عن الأداة" },
  { n: "4", challenge: "تكرار شراء المعدات", impact: "هدر في الميزانية" },
  { n: "5", challenge: "ضعف توفر الأجهزة التخصصية", impact: "الاعتماد على التخمين بدل التشخيص" },
];
const dailyToolsCols = [{ key: "cat", label: "الفئة" }, { key: "examples", label: "أمثلة" }];
const dailyToolsRows = [
  { cat: "عدد يدوية", examples: "مفكات، مفاتيح، زراديات، بنط" },
  { cat: "أدوات كهربائية", examples: "شنيور، صاروخ قطع، دريل" },
  { cat: "أجهزة قياس أساسية", examples: "أفوميتر، كلامب ميتر" },
  { cat: "معدات وصول", examples: "سلالم، سقالات صغيرة" },
  { cat: "أدوات عامة", examples: "مسدس شحم، منشار، مطرقة" },
];
const specToolsCols = [{ key: "device", label: "الجهاز" }, { key: "use", label: "الاستخدام" }, { key: "benefit", label: "الفائدة" }];
const specToolsRows = [
  { device: "كاميرات حرارية", use: "فحص اللوحات والمحركات والمكيفات", benefit: "اكتشاف ارتفاع الحرارة قبل العطل" },
  { device: "أجهزة كشف التسريب", use: "شبكات المياه والتكييف والغازات", benefit: "تحديد مصدر التسرب بدقة" },
  { device: "أجهزة تحليل الطاقة", use: "تحليل الأحمال وجودة الكهرباء", benefit: "تحسين كفاءة الطاقة" },
  { device: "أجهزة قياس الاهتزاز", use: "المحركات والمضخات والمعدات الدوارة", benefit: "الصيانة التنبؤية" },
  { device: "أجهزة كشف الأعطال الكهربائية", use: "كابلات ولوحات ومحركات", benefit: "تشخيص سريع" },
  { device: "أجهزة معايرة الحساسات", use: "حساسات الحرارة والضغط والتدفق", benefit: "دقة القراءات" },
];
const sharedToolsCols = [{ key: "equip", label: "المعدة" }, { key: "use", label: "الاستخدام" }];
const sharedToolsRows = [
  { equip: "مولدات كهربائية", use: "أعمال الصيانة دون كهرباء" },
  { equip: "ضواغط هواء", use: "تشغيل المعدات الهوائية" },
  { equip: "معدات الرفع", use: "نقل المعدات الثقيلة" },
  { equip: "أجهزة اللحام", use: "أعمال اللحام والقطع" },
  { equip: "معدات الاختبارات", use: "اختبار الأنظمة والمعدات" },
];
const regCols = [{ key: "field", label: "الحقل" }, { key: "desc", label: "الوصف" }];
const regRows = [
  { field: "الرقم التعريفي", desc: "كود فريد لكل أداة" },
  { field: "النوع", desc: "يدوية، كهربائية، تخصصية" },
  { field: "الحالة", desc: "صالح — تحت الصيانة — مفقود — يحتاج معايرة" },
  { field: "الموقع", desc: "مخزن — مع فني — في موقع" },
  { field: "المستخدم الحالي", desc: "آخر شخص استعار الأداة" },
];
const trustCols = [{ key: "type", label: "نوع العهد" }, { key: "desc", label: "الوصف" }];
const trustRows = [
  { type: "عهدة فني", desc: "أدوات شخصية مسجلة باسم الفني" },
  { type: "عهدة مشرف", desc: "أدوات تحت مسؤولية المشرف" },
  { type: "عهدة موقع", desc: "أدوات ثابتة في موقع معين" },
  { type: "عهدة ورشة", desc: "أدوات ومعدات الورشة المركزية" },
];
const cmmsLinkCols = [{ key: "point", label: "نقطة الربط" }, { key: "desc", label: "الوصف" }];
const cmmsLinkRows = [
  { point: "أوامر العمل", desc: "عرض المعدات المطلوبة لكل أمر" },
  { point: "تسجيل الأدوات المستخدمة", desc: "توثيق الأدوات المستخدمة في كل مهمة" },
  { point: "تخطيط الموارد", desc: "معرفة المعدات المطلوبة قبل بدء العمل" },
  { point: "متابعة الاستهلاك", desc: "تتبع عمر المعدات وحاجتها للصيانة" },
  { point: "تتبع الأعطال", desc: "ربط الأعطال بأجهزة القياس المستخدمة" },
];
const officeRoleCols = [{ key: "task", label: "المهمة" }, { key: "desc", label: "الوصف" }];
const officeRoleRows = [
  { task: "تحديد الاحتياجات", desc: "تقييم احتياجات الفرق من الأدوات" },
  { task: "اعتماد الشراء", desc: "الموافقة على شراء الأجهزة الجديدة" },
  { task: "متابعة الأجهزة", desc: "التأكد من صلاحية ومعايرة الأجهزة" },
  { task: "تنظيم الاستخدام", desc: "جدولة الحجز للمعدات المشتركة" },
  { task: "التدريب", desc: "تدريب الفنيين على الأجهزة التخصصية" },
];
const problemCols = [{ key: "challenge", label: "التحدي" }, { key: "solution", label: "الحل" }];
const problemRows = [
  { challenge: "ارتفاع تكلفة الأجهزة التخصصية", solution: "شراء حسب الأولوية والمشاركة بين المواقع" },
  { challenge: "ضعف الخبرة باستخدام الأجهزة", solution: "برنامج تدريبي تدريجي" },
  { challenge: "سوء استخدام الأدوات", solution: "نظام عهد واضح وتوعية" },
  { challenge: "فقدان الأدوات", solution: "QR/Barcode ونظام حجز إلكتروني" },
  { challenge: "ضعف التتبع", solution: "نظام CMMS وتتبع بالباركود" },
];

export default function Section04() {
  return (
    <section className="space-y-6 print:space-y-4">

      <SectionHeader icon={Wrench} title="إدارة العدد والأدوات والمعدات الفنية" subtitle="نظام موحد لإصدار وتتبع وصيانة الأدوات والمعدات" />

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          تعتمد كفاءة أعمال الصيانة بشكل أساسي على توفر العدد والأدوات المناسبة. ترتبط جودة وسرعة تنفيذ أعمال الصيانة مباشرة بتوفر الأدوات وجودتها وتنظيم استخدامها وتوفر المعدات التخصصية للتشخيص والفحص.
        </p>
      </div>

      <CallOutBox type="critical" title="التحديات في الأنظمة التقليدية">
        <DataTable columns={challengesCols} rows={challengesRows} />
      </CallOutBox>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Target} title="أهداف النظام" />
        <FlowChart
          nodes={[
            { id: "هدف", label: "نظام إدارة العدد والأدوات", icon: "🎯", color: "navy" },
            { id: "أ1", label: "تنظيم وإدارة جميع الأدوات", icon: "📋" },
            { id: "أ2", label: "رفع كفاءة فرق الصيانة", icon: "📈" },
            { id: "أ3", label: "تقليل زمن الأعطال", icon: "⏱️" },
            { id: "أ4", label: "تحسين جودة التشخيص الفني", icon: "🔍" },
            { id: "أ5", label: "تقليل الفقد والهدر", icon: "💰" },
            { id: "أ6", label: "تحسين استغلال المعدات المشتركة", icon: "🔄" },
            { id: "أ7", label: "رفع مستوى السلامة", icon: "🛡️" },
          ]}
          edges={[
            { from: "هدف", to: "أ1" }, { from: "هدف", to: "أ2" },
            { from: "هدف", to: "أ3" }, { from: "هدف", to: "أ4" },
            { from: "هدف", to: "أ5" }, { from: "هدف", to: "أ6" },
            { from: "هدف", to: "أ7" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Lightbulb} title="فلسفة النظام" />
        <p className="text-slate-700 leading-relaxed">
          يقوم النظام على إنشاء منظومة مركزية لإدارة العدد والأدوات والمعدات التخصصية وربطها مباشرة بعمليات التشغيل والصيانة، بحيث تتعامل مع الأدوات باعتبارها أصولا تشغيلية وموارد مشتركة وعناصر أساسية لنجاح العمل.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Wrench} title="تصنيف العدد والأدوات" />
        <h4 className="text-md font-bold text-slate-700 mb-3">العدد والأدوات اليومية</h4>
        <DataTable columns={dailyToolsCols} rows={dailyToolsRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">الأدوات التخصصية</h4>
        <DataTable columns={specToolsCols} rows={specToolsRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">المعدات المشتركة</h4>
        <DataTable columns={sharedToolsCols} rows={sharedToolsRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ClipboardCheck} title="إدارة العهد والأدوات" />
        <h4 className="text-md font-bold text-slate-700 mb-3">تسجيل الأدوات</h4>
        <DataTable columns={regCols} rows={regRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">تتبع العهد</h4>
        <DataTable columns={trustCols} rows={trustRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-3">متابعة الحالة</h4>
        <FlowChart
          dir="LR"
          nodes={[
            { id: "حالة", label: "حالة الأداة", icon: "📊", color: "navy" },
            { id: "صالح", label: "صالح — جاهز للاستخدام", icon: "✅", color: "green" },
            { id: "صيانة", label: "تحت الصيانة", icon: "🔧", color: "amber" },
            { id: "مفقود", label: "مفقود", icon: "❌", color: "red" },
            { id: "معايرة", label: "يحتاج معايرة", icon: "⚖️", color: "amber" },
            { id: "استخدام", label: "يمكن استخدامها فوراً" },
            { id: "إصلاح", label: "جدولة الإصلاح" },
            { id: "تحقيق", label: "فتح تحقيق" },
            { id: "جدولة", label: "جدولة المعايرة" },
          ]}
          edges={[
            { from: "حالة", to: "صالح" }, { from: "حالة", to: "صيانة" },
            { from: "حالة", to: "مفقود" }, { from: "حالة", to: "معايرة" },
            { from: "صالح", to: "استخدام" },
            { from: "صيانة", to: "إصلاح" },
            { from: "مفقود", to: "تحقيق" },
            { from: "معايرة", to: "جدولة" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Settings2} title="نظام الحجز للمعدات المشتركة" />
        <FlowChart
          nodes={[
            { id: "حاجة", label: "حاجة لمعدة مشتركة", icon: "🔧", color: "amber" },
            { id: "حجز", label: "حجز عبر النظام", icon: "📋" },
            { id: "تحقق", label: "التحقق من التوفر", icon: "🔍" },
            { id: "متوفرة", label: "متوفرة", icon: "✅", color: "green" },
            { id: "محجوزة", label: "محجوزة", icon: "⏳", color: "red" },
            { id: "استلام", label: "استلام وتسجيل العهد", icon: "📦" },
            { id: "استخدام", label: "استخدام", icon: "🔧" },
            { id: "إعادة", label: "إعادة وفحص الحالة", icon: "🔄" },
            { id: "تحديث", label: "تحديث الحالة في النظام", icon: "💻" },
          ]}
          edges={[
            { from: "حاجة", to: "حجز" },
            { from: "حجز", to: "تحقق" },
            { from: "تحقق", to: "متوفرة" },
            { from: "تحقق", to: "محجوزة" },
            { from: "متوفرة", to: "استلام" },
            { from: "استلام", to: "استخدام" },
            { from: "استخدام", to: "إعادة" },
            { from: "إعادة", to: "تحديث" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Monitor} title="الربط مع نظام CMMS" />
        <DataTable columns={cmmsLinkCols} rows={cmmsLinkRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ClipboardCheck} title="دور المكتب الفني" />
        <DataTable columns={officeRoleCols} rows={officeRoleRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={AlertTriangle} title="التحديات المتوقعة والحلول" />
        <DataTable columns={problemCols} rows={problemRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Award} title="خلاصة القسم الرابع" />
        <CallOutBox type="goal" title="خلاصة">
          يمثل نظام إدارة العدد والأدوات والمعدات الفنية عنصرا أساسيا في نجاح منظومة الصيانة المركزية، حيث يساهم في دعم فرق الصيانة ورفع كفاءة التشخيص الفني وتحسين جودة التشغيل وتقليل الأعطال والتكاليف، ودعم التحول إلى منظومة صيانة احترافية تعتمد على البيانات والتحليل الفني الدقيق.
        </CallOutBox>
        <CallOutBox type="critical" title="التوصية الإجرائية">
          حصر جميع العدد والأدوات الحالية لدى الفنيين والمواقع، وتسجيلها في نظام CMMS كعهدة، مع وضع ملصقات QR لربطها إلكترونياً.
        </CallOutBox>
      </div>

    </section>
  );
}
