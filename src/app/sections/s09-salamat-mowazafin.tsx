import { Users, Heart, Shield, BookOpen, Bell, Ambulance, ClipboardCheck, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section09() {
  const ppeCols = [{ key: "ppe", label: "المعدة" }, { key: "when", label: "متى تستخدم" }, { key: "note", label: "ملاحظات" }];
  const ppeRows = [
    { ppe: "خوذة السلامة (Hard Hat)", when: "جميع مواقع العمل والصيانة", note: "استبدال كل 3 سنوات أو بعد صدمة" },
    { ppe: "نظارات السلامة", when: "أعمال القطع والطحن والكيماويات", note: "توفير نظارات مضادة للضباب" },
    { ppe: "سماعات الأذن", when: "الأماكن ذات الضوضاء العالية (85 ديسيبل+)", note: "متوفرة بنوعين: داخلية وخارجية" },
    { ppe: "قفازات العمل", when: "جميع أعمال الصيانة — حسب نوع المهمة", note: "قفازات مقاومة للقطع للكهرباء" },
    { ppe: "أحذية السلامة", when: "جميع الأوقات في مواقع العمل", note: "مقاومة للانزلاق والصدمات" },
    { ppe: "حزام الأمان (Safety Harness)", when: "أعمال على ارتفاع أكثر من 1.8 متر", note: "ربط الحزام بنظام إنقاذ" },
    { ppe: "قناع التنفس (Respirator)", when: "أعمال الدهان — الغبار — الكيماويات", note: "فلتر حسب نوع الملوثات" },
    { ppe: "ملابس العمل", when: "طوال فترة العمل", note: "طويلة الأكمام — عاكسة للضوء" },
  ];
  const trainCols = [{ key: "course", label: "الدورة التدريبية" }, { key: "audience", label: "الفئة المستهدفة" }, { key: "freq", label: "الدورية" }];
  const trainRows = [
    { course: "أساسيات السلامة المهنية", audience: "جميع الموظفين", freq: "عند التعيين + سنوي" },
    { course: "مكافحة الحرائق والإخلاء", audience: "جميع الموظفين", freq: "سنوي" },
    { course: "الإسعافات الأولية", audience: "فريق السلامة — مشرفو المواقع", freq: "سنوي" },
    { course: "العمل الآمن على ارتفاعات", audience: "الفنيون — المقاولون", freq: "سنوي" },
    { course: "العمل الآمن في الأماكن المغلقة", audience: "الفنيون — المقاولون", freq: "سنوي" },
    { course: "الوعي بالمخاطر الكهربائية", audience: "الفنيون الكهربائيون", freq: "سنوي" },
    { course: "تحليل المخاطر (JSA/JHA)", audience: "المشرفون — المهندسون", freq: "سنوي" },
  ];

  return (
    <>
      {/* Page 56 */}
      <A4Page pageNum={132}>
        <SectionHeader icon={Users} title="سلامة الموظفين" subtitle="برنامج شامل للوقاية والتدريب والاستجابة" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              سلامة الموظفين هي أولوية قصوى في منظومة الصيانة المركزية. يهدف هذا القسم إلى وضع إطار متكامل لحماية الموظفين من مخاطر بيئة العمل من خلال الوقاية والتدريب والاستجابة الفعالة.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Shield} title="معدات الوقاية الشخصية (PPE)" />
            <DataTable columns={ppeCols} rows={ppeRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 56.5 (Employee Safety Principles Flowchart) */}
      <A4Page pageNum={133}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مبادئ سلامة الموظفين</h4>
            <FlowChart
              title="مبادئ سلامة الموظفين"
              dir="LR"
              nodes={[
                { id: "e1", label: "الوقاية", sub: "منع الحوادث قبل وقوعها", icon: "🛡️", color: "green" },
                { id: "e2", label: "التدريب", sub: "تأهيل الموظفين للسلامة", icon: "📚", color: "blue" },
                { id: "e3", label: "المعدات", sub: "توفير معدات الوقاية", icon: "🦺", color: "navy" },
                { id: "e4", label: "الاستجابة", sub: "خطط طوارئ فعالة", icon: "🚨", color: "amber" },
              ]}
              edges={[
                { from: "e1", to: "e2" },
                { from: "e2", to: "e3" },
                { from: "e3", to: "e4" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 57 */}
      <A4Page pageNum={134}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={BookOpen} title="برامج التدريب والتوعية" />
            <DataTable columns={trainCols} rows={trainRows} />
          </div>

          <CallOutBox type="tip" title="ثقافة السلامة">
            <ul className="list-disc list-inside text-slate-700 space-y-1 text-xs">
              <li><strong>الإبلاغ عن المخاطر</strong> — تشجيع الموظفين على الإبلاغ عن أي مخاطر محتملة</li>
              <li><strong>اجتماع السلامة اليومي</strong> — 5 دقائق قبل بدء العمل (Toolbox Talk)</li>
              <li><strong>جوائز السلامة</strong> — تكريم المواقع والفرق التي تحقق صفر حوادث</li>
              <li><strong>الإبلاغ عن الحوادث الوشيكة (Near Miss)</strong> — تشجيع الإبلاغ للتعلم والتحسين</li>
            </ul>
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Ambulance} title="خطة الاستجابة للطوارئ" />
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="border border-slate-200 rounded-lg p-3">
                <h4 className="font-bold text-slate-700 mb-2">حالات الطوارئ المحتملة</h4>
                <ul className="text-slate-600 space-y-1 list-disc list-inside">
                  <li>حرائق — تسرب غاز — انهيارات</li>
                  <li>إصابات عمل — صعقات كهربائية</li>
                  <li>حوادث مرورية للموظفين</li>
                </ul>
              </div>
              <div className="border border-slate-200 rounded-lg p-3">
                <h4 className="font-bold text-slate-700 mb-2">متطلبات الجاهزية</h4>
                <ul className="text-slate-600 space-y-1 list-disc list-inside">
                  <li>طفايات حريق — مخارج طوارئ واضحة</li>
                  <li>حقائب إسعافات أولية في كل موقع</li>
                  <li>فريق إسعافات أولية مدرب في كل وردية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 81 - Form 18: Power Outage Emergency Response SOP & Checklist */}
      <A4Page pageNum={135}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={AlertTriangle} title="النموذج ١٨: سيناريو انقطاع التيار الكهربائي" subtitle="إجراء التشغيل المعياري (SOP) للتعامل الطارئ والسريع عند انقطاع الكهرباء بالمباني الحيوية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              يهدف هذا السيناريو المعياري إلى تنسيق الجهود الميدانية الفورية لضمان الانتقال السلس للأحمال الكهربائية الحيوية إلى المولد الاحتياطي دون انقطاع:
            </p>
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-center">
                إجراءات التدخل والتشغيل المعياري (Emergency Response Steps)
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 font-bold">
                    <th className="p-2 border-l border-slate-200 w-[20%]">زمن الاستجابة</th>
                    <th className="p-2 border-l border-slate-200">الإجراء المطلوب تنفيذه</th>
                    <th className="p-2 border-l border-slate-200 text-center w-[25%]">الجهة المسؤولة</th>
                    <th className="p-2 text-center w-[15%]">الحالة بالـ CMMS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 text-red-600 font-bold text-center">⏱️ دقيقة ١ - ٣</td>
                    <td className="p-2 border-l border-slate-200">التحقق من إقلاع المولد الاحتياطي (Generator ATS) وتغذيته للوحات الطوارئ وغرف السيرفرات والتبريد</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-700">فني الكهرباء المناوب للموقع</td>
                    <td className="p-2 text-center text-green-600 font-bold">🟢 جاري التنفيذ</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 border-l border-slate-200 text-red-600 font-bold text-center">⏱️ دقيقة ٤ - ٧</td>
                    <td className="p-2 border-l border-slate-200">التحقق الميداني من عدم وجود أشخاص عالقين داخل مصاعد المبنى بالكامل وفتحها يدوياً بواسطة مفاتيح الطوارئ عند الحاجة</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-700">فني المصاعد ومسؤول السلامة</td>
                    <td className="p-2 text-center text-green-600 font-bold">🟢 جاري التنفيذ</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-l border-slate-200 text-red-600 font-bold text-center">⏱️ دقيقة ٨ - ١٥</td>
                    <td className="p-2 border-l border-slate-200">مراقبة مستمرة لحرارة مستودعات الأدوية وغرف التبريد والتحقق من كفاءة عمل تكييف الطوارئ المتصل بالمولد</td>
                    <td className="p-2 border-l border-slate-200 text-center text-slate-700">فني التكييف والتبريد الميداني</td>
                    <td className="p-2 text-center text-green-600 font-bold">🟢 جاري التنفيذ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CallOutBox type="critical" title="قاعدة سلامة المولدات">
              يجب فحص مستوى وقود الديزل في خزان المولد يومياً وتحديث قراءته على تطبيق CMMS، ويحظر بقاء مستوى الديزل تحت ٥٠٪ من سعة الخزان في أي وقت لتجنب التوقف المفاجئ.
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 82 - Emergency Mock Drill Calendar & First Aid Protocols */}
      <A4Page pageNum={136}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Ambulance} title="جدول الفرضيات السنوي وبروتوكولات الإسعافات" subtitle="جدولة تدريبات الإخلاء الوهمية وتجهيز حقائب الإسعافات الأولية بالفروع" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              لضمان جاهزية الموظفين للتصرف السليم أثناء الكوارث والحالات الحرجة، تم إقرار خطة سنوية للتدريبات العملية وبروتوكولات الإسعافات:
            </p>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-1.5 border-b border-slate-200 font-bold text-center">
                جدول تدريبات الإخلاء والفرضيات الوهمية السنوي (Mock Drill Calendar)
              </div>
              <table className="w-full text-right text-[9px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 font-bold">
                    <th className="p-2 border-l border-slate-150">نوع الفرضية الوهمية</th>
                    <th className="p-2 border-l border-slate-150">الهدف والمهارة المستهدفة</th>
                    <th className="p-2 border-l border-slate-150 text-center">الدورية</th>
                    <th className="p-2 text-center">الربع السنوي المخطط</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-150">
                    <td className="p-2 border-l border-slate-150 font-bold">🔥 إخلاء مبنى عند نشوب حريق</td>
                    <td className="p-2 border-l border-slate-150 text-slate-600">التدريب على استخدام مخارج الطوارئ ونقاط التجمع الآمنة واستخدام الطفايات</td>
                    <td className="p-2 border-l border-slate-150 text-center text-blue-600 font-bold">نصف سنوي</td>
                    <td className="p-2 text-center text-slate-700">الربع الأول + الربع الثالث</td>
                  </tr>
                  <tr className="border-b border-slate-150 bg-slate-50">
                    <td className="p-2 border-l border-slate-150 font-bold">🔌 انقطاع التيار الكهربائي بالكامل</td>
                    <td className="p-2 border-l border-slate-150 text-slate-600">اختبار استجابة الفنيين لتشغيل الطوارئ اليدوي وعزل الأحمال ومراقبة ATS</td>
                    <td className="p-2 border-l border-slate-150 text-center text-blue-600 font-bold">سنوي</td>
                    <td className="p-2 text-center text-slate-700">الربع الثاني (فترة الصيف والذروة)</td>
                  </tr>
                  <tr className="border-b border-slate-150">
                    <td className="p-2 border-l border-slate-150 font-bold">🚨 سيناريو إسعاف وإصابة ميدانية</td>
                    <td className="p-2 border-l border-slate-150 text-slate-600">التعامل الفوري مع صدمة كهربائية أو سقوط فني وعمل الإنعاش القلبي الرئوي (CPR)</td>
                    <td className="p-2 border-l border-slate-150 text-center text-blue-600 font-bold">سنوي</td>
                    <td className="p-2 text-center text-slate-700">الربع الرابع</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1 text-[9px] text-slate-600">
              <span className="font-bold text-slate-700 block mb-1">🏥 بروتوكول حيازة وتفتيش حقائب الإسعافات:</span>
              • يلتزم كل مشرف موقع بالتحقق الأسبوعي من اكتمال حقائب الإسعافات الأولية (ضمادات، معقمات، شاش، كرات قطنية).
              <br />
              • يثبت الباركود التعريفي على الحقيبة لمسحه وتوثيق الفحص الأسبوعي في نظام CMMS وإلا اعتبر حيوداً في شروط السلامة.
            </div>
          </div>
        </div>
      </A4Page>
    </>
  );
}
