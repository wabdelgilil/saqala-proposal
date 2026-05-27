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
        </div>
      </A4Page>

      {/* Page 2 */}
      <A4Page pageNum={2}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">التحديات المتوقعة والحلول</h4>
            <DataTable columns={challengesCols} rows={challengesRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 3 */}
      <A4Page pageNum={3}>
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
          </div>
        </div>
      </A4Page>

      {/* Page 4 */}
      <A4Page pageNum={4}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">أهداف ومؤشرات النجاح للمكتب الفني</h4>
            <DataTable columns={objectivesCols} rows={objectivesRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 3 */}
      <A4Page pageNum={5}>
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
      <A4Page pageNum={6}>
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
      <A4Page pageNum={7}>
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
      <A4Page pageNum={8}>
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
      <A4Page pageNum={9}>
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
      <A4Page pageNum={10}>
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
      <A4Page pageNum={11}>
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
      <A4Page pageNum={12}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={FileText} title="إدارة العقود والموردين" />
            <DataTable columns={contractMgmtCols} rows={contractMgmtRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 11 */}
      <A4Page pageNum={13}>
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
      <A4Page pageNum={14}>
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
      <A4Page pageNum={15}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Activity} title="مصفوفة المسؤوليات (RACI Matrix)" />
            <DataTable columns={raciCols} rows={raciRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 14 */}
      <A4Page pageNum={16}>
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
      <A4Page pageNum={17}>
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

      {/* Page 16 (Page 18) - SOP - إجراءات التفتيش والزيارات الميدانية بالتفصيل */}
      <A4Page pageNum={18}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardList} title="دليل التفتيش الميداني المركزي" subtitle="إجراءات التفتيش الدوري وجودة نظافة وتشغيل الغرف الفنية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-2">منهجية التفتيش الفني الدوري:</h4>
            <p className="text-slate-700 leading-relaxed mb-3">
              يقوم مهندس الدعم الفني بالمكتب الفني بزيارات عشوائية ومجدولة لكافة فروع ومستودعات ومكاتب المجموعة للتحقق من كفاءة التشغيل. يتم التركيز على النظافة الفنية، ومنع التسريبات، والتوصيلات المؤقتة المخالفة للسلامة.
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 mb-3">
              <h5 className="font-bold text-slate-800 mb-1">خطوات الزيارة الميدانية:</h5>
              <ol className="list-decimal list-inside space-y-1 text-slate-600">
                <li>إشعار مشرف الموقع بالزيارة المجدولة قبل 24 ساعة (أو زيارة عاجلة مفاجئة).</li>
                <li>مسح الأصول الرئيسية عبر تطبيق الجوال ومطابقة حالتها في الواقع مع نظام CMMS.</li>
                <li>تعبئة استمارة تدقيق جودة الموقع وتسجيل الملاحظات والصور مباشرة في النظام.</li>
                <li>إصدار أوامر عمل تصحيحية فورية للملاحظات الحرجة وإمهال مشرف الموقع 3 أيام للتنفيذ.</li>
              </ol>
            </div>
            <CallOutBox type="critical" title="قاعدة النظافة التشغيلية">
              أي تراكم للأتربة على زعانف المكثفات أو لوحات التوزيع يؤدي لزيادة استهلاك الطاقة بنسبة تصل إلى 15% وتسريع تلف المكونات الإلكترونية. النظافة الفنية جزء لا يتجزأ من الصيانة الوقائية.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 17 (Page 19) - نموذج تقرير الزيارة الميدانية وتدقيق جودة المواقع */}
      <A4Page pageNum={19}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardList} title="النموذج 1: تقرير تدقيق جودة المواقع" subtitle="نموذج فحص الغرف الفنية والمرافق وتصنيف الملاحظات" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            {/* Template UI */}
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-4 gap-2 font-bold text-center">
                <div>موقع التدقيق: مستودع جدة المركزي</div>
                <div>المفتش: م. أحمد المطيري</div>
                <div>التاريخ: 25-05-2026</div>
                <div>وقت البدء: 10:00 ص</div>
              </div>
              
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300">
                    <th className="p-2 border-l border-slate-200 w-1/4">المنطقة الفنية</th>
                    <th className="p-2 border-l border-slate-200 w-1/3">بنود الفحص والاختبار</th>
                    <th className="p-2 border-l border-slate-200 w-1/6 text-center">الحالة</th>
                    <th className="p-2">الإجراء المطلوب والتوجيه</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">غرفة المولد الاحتياطي</td>
                    <td className="p-2 border-l border-slate-200">نظافة الهيكل، مستوى الديزل، شحن البطارية، تهوية الغرفة</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق</td>
                    <td className="p-2 text-slate-500">لا توجد ملاحظات، المولد جاهز للعمل.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">لوحة التوزيع الرئيسية MDB</td>
                    <td className="p-2 border-l border-slate-200">إحكام الأبواب، خلو الكابلات من الحرارة، خلو الغرفة من الغبار</td>
                    <td className="p-2 border-l border-slate-200 text-center text-amber-600 font-bold">🟡 ملاحظة</td>
                    <td className="p-2 text-slate-800">تراكم غبار خفيف على قمة اللوحة. تنظيف خلال 24 ساعة.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">غرفة مضخات الحريق</td>
                    <td className="p-2 border-l border-slate-200">ضغط شبكة المياه، لوحة التحكم، تسريبات المحابس والصمامات</td>
                    <td className="p-2 border-l border-slate-200 text-center text-red-600 font-bold">🔴 غير مطابق</td>
                    <td className="p-2 text-red-700 font-bold">تهريب مياه بسيط عند محبس مضخة الجوكي. استبدال مانع التسريب.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">مخزن قطع الغيار الفرعي</td>
                    <td className="p-2 border-l border-slate-200">ترتيب الأرفف، ملصقات الباركود، تكييف المخزن، الإضاءة</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق</td>
                    <td className="p-2 text-slate-500">مستوى الترتيب ممتاز وتطابق الباركود سليم.</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-slate-50 p-2 border-t border-slate-300 text-[10px] space-y-1">
                <div><strong>ملاحظات المفتش العامة:</strong> يوجد تحسن ملحوظ في الترتيب العام للمستودع، ولكن يجب معالجة تهريب مياه مضخة الجوكي فوراً لحساسية نظام الحريق.</div>
                <div className="flex justify-between pt-2">
                  <span>توقيع المفتش: __________________</span>
                  <span>توقيع مشرف الموقع المستلم: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 18 (Page 20) - توصيف الوظائف الهندسية والمهام المحددة */}
      <A4Page pageNum={20}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Users} title="توصيف الوظائف الكادر الهندسي" subtitle="المسؤوليات والمهام التفصيلية لكل دور بالمكتب الفني المركزي" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <div>
              <h4 className="font-bold text-navy-500 mb-1">1. قائد الفريق (مهندس أول صيانة):</h4>
              <p className="text-slate-600 leading-relaxed">
                مسؤول عن إدارة الميزانيات التشغيلية للمجموعة، وتوقيع عقود المقاولين الخارجيين واعتماد الفواتير التشغيلية الفنية. يشرف على المراجعة السنوية لأداء المنظومة، وتنسيق الخطط الاستراتيجية مع الإدارة العليا.
              </p>
              <span className="text-[10px] text-blue-500 font-semibold">مؤشر النجاح: نسبة الالتزام بالميزانية السنوية وإنجاز المشاريع الفنية الكبرى بالوقت المحدد.</span>
            </div>
            <hr className="border-slate-100" />
            <div>
              <h4 className="font-bold text-navy-500 mb-1">2. مهندس تخطيط وجدولة:</h4>
              <p className="text-slate-600 leading-relaxed">
                يتحمل مسؤولية صياغة ومتابعة جداول الصيانة الوقائية (PM) لجميع أصول المجموعة، وتوزيع أوامر العمل اليومية للفنيين والفرق المتحركة، ومتابعة توافر قطع الغيار قبل انطلاق المهام، وإعداد تقارير الالتزام الأسبوعية.
              </p>
              <span className="text-[10px] text-blue-500 font-semibold">مؤشر النجاح: نسبة الالتزام بجدول الصيانة الوقائية السنوي (KPI) فوق 90%.</span>
            </div>
            <hr className="border-slate-100" />
            <div>
              <h4 className="font-bold text-navy-500 mb-1">3. مهندس دعم فني وميداني:</h4>
              <p className="text-slate-600 leading-relaxed">
                يقوم بالزيارات التفقدية والتدقيق الميداني على جودة التنفيذ، وفحص الأصول الحرجة للتأكد من قيام الفنيين بالعمل بالشكل السليم، وتحليل الأعطال الجسيمة المتكررة للوصول لأسبابها الجذرية (RCA) وحل مشاكل المواقع المعقدة.
              </p>
              <span className="text-[10px] text-blue-500 font-semibold">مؤشر النجاح: خفض معدلات الأعطال المتكررة للأصول بنسبة 50%.</span>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 19 (Page 21) - نموذج بطاقة التقييم والأداء الفعلي للمقاولين */}
      <A4Page pageNum={21}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={BarChart3} title="النموذج 2: ورقة حساب تقييم المقاولين" subtitle="مثال تطبيقي لحساب درجات تقييم الأداء والمجموع الموزون الفعلي لمقاول" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>اسم المقاول: شركة مناخ الجزيرة للتبريد</div>
                <div>عقد رقم: CONT-2025-043</div>
                <div>فترة التقييم: الربع الأول لعام 2026</div>
              </div>

              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300">
                    <th className="p-2 border-l border-slate-200 w-1/4">معيار الأداء</th>
                    <th className="p-2 border-l border-slate-200 w-1/6 text-center">الوزن</th>
                    <th className="p-2 border-l border-slate-200 w-1/4 text-center">مستوى الأداء الفعلي</th>
                    <th className="p-2 border-l border-slate-200 w-1/6 text-center">الدرجة الممنوحة</th>
                    <th className="p-2 text-center">النتيجة الموزونة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">جودة الأعمال المنفذة</td>
                    <td className="p-2 border-l border-slate-200 text-center font-bold text-slate-500">30%</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">عمل مطابق تماماً بدون ملاحظات</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-blue-600 font-bold">5 / 5</td>
                    <td className="p-2 text-center font-mono font-bold text-slate-800">1.50</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">الالتزام بمواعيد الإنجاز</td>
                    <td className="p-2 border-l border-slate-200 text-center font-bold text-slate-500">25%</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">التزام بنسبة 88% للمهام المجدولة</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-blue-600 font-bold">4 / 5</td>
                    <td className="p-2 text-center font-mono font-bold text-slate-800">1.00</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">الالتزام بالتكلفة والميزانية</td>
                    <td className="p-2 border-l border-slate-200 text-center font-bold text-slate-500">20%</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">زيادة طفيفة في التكاليف الطارئة (+8%)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-blue-600 font-bold">3 / 5</td>
                    <td className="p-2 text-center font-mono font-bold text-slate-800">0.60</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">الامتثال للأمن والسلامة</td>
                    <td className="p-2 border-l border-slate-200 text-center font-bold text-slate-500">15%</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">تسجيل مخالفة واحدة لعدم لبس النظارات واقية</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-blue-600 font-bold">4 / 5</td>
                    <td className="p-2 text-center font-mono font-bold text-slate-800">0.60</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">سرعة الاستجابة والتواصل</td>
                    <td className="p-2 border-l border-slate-200 text-center font-bold text-slate-500">10%</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">استجابة فورية لكافة بلاغات الطوارئ</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-blue-600 font-bold">5 / 5</td>
                    <td className="p-2 text-center font-mono font-bold text-slate-800">0.50</td>
                  </tr>
                  <tr className="bg-blue-50 border-t border-slate-300 font-bold">
                    <td className="p-2 border-l border-slate-200 text-center" colSpan={3}>إجمالي التقييم النهائي الموزون</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-blue-700">84%</td>
                    <td className="p-2 text-center font-mono text-blue-800 text-xs">✅ 4.20 / 5.00</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 flex justify-between items-center border-t border-slate-300">
                <span>النتيجة: 4.20 من 5.00 (جيد جداً)</span>
                <span>الإجراء المترتب: تجديد عادي للعقد ومراقبة بنود التكلفة والسلامة.</span>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 20 (Page 22) - تفصيل آلية وإجراءات اعتمادات المشتريات الفنية وتحديد المسؤوليات */}
      <A4Page pageNum={22}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ShoppingCart} title="إدارة اعتمادات المشتريات الفنية" subtitle="مسارات الموافقة والصلاحيات التشغيلية والمالية لقطع الغيار" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              لتفادي بطء الصيانة وضمان توافر المواد الفنية والقطع، يتم فصل الصلاحيات والاعتمادات المالية بناءً على طبيعة العطل وتكلفته التقديرية للحد من الهدر المالي:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-2">مصفوفة الصلاحيات المالية للاعتمادات:</h5>
              <ul className="space-y-2 text-slate-600">
                <li className="flex justify-between border-b border-slate-200 pb-1">
                  <span>🟢 أقل من 2,000 ريال (مشتريات تشغيلية سريعة)</span>
                  <span className="font-bold text-green-700">اعتماد مباشر من مهندس أول المكتب الفني</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-1">
                  <span>🔵 2,000 - 15,000 ريال (مشتريات معتادة)</span>
                  <span className="font-bold text-blue-700">اعتماد مهندس أول المكتب الفني + موافقة مدير الصيانة</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-1">
                  <span>🟡 15,000 - 50,000 ريال (مشتريات رئيسية)</span>
                  <span className="font-bold text-amber-700">مدير الصيانة + موافقة ممثل الإدارة العليا للمجموعة</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>🔴 أكثر من 50,000 ريال (مشاريع كبرى / أصول جديدة)</span>
                  <span className="font-bold text-red-700">موافقة الرئيس التنفيذي للمجموعة ولجنة المشتريات الكبرى</span>
                </li>
              </ul>
            </div>
            <CallOutBox type="goal" title="الهدف المالي">
              تضمن هذه الإجراءات السرعة المطلقة في معالجة الأعطال التشغيلية البسيطة (خلال دقائق)، مع إبقاء الرقابة المشددة والشفافية على المشتريات ذات المبالغ المتوسطة والكبرى لتقليل الهدر.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 21 (Page 23) - نموذج طلب شراء فني طارئ لقطع غيار عاجلة */}
      <A4Page pageNum={23}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ShoppingCart} title="النموذج 3: طلب شراء فني طارئ" subtitle="استمارة طلب وتأمين قطع الغيار بشكل مستعجل للأعطال الحرجة بالمواقع" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>رقم الطلب: PR-2026-0892</div>
                <div>التاريخ: 25-05-2026</div>
                <div>الحالة: 🔴 عاجل جداً</div>
              </div>

              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>موقع العطل:</strong> مستودع الأدوية المركزي - سقالة</div>
                  <div><strong>الأصل المتأثر:</strong> شيلر التبريد رقم 2 (Carrier Chiller)</div>
                </div>
                <div className="bg-red-50 text-red-800 p-2 rounded border border-red-200">
                  <strong>تأثير العطل ووصف الحالة التشغيلية:</strong> ارتفاع درجة حرارة غرفة حفظ أدوية الأنسولين إلى 12م (المسموح به 2-8م). يوجد خطر وشيك لتلف شحنة أدوية تقدر قيمتها بنصف مليون ريال في حال عدم الإصلاح خلال 3 ساعات.
                </div>

                <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold">
                      <th className="p-1.5 border-l border-slate-200">البيان والوصف الفني للقطع</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">الكمية</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">سعر الوحدة التقديري</th>
                      <th className="p-1.5 text-center">الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1.5 border-l border-slate-200">صمام تمدد إلكتروني (EXV) - موديل EXV-349</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">1</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">12,500 ريال</td>
                      <td className="p-1.5 text-center font-mono font-bold">12,500 ريال</td>
                    </tr>
                  </tbody>
                </table>

                <div className="grid grid-cols-3 gap-2 text-[9px] pt-3 text-center">
                  <div className="border border-slate-200 p-2 rounded">
                    <strong>إعداد (المكتب الفني):</strong>
                    <div className="py-2">م. خالد العتيبي</div>
                    <div className="text-green-600">✓ معتمد (25-05 10:15 ص)</div>
                  </div>
                  <div className="border border-slate-200 p-2 rounded">
                    <strong>اعتماد (مدير الصيانة):</strong>
                    <div className="py-2">أ. وائل عبد الجليل</div>
                    <div className="text-green-600">✓ معتمد (25-05 10:20 ص)</div>
                  </div>
                  <div className="border border-slate-200 p-2 rounded">
                    <strong>اعتماد مالي (ممثل المجموعة):</strong>
                    <div className="py-2">لجنة الطوارئ المالية</div>
                    <div className="text-green-600">✓ معتمد (25-05 10:25 ص)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 22 (Page 24) - تفصيل معايير إغلاق المشاريع وصرف فواتير مقاولي الصيانة */}
      <A4Page pageNum={24}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={FileText} title="إجراءات قبول الأعمال وإغلاق المشاريع" subtitle="معايير فحص إنجاز المهام وصرف المستحقات المالية للمقاولين" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              تطبيق آلية صارمة لإغلاق المهام وصرف فواتير مقاولي الصيانة الخارجية يضمن عدم هدر مستحقات على أعمال غير مطابقة للمواصفات أو متأخرة الإنجاز:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-2">المتطلبات الإلزامية لصرف المستحقات الفنية:</h5>
              <ol className="list-decimal list-inside space-y-2 text-slate-600">
                <li><strong>شهادة إنجاز الأعمال فنية معتمدة</strong>: موقعة من مشرف الموقع ومهندس المكتب الفني.</li>
                <li><strong>تقرير الفحص قبل وبعد العمل بالصور</strong>: يُرفع على منصة GridFix مع تحديد قطع الغيار.</li>
                <li><strong>فحص الامتثال لشروط الأمن والسلامة</strong>: تأكيد خلو موقع العمل من المخلفات والمخاطر.</li>
                <li><strong>فحص التقييم والـ SLA</strong>: مراجعة زمن الاستجابة الفعلي ونسبة التأخر واحتساب الغرامات المقررة.</li>
              </ol>
            </div>
            <CallOutBox type="tip" title="معايير الضمان فني">
              يجب على المقاول تقديم ضمان مكتوب على الإصلاح والأعمال لا يقل عن 3 أشهر لقطع الغيار الاستهلاكية و 12 شهراً للأعمال والمعدات الكبرى، ويُحجز 10% من قيمة الفاتورة كضمان أداء طوال تلك المدة.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 23 (Page 25) - نموذج شهادة استلام الأعمال وصيانة مقاول للأعمال والضمان */}
      <A4Page pageNum={25}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Award} title="النموذج 4: شهادة استلام أعمال الصيانة" subtitle="استمارة إتمام وقبول أعمال الإصلاح والتوريد للمقاولين وصرف المستحقات المالية" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-2 gap-2 font-bold text-center">
                <div>رقم شهادة الاستلام: WR-2026-0391</div>
                <div>رقم أمر العمل المرتبط: WO-89021</div>
              </div>

              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>اسم المقاول المعتمد:</strong> مؤسسة الدعم الفني للتبريد والمقاولات</div>
                  <div><strong>تاريخ الاستلام والقبول:</strong> 25-05-2026</div>
                </div>

                <div className="border border-slate-200 p-2.5 rounded bg-slate-50">
                  <strong>تفصيل الأعمال المستلمة:</strong>
                  <p className="text-[10px] text-slate-600 mt-1">
                    تم استبدال محرك مروحة دفع الهواء المحترق (Blower Motor) في وحدة مناولة الهواء AHU-4 بالدور الثالث بمبنى الإدارة العامة، بالإضافة لتنظيف مرشحات وفلاتر الهواء، وقياس تدفق الهواء ومستوى سحب التيار للتأكد من مطابقتها للمواصفات القياسية للجهاز.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-[10px]">
                  <div><strong>مدة ضمان المورد الممنوحة:</strong> 6 أشهر على المحرك والتركيب</div>
                  <div><strong>قرار لجنة الفحص والقبول:</strong> ✅ مقبول بالكامل وصالح للصرف</div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[8px] pt-2 text-center">
                  <div className="border border-slate-200 p-2 rounded">
                    <strong>مشرف الموقع (المستلم):</strong>
                    <div className="py-2">أ. ياسر الحربي</div>
                    <div>توقيع: __________________</div>
                  </div>
                  <div className="border border-slate-200 p-2 rounded">
                    <strong>مهندس المكتب الفني (المعاينة):</strong>
                    <div className="py-2">م. أحمد المطيري</div>
                    <div>توقيع: __________________</div>
                  </div>
                  <div className="border border-slate-200 p-2 rounded">
                    <strong>الاعتماد النهائي (مدير الصيانة):</strong>
                    <div className="py-2">أ. وائل عبد الجليل</div>
                    <div className="text-green-600 font-bold">✓ موافق على الصرف الفوري</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 24 (Page 26) - إجراءات العمل للتعامل الفوري مع بلاغات تعطل أجهزة التبريد الحساسة */}
      <A4Page pageNum={26}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="خطة طوارئ تعطل التبريد بمستودع الأدوية" subtitle="إجراءات العمل المعيارية (SOP) للتعامل العاجل والحد من تلف الشحنات" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed font-semibold text-red-600">
              تعتبر مستودعات الأدوية والمحاليل الحساسة لدرجة الحرارة (Cold Chain) من أهم المواقع ذات الحرج الشديد التي تحتاج استجابة فورية:
            </p>
            <div className="border border-red-200 rounded-lg p-3 bg-red-50 text-[11px] text-slate-700">
              <h5 className="font-bold text-red-900 mb-1">خطوات بروتوكول الطوارئ لإنقاذ الشحنات:</h5>
              <ol className="list-decimal list-inside space-y-1.5">
                <li><strong>0 - 5 دقائق</strong>: إرسال إنذار فوري تلقائي من نظام مراقبة حرارة الغرفة (BMS) إلى تطبيق الجوال الخاص بمدير الصيانة وفني التكييف المناوب.</li>
                <li><strong>5 - 15 دقيقة</strong>: توجه الفني الميداني فوراً للمستودع وتشغيل نظام التبريد الاحتياطي (Redundant System) لخفض الحمل، وفتح محابس غاز التبريد الطارئ.</li>
                <li><strong>15 - 30 دقيقة</strong>: قياس درجة الحرارة ميدانياً، وإرسال تقرير فوري للمكتب الفني. في حال تعذر الإصلاح الفوري، يتم استنفار فريق المستودعات لبدء نقل الأدوية للغرفة المجاورة البديلة.</li>
                <li><strong>30 - 60 دقيقة</strong>: بدء أعمال الفحص الفني لصمام التمدد أو الضاغط وتغييرها من المخزن فوراً.</li>
              </ol>
            </div>
            <CallOutBox type="critical" title="توجيه الأولوية">
              أوامر عمل الصيانة الوقائية لأجهزة التكييف بمستودعات التبريد تصنف دائمًا كـ (🔴 أولوية قصوى) ولا يجوز إرجاؤها لأي سبب لضمان سلامة مخزون المجموعة الطبي.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 25 (Page 27) - جدول الصيانة الوقائية السنوي للأصول والمعدات الرئيسية */}
      <A4Page pageNum={27}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardList} title="جدول الصيانة الوقائية السنوي" subtitle="مخطط وتوقيت الفحوصات والزيارات الوقائية المعتمدة للأصول الرئيسية" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 p-2 border-b border-slate-200 font-bold text-slate-800 text-center">
                مخطط الصيانة الوقائية المبرمج لعام 2026
              </div>

              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200 w-1/4">نوع الأصل / المعدة</th>
                    <th className="p-2 border-l border-slate-200 w-1/6 text-center">تكرار الفحص</th>
                    <th className="p-2 border-l border-slate-200 w-1/4 text-center">بنود الصيانة الأساسية</th>
                    <th className="p-2 text-center">الجدولة السنوية (أشهر الفحص)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">شيلرات التكييف المركزي</td>
                    <td className="p-2 border-l border-slate-200 text-center">ربع سنوي</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">فحص ضغط الغاز، تنظيف المكثفات، معايرة كروت التبريد</td>
                    <td className="p-2 text-center text-blue-700 font-bold font-mono">يناير / أبريل / يوليو / أكتوبر</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">المولدات الكهربائية الاحتياطية</td>
                    <td className="p-2 border-l border-slate-200 text-center">شهري</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">تشغيل تجريبي، تغيير الفلاتر والزيوت، قياس شحن البطاريات</td>
                    <td className="p-2 text-center text-blue-700 font-bold font-mono">كل أول أسبوع من كل شهر</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">مضخات المياه ومحطات التحلية</td>
                    <td className="p-2 border-l border-slate-200 text-center">نصف سنوي</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">تغيير موانع التسريب، فحص الأحمال والمحركات، غسيل الخزانات</td>
                    <td className="p-2 text-center text-blue-700 font-bold font-mono">مارس / سبتمبر</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">مصاعد الركاب والخدمات</td>
                    <td className="p-2 border-l border-slate-200 text-center">شهري</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">فحص الفرامل والأسلاك الفولاذية، تزييت التروس، اختبار الطوارئ</td>
                    <td className="p-2 text-center text-blue-700 font-bold font-mono">جدول أسبوعي دوري بالتنسيق</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">لوحات التوزيع الكهربائية الكبرى</td>
                    <td className="p-2 border-l border-slate-200 text-center">سنوي</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">مسح حراري بالأشعة، شد البراغي، اختبار قواطع الدائرة</td>
                    <td className="p-2 text-center text-blue-700 font-bold font-mono">ديسمبر (خلال الإغلاق السنوي)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 26 (Page 28) - نموذج كرت جودة فحص وقبول الأعمال الخارجية بعد الإصلاح */}
      <A4Page pageNum={28}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardList} title="النموذج الجودة: كرت قبول الأعمال" subtitle="قائمة تدقيق جودة إصلاح الأصول الكبرى وقبولها فنياً للتشغيل" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-center">
                قائمة فحص وقبول فني للأصول الكبرى (صيانة ميكانيكية وكهربائية)
              </div>

              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200">بند الاختبار والفحص</th>
                    <th className="p-2 border-l border-slate-200 text-center">المعيار القياسي المقبول</th>
                    <th className="p-2 border-l border-slate-200 text-center">النتيجة الفعلية للاختبار</th>
                    <th className="p-2 text-center">حالة القبول</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200">قياس سحب التيار الكهربائي للأصل</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">أقل من التيار الاسمي المقدر (FLA)</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-700 font-mono">42 أمبير (الاسمي 48)</td>
                    <td className="p-2 text-center text-green-600 font-bold">🟢 مقبول</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200">قياس درجة حرارة جسم المحرك</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">أقل من 65 درجة مئوية طوال التشغيل</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-700 font-mono">54 درجة مئوية بعد ساعتين</td>
                    <td className="p-2 text-center text-green-600 font-bold">🟢 مقبول</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200">فحص الاهتزاز والضوضاء</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">هادئ بدون ارتجاج غير طبيعي</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-700">اهتزاز خفيف طبيعي</td>
                    <td className="p-2 text-center text-green-600 font-bold">🟢 مقبول</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200">خلو الوصلات من تسرب الزيوت والغاز</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-600">صفر تهريب وتسريب بالكامل</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-700">تم الفحص برغوة الصابون ولا يوجد تسريب</td>
                    <td className="p-2 text-center text-green-600 font-bold">🟢 مقبول</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                <strong>التوجيه الفني النهائي:</strong> تم اختبار الأصل بكامل الحمل التشغيلي لمدة 120 دقيقة متواصلة وتبين كفاءة التبريد وسحب التيار والضوضاء، الأصل جاهز للاستخدام الفوري.
                <div className="flex justify-between pt-2">
                  <span>توقيع فني الاختبار: __________________</span>
                  <span>توقيع مشرف الاستلام الفني: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 27 (Page 29) - إدارة التقارير والاتصال مع الإدارة العليا وتتبع مؤشرات النجاح */}
      <A4Page pageNum={29}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Monitor} title="إدارة التقارير والاتصال مع الإدارة العليا" subtitle="قنوات توزيع المعلومات والتقارير الفنية والمالية للتحكم بالعمليات" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              يضمن نظام إعداد التقارير الدوري ربط المكتب الفني المركزي بالإدارة العليا، مما يعطى متخذ القرار رؤية كاملة حول النفقات وحالة الأصول:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-2">هيكلية إرسال التقارير التشغيلية والمالية:</h5>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <strong>📊 تقرير يومي (Dashboard)</strong>: لوحة تحكم فورية للإدارة توضح أعداد البلاغات المستلمة، الجارية، والمنجزة ومعدل التزام SLA لليوم.
                </li>
                <li>
                  <strong>📅 تقرير شهري مفصل (Monthly Report)</strong>: تحليل تفصيلي للتكاليف المالية لقطع الغيار والمقاولين وتوزيع المصاريف حسب الأصول والمباني.
                </li>
                <li>
                  <strong>🔍 تقرير ربع سنوي (Quarterly Analysis)</strong>: مراجعة شاملة لنسب الالتزام بالصيانة الوقائية، وتحديد الأصول "السيئة الأداء" (Bad Actors)، واقتراحات استبدالها.
                </li>
              </ul>
            </div>
            <CallOutBox type="tip" title="الأتمتة الكاملة للتقارير">
              بفضل ربط قاعدة بيانات GridFix بالكامل مع سيرفرات الويب، يتم توليد هذه التقارير آلياً بنسبة 100% دون أي تدخل بشري، مما يضمن دقة البيانات وسرعة الحصول عليها.
            </CallOutBox>
          </div>
        </div>
      </A4Page>
    </>
  );
}
