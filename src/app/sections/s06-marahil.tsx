import { ClipboardCheck, Calendar, BarChart3, Activity, Shield, Leaf, Users, FileText } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
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
      <A4Page pageNum={109}>
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
      <A4Page pageNum={110}>
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
      <A4Page pageNum={111}>
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
      <A4Page pageNum={112}>
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
      <A4Page pageNum={113}>
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

      {/* Page 52 (Page 114) - النموذج 14: نموذج اختبار قبول المستخدم للنظام (UAT Sign-off Form) */}
      <A4Page pageNum={114}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="النموذج 14: اختبار قبول المستخدم (UAT Sign-off)" subtitle="استمارة مطابقة واختبار واجهات ووظائف نظام GridFix واعتماده للتشغيل" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>المرحلة المختبرة: البنية الأساسية للتشغيل</div>
                <div>تاريخ الاختبار: 25-05-2026</div>
                <div>النتيجة العامة: ✅ مقبول ومعتمد</div>
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200">السيناريو البرمجي والوظيفة المختبرة</th>
                    <th className="p-2 border-l border-slate-200 text-center">حالة القبول للوظيفة</th>
                    <th className="p-2 border-l border-slate-200">تفاصيل الملاحظات الفنية للجنة</th>
                    <th className="p-2 text-center">ممثل الجهة المختبرة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">إنشاء بلاغ عطل وتوجيهه تلقائياً للفني القريب</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق ومقبول</td>
                    <td className="p-2 border-l border-slate-200 text-slate-500">تم الاستقبال والتوجيه خلال 12 ثانية بنجاح.</td>
                    <td className="p-2 text-center text-slate-700">ممثلاً عن قسم العمليات</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">صرف قطع غيار وربط تكلفتها بأمر العمل والأصل</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق ومقبول</td>
                    <td className="p-2 border-l border-slate-200 text-slate-500">تم الخصم من المخزون الفرعي وتحديث القيمة الدفترية.</td>
                    <td className="p-2 text-center text-slate-700">ممثلاً عن أمناء المخازن</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">مزامنة البيانات دون اتصال عند انقطاع التغطية</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق ومقبول</td>
                    <td className="p-2 border-l border-slate-200 text-slate-500">تم تخزين حركتين وإرسالها بمجرد عودة التغطية.</td>
                    <td className="p-2 text-center text-slate-700">ممثلاً عن الفرق الفنية</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                <strong>قرار اللجنة المشتركة للقبول:</strong> نوصي بالبدء الفوري بنقل النظام إلى البيئة الإنتاجية واعتماده كنظام تشغيل صيانة رسمي للمجموعة.
                <div className="flex justify-between pt-2">
                  <span>توقيع ممثل تقنية المعلومات: __________________</span>
                  <span>اعتماد مهندس أول للمشروع: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 53 (Page 115) - النموذج 15: مصفوفة تقييم مخاطر التحول والتشغيل */}
      <A4Page pageNum={115}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Shield} title="النموذج 15: مصفوفة مخاطر التحول التشغيلي" subtitle="تحديد مخاطر الانتقال للنظام الجديد وآليات السيطرة التشغيلية والتقنية لتفاديها" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-center">
                مصفوفة إدارة المخاطر المصاحبة لإطلاق نظام CMMS الجديد
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 font-bold text-slate-800">
                    <th className="p-2 border-l border-slate-200">الخطر المتوقع وتأثيره التشغيلي</th>
                    <th className="p-2 border-l border-slate-200 text-center">الاحتمالية</th>
                    <th className="p-2 border-l border-slate-200 text-center">الأثر المترتب</th>
                    <th className="p-2 border-l border-slate-200 text-center">مستوى الخطر</th>
                    <th className="p-2">خطة السيطرة وتقليل احتمالية الخطر</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">مقاومة التغيير من الكوادر الفنية (الالتفاف عن استخدام التطبيق)</td>
                    <td className="p-2 border-l border-slate-200 text-center">متوسطة</td>
                    <td className="p-2 border-l border-slate-200 text-center">عالي</td>
                    <td className="p-2 border-l border-slate-200 text-center text-amber-600 font-bold">🟡 متوسط</td>
                    <td className="p-2 text-[9px] text-slate-700">تطبيق حوافز للملتزمين، ومنع صرف قطع الغيار إلا برقم بلاغ معتمد على النظام.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">فقدان البيانات القديمة أثناء عملية النقل والترحيل لـ CMMS</td>
                    <td className="p-2 border-l border-slate-200 text-center">منخفضة</td>
                    <td className="p-2 border-l border-slate-200 text-center">عالي جداً</td>
                    <td className="p-2 border-l border-slate-200 text-center text-amber-600 font-bold">🟡 متوسط</td>
                    <td className="p-2 text-[9px] text-slate-700">أخذ نسخة احتياطية كاملة ومطابقة الأصول يدوياً قبل وبعد الترحيل للتحقق.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">توقف خوادم النظام بشكل مفاجئ أثناء ساعات العمل الحيوية</td>
                    <td className="p-2 border-l border-slate-200 text-center">منخفضة</td>
                    <td className="p-2 border-l border-slate-200 text-center">عالي جداً</td>
                    <td className="p-2 border-l border-slate-200 text-center text-red-600 font-bold">🔴 مرتفع</td>
                    <td className="p-2 text-[9px] text-slate-700">تشغيل خوادم رديفة (Redundant Servers) والنسخ الاحتياطي اللحظي التلقائي.</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                <strong>توجيه مسؤول السلامة والمخاطر:</strong> يجب مراجعة مصفوفة المخاطر أسبوعياً في اجتماعات اللجنة التوجيهية وتعديل آليات السيطرة طبقاً لمجريات إطلاق المشروع.
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 54 (Page 116) - جدول اجتماعات اللجنة التوجيهية الفنية للمشروع وآلية إدارة التغيير */}
      <A4Page pageNum={116}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Users} title="اجتماعات اللجنة التوجيهية وإدارة التغيير" subtitle="جدول متابعة أداء المشروع وإدارة التغيير وتجاوز عقبات مقاومة التحول الرقمي" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <div>
              <h5 className="font-bold text-slate-800 mb-2">جدول اجتماعات لجنة حوكمة المشروع:</h5>
              <table className="w-full text-right text-[10px] border-collapse border border-slate-200 mb-3">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 font-bold">
                    <th className="p-2 border-l border-slate-200">الاجتماع الدوري</th>
                    <th className="p-2 border-l border-slate-200 text-center">التكرار</th>
                    <th className="p-2 border-l border-slate-200">المشاركون الرئيسيون</th>
                    <th className="p-2 text-center">الهدف والمخرجات المطلوبة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">مراجعة أداء المشروع الفنية</td>
                    <td className="p-2 border-l border-slate-200 text-center">أسبوعي</td>
                    <td className="p-2 border-l border-slate-200">مهندسو المكتب الفني + مشرفو المواقع</td>
                    <td className="p-2 text-center text-slate-600">مراجعة نسب إغلاق التذاكر وأعطال النظام والوفر.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">اللجنة التوجيهية للمشروع</td>
                    <td className="p-2 border-l border-slate-200 text-center">شهري</td>
                    <td className="p-2 border-l border-slate-200">مدير الصيانة + ممثل الإدارة العليا + م. تكنولوجيا المعلومات</td>
                    <td className="p-2 text-center text-slate-600">تقييم الجدول الزمني والميزانية وحل المعوقات الكبرى.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CallOutBox type="tip" title="استراتيجية التغلب على مقاومة التغيير">
              يتم تنظيم حافز شهري لأفضل 3 فنيين يلتزمون بتوثيق وتحديث أوامر العمل وإغلاق التذاكر ميدانياً عبر الجوال بنسبة 100% لخلق روح التنافس الإيجابي وتسهيل عملية تبني النظام.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 55 (Page 117) - دليل تشغيلي (SOP) لعملية التدريب الميداني والتهيئة للفنيين */}
      <A4Page pageNum={117}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Calendar} title="دليل التدريب الميداني وتهيئة الكوادر" subtitle="إجراء عمل معتمد (SOP) لتأهيل الفنيين والمشرفين على تشغيل وإدارة نظام CMMS" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed font-semibold">
              لضمان استيعاب كافة الكوادر الفنية والمشرفين للمنظومة الجديدة ومنع حدوث أي أخطاء أثناء التشغيل الفعلي، يتم تطبيق خطة التهيئة والتدريب التالية:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px] text-slate-700">
              <h5 className="font-bold text-slate-800">بروتوكول التدريب والتأهيل الميداني:</h5>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>ورش العمل النظرية (الأسبوع 1)</strong>: شرح مبسط لأهمية التحول الرقمي وحوكمة الصيانة وأثرها المالي على الكفاءة التشغيلية للمجموعة.</li>
                <li><strong>التدريب العملي التجريبي (الأسبوع 2)</strong>: تدريب الفنيين يداً بيد على واجهة تطبيق الجوال، ورفع طلبات وهمية وصرف قطع غيار وإغلاق التذاكر.</li>
                <li><strong>فترة التشغيل الموازي (الأسبوع 3-4)</strong>: استمرار استخدام الدورة الورقية والنظام الجديد معاً للتحقق من عدم وجود فجوات في البيانات أو الفهم.</li>
                <li><strong>اختبار الكفاءة النهائي</strong>: إجراء اختبار عملي بسيط للفنيين للتأكد من قدرة كل فني على التوثيق، ومنح شهادة الجاهزية للتشغيل.</li>
              </ol>
            </div>
            <CallOutBox type="critical" title="شرط النزول للميدان">
              يُمنع تكليف أي فني ميداني بالبلاغات أو تسليمه سيارة صيانة متنقلة دون اجتيازه برنامج التدريب الميداني المعتمد وحصوله على شهادة الكفاءة لتطبيق GridFix.
            </CallOutBox>
          </div>
        </div>
      </A4Page>
    </>
  );
}
