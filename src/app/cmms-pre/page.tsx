"use client";

import { 
  Building2, 
  Target, 
  Lightbulb, 
  Users, 
  ClipboardList, 
  ShoppingCart, 
  FileText, 
  Activity, 
  Shield, 
  BarChart3, 
  Monitor, 
  BookOpen, 
  Award, 
  AlertTriangle, 
  Key, 
  HelpCircle, 
  Wrench, 
  Smartphone, 
  ShieldCheck, 
  Database, 
  Server, 
  Scale, 
  TrendingUp,
  Layers,
  Lock,
  Users2,
  Cpu,
  FileSpreadsheet,
  CheckCircle
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import DataTable from "@/components/DataTable";
import SlideDeck, { Slide } from "@/components/SlideDeck";
import PrintControlBar from "@/components/PrintControlBar";


export default function CmmsPresentationPage() {
  // TCO Data for Slide 4
  const tcoCols = [
    { key: "system", label: "نظام CMMS المقارن" },
    { key: "setup", label: "التأسيس (س1)" },
    { key: "license", label: "التراخيص (30 فني)" },
    { key: "users", label: "المستخدمون (1000 موظف)" },
    { key: "tco", label: "إجمالي 5 سنوات" }
  ];
  
  const tcoRows = [
    { system: "IBM Maximo (عالمي)", setup: "150,000 ريال", license: "180,000 ريال / سنة", users: "100,000 ريال / سنة", tco: "1,430,000 ريال" },
    { system: "UpKeep (عالمي)", setup: "20,000 ريال", license: "90,000 ريال / سنة", users: "45,000 ريال / سنة", tco: "560,000 ريال" },
    { system: "eMaint (عالمي)", setup: "35,000 ريال", license: "81,000 ريال / سنة", users: "25,000 ريال / سنة", tco: "499,000 ريال" },
    { system: "Fiix (عالمي)", setup: "40,000 ريال", license: "72,000 ريال / سنة", users: "30,000 ريال / سنة", tco: "448,000 ريال" },
    { system: "Odoo CMMS (محلي/شريك)", setup: "50,000 ريال", license: "24,000 ريال / سنة", users: "12,000 ريال / سنة", tco: "274,000 ريال" },
    { system: "✅ GridFix (داخلي)", setup: "35,000 ريال", license: "مجاني (غير محدود)", users: "مجاني (غير محدود)", tco: "✅ 83,000 ريال" }
  ];

  // Compare Data for Slide 3
  const compareCols = [
    { key: "item", label: "المعيار" },
    { key: "ready", label: "الأنظمة الجاهزة بالسوق" },
    { key: "gridfix", label: "✅ نظام GridFix المخصص" }
  ];

  const compareRows = [
    { item: "ملكية الكود", ready: "استئجار مؤقت (يتوقف النظام فور توقف الدفع)", gridfix: "تملك كامل وحصري للمجموعة (أصل رقمي)" },
    { item: "التكلفة (TCO)", ready: "مرتفعة جداً وتتزايد مع كل مستخدم أو فني جديد", gridfix: "وفر مالي يقدر بـ 93% (استضافة فقط)" },
    { item: "التخصيص واللغة", ready: "محدد للغاية، مترجم آلياً، ومقيد بالقوالب الصارمة", gridfix: "كامل ومصمم ليطابق عمليات الصيانة بسقالة" },
    { item: "العمل بدون اتصال", ready: "محدود للغاية أو يتطلب رخصاً مرتفعة التكلفة", gridfix: "أصيل وتلقائي (Offline Mode) عبر جوال الفني" },
    { item: "المبيعات والغير", ready: "مستحيل تماماً", gridfix: "إمكانية بيعه تجارياً كمنصة SaaS وتحقيق دخل" }
  ];

  return (
    <div className="w-full bg-[#f1f5f9] min-h-screen py-10 print:py-0 print:bg-white flex items-center justify-center font-sans">
      <SlideDeck>
        {/* Slide 1 */}
        <Slide slideNum={1}>
          <div className="flex flex-col items-center justify-center text-center h-full space-y-6">
            <div className="p-4 bg-navy-500 text-white rounded-2xl shadow-xl shadow-blue-500/10">
              <Monitor className="w-12 h-12 text-blue-400" />
            </div>
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">دراسة جدوى واختيار نظام الـ CMMS</span>
              <h2 className="text-2xl font-black text-[#1e3a5f] mt-3">عرض مقارنة الأنظمة الجاهزة مقابل تملك منصة GridFix</h2>
              <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">المميزات الفنية والتحليل المالي ونماذج الشراكة الاستراتيجية مع المهندس المطور</p>
            </div>
            <div className="w-full max-w-md border-t border-slate-200 pt-4 flex justify-between text-[11px] text-slate-400">
              <span>معد الجهة: مجموعة مؤسسات سقالة</span>
              <span>إعداد مهندس المشروع: م. وائل عبد الجليل</span>
            </div>
          </div>
        </Slide>

        {/* Slide 2 */}
        <Slide slideNum={2}>
          <SectionHeader icon={Building2} title="1. نطاق وحجم تشغيل نظام الـ CMMS" subtitle="المعايير المعتمدة لحساب التكاليف ونسب الوفر المالي لمجموعة سقالة" />
          <div className="grid grid-cols-3 gap-6 text-center my-auto">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <span className="block text-2xl font-black text-navy-500">30 فني</span>
              <span className="text-xs text-slate-500">طاقم صيانة ميداني نشط بالمواقع</span>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <Building2 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <span className="block text-2xl font-black text-navy-500">10 مواقع</span>
              <span className="text-xs text-slate-500">مجمعات إدارية ومستودعات صيدلانية كبرى</span>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <Smartphone className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <span className="block text-2xl font-black text-navy-500">1,000 مستخدم</span>
              <span className="text-xs text-slate-500">موظفون مخولون لرفع البلاغات الفورية</span>
            </div>
          </div>
          <CallOutBox type="tip" title="تأثير النطاق الميداني">
            تتأثر أسعار التراخيص للأنظمة الجاهزة طردياً مع زيادة عدد الفنيين ومستخدمي الطلبات، في حين يعزل نظام GridFix المطور داخلياً كلفة الترخيص تماماً لتصبح ثابتة ومعدومة مهما تمدد النطاق.
          </CallOutBox>
        </Slide>

        {/* Slide 3 */}
        <Slide slideNum={3}>
          <SectionHeader icon={Scale} title="2. المفاضلة والتحليل النوعي للأنظمة" subtitle="جدول المقارنة الاستراتيجية والجوهرية بين خياري الشراء والتطوير المخصص" />
          <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-xs text-xs my-auto">
            <DataTable columns={compareCols} rows={compareRows} />
          </div>
        </Slide>

        {/* Slide 4 */}
        <Slide slideNum={4}>
          <SectionHeader icon={BarChart3} title="3. حساب التكلفة الإجمالية للملكية (TCO لـ 5 سنوات)" subtitle="المقارنة المالية التفصيلية لجميع البدائل المتاحة في السوق السعودي بالريال" />
          <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-xs text-[10.5px] my-auto">
            <DataTable columns={tcoCols} rows={tcoRows} />
          </div>
        </Slide>

        {/* Slide 5 */}
        <Slide slideNum={5}>
          <SectionHeader icon={TrendingUp} title="4. تحليل الوفر المالي والتوفير التراكمي لسقالة" subtitle="قيمة الوفورات النقدية التي تظل داخل خزينة المجموعة عوضاً عن دفعها لموردين أجانب" />
          <div className="grid grid-cols-3 gap-6 my-auto text-xs">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-1">
              <span className="font-bold text-red-800">تكلفة IBM Maximo</span>
              <span className="block text-xl font-bold text-red-600">1,430,000 ريال</span>
              <p className="text-[10px] text-slate-500">يمثل استنزافاً سنوياً هائلاً من الميزانية بدون تملك للكود.</p>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
              <span className="font-bold text-emerald-800">تكلفة نظام GridFix ✅</span>
              <span className="block text-xl font-bold text-emerald-600">83,000 ريال</span>
              <p className="text-[10px] text-slate-500">يشمل التطوير الأولي والسيرفرات لـ 5 سنوات بالكامل.</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
              <span className="font-bold text-blue-800">الوفر التراكمي الإجمالي</span>
              <span className="block text-xl font-bold text-blue-600">1,347,000 ريال</span>
              <p className="text-[10px] text-slate-500">توفير خالص يقدر بـ **94.2%** من الميزانية المخصصة للـ CMMS.</p>
            </div>
          </div>
          <CallOutBox type="goal" title="خلاصة الجدوى المالية">
            يعوض الاستثمار المبدئي البسيط في GridFix إيجار التراخيص المستمر للشركات الخارجية، مما يمثل تحولاً من الصرف الاستهلاكي المتكرر إلى تأسيس أصل رقمي تقني مملوك للشركة.
          </CallOutBox>
        </Slide>

        {/* Slide 6 */}
        <Slide slideNum={6}>
          <SectionHeader icon={Layers} title="5. القدرات التشغيلية والوحدات المدمجة بـ GridFix" subtitle="الهيكل البرمجي الموزع لعشرة موديولات فنية تخدم دورة الصيانة المتكاملة" />
          <div className="grid grid-cols-3 gap-4 my-auto text-xs">
            <div className="p-3 border border-slate-100 bg-slate-50 rounded-lg">
              <strong className="text-navy-500">إدارة الأصول والمواقع</strong>
              <p className="text-[10px] text-slate-500 mt-1">مركز الأصول 360، شجرة الأصول والمسارات، وترميز الـ QR والباركود.</p>
            </div>
            <div className="p-3 border border-slate-100 bg-slate-50 rounded-lg">
              <strong className="text-navy-500">أوامر العمل والمؤقتات</strong>
              <p className="text-[10px] text-slate-500 mt-1">دورة حياة التذاكر، مؤقتات الجوال الميدانية، والتحقق الجغرافي بالـ GPS.</p>
            </div>
            <div className="p-3 border border-slate-100 bg-slate-50 rounded-lg">
              <strong className="text-navy-500">الصيانة الوقائية والجدولة</strong>
              <p className="text-[10px] text-slate-500 mt-1">توليد التذاكر آلياً بالزمن أو الاستهلاك ومعدل قراءات العدادات.</p>
            </div>
            <div className="p-3 border border-slate-100 bg-slate-50 rounded-lg">
              <strong className="text-navy-500">تحليل الموثوقية والأعطال</strong>
              <p className="text-[10px] text-slate-500 mt-1">مصفوفة FMEA لتقييم المخاطر، ترميز مسببات الأعطال، ومخططات باريتو.</p>
            </div>
            <div className="p-3 border border-slate-100 bg-slate-50 rounded-lg">
              <strong className="text-navy-500">المخازن وقطع الغيار</strong>
              <p className="text-[10px] text-slate-500 mt-1">تحديث الأرصدة التلقائي، حساب كلفة الصرف الفوري، وإنذار نقص المخزون.</p>
            </div>
            <div className="p-3 border border-slate-100 bg-slate-50 rounded-lg">
              <strong className="text-navy-500">بوابة البلاغات والأمان</strong>
              <p className="text-[10px] text-slate-500 mt-1">تقديم بلاغات عامة بالـ QR ومكافحة السبام وتأمين الحسابات بالـ MFA.</p>
            </div>
          </div>
        </Slide>

        {/* Slide 7 */}
        <Slide slideNum={7}>
          <SectionHeader icon={Wrench} title="6. ميزات التشغيل والتحكم الميداني للفنيين" subtitle="أدوات الويب وتطبيق الجوال لتمكين الفنيين وضمان دقة التنفيذ" />
          <div className="grid grid-cols-2 gap-6 my-auto text-xs">
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
              <h4 className="font-bold text-navy-500 flex items-center gap-1">
                <Smartphone className="w-4 h-4" />
                تطبيق جوال الفني الأصيل (Flutter)
              </h4>
              <ul className="list-disc list-inside text-slate-600 space-y-1 leading-relaxed">
                <li>استعراض المهام اليومية مرتبة حسب الأولوية والموقع.</li>
                <li>تكامل مسح الـ QR للتأكد من صيانة المعدة الصحيحة.</li>
                <li>تشغيل ساعة ال wrench-time الميدانية (Labor Timer).</li>
                <li>رفع صور العطل قبل وبعد إتمام الصيانة للتوثيق.</li>
              </ul>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
              <h4 className="font-bold text-navy-500 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                الحوكمة التشغيلية والوقاية والـ GPS
              </h4>
              <ul className="list-disc list-inside text-slate-600 space-y-1 leading-relaxed">
                <li>منع تفعيل التذكرة قبل تأكيد معدات الوقاية الشخصية (PPE).</li>
                <li>مطابقة إحداثيات الجوال الجغرافية بموقع الأصل قبل البدء.</li>
                <li>آلية الرفض الفني المبرر لتسريع إعادة جدولة المهام.</li>
                <li>تنبيهات فورية بالبلاغات الطارئة عبر الـ WebSockets.</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Slide 8 */}
        <Slide slideNum={8}>
          <SectionHeader icon={Lock} title="7. أمان الخصوصية ودعم التشغيل بدون إنترنت" subtitle="كيف يضمن نظام GridFix استمرارية عمل الصيانة وحماية البيانات الحساسة؟" />
          <div className="grid grid-cols-2 gap-6 my-auto text-xs">
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
              <h4 className="font-bold text-emerald-700 flex items-center gap-1">
                <Shield className="w-4 h-4" />
                المرونة والعمل بدون اتصال (Offline Mode)
              </h4>
              <p className="text-slate-600 leading-relaxed">
                تخزين محلي آمن لكافة المهام وتفاصيل الأصول على الجوال. المزامنة والرفع التلقائي للبيانات وحل التعارضات بالخلفية بمجرد التقاط شبكة جوال، مما يتيح للفني العمل بالقبو ومستودعات التبريد العميقة دون قلق.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
              <h4 className="font-bold text-red-700 flex items-center gap-1">
                <Lock className="w-4 h-4" />
                التشفير العسكري وسرية المعلومات
              </h4>
              <p className="text-slate-600 leading-relaxed">
                تشفير كامل لقاعدة بيانات الجوال برمجياً باستخدام **SQLCipher AES-256**، وتأمين لوحات الإدارة بالمصادقة الثنائية (MFA) مع حماية الكود المصدري والاستضافة داخل المملكة للامتثال للمعايير الوطنية.
              </p>
            </div>
          </div>
        </Slide>

        {/* Slide 9 */}
        <Slide slideNum={9}>
          <SectionHeader icon={TrendingUp} title="8. تحليل العائد المالي والاستثماري (ROI)" subtitle="دراسة المردود المالي السنوي المتوقع لمجموعتنا ومدة استرداد الاستثمار" />
          <div className="grid grid-cols-4 gap-4 my-auto text-center text-xs">
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-slate-700 block">وفر تقليل الأعطال</span>
              <span className="text-lg font-bold text-navy-500">90,000 ريال</span>
              <span className="text-[10px] text-slate-400 block mt-1">تخفيض 30 ساعة توقف</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-slate-700 block">وفر كفاءة الفنيين</span>
              <span className="text-lg font-bold text-navy-500">40,950 ريال</span>
              <span className="text-[10px] text-slate-400 block mt-1">حفظ 1.5 ساعة ضائعة يومياً</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-slate-700 block">وفر إدارة المخزون</span>
              <span className="text-lg font-bold text-navy-500">30,000 ريال</span>
              <span className="text-[10px] text-slate-400 block mt-1">تقليل 20% هدر القطع</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-slate-700 block">وفر استرداد الضمان</span>
              <span className="text-lg font-bold text-navy-500">24,000 ريال</span>
              <span className="text-[10px] text-slate-400 block mt-1">3 تذاكر ضمان مستردة</span>
            </div>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center font-bold text-emerald-800 text-xs mt-3">
            إجمالي الوفر التشغيلي المتوقع: 184,950 ريال / سنوياً ← استرداد قيمة التأسيس (35,000 ريال) بالكامل في أول 3 أشهر.
          </div>
        </Slide>

        {/* Slide 10 */}
        <Slide slideNum={10}>
          <SectionHeader icon={Users2} title="9. نماذج الاستثمار والشراكة الاستراتيجية الثلاثة" subtitle="نماذج التعاون المقترحة لحفظ ملكية المطور وتحقيق وفورات لسقالة" />
          <div className="grid grid-cols-3 gap-6 my-auto text-xs">
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#1e3a5f] block">1. الشركة المشتركة (JV)</span>
              <p className="text-[10.5px] text-slate-500 leading-relaxed">
                تأسيس شركة تقنية تملك فيها سقالة 60% (التمويل والرعاية) ويملك المطور 40% (الكود والتشغيل). سقالة تحصل على ترخيص مجاني ونسبة 60% من أرباح SaaS في السوق.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#1e3a5f] block">2. الترخيص واتفاقية الـ SLA</span>
              <p className="text-[10.5px] text-slate-500 leading-relaxed">
                يحتفظ المطور بالملكية 100%. تدفع سقالة 50,000 ريال للتخصيص والتوطين في السنة الأولى، و12,000 ريال سنوياً صيانة ودعم (SLA)، وبيع النظام للغير حر للمطور.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#1e3a5f] block">3. الرعاية وتقاسم الأرباح</span>
              <p className="text-[10.5px] text-slate-500 leading-relaxed">
                سقالة ترعى التطوير كأصل رقمي مغذى من مرافقها وتتكفل بالسيرفرات والمطورين. يحصل المهندس على تمويل وتملك الكود، وتحصل سقالة على 25% من عوائد مبيعات السوق لـ 5 سنوات.
              </p>
            </div>
          </div>
        </Slide>

        {/* Slide 11 */}
        <Slide slideNum={11}>
          <SectionHeader icon={Cpu} title="10. الربط التقني وتكامل أنظمة الـ BMS" subtitle="آلية توليد تذاكر الصيانة تلقائياً عبر ربط حساسات أنظمة المباني الكبرى" />
          <div className="grid grid-cols-2 gap-6 my-auto text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h4 className="font-bold text-[#1e3a5f]">📟 بروتوكولات الربط المفتوحة المدعومة</h4>
              <p className="text-[10.5px] text-slate-600 leading-relaxed">
                - **BACnet (IP / MSTP):** لمراقبة شيلرات التكييف المركزي والمضخات ومكافحة الحريق.
                <br />
                - **Modbus (TCP / RTU):** لقراءة لوحات التوزيع والمولدات الكهربائية والجهد.
                <br />
                - **MQTT:** لربط حساسات إنترنت الأشياء (IoT) كحساسات تسرب المياه والحرارة.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h4 className="font-bold text-[#1e3a5f]">🏢 التوافق الفوري مع الماركات العالمية</h4>
              <p className="text-[10.5px] text-slate-600 leading-relaxed">
                تتوافق واجهات تكامل GridFix البرمجية (APIs) بالكامل مع عائلة أنظمة التحكم الذكي لكل من:
                <br />
                - **Honeywell (ComfortPoint Open)**
                <br />
                - **Siemens (Desigo CC)**
                <br />
                - **Schneider Electric (EcoStruxure)**
              </p>
            </div>
          </div>
        </Slide>

        {/* Slide 12 */}
        <Slide slideNum={12}>
          <SectionHeader icon={FileSpreadsheet} title="11. خطة ترحيل البيانات للصيانة" subtitle="خطة الـ 5 مراحل لترحيل قوائم الأصول من ملفات الإكسيل الورقية لنظام GridFix" />
          <div className="grid grid-cols-5 gap-3 text-center my-auto text-xs">
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="font-bold text-blue-600 block">المرحلة 1</span>
              <span className="text-[11px] font-bold block my-1">الجرد والتدقيق</span>
              <p className="text-[9px] text-slate-400">زيارات ميدانية لمطابقة لوحات بيانات الأصول.</p>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="font-bold text-blue-600 block">المرحلة 2</span>
              <span className="text-[11px] font-bold block my-1">الترميز QR</span>
              <p className="text-[9px] text-slate-400">بناء شجرة الأصول وتخصيص معرف فريد لكل أصل.</p>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="font-bold text-blue-600 block">المرحلة 3</span>
              <span className="text-[11px] font-bold block my-1">استخراج وتنسيق</span>
              <p className="text-[9px] text-slate-400">تفريغ جداول الإكسيل وتنسيقها بصيغة CSV.</p>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="font-bold text-blue-600 block">المرحلة 4</span>
              <span className="text-[11px] font-bold block my-1">الاستيراد والتنقية</span>
              <p className="text-[9px] text-slate-400">رفع البيانات جماعياً ومعالجة القيم المفقودة.</p>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="font-bold text-blue-600 block">المرحلة 5</span>
              <span className="text-[11px] font-bold block my-1">التشغيل الحي</span>
              <p className="text-[9px] text-slate-400">مطابقة ميدانية وإطلاق رسمي للمنظومة.</p>
            </div>
          </div>
        </Slide>

        {/* Slide 13 */}
        <Slide slideNum={13}>
          <SectionHeader icon={AlertTriangle} title="12. خطة الاستمرارية وحقيبة الطوارئ الورقية" subtitle="الإجراء التشغيلي المعتمد في حالة انقطاع الخادم السحابي أو الكهرباء التام" />
          <div className="grid grid-cols-2 gap-6 my-auto text-xs">
            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-1">
              <span className="font-bold text-navy-500">📦 محتوى حقيبة الطوارئ الورقية (BCP Kit):</span>
              <p className="text-slate-600 text-[10.5px] leading-relaxed">
                يحتفظ المكتب الفني بصندوق طوارئ يحتوي على نماذج مطبوعة وجاهزة للصرف والموافقات الفورية:
                <br />
                - نموذج طلب صيانة (2,000 نسخة) | أمر عمل (1,500 نسخة)
                <br />
                - نموذج صرف قطع (1,000 نسخة) | استعارة عدة (500 نسخة)
                <br />
                - دفتر تسجيل الطوارئ (10 دفاتر) لتنسيق الأرقام يدوياً.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-1">
              <span className="font-bold text-navy-500">🔄 بروتوكول استرجاع البيانات رقمياً:</span>
              <p className="text-slate-600 text-[10.5px] leading-relaxed">
                بمجرد استعادة التيار الكهربائي والاتصال بالسحابة، يلتزم المكتب الفني بتفريغ سجلات الطوارئ يدوياً وإدخالها بأثر رجعي في نظام GridFix لإعادة مزامنة تكاليف قطع الغيار وساعات عمل الفنيين.
              </p>
            </div>
          </div>
        </Slide>

        {/* Slide 14 */}
        <Slide slideNum={14}>
          <SectionHeader icon={ShieldCheck} title="13. الخصائص الخلفية الذكية واستقرار النظام" subtitle="المعالجات التلقائية لحماية قواعد البيانات وتفادي فقد المعلومات" />
          <div className="grid grid-cols-3 gap-6 my-auto text-xs">
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#1e3a5f] block">حل تعارض البيانات</span>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                عند مزامنة الفنيين المتزامنة لنفس أمر العمل، يعتمد النظام (Last Write Wins) مع حفظ السجل القديم لمنع تضارب البيانات.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#1e3a5f] block">مهايئ قواعد البيانات التلقائي</span>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                التبديل التلقائي بين محرك PostgreSQL السحابي للويب، ومحرك SQLite المحلي لتطبيق الجوال دون كود إضافي.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#1e3a5f] block">طبقة الحذف اللطيف (Soft Delete)</span>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                حظر الحذف النهائي لقواعد البيانات، ووسم السجلات بالـ (deleted_at) تتيح استعادة الأصول الممسوحة بالخطأ بأي وقت.
              </p>
            </div>
          </div>
        </Slide>

        {/* Slide 15 */}
        <Slide slideNum={15}>
          <SectionHeader icon={CheckCircle} title="14. التوصية النهائية والخطوة الإجرائية للبدء" subtitle="الخلاصة وتوصيات مهندس المشروع للاعتماد المالي والإداري" />
          <CallOutBox type="goal" title="التوصية الفنية المعتمدة للاعتماد المالي">
            <p className="text-[11px] leading-relaxed text-slate-800 font-medium">
              <strong>نوصي باعتماد مسار تطوير وتملك نظام GridFix داخلياً كنظام CMMS الرسمي لمنظومة الصيانة المركزية في مجموعة سقالة مع اختيار (النموذج الثاني: ترخيص البرمجيات والـ SLA) للاعتبارات التالية:</strong>
              <br />
              ١. وفر مالي هائل يقدر بـ **1,347,000 ريال** مقارنة بنظام IBM Maximo على مدى 5 سنوات.
              <br />
              ٢. تملك الكود فكرياً للأبد مما يزيد من قيمة أصول المجموعة الرقمية بدلاً من عقود الإيجار البرمجية.
              <br />
              ٣. تطابق النظام الكامل مع دورة العمل الميدانية الفعلية ودعم تطبيق الفنيين للجوال بالكامل بالأوفلاين والعربية.
            </p>
          </CallOutBox>
          <div className="flex justify-between items-center text-[10px] text-slate-400 pt-3 border-t border-slate-200 mt-2">
            <span>توقيع معد الدراسة: م. وائل عبد الجليل</span>
            <span>تاريخ العرض: ٣٠ مايو ٢٠٢٦م</span>
            <span>مجموعة مؤسسات سقالة</span>
          </div>
        </Slide>
      </SlideDeck>

      <PrintControlBar />
    </div>
  );
}

