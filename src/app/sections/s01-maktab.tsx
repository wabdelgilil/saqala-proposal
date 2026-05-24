import { Building2, Target, Lightbulb, Users, ClipboardList, ShoppingCart, FileText, Activity, Shield, BarChart3, Monitor, BookOpen, Award, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import SequenceDiagram from "@/components/SequenceDiagram";
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
  { grade: "ضعيف 🟠", range: "1.5 - 2.4", action: "إنذار أخير + تخفيض الأعمال المسندة" },
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
  { module: "إدارة الأصول", desc: "تسجيل الأصول، توثيق تاريخ الصيانة، جدول الصيانة الوقائية", tasks: "تسجيل الأصول — توثيق تاريخ الصيانة — جدول الصيانة الوقائية" },
  { module: "أوامر العمل", desc: "إنشاء ومتابعة الأوامر، توزيع المهام، إغلاق وتوثيق", tasks: "إنشاء ومتابعة الأوامر — توزيع المهام — إغلاق وتوثيق" },
  { module: "إدارة العقود", desc: "متابعة العقود، مستوى الخدمة، تقييم الموردين", tasks: "متابعة العقود — مستوى الخدمة — تقييم الموردين" },
  { module: "إدارة فرق الصيانة", desc: "توزيع الفرق، تتبع الإنتاجية، إدارة الإجازات", tasks: "توزيع الفرق — تتبع الإنتاجية — إدارة الإجازات" },
  { module: "إدارة قطع الغيار", desc: "المخزون، طلبات الشراء، تحليل الاستهلاك", tasks: "المخزون — طلبات الشراء — تحليل الاستهلاك" },
  { module: "إدارة السلامة", desc: "تصاريح العمل، فحوصات السلامة، حوادث العمل", tasks: "تصاريح العمل — فحوصات السلامة — حوادث العمل" },
  { module: "التقارير ولوحات التحكم", desc: "مؤشرات الأداء، تقارير التكاليف، لوحات تحكم تنفيذية", tasks: "مؤشرات الأداء — تقارير التكاليف — لوحات تحكم تنفيذية" },
];

