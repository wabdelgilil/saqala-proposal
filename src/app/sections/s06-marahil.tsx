import { ClipboardCheck, Calendar, BarChart3, Activity, Shield, Leaf, Users, FileText } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";
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
    <>
      {/* Page 49 */}
      <A4Page pageNum={56}>
        <SectionHeader icon={ClipboardCheck} title="مراحل تنفيذ المشروع وخطة التحول التدريجي" subtitle="من التأسيس إلى التشغيل الكامل" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              يعتمد المشروع على خطة تحول تدريجي لتجنب تعطيل الأعمال الجارية وضمان انتقال سلس للنظام الحالي إلى المنظومة المركزية الجديدة.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Calendar} title="المراحل الزمنية للمشروع" />
            <DataTable columns={timelineCols} rows={timelineRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 49.5 (Flowchart) */}
      <A4Page pageNum={57}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مراحل تنفيذ المشروع</h4>
            <FlowChart
              title="مراحل المشروع"
              dir="LR"
              nodes={[
                { id: "s1", label: "التأسيس", sub: "2-3 أشهر", icon: "🏗️", color: "navy" },
                { id: "s2", label: "الإطلاق", sub: "1-2 شهر", icon: "🚀", color: "blue" },
                { id: "s3", label: "التشغيل", sub: "3-6 أشهر", icon: "⚙️", color: "green" },
                { id: "s4", label: "التطوير", sub: "مستمر", icon: "📈", color: "amber" },
              ]}
              edges={[
                { from: "s1", to: "s2" },
                { from: "s2", to: "s3" },
                { from: "s3", to: "s4" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 50 */}
      <A4Page pageNum={58}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Activity} title="خطة الانتقال (Migration Plan)" />
            <DataTable columns={migPlanCols} rows={migPlanRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BarChart3} title="مؤشرات الأداء الرئيسية (KPIs)" />
            <DataTable columns={kpiDefinitionCols} rows={kpiDefinitionRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Shield} title="مصفوفة التصعيد (Escalation Matrix)" />
            <DataTable columns={escalationCols} rows={escalationRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 51 */}
      <A4Page pageNum={59}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={ClipboardCheck} title="معايير القبول (Acceptance Criteria)" />
            <DataTable columns={acceptCols} rows={acceptRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Leaf} title="الاستدامة البيئية" />
            <DataTable columns={sustainCols} rows={sustainRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 51.5 (Meetings and Reviews) */}
      <A4Page pageNum={60}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Users} title="نظام الاجتماعات والتقارير" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-2">الاجتماعات الدورية</h4>
                <DataTable columns={meetingCols} rows={meetingRows} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-2">التقارير الدورية</h4>
                <DataTable columns={reportCols} rows={reportRows} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={FileText} title="آليات المراجعة والتقييم" />
            <DataTable columns={reviewCols} rows={reviewRows} />
          </div>
        </div>
      </A4Page>
    </>
  );
}
