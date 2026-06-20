"use client";

import { 
  Monitor, 
  Layers, 
  Cpu, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  Settings, 
  AlertTriangle, 
  FileText, 
  Lightbulb, 
  HelpCircle, 
  ShieldAlert, 
  Zap, 
  Globe,
  Database,
  Lock,
  RefreshCw,
  FileSpreadsheet,
  ShieldCheck,
  Building2,
  Users2,
  Activity,
  Server,
  Key,
  Trash2,
  Scale
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import DataTable from "@/components/DataTable";
import A4Page from "@/components/A4Page";
import CoverPage from "@/components/CoverPage";
import PrintControlBar from "@/components/PrintControlBar";


export default function CmmsStudyPage() {
  // Data for TCO Table (Page 4)
  const tcoCols = [
    { key: "system", label: "نظام CMMS المقارن" },
    { key: "setup", label: "التأسيس (السنة 1)" },
    { key: "license", label: "التراخيص (30 فني)" },
    { key: "users", label: "الموظفون (1000 مستخدم)" },
    { key: "support", label: "الدعم السنوي" },
    { key: "tco", label: "إجمالي 5 سنوات (TCO)" }
  ];
  
  const tcoRows = [
    { system: "IBM Maximo (عالمي)", setup: "150,000 ريال", license: "180,000 ريال / سنة", users: "100,000 ريال / سنة", support: "45,000 ريال / سنة", tco: "1,430,000 ريال" },
    { system: "UpKeep (عالمي)", setup: "20,000 ريال", license: "90,000 ريال / سنة", users: "45,000 ريال / سنة", support: "مدمج مع التراخيص", tco: "560,000 ريال" },
    { system: "eMaint (عالمي)", setup: "35,000 ريال", license: "81,000 ريال / سنة", users: "25,000 ريال / سنة", support: "15,000 ريال / سنة", tco: "499,000 ريال" },
    { system: "Fiix (عالمي)", setup: "40,000 ريال", license: "72,000 ريال / سنة", users: "30,000 ريال / سنة", support: "مدمج مع التراخيص", tco: "448,000 ريال" },
    { system: "Odoo CMMS (محلي/شريك)", setup: "50,000 ريال", license: "24,000 ريال / سنة", users: "12,000 ريال / سنة", support: "10,000 ريال / سنة", tco: "274,000 ريال" },
    { system: "Cayan CMMS (محلي)", setup: "25,000 ريال", license: "36,000 ريال / سنة", users: "مجاني (محدود الصلاحية)", support: "8,000 ريال / سنة", tco: "201,000 ريال" },
    { system: "✅ GridFix (تطوير داخلي)", setup: "35,000 ريال (إعداد)", license: "مجاني (غير محدود)", users: "مجاني (غير محدود)", support: "12,000 ريال / سنة (استضافة)", tco: "✅ 83,000 ريال" }
  ];

  // Comparison Matrix data (Page 3)
  const compareCols = [
    { key: "item", label: "مجال المقارنة" },
    { key: "ready", label: "الأنظمة الجاهزة (Commercial CMMS)" },
    { key: "gridfix", label: "✅ نظام GridFix (تطوير داخلي)" }
  ];
  
  const compareRows = [
    { item: "التخصيص والتعريب", ready: "محدود للغاية ومترجم آلياً ومقيد بالقوالب", gridfix: "كامل وتفصيلي ومصمم بالكامل لعمليات سقالة" },
    { item: "المرونة والتحسين", ready: "محدودة وتنتظر التحديثات السنوية المدفوعة للشركة", gridfix: "عالية ومفتوحة، أي تعديل يضاف فوراً بواسطة المطور" },
    { item: "التكلفة طويلة المدى (TCO)", ready: "مرتفعة جداً وتتزايد تصاعدياً مع عدد الموظفين والمواقع", gridfix: "منخفضة ومستقرة، محصورة بالاستضافة فقط (وفر 93%)" },
    { item: "ملكية الكود والنظام", ready: "استئجار مؤقت (يتوقف النظام فور توقف الدفع)", gridfix: "تملك كامل وحصري للمجموعة (أصل استثماري رقمي)" },
    { item: "الاعتماد على مورد خارجي", ready: "كامل، تظل المجموعة مرتبطة بالمورد وأسعاره للأبد", gridfix: "منعدم، المجموعة تتحكم بمصيرها التقني بالكامل" },
    { item: "التكامل والربط الإضافي", ready: "معقد وصعب ويحتاج تراخيص ربط إضافية ومكلفة", gridfix: "مرن ومفتوح بالكامل عبر واجهات برمجية مخصصة" },
    { item: "إمكانية بيعه تجارياً للغير", ready: "مستحيل تماماً", gridfix: "✅ نعم، ترخيص واشتراكات لشركات صيانة أخرى" },
  ];

  // Migration phases data (Page 21)
  const migrationCols = [
    { key: "phase", label: "المرحلة" },
    { key: "desc", label: "الوصف والأنشطة الرئيسية" },
    { key: "output", label: "المخرجات المعتمدة" }
  ];

  const migrationRows = [
    { phase: "1. جرد وتدقيق الأصول", desc: "زيارات ميدانية لمواقع سقالة الـ 10، وتوثيق لوحات البيانات وكتابة الأرقام التسلسلية للمعدات.", output: "قاعدة بيانات أولية مصنفة للمعدات" },
    { phase: "2. توحيد المعايير والترميز", desc: "بناء شجرة الأصول الهيكلية وتخصيص كود فريد لكل أصل (Asset ID) وربطه بنظام الـ QR.", output: "شجرة الأصول وترميز QR الموحد" },
    { phase: "3. استخراج البيانات والخرائط", desc: "تفريغ جداول الإكسيل الحالية وملفات الصيانة الورقية وتوزيعها حسب الحقول المطلوبة بقاعدة البيانات.", output: "ملفات استيراد (CSV) مهيأة ومطابقة" },
    { phase: "4. الاستيراد والتنقية", desc: "رفع البيانات جماعياً لنظام GridFix وتصحيح الأخطاء والقيم المفقودة وتشغيل سيناريوهات الفحص التلقائي.", output: "بيانات نظيفة ومرفوعة على البيئة التجريبية" },
    { phase: "5. التحقق والتشغيل الحي", desc: "مطابقة عشوائية ميدانية بنسبة 10% للتأكد من دقة البيانات المرفوعة واعتماد النظام رسمياً للتشغيل.", output: "إطلاق حي وإيقاف تداول الإكسيل القديم" }
  ];

  // Emergency Kit data (Page 23)
  const kitCols = [
    { key: "formName", label: "النموذج الورقي بالطوارئ" },
    { key: "purpose", label: "الغرض والاستخدام التشغيلي" },
    { key: "qty", label: "الكمية الاحتياطية الموصى بطباعتها" }
  ];

  const kitRows = [
    { formName: "نموذج طلب الصيانة (Work Request)", purpose: "تسجيل بلاغات الأعطال يدوياً من الإدارات في حال انقطاع الشبكة بالكامل.", qty: "2,000 نسخة" },
    { formName: "نموذج أمر العمل (Work Order)", purpose: "تكليف الفنيين بالمهام وتدوين الإجراء المتخذ وقطع الغيار المستخدمة يدوياً.", qty: "1,500 نسخة" },
    { formName: "نموذج استعارة عهدة (Tool Check-out)", purpose: "تسجيل خروج الأدوات والعدد الحساسة من المخزن وضمان إعادتها يدوياً.", qty: "500 نسخة" },
    { formName: "نموذج صرف قطع الغيار (Parts Release)", purpose: "مستند موجه لأمين المخزن لصرف القطع وتوقيعه لإثبات حركتها مالياً.", qty: "1,000 نسخة" },
    { formName: "دفتر تسجيل حركة الطوارئ (Emergency Logbook)", purpose: "سجل مركزي للمكتب الفني لمتابعة توزيع المهام وتسلسل أرقام النماذج.", qty: "10 دفاتر" }
  ];

  // Impact analysis table data (Page 13)
  const impactCols = [
    { key: "module", label: "الميزة الفنية / الوظيفية" },
    { key: "mttr", label: "زمن الإصلاح MTTR" },
    { key: "mtbf", label: "الموثوقية MTBF" },
    { key: "downtime", label: "وقت التوقف" },
    { key: "labor", label: "إنتاجية الفنيين" },
    { key: "stock", label: "ترشيد المخزن" },
    { key: "life", label: "إطالة عمر الأصول" }
  ];

  const impactRows = [
    { module: "مركز معلومات الأصل (Asset 360)", mttr: "🟢 عالي", mtbf: "🟡 متوسط", downtime: "🟢 عالي", labor: "🟢 عالي", stock: "🟢 عالي", life: "🟢 عالي" },
    { module: "شجرة الأصول والمسارات", mttr: "🟢 عالي", mtbf: "⚪ لا يوجد", downtime: "🟡 متوسط", labor: "🟢 عالي", stock: "⚪ لا يوجد", life: "⚪ لا يوجد" },
    { module: "دورة حياة أمر العمل", mttr: "🟢 عالي", mtbf: "🟡 متوسط", downtime: "🟢 عالي", labor: "🟢 عالي", stock: "🟢 عالي", life: "🟡 متوسط" },
    { module: "مؤقتات العمل الجغرافية GPS", mttr: "🟡 متوسط", mtbf: "⚪ لا يوجد", downtime: "🟡 متوسط", labor: "🟢 عالي", stock: "⚪ لا يوجد", life: "⚪ لا يوجد" },
    { module: "الجدولة الوقائية (بالزمن/العداد)", mttr: "🟡 متوسط", mtbf: "🟢 عالي", downtime: "🟢 عالي", labor: "🟢 عالي", stock: "🟡 متوسط", life: "🟢 عالي" },
    { module: "قوالب العمل وقوائم الفحص", mttr: "🟢 عالي", mtbf: "🟢 عالي", downtime: "🟢 عالي", labor: "🟢 عالي", stock: "🟢 عالي", life: "🟢 عالي" },
    { module: "مصفوفة FMEA لتقييم المخاطر", mttr: "⚪ لا يوجد", mtbf: "🟢 عالي", downtime: "🟢 عالي", labor: "🟡 متوسط", stock: "🟡 متوسط", life: "🟢 عالي" },
    { module: "المزامنة والأوفلاين (Offline Sync)", mttr: "🟢 عالي", mtbf: "⚪ لا يوجد", downtime: "🟢 عالي", labor: "🟢 عالي", stock: "🟡 متوسط", life: "⚪ لا يوجد" },
    { module: "بوابة البلاغات العامة والـ QR", mttr: "🟢 عالي", mtbf: "⚪ لا يوجد", downtime: "🟡 متوسط", labor: "🟡 متوسط", stock: "⚪ لا يوجد", life: "⚪ لا يوجد" },
    { module: "مراقبة عقود الخدمة والضمانات", mttr: "⚪ لا يوجد", mtbf: "⚪ لا يوجد", downtime: "⚪ لا يوجد", labor: "⚪ لا يوجد", stock: "🟢 عالي", life: "🟡 متوسط" }
  ];

  return (
    <div className="w-full bg-[#f1f5f9] min-h-screen relative print:bg-white print:w-auto py-2 print:p-0 print:m-0 animate-fadeIn">
      {/* Cover Page */}
      <CoverPage domain="دراسة مقارنة واختيار نظام CMMS وإقرار نماذج الشراكة" />

      {/* Page 1 */}
      <A4Page pageNum={1}>
        <SectionHeader icon={Monitor} title="دراسة اختيار نظام CMMS المخصص لمجموعة سقالة" subtitle="المقدمة وتحديد نطاق التشغيل الفني والميداني للمجموعة" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <h4 className="font-bold text-navy-500 mb-2">💡 مقدمة الدراسة</h4>
            <p className="text-slate-700 leading-relaxed text-xs">
              يمثل نظام إدارة الصيانة المحوسب (CMMS) الركيزة التقنية الكبرى لنجاح منظومة الصيانة المركزية المقترحة لمجموعة مؤسسات سقالة. ويستهدف النظام ضبط ومراقبة الأصول التشغيلية وتاريخ الأعطال وجدولة المهام الوقائية وإدارة قطع الغيار والعدد الفنية لضمان استمرارية الأعمال بأقل تكلفة وهدر مالي ممكن.
            </p>
            <p className="text-slate-700 leading-relaxed text-xs mt-2">
              ومع تدشين منظومة الصيانة المركزية، تقف الإدارة أمام خيارين استراتيجيين:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs mt-2">
              <li><strong>الخيار الأول:</strong> التوجه لشراء تراخيص واشتراكات أنظمة صيانة جاهزة تجارية من السوق العالمي والمحلي.</li>
              <li><strong>الخيار الثاني:</strong> تفعيل وتوطين وتطوير نظام خاص بالمجموعة (منصة GridFix) ليعبر بدقة عن دورتها التشغيلية الفنية.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1">
              <Building2 className="w-4 h-4 text-blue-500" />
              نطاق وحجم تشغيل مجموعة سقالة المستهدف بالدراسة:
            </h4>
            <p className="text-slate-600 text-xs mb-3">
              تم تقدير التكاليف وحسابات الجدوى المالية والاقتصادية لكافة البرامج المقارنة بناءً على حجم أصول وتشغيل المجموعة الفعلي والحالي والمتمثل في المعايير التالية:
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="block text-lg font-bold text-navy-500">30 فني</span>
                <span className="text-[10px] text-slate-500">طاقم صيانة ميداني مرخص</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="block text-lg font-bold text-navy-500">10 مواقع</span>
                <span className="text-[10px] text-slate-500">مجمعات إدارية ومستودعات كبرى</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="block text-lg font-bold text-navy-500">1,000 موظف</span>
                <span className="text-[10px] text-slate-500">مستخدم مخول لرفع البلاغات</span>
              </div>
            </div>
          </div>

          <CallOutBox type="tip" title="توجيه استراتيجي لدعم القرار">
            إن دراسة جدوى اختيار نظام الـ CMMS لا تبحث فقط عن برنامج لعرض بلاغات الأعطال، بل تبحث عن تملك أصل رقمي تقني ينمو مع نمو المجموعة التشغيلي ويمنع خروج البيانات الحساسة أو الارتهان الدائم لشركات البرمجة الأجنبية.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 2 */}
      <A4Page pageNum={2}>
        <SectionHeader icon={HelpCircle} title="أولاً: الأنظمة الجاهزة بالسوق (Commercial CMMS)" subtitle="دراسة المفهوم والمميزات والتحديات والقيود الهيكلية والمالية" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-3 flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              مميزات الاعتماد على الأنظمة التجارية الجاهزة
            </h4>
            <div className="grid grid-cols-2 gap-4 text-slate-700">
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>1. جاهزية التدشين السريعة:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">توفر البرمجيات التجارية إمكانية حجز خوادم سحابية وتثبيت قواعد البيانات مباشرة لبدء التدريب والتكوين الأساسي الفوري.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>2. تطبيق أفضل الممارسات المدمجة:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">تحمل هذه الأنظمة معايير عالمية تم صقلها عبر سنوات من الاستخدام في شركات إدارة مرافق وصيانة كبرى حول العالم.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>3. التحديثات الدورية والأمنية:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">تضمن الشركات المزودة معالجة الثغرات البرمجية أولاً بأول وتحديث واجهات النظام وتأمين البيانات بشكل مستمر ودوري.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>4. استقرار البرمجيات وكثرة وكلاء الخدمة:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">بسبب كثرة مستخدميها، تتوفر للبرامج الكبرى شركات شريكة ومكاتب استشارية ومجتمعات دعم فني محلي لتسهيل الاستفادة.</p>
              </div>
            </div>
          </div>

          <CallOutBox type="critical" title="القيود التشغيلية والتحديات الفنية للأنظمة الجاهزة">
            <ul className="space-y-2 text-xs text-slate-700 list-decimal list-inside leading-relaxed">
              <li><strong>الارتهان التقني الكامل ومخاطر حجز البيانات (Vendor Lock-in):</strong> تظل المجموعة تحت رحمة الخوادم السحابية للمورد، ويتوقف تشغيل صيانة المجموعة فوراً بمجرد تأخر أو تعثر دفع الاشتراك السنوي المتزايد.</li>
              <li><strong>محدودية التخصيص وإجبار تعديل العمليات:</strong> بدلاً من تصميم النظام ليخدم هيكل صيانة سقالة، يفرض البرنامج التجاري الجاهز مساراته وقوالبه الصارمة، مما يجبر طاقم الصيانة على إجراء تعديلات تعسفية بأساليب عملهم الميدانية ليتلاءموا مع البرنامج.</li>
              <li><strong>رسوم وتكاليف خفية إضافية:</strong> يتم تسعير البرامج الجاهزة برخص الفنيين النشطين، ولا تشتمل التراخيص الأساسية على مميزات حيوية كإرسال التنبيهات عبر SMS، أو ربط حساسات الحرارة، أو فتح واجهات طلب مجانية للموظفين، وكلها تتطلب شراء إضافات (Add-ons) باهظة الثمن.</li>
              <li><strong>صعوبة الترقيات والتعديل المحلي:</strong> طلب إضافة تعديل بسيط (مثل حقل رقم الترخيص البلدي أو تصنيف الدفاع المدني) يتطلب انتظار دورة التحديثات العالمية للشركة أو دفع مبالغ خيالية للتطوير الخاص.</li>
            </ul>
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 3 */}
      <A4Page pageNum={3}>
        <SectionHeader icon={Lightbulb} title="ثانياً: تطوير وتشغيل نظام خاص بالمجموعة (GridFix)" subtitle="الفلسفة التشغيلية ومميزات بناء أصل تقني استثماري مملوك بالكامل" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-2">🎨 فلسفة منصة GridFix التشغيلية</h4>
            <p className="text-slate-700 leading-relaxed text-xs">
              تقوم الفلسفة الأساسية لمنصة GridFix على <strong>"تطويع التكنولوجيا لتطابق وتخدم العمليات الميدانية الفعلية لمجموعة سقالة"</strong>، بدلاً من إجبار طاقم الصيانة على تغيير إجراءاتهم. يضمن هذا المفهوم تبني النظام بسرعة فائقة من الفنيين والمشرفين لأنه يمثل مرآة للواقع الميداني، ويكسر حاجز مقاومة التكنولوجيا التقليدي.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-3 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              أهم مميزات ومكاسب بناء نظام GridFix مخصص
            </h4>
            <div className="grid grid-cols-2 gap-4 text-slate-700">
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>1. تملك الكود والمصدر فكرياً:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">الكود بالكامل وقواعد البيانات أصول تقنية مملوكة للمجموعة، مما يرفع القيمة السوقية للشركة وينهي التبعية للموردين الخارجيين.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>2. تراخيص غير محدودة مجاناً:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">إمكانية إضافة مئات الفنيين وآلاف مقدمي الطلبات عبر الجوال والويب دون دفع هللة واحدة إضافية كتراخيص مستخدمين.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>3. مرونة التعديل والتوطين اللحظي:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">إضافة تصنيفات أصول جديدة، حقول موافقات مالية، أو شاشات مخصصة للمستودعات خلال ساعات معدودة بالتنسيق المباشر مع المطور.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong>4. تكامل متقدم ومجاني:</strong>
                <p className="text-slate-500 mt-1 text-[11px]">الربط التلقائي والكامل مع أنظمة تخطيط الموارد ERP الحالية للمجموعة والبريد الإلكتروني وحساسات الأجهزة دون رسوم إضافية.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#eff6ff] rounded-xl border border-blue-100 p-4 shadow-sm text-xs space-y-2">
            <h4 className="font-bold text-[#1e3a5f]">📊 مقارنة نوعية أولية ومحاور المفاضلة الاستراتيجية</h4>
            <DataTable columns={compareCols} rows={compareRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 4 */}
      <A4Page pageNum={4}>
        <SectionHeader icon={BarChart3} title="ثالثاً: المقارنة المالية ودراسة الجدوى الاقتصادية" subtitle="حسابات التكلفة الإجمالية للملكية (TCO) لـ 5 سنوات بناءً على طاقم سقالة الفعلي" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
            <h4 className="text-xs font-bold text-slate-800 mb-2">جدول مقارنة تكاليف أنظمة CMMS البديلة لـ 5 سنوات (بالريال السعودي):</h4>
            <DataTable columns={tcoCols} rows={tcoRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-2">
            <h4 className="font-bold text-navy-500 flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              تحليل الوفر المالي وحجم التوفير التراكمي لصالح سقالة:
            </h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              يوضح التحليل المالي تفوقاً كاسحاً وخفضاً هائلاً في النفقات لصالح تبني منصة <strong>GridFix</strong> المخصصة، وتتلخص معالم الوفر المالي فيما يلي:
            </p>
            <ul className="space-y-1.5 text-slate-600 text-[11px] list-disc list-inside">
              <li><strong>مقارنة بـ IBM Maximo:</strong> تحقق المجموعة وفراً مالياً نقدياً مباشراً يقدر بـ <strong>1,347,000 ريال سعودي</strong> (نسبة توفير تعادل 94.2%).</li>
              <li><strong>مقارنة بـ UpKeep:</strong> يتم توفير ما قيمته <strong>477,000 ريال سعودي</strong> (نسبة توفير تعادل 85.1%).</li>
              <li><strong>مقارنة بـ Odoo CMMS:</strong> على الرغم من انخفاض أسعار أودو، إلا أن رخص المستخدمين والدعم السنوي والتأسيس تكلف 274,000 ريال، بينما GridFix يكلف 83,000 ريال فقط، محققاً وفراً قيمته <strong>191,000 ريال سعودي</strong> (توفير 69.7%).</li>
            </ul>
          </div>

          <CallOutBox type="goal" title="خلاصة الجدوى المالية">
            يمثل الاستثمار في تأسيس نظام GridFix داخلياً خطوة استباقية ممتازة تقطع التكاليف السنوية المتكررة والتراخيص، وتثبت التكلفة المستقبلية عند حدود الاستضافة والدعم التقني البسيط، مما يجعله الخيار الأكثر اقتصاداً وجدوى للمجموعة.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 5 */}
      <A4Page pageNum={5}>
        <SectionHeader icon={Settings} title="رابعاً: الملفات التفصيلية للأنظمة العالمية البديلة (1)" subtitle="تحليل ومواصفات وهيكل تسعير أنظمة: IBM Maximo و Fiix" />
        
        <div className="space-y-4 text-xs">
          {/* IBM Maximo */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-bold text-[#1e3a5f] text-sm">1. نظام IBM Maximo (العملاق العالمي للمؤسسات)</h4>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px]">TCO 5 سنوات: 1,430,000 ريال</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              يعتبر نظام ماكسيمو المعيار العالمي لإدارة الأصول والمرافق في الشركات الكبرى (مثل قطاعات البترول والمطارات والمستشفيات الضخمة). يتميز بقدرته الفائقة على معالجة ملايين الأصول والربط مع أنظمة ERP الكبرى مثل SAP.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-red-600 block">🛑 نقاط الضعف والمأخذ لمجموعتنا:</span>
                <ul className="list-disc list-inside text-slate-500 mt-1 space-y-0.5">
                  <li>تعقيد تشغيلي فائق يستلزم تدريباً طويلاً للفنيين.</li>
                  <li>تطلب وكلاء معتمدين بأسعار استشارية خيالية للإعداد والتعديل.</li>
                  <li>صعوبة إدخال الفنيين والطلب عبر الجوال دون تراخيص مكلفة جداً.</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-slate-700 block">💵 تفاصيل الهيكل المالي (30 فني + 1000 مستخدم):</span>
                <p className="text-slate-500 mt-1">تأسيس واستشارات: 150,000 ريال | تراخيص سنوية للفنيين: 180,000 ريال | باقات مستخدمي الطلبات: 100,000 ريال/سنة | صيانة سنوية ودعم الوكيل: 45,000 ريال.</p>
              </div>
            </div>
          </div>

          {/* Fiix */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-bold text-[#1e3a5f] text-sm">2. نظام Fiix CMMS (من شركة Rockwell Automation)</h4>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px]">TCO 5 سنوات: 448,000 ريال</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              نظام سحابي نقي يركز على الصيانة الوقائية وإدارة الأصول بطريقة حديثة ومبسطة، ويوفر تطبيق جوال متوافق للمستخدمين والعمال الفنيين الميدانيين.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-red-600 block">🛑 نقاط الضعف والمأخذ لمجموعتنا:</span>
                <ul className="list-disc list-inside text-slate-500 mt-1 space-y-0.5">
                  <li>الاعتماد والارتهان بالخوادم الخارجية واستضافة كندا/أمريكا.</li>
                  <li>تراخيص مستخدمي طلبات الصيانة مقيدة بباقات محدودة.</li>
                  <li>عدم وجود دعم محلي فوري ومحدودية التخصيص للمتطلبات الإقليمية.</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-slate-700 block">💵 تفاصيل الهيكل المالي (30 فني + 1000 مستخدم):</span>
                <p className="text-slate-500 mt-1">تأسيس وتهيئة سحابية: 40,000 ريال | اشتراك الفنيين السنوي: 72,000 ريال | اشتراكات المستخدمين لرفع البلاغات: 30,000 ريال/سنة | الدعم الفني: مدمج بالاشتراكات السحابية.</p>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 6 */}
      <A4Page pageNum={6}>
        <SectionHeader icon={Settings} title="رابعاً: الملفات التفصيلية للأنظمة العالمية البديلة (2)" subtitle="تحليل ومواصفات وهيكل تسعير أنظمة: UpKeep و eMaint" />
        
        <div className="space-y-4 text-xs">
          {/* UpKeep */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-bold text-[#1e3a5f] text-sm">3. نظام UpKeep (رائد الصيانة عبر الجوال)</h4>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px]">TCO 5 سنوات: 560,000 ريال</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              نظام مصمم خصيصاً للهواتف الذكية والأجهزة اللوحية، ويستهدف جعل حياة الفنيين سهلة عبر واجهات رفع صور الأعطال والدردشة وسحب الباركود للأصول مباشرة.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-red-600 block">🛑 نقاط الضعف والمأخذ لمجموعتنا:</span>
                <ul className="list-disc list-inside text-slate-500 mt-1 space-y-0.5">
                  <li>الاشتراكات السنوية مرتفعة جداً وتتجاوز 3,000 ريال للفني الواحد سنوياً.</li>
                  <li>المميزات المتقدمة مثل الـ Offline Database محجوزة للفئة الاحترافية الحصرية.</li>
                  <li>عدم القدرة على استضافة البيانات محلياً داخل المملكة للامتثال لبيانات الأصول.</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-slate-700 block">💵 تفاصيل الهيكل المالي (30 فني + 1000 مستخدم):</span>
                <p className="text-slate-500 mt-1">تأسيس وإعداد: 20,000 ريال | اشتراك 30 فني صيانة ميداني: 90,000 ريال سنويّاً | اشتراك الموظفين لرفع بلاغات الصيانة: 45,000 ريال سنويّاً | الدعم الفني: مدمج.</p>
              </div>
            </div>
          </div>

          {/* eMaint */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-bold text-[#1e3a5f] text-sm">4. نظام eMaint CMMS (من Fluke Reliability)</h4>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px]">TCO 5 سنوات: 499,000 ريال</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              نظام ممتاز للربط مع الحساسات الميدانية واهتزازات المحركات ومعدات المصانع، ويدعم عمليات الصيانة الاستباقية المبنية على الحالة الفنية للمعدات (CBM).
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-red-600 block">🛑 نقاط الضعف والمأخذ لمجموعتنا:</span>
                <ul className="list-disc list-inside text-slate-500 mt-1 space-y-0.5">
                  <li>واجهات المستخدم قديمة الطراز وتتطلب وقتاً أطول للفنيين للاعتياد عليها.</li>
                  <li>تطبيق الجوال يواجه بطئاً وتوقفاً عند تحميل عدد كبير من الأصول.</li>
                  <li>التدريب واستشارات الربط وتخصيص التقارير تتطلب رسوماً سنوية إضافية.</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-slate-700 block">💵 تفاصيل الهيكل المالي (30 فني + 1000 مستخدم):</span>
                <p className="text-slate-500 mt-1">رسوم تأسيس وربط فني: 35,000 ريال | اشتراكات الفنيين السنوية: 81,000 ريال | اشتراكات المستخدمين والطلبات: 25,000 ريال/سنة | دعم فني ممتاز وترقية: 15,000 ريال/سنة.</p>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 7 */}
      <A4Page pageNum={7}>
        <SectionHeader icon={Settings} title="رابعاً: الملفات التفصيلية للأنظمة المحلية والشركاء (3)" subtitle="تحليل ومواصفات وهيكل تسعير أنظمة: Cayan CMMS و Odoo CMMS" />
        
        <div className="space-y-4 text-xs">
          {/* Cayan CMMS */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-bold text-[#1e3a5f] text-sm">5. نظام كيان CMMS (نظام محلي وإقليمي قياسي)</h4>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px]">TCO 5 سنوات: 201,000 ريال</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              برنامج محلي مصمم ليتناسب مع الشركات السعودية المتوسطة، ويوفر دعماً حقيقياً للغة العربية والربط مع نظام الفواتير الإلكترونية المعتمدة محلياً.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-red-600 block">🛑 نقاط الضعف والمأخذ لمجموعتنا:</span>
                <ul className="list-disc list-inside text-slate-500 mt-1 space-y-0.5">
                  <li>ضعف قدرات التخصيص وجمود قاعدة البيانات عن التغيير البرمجي.</li>
                  <li>غياب خاصية العمل التام بدون اتصال (Offline Mode) بشكل مستقر للفنيين.</li>
                  <li>تطبيق الميدان يفتقر للرسوم التوضيحية وتدفقات الصيانة الذكية.</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-slate-700 block">💵 تفاصيل الهيكل المالي (30 فني + 1000 مستخدم):</span>
                <p className="text-slate-500 mt-1">تأسيس وإعداد محلي: 25,000 ريال | اشتراكات الفنيين السنوية: 36,000 ريال | اشتراكات مستخدمي الويب: مجانية ومحدودة بصلاحية رفع بلاغات فقط | دعم سنوي: 8,000 ريال.</p>
              </div>
            </div>
          </div>

          {/* Odoo CMMS */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-bold text-[#1e3a5f] text-sm">6. نظام Odoo CMMS (تطبيق موديول صيانة أودو المعتمد)</h4>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px]">TCO 5 سنوات: 274,000 ريال</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              يعتبر تطبيق الصيانة المدمج في نظام أودو ERP خياراً مفضلاً للشركات التي تستخدم أودو كنظام مالي وإداري أساسي، مما يتيح تكاملاً مباشراً وسهلاً للمالية.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-red-600 block">🛑 نقاط الضعف والمأخذ لمجموعتنا:</span>
                <ul className="list-disc list-inside text-slate-500 mt-1 space-y-0.5">
                  <li>الموديل الافتراضي محدود الخصائص للغاية ويفتقر لإدارة الأصول العميقة.</li>
                  <li>يتطلب تخصيصاً برمجياً مكثفاً بواسطة مطوري أودو بأسعار مرتفعة.</li>
                  <li>تطبيق الجوال ثقيل ويحتاج اشتراكاً في منصة Odoo Enterprise.</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-bold text-slate-700 block">💵 تفاصيل الهيكل المالي (30 فني + 1000 مستخدم):</span>
                <p className="text-slate-500 mt-1">إعداد وتهيئة وتوطين: 50,000 ريال | اشتراك 30 فني صيانة: 24,000 ريال سنويّاً | تراخيص مستخدمي الويب وأودو: 12,000 ريال سنويّاً | دعم فني للشركة الشريكة: 10,000 ريال/سنة.</p>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 8 */}
      <A4Page pageNum={8}>
        <SectionHeader icon={ShieldCheck} title="رابعاً: ملف منصة GridFix والمبررات الفنية والمالية" subtitle="التكلفة الفعلية وطبيعة ترخيص الاستخدام المجاني والمفتوح للمجموعة" />
        
        <div className="space-y-4">
          <div className="bg-[#eff6ff] rounded-xl border border-blue-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-navy-500 text-sm">✅ منصة GridFix (التطوير المخصص والأصل البرمي المملوك)</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              بناء وتخصيص منصة صيانة وأصول كاملة تعتمد على كود مصدري مخصص لمجموعة سقالة. لا يرتبط النظام بتراخيص شهرية أو سنوية لكل مستخدم، بل يتميز بالمرونة الكاملة لإضافة خصائص، وتعديل مسارات الموافقات في أي وقت.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-xs">
                <span className="font-bold text-navy-500 block mb-1">🎁 مزايا الترخيص المفتوح والمجاني:</span>
                <p className="text-slate-600 leading-relaxed text-[10.5px]">
                  تمنح المنصة مجموعة سقالة صلاحية تسجيل عدد فنيين غير محدود وفتح البوابة الإلكترونية لـ 1000+ موظف لرفع بلاغات الأعطال ومتابعتها ومشاركة التعليقات والصور دون أي كلفة إضافية.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-xs">
                <span className="font-bold text-navy-500 block mb-1">💵 تفاصيل الهيكل المالي الحقيقي لـ 5 سنوات:</span>
                <p className="text-slate-600 leading-relaxed text-[10.5px]">
                  تطوير وتخصيص النظام بالكامل (السنة الأولى): 35,000 ريال تدفع مرة واحدة.
                  <br />
                  تكاليف الاستضافة السحابية الآمنة وقواعد البيانات: 12,000 ريال سنوياً فقط.
                  <br />
                  <strong>إجمالي تكلفة 5 سنوات الفعلي: 83,000 ريال سعودي.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-2">
            <h4 className="font-bold text-navy-500">🏆 المبررات الفنية والمالية لاعتماد نظام GridFix:</h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside text-[11px]">
              <li><strong>وفر مالي مباشر:</strong> توفير مالي يعادل <strong>1,347,000 ريال</strong> عن ماكسيمو، و<strong>365,000 ريال</strong> عن نظام Fiix.</li>
              <li><strong>استقلالية تامة للبيانات:</strong> قواعد البيانات تستضاف داخل المملكة ومملوكة لسقالة، بدون خطر إغلاق النظام أو سحب التراخيص.</li>
              <li><strong>التحديثات الفنية الفورية:</strong> بفضل المطور المخصص، يتم تعديل الواجهات وإدخال سيناريوهات التحسين التشغيلية خلال ساعات دون انتظار.</li>
            </ul>
          </div>
        </div>
      </A4Page>

      {/* Page 9 */}
      <A4Page pageNum={9}>
        <SectionHeader icon={Layers} title="خامساً: القدرات التشغيلية والوظيفية لمنصة GridFix" subtitle="نظرة عامة على الهيكل الوظيفي والوحدات البرمجية المدمجة في المنصة" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-2">📁 الخريطة الوظيفية وهيكل الوحدات والبرمجيات المدمجة:</h4>
            <p className="text-slate-600 leading-relaxed text-[11px] mb-3">
              تم تقسيم الهيكل البرمجي لمنصة GridFix إلى عشر وحدات تشغيلية أساسية تغطي الدورة التشغيلية الكاملة لأصول سقالة، وتتحكم بشكل مطلق في انسيابية المهام والأمن:
            </p>
            
            <div className="grid grid-cols-2 gap-3 text-slate-700 text-[10.5px]">
              <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong className="text-navy-500">1. إدارة الأصول والمواقع:</strong>
                <p className="text-slate-500 mt-0.5">مركز الأصول الشامل (Asset 360) وتوليد شجرة الأصول والمسارات والمولد التلقائي للمعرفات الفريدة QR.</p>
              </div>
              <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong className="text-navy-500">2. تنفيذ الصيانة وأوامر العمل:</strong>
                <p className="text-slate-500 mt-0.5">محرك دورة حياة التذاكر ومؤقتات العمل الميدانية ومطابقة الإحداثيات الجغرافية والرفض الفني.</p>
              </div>
              <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong className="text-navy-500">3. محرك الصيانة الوقائية (PM):</strong>
                <p className="text-slate-500 mt-0.5">توليد التذاكر التلقائي استناداً إلى جدول التقويم الزمني أو القراءة الحقيقية للمقاييس ومعدلات الاستهلاك.</p>
              </div>
              <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong className="text-navy-500">4. هندسة الموثوقية وتحليل الأعطال:</strong>
                <p className="text-slate-500 mt-0.5">مصفوفة تحليل المخاطر FMEA وتحديد الأكواد الجذرية للأعطال وإعداد لوحات باريتو للخلل المتكرر.</p>
              </div>
              <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong className="text-navy-500">5. حوكمة المخازن وقطع الغيار:</strong>
                <p className="text-slate-500 mt-0.5">ترشيد قطع الغيار وحساب التكلفة التراكمية، ومراقبة الحدود الدنيا وإصدار طلبات التوريد التلقائية.</p>
              </div>
              <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                <strong className="text-navy-500">6. الصحة والسلامة المهنية (HSE):</strong>
                <p className="text-slate-500 mt-0.5">مراجعة تصاريح العمل وربط المهام بأقنعة ومعدات الوقاية الشخصية الإلزامية للفني قبل تشغيل التذكرة.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#eff6ff] rounded-xl border border-blue-100 p-3 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 flex items-center gap-1 text-[11px]">
              <Cpu className="w-4 h-4 text-blue-500" />
              تغطية تامة لكافة أطراف التشغيل:
            </h4>
            <p className="text-slate-600 text-[10.5px] leading-relaxed">
              يدمج الهيكل البرمجي للمنصة بين <strong>بوابة الويب المركزية (Next.js)</strong> المخصصة لمدير الصيانة والمكتب الفني لمراقبة الخطط، و<strong>تطبيق الجوال الهجين (Flutter)</strong> المخصص للفنيين بالميدان لسرعة الإغلاق والعمل الأوفلاين، و<strong>بوابة الطلبات العامة</strong> للموظفين بدون حساب.
            </p>
          </div>
        </div>
      </A4Page>

      {/* Page 10 */}
      <A4Page pageNum={10}>
        <SectionHeader icon={Settings} title="سادساً: دليل الخصائص والميزات الفنية لـ GridFix (1)" subtitle="تحليل شامل لميزات إدارة الأصول ودورة العمل ومؤقتات الميدان" />
        
        <div className="space-y-3 text-[11px] leading-relaxed">
          {/* Asset 360 Hub */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              1. مركز معلومات الأصول الشامل (Asset 360 Hub)
            </h4>
            <p className="text-slate-600 text-[10px]">
              يقوم بتجميع كافة مواصفات وتاريخ المعدة (عقود، تكاليف، صيانة وقائية، شروحات فيديو، كود الباركود) في شاشة واحدة. ينهي هذا المركز مشكلة بعثرة البيانات والبحث في الإكسيل والملفات القديمة، ويساهم في حساب دقيق للتكلفة الإجمالية التراكمية للملكية (TCO) لمعرفة الأصول عالية الاستهلاك المالي.
            </p>
          </div>

          {/* Materialized Path */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              2. شجرة الأصول والمسارات المبنية (Materialized Path Location Trees)
            </h4>
            <p className="text-slate-600 text-[10px]">
              يرتب مواقع ومباني سقالة في هيكل شجري مرئي (الموقع &gt; المبنى &gt; الدور &gt; الغرفة &gt; النظام). يستند لتصميم قواعد بيانات متطور يتيح تحميل شجرة المواقع الضخمة في جزء من الثانية، ويساعد الفنيين في تتبع تأثير إيقاف المعدة على الأنظمة الفرعية التابعة لها قبل البدء.
            </p>
          </div>

          {/* Auto ID & Lifecycle */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              3. دورة حياة ومراحل أمر العمل الصارمة (Work Order Status Lifecycle)
            </h4>
            <p className="text-slate-600 text-[10px]">
              محرك برمجي يفرض تتبعاً دقيقاً لأمر العمل عبر حالات متتالية (مسودة ⬅️ مفتوح ⬅️ معين ⬅️ قيد التنفيذ ⬅️ منجز ⬅️ مغلق). يمنع هذا المحرك إغلاق المهام عشوائياً، ويلزم الفنيين بتسجيل قراءات العدادات، والقطع التالفة، وإقرار شروط السلامة قبل السماح بتغيير حالة التذكرة.
            </p>
          </div>

          {/* Labor Timers & GPS */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              4. مؤقتات العمل والتحقق الجغرافي (Labor Timers & GPS Verification)
            </h4>
            <p className="text-slate-600 text-[10px]">
              يتيح للفني تشغيل ساعة الإنجاز الرقمية بالجوال (Start/Stop) لحساب زمن الصيانة الفعلي بدقة وتفادي الإدخال العشوائي في نهاية الأسبوع. كما يتحقق النظام عبر إحداثيات الـ GPS للتأكد من وجود الفني الفعلي داخل النطاق الجغرافي للأصل قبل تمكينه من تفعيل التذكرة، للقضاء على الصيانة الوهمية.
            </p>
          </div>
        </div>
      </A4Page>

      {/* Page 11 */}
      <A4Page pageNum={11}>
        <SectionHeader icon={Settings} title="سادساً: دليل الخصائص والميزات الفنية لـ GridFix (2)" subtitle="تحليل محرك الصيانة الوقائية والتحليل الجذري وإدارة المخزن" />
        
        <div className="space-y-3 text-[11px] leading-relaxed">
          {/* PM Engine */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              1. محرك جدولة الصيانة الوقائية بالزمن والاستهلاك (Time & Meter PM Triggers)
            </h4>
            <p className="text-slate-600 text-[10px]">
              يقوم بجدولة المهام الدورية آلياً. يدعم الجدولة الزمنية (يومي، أسبوعي، سنوي) والجدولة الذكية القائمة على معدلات التشغيل الحقيقية (مثل: صيانة المولد كل 500 ساعة تشغيل، أو تغيير فلاتر شيلر التكييف عند تجاوز حد معين)، مما يحمي المعدات من الأعطال المفاجئة ويحفظ الضمانات.
            </p>
          </div>

          {/* FMEA & Failure Codes */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              2. مصفوفة FMEA لتقييم المخاطر وتحديد مسببات الأعطال (Failure Coding & FMEA)
            </h4>
            <p className="text-slate-600 text-[10px]">
              واجهة مخصصة للمهندسين لتحليل أنماط الفشل وتأثيراتها عبر مصفوفة مخاطر تفاعلية 5×5 لتحديد رقم أولوية المخاطر (RPN). كما يلزم النظام الفني باختيار كود العطل الجذري عند إغلاق التذكرة (مثل: تلف كهربائي، سوء استخدام، انتهاء العمر الافتراضي) لبناء تقارير باريتو 80/20 لتحديد مكمن الخلل.
            </p>
          </div>

          {/* Inventory Rollup */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              3. حساب تكلفة القطع وحركات المخزون التلقائية (Stock Movements & Cost Rollup)
            </h4>
            <p className="text-slate-600 text-[10px]">
              يقوم بربط المخازن بأوامر العمل بشكل لحظي. عند استخدام قطعة غيار في صيانة معدة، يقوم النظام تلقائياً بخصمها من رصيد المستودع، وتحديث متوسط التكلفة، وإرسال إشعار فوري عند وصول المخزون للحد الأدنى من الأمان، وإضافة كلفة القطع فوراً لإجمالي تكلفة الصيانة للأصل.
            </p>
          </div>

          {/* Tool Custody & SLA */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              4. تنبيهات خرق اتفاقية مستوى الخدمة والضمانات (SLA Breach & Warranty Alerts)
            </h4>
            <p className="text-slate-600 text-[10px]">
              شاشات ذكية تراقب المهل الزمنية المتفق عليها لإصلاح الأعطال وتصنف التذاكر القريبة من الخرق وتصعد أولويتها تلقائياً. كما تظهر ميزة تحذير الضمان بشكل بارز عند فتح تذكرة لأصل مغطى بضمان نشط، لتنبيه المشرف لمخاطبة المورد والامتناع عن دفع أي تكلفة صيانة مجانية.
            </p>
          </div>
        </div>
      </A4Page>

      {/* Page 12 */}
      <A4Page pageNum={12}>
        <SectionHeader icon={Settings} title="سادساً: دليل الخصائص والميزات الفنية لـ GridFix (3)" subtitle="تحليل آليات الأمان وتشفير الجوال وبوابة البلاغات والـ WebSockets" />
        
        <div className="space-y-3 text-[11px] leading-relaxed">
          {/* SQLCipher */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              1. تشفير قواعد البيانات على جوالات الفنيين (SQLCipher AES-256)
            </h4>
            <p className="text-slate-600 text-[10px]">
              لحماية خصوصية وأمن بيانات سقالة، يتم تشفير قاعدة بيانات التطبيق على أجهزة الفنيين بالكامل باستخدام تشفير AES-256 المتطور. يتم تخزين مفاتيح التشفير بشكل آمن في خزانة المفاتيح المحمية للهاتف (Keychain)، مما يمنع تسرب أو سرقة المخططات الفنية أو الصلاحيات في حال فقدان الهاتف أو سرقته.
            </p>
          </div>

          {/* WebSockets */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              2. بث التنبيهات اللحظية النشطة عبر شبكة الـ WebSockets
            </h4>
            <p className="text-slate-600 text-[10px]">
              تضم المنصة نظام إرسال تنبيهات فوري مبني على بروتوكول Socket.io المزدوج. يتم توزيع التنبيهات والأعطال الحرجة للفنيين ومناوبي المواقع لحظياً دون الحاجة لتحديث الصفحة، مما يقلل بشكل ملموس من زمن الاستجابة للبلاغات الطارئة والخطرة.
            </p>
          </div>

          {/* Public Request Portal */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              3. بوابة تقديم البلاغات العامة ومكافحة الرسائل العشوائية (Spam Control)
            </h4>
            <p className="text-slate-600 text-[10px]">
              تتيح للموظفين والزوار مسح كود QR ملصق على جدار الغرفة أو المعدة لرفع بلاغ صيانة مباشر دون الحاجة لتحميل التطبيق أو إنشاء حساب. يشتمل النظام على لوغاريتم ذكي يحدد رصيد تقديم بلاغات يومي لكل بريد إلكتروني لمنع الإغراق والطلبات المكررة لنفس العطل.
            </p>
          </div>

          {/* MFA */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-1">
            <h4 className="font-bold text-[#1e3a5f] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              4. معالج المصادقة ثنائية العاملين للمشرفين (MFA TOTP Wizard)
            </h4>
            <p className="text-slate-600 text-[10px]">
              حماية إضافية لحسابات المهندسين والمدراء والمكتب الفني لمنع الوصول غير المصرح به. يتيح النظام توليد رموز مصادقة متغيرة (TOTP) متوافقة مع تطبيقات Google Authenticator مع توفير أكواد استرجاع مشفرة تُحفظ عند الطوارئ لمنع اختراق لوحة القيادة.
            </p>
          </div>
        </div>
      </A4Page>

      {/* Page 13 */}
      <A4Page pageNum={13}>
        <SectionHeader icon={Activity} title="سابعاً: مصفوفة الأثر الفني ومقاييس تميز الصيانة" subtitle="مدى تأثير ميزات نظام GridFix على مؤشرات الأداء التشغيلية وموثوقية الأصول" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm text-xs">
            <DataTable columns={impactCols} rows={impactRows} />
          </div>

          <CallOutBox type="tip" title="تفسير مستويات الأثر التشغيلي">
            يظهر الجدول التوافق التام والتأثير الكاسح لمكونات نظام <strong>GridFix</strong> على خفض زمن الإصلاح (MTTR) وتحسين الموثوقية بفضل إدماج أدوات مركز معلومات الأصول 360 وقوالب خطط العمل، حيث تساهم في رفع سرعة تشخيص الأعطال وتدريب الفنيين الجدد بنسبة 30%.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 14 */}
      <A4Page pageNum={14}>
        <SectionHeader icon={Scale} title="ثامناً: المقارنة التنافسية وهيكل المفاضلة الاستراتيجية" subtitle="مقارنة فنية تشغيلية بين الطرق التقليدية والإكسيل والتشغيل التفاعلي مقابل GridFix" />
        
        <div className="space-y-4 text-xs">
          {/* Excel vs GridFix */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <h4 className="font-bold text-navy-500 border-b border-slate-100 pb-1.5 flex items-center gap-1">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              مقارنة جداول الإكسيل التقليدية مقابل نظام GridFix:
            </h4>
            <table className="w-full text-right text-[10.5px] border-collapse leading-relaxed">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="p-2 font-bold">المعيار المقارن</th>
                  <th className="p-2 font-bold">جداول الإكسيل الحالية</th>
                  <th className="p-2 font-bold">✅ نظام GridFix المخصص</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-slate-600">
                  <td className="p-2 font-bold text-slate-800">صلاحية العمل بالميدان</td>
                  <td className="p-2 text-red-600">صعبة جداً، وتؤدي لتأخير إدخال البيانات لعدة أيام.</td>
                  <td className="p-2 text-emerald-700 font-medium">تطبيق ميداني جوال مخصص وسلس وسريع الاستخدام.</td>
                </tr>
                <tr className="border-b border-slate-100 text-slate-600">
                  <td className="p-2 font-bold text-slate-800">الأتمتة والتحذيرات</td>
                  <td className="p-2 text-red-600">تتطلب تحديثاً يدوياً كاملاً، ولا تحتوي على تنبيهات.</td>
                  <td className="p-2 text-emerald-700 font-medium">توليد تلقائي وتنبيهات فورية عند انخفاض قطع الغيار.</td>
                </tr>
                <tr className="text-slate-600">
                  <td className="p-2 font-bold text-slate-800">تزامن وتعدد المستخدمين</td>
                  <td className="p-2 text-red-600">تغلق الملفات وتتعارض التحديثات عند فتحها معاً.</td>
                  <td className="p-2 text-emerald-700 font-medium">تزامن فوري ومفتوح لعدد غير محدود من المستخدمين.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Manual Methods vs GridFix */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
            <h4 className="font-bold text-navy-500 border-b border-slate-100 pb-1.5 flex items-center gap-1">
              <Users2 className="w-4 h-4 text-blue-600" />
              مقارنة الطرق اليدوية (الأوراق والسبورات) مقابل نظام GridFix:
            </h4>
            <table className="w-full text-right text-[10.5px] border-collapse leading-relaxed">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="p-2 font-bold">المعيار المقارن</th>
                  <th className="p-2 font-bold">السبورات والأوراق الورقية</th>
                  <th className="p-2 font-bold">✅ نظام GridFix المخصص</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-slate-600">
                  <td className="p-2 font-bold text-slate-800">حفظ وضياع المعلومات</td>
                  <td className="p-2 text-red-600">احتمالية عالية لفقد المستندات وتلفها وصعوبة قراءتها.</td>
                  <td className="p-2 text-emerald-700 font-medium">حفظ رقمي مشفر وسحابي آمن وتوثيق فوري للأعمال.</td>
                </tr>
                <tr className="border-b border-slate-100 text-slate-600">
                  <td className="p-2 font-bold text-slate-800">رؤية المدير المباشر</td>
                  <td className="p-2 text-red-600">يجب الحضور الميداني أو الاتصال الهاتفي بكل فني.</td>
                  <td className="p-2 text-emerald-700 font-medium">لوحات تحكم ذكية تحدث لحظياً بأماكن وحالة الفنيين.</td>
                </tr>
                <tr className="text-slate-600">
                  <td className="p-2 font-bold text-slate-800">حكم الالتزام بالسلامة</td>
                  <td className="p-2 text-red-600">يعتمد كلياً على الأمانة والثقة الشخصية دون رقيب.</td>
                  <td className="p-2 text-emerald-700 font-medium">يقيد تشغيل التذكرة بإلزامية تأكيد مهمات الوقاية.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </A4Page>

      {/* Page 15 */}
      <A4Page pageNum={15}>
        <SectionHeader icon={TrendingUp} title="تاسعاً: حساب وتحليل العائد المالي على الاستثمار (ROI)" subtitle="دراسة كمية للوفورات النقدية السنوية المتوقعة لمجموعة سقالة بعد تشغيل GridFix" />
        
        <div className="space-y-4 text-xs">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
            <h4 className="font-bold text-navy-500 border-b border-slate-100 pb-1.5 text-sm">💰 صيغة قياس التوفير المالي السنوي التراكمي:</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              يتم احتساب الوفر النقدي الإجمالي للمجموعة عبر دمج أربعة وفورات تشغيلية مباشرة ناتجة عن التحول الرقمي:
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-bold text-blue-800 text-xs">
              الوفر السنوي الإجمالي = وفر تقليل التعطل + وفر إنتاجية الفنيين + وفر ترشيد المخزون + وفر استرداد الضمانات
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-[10.5px] pt-1">
              <div className="p-2.5 border border-slate-100 rounded bg-slate-50/50">
                <strong className="text-navy-500">1. وفر تقليل تعطل المعدات الحرج:</strong>
                <p className="text-slate-500 mt-1">تؤدي الصيانة الوقائية لخفض الأعطال المفاجئة بمعدل 30 ساعة سنوياً. بمتوسط كلفة توقف 3,000 ريال/ساعة للمستودعات الكبرى والمراكز الحيوية، يوفر النظام **90,000 ريال سنوياً**.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded bg-slate-50/50">
                <strong className="text-navy-500">2. وفر كفاءة العمالة الميدانية:</strong>
                <p className="text-slate-500 mt-1">توفير 1.5 ساعة ورقية يومية لكل فني. لـ 30 فني بمعدل كلفة ساعة عمل 35 ريال، يحقق التزامن المباشر توفير **40,950 ريال سنوياً** من تكاليف الوقت الضائع.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded bg-slate-50/50">
                <strong className="text-navy-500">3. وفر ترشيد وإدارة المخزون:</strong>
                <p className="text-slate-500 mt-1">يقلل تتبع القطع بالفيديو والباركود الهدر والتلف بنسبة 20%. لقيمة مخزن تقدر بـ 150,000 ريال يوفر النظام التلقائي ما يعادل **30,000 ريال سنوياً**.</p>
              </div>
              <div className="p-2.5 border border-slate-100 rounded bg-slate-50/50">
                <strong className="text-navy-500">4. وفر استرداد عقود الضمان:</strong>
                <p className="text-slate-500 mt-1">بفضل التحذير الفوري للأصول المغطاة بالضمان، تتفادى المجموعة دفع قيمة 3 إصلاحات كبرى مغطاة سنوياً بمتوسط وفر يقدر بـ **24,000 ريال سنوياً**.</p>
              </div>
            </div>
          </div>

          <CallOutBox type="goal" title="إجمالي الوفر التشغيلي السنوي المتوقع لمجموعتنا">
            بجمع عناصر الوفر الأربعة، يتوقع أن تحقق منصة <strong>GridFix</strong> وفراً مالياً سنوياً نقدياً خالصاً لمجموعة سقالة يقدر بـ <strong>184,950 ريال سعودي</strong>، مما يعني استرداد كامل تكلفة التطوير (35,000 ريال) خلال **أول 3 أشهر فقط** من التشغيل الفعلي.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 16 */}
      <A4Page pageNum={16}>
        <SectionHeader icon={Cpu} title="عاشراً: الميزات الفنية الخلفية وأدوات استقرار النظام" subtitle="المعالجات غير المرئية لتأمين البيانات وحل التعارضات وتوافق الخوادم" />
        
        <div className="space-y-4 text-xs">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
            <h4 className="font-bold text-navy-500 border-b border-slate-100 pb-1.5 text-sm flex items-center gap-1">
              <Server className="w-4 h-4 text-blue-600" />
              الهندسة البرمجية والخصائص الخلفية الذكية في GridFix:
            </h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              تضم المنصة مجموعة من الأدوات والمحركات غير المرئية التي تعمل تلقائياً في الخلفية لضمان سلامة العمليات وتكامل البيانات الفنية للمستشفيات والمواقع الحيوية:
            </p>
            
            <div className="space-y-2 text-[10.5px]">
              <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                <strong>1. معالجة تعارض المزامنة التلقائية (Collision Resolution):</strong>
                <p className="text-slate-500 mt-0.5">عند إعادة اتصال فنيين متعددين للشبكة ورفعهم لنفس أمر العمل، يقوم النظام تلقائياً باعتماد سياسة (الخيار الأحدث يفوز - Last Write Wins) للملاحظات المكتوبة، مع حظر وتوجيه التحديثات المتعارضة في حالة أمر الصرف للمراجعة اليدوية بالمكتب الفني.</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                <strong>2. التبديل التلقائي لمهايئ قاعدة البيانات (Database Swapping):</strong>
                <p className="text-slate-500 mt-0.5">يكتشف النظام نوع البيئة أثناء التشغيل، ويقوم بالتبديل التلقائي والديناميكي بين قواعد بيانات PostgreSQL/Supabase الكبرى في بيئة الويب السحابية المركزية، وقاعدة SQLite المحلية السريعة عند التثبيت الفردي في المواقع البعيدة المنقطعة.</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                <strong>3. طبقة الحذف اللطيف الآمنة (Soft Delete Repository):</strong>
                <p className="text-slate-500 mt-0.5">يمنع النظام المسح النهائي لأي أصل أو مستودع أو فني، ويستعيض عنه بإدراج وسم الحذف المؤقت (deleted_at). يتيح ذلك للمكتب الفني استعادة أي بيانات تم مسحها بالخطأ مع المحافظة التامة على سجل وتاريخ الصيانة المرتبط بها للأبد.</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                <strong>4. آلية الاسترداد التلقائي وخادم النسخ المتوافق (WAL Mode Fallback):</strong>
                <p className="text-slate-500 mt-0.5">يستخدم النظام محرك فحص الأخطاء التلقائي لتحويل قواعد بيانات المواقع المنعزلة لنمط الـ (Write-Ahead Logging) لضمان كتابة البيانات بسرعة فائقة ومنع العطب والتوقف في حالة حدوث تذبذب بالتيار الكهربائي.</p>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 17 */}
      <A4Page pageNum={17}>
        <SectionHeader icon={ShieldCheck} title="حادي عشر: أهم 50 ميزة ووجه بيع استراتيجي لمنصة GridFix" subtitle="قائمة شاملة ومكثفة للقدرات ونقاط القوة التنافسية للاعتماد من مجلس الإدارة" />
        
        <div className="space-y-3 text-[9px] leading-tight">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-slate-700">
              <div className="space-y-1">
                <p>1. 🟢 **تشغيل بلا توقف:** يعمل أوفلاين بالكامل بالجوال دون شبكة.</p>
                <p>2. 🟢 **تطبيق جوال أصيل:** مبني بتقنية Flutter السريعة بالكامل.</p>
                <p>3. 🟢 **تشفير عسكري:** تشفير خزانة الجوال بالكامل بـ AES-256.</p>
                <p>4. 🟢 **مزامنة ذكية خلفية:** رفع البيانات فور استعادة الإنترنت تلقائياً.</p>
                <p>5. 🟢 **بوابة عامة بدون حساب:** للموظفين والزوار لرفع البلاغات.</p>
                <p>6. 🟢 **مكافحة السبام:** نظام رصيد الإيميلات لمنع التكرار والإغراق.</p>
                <p>7. 🟢 **اعتماد تذاكر ذكي:** يمنع الصرف والعمل دون موافقة إدارية.</p>
                <p>8. 🟢 **زر الطوارئ الأحمر:** تنبيهات عاجلة تهتز عند الأعطال الكبرى.</p>
                <p>9. 🟢 **ألوان ليلية مخصصة:** ثيمات ميتد للتحكم بالمواقع المظلمة.</p>
                <p>10. 🟢 **ثيم التباين الشمسي:** ثيم مخصص للقراءة تحت أشعة الشمس.</p>
                <p>11. 🟢 **مركز الأصول 360:** تاريخ وصيانة وكتالوج المعدة في شاشة واحدة.</p>
                <p>12. 🟢 **مولد معرفات قياسي:** تنظيم أسماء الأصول تلقائياً بدون تداخل.</p>
                <p>13. 🟢 **أشجار المسارات الهيكلية:** تتبع انسيابية الطاقة والمحطات بموقع الأصول.</p>
                <p>14. 🟢 **قوائم فحص صارمة:** إلزام الفني بخطوات الصيانة خطوة بخطوة.</p>
                <p>15. 🟢 **بوابة أمان إلزامية:** تمنع بدء التذكرة قبل تأكيد مهمات الوقاية.</p>
                <p>16. 🟢 **سحب الباركود بالمسح:** للتأكد الميداني من الصيانة للمعدة الصحيحة.</p>
                <p>17. 🟢 **مؤقتات صيانة ميدانية:** تسجيل دقيق لزمن العمل الفعلي (Wrench Time).</p>
                <p>18. 🟢 **خصم فوري للمخازن:** ترحيل الصرف التلقائي للقطع وخصمها من الرصيد.</p>
                <p>19. 🟢 **مراقبة خرق الـ SLA:** تصعيد تلقائي للتذاكر المتأخرة لحمايتها.</p>
                <p>20. 🟢 **سياج جغرافي GPS:** يمنع الفني من إغلاق التذكرة بعيداً عن الموقع.</p>
              </div>
              <div className="space-y-1">
                <p>21. 🟢 **رفض فني معلل:** يرسل تنبيهاً فورياً للمشرف بأسباب الرفض.</p>
                <p>22. 🟢 **حراسة عهدة العدد:** تتبع الأدوات الحساسة ومواقع حركتها.</p>
                <p>23. 🟢 **جدولة وقائية ذكية:** بالزمن أو القراءة الفعلية للاستهلاك والعداد.</p>
                <p>24. 🟢 **مصفوفة المخاطر FMEA:** مصفوفة تفاعلية 5x5 لتحديد التذاكر الحرجة.</p>
                <p>25. 🟢 **أكواد أعطال قياسية:** حصر المسببات للخلل لخطط الصيانة المستقبلية.</p>
                <p>26. 🟢 **تحذير الضمان الفوري:** يمنع دفع تكاليف للمعدات المضمونة من الوكيل.</p>
                <p>27. 🟢 **تنبيهات WebSockets:** إشعارات منبثقة فورية للفنيين بدون إنعاش الصفحة.</p>
                <p>28. 🟢 **فصل بيانات أمن الصلاحيات:** عزل تام للتقارير المالية عن الفنيين.</p>
                <p>29. 🟢 **مصادقة ثنائية MFA:** حماية حسابات لوحات القيادة العليا والمشرفين.</p>
                <p>30. 🟢 **تأمين الحذف المؤقت:** سلة مهملات رقمية آمنة لاستعادة البيانات الممسوحة.</p>
                <p>31. 🟢 **تصدير متعدد الصيغ:** استخراج التقارير بصيغ PDF و Excel و CSV بنقرة واحدة.</p>
                <p>32. 🟢 **معالج رفع البيانات الجماعي:** ترحيل آلاف الأصول بملفات CSV بدقائق.</p>
                <p>33. 🟢 **كتالوج الموردين والمقاولين:** سرعة التواصل والطلب لقطع الغيار والصيانة.</p>
                <p>34. 🟢 **إنذار تدني رصيد المخزن:** تنبيه المكتب الفني قبل نفاد القطع الحرجة.</p>
                <p>35. 🟢 **مراقبة دوام وجاهزية الفنيين:** منع إرسال تذاكر لمن في إجازات أو خارج الدوام.</p>
                <p>36. 🟢 **إقران وسائط متعددة:** إرفاق صور الأعطال وشهادات الصلاحية بالتذاكر.</p>
                <p>37. 🟢 **لوحة التحكم التراكمية للتكلفة:** حساب قيمة إهلاك وتكلفة تشغيل كل أصل.</p>
                <p>38. 🟢 **سجل التغييرات الشامل:** تتبع تاريخ الإدخال والمستخدم المغير للبيانات بالدقة.</p>
                <p>39. 🟢 **محول قواعد البيانات التلقائي:** تشغيل مرن على PostgreSQL بالغيوم و SQLite محلياً.</p>
                <p>40. 🟢 **تقليص نفقات التأسيس:** وفورات مباشرة في السنة الأولى من التراخيص والتركيب.</p>
              </div>
            </div>
            
            <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between text-[#1e3a5f] font-semibold text-[8px]">
              <span>٤١. دعم العربية والإنجليزية بالكامل بملفات الترجمة</span>
              <span>٤٢. جدولة تلقائية للمخزن</span>
              <span>٤٣. ربط مباشر مع المستندات الفنية</span>
              <span>٤٤. تحليلات أداء متكاملة للفنيين</span>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 18 */}
      <A4Page pageNum={18}>
        <SectionHeader icon={Users2} title="اثنا عشر: نماذج الاستثمار والشراكة الاستراتيجية (1)" subtitle="النموذج الأول: نموذج الشركة المشتركة والاستثمار التجاري (Joint Venture Model)" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-navy-500 text-sm">🤝 مفهوم تأسيس شركة تقنية مشتركة (JV)</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              يقوم هذا النموذج على تأسيس كيان قانوني وشركة تقنية ناشئة متخصصة في حلول صيانة المنشآت (مثال: شركة GridFix للحلول الرقمية) تساهم فيها مجموعة سقالة بالتمويل والرعاية التجارية وتقديم أول بيئة تشغيلية (Reference Customer)، ويساهم فيها المهندس المطور بالملكية الفكرية والكود وتولي الإدارة الفنية والتنفيذية للشركة.
            </p>
            <div className="border-t border-slate-100 pt-3">
              <span className="font-bold text-[#1e3a5f] block mb-2">📊 هيكل الحصص وتوزيع الأرباح المقترح:</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg">
                  <span className="block font-bold text-blue-800 text-sm">60% مجموعة سقالة</span>
                  <p className="text-[11px] text-slate-600 mt-1">تلتزم بتمويل السيرفرات والتسويق، ومقر الشركة، وتغطية الجوانب القانونية وتوفير عقود الدعم الفني الأولية.</p>
                </div>
                <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-lg">
                  <span className="block font-bold text-emerald-800 text-sm">40% المهندس المطور</span>
                  <p className="text-[11px] text-slate-600 mt-1">يلتزم بتقديم الكود المصدري كاملاً، وتطوير النظام، وتولي منصب الشريك التقني التنفيذي (CTO) وإدارة المبرمجين.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-2">💎 المنافع والالتزامات التففاضلية للنموذج الأول:</h4>
            <table className="w-full text-right text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                  <th className="p-2 font-bold">الجهة</th>
                  <th className="p-2 font-bold">الالتزامات الرئيسية</th>
                  <th className="p-2 font-bold">المنافع والمكاسب الاستراتيجية</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-slate-600">
                  <td className="p-2 font-bold text-slate-800">مجموعة سقالة</td>
                  <td className="p-2">تغطية مصاريف التأسيس القانونية + تمويل الخوادم وفريق المبيعات (حوالي 80,000 ريال بالسنة 1).</td>
                  <td className="p-2 text-emerald-700 font-medium">رخصة استخدام Enterprise مجانية وغير محدودة لكافة مرافقها للأبد + 60% من أرباح بيع النظام للغير بالسوق كمنصة SaaS.</td>
                </tr>
                <tr className="text-slate-600">
                  <td className="p-2 font-bold text-slate-800">المهندس المطور</td>
                  <td className="p-2">التفرغ للإدارة التقنية + حظر بيع كود النظام لأي منافس مباشر لمجموعة سقالة في قطاع الصيانة الطبي والمستودعات.</td>
                  <td className="p-2 text-emerald-700 font-medium">عقد تشغيل وراتب إداري كمدير تقني للمنصة + تملك 40% من أصول وأرباح الشركة التقنية الجديدة في السوق.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </A4Page>

      {/* Page 19 */}
      <A4Page pageNum={19}>
        <SectionHeader icon={Users2} title="ثلاثة عشر: نماذج الاستثمار والشراكة الاستراتيجية (2)" subtitle="النموذج الثاني: نموذج ترخيص البرمجيات والتعاقد الخاص (Software Licensing & SLA)" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-navy-500 text-sm">🤝 مفهوم ترخيص البرمجيات واتفاقية مستوى الخدمة (SLA)</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              في هذا نموذج، يحتفظ المهندس المطور بملكية الكود المصدري والعلامة التجارية للمنصة بنسبة 100%، ويقوم ببيع <strong>رخصة استخدام مؤسسية مخصصة ومفتوحة التعداد (Enterprise Site License)</strong> لصالح مجموعة سقالة، مع التوقيع على اتفاقية مستوى خدمة (SLA) سنوية تغطي الدعم الفني والتعديلات والاستضافة.
            </p>
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <span className="font-bold text-[#1e3a5f] block">💵 الهيكل المالي المقترح والتدفقات النقدية:</span>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="block font-bold text-slate-800">السنة الأولى (التخصيص والتشغيل):</span>
                  <p className="text-slate-600 mt-1 font-semibold text-blue-700">50,000 ريال سعودي</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">تغطي بناء الشاشات المخصصة، وتوطين قواعد البيانات، والربط بالـ ERP والباركود وتجريب الفنيين.</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="block font-bold text-slate-800">السنوات التالية (دعم وصيانة واستضافة):</span>
                  <p className="text-slate-600 mt-1 font-semibold text-blue-700">12,000 ريال سعودي / سنوياً</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">تغطي إيجار الخوادم السحابية الاحترافية، والنسخ الاحتياطي، وحل المشكلات الفنية والتحديثات الأساسية.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-2">💎 المنافع والالتزامات التفصيلية للنموذج الثاني:</h4>
            <table className="w-full text-right text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                  <th className="p-2 font-bold">الجهة</th>
                  <th className="p-2 font-bold">الالتزامات الرئيسية</th>
                  <th className="p-2 font-bold">المنافع والمكاسب الاستراتيجية</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-slate-600">
                  <td className="p-2 font-bold text-slate-800">مجموعة سقالة</td>
                  <td className="p-2">دفع رسوم الإعداد في السنة الأولى والالتزام برسوم الصيانة السنوية الثابتة.</td>
                  <td className="p-2 text-emerald-700 font-medium">توفير مالي هائل جداً (93%)، ونظام مخصص 100% دون تحمل مسؤولية قانونية أو تكاليف توظيف مبرمجين داخليين.</td>
                </tr>
                <tr className="text-slate-600">
                  <td className="p-2 font-bold text-slate-800">المهندس المطور</td>
                  <td className="p-2">ضمان استقرار الخوادم بنسبة 99.9%، وتقديم الدعم التقني، وحل الأعطال الحرجة خلال ساعتين كحد أقصى.</td>
                  <td className="p-2 text-emerald-700 font-medium">الحرية المطلقة والكاملة في بيع وتسويق نظام GridFix لعملاء آخرين في السوق كـ SaaS واحتفاظه بـ 100% من عوائده الخارجية.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </A4Page>

      {/* Page 20 */}
      <A4Page pageNum={20}>
        <SectionHeader icon={Users2} title="أربعة عشر: نماذج الاستثمار والشراكة الاستراتيجية (3)" subtitle="النموذج الثالث: نموذج الرعاية والتمويل الاستراتيجي (Strategic Sponsorship)" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-navy-500 text-sm">🤝 مفهوم الرعاية الاستراتيجية وتقاسم الأرباح</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              يمثل هذا النموذج حلاً وسطاً وجذاباً؛ حيث تقوم مجموعة سقالة **برعاية وتمويل تطوير النظام بالكامل كأصل رقمي داخلي مغذى من مرافقها**، مع احتفاظ المهندس بالملكية الفكرية الأساسية. وفي المقابل، يحصل المهندس على تمويل كافٍ لتشغيل وتدشين السيرفرات وإضافة الميزات، وتحصل سقالة على نسبة **25% من عوائد مبيعات النظام للجهات الخارجية** لمدة 5 سنوات كاسترداد لاستثمارها الأول.
            </p>
            <div className="border-t border-slate-100 pt-3">
              <span className="font-bold text-[#1e3a5f] block mb-2">📊 مقارنة اتخاذ القرار بين النماذج الثلاثة لاختيار الأنسب:</span>
              <table className="w-full text-right text-[10px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                    <th className="p-2 font-bold">النموذج المقارن</th>
                    <th className="p-2 font-bold">ملكية الكود مصدرياً</th>
                    <th className="p-2 font-bold">مساهمة سقالة المالية</th>
                    <th className="p-2 font-bold">العائد الاستثماري لسقالة (ROI)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 text-slate-600">
                    <td className="p-2 font-bold text-slate-800">الشركة المشتركة (JV)</td>
                    <td className="p-2">مشترك (60% سقالة / 40% المطور)</td>
                    <td className="p-2">عالية (تأسيس شركة ومقر وموظفون)</td>
                    <td className="p-2 text-emerald-700 font-medium">عالي جداً (60% من أرباح السوق والمبيعات للأبد)</td>
                  </tr>
                  <tr className="border-b border-slate-100 text-slate-600">
                    <td className="p-2 font-bold text-slate-800">الترخيص و الـ SLA</td>
                    <td className="p-2">المهندس المطور بنسبة 100%</td>
                    <td className="p-2">منخفضة جداً (50k ثم 12k سنوياً)</td>
                    <td className="p-2 text-emerald-700 font-medium">وفر مالي تشغيلي ضخم للمستشفيات والمستودعات</td>
                  </tr>
                  <tr className="text-slate-600">
                    <td className="p-2 font-bold text-slate-800">الرعاية وتقاسم الأرباح</td>
                    <td className="p-2">المهندس المطور (مع حق تشغيل لسقالة)</td>
                    <td className="p-2">متوسطة (تمويل المطور والسيرفرات)</td>
                    <td className="p-2 text-emerald-700 font-medium">متوسط (استرداد 25% من مبيعات السوق لـ 5 سنوات)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <CallOutBox type="tip" title="توصية مهندس المشروع">
            إذا رغبت مجموعة سقالة في الدخول في سوق البرمجيات كأصل استثماري جديد ومدر للدخل، فإن <strong>نموذج الشركة المشتركة (JV)</strong> هو الأفضل. أما إذا كان هدف المجموعة الرئيسي هو الحصول على النظام بأفضل سعر وضمان تفرغ المهندس للدعم، فإن <strong>نموذج الترخيص والـ SLA</strong> يمثل الخيار الأكثر أماناً وأقل عبئاً قانونياً وتأسيساً.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 21 */}
      <A4Page pageNum={21}>
        <SectionHeader icon={Cpu} title="خمسة عشر: الربط التقني وتكامل منصة GridFix" subtitle="دعم بروتوكولات أنظمة إدارة المباني BMS والربط مع Honeywell, Siemens, Schneider" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-navy-500 text-[11.5px]">🔌 آلية ربط الـ CMMS بأنظمة إدارة المباني الذكية (BMS)</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              تتميز منصة GridFix بمرونة بنيتها البرمجية وقدرتها على الربط مع أجهزة استشعار الحرارة والمحركات ولوحات الكهرباء عبر بروتوكولات BMS المعتمدة دولياً، مما يتيح إصدار بلاغات الصيانة تلقائياً دون تدخل بشري عند حدوث خلل:
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="font-bold text-[#1e3a5f] block mb-1">📟 بروتوكولات الربط المدعومة برمجياً:</span>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li><strong>BACnet (IP / MSTP):</strong> لربط مكيفات الشيلر المركزية والمضخات ومراقبة الاستهلاك.</li>
                  <li><strong>Modbus (TCP / RTU):</strong> لقراءة أحمال لوحات التوزيع والمولدات والجهد الكهربائي.</li>
                  <li><strong>MQTT:</strong> لربط حساسات إنترنت الأشياء الصغيرة (IoT) كحساسات تسرب المياه والرطوبة.</li>
                  <li><strong>REST APIs / Webhooks:</strong> لتكامل البيانات والتقارير مع أنظمة المشتريات والمخازن.</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="font-bold text-[#1e3a5f] block mb-1">🏢 التوافق مع الأنظمة والماركات الكبرى:</span>
                <p className="text-slate-600 leading-relaxed text-[10.5px]">
                  تم اختبار وتطوير واجهات تكامل GridFix لتكون متوافقة بالكامل مع عائلة أنظمة التحكم الذكية لكل من:
                  <br />
                  - **Honeywell (ComfortPoint Open)**
                  <br />
                  - **Siemens (Desigo CC)**
                  <br />
                  - **Schneider Electric (EcoStruxure)**
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-2">
            <h4 className="font-bold text-navy-500">🛠️ سيناريو توليد تذاكر الصيانة الذاتية (Automated Ticket Creation):</h4>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              عندما يسجل حساس الحرارة في غرفة الخوادم الرئيسية بمبنى الإدارة ارتفاعاً يتجاوز 24°م، يرسل نظام BMS إشارة إنذار لـ GridFix. يقوم النظام تلقائياً وبشكل فوري بـ:
              <br />
              1. التحقق من جدول الأصول وتحديد مكيف التبريد المسؤول عن الغرفة.
              <br />
              2. إنشاء أمر عمل طارئ وتصنيفه كـ "أولوية قصوى - حرج".
              <br />
              3. تعيين المهمة تلقائياً لفني التكييف المناوب بالمبنى وإرسال تنبيه فوري لجواله.
            </p>
          </div>
        </div>
      </A4Page>

      {/* Page 22 */}
      <A4Page pageNum={22}>
        <SectionHeader icon={FileSpreadsheet} title="ستة عشر: خطة ترحيل وهجرة البيانات للصيانة" subtitle="خطة الـ 5 مراحل لترحيل قوائم الأصول من ملفات الإكسيل الورقية لنظام GridFix" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm text-xs">
            <h4 className="font-bold text-navy-500 mb-2">📊 جدول تفصيلي لمراحل ترحيل وهجرة البيانات الفنية:</h4>
            <DataTable columns={migrationCols} rows={migrationRows} />
          </div>

          <CallOutBox type="critical" title="ضوابط جودة ترحيل البيانات وتفادي التعثر">
            إن نجاح نظام CMMS مرهون بالكامل بدقة البيانات المدخلة في أول أسبوعين. تلتزم فرق الصيانة المركزية بعدم إدخال أي أصول عامة دون التأكد من مطابقة تصنيفاتها وهيكلها التابع للمبنى في شجرة الأصول وتفادي الأسماء المكررة لقطع الغيار.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 23 */}
      <A4Page pageNum={23}>
        <SectionHeader icon={Lock} title="سبعة عشر: الأمن السيبراني وسياسة النسخ الاحتياطي" subtitle="حماية الخصوصية ومعدلات توفر البيانات واستعادتها عند الكوارث" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-red-600 flex items-center gap-1 text-[11.5px]">
              <Lock className="w-4.5 h-4.5" />
              1. معايير الأمن السيبراني وحماية البيانات الحساسة
            </h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              تتبع منصة GridFix قواعد أمنية صارمة ومطابقة للمعايير الوطنية السعودية للأمن السيبراني لحفظ بيانات أصول سقالة وتفاصيل عقود الصيانة وصيانة المستشفيات:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-[11px] leading-relaxed">
              <li><strong>تشفير قنوات الاتصال:</strong> تشفير كامل لكافة البيانات المتبادلة بين الجوال والسيرفر باستخدام بروتوكول HTTPS (SSL/TLS 1.3).</li>
              <li><strong>التحكم بالصلاحيات القائم على الأدوار (RBAC):</strong> لا يمكن للفني الاطلاع على العقود المالية أو الميزانيات، وتقتصر صلاحيته على استلام وإغلاق البلاغات الخاصة بعهدتهم فقط.</li>
              <li><strong>تشفير كلمات المرور والبيانات الساكنة:</strong> تشفير كلمات المرور باستخدام خوارزميات التشفير المتقدمة (bcrypt) وقواعد بيانات مشفرة بالكامل.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-green-600 flex items-center gap-1 text-[11.5px]">
              <RefreshCw className="w-4.5 h-4.5" />
              2. سياسة النسخ الاحتياطي واستعادة البيانات عند الكوارث (DRP)
            </h4>
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="font-bold text-navy-500 block mb-1">⏰ دورة وجدولة النسخ الاحتياطي:</span>
                <p className="text-slate-600 leading-relaxed">
                  - **نسخ احتياطي محلي تلقائي:** يتم نسخه على سيرفر محلي احتياطي كل 6 ساعات.
                  <br />
                  - **نسخ احتياطي سحابي مشفر:** يتم رفعله لخوادم بعيدة آمنة يومياً عند الساعة 2 صباحاً.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="font-bold text-navy-500 block mb-1">📊 مؤشرات قياس الاستعادة (RTO / RPO):</span>
                <p className="text-slate-600 leading-relaxed">
                  - **مؤشر RPO (الحد الأقصى لفقد البيانات):** ساعة واحدة (لوجود سجل للعمليات).
                  <br />
                  - **مؤشر RTO (زمن استعادة الخدمة التام):** 4 ساعات كحد أقصى عند الانهيار الكامل للخوادم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 24 */}
      <A4Page pageNum={24}>
        <SectionHeader icon={ShieldAlert} title="ثمانية عشر: خطة الاستمرارية وحقيبة الطوارئ الورقية" subtitle="إجراءات العمل بدون إنترنت ومكونات الحقيبة الورقية للطوارئ التشغيلية" />
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-2">
            <h4 className="font-bold text-navy-500">📶 آلية التشغيل الذكي بدون إنترنت (Offline Mode) في GridFix:</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              يتعرض الفنيون في سقالة للانتقال لمواقع تحت الأرض (مستودعات الطابق السفلي، غرف المضخات العميقة) حيث تنقطع شبكة الجوال تماماً. تم تزويد تطبيق جوال GridFix بخاصية الحفظ المؤقت المحتوي على البنية التالية:
              <br />
              - **تخزين محلي على الجوال (IndexedDB/SQLite):** يتم تحميل أوامر العمل المخصصة للفني مسبقاً وتخزينها، وله صلاحية تغيير حالتها وكتابة الملاحظات وسحب الباركود محلياً.
              <br />
              - **المزامنة التلقائية (Background Sync):** بمجرد خروج الفني من منطقة الانقطاع واتصاله بشبكة الإنترنت، يقوم التطبيق بمزامنة البيانات تلقائياً ورفع التحديثات للخوادم دون تدخل الفني.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm text-xs">
            <h4 className="font-bold text-red-600 mb-2 flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" />
              مكونات وكميات الحقيبة الورقية للطوارئ الكبرى (BCP Kit):
            </h4>
            <p className="text-slate-600 text-[11px] mb-2">
              في حالة حدوث انقطاع طويل وتام للتيار الكهربائي أو الخدمة السحابية العامة (الكوارث)، يتم تفعيل حقيبة الطوارئ الورقية فوراً بالمكتب الفني لضمان استمرار صيانة المستشفيات والمراكز الحيوية:
            </p>
            <DataTable columns={kitCols} rows={kitRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 25 */}
      <A4Page pageNum={25}>
        <SectionHeader icon={CheckCircle} title="تسعة عشر: التوصية النهائية وقرار اعتماد النظام والشراكة" subtitle="التوصيات التنفيذية والخطوات المطلوبة والاعتماد المالي والإداري" />
        
        <div className="space-y-4">
          <CallOutBox type="goal" title="التوصية الفنية النهائية للاعتماد">
            <p className="text-xs leading-relaxed text-slate-800 font-medium">
              <strong>بناءً على نتائج هذه الدراسة الفنية والمالية، نوصي وبشدة باعتماد تطوير منصة GridFix وتملكها داخلياً لصالح مجموعة مؤسسات سقالة، مع التوقيع على (النموذج الثاني: ترخيص البرمجيات والـ SLA) للأسباب الجوهرية التالية:</strong>
              <br /><br />
              ١. <strong>توفير مالي استثنائي:</strong> توفير هدر مالي يقدر بـ <strong>٣٦٦,٠٠٠ إلى ٥٨٧,٠٠٠ ريال</strong> في ٥ سنوات، تذهب حالياً لشركات برمجيات خارجية بدون ملكية.
              <br />
              ٢. <strong>ملكية كاملة ومستدامة:</strong> تملك المجموعة للكود والبيانات الفنية بشكل مستقل، وحظر التوقف الفجائي للنظام في حال تغير سياسات المورد الخارجي.
              <br />
              ٣. <strong>تخصيص فني مطلق ومرونة غير محدودة:</strong> إدماج كافة ميزات منصة GridFix الشاملة (مركز معلومات الأصول Asset 360، التنبيهات اللحظية WebSockets، المزامنة الذكية بدون إنترنت Offline Mode، ومقاييس الجدوى الاقتصادية التراكمية الفعالة) بما يطابق تماماً هيكل وعمليات مجموعة سقالة اليومية.
            </p>
          </CallOutBox>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-xs space-y-2">
            <h4 className="font-bold text-[#1e3a5f]">📝 الخطوات الفورية المطلوبة للبدء:</h4>
            <ol className="list-decimal list-inside text-slate-600 space-y-1 text-[11px]">
              <li>إقرار الإدارة العليا نموذج التعاون المالي المختار (Licensing & SLA) للبدء المالي.</li>
              <li>تفويض المكتب الفني لجمع ملفات الإكسيل وبدء المرحلة الأولى من ترحيل البيانات.</li>
              <li>تخصيص الميزانية المبدئية (35,000 ريال) لبدء تهيئة الخوادم وتعديل واجهات النظام.</li>
            </ol>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-[10px] space-y-3">
            <div className="grid grid-cols-3 gap-4 text-center border-b border-slate-200 pb-3 font-semibold text-slate-700">
              <div>
                <span>إعداد مهندس المشروع</span>
                <br />
                <span className="text-slate-500 font-normal">م. وائل عبد الجليل</span>
                <br />
                <span className="text-[9px] text-slate-400 font-normal">التوقيع: ______________</span>
              </div>
              <div>
                <span>مدير إدارة الصيانة المركزية</span>
                <br />
                <span className="text-slate-500 font-normal">مجموعة مؤسسات سقالة</span>
                <br />
                <span className="text-[9px] text-slate-400 font-normal">التوقيع: ______________</span>
              </div>
              <div>
                <span>الاعتماد والموافقة المالية</span>
                <br />
                <span className="text-slate-500 font-normal">الإدارة التنفيذية العليا</span>
                <br />
                <span className="text-[9px] text-slate-400 font-normal">التوقيع: ______________</span>
              </div>
            </div>
            <div className="flex justify-between text-slate-400 text-[9px]">
              <span>تاريخ التوثيق: ٣٠ مايو ٢٠٢٦م</span>
              <span>الوثيقة الفنية: دراسة اختيار نظام CMMS المعتمدة</span>
              <span>مجموعة مؤسسات سقالة</span>
            </div>
          </div>
        </div>
      </A4Page>

      <PrintControlBar />
    </div>
  );
}

