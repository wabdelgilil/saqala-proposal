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
      <A4Page pageNum={126}>
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
      <A4Page pageNum={127}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={FileText} title="الوثائق الأساسية لنظام السلامة" />
            <DataTable columns={hseDocCols} rows={hseDocRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 55 */}
      <A4Page pageNum={128}>
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
      <A4Page pageNum={129}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="إجراءات التحقيق في الحوادث" />
            <FlowChart
              title="خطوات التحقيق في الحوادث"
              dir="LR"
              nodes={[
                { id: "h1", label: "الابلاغ الفوري", sub: "إشعار مدير الصيانة", icon: "📢", color: "red" },
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

      {/* Page 78 - Form 17: Building Safety & CD Compliance Checklist */}
      <A4Page pageNum={130}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="النموذج ١٧: قائمة تدقيق السلامة والدفاع المدني" subtitle="قائمة التدقيق الدوري التفصيلية لامتثال المنشآت والمباني لمتطلبات الدفاع المدني" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              تُعد هذه القائمة أداة رقابية إلزامية يقوم مسؤول السلامة بتعبئتها شهرياً لكل مبنى لضمان الجاهزية التامة لأنظمة مكافحة الحرائق وحماية الأرواح:
            </p>
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200 w-[40%]">بند التفتيش والتحقق</th>
                    <th className="p-2 border-l border-slate-200 text-center w-[30%]">المعيار المطلوب (دليل الدفاع المدني)</th>
                    <th className="p-2 border-l border-slate-200 text-center w-[15%]">حالة الامتثال</th>
                    <th className="p-2 text-center w-[15%]">الرمز بالـ CMMS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">🚪 مسالك ومخارج الطوارئ</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600 text-center">خالية تماماً من العوائق، الأبواب تفتح للخارج، لوحات إرشادية مضيئة</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-700 font-bold">🟢 ممتاز</td>
                    <td className="p-2 text-center text-slate-500 font-mono">SAF-EXIT-01</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 border-l border-slate-200 font-medium">🧯 طفايات الحريق المحمولة</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600 text-center">الضغط في النطاق الأخضر، صالحة ومرقمة، معلقة بالارتفاع النظامي</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-700 font-bold">🟢 ممتاز</td>
                    <td className="p-2 text-center text-slate-500 font-mono">SAF-EXT-02</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">🚨 لوحة الإنذار المبكر الرئيسية</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600 text-center">في وضع الاستعداد (Normal Mode)، خالية من أعطال الكابلات أو البطارية</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-700 font-bold">🟢 ممتاز</td>
                    <td className="p-2 text-center text-slate-500 font-mono">SAF-PANL-03</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 border-l border-slate-200 font-medium">🚒 خزان ومضخات الحريق</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600 text-center">مستوى المياه مكتمل، مضخة الجوكي والديزل في وضع التشغيل التلقائي</td>
                    <td className="p-2 border-l border-slate-200 text-center text-amber-600 font-bold">🟡 يحتاج متابعة</td>
                    <td className="p-2 text-center text-slate-500 font-mono">SAF-PUMP-04</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CallOutBox type="goal" title="آلية التصحيح التلقائي بالمنصة">
              عند وضع علامة <strong>"🟡 يحتاج متابعة"</strong> أو <strong>"🔴 غير مطابق"</strong> على أي بند، يقوم نظام CMMS تلقائياً بإنشاء أمر عمل فوري عالي الأهمية (High Priority Work Order) وتوجيهه للمكتب الفني لصيانته فوراً.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 79 - Safety Reporting Logs & Violation Penalty Details */}
      <A4Page pageNum={131}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="سجل بلاغات السلامة وجدول المخالفات" subtitle="آلية الإبلاغ الرقمي عن الحيود وسجل العقوبات لضمان الامتثال الصارم" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              يعتمد الامتثال لسلامة المنشآت على رصد الحيود (Hazard Reporting) وتطبيق لائحة جزاءات حازمة لمنع التهاون في بيئة العمل:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-2">إجراءات الإبلاغ عن الحيود في نظام CMMS:</h5>
              <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                <li>
                  <strong>📸 التوثيق الفوري:</strong> يقوم أي موظف أو فني برصد الخطر والتقاط صورة له عبر تطبيق الجوال.
                </li>
                <li>
                  <strong>🏷️ تصنيف الخطر:</strong> (حريق، تسرب مياه، لوحة كهربائية مكشوفة، إعاقة مخرج طوارئ).
                </li>
                <li>
                  <strong>⚡ التنبيه الآلي:</strong> يرسل النظام إشعاراً فورياً لمشرف الموقع ومسؤول السلامة مع تحديد الموقع الجغرافي الدقيق.
                </li>
              </ul>
            </div>
            
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-1.5 border-b border-slate-200 font-bold text-center">
                مصفوفة عقوبات مخالفات السلامة والبيئة (HSE Penalty Grid)
              </div>
              <table className="w-full text-right text-[9px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 font-bold">
                    <th className="p-2 border-l border-slate-150">المخالفة التشغيلية</th>
                    <th className="p-2 border-l border-slate-150 text-center">المرة الأولى</th>
                    <th className="p-2 border-l border-slate-150 text-center">المرة الثانية</th>
                    <th className="p-2 text-center">المرة الثالثة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-150">
                    <td className="p-2 border-l border-slate-150">🔓 ترك غرف الكهرباء مفتوحة أو غير مغلقة بقفل</td>
                    <td className="p-2 border-l border-slate-150 text-center text-slate-700">إنذار كتابي للمشرف</td>
                    <td className="p-2 border-l border-slate-150 text-center text-amber-700">خصم يوم من مرتب المشرف</td>
                    <td className="p-2 text-center text-red-700 font-bold">تحقيق وإيقاف ٣ أيام</td>
                  </tr>
                  <tr className="border-b border-slate-150 bg-slate-50">
                    <td className="p-2 border-l border-slate-150">📦 وضع بضائع أو إعاقة مسارات مخارج الطوارئ</td>
                    <td className="p-2 border-l border-slate-150 text-center text-slate-700">إنذار كتابي وغرامة للموقع</td>
                    <td className="p-2 border-l border-slate-150 text-center text-amber-700">غرامة تشغيلية مضاعفة للموقع</td>
                    <td className="p-2 text-center text-red-700 font-bold">إيقاف تشغيل المنطقة المخالفة</td>
                  </tr>
                  <tr className="border-b border-slate-150">
                    <td className="p-2 border-l border-slate-150">🚭 التدخين في المناطق غير المخصصة أو الحساسة</td>
                    <td className="p-2 border-l border-slate-150 text-center text-slate-700">غرامة فورية ٢٠٠ ريال فني/موظف</td>
                    <td className="p-2 border-l border-slate-150 text-center text-amber-700">غرامة ٥٠٠ ريال + إيقاف يومين</td>
                    <td className="p-2 text-center text-red-700 font-bold">الفصل الفوري والنهائي</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </A4Page>
    </>
  );
}
