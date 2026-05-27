import { Users, Target, Lightbulb, Database, Building2, Briefcase, Gauge, Award, AlertTriangle, Clock, FileText, ListChecks, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section02() {
  const challengesCols = [{ key: "n", label: "#" }, { key: "challenge", label: "التحدي" }, { key: "impact", label: "الأثر التشغيلي" }];
  const challengesRows = [
    { n: "1", challenge: "تفاوت مستوى الأداء بين المواقع", impact: "صعوبة ضمان جودة موحدة" },
    { n: "2", challenge: "ضعف الاستفادة من الموارد البشرية", impact: "تكرار التخصصات دون حاجة حقيقية" },
    { n: "3", challenge: "أوقات خمول مقابل ضغط في مواقع أخرى", impact: "عدم توازن توزيع العمل" },
    { n: "4", challenge: "صعوبة الاستفادة من التخصصات المشتركة", impact: "الحاجة لمقاولين خارجيين" },
    { n: "5", challenge: "زيادة الاعتماد على المقاولين الخارجيين", impact: "ارتفاع التكاليف وضعف السيطرة على الجودة" },
    { n: "6", challenge: "عدم مرونة في تغطية الأعطال الطارئة", impact: "طول فترة التوقف" },
  ];
  const goalsCols = [{ key: "goal", label: "الهدف" }, { key: "mechanism", label: "آلية التحقيق" }];
  const goalsRows = [
    { goal: "إنشاء فريق صيانة موحد", mechanism: "جميع الفنيين تحت مظلة إدارة مركزية واحدة" },
    { goal: "رفع كفاءة استغلال الفنيين", mechanism: "توزيع العمل حسب الاحتياج الفعلي" },
    { goal: "تحسين توزيع التخصصات", mechanism: "الاستفادة من التخصصات النادرة على مستوى المجموعة" },
    { goal: "سرعة الاستجابة للأعطال", mechanism: "تحريك الفرق حسب الأولوية والموقع" },
    { goal: "تقليل الاعتماد على المقاولين", mechanism: "تنفيذ أكبر قدر من الأعمال داخليا" },
    { goal: "تحسين جودة الصيانة", mechanism: "إشراف مركزي وتوحيد معايير العمل" },
    { goal: "رفع كفاءة التخطيط", mechanism: "جداول عمل وجدولة ذكية عبر نظام CMMS" },
  ];
  const techDbCols = [{ key: "field", label: "الحقل" }, { key: "purpose", label: "الغرض" }];
  const techDbRows = [
    { field: "التخصص", purpose: "كهرباء، تكييف، سباكة، أنظمة سلامة..." },
    { field: "مستوى الخبرة", purpose: "مبتدئ — متوسط — خبير" },
    { field: "الموقع الأساسي", purpose: "الموقع الافتراضي للفني" },
    { field: "المهارات الفنية", purpose: "المهارات المتخصصة الإضافية" },
    { field: "الشهادات", purpose: "شهادات مهنية سارية (LOTO، عمل على ارتفاع...)" },
    { field: "التقييم الفني", purpose: "تقييم الأداء التراكمي" },
    { field: "الجاهزية", purpose: "متاح — في مهمة — إجازة — تدريب" },
  ];
  const fixedSiteCols = [{ key: "type", label: "نوع الموقع" }, { key: "reason", label: "مبرر التواجد الدائم" }];
  const fixedSiteRows = [
    { type: "مواقع التشغيل على مدار الساعة", reason: "استمرارية الخدمة تتطلب استجابة فورية" },
    { type: "المواقع الحساسة", reason: "أنظمة دعم حياة، مراكز بيانات" },
    { type: "المواقع ذات الأحمال التشغيلية العالية", reason: "كثافة الأصول والمعدات" },
  ];
  const specsCols = [{ key: "n", label: "#" }, { key: "spec", label: "التخصص" }, { key: "scope", label: "نطاق العمل" }];
  const specsRows = [
    { n: "1", spec: "كهرباء", scope: "تمديدات، لوحات، قواطع، إضاءة" },
    { n: "2", spec: "تكييف وتبريد", scope: "وحدات HVAC، ضواغط، مجاري هواء" },
    { n: "3", spec: "سباكة", scope: "مواسير، مضخات، خزانات، شبكات مياه" },
    { n: "4", spec: "أنظمة سلامة", scope: "إنذار حريق، إطفاء، مخارج طوارئ" },
    { n: "5", spec: "أعمال مدنية", scope: "بناء، دهان، بلاط، صيانة المباني" },
    { n: "6", spec: "أنظمة تحكم", scope: "BMS، PLC، أتمتة المباني" },
    { n: "7", spec: "أعمال ميكانيكية", scope: "محركات، مضخات، مصاعد، سلالم متحركة" },
  ];
  const distCols = [{ key: "criteria", label: "المعيار" }, { key: "desc", label: "الوصف" }, { key: "example", label: "مثال" }];
  const distRows = [
    { criteria: "نوع العطل", desc: "توزيع الفني حسب تخصصه", example: "عطل كهربائي ← فني كهرباء" },
    { criteria: "أولوية البلاغ", desc: "تحديد سرعة الاستجابة", example: "طارئ ← فوري" },
    { criteria: "الموقع الجغرافي", desc: "أقرب فني متاح للموقع", example: "تقليل زمن الحركة" },
    { criteria: "مستوى الخبرة", desc: "تناسب الخبرة مع تعقيد العمل", example: "أعمال معقدة ← فني خبير" },
    { criteria: "حجم العمل", desc: "عدد الفنيين المطلوبين", example: "مشروع كبير ← فريق كامل" },
  ];
  const prioritiesCols = [{ key: "level", label: "مستوى الأولوية" }, { key: "time", label: "زمن الاستجابة المستهدف" }, { key: "method", label: "آلية التوزيع" }];
  const prioritiesRows = [
    { level: "طارئ", time: "أقل من 30 دقيقة", method: "توجيه فوري لأقرب فني متاح" },
    { level: "عالي", time: "أقل من ساعتين", method: "توزيع خلال 15 دقيقة" },
    { level: "عادي", time: "خلال يوم العمل", method: "توزيع ضمن جدول العمل اليومي" },
    { level: "مجدول", time: "حسب الجدول المخطط", method: "توزيع مسبق ضمن خطط الصيانة" },
  ];
  const slaCols = [{ key: "level", label: "مستوى الأولوية" }, { key: "resp", label: "زمن الاستجابة" }, { key: "fix", label: "زمن الإنجاز المستهدف" }, { key: "trigger", label: "آلية التصعيد" }, { key: "path", label: "مسار التصعيد" }];
  const slaRows = [
    { level: "طارئ 🔴", resp: "أقل من 30 دقيقة", fix: "أقل من 4 ساعات", trigger: "إذا لم يتم التوزيع خلال 15 دقيقة", path: "مشرف الموقع ← مهندس المكتب الفني ← مدير الصيانة" },
    { level: "عالي 🟡", resp: "أقل من ساعتين", fix: "أقل من 24 ساعة", trigger: "إذا لم يتم الإنجاز خلال 12 ساعة", path: "مشرف الموقع ← مهندس المكتب الفني" },
    { level: "عادي 🟢", resp: "خلال يوم العمل", fix: "أقل من 3 أيام", trigger: "إذا تأخر عن 3 أيام", path: "مهندس المكتب الفني" },
    { level: "مجدول 🔵", resp: "حسب الجدول", fix: "حسب الجدول", trigger: "إذا تأخر عن الجدول بيوم", path: "مدير الصيانة" },
  ];
  const finesCols = [{ key: "violation", label: "المخالفة" }, { key: "penalty", label: "العقوبة المقترحة" }];
  const finesRows = [
    { violation: "تجاوز زمن الاستجابة للبلاغ الطارئ", penalty: "غرامة 500 ريال عن كل ساعة تأخير" },
    { violation: "تجاوز زمن الإنجاز للأعمال الطارئة", penalty: "غرامة 1,000 ريال عن كل يوم تأخير" },
    { violation: "عدم التزام بجدول الصيانة الوقائية", penalty: "خصم 10% من قيمة العقد الشهري" },
    { violation: "تكرار المخالفة 3 مرات", penalty: "إنذار رسمي + تخفيض نطاق الأعمال" },
  ];
  const slaFormCols = [{ key: "field", label: "الحقل" }, { key: "desc", label: "الوصف" }];
  const slaFormRows = [
    { field: "تاريخ ووقت البلاغ", desc: "—" },
    { field: "رقم أمر العمل", desc: "—" },
    { field: "مستوى الأولوية", desc: "طارئ / عالي / عادي / مجدول" },
    { field: "تاريخ ووقت التوزيع على الفني", desc: "—" },
    { field: "تاريخ ووقت الإنجاز الفعلي", desc: "—" },
    { field: "الفرق عن SLA", desc: "—" },
    { field: "سبب التأخير (إن وجد)", desc: "—" },
    { field: "الإجراء التصحيحي", desc: "—" },
  ];
  const maintTypesCols = [{ key: "type", label: "النوع" }, { key: "desc", label: "الوصف" }];
  const maintTypesRows = [
    { type: "صيانة طارئة", desc: "أعطال مفاجئة، توقف الأنظمة الحرجة، بلاغات عاجلة" },
    { type: "صيانة وقائية", desc: "أعمال مجدولة، فحوصات دورية، معايرة أجهزة" },
    { type: "صيانة تصحيحية", desc: "إصلاح أعطال متكررة، تحسينات وتطوير" },
  ];
  const officeRoleCols = [{ key: "task", label: "المهمة" }, { key: "desc", label: "الوصف" }, { key: "method", label: "الآلية" }];
  const officeRoleRows = [
    { task: "إصدار أوامر العمل", desc: "إنشاء الأوامر الرقمية في نظام CMMS", method: "آلي للصيانة الوقائية ويدوي للبلاغات" },
    { task: "توزيع الفرق", desc: "توزيع المهام حسب التخصص والأولوية", method: "توزيع ذكي عبر النظام" },
    { task: "متابعة التنفيذ", desc: "متابعة حالة كل أمر عمل", method: "لوحة تحكم آنية وتنبيهات للتأخير" },
    { task: "الدعم الفني", desc: "إرشاد الفرق ميدانيا أو عن بُعد", method: "دعم هاتفي وزيارات ميدانية" },
    { task: "متابعة الأداء", desc: "قياس مؤشرات الأداء", method: "تقارير أسبوعية وشهرية" },
    { task: "إعادة توزيع الموارد", desc: "تحريك الفرق حسب الضغط التشغيلي", method: "مرونة في التوزيع" },
  ];
  const benefitsCols = [{ key: "n", label: "#" }, { key: "benefit", label: "الميزة" }, { key: "desc", label: "الشرح" }];
  const benefitsRows = [
    { n: "1", benefit: "رفع كفاءة استغلال الفنيين", desc: "تقليل أوقات الخمول وتوزيع عادل للأعباء" },
    { n: "2", benefit: "الاستفادة من التخصصات المشتركة", desc: "تخصص واحد يخدم جميع المواقع" },
    { n: "3", benefit: "سرعة الاستجابة", desc: "تحريك الفرق حسب الحاجة" },
    { n: "4", benefit: "تقليل التكاليف", desc: "تقليل الحاجة لتعيينات ومقاولين خارجيين" },
    { n: "5", benefit: "تحسين جودة الصيانة", desc: "إشراف مركزي وتوحيد إجراءات العمل" },
  ];
  const challengesSolCols = [{ key: "challenge", label: "التحدي" }, { key: "solution", label: "الحل المقترح" }];
  const challengesSolRows = [
    { challenge: "مقاومة التغيير من بعض المواقع", solution: "التطبيق التدريجي وإشراك الفرق الحالية" },
    { challenge: "اختلاف مستويات الفنيين", solution: "برنامج تدريبي وتأهيلي موحد" },
    { challenge: "تنظيم الحركة والتنقل", solution: "نظام حجز وجدولة في CMMS" },
    { challenge: "الحاجة لنظام متابعة قوي", solution: "تطبيق ميداني للفنيين" },
  ];
  const escalCols = [{ key: "case", label: "الحالة" }, { key: "l1", label: "المستوى 1" }, { key: "l2", label: "المستوى 2" }, { key: "l3", label: "المستوى 3" }];
  const escalRows = [
    { case: "بلاغ طارئ لم يُستجب له خلال 30 دقيقة", l1: "مشرف الموقع", l2: "مهندس المكتب الفني", l3: "مدير الصيانة" },
    { case: "أمر عمل تأخر إنجازه 50% عن SLA", l1: "مهندس التخطيط", l2: "مهندس أول المكتب الفني", l3: "مدير الصيانة" },
    { case: "عدم توفر قطعة غيار حرجة", l1: "أمين المخزن", l2: "مهندس المكتب الفني", l3: "إدارة المشتريات" },
    { case: "خلاف فني بين فريقين", l1: "مهندس المكتب الفني", l2: "مهندس أول المكتب الفني", l3: "مدير الصيانة" },
    { case: "مخالفة سلامة خطيرة", l1: "مسؤول السلامة", l2: "مدير الموقع", l3: "الإدارة العليا" },
    { case: "تجاوز الميزانية الشهرية", l1: "مهندس التخطيط", l2: "مدير الصيانة", l3: "الإدارة العليا" },
    { case: "شكوى متكررة من مستخدم", l1: "مشرف الموقع", l2: "مهندس المكتب الفني", l3: "مدير الصيانة" },
  ];

  return (
    <>
      {/* Page 14 */}
      <A4Page pageNum={30}>
        <SectionHeader icon={Users} title="توحيد فرق الصيانة ضمن منظومة التشغيل المركزية" subtitle="نموذج تشغيلي موحد لجميع فرق الصيانة في المجموعة" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              في الوضع الحالي، تعمل فرق الصيانة داخل كل موقع بشكل مستقل، حيث يمتلك كل مبنى أو منشأة فريقه الخاص وإدارته التشغيلية المنفصلة. يترتب على ذلك عدة تحديات:
            </p>
          </div>

          <FlowChart
            dir="LR"
            nodes={[
              { id: "m1", label: "الموقع A — مستقل", icon: "🏗️" },
              { id: "m2", label: "الموقع B — مستقل", icon: "🏢" },
              { id: "m3", label: "الموقع C — مستقل", icon: "🏠" },
              { id: "c1", label: "تفاوت الأداء", icon: "📉", color: "red" },
              { id: "c2", label: "ضعف استغلال الموارد", icon: "📦", color: "red" },
            ]}
            edges={[
              { from: "m1", to: "c1" },
              { from: "m2", to: "c2" },
            ]}
          />
        </div>
      </A4Page>

      {/* Page 14.5 */}
      <A4Page pageNum={31}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">التحديات والمشاكل التشغيلية الحالية</h4>
            <DataTable columns={challengesCols} rows={challengesRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 15 */}
      <A4Page pageNum={32}>
        <div className="space-y-4 mt-4">
          <CallOutBox type="goal" title="الهدف من التوحيد">
            بناء على ما تقدم، تبرز أهمية إنشاء منظومة تشغيل مركزية موحدة لفرق الصيانة.
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Target} title="أهداف توحيد فرق الصيانة" />
            <FlowChart
              nodes={[
                { id: "هدف", label: "توحيد فرق الصيانة", icon: "🎯", color: "navy" },
                { id: "أ1", label: "إنشاء فريق موحد", icon: "👥" },
                { id: "أ2", label: "استغلال الفنيين بكفاءة", icon: "📈" },
                { id: "أ3", label: "توزيع أفضل للتخصصات", icon: "🎨" },
              ]}
              edges={[
                { from: "هدف", to: "أ1" }, { from: "هدف", to: "أ2" },
                { from: "هدف", to: "أ3" },
              ]}
            />
            <div className="mt-4">
              <DataTable columns={goalsCols} rows={goalsRows} />
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 16 */}
      <A4Page pageNum={33}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Lightbulb} title="فلسفة التشغيل المقترحة" />
            <p className="text-slate-700 leading-relaxed mb-4 text-xs">
              يقوم النظام المقترح على تجميع جميع فرق الصيانة ضمن منظومة تشغيل مركزية موحدة، وتوزيع الفنيين بناء على الاحتياج الفعلي:
            </p>
            <FlowChart
              nodes={[
                { id: "توزيع", label: "أسس توزيع الفنيين", icon: "🎯", color: "navy" },
                { id: "تخصص", label: "التخصص الفني", icon: "🔧" },
                { id: "موقع", label: "الموقع الجغرافي", icon: "📍" },
                { id: "حجم", label: "حجم الأعمال", icon: "📏" },
              ]}
              edges={[
                { from: "توزيع", to: "تخصص" }, { from: "توزيع", to: "موقع" },
                { from: "توزيع", to: "حجم" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 16.5 */}
      <A4Page pageNum={34}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Database} title="آلية التشغيل المركزية" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">قاعدة بيانات موحدة للفنيين في CMMS</h4>
            <DataTable columns={techDbCols} rows={techDbRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 17 */}
      <A4Page pageNum={35}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Building2} title="تصنيف الفرق الفنية" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">فرق ثابتة في المواقع الحرجة</h4>
            <DataTable columns={fixedSiteCols} rows={fixedSiteRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">فرق تشغيل مركزية متحركة</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "مركز", label: "المكتب الفني المركزي", icon: "🏗️", color: "navy" },
                { id: "نظام", label: "نظام CMMS", icon: "💻", color: "blue" },
                { id: "قرار", label: "توزيع الفرق", icon: "⚖️", color: "amber" },
                { id: "تحريك", label: "تحريك الفريق المناسب", icon: "🚚", color: "green" },
              ]}
              edges={[
                { from: "مركز", to: "نظام" },
                { from: "نظام", to: "قرار" },
                { from: "قرار", to: "تحريك" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 18 */}
      <A4Page pageNum={36}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Briefcase} title="توزيع الفرق حسب التخصص" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">التخصصات الرئيسية المعتمدة</h4>
            <DataTable columns={specsCols} rows={specsRows} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-1">آلية توزيع الفنيين</h4>
              <DataTable columns={distCols} rows={distRows} />
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-1">تصنيف الأولويات</h4>
              <DataTable columns={prioritiesCols} rows={prioritiesRows} />
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 19 */}
      <A4Page pageNum={37}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Gauge} title="هيكل مستوى الخدمة (SLA Framework)" />
            <DataTable columns={slaCols} rows={slaRows} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-1">عقوبات التأخير (للمقاولين)</h4>
              <DataTable columns={finesCols} rows={finesRows} />
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-1">نموذج خرق SLA</h4>
              <DataTable columns={slaFormCols} rows={slaFormRows} />
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 20 */}
      <A4Page pageNum={38}>
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-1">أنواع أعمال الصيانة</h4>
              <DataTable columns={maintTypesCols} rows={maintTypesRows} />
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-1">مميزات النظام المركزي</h4>
              <DataTable columns={benefitsCols} rows={benefitsRows} />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={FileText} title="دور المكتب الفني في إدارة الفرق" />
            <DataTable columns={officeRoleCols} rows={officeRoleRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 20.5 (Challenges and Solutions) */}
      <A4Page pageNum={39}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="التحديات المتوقعة والحلول" />
            <DataTable columns={challengesSolCols} rows={challengesSolRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 21 */}
      <A4Page pageNum={40}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Clock} title="مصفوفة التصعيد (Escalation Matrix)" />
            <DataTable columns={escalCols} rows={escalRows} />
            <div className="mt-3 text-[10px] text-slate-600 space-y-1">
              <p><strong>قواعد التصعيد الأساسية:</strong></p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>إذا لم يحل المستوى الأدنى المشكلة خلال المهلة، تنتقل تلقائياً للمستوى الأعلى.</li>
                <li>كل خطوة تصعيد تُسجل في CMMS مع وقتها للتوثيق والمحاسبة.</li>
              </ul>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 22 */}
      <A4Page pageNum={41}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Award} title="خلاصة القسم الثاني" />
            <CallOutBox type="goal" title="خلاصة">
              يهدف نظام التشغيل المركزي لفرق الصيانة إلى إنشاء منظومة موحدة، تقوم على تجميع الموارد البشرية تحت إدارة مركزية، وتوزيع الفرق حسب الاحتياج الفعلي.
            </CallOutBox>
            <CallOutBox type="tip" title="تخطيط الموارد البشرية (مستقبلاً)">
              إن الاعتماد الحالي على استغلال الكفاءات والموارد البشرية المتوفرة يمثل خطة أولية للتشغيل والتحول المبدئي. بعد مرور سنة على الأقل من التشغيل الكامل لنظام الصيانة المركزية واستقرار العمليات، سيقوم المكتب الفني بإجراء تقييم شامل لمستوى الخدمة المقدمة (SLA) والأداء التشغيلي الفعلي لجميع المواقع. وبناءً على هذا التقييم، سيتم تخطيط وإضافة موارد بشرية وفنية إضافية طبقا للاحتياجات الفعلية والتوزيع الجغرافي والمهني المطلوب لضمان أعلى مستويات الخدمة والكفاءة.
            </CallOutBox>
            <CallOutBox type="critical" title="التوصية الإجرائية">
              إجراء حصر شامل لمهارات جميع الفنيين الحاليين في المجموعة، وتصنيفهم حسب التخصص والمستوى، كخطوة أولى لبناء قاعدة البيانات الموحدة.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 23 (Page 30) - هيكل الورديات وتوزيع ساعات العمل */}
      <A4Page pageNum={42}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Clock} title="هيكلية الورديات وساعات العمل لفرق الصيانة" subtitle="تنظيم الفترات التشغيلية لضمان استمرارية الدعم الفني في مواقع المجموعة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              لضمان التغطية المستمرة لكافة مرافق مجموعة سقالة (خاصة مستودعات التبريد والمباني الحيوية) على مدار الساعة، يتم تقسيم الفنيين إلى ورديات دورية متعاقبة كالتالي:
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold">
                  <th className="p-2 border-l border-slate-200">الوردية</th>
                  <th className="p-2 border-l border-slate-200 text-center">التوقيت الفعلي</th>
                  <th className="p-2 border-l border-slate-200">الأهداف والمهام الرئيسية للوردية</th>
                  <th className="p-2 text-center">الفرق التشغيلية المطلوبة</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">الصباحية (A)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">07:30 ص - 04:30 م</td>
                  <td className="p-2 border-l border-slate-200">تنفيذ خطط الصيانة الوقائية (PM)، تلبية البلاغات اليومية المعتادة، إشراف المكتب الفني المباشر.</td>
                  <td className="p-2 text-center text-blue-700 font-bold">تغطية كاملة لكافة التخصصات</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">المسائية (B)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">04:00 م - 12:00 ص</td>
                  <td className="p-2 border-l border-slate-200">معالجة بلاغات الأعطال الواردة بعد ساعات الدوام الرسمي، فحص غرف الكهرباء والمضخات ومتابعة التشغيل.</td>
                  <td className="p-2 text-center text-blue-700 font-bold">فني تبريد، فني كهرباء، سباك</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">طوارئ الليل (C)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">12:00 ص - 08:00 ص</td>
                  <td className="p-2 border-l border-slate-200">التعامل الفوري مع إنذارات نظام BMS الحرجة، استنفار تام للأعطال الطارئة التي تهدد سلسلة التبريد.</td>
                  <td className="p-2 text-center text-red-600 font-bold">فريق طوارئ تحت الاستدعاء (On-Call)</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="tip" title="تداخل الورديات">
              تم تخطيط 30 دقيقة تداخل بين الوردية الصباحية والمسائية لتسليم المهام المفتوحة وأوامر العمل المعلقة لضمان استمرارية التشغيل دون أي فجوة.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 24 (Page 31) - النموذج 5: بطاقة التوصيف الوظيفي للفني */}
      <A4Page pageNum={43}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Briefcase} title="النموذج 5: بطاقة التوصيف الوظيفي للفني" subtitle="تحديد المسؤوليات والحد الأدنى للمهارات والشهادات المطلوبة لتخصص (فني تكييف أول)" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-2 gap-2 font-bold text-center">
                <div>المسمى الوظيفي: فني تكييف وتبريد أول</div>
                <div>القسم: إدارة فرق الصيانة المركزية</div>
              </div>
              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>المرجع المباشر:</strong> مشرف الموقع / مهندس الدعم الفني</div>
                  <div><strong>الدرجة الفنية:</strong> خبير (Senior Tech)</div>
                </div>
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                  <strong>المهام والمسؤوليات التشغيلية الأساسية:</strong>
                  <ul className="list-disc list-inside text-[10px] text-slate-600 mt-1 space-y-0.5">
                    <li>تنفيذ الصيانة الوقائية والزيارات المبرمجة لوحدات HVAC والشيلرات وغرف التبريد.</li>
                    <li>تتبع الأعطال الكهربائية والميكانيكية في أنظمة التكييف المركزي وإصلاحها بالسرعة المطلوبة.</li>
                    <li>قراءة ومطابقة خرائط التكييف ومسارات الهواء ومخططات الأسلاك الكهربائية للوحدات الكبرى.</li>
                    <li>تسجيل استهلاك قطع الغيار وربطها بأمر العمل مباشرة عبر تطبيق نظام CMMS.</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-[10px]">
                  <div>
                    <strong>الشهادات المهنية الإلزامية:</strong>
                    <ul className="list-disc list-inside text-slate-600">
                      <li>شهادة فنية معتمدة في تخصص التبريد والتكييف.</li>
                      <li>شهادة سلامة العمل في الارتفاعات والأماكن المغلقة.</li>
                      <li>شهادة تدريب معتمدة على نظام العزل الكهربائي (LOTO).</li>
                    </ul>
                  </div>
                  <div>
                    <strong>المؤشرات الأساسية لقياس الأداء (KPIs):</strong>
                    <ul className="list-disc list-inside text-slate-600">
                      <li>نسبة الالتزام بالـ SLA للبلاغات الطارئة والحرجة ( &gt; 92%).</li>
                      <li>معدل إعادة العمل للأعطال التي تم إصلاحها (أقل من 3%).</li>
                      <li>الدقة في تحديث أوامر العمل في تطبيق CMMS ميدانياً.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 25 (Page 32) - سجل تدريب الفنيين الفردي */}
      <A4Page pageNum={44}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ListChecks} title="النموذج 6: سجل تدريب الفنيين الفردي" subtitle="استمارة تتبع وتقييم حضور الدورات التدريبية واكتساب المهارات للكوادر الفنية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>اسم الفني: محمد أشرف خان</div>
                <div>الرقم الوظيفي: TECH-8902</div>
                <div>التخصص الأساسي: فني كهرباء عام</div>
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200">البرنامج التدريبي / الدورة</th>
                    <th className="p-2 border-l border-slate-200 text-center">تاريخ الانعقاد</th>
                    <th className="p-2 border-l border-slate-200 text-center">مدة الدورة</th>
                    <th className="p-2 border-l border-slate-200 text-center">تقييم المدرب للنجاح</th>
                    <th className="p-2 text-center">تاريخ التجديد الموصى به</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">إجراءات السلامة والعزل الكهربائي (LOTO)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">10-02-2026</td>
                    <td className="p-2 border-l border-slate-200 text-center">8 ساعات (يوم واحد)</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 ممتاز (ناجح)</td>
                    <td className="p-2 text-center font-mono">10-02-2027</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">استخدام تطبيق GridFix للهواتف الذكية (CMMS)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">18-02-2026</td>
                    <td className="p-2 border-l border-slate-200 text-center">4 ساعات (نصف يوم)</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق (مؤهل)</td>
                    <td className="p-2 text-center font-mono">عند تحديث النظام</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">السلامة في العمل على الارتفاعات والسقالات</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">03-03-2026</td>
                    <td className="p-2 border-l border-slate-200 text-center">6 ساعات (يوم واحد)</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 مطابق (ناجح)</td>
                    <td className="p-2 text-center font-mono">03-03-2028</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">الإسعافات الأولية والإنعاش القلبي الرئوي (CPR)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">12-04-2026</td>
                    <td className="p-2 border-l border-slate-200 text-center">12 ساعة (يومين)</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 ممتاز (ناجح)</td>
                    <td className="p-2 text-center font-mono">12-04-2028</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                <strong>ملاحظة إدارة الموارد البشرية:</strong> الفني مكتمل الكفاءة وجاهز للعمل الميداني في كافة بيئات العمل الحساسة والمشاريع الكبرى.
                <div className="flex justify-between pt-2">
                  <span>توقيع مسؤول التدريب: __________________</span>
                  <span>اعتماد مهندس المكتب الفني: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 26 (Page 33) - سيناريو تعطل التكييف بمبنى الإدارة العامة */}
      <A4Page pageNum={45}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="سيناريو تعطل نظام تكييف رئيسي بمجمع مكاتب" subtitle="محاكاة واقعية لآلية البلاغات السريعة وتنسيق التدخل الميداني في المواقع الكبرى" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-red-600">تسلسل أحداث تعطل وحدة تكييف مركزي (Chiller-1):</h4>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px] text-slate-700">
              <p>
                <strong>الساعة 12:30 م</strong>: ورود بلاغ عاجل من موظفي الطابق الثاني بمبنى الإدارة العامة يفيد بتوقف التكييف بالكامل وارتفاع سريع في درجات الحرارة.
              </p>
              <p>
                <strong>الساعة 12:35 م</strong>: يقوم مهندس التخطيط بالمكتب الفني بإنشاء بلاغ طارئ (أولوية عالية 🟡) على نظام CMMS وتوجيهه آلياً لأقرب فريق متحرك متواجد بمحيط المنطقة.
              </p>
              <p>
                <strong>الساعة 12:50 م (خلال 15 دقيقة)</strong>: وصول فريق الصيانة الميدانية للموقع وبدء عملية الفحص الفني. تبين وجود التماس كهربائي في قاطع الحماية الرئيسي للضاغط رقم 1.
              </p>
              <p>
                <strong>الساعة 01:20 م</strong>: يقوم الفني بصرف قاطع تيار بديل من المخزن الفرعي للموقع بعد مسح الباركود الخاص به وتوثيقه، والبدء الفوري في التركيب تحت إشراف مشرف الموقع.
              </p>
              <p>
                <strong>الساعة 02:00 م</strong>: اكتمال أعمال الإصلاح وتشغيل الشيلر بنجاح، وقياس مستوى التبريد، وإغلاق البلاغ بنجاح على تطبيق GridFix.
              </p>
            </div>
            <CallOutBox type="goal" title="زمن المعالجة التشغيلية">
              استغرقت دورة العمل كاملة من لحظة ورود البلاغ إلى اكتمال الإصلاح الفعلي 90 دقيقة فقط، وهو ما يقل بكثير عن مهلة الـ SLA المعتمدة البالغة 4 ساعات للأعطال العالية.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 27 (Page 34) - إجراء تشغيل معتمد لجدولة الورديات وتغطية الإجازات والغياب */}
      <A4Page pageNum={46}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Clock} title="دليل تنظيم الورديات وتغطية الإجازات" subtitle="إجراء عمل معتمد (SOP) لتفادي حدوث نقص في الكوادر الفنية الميدانية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed">
              لتفادي حدوث أي خلل تشغيلي نتيجة لغياب أو إجازات الفنيين في المواقع الحيوية، يعتمد المكتب الفني المركزي السياسة التشغيلية التالية:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2">
              <h5 className="font-bold text-slate-800">قواعد إدارة الإجازات والغطاء التشغيلي:</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>يجب تقديم طلب الإجازات السنوية المخططة قبل 15 يوماً على الأقل لمراجعتها والموافقة عليها.</li>
                <li>يُمنع منح إجازة لأكثر من 20% من الكادر الفني لنفس التخصص في نفس المنطقة في وقت واحد.</li>
                <li>عند غياب فني ثابت بموقع حرج بشكل مفاجئ، يقوم نظام CMMS تلقائياً بإعادة جدولة فني من الفرق المتحركة لتغطية الموقع خلال 60 دقيقة كحد أقصى.</li>
                <li>يتم تدوير الفنيين بين المواقع والورديات كل 3 أشهر لتفادي الإجهاد وضمان الإلمام بكافة أصول المجموعة.</li>
              </ul>
            </div>
            <CallOutBox type="critical" title="تنسيق العمل">
              يتحمل مهندس التخطيط والجدولة بالمكتب الفني المسؤولية الكاملة عن مراقبة حضور الفنيين يومياً ومطابقة جداول الحضور الميداني مع كشوفات الموارد البشرية.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 28 (Page 35) - جدول مناطق التوزيع الإقليمية ومسافات التغطية */}
      <A4Page pageNum={47}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Database} title="مناطق التوزيع ومسافات التغطية الإقليمية" subtitle="تحديد النطاق الجغرافي وحركة الفرق الفنية المتنقلة لتقليل زمن الاستجابة للبلاغات" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              يتم تقسيم فروع ومرافق مجموعة سقالة جغرافياً إلى ثلاث مناطق رئيسية لضمان تحرك الفرق المتنقلة بكفاءة عالية وبأقل زمن تنقل ممكن:
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  <th className="p-2 border-l border-slate-200">المنطقة الجغرافية</th>
                  <th className="p-2 border-l border-slate-200 text-center">مقر انطلاق الفرقة الموحدة</th>
                  <th className="p-2 border-l border-slate-200">المواقع المشمولة بالتغطية</th>
                  <th className="p-2 text-center">نطاق الحركة الأقصى</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">المنطقة الغربية</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-800 font-bold">مجمع مستودعات جدة الرئيسي</td>
                  <td className="p-2 border-l border-slate-200">مكاتب الإدارة بجدة، مستودع الأدوية، فروع مكة المكرمة، المدينة المنورة.</td>
                  <td className="p-2 text-center font-mono">150 كم (دعم سريع)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">المنطقة الوسطى</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-800 font-bold">فرع الرياض - مجمع السلي</td>
                  <td className="p-2 border-l border-slate-200">مكاتب الرياض الرئيسية، مستودع الأدوية بالرياض، فروع القصيم والخرج.</td>
                  <td className="p-2 text-center font-mono">120 كم (دعم سريع)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">المنطقة الشرقية</td>
                  <td className="p-2 border-l border-slate-200 text-center text-blue-800 font-bold">فرع الدمام - حي الأثير</td>
                  <td className="p-2 border-l border-slate-200">مستودع الخبر، مكاتب الدمام، فروع الجبيل والأحساء.</td>
                  <td className="p-2 text-center font-mono">100 كم (دعم سريع)</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="tip" title="تخصيص السيارات">
              كل منطقة مجهزة بأسطول سيارات صيانة متنقلة يحتوي على قطع الغيار سريعة الاستهلاك والعدد الكاملة للتأكد من الإصلاح من أول زيارة (First-Time Fix Rate).
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 29 (Page 36) - دراسة حالة عملية: معالجة تسرب مياه حرج في مجمع تشغيلي */}
      <A4Page pageNum={48}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="دراسة حالة: تسرب مياه حرج في مجمع تشغيلي" subtitle="توثيق خطوات التدخل السريع للفرق الفنية والسيطرة على الأضرار وحماية الأصول" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-red-600">سيناريو السيطرة على تسريب في شبكة التغذية الرئيسية:</h4>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px] text-slate-700">
              <p>
                <strong>الخطوة 1: الكشف والتبليغ (09:15 ص)</strong>: حدوث كسر مفاجئ في أنبوب مياه التغذية بقطر 2 بوصة المغذي للطوابق العليا بمجمع المستودعات وتدفق المياه بغزارة مهدداً مكاتب شؤون الموظفين. تم رفع بلاغ طارئ فوراً.
              </p>
              <p>
                <strong>الخطوة 2: عزل الموقع (09:20 ص)</strong>: وصول السباك المناوب لمكان المحبس الرئيسي للمبنى وعزل خط المياه التالف فوراً للحد من تدفق المياه، بالتوازي مع فصل التيار الكهربائي عن اللوحات القريبة لحماية الكوادر والأصول.
              </p>
              <p>
                <strong>الخطوة 3: معالجة الأضرار (09:30 ص)</strong>: استنفار عمال النظافة والتجفيف لسحب المياه من الممرات، بينما باشر السباك عملية قطع الجزء التالف من الأنبوب وتجهيز القطع البديلة.
              </p>
              <p>
                <strong>الخطوة 4: الإصلاح والتشغيل (10:10 ص)</strong>: تركيب وتثبيت أنبوب بديل من نوع PPR المقوى، وإعادة تشغيل المياه واختبار الضغط للتأكد من سلامة اللحامات وعدم وجود تهريبات جديدة.
              </p>
            </div>
            <CallOutBox type="goal" title="النتيجة والدروس المستفادة">
              تمت معالجة الخطر بنجاح خلال 55 دقيقة فقط بدون وقوع أي تلفيات في أجهزة أو أثاث المكاتب. الإجراء التصحيحي الموصى به: تركيب محابس عزل فرعية لكل زاوية لتفادي قطع المياه عن كامل المجمع أثناء الإصلاحات المستقبيلية.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 30 (Page 37) - جدول تتبع استخدام سيارات فرق الصيانة ومصروفات المحروقات */}
      <A4Page pageNum={49}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={BarChart3} title="تتبع أسطول سيارات فرق الصيانة المتنقلة" subtitle="مراقبة حركة السيارات التشغيلية وكفاءة الانتقال الجغرافي للمهمات الميدانية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              لتحسين كفاءة تنقل الفرق الفنية وخفض التكاليف التشغيلية للمركبات، يقوم المكتب الفني بمراقبة وتتبع حركة السيارات وربطها بالبلاغات عبر نظام تحديد المواقع (GPS):
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  <th className="p-2 border-l border-slate-200">رقم اللوحة / السيارة</th>
                  <th className="p-2 border-l border-slate-200 text-center">المنطقة والفرقة</th>
                  <th className="p-2 border-l border-slate-200 text-center">المسافة المقطوعة شهرياً</th>
                  <th className="p-2 border-l border-slate-200 text-center">معدل استهلاك الوقود</th>
                  <th className="p-2 text-center">عدد أوامر العمل المنجزة</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">أ ب ج 1234 (Toyota Hilux)</td>
                  <td className="p-2 border-l border-slate-200 text-center">الغربية - تكييف وكهرباء</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">3,200 كم</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">11.5 كم / لتر</td>
                  <td className="p-2 text-center font-mono font-bold text-blue-700">84 أمر عمل</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">د هـ و 5678 (Nissan Urvan)</td>
                  <td className="p-2 border-l border-slate-200 text-center">الوسطى - فريق السباكة والمدني</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">2,800 كم</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">9.8 كم / لتر</td>
                  <td className="p-2 text-center font-mono font-bold text-blue-700">72 أمر عمل</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">ح ط ي 9012 (Hyundai H1)</td>
                  <td className="p-2 border-l border-slate-200 text-center">الشرقية - فريق السلامة والوقاية</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">2,100 كم</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">10.2 كم / لتر</td>
                  <td className="p-2 text-center font-mono font-bold text-blue-700">60 أمر عمل</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="tip" title="تحليل الحركة">
              يتم دمج إحداثيات GPS تلقائياً مع نظام CMMS للتأكد من مطابقة خط سير مركبة الصيانة مع الموقع الفعلي لأوامر العمل المسندة للفرقة لمنع سوء استخدام السيارات.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 31 (Page 38) - نموذج تقرير تقييم مهارات فني ميداني واختبار الكفاءة السنوي */}
      <A4Page pageNum={50}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ListChecks} title="نموذج تقييم واختبار مهارات الفنيين" subtitle="قائمة التقييم السنوي لتتبع جودة وكفاءة الكوادر الفنية وتحديد الترقيات" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-center">
                بطاقة تقييم الأداء المهني والفني السنوي لعام 2026
              </div>
              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>اسم الفني المقيّم:</strong> ساجد محمود علي</div>
                  <div><strong>التخصص الفني:</strong> فني لوحات وتمديدات كهربائية</div>
                </div>
                <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold">
                      <th className="p-1.5 border-l border-slate-200">محور التقييم الفني والمهني</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">الدرجة المستهدفة</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">النتيجة المستحقة</th>
                      <th className="p-1.5 text-center">ملاحظات المقيم الفني والتوجيه</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">جودة تشخيص الأعطال المعقدة</td>
                      <td className="p-1.5 border-l border-slate-200 text-center">5 / 5</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-bold text-blue-600 font-mono">4 / 5</td>
                      <td className="p-1.5 text-slate-600">ممتاز في تشخيص لوحات التحكم وقواطع الكهرباء الذكية.</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">السرعة في إنجاز المهام وأوامر العمل</td>
                      <td className="p-1.5 border-l border-slate-200 text-center">5 / 5</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-bold text-blue-600 font-mono">5 / 5</td>
                      <td className="p-1.5 text-slate-600">ينجز الأعمال باستمرار قبل مهلة الـ SLA المحددة.</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">الالتزام الكامل بإجراءات السلامة و LOTO</td>
                      <td className="p-1.5 border-l border-slate-200 text-center">5 / 5</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-bold text-blue-600 font-mono">5 / 5</td>
                      <td className="p-1.5 text-slate-600">ملتزم تماماً بلبس أدوات الوقاية الشخصية وإجراء العزل.</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                  <strong>توصية الترقية أو التطوير:</strong> الفني متميز وأدائه العام يتجاوز التوقعات، يوصى بنقله لدرجة (فني كهرباء أول) في الدورة الوظيفية القادمة.
                  <div className="flex justify-between pt-2">
                    <span>توقيع المقيم (مهندس أول): __________________</span>
                    <span>اعتماد مدير القسم: __________________</span>
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
