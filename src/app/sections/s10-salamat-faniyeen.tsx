import { HardHat, AlertTriangle, ClipboardCheck, Users, Shield, BookOpen, FileText, Eye } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";

export default function Section10() {
  const hazCols = [{ key: "hazard", label: "الخطر" }, { key: "risk", label: "المخاطر المحتملة" }, { key: "control", label: "إجراءات التحكم" }];
  const hazRows = [
    { hazard: "الأعمال الكهربائية", risk: "صعقة كهربائية — حروق — حريق", control: "فصل التيار — استخدام معدات معزولة — تصريح عمل" },
    { hazard: "العمل على ارتفاعات", risk: "سقوط — إصابات بالغة", control: "حزام أمان — سقالة آمنة — تدريب" },
    { hazard: "الأعمال الميكانيكية", risk: "جروح — بتر — حروق", control: "واقي المعدات — قفازات — إغلاق مصدر الطاقة" },
    { hazard: "اللحام والقطع", risk: "حروق — شرر — استنشاق أبخرة", control: "ملابس واقية — تهوية — تصريح عمل ساخن" },
    { hazard: "الأعمال في الأماكن المغلقة", risk: "اختناق — نقص أكسجين — انفجار", control: "فحص الغاز — تهوية — مراقب خارجي" },
    { hazard: "التعامل مع المواد الكيماوية", risk: "حروق — تسمم — حساسية", control: "ورقة بيانات السلامة — قفازات كيماوية — تهوية" },
    { hazard: "القيادة والمعدات المتحركة", risk: "حوادث — دهس", control: "رخصة قيادة سارية — تدريب — تأمين" },
  ];
  const auditCols = [{ key: "area", label: "مجال التقييم" }, { key: "items", label: "بنود التقييم" }, { key: "score", label: "الدرجة" }];
  const auditRows = [
    { area: "السلوك الشخصي", items: "ارتداء PPE — الالتزام بالإجراءات — النظافة", score: "40" },
    { area: "الأداء الفني", items: "جودة العمل — اتباع التعليمات — الدقة", score: "30" },
    { area: "السلامة", items: "الإبلاغ عن المخاطر — المشاركة في التدريب", score: "20" },
    { area: "التعاون", items: "التواصل مع الفريق — الاستجابة للتوجيهات", score: "10" },
  ];
  const penaltyCols = [{ key: "violation", label: "المخالفة" }, { key: "first", label: "المرة الأولى" }, { key: "second", label: "المرة الثانية" }, { key: "third", label: "المرة الثالثة" }];
  const penaltyRows = [
    { violation: "عدم ارتداء معدات الوقاية", first: "إنذار شفوي", second: "إنذار كتابي", third: "إيقاف 3 أيام" },
    { violation: "تجاوز إجراءات السلامة", first: "إنذار كتابي", second: "إيقاف 3 أيام", third: "إحالة للتحقيق" },
    { violation: "العمل دون تصريح", first: "إيقاف يوم", second: "إيقاف أسبوع", third: "إنهاء التعاقد" },
    { violation: "التلاعب بمعدات السلامة", first: "إيقاف أسبوع", second: "إنهاء التعاقد", third: "—" },
    { violation: "التسبب في حادث", first: "إيقاف فوري + تحقيق", second: "حسب نتيجة التحقيق", third: "—" },
  ];

  return (
    <>
      {/* Page 58 */}
      <A4Page pageNum={137}>
        <SectionHeader icon={HardHat} title="سلامة الفنيين والمقاولين" subtitle="إجراءات ومتطلبات السلامة لفرق الصيانة والمقاولين" />

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <p className="text-slate-700 leading-relaxed">
              الفنيون والمقاولون هم الأكثر عرضة لمخاطر بيئة العمل. يهدف هذا القسم إلى وضع ضوابط وإجراءات محددة تحميهم وتضمن سلامتهم أثناء أداء مهامهم.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="المخاطر الرئيسية وإجراءات التحكم" />
            <DataTable columns={hazCols} rows={hazRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={ClipboardCheck} title="متطلبات المقاولين" />
            <CallOutBox type="safety" title="شروط قبول المقاولين">
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-xs">
                <li>شهادة سلامة مهنية سارية للفريق</li>
                <li>تأمين ضد الحوادث المهنية</li>
                <li>التزام كامل بإجراءات السلامة للمجموعة</li>
                <li>تسجيل جميع العاملين في نظام السلامة</li>
                <li>حضور دورة توعية سلامة قبل بدء العمل</li>
              </ul>
            </CallOutBox>
          </div>
        </div>
      </A4Page>

      {/* Page 59 */}
      <A4Page pageNum={138}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={FileText} title="نظام تقييم الفنيين" />
            <DataTable columns={auditCols} rows={auditRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={AlertTriangle} title="سلم المخالفات والعقوبات" />
            <DataTable columns={penaltyCols} rows={penaltyRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <SectionHeader icon={Eye} title="التزامات الفنيين والمقاولين" />
            <FlowChart
              title="التزامات السلامة الأساسية"
              dir="LR"
              nodes={[
                { id: "o1", label: "الالتزام بإجراءات السلامة", sub: "بدون استثناء", icon: "🛡️", color: "red" },
                { id: "o2", label: "استخدام معدات الوقاية", sub: "بالشكل الصحيح", icon: "🦺", color: "blue" },
                { id: "o3", label: "الإبلاغ عن المخاطر", sub: "فور اكتشافها", icon: "📢", color: "amber" },
              ]}
              edges={[
                { from: "o1", to: "o2" },
                { from: "o2", to: "o3" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 83 - Form 19: Safe Permit to Work (PTW) Form */}
      <A4Page pageNum={139}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardCheck} title="النموذج ١٩: تصريح العمل الآمن" subtitle="استمارة تصريح العمل الإلكترونية للأعمال الكهربائية والارتفاعات والأماكن المغلقة" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              يصدر هذا التصريح رقمياً عبر نظام CMMS ويُعد موافقة رسمية مشروطة لبدء العمل في الظروف عالية الخطورة بعد استكمال متطلبات السلامة:
            </p>
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-center">
                طلب تصريح عمل آمن (Safe Work Permit Form)
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold border-l border-slate-200 w-1/4">رقم التصريح الفوري:</td>
                    <td className="p-2 border-l border-slate-200 text-blue-700 font-bold font-mono">PTW-2026-8765</td>
                    <td className="p-2 font-bold border-l border-slate-200 w-1/4">رقم أمر العمل المرتبط:</td>
                    <td className="p-2 font-mono">WO-98421</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-bold border-l border-slate-200">نوع العمل الخطير:</td>
                    <td className="p-2 border-l border-slate-200 text-red-600 font-bold">⚡ أعمال صيانة كهربائية حية (Active)</td>
                    <td className="p-2 font-bold border-l border-slate-200">الموقع والمبنى:</td>
                    <td className="p-2">غرفة قواطع لوحة التوزيع الكبرى - المبنى الرئيسي</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold border-l border-slate-200">فريق العمل المنفذ:</td>
                    <td className="p-2 border-l border-slate-200">فني كهرباء ١ + فني كهرباء ٢ (مقاول معتمد)</td>
                    <td className="p-2 font-bold border-l border-slate-200">المدة والتاريخ المصرح به:</td>
                    <td className="p-2 font-bold">يوم عمل واحد (٢٠٢٦/٠٥/٢٧)</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-2 bg-slate-50 border-t border-slate-300">
                <span className="font-bold text-[9px] text-slate-700 block mb-1">📋 قائمة التحقق والامتثال قبل التوقيع (Pre-Job Checklist):</span>
                <div className="grid grid-cols-2 gap-2 text-[9px] text-slate-600">
                  <div>☑️ تم فصل التيار الكهربائي وقفل المصدر (LOTO)</div>
                  <div>☑️ تم ارتداء قفازات ونظارات وأحذية السلامة المعزولة</div>
                  <div>☑️ يتوفر مشرف مراقب خارجي متأهب للطوارئ</div>
                  <div>☑️ أدوات ومعدات العمل معزولة ومفحوصة بالكامل</div>
                </div>
              </div>
              <div className="bg-slate-100 p-2 text-[9px] text-slate-500 border-t border-slate-300 flex justify-between">
                <span>توقيع الفني المسؤول: __________________</span>
                <span>اعتماد مشرف السلامة بالموقع: __________________</span>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 84 - Form 20: Hot Work Permit Form */}
      <A4Page pageNum={140}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Shield} title="النموذج ٢٠: تصريح العمل الساخن" subtitle="استمارة تصريح العمل الساخن الإلكترونية لأعمال اللحام والقطع الصاروخي" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-4">
            <p className="text-slate-700 leading-relaxed">
              يصدر هذا التصريح الحرج للأعمال التي تولد شرارة أو لهب مكشوف لمنع اندلاع الحرائق في المواقع الحساسة:
            </p>
            <div className="border border-slate-300 rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-center">
                طلب تصريح عمل ساخن (Hot Work Permit Form)
              </div>
              <table className="w-full text-right text-[10px] border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold border-l border-slate-200 w-1/4">رقم التصريح الساخن:</td>
                    <td className="p-2 border-l border-slate-200 text-red-700 font-bold font-mono">HWP-2026-3421</td>
                    <td className="p-2 font-bold border-l border-slate-200 w-1/4">رقم أمر العمل المرتبط:</td>
                    <td className="p-2 font-mono">WO-98533</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-bold border-l border-slate-200">طبيعة العمل الساخن:</td>
                    <td className="p-2 border-l border-slate-200 text-red-600 font-bold">🔥 أعمال لحام وقص مواسير مياه رئيسية بالصاروخ</td>
                    <td className="p-2 font-bold border-l border-slate-200">موقع العمل:</td>
                    <td className="p-2">منطقة المضخات المركزية - البدروم الثاني</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold border-l border-slate-200">الفني المنفذ للحام:</td>
                    <td className="p-2 border-l border-slate-200">فني لحام وميكانيكا الورشة</td>
                    <td className="p-2 font-bold border-l border-slate-200">تاريخ وساعة الصلاحية:</td>
                    <td className="p-2 font-bold text-red-700">٢٠٢٦/٠٥/٢٧ (من ٠٨:٠٠ صباحاً إلى ٠٤:٠٠ مساءً)</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-2 bg-slate-50 border-t border-slate-300">
                <span className="font-bold text-[9px] text-slate-700 block mb-1">📋 قائمة التحقق والامتثال الخاصة بالحرائق (Fire Prevention Checklist):</span>
                <div className="grid grid-cols-2 gap-2 text-[9px] text-slate-600">
                  <div>☑️ تم إخلاء منطقة العمل من المواد القابلة للاشتعال (١١ متر)</div>
                  <div>☑️ تم توفير طفايات حريق يدوية وجاهزة للاستخدام بالموقع</div>
                  <div>☑️ تم تعيين مراقب حريق (Fire Watch) متواجد طوال العمل وبعده بـ ٣٠ دقيقة</div>
                  <div>☑️ تم تغطية الأرضيات واللوحات القريبة بأغطية مقاومة للحريق</div>
                </div>
              </div>
              <div className="bg-slate-100 p-2 text-[9px] text-slate-500 border-t border-slate-300 flex justify-between">
                <span>توقيع الفني المنفذ: __________________</span>
                <span>اعتماد مدير الصيانة / السلامة: __________________</span>
              </div>
            </div>
          </div>
        </div>
      </A4Page>
    </>
  );
}
