import { Factory, Hammer, Package, Users, Wrench, Shield, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section07() {
  const wsLevelCols = [{ key: "level", label: "المستوى" }, { key: "desc", label: "الوصف" }, { key: "work", label: "الأعمال" }];
  const wsLevelRows = [
    { level: "المستوى الأول — الورشة الخفيفة", desc: "مهام الصيانة البسيطة — تغيير قطع — إصلاحات طفيفة", work: "مكينة لحام، منشار، دريل، أدوات كهربائية" },
    { level: "المستوى الثاني — الورشة المتوسطة", desc: "إصلاح الأعطال المتوسطة — صيانة مكثفة", work: "جميع أعمال المستوى الأول + مخرطة + تمديدات" },
    { level: "المستوى الثالث — الورشة المتخصصة", desc: "أعمال متخصصة — معايرة — لف محركات", work: "أعمال متخصصة حسب الاحتياج" },
  ];
  const wsEquipCols = [{ key: "equip", label: "المعدة" }, { key: "spec", label: "المواصفات" }, { key: "qty", label: "العدد" }];
  const wsEquipRows = [
    { equip: "مكينة لحام (Argon / CO2)", spec: "220V - 200A", qty: "1" },
    { equip: "مخرطة صغيرة", spec: "قطر 300 مم", qty: "1" },
    { equip: "منشار شريط (قطع معادن)", spec: "يدوي / نصف آلي", qty: "1" },
    { equip: "دريل عمود", spec: "محرك 1 حصان", qty: "1" },
    { equip: "ضاغط هواء", spec: "خزان 100 لتر", qty: "1" },
    { equip: "رافعة ونش علوي (جسرية)", spec: "1-2 طن", qty: "1" },
    { equip: "مجموعة أدوات كهربائية متنوعة", spec: "صنفرة - صاروخ قطع - مفك", qty: "حسب الحاجة" },
    { equip: "جهاز لحام كهربائي (Spot Welder)", spec: "220V", qty: "1" },
  ];
  const wsStaffCols = [{ key: "role", label: "الدور" }, { key: "qty", label: "العدد" }, { key: "skill", label: "المهارات" }];
  const wsStaffRows = [
    { role: "مشرف ورشة", qty: "1", skill: "خبرة 10+ سنوات في الصيانة الميكانيكية والكهربائية" },
    { role: "فني ميكانيكا", qty: "2", skill: "لحام — خراطة — صيانة عامة" },
    { role: "فني كهرباء", qty: "1-2", skill: "صيانة محركات — لوحات تحكم" },
    { role: "فني تكييف وتبريد", qty: "1", skill: "صيانة وحدات التكييف" },
  ];
  const wsSafetyCols = [{ key: "rule", label: "قاعدة السلامة" }, { key: "action", label: "الإجراء" }];
  const wsSafetyRows = [
    { rule: "معدات الوقاية الشخصية", action: "ارتداء كامل معدات الوقاية داخل الورشة" },
    { rule: "تهوية", action: "ضمان تهوية مناسبة خاصة أثناء اللحام والدهان" },
    { rule: "إطفاء حرائق", action: "طفايات حريق مناسبة في متناول اليد + تدريب دوري" },
    { rule: "الفصل الكهربائي", action: "الفصل التام للتيار قبل بدء العمل على الأجهزة" },
    { rule: "نظافة الورشة", action: "تنظيم دائم ونظافة مستمرة لمنع الحوادث" },
  ];

  return (
    <>
      {/* Page 52 */}
      <A4Page pageNum={61}>
        <SectionHeader icon={Factory} title="إنشاء الورشة المركزية للصيانة" subtitle="بنية تحتية متكاملة لأعمال الصيانة المركزية" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              إنشاء ورشة مركزية للصيانة يهدف إلى توفير بنية تحتية متكاملة تدعم أعمال الصيانة التي يصعب تنفيذها في المواقع، وتعمل كمركز لإصلاح وتأهيل المعدات والأجهزة.
            </p>
          </div>

          <FlowChart
            title="مستويات الورشة المركزية"
            dir="LR"
            nodes={[
              { id: "w1", label: "ورشة خفيفة", sub: "إصلاحات بسيطة", icon: "🛠️", color: "blue" },
              { id: "w2", label: "ورشة متوسطة", sub: "صيانة مكثفة", icon: "⚙️", color: "navy" },
              { id: "w3", label: "ورشة متخصصة", sub: "أعمال تخصصية", icon: "🔧", color: "green" },
            ]}
            edges={[
              { from: "w1", to: "w2" },
              { from: "w2", to: "w3" },
            ]}
          />

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Package} title="مستويات الورشة المقترحة" />
            <DataTable columns={wsLevelCols} rows={wsLevelRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 52.5 (Workshop Equipment Table) */}
      <A4Page pageNum={62}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Wrench} title="التجهيزات والمعدات الأساسية" />
            <DataTable columns={wsEquipCols} rows={wsEquipRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 53 */}
      <A4Page pageNum={63}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Users} title="الكادر البشري للورشة" />
            <DataTable columns={wsStaffCols} rows={wsStaffRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Shield} title="قواعد السلامة في الورشة" />
            <DataTable columns={wsSafetyCols} rows={wsSafetyRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 53.5 (Workshop Workflow Flowchart) */}
      <A4Page pageNum={64}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BarChart3} title="آلية العمل" />
            <FlowChart
              title="سير العمل في الورشة"
              dir="LR"
              nodes={[
                { id: "step1", label: "استلام", sub: "تسجيل الأصل في CMMS", icon: "📦", color: "navy" },
                { id: "step2", label: "تشخيص", sub: "فحص وتحديد العطل", icon: "🔍", color: "blue" },
                { id: "step3", label: "إصلاح", sub: "تنفيذ الإصلاح", icon: "🔧", color: "green" },
                { id: "step4", label: "تسليم", sub: "اختبار + توثيق + إرجاع", icon: "✅", color: "amber" },
              ]}
              edges={[
                { from: "step1", to: "step2" },
                { from: "step2", to: "step3" },
                { from: "step3", to: "step4" },
              ]}
            />
          </div>
        </div>
      </A4Page>
    </>
  );
}