export default function Section01() {
  return (
    <section className="space-y-6 print:space-y-4">

      <SectionHeader icon={Building2} title="المكتب الفني لإدارة الصيانة المركزية" subtitle="نموذج تشغيلي مركزي لإدارة عمليات الصيانة في المجموعة" />

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          في الوضع الحالي، تعمل أنظمة الصيانة في مباني ومرافق المجموعة بشكل منفصل، حيث يمتلك كل موقع آلية تشغيل وإدارة خاصة به. يترتب على ذلك عدة تحديات تشغيلية:
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
          { id: "a1", label: "اختلاف إجراءات العمل", icon: "🔄" },
          { id: "a2", label: "صعوبة متابعة الأداء", icon: "📊" },
          { id: "a4", label: "تفاوت مستوى الخدمة", icon: "📉" },
          { id: "a6", label: "تكرار المشكلات", icon: "🔁" },
          { id: "a3", label: "غياب قاعدة بيانات", icon: "🗄️" },
          { id: "a5", label: "صعوبة تحليل التكاليف", icon: "💰" },
        ]}
        edges={[
          { from: "اسباب", to: "تحديات" },
          { from: "b1", to: "a1" }, { from: "b1", to: "a2" },
          { from: "b2", to: "a4" }, { from: "b2", to: "a6" },
          { from: "b3", to: "a3" }, { from: "b3", to: "a5" },
        ]}
      />

      <DataTable columns={challengesCols} rows={challengesRows} />

      <CallOutBox type="goal" title="الهدف من المكتب الفني">
        بناءً على ما تقدم، تظهر الحاجة إلى إنشاء مكتب فني مركزي لإدارة الصيانة يعمل كمركز تشغيل وتحكم ودعم فني لجميع مواقع المجموعة.
      </CallOutBox>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Target} title="أهداف إنشاء المكتب الفني" />
        <FlowChart
          nodes={[
            { id: "ع", label: "المكتب الفني", icon: "🏗️", color: "navy" },
            { id: "أ1", label: "توحيد الإجراءات", icon: "📋", sub: "ورفع كفاءة الفرق" },
            { id: "أ2", label: "سرعة الاستجابة", icon: "⚡", sub: "وقاعدة بيانات الأصول" },
            { id: "أ3", label: "التخطيط والجودة", icon: "📊", sub: "وإدارة العقود" },
            { id: "أ4", label: "الأمن والسلامة", icon: "🛡️", sub: "والتحول الرقمي" },
          ]}
          edges={[
            { from: "ع", to: "أ1" }, { from: "ع", to: "أ2" },
            { from: "ع", to: "أ3" }, { from: "ع", to: "أ4" },
          ]}
          dir="LR"
        />
        <DataTable columns={objectivesCols} rows={objectivesRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Lightbulb} title="فلسفة المكتب الفني" />
        <p className="text-slate-700 leading-relaxed mb-4">
          يعتمد المكتب الفني المقترح على هيكل تشغيلي مرن (Lean Structure)، وليس إدارة بيروقراطية كبيرة.
        </p>
        <FlowChart
          nodes={[
            { id: "p1", label: "الإدارة الذكية", icon: "🧠" }, { id: "p2", label: "الدعم الميداني", icon: "🛠️" },
            { id: "p3", label: "الإشراف", icon: "👁️" }, { id: "p4", label: "توحيد الإجراءات", icon: "📋" },
            { id: "p5", label: "استغلال الموارد", icon: "📦" },
            { id: "s1", label: "الإدارة الفنية", icon: "⚙️" }, { id: "s2", label: "التخطيط والمتابعة", icon: "📊" },
            { id: "s3", label: "الإشراف الميداني", icon: "🔍" }, { id: "s4", label: "الدعم الفني للمواقع", icon: "🆘" },
            { id: "مهندس", label: "مهندس المكتب الفني", icon: "👨‍💼", color: "navy" },
          ]}
          edges={[
            { from: "p1", to: "s1" }, { from: "p2", to: "s2" },
            { from: "p3", to: "s3" }, { from: "p4", to: "s1" },
            { from: "p5", to: "s4" },
            { from: "s1", to: "مهندس" }, { from: "s2", to: "مهندس" },
            { from: "s3", to: "مهندس" }, { from: "s4", to: "مهندس" },
          ]}
        />
        <DataTable columns={philosophyCols} rows={philosophyRows} />
        <CallOutBox type="tip" title="ملاحظة">
          يعتمد النظام على عدد محدود من المهندسين ذوي الكفاءة العالية، القادرين على الجمع بين الإدارة الفنية والتخطيط والإشراف الميداني والدعم الفني في آن واحد.
        </CallOutBox>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Users} title="الهيكل التشغيلي المقترح" />
        <FlowChart
          nodes={[
            { id: "ceo", label: "الإدارة العليا", icon: "🏛️", color: "green" },
            { id: "pm", label: "إدارة الصيانة المركزية", icon: "⚙️", color: "navy" },
            { id: "to1", label: "مهندس أول", icon: "👨‍💼", sub: "قائد الفريق" },
            { id: "to2", label: "مهندس تخطيط", icon: "📊", sub: "ومتابعة" },
            { id: "to3", label: "مهندس دعم فني", icon: "🛠️", sub: "وميداني" },
            { id: "proc1", label: "مشتريات تشغيلية", icon: "🛒" },
            { id: "proc2", label: "مشتريات رئيسية", icon: "🏢" },
            { id: "large", label: "مواقع كبيرة", icon: "🏗️", sub: "مشرف مقيم" },
            { id: "small", label: "مواقع صغيرة", icon: "🏠", sub: "إدارة عن بُعد" },
            { id: "cmms", label: "نظام CMMS", icon: "💻", color: "blue" },
          ]}
          edges={[
            { from: "ceo", to: "pm" },
            { from: "pm", to: "to1" }, { from: "pm", to: "to2" }, { from: "pm", to: "to3" },
            { from: "pm", to: "proc1" }, { from: "proc1", to: "proc2" },
            { from: "pm", to: "large" }, { from: "pm", to: "small" }, { from: "pm", to: "cmms" },
          ]}
        />
        <h4 className="text-md font-bold text-slate-700 mb-2">مهندسو إدارة الصيانة المركزية</h4>
        <p className="text-slate-600 mb-3"><strong>العدد المقترح:</strong> من 2 إلى 3 مهندسين</p>
        <DataTable columns={engCols} rows={engRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">المهام الرئيسية</h4>
        <DataTable columns={tasksCols} rows={tasksRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">طبيعة العمل</h4>
        <DataTable columns={workNatureCols} rows={workNatureRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ClipboardList} title="إدارة فرق الصيانة في المواقع" />
        <h4 className="text-md font-bold text-slate-700 mb-2">آلية الربط مع المكتب الفني</h4>
        <SequenceDiagram
          participants={[
            { id: "م", label: "المكتب الفني", icon: "🏗️", color: "navy" },
            { id: "ن", label: "نظام CMMS", icon: "💻", color: "blue" },
            { id: "ش", label: "المشرف", icon: "👨‍💼", color: "slate" },
            { id: "ف", label: "الفني", icon: "🔧", color: "slate" },
          ]}
          steps={[
            { from: "م", to: "ن", label: "تسجيل الأصول والجداول" },
            { from: "ن", to: "ش", label: "إرسال أوامر العمل" },
            { from: "ش", to: "ف", label: "توزيع المهام" },
            { from: "ف", to: "ن", label: "تحديث الحالة" },
            { from: "ن", to: "م", label: "متابعة الأداء" },
          ]}
        />
        <CallOutBox type="tip" title="ملاحظة هامة">
          لا يهدف النظام المركزي إلى إلغاء الفرق الحالية، بل إلى تطويرها وربطها ضمن منظومة موحدة.
        </CallOutBox>
        <DataTable columns={teamUtilCols} rows={teamUtilRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">تصنيف المواقع</h4>
        <DataTable columns={siteClassCols} rows={siteClassRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={ShoppingCart} title="إدارة المشتريات الفنية" />
        <h4 className="text-md font-bold text-slate-700 mb-2">المشتريات التشغيلية السريعة</h4>
        <DataTable columns={fastProcCols} rows={fastProcRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">المشتريات الرئيسية</h4>
        <DataTable columns={mainProcCols} rows={mainProcRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">سير عمل المشتريات الفنية</h4>
        <FlowChart
          nodes={[
            { id: "حاجة", label: "حاجة فنية", icon: "🔧", color: "amber" },
            { id: "قرار", label: "هل هي عاجلة؟", icon: "❓", color: "amber" },
            { id: "سريعة", label: "مشتريات تشغيلية سريعة", icon: "🛒" },
            { id: "فريق", label: "موظف المشتريات", icon: "👤", sub: "توفير مباشر" },
            { id: "تنفيذ", label: "تنفيذ الصيانة", icon: "✅", color: "green" },
            { id: "رئيسية", label: "مشتريات رئيسية", icon: "🏢" },
            { id: "إعداد", label: "المكتب الفني", icon: "📝", sub: "إعداد طلب الشراء" },
            { id: "مراجعة", label: "مراجعة المواصفات", icon: "🔍" },
            { id: "مشتريات", label: "إدارة المشتريات", icon: "🛍️", sub: "تنفيذ الشراء" },
            { id: "استلام", label: "استلام واعتماد فني", icon: "📦", color: "green" },
          ]}
          edges={[
            { from: "حاجة", to: "قرار" },
            { from: "قرار", to: "سريعة", label: "نعم" },
            { from: "سريعة", to: "فريق" },
            { from: "فريق", to: "تنفيذ" },
            { from: "قرار", to: "رئيسية", label: "لا" },
            { from: "رئيسية", to: "إعداد" },
            { from: "إعداد", to: "مراجعة" },
            { from: "مراجعة", to: "مشتريات" },
            { from: "مشتريات", to: "استلام" },
          ]}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={FileText} title="إدارة العقود والموردين" />
        <DataTable columns={contractMgmtCols} rows={contractMgmtRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">معايير تقييم الموردين</h4>
        <DataTable columns={vendorEvalCols} rows={vendorEvalRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">إدارة عقود مقاولي الصيانة</h4>
        <DataTable columns={ctrMgmtCols} rows={ctrMgmtRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">شروط العقد الأساسية مع المقاولين</h4>
        <DataTable columns={ctrTermsCols} rows={ctrTermsRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">بطاقة أداء المقاولين (Contractor Scorecard)</h4>
        <p className="text-xs text-slate-500 mb-3">تقييم شهري كمي لكل مقاول يتعامل مع المجموعة:</p>
        <DataTable columns={scorecardCols} rows={scorecardRows} />
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-3 mb-3">
          <p className="text-xs text-slate-700 font-mono" dir="ltr">النتيجة الشهرية = (درجة الجودة × 30%) + (درجة المواعيد × 25%) + (درجة التكلفة × 20%) + (درجة السلامة × 15%) + (درجة الاستجابة × 10%)</p>
        </div>
        <DataTable columns={scoreEvalCols} rows={scoreEvalRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Activity} title="مصفوفة المسؤوليات (RACI)" />
        <p className="text-slate-700 text-sm mb-3">
          تحدد المصفوفة مسؤولية كل دور في المنظومة المركزية: <strong>R</strong> المنفذ، <strong>A</strong> المسؤول، <strong>C</strong> يُستشار، <strong>I</strong> يُعلم.
        </p>
        <DataTable columns={raciCols} rows={raciRows} />
        <h4 className="text-md font-bold text-slate-700 mt-4 mb-2">دليل قراءة المصفوفة</h4>
        <DataTable columns={raciLegendCols} rows={raciLegendRows} />
        <CallOutBox type="critical" title="قاعدة ذهبية">
          كل مهمة لها A واحد فقط، هذا يمنع تعدد المسؤولين الذي يؤدي إلى تقاذف المسؤوليات.
        </CallOutBox>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={BookOpen} title="خطة تعاقب الكفاءات (Succession Planning)" />
        <p className="text-slate-700 text-sm mb-3">
          المكتب الفني يعتمد على عدد محدود من المهندسين ذوي الكفاءة العالية. في حال غياب أي منهم (استقالة، إجازة طويلة، مرض) يتعرض تشغيل المنظومة بالكامل للخطر.
        </p>
        <DataTable columns={successionCols} rows={successionRows} />
        <h4 className="text-md font-bold text-slate-700 mt-5 mb-2">آليات ضمان استمرارية الكفاءات</h4>
        <DataTable columns={continuityCols} rows={continuityRows} />
        <CallOutBox type="critical" title="قاعدة">
          لا يوجد شخص لا يمكن الاستغناء عنه — لكن فقدان الخبرة دون بديل جاهز يكلّف المجموعة 3 إلى 6 أشهر من التراجع التشغيلي.
        </CallOutBox>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Shield} title="الأمن والسلامة" />
        <DataTable columns={safetyRoleCols} rows={safetyRoleRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Monitor} title="النظام الرقمي (CMMS)" />
        <p className="text-slate-700 text-sm mb-3">
          يمثل نظام CMMS العنصر الرقمي المركزي لإدارة أعمال الصيانة:
        </p>
        <FlowChart
          nodes={[
            { id: "cmms", label: "نظام CMMS", icon: "💻", color: "navy" },
            { id: "a", label: "إدارة الأصول", icon: "🏗️" },
            { id: "b", label: "أوامر العمل", icon: "📋" },
            { id: "c", label: "إدارة العقود", icon: "📄" },
            { id: "d", label: "إدارة فرق الصيانة", icon: "👥" },
            { id: "e", label: "إدارة قطع الغيار", icon: "📦" },
            { id: "f", label: "إدارة السلامة", icon: "🛡️" },
            { id: "g", label: "التقارير ولوحات التحكم", icon: "📊" },
            { id: "a1", label: "تسجيل الأصول", sub: "توثيق + جدول وقائي" },
            { id: "b1", label: "إنشاء ومتابعة", sub: "توزيع + إغلاق" },
            { id: "c1", label: "متابعة العقود", sub: "مستوى الخدمة + تقييم" },
            { id: "d1", label: "توزيع الفرق", sub: "تتبع + إجازات" },
            { id: "e1", label: "المخزون", sub: "طلبات + تحليل" },
            { id: "f1", label: "تصاريح العمل", sub: "فحوصات + حوادث" },
            { id: "g1", label: "مؤشرات الأداء", sub: "تكاليف + لوحات تحكم" },
          ]}
          edges={[
            { from: "cmms", to: "a" }, { from: "cmms", to: "b" },
            { from: "cmms", to: "c" }, { from: "cmms", to: "d" },
            { from: "cmms", to: "e" }, { from: "cmms", to: "f" },
            { from: "cmms", to: "g" },
            { from: "a", to: "a1" }, { from: "b", to: "b1" },
            { from: "c", to: "c1" }, { from: "d", to: "d1" },
            { from: "e", to: "e1" }, { from: "f", to: "f1" },
            { from: "g", to: "g1" },
          ]}
        />
        <DataTable columns={cmmsCols} rows={cmmsRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={BarChart3} title="النتائج المتوقعة" />
        <DataTable columns={resultsCols} rows={resultsRows} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 print:p-4 shadow-sm">
        <SectionHeader icon={Award} title="خلاصة القسم الأول" />
        <FlowChart
          nodes={[
            { id: "r1", label: "فرق الصيانة", icon: "👥" },
            { id: "r2", label: "المعدات", icon: "🔧" },
            { id: "r3", label: "الخبرات", icon: "🧠" },
            { id: "o1", label: "إدارة مركزية", icon: "⚙️", color: "navy" },
            { id: "o2", label: "دعم فني", icon: "🛠️", color: "navy" },
            { id: "o3", label: "إجراءات موحدة", icon: "📋", color: "navy" },
            { id: "d1", label: "نظام CMMS", icon: "💻", color: "blue" },
            { id: "d2", label: "قاعدة بيانات", icon: "🗄️", color: "blue" },
            { id: "d3", label: "تقارير وتحكم", icon: "📊", color: "blue" },
            { id: "g1", label: "منظومة موحدة", icon: "🎯", color: "green" },
            { id: "g2", label: "قابلة للتوسع", icon: "📈", color: "green" },
          ]}
          edges={[
            { from: "r1", to: "o1" }, { from: "r2", to: "o2" }, { from: "r3", to: "o3" },
            { from: "o1", to: "d1" }, { from: "o2", to: "d2" }, { from: "o3", to: "d3" },
            { from: "d1", to: "g1" }, { from: "d2", to: "g1" }, { from: "d3", to: "g2" },
          ]}
        />
        <CallOutBox type="goal" title="خلاصة">
          يهدف المكتب الفني للصيانة المركزية إلى إنشاء منظومة تشغيل موحدة ومرنة، تقوم على الاستفادة من الموارد الحالية، والإدارة المركزية الذكية، والدعم الفني الميداني، والتحول الرقمي عبر نظام CMMS. وذلك بهدف رفع كفاءة التشغيل والصيانة بطريقة عملية قابلة للتوسع والتطوير.
        </CallOutBox>
        <CallOutBox type="critical" title="التوصية الإجرائية">
          البدء فوراً بتشكيل نواة المكتب الفني (مهندس أول + مهندس واحد)، على أن تكون أول مهامه حصر الأصول في مبنى واحد كنموذج تجريبي قبل التعميم على جميع المباني.
        </CallOutBox>
      </div>

    </section>
  );
}
