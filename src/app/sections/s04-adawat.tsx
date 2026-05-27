import { Wrench, Target, Lightbulb, QrCode, Settings2, Monitor, ClipboardCheck, AlertTriangle, Award, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section04() {
  const challengesCols = [{ key: "n", label: "#" }, { key: "challenge", label: "التحدي" }, { key: "impact", label: "الأثر" }];
  const challengesRows = [
    { n: "1", challenge: "فقدان الأدوات", impact: "تكرار الشراء وتكاليف إضافية" },
    { n: "2", challenge: "سوء الاستخدام", impact: "تلف الأدوات وأعطال متكررة" },
    { n: "3", challenge: "غياب تتبع العهد", impact: "عدم معرفة المسؤول عن الأداة" },
    { n: "4", challenge: "تكرار شراء المعدات", impact: "هدر في الميزانية" },
    { n: "5", challenge: "ضعف توفر الأجهزة التخصصية", impact: "الاعتماد على التخمين بدل التشخيص" },
  ];
  const dailyToolsCols = [{ key: "cat", label: "الفئة" }, { key: "examples", label: "أمثلة" }];
  const dailyToolsRows = [
    { cat: "عدد يدوية", examples: "مفكات، مفاتيح، زراديات، بنط" },
    { cat: "أدوات كهربائية", examples: "شنيور، صاروخ قطع، دريل" },
    { cat: "أجهزة قياس أساسية", examples: "أفوميتر، كلامب ميتر" },
    { cat: "معدات وصول", examples: "سلالم، سقالات صغيرة" },
    { cat: "أدوات عامة", examples: "مسدس شحم، منشار، مطرقة" },
  ];
  const specToolsCols = [{ key: "device", label: "الجهاز" }, { key: "use", label: "الاستخدام" }, { key: "benefit", label: "الفائدة" }];
  const specToolsRows = [
    { device: "كاميرات حرارية", use: "فحص اللوحات والمحركات والمكيفات", benefit: "اكتشاف ارتفاع الحرارة قبل العطل" },
    { device: "أجهزة كشف التسريب", use: "شبكات المياه والتكييف والغازات", benefit: "تحديد مصدر التسرب بدقة" },
    { device: "أجهزة تحليل الطاقة", use: "تحليل الأحمال وجودة الكهرباء", benefit: "تحسين كفاءة الطاقة" },
    { device: "أجهزة قياس الاهتزاز", use: "المحركات والمضخات والمعدات الدوارة", benefit: "الصيانة التنبؤية" },
    { device: "أجهزة كشف الأعطال الكهربائية", use: "كابلات ولوحات ومحركات", benefit: "تشخيص سريع" },
    { device: "أجهزة معايرة الحساسات", use: "حساسات الحرارة والضغط والتدفق", benefit: "دقة القراءات" },
  ];
  const sharedToolsCols = [{ key: "equip", label: "المعدة" }, { key: "use", label: "الاستخدام" }];
  const sharedToolsRows = [
    { equip: "مولدات كهربائية", use: "أعمال الصيانة دون كهرباء" },
    { equip: "ضواغط هواء", use: "تشغيل المعدات الهوائية" },
    { equip: "معدات الرفع", use: "نقل المعدات الثقيلة" },
    { equip: "أجهزة اللحام", use: "أعمال اللحام والقطع" },
    { equip: "معدات الاختبارات", use: "اختبار الأنظمة والمعدات" },
  ];
  const regCols = [{ key: "field", label: "الحقل" }, { key: "desc", label: "الوصف" }];
  const regRows = [
    { field: "الرقم التعريفي", desc: "كود فريد لكل أداة" },
    { field: "النوع", desc: "يدوية، كهربائية، تخصصية" },
    { field: "الحالة", desc: "صالح — تحت الصيانة — مفقود — يحتاج معايرة" },
    { field: "الموقع", desc: "مخزن — مع فني — في موقع" },
    { field: "المستخدم الحالي", desc: "آخر شخص استعار الأداة" },
  ];
  const trustCols = [{ key: "type", label: "نوع العهد" }, { key: "desc", label: "الوصف" }];
  const trustRows = [
    { type: "عهدة فني", desc: "أدوات شخصية مسجلة باسم الفني" },
    { type: "عهدة مشرف", desc: "أدوات تحت مسؤولية المشرف" },
    { type: "عهدة موقع", desc: "أدوات ثابتة في موقع معين" },
    { type: "عهدة ورشة", desc: "أدوات ومعدات الورشة المركزية" },
  ];
  const cmmsLinkCols = [{ key: "point", label: "نقطة الربط" }, { key: "desc", label: "الوصف" }];
  const cmmsLinkRows = [
    { point: "أوامر العمل", desc: "عرض المعدات المطلوبة لكل أمر" },
    { point: "تسجيل الأدوات المستخدمة", desc: "توثيق الأدوات المستخدمة في كل مهمة" },
    { point: "تخطيط الموارد", desc: "معرفة المعدات المطلوبة قبل بدء العمل" },
    { point: "متابعة الاستهلاك", desc: "تتبع عمر المعدات وحاجتها للصيانة" },
    { point: "تتبع الأعطال", desc: "ربط الأعطال بأجهزة القياس المستخدمة" },
  ];
  const officeRoleCols = [{ key: "task", label: "المهمة" }, { key: "desc", label: "الوصف" }];
  const officeRoleRows = [
    { task: "تحديد الاحتياجات", desc: "تقييم احتياجات الفرق من الأدوات" },
    { task: "اعتماد الشراء", desc: "الموافقة على شراء الأجهزة الجديدة" },
    { task: "متابعة الأجهزة", desc: "التأكد من صلاحية ومعايرة الأجهزة" },
    { task: "تنظيم الاستخدام", desc: "جدولة الحجز للمعدات المشتركة" },
    { task: "التدريب", desc: "تدريب الفنيين على الأجهزة التخصصية" },
  ];
  const problemCols = [{ key: "challenge", label: "التحدي" }, { key: "solution", label: "الحل" }];
  const problemRows = [
    { challenge: "ارتفاع تكلفة الأجهزة التخصصية", solution: "شراء حسب الأولوية والمشاركة بين المواقع" },
    { challenge: "ضعف الخبرة باستخدام الأجهزة", solution: "برنامج تدريبي تدريجي" },
    { challenge: "سوء استخدام الأدوات", solution: "نظام عهد واضح وتوعية" },
    { challenge: "فقدان الأدوات", solution: "QR/Barcode ونظام حجز إلكتروني" },
    { challenge: "ضعف التتبع", solution: "نظام CMMS وتتبع بالباركود" },
  ];

  return (
    <>
      {/* Page 30 */}
      <A4Page pageNum={69}>
        <SectionHeader icon={Wrench} title="إدارة العدد والأدوات والمعدات الفنية" subtitle="نظام موحد لإصدار وتتبع وصيانة الأدوات والمعدات" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              تعتمد كفاءة أعمال الصيانة بشكل أساسي على توفر العدد والأدوات المناسبة. ترتبط جودة وسرعة تنفيذ أعمال الصيانة مباشرة بتوفر الأدوات وجودتها وتنظيم استخدامها وتوفر المعدات التخصصية للتشخيص والفحص.
            </p>
          </div>

          <CallOutBox type="critical" title="التحديات في الأنظمة التقليدية">
            <DataTable columns={challengesCols} rows={challengesRows} />
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 30.5 (System Objectives) */}
      <A4Page pageNum={70}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Target} title="أهداف النظام" />
            <FlowChart
              nodes={[
                { id: "هدف", label: "نظام إدارة العدد والأدوات", icon: "🎯", color: "navy" },
                { id: "أ1", label: "تنظيم وإدارة جميع الأدوات", icon: "📋" },
                { id: "أ2", label: "رفع كفاءة فرق الصيانة", icon: "📈" },
                { id: "أ3", label: "تقليل زمن الأعطال", icon: "⏱️" },
                { id: "أ4", label: "تحسين جودة التشخيص الفني", icon: "🔍" },
                { id: "أ5", label: "تقليل الفقد والهدر", icon: "💰" },
                { id: "أ6", label: "تحسين استغلال المعدات المشتركة", icon: "🔄" },
                { id: "أ7", label: "رفع مستوى السلامة", icon: "🛡️" },
              ]}
              edges={[
                { from: "هدف", to: "أ1" }, { from: "هدف", to: "أ2" },
                { from: "هدف", to: "أ3" }, { from: "هدف", to: "أ4" },
                { from: "هدف", to: "أ5" }, { from: "هدف", to: "أ6" },
                { from: "هدف", to: "أ7" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 31 */}
      <A4Page pageNum={71}>
        <div className="space-y-4 mt-4">
          <CallOutBox type="goal" title="فلسفة النظام">
            يقوم النظام على إنشاء منظومة مركزية لإدارة العدد والأدوات والمعدات التخصصية وربطها مباشرة بعمليات التشغيل والصيانة، بحيث تتعامل مع الأدوات باعتبارها أصولا تشغيلية وموارد مشتركة وعناصر أساسية لنجاح العمل.
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Wrench} title="تصنيف العدد والأدوات" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">العدد والأدوات اليومية</h4>
            <DataTable columns={dailyToolsCols} rows={dailyToolsRows} />
            <h4 className="text-xs font-bold text-slate-700 mt-4 mb-2">الأدوات التخصصية</h4>
            <DataTable columns={specToolsCols} rows={specToolsRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 32 */}
      <A4Page pageNum={72}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">المعدات المشتركة</h4>
            <DataTable columns={sharedToolsCols} rows={sharedToolsRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={ClipboardCheck} title="إدارة العهد والأدوات" />
            <h4 className="text-xs font-bold text-slate-700 mb-2">تسجيل الأدوات</h4>
            <DataTable columns={regCols} rows={regRows} />
            <h4 className="text-xs font-bold text-slate-700 mt-4 mb-2">تتبع العهد</h4>
            <DataTable columns={trustCols} rows={trustRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 33 */}
      <A4Page pageNum={73}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">متابعة الحالة</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "حالة", label: "حالة الأداة", icon: "📊", color: "navy" },
                { id: "صالح", label: "صالح — جاهز", icon: "✅", color: "green" },
                { id: "صيانة", label: "تحت الصيانة", icon: "🔧", color: "amber" },
                { id: "مفقود", label: "مفقود", icon: "❌", color: "red" },
                { id: "معايرة", label: "يحتاج معايرة", icon: "⚖️", color: "amber" },
              ]}
              edges={[
                { from: "حالة", to: "صالح" }, { from: "حالة", to: "صيانة" },
                { from: "حالة", to: "مفقود" }, { from: "حالة", to: "معايرة" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 33.5 (Shared Equipment Reservation Flowchart) */}
      <A4Page pageNum={74}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Settings2} title="نظام الحجز للمعدات المشتركة" />
            <FlowChart
              nodes={[
                { id: "حاجة", label: "حاجة لمعدة", icon: "🔧", color: "amber" },
                { id: "حجز", label: "حجز بالنظام", icon: "📋" },
                { id: "تحقق", label: "تحقق التوفر", icon: "🔍" },
                { id: "متوفرة", label: "استلام وتسجيل عهدة", icon: "✅", color: "green" },
                { id: "إعادة", label: "إعادة وتحديث الحالة", icon: "🔄" },
              ]}
              edges={[
                { from: "حاجة", to: "حجز" },
                { from: "حجز", to: "تحقق" },
                { from: "تحقق", to: "متوفرة" },
                { from: "متوفرة", to: "إعادة" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 34 */}
      <A4Page pageNum={75}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Monitor} title="الربط مع نظام CMMS" />
            <DataTable columns={cmmsLinkCols} rows={cmmsLinkRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={ClipboardCheck} title="دور المكتب الفني" />
            <DataTable columns={officeRoleCols} rows={officeRoleRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="التحديات المتوقعة والحلول" />
            <DataTable columns={problemCols} rows={problemRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 35 */}
      <A4Page pageNum={76}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Award} title="خلاصة القسم الرابع" />
            <CallOutBox type="goal" title="خلاصة">
              يمثل نظام إدارة العدد والأدوات والمعدات الفنية عنصرا أساسيا في نجاح منظومة الصيانة المركزية، حيث يساهم في دعم فرق الصيانة ورفع كفاءة التشخيص الفني وتحسين جودة التشغيل وتقليل الأعطال والتكاليف.
            </CallOutBox>
            <CallOutBox type="critical" title="التوصية الإجرائية">
              حصر جميع العدد والأدوات الحالية لدى الفنيين والمواقع، وتسجيلها في نظام CMMS كعهدة، مع وضع ملصقات QR لربطها إلكترونياً.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 36 (Page 48) - النموذج 9: طلب حجز واستعارة معدة مشتركة */}
      <A4Page pageNum={77}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="النموذج 9: طلب استعارة معدة مشتركة" subtitle="نموذج حجز واستلام الأدوات والأجهزة التخصصية المشتركة بين فروع ومواقع المجموعة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>رقم طلب الحجز: REQ-EQP-0891</div>
                <div>تاريخ الطلب: 25-05-2026</div>
                <div>حالة الطلب: ✅ معتمد</div>
              </div>
              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>اسم الفني المستعير:</strong> مأمون عبد الله الرشيد</div>
                  <div><strong>مستودع الاستلام:</strong> مخزن الورشة المركزية</div>
                </div>
                <div className="border border-slate-200 p-2 rounded bg-slate-50 text-[10px]">
                  <strong>المعدة المطلوبة للحجز:</strong> كاميرا فحص حراري عالية الدقة (FLIR T530) مع كامل ملحقاتها وحقيبة الحماية وحامل ثلاثي.
                  <div className="mt-1 text-blue-700"><strong>الغرض التشغيلي:</strong> إجراء الفحص الحراري الدوري الاستباقي للوحات الكهربائية الرئيسية بمستودع الأدوية - جدة.</div>
                </div>
                <table className="w-full text-right text-[9px] border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                      <th className="p-1.5 border-l border-slate-200">فحص ما قبل الاستلام</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">حالة الجهاز</th>
                      <th className="p-1.5 border-l border-slate-200">تفاصيل الملاحظات الفنية</th>
                      <th className="p-1.5 text-center">تاريخ الإرجاع المقرر</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">سلامة الهيكل والعدسة والشاشة</td>
                      <td className="p-1.5 border-l border-slate-200 text-center text-green-600 font-bold">🟢 سليم تماماً</td>
                      <td className="p-1.5 border-l border-slate-200 text-slate-500">لا توجد أي خدوش بالعدسة.</td>
                      <td className="p-1.5 text-center font-mono font-bold text-blue-700 row-span-2" rowSpan={2}>27-05-2026 (خلال يومين)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">حالة البطارية والملحقات والشاحن</td>
                      <td className="p-1.5 border-l border-slate-200 text-center text-green-600 font-bold">🟢 سليم تماماً</td>
                      <td className="p-1.5 border-l border-slate-200 text-slate-500">البطارية مشحونة بنسبة 100%.</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                  <strong>تعهد الفني:</strong> أقر باستلام المعدة المذكورة أعلاه بحالة سليمة ونظيفة وأتعهد بالمحافظة عليها وإرجاعها في الوقت المحدد وإبلاغ الورشة فوراً بأي عطل.
                  <div className="flex justify-between pt-2">
                    <span>توقيع الفني المستلم: __________________</span>
                    <span>توقيع أمين الورشة: __________________</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 37 (Page 49) - النموذج 10: سجل فحص العدد والأدوات الشخصية الأسبوعي */}
      <A4Page pageNum={78}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Wrench} title="النموذج 10: سجل فحص الأدوات الشخصية" subtitle="بطاقة الفحص الأسبوعي للتحقق من اكتمال وسلامة حقيبة الأدوات الفردية للفنيين" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-3 gap-2 font-bold text-center">
                <div>اسم الفني: سليم أحمد فاروق</div>
                <div>الرقم الوظيفي: TECH-2891</div>
                <div>تاريخ الفحص: 25-05-2026</div>
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200">البيان والأدوات الشخصية الواجب توفرها</th>
                    <th className="p-2 border-l border-slate-200 text-center">الكمية المقررة</th>
                    <th className="p-2 border-l border-slate-200 text-center">الكمية الموجودة فعلياً</th>
                    <th className="p-2 border-l border-slate-200 text-center">حالة صلاحية الأداة</th>
                    <th className="p-2 text-center">الإجراء التشغيلي الموصى به</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">مجموعة مفكات معزولة (1000 فولت)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">1 طقم (6 قطع)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">1 طقم (6 قطع)</td>
                    <td className="p-2 border-l border-slate-200 text-center text-green-600 font-bold">🟢 سليم وصالح</td>
                    <td className="p-2 text-slate-500 text-[9px]">لا توجد ملاحظات.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">جهاز قياس التيار والجهد (Clamp Meter)</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">1 وحدة</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">1 وحدة</td>
                    <td className="p-2 border-l border-slate-200 text-center text-amber-600 font-bold">🟡 يحتاج معايرة</td>
                    <td className="p-2 text-red-800 text-[9px] font-bold">إرسال لمعايرة ربع سنوية فوراً.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-medium">زرادية أسلاك معزولة قطاعة</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">2 وحدة</td>
                    <td className="p-2 border-l border-slate-200 text-center font-mono">1 وحدة</td>
                    <td className="p-2 border-l border-slate-200 text-center text-red-600 font-bold">🔴 عجز قطعة</td>
                    <td className="p-2 text-red-800 text-[9px] font-bold">مفقودة بالموقع. طلب صرف بديل على حساب الفني.</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                <strong>توجيه مشرف الفحص الميداني:</strong> تم التوجيه بصرف زرادية أسلاك بديلة لضمان إتمام أعمال الصيانة الكهربائية بشكل آمن وتلافي المخاطر التشغيلية.
                <div className="flex justify-between pt-2">
                  <span>توقيع الفني: __________________</span>
                  <span>توقيع المشرف المفتش: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 38 (Page 50) - جدول وجدول صيانة ومعايرة أجهزة القياس الحساسة */}
      <A4Page pageNum={79}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Settings2} title="مخطط معايرة أجهزة القياس الحساسة" subtitle="جدول الفحص الدوري والتأهيل لأجهزة الاختبار والتفتيش لضمان دقة القراءات بالمواقع" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <p className="text-slate-700 leading-relaxed mb-3">
              لضمان دقة فحوصات الصيانة الكهربائية والميكانيكية ومنع اتخاذ قرارات خاطئة بناءً على قراءات غير دقيقة للأجهزة، يتم تطبيق نظام المعايرة الدوري التالي للأجهزة التخصصية:
            </p>
            <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  <th className="p-2 border-l border-slate-200">اسم جهاز القياس وكوده</th>
                  <th className="p-2 border-l border-slate-200 text-center">تاريخ آخر معايرة</th>
                  <th className="p-2 border-l border-slate-200 text-center">تاريخ المعايرة التالية</th>
                  <th className="p-2 border-l border-slate-200">جهة المعايرة المعتمدة</th>
                  <th className="p-2 text-center">حالة الاعتماد في CMMS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">كاميرا الفحص الحراري (FLIR-T530)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">15-01-2026</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">15-01-2027</td>
                  <td className="p-2 border-l border-slate-200">المختبر الوطني المعتمد للمعايرة</td>
                  <td className="p-2 text-center text-green-600 font-bold">🟢 ساري وصالح</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">جهاز قياس مقاومة العزل (Megger Meter)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">03-03-2026</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">03-09-2026</td>
                  <td className="p-2 border-l border-slate-200">مختبر القياس والمعايرة الداخلي بالشركة</td>
                  <td className="p-2 text-center text-green-600 font-bold">🟢 ساري وصالح</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 border-l border-slate-200 font-medium">أفوميتر قياس الكهرباء (Fluke 179)</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">20-11-2025</td>
                  <td className="p-2 border-l border-slate-200 text-center font-mono">20-05-2026</td>
                  <td className="p-2 border-l border-slate-200">مختبر المعايرة الخارجي المعتمد</td>
                  <td className="p-2 text-center text-red-600 font-bold">🔴 منتهى الصلاحية</td>
                </tr>
              </tbody>
            </table>
            <CallOutBox type="critical" title="توجيه أمان فني">
              يُمنع استخدام أي جهاز قياس منتهي شهادة المعايرة في فحص اللوحات أو الأصول وتصنيفه تلقائياً كـ (غير متاح للاستخدام) في CMMS لحين تحديث المعايرة.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 39 (Page 51) - إجراء تشغيل معتمد (SOP) للتعامل مع فقدان أو تلف عهدة فنية */}
      <A4Page pageNum={80}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="بروتوكول فقدان وتلف العهد الفنية" subtitle="إجراء عمل معتمد (SOP) للتحقيق في الفقد وتحديد المسؤولية وتأمين البدائل" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed">
              عند تعرض أي أداة أو معدة فنية للفقد أو التلف في المواقع، يلتزم الفنيون والمشرفون بتطبيق السياسة الموحدة التالية:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px] text-slate-700">
              <h5 className="font-bold text-slate-800">خطوات معالجة حوادث العهد الفنية:</h5>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>التبليغ الفوري</strong>: يجب على الفني إرسال إشعار فوري عبر تطبيق الجوال يفيد بفقد أو تلف الأداة خلال 4 ساعات من الحادثة.</li>
                <li><strong>التحقيق الأولي</strong>: يقوم مشرف الموقع بمعاينة مكان العقد الفني أو الفقد وكتابة تقرير لتوضيح ما إذا كان التلف ناتجاً عن استهلاك طبيعي أو إهمال وسوء استخدام.</li>
                <li><strong>الصرف البديل السريع</strong>: يقوم المكتب الفني باعتماد صرف أداة بديلة فوراً من مخزن الورشة لتفادي توقف الأعمال التشغيلية.</li>
                <li><strong>تحديد التكلفة</strong>: إذا ثبت الإهمال، يتم خصم قيمة الأداة الدفترية من مستحقات الفني بالتقسيط، أما في حالة الاستهلاك الطبيعي فيتم تحملها بالكامل كأعباء صيانة تشغيلية.</li>
              </ol>
            </div>
            <CallOutBox type="tip" title="تحديث البيانات">
              يتم تعديل حالة القطعة المفقودة تلقائياً في قاعدة بيانات CMMS كـ (تالفة/مفقودة) وتحديث رصيد المستودع لتفادي حدوث فروقات جرد دوري.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 40 (Page 52) - سيناريو واقعي لاستخدام الكاميرا الحرارية للكشف الاستباقي */}
      <A4Page pageNum={81}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Lightbulb} title="سيناريو الكشف الاستباقي بالكاميرات الحرارية" subtitle="مثال تطبيقي عملي للكشف عن التماس وسخونة الكابلات بمركز البيانات بجدة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-navy-600">الفحص الحراري الاستباقي للوحة التوزيع الرئيسية (MDB-1):</h4>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-2 text-[10px] text-slate-700">
              <p>
                <strong>الحالة</strong>: أثناء الزيارة التفقدية الربع سنوية لمهندس الدعم الفني لمركز البيانات الرئيسي بجدة، تم إجراء مسح شامل لوصلات لوحة الكهرباء الرئيسية المغذية للخوادم باستخدام الكاميرا الحرارية (FLIR T530).
              </p>
              <p>
                <strong>الملاحظة الحرارية</strong>: رصدت شاشة الكاميرا وجود نقطة ساخنة شديدة (Hot Spot) بلغت درجة حرارتها 98 درجة مئوية عند وصلة القاطع المساعد للطابق الأول، بينما درجات الحرارة الطبيعية للوصلات الأخرى كانت لا تتعدى 42 درجة مئوية.
              </p>
              <p>
                <strong>الإجراء الفوري</strong>: تم على الفور عزل الحمل، وتشغيل التغذية البديلة الاحتياطية (UPS)، وشد براغي التوصيل المرتخية (Loose Connection) التي تسببت في زيادة المقاومة والحرارة، وإجراء الفحص الحراري مرة أخرى للتأكد من هبوط الحرارة إلى 38م.
              </p>
            </div>
            <CallOutBox type="critical" title="الأثر وحجم تفادي الخسائر">
              بفضل هذا الفحص التشخيصي المتقدم، تم تفادي حدوث التماس كهربائي وانفجار محتمل في القاطع الرئيسي كان سيؤدي لتوقف كامل مركز البيانات، وخسائر تشغيلية ومعلوماتية تفوق مئات الآلاف من الريالات.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 41 (Page 53) - استمارة استلام وإرجاع عهدة فنية مؤقتة للمقاولين */}
      <A4Page pageNum={82}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="استمارة عهدة مؤقتة للمقاولين الخارجيين" subtitle="نموذج تسليم واستلام الأدوات والأجهزة التخصصية الممنوحة لمقاولين وموردين خارجيين" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 grid grid-cols-2 gap-2 font-bold text-center">
                <div>رقم عهدة مقاول: TEP-CTR-038</div>
                <div>اسم المقاول: شركة الإنماء للخدمات الكهربائية</div>
              </div>
              <div className="p-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>اسم المندوب المستلم:</strong> م. طارق اليوسف</div>
                  <div><strong>تاريخ التسليم:</strong> 25-05-2026</div>
                </div>
                <table className="w-full text-right text-[10px] border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                      <th className="p-1.5 border-l border-slate-200">المعدة / الأداة المستلمة</th>
                      <th className="p-1.5 border-l border-slate-200 text-center">الكمية</th>
                      <th className="p-1.5 border-l border-slate-200">الرقم التسلسلي (S/N)</th>
                      <th className="p-1.5 text-center">حالة المعدة عند التسليم</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">جهاز قياس وتحليل اهتزازات المحركات (Vibration Analyzer)</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">1 وحدة</td>
                      <td className="p-1.5 border-l border-slate-200 font-mono">VIB-89021-99</td>
                      <td className="p-1.5 text-center text-green-600 font-bold">🟢 ممتاز (معايرة سارية)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-1.5 border-l border-slate-200 font-medium">جهاز اختبار شبكات الألياف الضوئية (OTDR Tester)</td>
                      <td className="p-1.5 border-l border-slate-200 text-center font-mono">1 وحدة</td>
                      <td className="p-1.5 border-l border-slate-200 font-mono">OTD-28912-33</td>
                      <td className="p-1.5 text-center text-green-600 font-bold">🟢 ممتاز (معايرة سارية)</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                  <strong>إقرار التزام المقاول:</strong> نقر ونلتزم كجهة مستفيدة بإرجاع هذه الأدوات التخصصية بحالتها الأصلية فور انتهاء مدة المشروع المقررة في 30-05-2026، ونتحمل المسؤولية المالية والقانونية الكاملة عن أي تلف أو فقدان يلحق بها.
                  <div className="flex justify-between pt-2">
                    <span>توقيع ممثل المقاول: __________________</span>
                    <span>اعتماد مشرف عهد المواقع: __________________</span>
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
