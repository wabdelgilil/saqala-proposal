import { Factory, Hammer, Package, Users, Wrench, Shield, BarChart3, ClipboardCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section07() {
  const wsLevelCols = [{ key: "level", label: "المستوى" }, { key: "desc", label: "الوصف" }, { key: "work", label: "الأعمال" }];
  const wsLevelRows = [
    { level: "المستوى الأول — الورشة الخفيفة", desc: "مهام الصيانة البسيطة — تغيير قطع — إصلاحات طفيفة", work: "مكينة لحام، منشار، دريل، أدوات كهربائية" },
    { level: "المستوى الثاني — الورشة المتوسطة", desc: "إصلاح الأعطال المتوسطة — صيانة مكثفة", work: "جميع أعمال المستوى الأول + مخرطة + تمديدات" },
    { level: "المستوى الثالث — الورشة المتخصصة", desc: "أعمال متخصصة — معايرة — لف محركات", work: "أعمال متخصصة حسب الاحتياج" },
  ];
  const wsEquipCols = [{ key: "equip", label: "المعدة" }, { key: "spec", label: "المواصفات" }, { key: "qty", label: "العدد" }];
  const wsEquipRows = [
    { equip: "مكينة لحام (Argon / CO2)", spec: "220V - 200A", qty: "1" },
    { equip: "مخرطة صغيرة", spec: "قطر 300 مم", qty: "1" },
    { equip: "منشار شريط (قطع معادن)", spec: "يدوي / نصف آلي", qty: "1" },
    { equip: "دريل عمود", spec: "محرك 1 حصان", qty: "1" },
    { equip: "ضاغط هواء", spec: "خزان 100 لتر", qty: "1" },
    { equip: "رافعة ونش علوي (جسرية)", spec: "1-2 طن", qty: "1" },
    { equip: "مجموعة أدوات كهربائية متنوعة", spec: "صنفرة - صاروخ قطع - مفك", qty: "حسب الحاجة" },
    { equip: "جهاز لحام كهربائي (Spot Welder)", spec: "220V", qty: "1" },
  ];
  const wsStaffCols = [{ key: "role", label: "الدور" }, { key: "qty", label: "العدد" }, { key: "skill", label: "المهارات" }];
  const wsStaffRows = [
    { role: "مشرف ورشة", qty: "1", skill: "خبرة 10+ سنوات في الصيانة الميكانيكية والكهربائية" },
    { role: "فني ميكانيكا", qty: "2", skill: "لحام — خراطة — صيانة عامة" },
    { role: "فني كهرباء", qty: "1-2", skill: "صيانة محركات — لوحات تحكم" },
    { role: "فني تكييف وتبريد", qty: "1", skill: "صيانة وحدات التكييف" },
  ];
  const wsSafetyCols = [{ key: "rule", label: "قاعدة السلامة" }, { key: "action", label: "الإجراء" }];
  const wsSafetyRows = [
    { rule: "معدات الوقاية الشخصية", action: "ارتداء كامل معدات الوقاية داخل الورشة" },
    { rule: "تهوية", action: "ضمان تهوية مناسبة خاصة أثناء اللحام والدهان" },
    { rule: "إطفاء حرائق", action: "طفايات حريق مناسبة في متناول اليد + تدريب دوري" },
    { rule: "الفصل الكهربائي", action: "الفصل التام للتيار قبل بدء العمل على الأجهزة" },
    { rule: "نظافة الورشة", action: "تنظيم دائم ونظافة مستمرة لمنع الحوادث" },
  ];

  return (
    <>
      {/* Page 52 */}
      <A4Page pageNum={118}>
        <SectionHeader icon={Factory} title="إنشاء الورشة المركزية للصيانة" subtitle="بنية تحتية متكاملة لأعمال الصيانة المركزية" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              إنشاء ورشة مركزية للصيانة يهدف إلى توفير بنية تحتية متكاملة تدعم أعمال الصيانة التي يصعب تنفيذها في المواقع، وتعمل كمركز لإصلاح وتأهيل المعدات والأجهزة.
            </p>
          </div>

          <FlowChart
            title="مستويات الورشة المركزية"
            dir="LR"
            nodes={[
              { id: "w1", label: "ورشة خفيفة", sub: "إصلاحات بسيطة", icon: "🛠️", color: "blue" },
              { id: "w2", label: "ورشة متوسطة", sub: "صيانة مكثفة", icon: "⚙️", color: "navy" },
              { id: "w3", label: "ورشة متخصصة", sub: "أعمال تخصصية", icon: "🔧", color: "green" },
            ]}
            edges={[
              { from: "w1", to: "w2" },
              { from: "w2", to: "w3" },
            ]}
          />

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Package} title="مستويات الورشة المقترحة" />
            <DataTable columns={wsLevelCols} rows={wsLevelRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 52.5 (Workshop Equipment Table) */}
      <A4Page pageNum={119}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Wrench} title="التجهيزات والمعدات الأساسية" />
            <DataTable columns={wsEquipCols} rows={wsEquipRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 53 */}
      <A4Page pageNum={120}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Users} title="الكادر البشري للورشة" />
            <DataTable columns={wsStaffCols} rows={wsStaffRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Shield} title="قواعد السلامة في الورشة" />
            <DataTable columns={wsSafetyCols} rows={wsSafetyRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 53.5 (Workshop Workflow Flowchart) */}
      <A4Page pageNum={121}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BarChart3} title="آلية العمل" />
            <FlowChart
              title="سير العمل في الورشة"
              dir="LR"
              nodes={[
                { id: "step1", label: "استلام", sub: "تسجيل الأصل في CMMS", icon: "📦", color: "navy" },
                { id: "step2", label: "تشخيص", sub: "فحص وتحديد العطل", icon: "🔍", color: "blue" },
                { id: "step3", label: "إصلاح", sub: "تنفيذ الإصلاح", icon: "🔧", color: "green" },
                { id: "step4", label: "تسليم", sub: "اختبار + توثيق + إرجاع", icon: "✅", color: "amber" },
              ]}
              edges={[
                { from: "step1", to: "step2" },
                { from: "step2", to: "step3" },
                { from: "step3", to: "step4" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 74 - Form 16: Workshop Device Calibration Form */}
      <A4Page pageNum={122}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="النموذج ١٦: بطاقة أصل ومعايرة أجهزة الورشة" subtitle="نموذج توثيق وتتبع معايرة أجهزة القياس والاختبار بالورشة المركزية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-center">
                بطاقة معايرة جهاز قياس واختبار (Calibration Certificate Card)
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold border-l border-slate-200 w-1/4">اسم الجهاز / الموديل:</td>
                    <td className="p-2 border-l border-slate-200 w-1/4">جهاز قياس متعدد الرقمي (Fluke 87V)</td>
                    <td className="p-2 font-bold border-l border-slate-200 w-1/4">الرقم التسلسلي (S/N):</td>
                    <td className="p-2">FLK-87V-987654</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-bold border-l border-slate-200">الرمز التعريفي للأصل:</td>
                    <td className="p-2 border-l border-slate-200 text-blue-700 font-bold font-mono">EQ-WS-MULT-001</td>
                    <td className="p-2 font-bold border-l border-slate-200">تاريخ المعايرة الحالية:</td>
                    <td className="p-2 text-green-700 font-bold">٢٠٢٦/٠٥/١٥</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold border-l border-slate-200">الجهة المعايرة:</td>
                    <td className="p-2 border-l border-slate-200">مختبر المعايرة الوطني المعتمد</td>
                    <td className="p-2 font-bold border-l border-slate-200">تاريخ المعايرة القادمة:</td>
                    <td className="p-2 text-red-700 font-bold">٢٠٢٧/٠٥/١٤ (سنوي)</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-bold border-l border-slate-200">نسبة الانحراف المقيسة:</td>
                    <td className="p-2 border-l border-slate-200 text-green-700 font-mono">±0.05% (ضمن الحدود المقبولة)</td>
                    <td className="p-2 font-bold border-l border-slate-200">حالة الجهاز النهائية:</td>
                    <td className="p-2 text-green-600 font-bold">🟢 صالح للاستخدام والمعايرة</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-slate-50 p-2 text-[9px] text-slate-500 border-t border-slate-300">
                <strong>ملاحظة فنية:</strong> يجب وضع ملصق المعايرة الأخضر الصغير على جسم الجهاز موضحاً فيه رقم البطاقة وتاريخ المعايرة القادمة. يحظر استخدام الأجهزة التي تجاوزت تاريخ المعايرة المعتمد.
                <div className="flex justify-between pt-2">
                  <span>توقيع مسؤول المعايرة بالورشة: __________________</span>
                  <span>توقيع مهندس الجودة للمكتب الفني: __________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 75 - Workshop Zones Detail Layout */}
      <A4Page pageNum={123}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Factory} title="منظومة تقسيم مناطق الورشة بالتفصيل" subtitle="التوزيع الجغرافي وتخصيص مساحات الورشة المركزية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <p className="text-slate-700 leading-relaxed">
              لضمان انسيابية العمل ومنع التداخل بين الأنشطة الصناعية والأنشطة الدقيقة، تم تقسيم الورشة المركزية إلى ٤ مناطق منفصلة هيكلياً وفنياً:
            </p>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200 w-1/4">المنطقة الفنية</th>
                    <th className="p-2 border-l border-slate-200">التجهيزات المتوفرة بها</th>
                    <th className="p-2 text-center w-1/4">إجراءات السلامة الخاصة بالمنطقة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-bold">1️⃣ منطقة الأعمال الميكانيكية واللحام</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">مخرطة معادن، ماكينات لحام، مناشير كهربائية، طاولة التقطيع</td>
                    <td className="p-2 text-center text-red-600 font-bold">ستائر حماية للحام، طفايات حريق CO2، شفاطات سحب الدخان</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 border-l border-slate-200 font-bold">2️⃣ منطقة الأعمال الكهربائية والدقيقة</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">أجهزة معايرة، أوسيلوسكوب، مفكات معزولة، كواشف حرارية للوحات</td>
                    <td className="p-2 text-center text-blue-600 font-bold">أرضيات مطاطية عازلة للكهرباء، حظر استخدام المياه بالمنطقة</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-bold">3️⃣ منطقة الاختبار والمحاكاة الفنية</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">لوحات كهربائية لتجريب الأحمال، مضخات اختبار الضغط والتهريب</td>
                    <td className="p-2 text-center text-amber-600 font-bold">تسييج منطقة الاختبار، كاميرات مراقبة، حواجز حماية</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 border-l border-slate-200 font-bold">4️⃣ منطقة التخزين والاستقبال</td>
                    <td className="p-2 border-l border-slate-200 text-slate-600">أرفف تخزين مرقمة، رافعة يدوية، كراسات استلام وتسليم رقمية</td>
                    <td className="p-2 text-center text-green-600 font-bold">ترتيب الأصول وفق باركود CMMS، حظر إعاقة الممرات</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CallOutBox type="tip" title="حوكمة الفصل المكانى">
              يساهم الفصل المكاني الدقيق في حماية الأجهزة الحساسة للقياس (مثل الأجهزة الكهربائية) من الأتربة وشرارات ماكينات اللحام والقطع، مما يطيل عمرها ويحافظ على دقتها التشغيلية.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 76 - Compressor Overhaul SOP */}
      <A4Page pageNum={124}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Hammer} title="دليل الصيانة: عمرة ضواغط الهواء الكبرى" subtitle="إجراء التشغيل المعياري (SOP) لصيانة وإعادة تأهيل ضواغط الهواء بالورشة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              تعتبر ضواغط الهواء بالورشة من المعدات التشغيلية الكبرى التي تتطلب عمرة دورية تفصيلية لضمان استقرار ضغط الهواء وحماية الأدوات المشتركة:
            </p>
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-2">خطوات العمل المعيارية لصيانة الضواغط:</h5>
              <ol className="space-y-2 text-slate-600 list-decimal list-inside">
                <li>
                  <strong>🔒 الفصل والعزل الكامل (LOTO)</strong>: فصل التيار الكهربائي الرئيسي عن الضاغط ووضع قفل وبطاقة تحذيرية لمنع التشغيل الخاطئ.
                </li>
                <li>
                  <strong>💨 تفريغ الضغط</strong>: فتح صمامات الهواء لتصريف أي ضغط متبقي في الخزان بالكامل والتأكد من قراءة العداد للصفر.
                </li>
                <li>
                  <strong>🔧 تفكيك الأجزاء الخارجية</strong>: فك فلاتر الهواء، السيور، وحماية المروحة، وفحص الأجزاء تلو الأخرى للبحث عن علامات التلف.
                </li>
                <li>
                  <strong>🛢️ تغيير الزيت والفلتر</strong>: تفريغ الزيت القديم وتنظيف الخزان السفلي ثم إضافة زيت ضواغط معتمد وتركيب الفلتر الجديد.
                </li>
                <li>
                  <strong>🔍 فحص واختبار الصمامات والأحكام</strong>: فحص صمام الأمان (Safety Valve) للتأكد من عدم وجود انسداد أو تهريب هواء.
                </li>
              </ol>
            </div>
            <CallOutBox type="critical" title="قاعدة سلامة حرجة">
              يحظر البدء بأي أعمال تفكيك للضاغط قبل التأكد التام من تفريغ خزان الهواء من الضغط تماماً، حيث يمثل الهواء المضغوط طاقة كامنة قاتلة في حال الفك العشوائي.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 77 - Workshop Machinery Maintenance Schedule */}
      <A4Page pageNum={125}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={BarChart3} title="جدول الصيانة الوقائية لمعدات الورشة" subtitle="خطة الصيانة الوقائية الذاتية لمعدات الورشة المركزية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              تخضع معدات الورشة ذاتها لجدول صيانة وقائية صارم عبر نظام CMMS للتأكد من جاهزيتها الدائمة لدعم المواقع الخارجية:
            </p>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200">المعدة بالورشة</th>
                    <th className="p-2 border-l border-slate-200">نوع الصيانة المطلوبة</th>
                    <th className="p-2 border-l border-slate-200 text-center">الدورية</th>
                    <th className="p-2 text-center">المسؤول عن التنفيذ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-bold">🗜️ مخرطة المعادن</td>
                    <td className="p-2 border-l border-slate-200">تشحيم المجاري الحديدية، تنظيف الرايش، قياس المحاذاة والسرعات</td>
                    <td className="p-2 border-l border-slate-200 text-center text-blue-600 font-bold">أسبوعي</td>
                    <td className="p-2 text-center text-slate-700">فني خراطة وميكانيكا</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 border-l border-slate-200 font-bold">⚡ ماكينة اللحام CO2</td>
                    <td className="p-2 border-l border-slate-200">تنظيف فوهات اللحام، التحقق من التمديدات الأرضية العازلة</td>
                    <td className="p-2 border-l border-slate-200 text-center text-blue-600 font-bold">شهري</td>
                    <td className="p-2 text-center text-slate-700">فني كهربائي الورشة</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 font-bold">💨 ضاغط الهواء الكبير</td>
                    <td className="p-2 border-l border-slate-200">تفريغ الرطوبة والمياه من صمام التصريف السفلي للخزان</td>
                    <td className="p-2 border-l border-slate-200 text-center text-red-600 font-bold">يومي</td>
                    <td className="p-2 text-center text-slate-700">فني ميكانيكا الورشة</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 border-l border-slate-200 font-bold">🏗️ الونش العلوي الجسري</td>
                    <td className="p-2 border-l border-slate-200">فحص الواير الحديدي، التأكد من سلامة كبح المكابح والتروس</td>
                    <td className="p-2 border-l border-slate-200 text-center text-purple-600 font-bold">نصف سنوي</td>
                    <td className="p-2 text-center text-slate-700">جهة تفتيش فنية خارجية</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CallOutBox type="safety" title="ربط صيانة الورشة بالـ CMMS">
              يتم إصدار أوامر العمل لصيانة معدات الورشة تلقائياً في أول كل أسبوع، ويحظر تأخير أو إغلاق هذه الأوامر إلا بعد التحقق الفعلي من مشرف الورشة لضمان الجاهزية والسلامة.
            </CallOutBox>
          </div>
        </div>
      </A4Page>
    </>
  );
}
