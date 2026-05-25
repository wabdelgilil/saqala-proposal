import { Building2, Target, Lightbulb, Users, ClipboardList, ShoppingCart, FileText, Activity, Shield, BarChart3, Monitor, BookOpen, Award, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import SequenceDiagram from "@/components/SequenceDiagram";
import A4Page from "@/components/A4Page";
import {
  challengesRows, challengesCols,
  objectivesRows, objectivesCols,
  philosophyRows, philosophyCols,
  engRows, engCols,
  tasksRows, tasksCols,
  workNatureRows, workNatureCols,
  teamUtilRows, teamUtilCols,
  siteClassRows, siteClassCols,
  fastProcRows, fastProcCols,
  mainProcRows, mainProcCols,
  contractMgmtRows, contractMgmtCols,
  vendorEvalRows, vendorEvalCols,
  raciRows, raciCols,
  successionRows, successionCols,
  continuityRows, continuityCols,
  safetyRoleRows, safetyRoleCols,
  resultsRows, resultsCols,
} from "@/lib/data-s1";

export default function Section01() {
  const ctrMgmtCols = [{ key: "phase", label: "المرحلة" }, { key: "action", label: "الإجراء" }];
  const ctrMgmtRows = [
    { phase: "الاختيار والتعاقد", action: "طلب عروض من 3 مقاولين على الأقل، مقارنة فنياً ومالياً، اعتماد العقد" },
    { phase: "تسليم المهام", action: "تحديد نطاق العمل بدقة، تسليم أوامر العمل عبر النظام، توثيق البدء" },
    { phase: "المتابعة اليومية", action: "متابعة التنفيذ، اعتماد إنجاز المراحل، توثيق أي تغييرات" },
    { phase: "الإغلاق والاعتماد", action: "معاينة الإنجاز، اعتماد الفاتورة، توثيق التقييم في سجل المورد" },
    { phase: "التجديد أو الاستبدال", action: "مراجعة أداء المورد، اتخاذ قرار التجديد أو طرح مناقصة جديدة" },
  ];
  const ctrTermsCols = [{ key: "item", label: "البند" }, { key: "term", label: "الشرط المقترح" }];
  const ctrTermsRows = [
    { item: "نطاق العمل", term: "وصف واضح ومحدد للمهام المطلوبة" },
    { item: "مدة العقد", term: "فترة زمنية محددة مع خيار التجديد" },
    { item: "مستوى الخدمة المطلوب (SLA)", term: "أوقات استجابة وإنجاز محددة بعقوبات على التأخير" },
    { item: "الدفع", term: "مرتبط بالإنجاز واعتماد المكتب الفني" },
    { item: "التأمين", term: "تأمين مسؤولية ضد حوادث العمل" },
    { item: "السلامة", term: "الالتزام بإجراءات السلامة بالكامل تحت طائلة الغرامة" },
  ];
  const scorecardCols = [{ key: "criteria", label: "معيار التقييم" }, { key: "weight", label: "الوزن" }, { key: "excellent", label: "5 ممتاز" }, { key: "good", label: "4 جيد" }, { key: "avg", label: "3 متوسط" }, { key: "weak", label: "2 ضعيف" }, { key: "bad", label: "1 سيئ" }];
  const scorecardRows = [
    { criteria: "جودة العمل المنجز", weight: "30%", excellent: "مطابق كامل", good: "انحرافات بسيطة", avg: "انحرافات ملحوظة", weak: "أعمال معادة جزئياً", bad: "أعمال مرفوضة" },
    { criteria: "الالتزام بالمواعيد", weight: "25%", excellent: "+95%", good: "85-95%", avg: "70-84%", weak: "50-69%", bad: "أقل من 50%" },
    { criteria: "الالتزام بالتكلفة", weight: "20%", excellent: "بدون فروق", good: "+5%", avg: "+10%", weak: "+15%", bad: "+20% فأكثر" },
    { criteria: "الأمن والسلامة", weight: "15%", excellent: "صفر مخالفات", good: "مخالفة 1 بسيطة", avg: "2 مخالفات", weak: "3 مخالفات", bad: "4+ أو خطيرة" },
    { criteria: "الاستجابة والتواصل", weight: "10%", excellent: "فوري", good: "خلال ساعة", avg: "خلال يوم", weak: "يتجاهل", bad: "لا يستجيب" },
  ];
  const scoreEvalCols = [{ key: "grade", label: "التقييم" }, { key: "range", label: "النتيجة" }, { key: "action", label: "الإجراء" }];
  const scoreEvalRows = [
    { grade: "ممتاز 🟢", range: "4.5 - 5.0", action: "تجديد العقد تلقائي + شكر وتقدير" },
    { grade: "جيد 🔵", range: "3.5 - 4.4", action: "متابعة عادية" },
    { grade: "متوسط 🟡", range: "2.5 - 3.4", action: "إنذار + طلب خطة تحسين" },
    { grade: "ضعيف 🟠", range: "1.5 - 2.4", action: "إنذار أخير + تخفيض الأعمال" },
    { grade: "سيئ 🔴", range: "أقل من 1.5", action: "إيقاف التعامل فوراً" },
  ];
  const raciLegendCols = [{ key: "code", label: "الرمز" }, { key: "meaning", label: "المعنى" }, { key: "count", label: "العدد المطلوب" }];
  const raciLegendRows = [
    { code: "R", meaning: "Responsible — منفذ المهمة", count: "واحد أو أكثر" },
    { code: "A", meaning: "Accountable — المسؤول النهائي (يُحاسب على النتيجة)", count: "واحد فقط" },
    { code: "C", meaning: "Consulted — يُستشار قبل القرار", count: "صفر أو أكثر" },
    { code: "I", meaning: "Informed — يُعلم بعد التنفيذ", count: "صفر أو أكثر" },
  ];
  const cmmsCols = [{ key: "module", label: "الوحدة" }, { key: "desc", label: "الوصف" }, { key: "tasks", label: "المهام" }];
  const cmmsRows = [
    { module: "إدارة الأصول", desc: "تسجيل الأصول، تاريخ الصيانة، جدول الصيانة الوقائية", tasks: "تسجيل الأصول — تاريخ الصيانة — جدول الصيانة" },
    { module: "أوامر العمل", desc: "إنشاء ومتابعة الأوامر، توزيع المهام، إغلاق وتوثيق", tasks: "إنشاء ومتابعة الأوامر — توزيع المهام — إغلاق وتوثيق" },
    { module: "إدارة العقود", desc: "متابعة العقود، مستوى الخدمة، تقييم الموردين", tasks: "متابعة العقود — مستوى الخدمة — تقييم الموردين" },
    { module: "إدارة فرق الصيانة", desc: "توزيع الفرق، تتبع الإنتاجية، إدارة الإجازات", tasks: "توزيع الفرق — تتبع الإنتاجية — إدارة الإجازات" },
    { module: "إدارة قطع الغيار", desc: "المخزون، طلبات الشراء، تحليل الاستهلاك", tasks: "المخزون — طلبات الشراء — تحليل الاستهلاك" },
    { module: "إدارة السلامة", desc: "تصاريح العمل، فحوصات السلامة، حوادث العمل", tasks: "تصاريح العمل — فحوصات السلامة — حوادث العمل" },
    { module: "التقارير ولوحات التحكم", desc: "مؤشرات الأداء، تقارير التكاليف، لوحات تحكم", tasks: "مؤشرات الأداء — تقارير التكاليف — لوحات تحكم" },
  ];

  return (
    <>
      {/* Page 1 */}
      <A4Page pageNum={1}>
        <SectionHeader icon={Building2} title="المكتب الفني لإدارة الصيانة المركزية" subtitle="نموذج تشغيلي مركزي لإدارة عمليات الصيانة في المجموعة" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              في الوضع الحالي، تعمل أنظمة الصيانة في مباني ومرافق المجموعة بشكل منفصل، حيث يمتلك كل موقع آلية تشغيل وإدارة خاصة به. يترتب على ذلك تحديات تشغيلية رئيسية تؤثر على الكفاءة العامة.
            </p>
          </div>

          <FlowChart
            title="تحديات الوضع الحالي"
            nodes={[
              { id: "اسباب", label: "الأسباب", icon: "⚠️", color: "red" },
              { id: "تحديات", label: "التحديات", icon: "🔴", color: "red" },
              { id: "b1", label: "مواقع معزولة", icon: "🏗️" },
              { id: "b2", label: "لا مرجعية فنية", icon: "📋" },
              { id: "b3", label: "أنظمة يدوية", icon: "📝" },
            ]}
            edges={[
              { from: "اسباب", to: "تحديات" },
              { from: "b1", to: "تحديات" },
            ]}
          />

          <DataTable columns={challengesCols} rows={challengesRows} />
        </div>
      </A4Page>

      {/* Page 2 */}
      <A4Page pageNum={2}>
        <div className="space-y-4 mt-4">
          <CallOutBox type="goal" title="الهدف من المكتب الفني">
            بناءً على ما تقدم، تظهر الحاجة إلى إنشاء مكتب فني مركزي لإدارة الصيانة يعمل كمركز تشغيل وتحكم ودعم فني لجميع مواقع المجموعة.
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Target} title="أهداف إنشاء المكتب الفني" />
            <FlowChart
              nodes={[
                { id: "ع", label: "المكتب الفني", icon: "🏗️", color: "navy" },
                { id: "أ1", label: "توحيد الإجراءات", icon: "📋", sub: "ورفع كفاءة الفرق" },
                { id: "أ2", label: "سرعة الاستجابة", icon: "⚡", sub: "وقاعدة بيانات الأصول" },
              ]}
              edges={[
                { from: "ع", to: "أ1" }, { from: "ع", to: "أ2" },
              ]}
              dir="LR"
            />
            <DataTable columns={objectivesCols} rows={objectivesRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 3 */}
      <A4Page pageNum={3}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Lightbulb} title="فلسفة المكتب الفني" />
            <p className="text-slate-700 leading-relaxed mb-4 text-xs">
              يعتمد المكتب الفني المقترح على هيكل تشغيلي مرن (Lean Structure)، وليس إدارة بيروقراطية كبيرة.
            </p>
            <FlowChart
              nodes={[
                { id: "p1", label: "الإدارة الذكية", icon: "🧠" }, { id: "p2", label: "الدعم الميداني", icon: "🛠️" },
                { id: "p3", label: "الإشراف", icon: "👁️" },
                { id: "مهندس", label: "مهندس المكتب الفني", icon: "👨‍💼", color: "navy" },
              ]}
              edges={[
                { from: "p1", to: "مهندس" }, { from: "p2", to: "مهندس" }, { from: "p3", to: "مهندس" },
              ]}
            />
            <DataTable columns={philosophyCols} rows={philosophyRows} />
          </div>

          <CallOutBox type="tip" title="ملاحظة">
            يعتمد النظام على عدد محدود من المهندسين ذوي الكفاءة العالية، القادرين على الجمع بين الإدارة الفنية والتخطيط والإشراف الميداني في آن واحد.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 4 */}
      <A4Page pageNum={4}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Users} title="الهيكل التشغيلي المقترح" />
            <FlowChart
              nodes={[
                { id: "ceo", label: "الإدارة العليا", icon: "🏛️", color: "green" },
                { id: "pm", label: "إدارة الصيانة المركزية", icon: "⚙️", color: "navy" },
                { id: "to1", label: "مهندس أول", icon: "👨‍💼" },
                { id: "to2", label: "مهندس دعم فني", icon: "🛠️" },
              ]}
              edges={[
                { from: "ceo", to: "pm" },
                { from: "pm", to: "to1" }, { from: "pm", to: "to2" },
              ]}
            />
            <h4 className="text-xs font-bold text-slate-700 mb-2 mt-4">مهندسو إدارة الصيانة المركزية</h4>
            <p className="text-[10px] text-slate-600 mb-2"><strong>العدد المقترح:</strong> من 2 إلى 3 مهندسين</p>
            <DataTable columns={engCols} rows={engRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 5 */}
      <A4Page pageNum={5}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">المهام الرئيسية للفريق الفني</h4>
            <DataTable columns={tasksCols} rows={tasksRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">طبيعة العمل وتقسيم الوقت</h4>
            <DataTable columns={workNatureCols} rows={workNatureRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 6 */}
      <A4Page pageNum={6}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={ClipboardList} title="إدارة فرق الصيانة في المواقع" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">آلية الربط مع المكتب الفني</h4>
            <SequenceDiagram
              participants={[
                { id: "م", label: "المكتب الفني", icon: "🏗️", color: "navy" },
                { id: "ن", label: "نظام CMMS", icon: "💻", color: "blue" },
                { id: "ش", label: "المشرف", icon: "👨‍💼", color: "slate" },
              ]}
              steps={[
                { from: "م", to: "ن", label: "تسجيل الأصول والجداول" },
                { from: "ن", to: "ش", label: "إرسال أوامر العمل" },
              ]}
            />
            <div className="mt-3">
              <DataTable columns={teamUtilCols} rows={teamUtilRows} />
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 7 */}
      <A4Page pageNum={7}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">تصنيف المواقع والفرق المطلوبة</h4>
            <DataTable columns={siteClassCols} rows={siteClassRows} />
          </div>

          <CallOutBox type="tip" title="ملاحظة هامة">
            لا يهدف النظام المركزي إلى إلغاء الفرق الحالية في المواقع، بل يهدف لتطوير أدائها وربطها ضمن منظومة موحدة.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 8 */}
      <A4Page pageNum={8}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={ShoppingCart} title="إدارة المشتريات الفنية" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">المشتريات التشغيلية السريعة</h4>
            <DataTable columns={fastProcCols} rows={fastProcRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">المشتريات الرئيسية والمشاريع</h4>
            <DataTable columns={mainProcCols} rows={mainProcRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 9 */}
      <A4Page pageNum={9}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">سير عمل المشتريات الفنية والاعتمادات</h4>
            <FlowChart
              nodes={[
                { id: "حاجة", label: "حاجة فنية", icon: "🔧", color: "amber" },
                { id: "قرار", label: "هل هي عاجلة؟", icon: "❓", color: "amber" },
                { id: "سريعة", label: "مشتريات تشغيلية سريعة", icon: "🛒" },
                { id: "رئيسية", label: "مشتريات رئيسية", icon: "🏢" },
                { id: "تنفيذ", label: "تنفيذ فوري للصيانة", icon: "✅", color: "green" },
              ]}
              edges={[
                { from: "حاجة", to: "قرار" },
                { from: "قرار", to: "سريعة", label: "نعم" },
                { from: "قرار", to: "رئيسية", label: "لا" },
                { from: "سريعة", to: "تنفيذ" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 10 */}
      <A4Page pageNum={10}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={FileText} title="إدارة العقود والموردين" />
            <DataTable columns={contractMgmtCols} rows={contractMgmtRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 11 */}
      <A4Page pageNum={11}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">شروط العقد الأساسية والمعايير المقترحة</h4>
            <DataTable columns={ctrTermsCols} rows={ctrTermsRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">معايير التقييم العام للموردين والمقاولين</h4>
            <DataTable columns={vendorEvalCols} rows={vendorEvalRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 12 */}
      <A4Page pageNum={12}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">بطاقة أداء المقاولين (Contractor Scorecard)</h4>
            <DataTable columns={scorecardCols} rows={scorecardRows} />
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 mt-2 text-[10px] font-mono" dir="ltr">
              Score = (Quality × 30%) + (Time × 25%) + (Cost × 20%) + (Safety × 15%) + (Resp × 10%)
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">آلية تقييم الدرجات والإجراء التشغيلي المترتب</h4>
            <DataTable columns={scoreEvalCols} rows={scoreEvalRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 13 */}
      <A4Page pageNum={13}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Activity} title="مصفوفة المسؤوليات (RACI Matrix)" />
            <DataTable columns={raciCols} rows={raciRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 14 */}
      <A4Page pageNum={14}>
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-1">دليل قراءة RACI</h4>
              <DataTable columns={raciLegendCols} rows={raciLegendRows} />
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm flex flex-col justify-center">
              <CallOutBox type="critical" title="قاعدة ذهبية">
                كل مهمة لها Accountable (A) واحد فقط، لمنع تشتت المسؤولية والتقاذف الميداني للمهام.
              </CallOutBox>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BookOpen} title="خطة استمرارية تعاقب الكفاءات" />
            <DataTable columns={successionCols} rows={successionRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 15 */}
      <A4Page pageNum={15}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">آليات ضمان الاستمرارية ومنع الانقطاع</h4>
            <DataTable columns={continuityCols} rows={continuityRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Shield} title="الأمن والسلامة" />
            <DataTable columns={safetyRoleCols} rows={safetyRoleRows} />
          </div>
        </div>
      </A4Page>
    </>
  );
}
