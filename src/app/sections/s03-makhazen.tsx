import { Package, Target, Lightbulb, Warehouse, BarChart3, AlertTriangle, Award, QrCode, ClipboardCheck, TrendingUp, Database } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import SequenceDiagram from "@/components/SequenceDiagram";
import A4Page from "@/components/A4Page";
import { storeRulesCols, storeRulesRows } from "@/lib/data-s2";

export default function Section03() {
  const challengesCols = [{ key: "n", label: "#" }, { key: "challenge", label: "التحدي" }, { key: "impact", label: "الأثر" }];
  const challengesRows = [
    { n: "1", challenge: "عدم توفر القطع وقت الحاجة", impact: "تأخير الإصلاحات وزيادة زمن التوقف" },
    { n: "2", challenge: "شراء متكرر لنفس القطع", impact: "هدر في الميزانية" },
    { n: "3", challenge: "تراكم مخزون غير مستخدم", impact: "تكلفة تخزين ورأس مال راكد" },
    { n: "4", challenge: "ضعف التتبع والجرد", impact: "خسائر غير مكتشفة" },
    { n: "5", challenge: "فقدان القطع أو سوء استخدامها", impact: "تكاليف إضافية" },
    { n: "6", challenge: "صعوبة تحديد الاحتياجات الفعلية", impact: "سوء التخطيط للشراء" },
  ];
  const goalsCols = [{ key: "goal", label: "الهدف" }, { key: "desc", label: "الوصف" }];
  const goalsRows = [
    { goal: "ضمان توفر قطع الغيار الحرجة", desc: "منع توقف التشغيل بسبب نقص القطع" },
    { goal: "تقليل الأعطال الناتجة عن نقص القطع", desc: "تحسين سرعة الإصلاح" },
    { goal: "رفع كفاءة إدارة المخزون", desc: "تحسين معدل دوران المخزون" },
    { goal: "تقليل الهدر والتكاليف", desc: "خفض المخزون الراكد" },
    { goal: "تحسين سرعة الاستجابة للصيانة", desc: "تقليل زمن الحصول على القطعة" },
    { goal: "تنظيم عمليات الصرف والشراء", desc: "توثيق كل حركة مخزون" },
    { goal: "إنشاء قاعدة بيانات دقيقة", desc: "ربط المخازن مع نظام الصيانة المركزي" },
  ];
  const philosophyCols = [{ key: "principle", label: "المبدأ" }, { key: "concept", label: "المفهوم" }];
  const philosophyRows = [
    { principle: "الربط بالصيانة", concept: "المخزون مرتبط بأوامر العمل — كل صرف مرتبط بمهمة" },
    { principle: "الشفافية", concept: "جميع الحركات مسجلة وقابلة للتتبع" },
    { principle: "الكفاءة", concept: "تحديد الحد الأدنى والتنبيه عند انخفاضه" },
    { principle: "الاستباقية", concept: "تحليل الاستهلاك للتنبؤ بالاحتياجات المستقبلية" },
  ];
  const structureCols = [{ key: "aspect", label: "المقارنة" }, { key: "central", label: "المخزن المركزي" }, { key: "sub", label: "المخازن الفرعية" }];
  const structureRows = [
    { aspect: "المحتوى", central: "قطع رئيسية واستراتيجية ومرتفعة القيمة", sub: "قطع استهلاكية سريعة الحركة" },
    { aspect: "الإدارة", central: "يدير المخزون العام والمشتريات", sub: "يخدم الموقع مباشرة" },
    { aspect: "التغذية", central: "يستقبل من المشتريات", sub: "يتزود من المخزن المركزي" },
    { aspect: "المتابعة", central: "متابعة الحد الأدنى والمخزون الراكد", sub: "متابعة الاستهلاك اليومي" },
  ];
  const criticalCols = [{ key: "part", label: "القطعة" }, { key: "impact", label: "الأثر" }, { key: "example", label: "أمثلة" }];
  const criticalRows = [
    { part: "كروت تحكم إلكترونية", impact: "توقف الأنظمة", example: "PLC، لوحات تحكم" },
    { part: "قطع أنظمة الحريق", impact: "مخاطر سلامة", example: "كواشف، صمامات" },
    { part: "ضواغط وأجزاء HVAC رئيسية", impact: "توقف التكييف المركزي", example: "ضواغط، مكثفات" },
    { part: "مضخات حريق ومياه رئيسية", impact: "تعطل الخدمات الحيوية", example: "مضخات، مواتير" },
  ];
  const classMatrixCols = [{ key: "class", label: "الفئة" }, { key: "cost", label: "التكلفة" }, { key: "lead", label: "زمن التوريد" }, { key: "critical", label: "الحرجة" }, { key: "strategy", label: "إستراتيجية الإدارة" }];
  const classMatrixRows = [
    { class: "A", cost: "عالية", lead: "طويل", critical: "حرجة", strategy: "مخزون استراتيجي ورقابة مشددة" },
    { class: "B", cost: "متوسطة", lead: "متوسط", critical: "متوسطة", strategy: "مخزون أمان مع حد أدنى" },
    { class: "C", cost: "منخفضة", lead: "قصير", critical: "عادية", strategy: "شراء حسب الطلب" },
  ];
  const registerCols = [{ key: "field", label: "الحقل" }, { key: "desc", label: "الوصف" }];
  const registerRows = [
    { field: "الكود", desc: "رمز تعريف فريد لكل قطعة" },
    { field: "الوصف", desc: "اسم ومواصفات القطعة" },
    { field: "الشركة المصنعة", desc: "Manufacturer" },
    { field: "المورد", desc: "المورد المعتمد" },
    { field: "الكمية", desc: "الرصيد الحالي والحد الأدنى والأقصى" },
    { field: "الموقع", desc: "المخزن والرف والخانة" },
  ];
  const trackCols = [{ key: "data", label: "البيانات المسجلة" }, { key: "purpose", label: "الغرض" }];
  const trackRows = [
    { data: "من قام بالصرف؟", purpose: "تحديد المسؤولية" },
    { data: "لأي أصل؟", purpose: "ربط التكلفة بالأصل" },
    { data: "لأي أمر عمل؟", purpose: "ربط المصروفات بالمهمة" },
    { data: "تاريخ الحركة", purpose: "إمكانية الرجوع لأي حركة سابقة" },
  ];
  const inventoryCols = [{ key: "type", label: "نوع الجرد" }, { key: "freq", label: "التكرار" }, { key: "purpose", label: "الغرض" }];
  const inventoryRows = [
    { type: "جرد سريع", freq: "أسبوعي", purpose: "للقطع الحرجة وسريعة الحركة" },
    { type: "جرد جزئي", freq: "شهري", purpose: "لعينة مختارة من الأصناف" },
    { type: "جرد كامل", freq: "سنوي", purpose: "مطابقة المخزون الفعلي مع النظام" },
  ];
  const workCycleCols = [{ key: "step", label: "الخطوة" }, { key: "event", label: "الحدث" }];
  const workCycleRows = [
    { step: "1", event: "الفني يستلم أمر العمل من النظام" },
    { step: "2", event: "النظام يعرض قطع الغيار المطلوبة" },
    { step: "3", event: "الفني يتجه للمخزن للصرف" },
    { step: "4", event: "أمين المخزن يسجل الصرف ويربطه بأمر العمل" },
    { step: "5", event: "المخزون يُحدث تلقائيا" },
    { step: "6", event: "الفني ينفذ الإصلاح ويغلق الأمر" },
    { step: "7", event: "النظام ينبه عند انخفاض المخزون" },
  ];
  const officeRoleCols = [{ key: "task", label: "المهمة" }, { key: "desc", label: "الوصف" }];
  const officeRoleRows = [
    { task: "مراجعة الاحتياجات الفنية", desc: "تحديد الأولويات للقطع المطلوبة" },
    { task: "اعتماد طلبات الشراء", desc: "الموافقة الفنية قبل الرفع" },
    { task: "متابعة القطع الحرجة", desc: "التأكد من توفر القطع الحيوية" },
    { task: "تحليل الاستهلاك", desc: "دراسة أنماط الاستهلاك لتحسين التخطيط" },
    { task: "مراجعة التكاليف", desc: "مراقبة تكاليف قطع الغيار" },
  ];
  const barcodeCols = [{ key: "feature", label: "الميزة" }, { key: "benefit", label: "الفائدة" }];
  const barcodeRows = [
    { feature: "سرعة الجرد", benefit: "مسح ضوئي بدلا من العد اليدوي" },
    { feature: "سرعة الصرف", benefit: "مسح القطعة وربطها بأمر العمل" },
    { feature: "تقليل الأخطاء", benefit: "إدخال دقيق دون تدخل بشري" },
    { feature: "تتبع القطع", benefit: "معرفة تاريخ وحركة كل قطعة" },
    { feature: "مواقع التخزين", benefit: "تحديد الرف والخانة بدقة" },
  ];
  const problemCols = [{ key: "challenge", label: "التحدي" }, { key: "solution", label: "الحل" }, { key: "priority", label: "الأولوية" }];
  const problemRows = [
    { challenge: "ضعف بيانات المخزون الحالية", solution: "حصر شامل وإعادة تسجيل", priority: "عاجلة" },
    { challenge: "قطع غير مسجلة", solution: "حملة حصر ميدانية", priority: "عاجلة" },
    { challenge: "اختلاف طرق التخزين", solution: "توحيد إجراءات التخزين والترميز", priority: "عاجلة" },
    { challenge: "تكرار الشراء", solution: "قاعدة بيانات موحدة مع تنبيهات", priority: "متوسطة" },
    { challenge: "عدم وجود أكواد موحدة", solution: "وضع نظام ترميز موحد", priority: "متوسطة" },
  ];
  const resultsCols = [{ key: "n", label: "#" }, { key: "result", label: "النتيجة" }, { key: "measure", label: "مؤشر القياس" }];
  const resultsRows = [
    { n: "1", result: "تقليل الأعطال الناتجة عن نقص القطع", measure: "انخفاض أعطال نقص القطع" },
    { n: "2", result: "تحسين سرعة الاستجابة", measure: "متوسط وقت الحصول على القطعة" },
    { n: "3", result: "تقليل الهدر والتكاليف", measure: "انخفاض تكاليف المخزون الراكد" },
    { n: "4", result: "رفع كفاءة إدارة المخزون", measure: "تحسين معدل دوران المخزون" },
    { n: "5", result: "تحسين التخطيط للشراء", measure: "دقة توقعات الاحتياج" },
  ];

  return (
    <>
      {/* Page 22 */}
      <A4Page pageNum={51}>
        <SectionHeader icon={Package} title="نظام إدارة مخازن قطع الغيار" subtitle="إدارة موحدة وفعالة للمخزون في جميع المواقع" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              تعد مخازن قطع الغيار من أهم العناصر المؤثرة على كفاءة أعمال الصيانة والتشغيل. يعتمد نجاح أي منظومة صيانة بشكل مباشر على توفر القطع المناسبة في الوقت المناسب، وسهولة الوصول إليها، وتنظيم عمليات الصرف والشراء، والتحكم في التكاليف والمخزون.
            </p>
          </div>

          <CallOutBox type="critical" title="التحديات في الأنظمة التقليدية">
            <DataTable columns={challengesCols} rows={challengesRows} />
          </CallOutBox>

          <CallOutBox type="goal" title="الهدف">
            بناء على ما تقدم، تنشأ الحاجة إلى إنشاء نظام مركزي منظم لإدارة مخازن وقطع الغيار ضمن منظومة الصيانة المركزية.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 23 */}
      <A4Page pageNum={52}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Target} title="أهداف النظام المركزي للمخازن" />
            <DataTable columns={goalsCols} rows={goalsRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Lightbulb} title="فلسفة النظام المقترح" />
            <p className="text-slate-700 leading-relaxed mb-4 text-xs">
              يقوم النظام على إنشاء منظومة مخازن مركزية ذكية مرتبطة مباشرة بأعمال الصيانة والتشغيل، بحيث لا تعمل المخازن بشكل منفصل عن الصيانة، بل تكون جزءا أساسيا من دورة التشغيل اليومية.
            </p>
            <DataTable columns={philosophyCols} rows={philosophyRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 24 */}
      <A4Page pageNum={53}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Warehouse} title="الهيكل المقترح للمخازن" />
            <DataTable columns={structureCols} rows={structureRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">آلية العمل بين المخازن</h4>
            <FlowChart
              nodes={[
                { id: "مركزي", label: "المخزن المركزي", icon: "🏗️" },
                { id: "فرعي", label: "المخازن الفرعية", icon: "🏠" },
                { id: "محتوى_مركزي", label: "قطع رئيسية وغالية", icon: "💎" },
                { id: "محتوى_فرعي", label: "قطع استهلاكية يومية", icon: "📦" },
              ]}
              edges={[
                { from: "مركزي", to: "محتوى_مركزي" }, { from: "فرعي", to: "محتوى_فرعي" },
                { from: "مركزي", to: "فرعي" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 25 */}
      <A4Page pageNum={54}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Database} title="تصنيف قطع الغيار" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">قطع غيار حرجة</h4>
            <DataTable columns={criticalCols} rows={criticalRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مصفوفة التصنيف الفئوي (ABC Analysis)</h4>
            <DataTable columns={classMatrixCols} rows={classMatrixRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 26 */}
      <A4Page pageNum={55}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={ClipboardCheck} title="إدارة المخزون" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">تسجيل وتوثيق القطع</h4>
            <DataTable columns={registerCols} rows={registerRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">تحديد الحد الأدنى للمخزون</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "مخزون", label: "مستوى المخزون", icon: "📊", color: "navy" },
                { id: "أعلى", label: "أعلى من الحد — طبيعي", icon: "✅", color: "green" },
                { id: "إنذار", label: "عند الحد الأدنى — إعادة طلب", icon: "⚠️", color: "amber" },
                { id: "خطر", label: "أقل من الحد — شراء عاجل", icon: "🚨", color: "red" },
              ]}
              edges={[
                { from: "مخزون", to: "أعلى" }, { from: "مخزون", to: "إنذار" },
                { from: "مخزون", to: "خطر" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 27 */}
      <A4Page pageNum={56}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">متابعة الحركة والجرد</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-[10px] font-bold text-slate-500 mb-1">بيانات تتبع الحركة</h5>
                <DataTable columns={trackCols} rows={trackRows} />
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-slate-500 mb-1">خطة الجرد الدوري</h5>
                <DataTable columns={inventoryCols} rows={inventoryRows} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={TrendingUp} title="الربط بين المخازن وأوامر العمل" />
            <SequenceDiagram
              participants={[
                { id: "ف", label: "الفني", icon: "🔧", color: "slate" },
                { id: "ن", label: "نظام CMMS", icon: "💻", color: "blue" },
                { id: "م", label: "أمين المخزن", icon: "📦", color: "green" },
              ]}
              steps={[
                { from: "ف", to: "ن", label: "طلب الصرف" },
                { from: "ن", to: "م", label: "تسجيل صرف القطع" },
                { from: "م", to: "ن", label: "تحديث المخزون" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 27.5 (Work Cycle Steps) */}
      <A4Page pageNum={57}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={TrendingUp} title="دورة عمل الصرف وربطه بأمر العمل" />
            <DataTable columns={workCycleCols} rows={workCycleRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 28 */}
      <A4Page pageNum={58}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BarChart3} title="العلاقة بين المخازن والمشتريات" />
            <FlowChart
              nodes={[
                { id: "انخفاض", label: "انخفاض المخزون للحد الأدنى", icon: "📉", color: "amber" },
                { id: "تنبيه", label: "تنبيه تلقائي", icon: "🔔" },
                { id: "مراجعة", label: "مراجعة المكتب الفني", icon: "🔍" },
                { id: "مشتريات", label: "تنفيذ الشراء", icon: "🛒" },
                { id: "استلام", label: "استلام وإضافة للمخزون", icon: "📦" },
              ]}
              edges={[
                { from: "انخفاض", to: "تنبيه" },
                { from: "تنبيه", to: "مراجعة" },
                { from: "مراجعة", to: "مشتريات" },
                { from: "مشتريات", to: "استلام" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 28.5 */}
      <A4Page pageNum={59}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-2">دور المكتب الفني في إدارة المخزون</h4>
                <DataTable columns={officeRoleCols} rows={officeRoleRows} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-2">تأثير إدخال الباركود و QR Code</h4>
                <DataTable columns={barcodeCols} rows={barcodeRows} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="التحديات المتوقعة والحلول" />
            <DataTable columns={problemCols} rows={problemRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 29 */}
      <A4Page pageNum={60}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BarChart3} title="النتائج المتوقعة" />
            <DataTable columns={resultsCols} rows={resultsRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Award} title="خلاصة القسم الثالث" />
            <CallOutBox type="goal" title="خلاصة">
              يمثل نظام إدارة مخازن وقطع الغيار أحد الأعمدة الرئيسية لنجاح منظومة الصيانة المركزية. يساهم النظام في ضمان توفر الاحتياجات التشغيلية، وتقليل التكاليف والهدر، وتحسين التخطيط والمتابعة.
            </CallOutBox>
            <CallOutBox type="critical" title="التوصية الإجرائية">
              البدء بحصر قطع الغيار الحرجة (تصنيف A) في موقع واحد، وتسجيلها في نظام CMMS مع تحديد الحد الأدنى للمخزون، كبداية تجريبية قبل تعميم النظام على جميع المواقع.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 30 (Page 40) - النموذج 7: محضر فحص واستلام قطع الغيار */}
      <A4Page pageNum={61}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="النموذج 7: محضر فحص واستلام قطع الغيار" subtitle="إجراء استلام المواد الموردة للمخازن ومطابقتها للمواصفات الفنية وتوليد الباركود" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-2 gap-2 font-bold text-center">
                <div>رقم المحضر: GRN-2026-1049</div>
                <div>رقم أمر الشراء: PO-2026-8902</div>
              </div>
              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>اسم المورد:</strong> مؤسسة الرشيد للمعدات الصناعية</div>
                  <div><strong>تاريخ الاستلام والتدقيق:</strong> 25-05-2026</div>
                </div>
                <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                      <th className="p-1.5 border-l border-slate-200">الوصف الفني للمادة الموردة</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">الكمية المطلوبة</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">الكمية المستلمة</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">نتيجة الفحص الفني</th>
                      <th className="p-1.5 text-center">الترميز (الباركود المولد)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">مضخات مياه طاردة مركزية 2 حصان (Pedrollo)</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">5 وحدات</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">5 وحدات</td>
                      <td className="p-1.5 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق ومقبول</td>
                      <td className="p-1.5 text-center font-mono text-slate-600">PMP-PED-2HP-01</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">قواطع تيار كهربائي ثلاثية الطور 100 أمبير (Schneider)</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">10 وحدات</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">10 وحدات</td>
                      <td className="p-1.5 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق ومقبول</td>
                      <td className="p-1.5 text-center font-mono text-slate-600">ELC-SCH-100A-02</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                  <strong>قرار الفحص النهائي:</strong> المواد مطابقة للأكواد المطلوبة وتعمل بكفاءة، تم لصق الباركود وإدخالها على الرفوف المحددة في CMMS.
                  <div className="flex justify-between pt-2">
                    <span>توقيع أمين المخزن: __________________</span>
                    <span>توقيع مهندس الفحص الفني: __________________</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 31 (Page 41) - النموذج 8: بطاقة جرد المخزن الفرعي الدوري */}
      <A4Page pageNum={62}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Warehouse} title="النموذج 8: بطاقة جرد المخازن الدورية" subtitle="استمارة مطابقة الرصيد الدفتري المسجل في CMMS مع الجرد الفعلي للمواد والقطع" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>المخزن المقيّم: مخزن مستودع أدوية جدة</div>
                <div>المسؤول: أ. خالد العمري</div>
                <div>نوع الجرد: جرد دوري ربع سنوي</div>
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200">كود القطعة</th>
                    <th className="p-2 border-l border-slate-200">الوصف الفني للقطعة</th>
                    <th className="p-2 border-l border-slate-200 text-center">الرصيد في CMMS</th>
                    <th className="p-2 border-l border-slate-200 text-center">الرصيد الفعلي</th>
                    <th className="p-2 border-l border-slate-200 text-center">الفارق</th>
                    <th className="p-2 text-center">الإجراء التصحيحي المعتمد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-mono">FLT-AC-24X24</td>
                    <td className="p-2 border-l border-slate-200">فلتر هواء مكيف 24*24 بوصة</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">150</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">150</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-green-600 font-bold">0</td>
                    <td className="p-2 text-slate-500 text-[9px]">لا يوجد انحراف، تطابق كامل.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-mono">CON-SCH-40A</td>
                    <td className="p-2 border-l border-slate-200">كونتاكتور مكيف 40 أمبير</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">24</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">23</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-red-600 font-bold">-1</td>
                    <td className="p-2 text-red-800 text-[9px] font-bold">عجز قطعة. تم تعديل الرصيد وجار التحقيق.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-mono">GAS-R410A</td>
                    <td className="p-2 border-l border-slate-200">أسطوانة غاز تبريد R410A (كيلو)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">12</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">12</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono text-green-600 font-bold">0</td>
                    <td className="p-2 text-slate-500 text-[9px]">لا يوجد انحراف، تطابق كامل.</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                <strong>ملاحظة لجنة الجرد:</strong> نسبة دقة التطابق الإجمالية في هذا الفرع بلغت 98.2% وهي نسبة ممتازة ومطابقة للمستهدف السنوي لقسم المخازن.
                <div className="flex justify-between pt-2">
                  <span>توقيع مسؤول الجرد: __________________</span>
                  <span>اعتماد مدير المخازن: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 32 (Page 42) - معادلة المخزون الآمن (Safety Stock) ومثال عملي */}
      <A4Page pageNum={63}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={BarChart3} title="معادلة وحسابات مخزون الأمان" subtitle="مثال عملي تطبيقي بالأرقام والمعادلات لتفادي نقص المواد التشغيلية الحرجة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              لحساب مخزون الأمان (Safety Stock) ونقطة إعادة الطلب (Reorder Point) للقطع الاستهلاكية بشكل علمي ودقيق يمنع التوقف، يتم تطبيق المعادلات التالية في نظام CMMS:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-3 font-mono text-[10px]" dir="ltr">
              <div>
                <strong>1. Safety Stock (SS) Formula:</strong>
                <div className="text-blue-700 font-bold mt-1">SS = (Max Daily Usage × Max Lead Time) - (Average Daily Usage × Average Lead Time)</div>
              </div>
              <hr className="border-slate-200" />
              <div>
                <strong>2. Example: AC Air Filters (FLT-AC-24X24) for Jeddah Head Office:</strong>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700">
                  <li>Average Daily Usage = 5 filters/day</li>
                  <li>Max Daily Usage (during peak summer) = 12 filters/day</li>
                  <li>Average Lead Time (Supplier delivery) = 4 days</li>
                  <li>Max Lead Time = 8 days</li>
                </ul>
                <div className="text-blue-700 font-bold mt-1">SS Calculation:</div>
                <div className="text-slate-900 font-semibold">SS = (12 * 8) - (5 * 4) = 96 - 20 = 76 filters</div>
                <div className="text-green-700 font-bold mt-1">Safety Stock target in CMMS: 76 units</div>
              </div>
              <hr className="border-slate-200" />
              <div>
                <strong>3. Reorder Point (ROP) Formula:</strong>
                <div className="text-blue-700 font-bold mt-1">ROP = (Average Daily Usage × Average Lead Time) + SS</div>
                <div className="text-slate-900 font-semibold mt-1">ROP = (5 * 4) + 76 = 20 + 76 = 96 filters</div>
                <div className="text-green-700 font-bold mt-1">CMMS Auto-Trigger: System automatically creates PO when stock drops to 96 units.</div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 33 (Page 43) - دليل تخزين المواد الفنية الحساسة (SOP) */}
      <A4Page pageNum={64}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Warehouse} title="دليل تخزين المواد الفنية الحساسة" subtitle="إجراءات العمل المعيارية (SOP) لتخزين وحفظ المكونات والأكواد ومنع التلف في مستودعات المجموعة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed font-semibold">
              يجب حفظ المواد وقطع الغيار الحساسة للظروف البيئية في ظروف متحكم بها بدقة لتجنب التآكل وفقدان الخصائص الفنية:
            </p>
            <div className="grid grid-cols-2 gap-4 text-[10px]">
              <div className="border border-slate-200 p-3 rounded-lg bg-slate-50">
                <h5 className="font-bold text-navy-600 mb-1">📟 كروت التحكم الإلكترونية والـ PLC:</h5>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>تخزين في عبوات مضادة للشحنات الساكنة (Anti-static Bags).</li>
                  <li>رطوبة نسبية لا تتجاوز 40-50% لمنع التآكل.</li>
                  <li>درجة حرارة ثابتة (20 - 24 درجة مئوية).</li>
                </ul>
              </div>
              <div className="border border-slate-200 p-3 rounded-lg bg-slate-50">
                <h5 className="font-bold text-navy-600 mb-1">🛢️ زيوت التزييت والمواد التشغيلية:</h5>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>حفظ العبوات في وضع رأسي محكم لمنع دخول الرطوبة والهواء.</li>
                  <li>الابتعاد التام عن أشعة الشمس المباشرة أو مصادر الحرارة والشرر.</li>
                  <li>الالتزام بسياسة الصرف الأقدم فالأحدث (FIFO).</li>
                </ul>
              </div>
            </div>
            <CallOutBox type="critical" title="فحص صلاحية البطاريات">
              يُمنع تخزين بطاريات أنظمة الإنذار والمولدات الاحتياطية بدون شحن دوري لأكثر من 6 أشهر؛ ويجب فحص الفولتية والتاريخ المكتوب عند الاستلام وقبل تسليمها للفنيين.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 34 (Page 44) - خارطة المخازن الفرعية وهيكل الصلاحيات */}
      <A4Page pageNum={65}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Warehouse} title="خارطة المخازن الفرعية وهيكل الصلاحيات" subtitle="توزيع المخازن في فروع ومستودعات مجموعة سقالة والمسؤولين عنها وصلاحيات الصرف المعتمدة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              يتم توزيع المخازن الفرعية جغرافياً لتخدم المواقع الكبرى للمجموعة، مع ربطها بشبكة موحدة تحت إدارة أمناء مخازن مؤهلين يمتلكون صلاحيات صرف مشروطة:
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  <th className="p-2 border-l border-slate-200">المستودع الفرعي</th>
                  <th className="p-2 border-l border-slate-200 text-center">أمين المخزن المسؤول</th>
                  <th className="p-2 border-l border-slate-200">نطاق الخدمة التشغيلية</th>
                  <th className="p-2 text-center">حد صلاحية الصرف المباشر</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">مخزن فرع جدة الإداري</td>
                  <td className="p-2 border-l border-slate-200 text-center">أ. خالد العمري</td>
                  <td className="p-2 border-l border-slate-200">يخدم مجمع مكاتب الحمراء، مركز البيانات، الفرع الإقليمي.</td>
                  <td className="p-2 text-center font-mono font-bold text-green-700">حتى 3,000 ريال</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">مخزن مستودع الأدوية - جدة</td>
                  <td className="p-2 border-l border-slate-200 text-center">أ. محمد الحربي</td>
                  <td className="p-2 border-l border-slate-200">يخدم مستودع الأدوية المبرد وغرف التجميد الكبرى حصرياً.</td>
                  <td className="p-2 text-center font-mono font-bold text-green-700">حتى 5,000 ريال (طارئ)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">مخزن مستودع السلي - الرياض</td>
                  <td className="p-2 border-l border-slate-200 text-center">أ. فهد القحطاني</td>
                  <td className="p-2 border-l border-slate-200">يخدم مستودع الرياض وفروع المنطقة الوسطى.</td>
                  <td className="p-2 text-center font-mono font-bold text-green-700">حتى 3,000 ريال</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="tip" title="صلاحيات الصرف الطارئ">
              في الحالات الطارئة جداً (أعطال مستودعات التبريد)، يمتلك أمين المخزن صلاحية تجاوز حد الصرف المالي بشرط ربط الصرف برقم بلاغ طارئ معتمد مسبقاً من المكتب الفني.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 35 (Page 45) - دراسة حالة عملية: تأمين قطع غيار حرجة */}
      <A4Page pageNum={66}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="دراسة حالة: تأمين قطع غيار حرجة في وقت قياسي" subtitle="قصة نجاح في السيطرة على عطل التبريد بمستودع الرياض عبر الربط اللوجستي السريع" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-navy-600">تفاصيل التدخل اللوجستي السريع للمخازن:</h4>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px] text-slate-700">
              <p>
                <strong>الوضع (02:00 م)</strong>: تعرض ضاغط تبريد رئيسي (Chiller Compressor) للتعطل المفاجئ في مستودع أدوية الرياض أثناء ذروة حرارة الصيف (46م).
              </p>
              <p>
                <strong>المشكلة</strong>: تبين أن مخزن الرياض الفرعي لا يحتوي على الضاغط المطلوب كقطعة احتياطية بسبب نفاد الكمية في الأسبوع الماضي، وزمن التوريد من الوكيل المعتمد يستغرق 5 أيام عمل.
              </p>
              <p>
                <strong>الحل اللوجستي (02:15 م)</strong>: استعلم المكتب الفني عبر نظام CMMS الموحد عن رصيد القطعة في المخازن الأخرى، وتبين وجود وحدة واحدة في مخزن جدة المركزي. تم تعميد نقل القطعة فوراً عبر النقل السريع الجوي الخاص بالمجموعة.
              </p>
              <p>
                <strong>النتيجة (09:00 ص اليوم التالي)</strong>: وصول الضاغط لمطار الرياض واستلامه الفوري، والانتهاء من التركيب والتشغيل واختبار ضغط الفريون بنجاح خلال 18 ساعة فقط من لحظة وقوع العطل الأصلي.
              </p>
            </div>
            <CallOutBox type="goal" title="القيمة التشغيلية المحققة">
              أنقذت هذه العملية شحنة أدوية حيوية تفوق قيمتها التشغيلية والمالية مليون ريال سعودي بفضل مرونة وسرعة الاستعلام والربط بين المخازن الفروع في نظام CMMS الموحد.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 36 (Page 46) - مؤشرات أداء إدارة المخازن والمشتريات */}
      <A4Page pageNum={67}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={BarChart3} title="مؤشرات أداء إدارة المخازن والمشتريات" subtitle="معايير قياس كفاءة دورة التوريد والصرف ودقة جرد قطع الغيار في المجموعة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              يقوم المكتب الفني المركزي بمراجعة مؤشرات الأداء (KPIs) التالية شهرياً لضمان كفاءة أداء المخازن وتوافر المواد التشغيلية بأقل تكلفة ممكنة:
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  <th className="p-2 border-l border-slate-200">مؤشر الأداء الرئيسي (KPI)</th>
                  <th className="p-2 border-l border-slate-200 text-center">طريقة وعينة الحساب</th>
                  <th className="p-2 border-l border-slate-200 text-center">النسبة المستهدفة سنوياً</th>
                  <th className="p-2 text-center">الأثر المباشر على عمليات الصيانة</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">نسبة دقة المخزون (Inventory Accuracy)</td>
                  <td className="p-2 border-l border-slate-200 text-center">(المطابق فعلياً / المسجل دفترياً) * 100</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono font-bold text-green-700">&gt; 98%</td>
                  <td className="p-2 text-slate-600">منع حدوث عجز مفاجئ لقطع الغيار أثناء الأعطال الحرجة.</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">معدل تلبية الطلبات (Fill Rate)</td>
                  <td className="p-2 border-l border-slate-200 text-center">(القطع المتوفرة فوراً / الطلبات الكلية) * 100</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono font-bold text-green-700">&gt; 90%</td>
                  <td className="p-2 text-slate-600">تسريع وتيرة الإصلاح وعدم تأخير الفنيين بانتظار الشراء.</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">معدل دوران المخزون (Turnover Rate)</td>
                  <td className="p-2 border-l border-slate-200 text-center">تكلفة المواد المنصرفة / متوسط قيمة المخزون</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono font-bold text-blue-700">4 إلى 6 مرات / سنة</td>
                  <td className="p-2 text-slate-600">تقليل رأس المال الراكد ومنع تقادم وتلف القطع بالمخزن.</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="tip" title="تقارير الأداء">
              يتم إصدار تقرير شهري يوضح نسب الانحراف والعجز في كل مخزن فرعي وتوجيهه لمدير الصيانة لإجراء التدقيق اللازم.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 37 (Page 47) - استمارة التخلص من المواد التالفة والراكدة */}
      <A4Page pageNum={68}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="استمارة التخلص من المواد التالفة والراكدة" subtitle="نموذج تصنيف المواد والمعدات المستهلكة (Scrap) وإجازة التخلص منها أو بيعها" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-2 gap-2 font-bold text-center">
                <div>رقم طلب التخريد: SCRP-2026-042</div>
                <div>التاريخ: 25-05-2026</div>
              </div>
              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>موقع المواد:</strong> الورشة المركزية - مستودع الخردة</div>
                  <div><strong>اللجنة الفنية المشرفة:</strong> م. أحمد المطيري + أمين المخزن الرئيسي</div>
                </div>
                <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                      <th className="p-1.5 border-l border-slate-200">المادة / الأصل المراد تخريده</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">الكمية</th>
                      <th className="p-1.5 border-l border-slate-200">سبب التخريد والاستبعاد الفني</th>
                      <th className="p-1.5 text-center">طريقة التخلص الموصى بها</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">ضواغط تكييف قديمة محترقة الملفات</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">14 وحدة</td>
                      <td className="p-1.5 border-l border-slate-200">تالفة بالكامل وتكلفة إعادة لف الملفات تفوق 80% من قيمة الضاغط الجديد.</td>
                      <td className="p-1.5 text-center font-bold text-amber-700">بيع كخردة (Scrap) بالمزاد</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">بطاريات حمضية قديمة لأنظمة إنذار الحريق</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">32 وحدة</td>
                      <td className="p-1.5 border-l border-slate-200">انتهاء العمر الافتراضي وتاريخ الصلاحية وتلف كيميائي داخلي.</td>
                      <td className="p-1.5 text-center font-bold text-red-600">إرجاع للوكيل للتخلص البيئي الآمن</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                  <strong>اعتماد اللجنة الفنية المشتركة:</strong> المواد المذكورة أعلاه غير صالحة للتشغيل أو الاستخدام وتعتبر خردة، ونوصي بإتمام التخلص منها حسب اللوائح البيئية والمالية المعتمدة بالمجموعة.
                  <div className="flex justify-between pt-2">
                    <span>توقيع اللجنة المالية: __________________</span>
                    <span>اعتماد مدير المشتريات: __________________</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>
    </>
  );
}
