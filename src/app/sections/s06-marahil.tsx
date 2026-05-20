import { ClipboardCheck, Calendar, BarChart3, Activity, Shield, Leaf, Users, FileText } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import ProcessStep from "@/components/ProcessStep";
import DataTable from "@/components/DataTable";
import {
  timelineCols, timelineRows,
  migPlanCols, migPlanRows,
  kpiDefinitionCols, kpiDefinitionRows,
  escalationCols, escalationRows,
  acceptCols, acceptRows,
  sustainCols, sustainRows,
  meetingCols, meetingRows,
  reportCols, reportRows,
  reviewCols, reviewRows,
} from "@/lib/data-s2";

export default function Section06() {
  return (
    <section className="space-y-6 print:space-y-4">
      <SectionHeader icon={ClipboardCheck} title="مراحل تنفيذ المشروع وخطة التحول التدريجي" subtitle="من التأسيس إلى التشغيل الكامل" />

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          يعتمد المشروع على خطة تحول تدريجي لتجنب تعطيل الأعمال الجارية وضمان انتقال سلس للنظام الحالي إلى المنظومة المركزية الجديدة.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Calendar} title="المراحل الزمنية للمشروع" />
        <DataTable columns={timelineCols} rows={timelineRows} />
      </div>

      <CallOutBox type="goal" title="مراحل المشروع">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProcessStep number={1} title="التأسيس" subtitle="2-3 أشهر" />
          <ProcessStep number={2} title="الإطلاق" subtitle="1-2 شهر" />
          <ProcessStep number={3} title="التشغيل" subtitle="3-6 أشهر" />
          <ProcessStep number={4} title="التطوير" subtitle="مستمر" />
        </div>
      </CallOutBox>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Activity} title="خطة الانتقال (Migration Plan)" />
        <DataTable columns={migPlanCols} rows={migPlanRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={BarChart3} title="مؤشرات الأداء الرئيسية (KPIs)" />
        <DataTable columns={kpiDefinitionCols} rows={kpiDefinitionRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Shield} title="مصفوفة التصعيد (Escalation Matrix)" />
        <DataTable columns={escalationCols} rows={escalationRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ClipboardCheck} title="معايير القبول (Acceptance Criteria)" />
        <DataTable columns={acceptCols} rows={acceptRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Leaf} title="الاستدامة البيئية" />
        <DataTable columns={sustainCols} rows={sustainRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Users} title="نظام الاجتماعات والتقارير" />
        <h4 className="text-md font-bold text-slate-700 mb-3">الاجتماعات الدورية</h4>
        <DataTable columns={meetingCols} rows={meetingRows} />
        <h4 className="text-md font-bold text-slate-700 mt-6 mb-3">التقارير الدورية</h4>
        <DataTable columns={reportCols} rows={reportRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={FileText} title="آليات المراجعة والتقييم" />
        <DataTable columns={reviewCols} rows={reviewRows} />
      </div>
    </section>
  );
}
