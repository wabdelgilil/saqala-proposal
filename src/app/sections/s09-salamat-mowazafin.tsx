import { Users, Heart, Shield, BookOpen, Bell, Ambulance, ClipboardCheck, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section09() {
  const ppeCols = [{ key: "ppe", label: "المعدة" }, { key: "when", label: "متى تستخدم" }, { key: "note", label: "ملاحظات" }];
  const ppeRows = [
    { ppe: "خوذة السلامة (Hard Hat)", when: "جميع مواقع العمل والصيانة", note: "استبدال كل 3 سنوات أو بعد صدمة" },
    { ppe: "نظارات السلامة", when: "أعمال القطع والطحن والكيماويات", note: "توفير نظارات مضادة للضباب" },
    { ppe: "سماعات الأذن", when: "الأماكن ذات الضوضاء العالية (85 ديسيبل+)", note: "متوفرة بنوعين: داخلية وخارجية" },
    { ppe: "قفازات العمل", when: "جميع أعمال الصيانة — حسب نوع المهمة", note: "قفازات مقاومة للقطع للكهرباء" },
    { ppe: "أحذية السلامة", when: "جميع الأوقات في مواقع العمل", note: "مقاومة للانزلاق والصدمات" },
    { ppe: "حزام الأمان (Safety Harness)", when: "أعمال على ارتفاع أكثر من 1.8 متر", note: "ربط الحزام بنظام إنقاذ" },
    { ppe: "قناع التنفس (Respirator)", when: "أعمال الدهان — الغبار — الكيماويات", note: "فلتر حسب نوع الملوثات" },
    { ppe: "ملابس العمل", when: "طوال فترة العمل", note: "طويلة الأكمام — عاكسة للضوء" },
  ];
  const trainCols = [{ key: "course", label: "الدورة التدريبية" }, { key: "audience", label: "الفئة المستهدفة" }, { key: "freq", label: "الدورية" }];
  const trainRows = [
    { course: "أساسيات السلامة المهنية", audience: "جميع الموظفين", freq: "عند التعيين + سنوي" },
    { course: "مكافحة الحرائق والإخلاء", audience: "جميع الموظفين", freq: "سنوي" },
    { course: "الإسعافات الأولية", audience: "فريق السلامة — مشرفو المواقع", freq: "سنوي" },
    { course: "العمل الآمن على ارتفاعات", audience: "الفنيون — المقاولون", freq: "سنوي" },
    { course: "العمل الآمن في الأماكن المغلقة", audience: "الفنيون — المقاولون", freq: "سنوي" },
    { course: "الوعي بالمخاطر الكهربائية", audience: "الفنيون الكهربائيون", freq: "سنوي" },
    { course: "تحليل المخاطر (JSA/JHA)", audience: "المشرفون — المهندسون", freq: "سنوي" },
  ];

  return (
    <>
      {/* Page 56 */}
      <A4Page pageNum={78}>
        <SectionHeader icon={Users} title="سلامة الموظفين" subtitle="برنامج شامل للوقاية والتدريب والاستجابة" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              سلامة الموظفين هي أولوية قصوى في منظومة الصيانة المركزية. يهدف هذا القسم إلى وضع إطار متكامل لحماية الموظفين من مخاطر بيئة العمل من خلال الوقاية والتدريب والاستجابة الفعالة.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Shield} title="معدات الوقاية الشخصية (PPE)" />
            <DataTable columns={ppeCols} rows={ppeRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 56.5 (Employee Safety Principles Flowchart) */}
      <A4Page pageNum={79}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مبادئ سلامة الموظفين</h4>
            <FlowChart
              title="مبادئ سلامة الموظفين"
              dir="LR"
              nodes={[
                { id: "e1", label: "الوقاية", sub: "منع الحوادث قبل وقوعها", icon: "🛡️", color: "green" },
                { id: "e2", label: "التدريب", sub: "تأهيل الموظفين للسلامة", icon: "📚", color: "blue" },
                { id: "e3", label: "المعدات", sub: "توفير معدات الوقاية", icon: "🦺", color: "navy" },
                { id: "e4", label: "الاستجابة", sub: "خطط طوارئ فعالة", icon: "🚨", color: "amber" },
              ]}
              edges={[
                { from: "e1", to: "e2" },
                { from: "e2", to: "e3" },
                { from: "e3", to: "e4" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 57 */}
      <A4Page pageNum={80}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BookOpen} title="برامج التدريب والتوعية" />
            <DataTable columns={trainCols} rows={trainRows} />
          </div>

          <CallOutBox type="tip" title="ثقافة السلامة">
            <ul className="list-disc list-inside text-slate-700 space-y-1 text-xs">
              <li><strong>الإبلاغ عن المخاطر</strong> — تشجيع الموظفين على الإبلاغ عن أي مخاطر محتملة</li>
              <li><strong>اجتماع السلامة اليومي</strong> — 5 دقائق قبل بدء العمل (Toolbox Talk)</li>
              <li><strong>جوائز السلامة</strong> — تكريم المواقع والفرق التي تحقق صفر حوادث</li>
              <li><strong>الإبلاغ عن الحوادث الوشيكة (Near Miss)</strong> — تشجيع الإبلاغ للتعلم والتحسين</li>
            </ul>
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Ambulance} title="خطة الاستجابة للطوارئ" />
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="border border-slate-200 rounded-lg p-3">
                <h4 className="font-bold text-slate-700 mb-2">حالات الطوارئ المحتملة</h4>
                <ul className="text-slate-600 space-y-1 list-disc list-inside">
                  <li>حرائق — تسرب غاز — انهيارات</li>
                  <li>إصابات عمل — صعقات كهربائية</li>
                  <li>حوادث مرورية للموظفين</li>
                </ul>
              </div>
              <div className="border border-slate-200 rounded-lg p-3">
                <h4 className="font-bold text-slate-700 mb-2">متطلبات الجاهزية</h4>
                <ul className="text-slate-600 space-y-1 list-disc list-inside">
                  <li>طفايات حريق — مخارج طوارئ واضحة</li>
                  <li>حقائب إسعافات أولية في كل موقع</li>
                  <li>فريق إسعافات أولية مدرب في كل وردية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </A4Page>
    </>
  );
}
