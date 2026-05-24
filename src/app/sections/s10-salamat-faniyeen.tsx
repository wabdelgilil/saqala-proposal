import { HardHat, AlertTriangle, ClipboardCheck, Users, Shield, BookOpen, FileText, Eye } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";

export default function Section10() {
  const hazCols = [{ key: "hazard", label: "الخطر" }, { key: "risk", label: "المخاطر المحتملة" }, { key: "control", label: "إجراءات التحكم" }];
  const hazRows = [
    { hazard: "الأعمال الكهربائية", risk: "صعقة كهربائية — حروق — حريق", control: "فصل التيار — استخدام معدات معزولة — تصريح عمل" },
    { hazard: "العمل على ارتفاعات", risk: "سقوط — إصابات بالغة", control: "حزام أمان — سقالة آمنة — تدريب" },
    { hazard: "الأعمال الميكانيكية", risk: "جروح — بتر — حروق", control: "واقي المعدات — قفازات — إغلاق مصدر الطاقة" },
    { hazard: "اللحام والقطع", risk: "حروق — شرر — استنشاق أبخرة", control: "ملابس واقية — تهوية — تصريح عمل ساخن" },
    { hazard: "الأعمال في الأماكن المغلقة", risk: "اختناق — نقص أكسجين — انفجار", control: "فحص الغاز — تهوية — مراقب خارجي" },
    { hazard: "التعامل مع المواد الكيماوية", risk: "حروق — تسمم — حساسية", control: "ورقة بيانات السلامة — قفازات كيماوية — تهوية" },
    { hazard: "القيادة والمعدات المتحركة", risk: "حوادث — دهس", control: "رخصة قيادة سارية — تدريب — تأمين" },
  ];
  const auditCols = [{ key: "area", label: "مجال التقييم" }, { key: "items", label: "بنود التقييم" }, { key: "score", label: "الدرجة" }];
  const auditRows = [
    { area: "السلوك الشخصي", items: "ارتداء PPE — الالتزام بالإجراءات — النظافة", score: "40" },
    { area: "الأداء الفني", items: "جودة العمل — اتباع التعليمات — الدقة", score: "30" },
    { area: "السلامة", items: "الإبلاغ عن المخاطر — المشاركة في التدريب", score: "20" },
    { area: "التعاون", items: "التواصل مع الفريق — الاستجابة للتوجيهات", score: "10" },
  ];
  const penaltyCols = [{ key: "violation", label: "المخالفة" }, { key: "first", label: "المرة الأولى" }, { key: "second", label: "المرة الثانية" }, { key: "third", label: "المرة الثالثة" }];
  const penaltyRows = [
    { violation: "عدم ارتداء معدات الوقاية", first: "إنذار شفوي", second: "إنذار كتابي", third: "إيقاف 3 أيام" },
    { violation: "تجاوز إجراءات السلامة", first: "إنذار كتابي", second: "إيقاف 3 أيام", third: "إحالة للتحقيق" },
    { violation: "العمل دون تصريح", first: "إيقاف يوم", second: "إيقاف أسبوع", third: "إنهاء التعاقد" },
    { violation: "التلاعب بمعدات السلامة", first: "إيقاف أسبوع", second: "إنهاء التعاقد", third: "—" },
    { violation: "التسبب في حادث", first: "إيقاف فوري + تحقيق", second: "حسب نتيجة التحقيق", third: "—" },
  ];

  return (
    <section className="space-y-6 print:space-y-4">
      <SectionHeader icon={HardHat} title="سلامة الفنيين والمقاولين" subtitle="إجراءات ومتطلبات السلامة لفرق الصيانة والمقاولين" />

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          الفنيون والمقاولون هم الأكثر عرضة لمخاطر بيئة العمل. يهدف هذا القسم إلى وضع ضوابط وإجراءات محددة تحميهم وتضمن سلامتهم أثناء أداء مهامهم.
        </p>
      </div>

      <CallOutBox type="critical" title="المخاطر الرئيسية وإجراءات التحكم">
        <DataTable columns={hazCols} rows={hazRows} />
      </CallOutBox>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ClipboardCheck} title="متطلبات المقاولين" />
        <CallOutBox type="safety" title="شروط قبول المقاولين">
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>شهادة سلامة مهنية سارية للفريق</li>
            <li>تأمين ضد الحوادث المهنية</li>
            <li>التزام كامل بإجراءات السلامة للمجموعة</li>
            <li>تسجيل جميع العاملين في نظام السلامة</li>
            <li>حضور دورة توعية سلامة قبل بدء العمل</li>
          </ul>
        </CallOutBox>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={FileText} title="نظام تقييم الفنيين" />
        <DataTable columns={auditCols} rows={auditRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={AlertTriangle} title="سلم المخالفات والعقوبات" />
        <DataTable columns={penaltyCols} rows={penaltyRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Eye} title="التزامات الفنيين والمقاولين" />
        <FlowChart
          title="التزامات السلامة الأساسية"
          dir="LR"
          nodes={[
            { id: "o1", label: "الالتزام بإجراءات السلامة", sub: "بدون استثناء", icon: "🛡️", color: "red" },
            { id: "o2", label: "استخدام معدات الوقاية", sub: "بالشكل الصحيح", icon: "🦺", color: "blue" },
            { id: "o3", label: "الإبلاغ عن المخاطر", sub: "فور اكتشافها", icon: "📢", color: "amber" },
          ]}
          edges={[
            { from: "o1", to: "o2" },
            { from: "o2", to: "o3" },
          ]}
        />
      </div>
    </section>
  );
}
