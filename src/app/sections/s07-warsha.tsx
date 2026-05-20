import { Factory, Hammer, Package, Users, Wrench, Shield, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import ProcessStep from "@/components/ProcessStep";
import DataTable from "@/components/DataTable";

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
    <section className="space-y-6 print:space-y-4">
      <SectionHeader icon={Factory} title="إنشاء الورشة المركزية للصيانة" subtitle="بنية تحتية متكاملة لأعمال الصيانة المركزية" />

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          إنشاء ورشة مركزية للصيانة يهدف إلى توفير بنية تحتية متكاملة تدعم أعمال الصيانة التي يصعب تنفيذها في المواقع، وتعمل كمركز لإصلاح وتأهيل المعدات والأجهزة.
        </p>
      </div>

      <CallOutBox type="goal" title="مستويات الورشة المركزية">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProcessStep number={1} title="ورشة خفيفة" subtitle="إصلاحات بسيطة" />
          <ProcessStep number={2} title="ورشة متوسطة" subtitle="صيانة مكثفة" />
          <ProcessStep number={3} title="ورشة متخصصة" subtitle="أعمال تخصصية" />
        </div>
      </CallOutBox>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Package} title="مستويات الورشة المقترحة" />
        <DataTable columns={wsLevelCols} rows={wsLevelRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Wrench} title="التجهيزات والمعدات الأساسية" />
        <DataTable columns={wsEquipCols} rows={wsEquipRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Users} title="الكادر البشري للورشة" />
        <DataTable columns={wsStaffCols} rows={wsStaffRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={BarChart3} title="آلية العمل" />
        <CallOutBox type="tip" title="سير العمل في الورشة">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ProcessStep number={1} title="استلام" subtitle="تسجيل الأصل في CMMS" />
            <ProcessStep number={2} title="تشخيص" subtitle="فحص وتحديد العطل" />
            <ProcessStep number={3} title="إصلاح" subtitle="تنفيذ الإصلاح" />
            <ProcessStep number={4} title="تسليم" subtitle="اختبار + توثيق + إرجاع" />
          </div>
        </CallOutBox>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Shield} title="قواعد السلامة في الورشة" />
        <DataTable columns={wsSafetyCols} rows={wsSafetyRows} />
      </div>
    </section>
  );
}
