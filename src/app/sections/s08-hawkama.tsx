import { Shield, FileText, AlertTriangle, CheckCircle, ClipboardCheck, Building2, Users, Eye } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section08() {
  const hseRolesCols = [{ key: "role", label: "الدور" }, { key: "resp", label: "المسؤولية" }];
  const hseRolesRows = [
    { role: "مدير الصيانة", resp: "المسؤول الأول عن السلامة في قطاع الصيانة" },
    { role: "مهندس المكتب الفني", resp: "إعداد وتحديث دليل السلامة ومتابعة الامتثال" },
    { role: "مشرف الموقع", resp: "الإشراف المباشر على تطبيق إجراءات السلامة" },
    { role: "مسؤول السلامة", resp: "تدقيق ومراجعة وتدريب وتقارير السلامة" },
    { role: "الفني — المقاول", resp: "التطبيق المباشر لإجراءات السلامة" },
  ];
  const hseDocCols = [{ key: "doc", label: "الوثيقة" }, { key: "freq", label: "دورية المراجعة" }, { key: "purpose", label: "الغرض" }];
  const hseDocRows = [
    { doc: "دليل السلامة المهنية", freq: "سنوي", purpose: "المرجعية الرئيسية لإجراءات السلامة" },
    { doc: "إجراءات العمل الآمن (SWP/SOP)", freq: "سنوي أو بعد حادث", purpose: "خطوات العمل الآمنة لكل مهمة" },
    { doc: "تقييم المخاطر (Risk Assessment)", freq: "أثناء بدء تشغيل جديد", purpose: "تحديد المخاطر ووضع الضوابط" },
    { doc: "خطة الطوارئ (ERP)", freq: "سنوي", purpose: "الاستجابة لحالات الطوارئ" },
    { doc: "سجل الحوادث (Incident Register)", freq: "فوري", purpose: "توثيق الحوادث والإجراءات التصحيحية" },
    { doc: "سجل التدريب (Training Matrix)", freq: "ربع سنوي", purpose: "متابعة تدريب الفريق" },
  ];
  const hsePermitCols = [{ key: "type", label: "نوع التصريح" }, { key: "applies", label: "ينطبق على" }, { key: "duration", label: "المدة" }];
  const hsePermitRows = [
    { type: "تصريح عمل ساخن (Hot Work)", applies: "لحام — قطع — طحن — أي عمل يولد شرارة", duration: "يوم عمل واحد" },
    { type: "تصريح عمل على ارتفاعات", applies: "أعمال على ارتفاع 1.8 متر فأكثر", duration: "يوم عمل واحد" },
    { type: "تصريح عمل كهربائي", applies: "أعمال على لوحات كهربائية نشطة", duration: "يوم عمل واحد" },
    { type: "تصريح عمل حفر", applies: "حفر في الأرض — أعمال تحت الأرض", duration: "حسب مدة المشروع" },
    { type: "تصريح عمل في أماكن مغلقة", applies: "أعمال داخل خزانات — غرف مغلقة", duration: "يوم عمل واحد" },
  ];
  const hseInspectCols = [{ key: "type", label: "نوع التفتيش" }, { key: "freq", label: "الدورية" }, { key: "by", label: "الجهة المنفذة" }];
  const hseInspectRows = [
    { type: "تفتيش يومي", freq: "يومي", by: "مشرف الموقع / الفني الأول" },
    { type: "تفتيش أسبوعي", freq: "أسبوعي", by: "مهندس المكتب الفني" },
    { type: "تفتيش شهري", freq: "شهري", by: "مسؤول السلامة + مهندس المكتب الفني" },
    { type: "تدقيق خارجي", freq: "سنوي", by: "جهة خارجية معتمدة" },
  ];
  const hseComplianceCols = [{ key: "req", label: "المتطلب" }, { key: "action", label: "إجراء" }, { key: "freq", label: "الدورية" }];
  const hseComplianceRows = [
    { req: "تراخيص الدفاع المدني", action: "التأكد من سريان تراخيص السلامة لجميع المواقع", freq: "سنوي" },
    { req: "طفايات الحريق", action: "فحص شهري + صيانة سنوية", freq: "شهري" },
    { req: "مخارج الطوارئ", action: "فحص السلامة ووضوح اللوحات الإرشادية", freq: "شهري" },
    { req: "نظام الإنذار", action: "اختبار دوري — صيانة فورية للأعطال", freq: "أسبوعي" },
    { req: "الإسعافات الأولية", action: "فحص محتويات حقائب الإسعاف — توريد", freq: "شهري" },
  ];

  return (
    <>
      {/* Page 54 */}
      <A4Page pageNum={70}>
        <SectionHeader icon={Shield} title="حوكمة السلامة والامتثال للدفاع المدني" subtitle="نظام متكامل لإدارة السلامة المهنية والامتثال التنظيمي" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              السلامة المهنية هي مسؤولية متكاملة تبدأ من التخطيط وتمر بالتنفيذ والمراجعة. تهدف حوكمة السلامة إلى وضع إطار تنظيمي واضح يضمن تطبيق أعلى معايير السلامة في جميع مواقع المجموعة.
            </p>
          </div>

          <CallOutBox type="critical" title="الأهداف الرئيسية">
            <ul className="list-disc list-inside text-slate-700 space-y-1 text-xs">
              <li><strong>الوصول إلى صفر حوادث</strong> — من خلال ثقافة سلامة استباقية</li>
              <li><strong>الامتثال الكامل</strong> — لمتطلبات الدفاع المدني والجهات التنظيمية</li>
              <li><strong>توحيد إجراءات السلامة</strong> — دليل إجراءات موحد لجميع المواقع</li>
              <li><strong>التأهب للطوارئ</strong> — خطط استجابة محدثة ومختبرة</li>
            </ul>
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Users} title="الأدوار والمسؤوليات في السلامة" />
            <DataTable columns={hseRolesCols} rows={hseRolesRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 54.5 (Safety Documents Table) */}
      <A4Page pageNum={71}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={FileText} title="الوثائق الأساسية لنظام السلامة" />
            <DataTable columns={hseDocCols} rows={hseDocRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 55 */}
      <A4Page pageNum={72}>
        <div className="space-y-4 mt-4">
          <CallOutBox type="goal" title="نظام تصاريح العمل الآمن (Permit to Work)">
            <DataTable columns={hsePermitCols} rows={hsePermitRows} />
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Eye} title="نظام التفتيش والتدقيق" />
            <DataTable columns={hseInspectCols} rows={hseInspectRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Building2} title="الامتثال لمتطلبات الدفاع المدني" />
            <DataTable columns={hseComplianceCols} rows={hseComplianceRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 55.5 (Accident Investigation Flowchart) */}
      <A4Page pageNum={73}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="إجراءات التحقيق في الحوادث" />
            <FlowChart
              title="خطوات التحقيق في الحوادث"
              dir="LR"
              nodes={[
                { id: "h1", label: "الإبلاغ الفوري", sub: "إشعار مدير الصيانة", icon: "📢", color: "red" },
                { id: "h2", label: "تأمين الموقع", sub: "منع العبث بالأدلة", icon: "🚧", color: "amber" },
                { id: "h3", label: "جمع المعلومات", sub: "شهود — صور — أدلة", icon: "📷", color: "blue" },
                { id: "h4", label: "تحليل الأسباب", sub: "إجراءات تصحيحية", icon: "🧠", color: "green" },
              ]}
              edges={[
                { from: "h1", to: "h2" },
                { from: "h2", to: "h3" },
                { from: "h3", to: "h4" },
              ]}
            />
          </div>
        </div>
      </A4Page>
    </>
  );
}
