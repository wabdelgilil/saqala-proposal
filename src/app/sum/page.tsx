"use client";

import { Building2, Target, Lightbulb, Users, ClipboardList, ShoppingCart, FileText, Activity, Shield, BarChart3, Monitor, BookOpen, Award, AlertTriangle, Key, Heart, Wrench } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CallOutBox from "@/components/CallOutBox";
import FlowChart from "@/components/FlowChart";
import DataTable from "@/components/DataTable";
import SequenceDiagram from "@/components/SequenceDiagram";
import A4Page from "@/components/A4Page";
import CoverPage from "@/components/CoverPage";

export default function SummaryPage() {
  // Data Definitions
  const overviewCols = [{ key: "item", label: "البند" }, { key: "val", label: "البيان" }];
  const overviewRows = [
    { item: "اسم المشروع", val: "إنشاء منظومة الصيانة المركزية لمجموعة مؤسسات سقالة" },
    { item: "المدة الزمنية", val: "12 شهراً — على 5 مراحل متتابعة" },
    { item: "التكلفة التقديرية", val: "225,000 - 340,000 ريال (تطوير داخلي)" },
    { item: "التوفير السنوي المتوقع", val: "384,000 - 668,000 ريال" },
    { item: "فترة استرداد الاستثمار", val: "6 - 12 شهراً" },
    { item: "عدد الأقسام", val: "10 أقسام تغطي جميع جوانب التشغيل والصيانة والسلامة" },
  ];

  const reasonsCols = [
    { key: "n", label: "#" },
    { key: "prob", label: "المشكلة" },
    { key: "effect", label: "الأثر المباشر" },
    { key: "long", label: "الأثر طويل المدى" }
  ];
  const reasonsRows = [
    { n: "1", prob: "كل موقع يدير صيانته بنفسه", effect: "ازدواجية في شراء قطع الغيار والمعدات", long: "هدر في الميزانية يقدر بـ 100,000 - 200,000 سنوياً" },
    { n: "2", prob: "لا توجد قاعدة بيانات مركزية للأصول", effect: "فقدان تاريخ الصيانة والأعطال", long: "قرارات خاطئة في الإصلاح والاستبدال" },
    { n: "3", prob: "الاعتماد على الاتصالات الورقية والشفهية", effect: "نسيان بلاغات، وتأخير في الاستجابة", long: "تكرار نفس الأعطال وتضخم وقت التوقف" },
    { n: "4", prob: "لا توجد صيانة وقائية مجدولة", effect: "أعطال مفاجئة وتوقف تشغيل بدون إنذار", long: "تكاليف إصلاح طارئة أعلى بنسبة 300%" },
    { n: "5", prob: "اعتماد كبير على مقاولين خارجيين", effect: "تكاليف مرتفعة وجودة غير مضمونة", long: "200,000 - 400,000 ريال تذهب لمقاولين سنوياً" },
  ];

  const solCols = [{ key: "n", label: "#" }, { key: "elem", label: "العنصر" }, { key: "abbr", label: "الوصف والهدف" }];
  const solRows = [
    { n: "1", elem: "المكتب الفني المركزي", abbr: "فريق هندسي موحد لإدارة التخطيط والمتابعة والدعم الفني" },
    { n: "2", elem: "توحيد فرق الصيانة", abbr: "فريق فني مركزي مرن يتم توزيعه حسب الاحتياج الجغرافي والمهني" },
    { n: "3", elem: "إدارة مخازن قطع الغيار", abbr: "نظام مخازن مركزي وربطها بأوامر العمل مع تنبيهات الحد الأدنى" },
    { n: "4", elem: "إدارة العدد والأدوات", abbr: "تتبع العهد ورمز الاستجابة QR ونظام حجز المعدات المشتركة" },
    { n: "5", elem: "نظام CMMS الذكي", abbr: "منصة رقمية متكاملة (GridFix) ويب وجوال لإدارة الأصول والمهام" },
    { n: "6", elem: "مراحل التنفيذ والتغيير", abbr: "خطة تحول تدريجي على 5 مراحل لضمان استمرارية الأعمال وسلاستها" },
    { n: "7", elem: "الورشة المركزية للصيانة", abbr: "تجهيز مقر ورشة متخصص لتنفيذ الصيانة التخصصية وخفض العقود" },
    { n: "8", elem: "حوكمة السلامة (المنشآت)", abbr: "الامتثال الكامل لمتطلبات الدفاع المدني وتوحيد دليل السلامة" },
    { n: "9", elem: "سلامة الموظفين والوقاية", abbr: "برنامج حماية الموظفين والتدريب وخطط الاستجابة للطوارئ" },
    { n: "10", elem: "سلامة الفنيين والمقاولين", abbr: "تصاريح العمل الآمن، لوائح العقوبات وتوعية المقاولين" },
  ];

  const officeCols = [{ key: "comp", label: "المكون" }, { key: "qty", label: "العدد" }, { key: "tasks", label: "المهام الرئيسية" }];
  const officeRows = [
    { comp: "مهندس أول (قائد الفريق)", qty: "1", tasks: "إدارة العمليات، التخطيط، إعداد تقارير الإدارة وتحليل مؤشرات النجاح" },
    { comp: "مهندس تخطيط ومتابعة", qty: "1", tasks: "جدولة أوامر العمل، تنظيم خطط الصيانة الوقائية، ومتابعة قطع الغيار" },
    { comp: "مهندس دعم فني وميداني", qty: "1", tasks: "الزيارات الميدانية للمواقع، استلام الأعمال الحساسة، وتحليل أسباب الأعطال" },
    { comp: "موظف مشتريات تشغيلية", qty: "1-2", tasks: "تأمين الاحتياجات الفنية الطارئة للفرق وسرعة الصرف الفوري" },
  ];

  const raciCols = [
    { key: "task", label: "المهمة" },
    { key: "mgmt", label: "الإدارة العليا" },
    { key: "dir", label: "مدير الصيانة" },
    { key: "office", label: "المكتب الفني" },
    { key: "site", label: "مشرف الموقع" },
    { key: "tech", label: "الفني" }
  ];
  const raciRows = [
    { task: "اعتماد سياسة الصيانة", mgmt: "A", dir: "R", office: "C", site: "—", tech: "—" },
    { task: "حصر وتصنيف الأصول", mgmt: "—", dir: "A", office: "R", site: "R", tech: "C" },
    { task: "جداول الصيانة الوقائية", mgmt: "—", dir: "A", office: "R", site: "C", tech: "I" },
    { task: "تنفيذ الصيانة والإصلاح", mgmt: "—", dir: "—", office: "A", site: "R", tech: "R" },
    { task: "شراء قطع الغيار", mgmt: "—", dir: "C", office: "R", site: "I", tech: "—" },
    { task: "تقارير الأداء الشهرية", mgmt: "I", dir: "A", office: "R", site: "C", tech: "—" },
    { task: "تطبيق السلامة بالمنشآت", mgmt: "A", dir: "C", office: "C", site: "R", tech: "R" },
  ];

  const scorecardCols = [
    { key: "criteria", label: "المعيار" },
    { key: "weight", label: "الوزن" },
    { key: "ex", label: "5 ممتاز" },
    { key: "avg", label: "3 متوسط" },
    { key: "bad", label: "1 سيئ" }
  ];
  const scorecardRows = [
    { criteria: "جودة العمل المنجز", weight: "30%", ex: "مطابق كامل للمواصفات", avg: "انحرافات ملحوظة", bad: "أعمال معادة ومرفوضة" },
    { criteria: "الالتزام بالمواعيد", weight: "25%", ex: "+95% التزام", avg: "70-84% التزام", bad: "أقل من 50% التزام" },
    { criteria: "التكلفة والميزانية", weight: "20%", ex: "مطابق للمقايسة", avg: "+10% زيادة", bad: "+20% فأكثر زيادة" },
    { criteria: "الأمن والسلامة", weight: "15%", ex: "صفر مخالفات", avg: "مخالفتان بسيطتان", bad: "4 مخالفات أو خطيرة" },
    { criteria: "الاستجابة والتواصل", weight: "10%", ex: "فوري وتفاعلي", avg: "خلال يوم كامل", bad: "لا يستجيب" },
  ];

  const distCols = [{ key: "criteria", label: "معيار التوزيع" }, { key: "mechanism", label: "الآلية والهدف" }];
  const distRows = [
    { criteria: "نوع العطل والتخصص", mechanism: "توزيع الفني المتخصص (كهرباء، تكييف، سباكة، ميكانيكا) لضمان جودة الأداء" },
    { criteria: "أولوية البلاغ", mechanism: "تحديد سرعة الاستجابة (طارئ خلال 30 دقيقة — عالي خلال ساعتين — عادي خلال اليوم)" },
    { criteria: "الموقع الجغرافي", mechanism: "اختيار أقرب فني متاح لموقع البلاغ لتقليل زمن الحركة والانتقال" },
    { criteria: "مستوى الخبرة المطلوبة", mechanism: "مواءمة خبرة الفني مع مدى تعقيد العطل (فني خبير للأعطال المعقدة)" },
  ];

  const slaCols = [
    { key: "priority", label: "الأولوية" },
    { key: "resp", label: "زمن الاستجابة" },
    { key: "fix", label: "زمن الإنجاز" },
    { key: "trigger", label: "مسار التصعيد" }
  ];
  const slaRows = [
    { priority: "🔴 طارئ", resp: "أقل من 30 دقيقة", fix: "أقل من 4 ساعات", trigger: "مشرف الموقع ← مهندس المكتب الفني ← مدير الصيانة" },
    { priority: "🟡 عالي", resp: "أقل من ساعتين", fix: "أقل من 24 ساعة", trigger: "مشرف الموقع ← مهندس المكتب الفني" },
    { priority: "🟢 عادي", resp: "خلال يوم العمل", fix: "أقل من 3 أيام", trigger: "مهندس المكتب الفني" },
    { priority: "🔵 مجدول", resp: "حسب الجدول المخطط", fix: "حسب الجدول المخطط", trigger: "مدير الصيانة" },
  ];

  const reqCols = [{ key: "type", label: "نوع الطلب" }, { key: "desc", label: "وصف وحالة الاستخدام" }, { key: "path", label: "مسار الاعتماد والطلب" }];
  const reqRows = [
    { type: "إصلاح عطل", desc: "أعطال تشغيلية (مكيف لا يبرد، تسرب مياه، لوحة إنارة)", path: "مباشر إلى مدير الصيانة للتحويل الفوري للفني" },
    { type: "إضافة أو تركيب جديد", desc: "أعمال تحسينية (تركيب شاشة، تمديد خطوط إضافية)", path: "موافقة المدير المباشر للموقع أولاً ثم مدير الصيانة" },
    { type: "تلف/نقص موجودات", desc: "أصول أثاث أو مستلزمات مكسورة", path: "مدير الموقع مباشرة إلى إدارة المشتريات للتوفير" },
  ];

  const abcCols = [
    { key: "class", label: "الفئة" },
    { key: "partPct", label: "نسبة القطع" },
    { key: "valPct", label: "نسبة القيمة" },
    { key: "ex", label: "أمثلة" },
    { key: "strategy", label: "إستراتيجية التخزين" }
  ];
  const abcRows = [
    { class: "A", partPct: "10%", valPct: "70%", ex: "كروت تحكم PLC، ضواغط تكييف رئيسية", strategy: "رقابة مشددة، فحص شهري، وشراء فوري عند الاستهلاك" },
    { class: "B", partPct: "20%", valPct: "20%", ex: "مضخات مياه متوسطة، صمامات، سيور", strategy: "رقابة متوسطة، مراجعة ربع سنوية، حد أمان مخزني" },
    { class: "C", partPct: "70%", valPct: "10%", ex: "مسامير، فلاتر هواء، لمبات، أختام", strategy: "شراء كميات وفيرة، طلب بالجملة، مراجعة سنوية" },
  ];

  const storeCols = [{ key: "type", label: "نوع المخزن" }, { key: "content", label: "المحتوى المخزني" }, { key: "mgmt", label: "آلية الإشراف والإدارة" }];
  const storeRows = [
    { type: "المخزن المركزي", content: "قطع الفئة A و B والقطع الاستراتيجية مرتفعة القيمة", mgmt: "يدار مركزياً بواسطة المكتب الفني والمشتريات" },
    { type: "المخازن الفرعية", content: "قطع الفئة C والمواد الاستهلاكية سريعة الحركة اليومية", mgmt: "تخدم المواقع مباشرة وتتغذى بانتظام من المخزن المركزي" },
  ];

  const toolCols = [{ key: "cat", label: "تصنيف الأدوات" }, { key: "ex", label: "أمثلة ومعدات" }, { key: "mechanism", label: "آلية التتبع والإدارة" }];
  const toolRows = [
    { cat: "أدوات وعدد يومية", ex: "مفكات، دريل كهربائي، صاروخ قطع، أجهزة قياس بسيطة", mechanism: "تسجل كعهدة فنية شخصية مسلسلة بملصق باركود" },
    { cat: "أجهزة فحص تخصصية", ex: "كاميرات فحص حراري، كواشف تسرب مياه وغاز، محلل طاقة", mechanism: "عهدة مشتركة بالمكتب الفني تحجز مؤقتاً لكل مهمة" },
    { cat: "معدات تشغيل مشتركة", ex: "مولدات كهرباء متنقلة، ضواغط هواء كبرى، روافع جسرية", mechanism: "جدولة حجز إلكترونية عبر CMMS لضمان التوافر ومنع التعارض" },
  ];

  const cmmsCompareCols = [{ key: "area", label: "مجال المقارنة" }, { key: "ready", label: "الأنظمة الجاهزة بالسوق" }, { key: "custom", label: "✅ نظام GridFix (تطوير داخلي)" }];
  const cmmsCompareRows = [
    { area: "التكلفة السنوية", ready: "60,000 - 120,000 ريال (تتزايد مع المستخدمين)", custom: "6,000 - 12,000 ريال (تكلفة الاستضافة السحابية فقط)" },
    { area: "التكلفة في 5 سنوات", ready: "420,000 - 690,000 ريال (بدون أصول مملوكة)", custom: "54,000 - 103,000 ريال (شامل التطوير والاستضافة)" },
    { area: "ملكية الكود والنظام", ready: "استئجار مؤقت (يتوقف النظام فور توقف الدفع)", custom: "تملك كامل وحصري للمجموعة (أصل استثماري فني)" },
    { area: "التخصيص والتعريب", ready: "محدود وواجهات مترجمة آلياً ومقيدة", custom: "كامل وتفصيلي ومصمم بالكامل لعمليات سقالة" },
    { area: "طلبات الموظفين", ready: "تحتاج رخص إضافية مكلفة (Add-on)", custom: "مفتوحة ومدمجة مجاناً لجميع موظفي المجموعة" },
    { area: "دعم العمل دون اتصال", ready: "محدود ويحتاج باقات مرتفعة التكلفة", custom: "مدمج تلقائياً (Offline Mode) للفنيين عبر الجوال" },
    { area: "التكامل مع ERP و HR", ready: "معقد ومكلف ويحتاج تراخيص ربط إضافية", custom: "مرن ومفتوح بالكامل عبر واجهات برمجية مخصصة" },
    { area: "إمكانية بيعه تجارياً", ready: "غير ممكنة على الإطلاق", custom: "ممكنة لشركات صيانة أخرى لإنشاء مصدر دخل جديد" },
  ];

  const marketCompareCols = [
    { key: "criteria", label: "المعيار" },
    { key: "maximo", label: "Maximo (IBM)" },
    { key: "fiix", label: "Fiix" },
    { key: "upkeep", label: "UpKeep" },
    { key: "gridfix", label: "GridFix ✅" }
  ];
  const marketCompareRows = [
    { criteria: "التكلفة السنوية التقديرية", maximo: "+150,000 ريال", fiix: "80,000 - 120,000", upkeep: "60,000 - 100,000", gridfix: "6,000 - 12,000" },
    { criteria: "ملكية الكود والنظام", maximo: "إيجار رخص", fiix: "إيجار رخص", upkeep: "إيجار رخص", gridfix: "تملك كامل" },
    { criteria: "دعم واجهة الموظفين مجاناً", maximo: "add-on", fiix: "add-on", upkeep: "محدود", gridfix: "مدمج تلقائياً" },
    { criteria: "التكلفة الإجمالية في 5 سنوات", maximo: "+750,000 ريال", fiix: "400,000 - 600,000", upkeep: "300,000 - 500,000", gridfix: "54,000 - 103,000" },
  ];

  const integrationCols = [{ key: "sys", label: "النظام الحالي" }, { key: "point", label: "نوع ونقطة التكامل" }, { key: "benefit", label: "الفائدة المباشرة" }];
  const integrationRows = [
    { sys: "النظام المحاسبي (ERP)", point: "ربط فواتير قطع الغيار وتكاليف الصيانة بالأصول", benefit: "دقة التكاليف التشغيلية وإغلاق الدورة المستندية مالياً" },
    { sys: "شؤون الموظفين (HR)", point: "مزامنة بيانات الفنيين والإجازات والدوام الفعلي", benefit: "التحديث التلقائي لمهام الفنيين المتاحين للعمل ميدانياً" },
    { sys: "أنظمة إدارة المباني (BMS)", point: "استيراد إنذارات الأعطال والحرارة آلياً لنظام الصيانة", benefit: "التحول للصيانة الاستباقية التلقائية قبل شكوى المستخدم" },
    { sys: "البريد الإلكتروني والاتصال", point: "إشعارات بحالة الطلبات وتنبيهات المهام المتأخرة", benefit: "تواصل سريع وشفاف وموثق لكافة أطراف المنظومة" },
  ];

  const phasesCols = [{ key: "phase", label: "المرحلة" }, { key: "desc", label: "الأنشطة الرئيسية" }, { key: "out", label: "المخرجات" }];
  const phasesRows = [
    { phase: "1. تأسيس الفريق (شهر 1-2)", desc: "توظيف الكادر الهندسي وتجهيز مقر المكتب الفني والبنية التحتية", out: "جاهزية الفريق التخطيطي وتدشين السيرفرات" },
    { phase: "2. تطوير CMMS (شهر 2-4)", desc: "برمجة نظام GridFix (الأصول، أوامر العمل، البلاغات، تطبيق الجوال)", out: "إصدار أول تشغيلي UAT معتمد ومطابق للمواصفات" },
    { phase: "3. حصر الأصول (شهر 3-6)", desc: "حصر شامل لجميع أصول مباني ومرافق المجموعة وتركيب ملصقات QR", out: "قاعدة بيانات موحدة ومعرفة كاملة بالأصول وتواريخها" },
    { phase: "4. تشغيل تجريبي (شهر 5-7)", desc: "تطبيق المنظومة والنظام على موقع تجريبي واحد وقياس الصعوبات", out: "نموذج تشغيلي فني ناجح معالجة فيه كافة العقبات" },
    { phase: "5. تشغيل كامل (شهر 7-12)", desc: "تعميم المنظومة على كافة المنشآت، وتدريب الموظفين، والمراقبة الكلية", out: "إغلاق القنوات اليدوية بالكامل وتشغيل مركزي رقمي بنسبة 100%" },
  ];

  const govCols = [{ key: "member", label: "العضو" }, { key: "role", label: "الدور في المشروع" }, { key: "resp", label: "المسؤولية التنفيذية" }];
  const govRows = [
    { member: "ممثل الإدارة العليا", role: "رئيس اللجنة التوجيهية", resp: "الموافقة على السياسات وتوفير الميزانية واعتماد التقارير الكبرى" },
    { member: "مدير الصيانة المركزية", role: "مقرر اللجنة ومدير المشروع", resp: "متابعة التنفيذ اليومي، حل العقبات التشغيلية ورفع تقارير التقدم" },
    { member: "ممثل المواقع والفروع", role: "عضو استشاري تشغيلي", resp: "نقل متطلبات الفروع والتأكد من ملاءمة إجراءات العمل ميدانياً" },
  ];

  const budgetCols = [{ key: "phase", label: "المرحلة التشغيلية للمشروع" }, { key: "duration", label: "المدة" }, { key: "cost", label: "التكلفة التقديرية" }];
  const budgetRows = [
    { phase: "المرحلة الأولى: تأسيس الفريق والمهندسين", duration: "شهر 1 - 2", cost: "45,000 - 55,000 ريال" },
    { phase: "المرحلة الثانية: تطوير نظام GridFix داخلياً", duration: "شهر 2 - 4", cost: "30,000 - 60,000 ريال" },
    { phase: "المرحلة الثالثة: حصر الأصول ميدانياً وتركيب QR", duration: "شهر 3 - 6", cost: "25,000 - 40,000 ريال" },
    { phase: "المرحلة الرابعة: التشغيل التجريبي بالفروع", duration: "شهر 5 - 7", cost: "10,000 - 20,000 ريال" },
    { phase: "المرحلة الخامسة: تعميم التشغيل والتدريب والمراقبة", duration: "شهر 7 - 12", cost: "115,000 - 165,000 ريال" },
  ];

  const savingsCols = [
    { key: "src", label: "المصدر" },
    { key: "current", label: "التكلفة الحالية (سنوياً)" },
    { key: "new", label: "بعد المنظومة" },
    { key: "savings", label: "التوفير السنوي" }
  ];
  const savingsRows = [
    { src: "عقود مقاولي الصيانة الخارجية", current: "300,000 - 500,000 ريال", new: "100,000 - 200,000 ريال", savings: "200,000 - 300,000' ريال" },
    { src: "هدر شراء قطع غيار مكرر وسوء تخزين", current: "100,000 - 200,000 ريال", new: "60,000 - 120,000 ريال", savings: "40,000 - 80,000 ريال" },
    { src: "تراخيص أنظمة تشغيل متفرقة", current: "30,000 - 60,000' ريال", new: "6,000 - 12,000 ريال", savings: "24,000 - 48,000' ريال" },
    { src: "خسائر تعطل التشغيل وأعطال طارئة", current: "200,000 - 400,000' ريال", new: "80,000 - 160,000' ريال", savings: "120,000 - 240,000' ريال" },
    { src: "إجمالي المصروفات المالية والتوفير", current: "630,000 - 1,160,000' ريال", new: "246,000 - 492,000' ريال", savings: "✅ 384,000 - 668,000 ريال" },
  ];

  const resultsCols = [
    { key: "n", label: "#" },
    { key: "kpi", label: "مؤشر الأداء" },
    { key: "old", label: "الوضع الحالي" },
    { key: "target", label: "الهدف بعد المشروع" }
  ];
  const resultsRows = [
    { n: "1", kpi: "وقت الاستجابة للبلاغات الطارئة", old: "غير محدد (ساعات وأيام أحياناً)", target: "أقل من 30 دقيقة" },
    { n: "2", kpi: "نسبة تنفيذ خطة الصيانة الوقائية", old: "أقل من 20%", target: "أكثر من 90%" },
    { n: "3", kpi: "تكاليف المقاولين الخارجيين", old: "300,000 - 500,000 ريال سنوياً", target: "انخفاض بنسبة 50%" },
    { n: "4", kpi: "دقة توفر قطع الغيار وقت الحاجة", old: "أقل من 50%", target: "أكثر من 95%" },
    { n: "5", kpi: "الأعطال المتكررة لنفس الأصل", old: "مرتفعة جداً بدون سجل تتبع", target: "انخفاض بنسبة 50%" },
    { n: "6", kpi: "نسبة رقمنة طلبات الصيانة وتوثيقها", old: "أقل من 10% (ورقي وهاتفي)", target: "100% توثيق رقمي كامل" },
    { n: "7", kpi: "معدل رضا الموظفين والمستخدمين", old: "غير مقاس ومبهم", target: "أكثر من 80% رضا معتمد" },
  ];

  return (
    <div className="w-full bg-[#f1f5f9] min-h-screen relative print:bg-white print:w-auto py-2 print:p-0 print:m-0 animate-fadeIn">
      {/* Cover Page */}
      <CoverPage domain="الملخص التنفيذي · النسخة الأولى" />

      {/* Page 1 */}
      <A4Page pageNum={1}>
        <SectionHeader icon={Building2} title="الملخص التنفيذي لمشروع منظومة الصيانة المركزية" subtitle="نظرة عامة والوضع الحالي لمرافق مجموعة مؤسسات سقالة" />
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-sm">
            <h4 className="font-bold text-navy-500 mb-2">1. نظرة عامة على المشروع</h4>
            <p className="text-slate-700 leading-relaxed mb-4">
              يهدف المشروع إلى تأسيس مكتب فني مركزي لإدارة كافة عمليات التشغيل والصيانة في المجموعة، وتوحيد الموارد البشرية وتطبيق نظام CMMS رقمي (GridFix) لتحقيق أفضل كفاءة مالية وفنية.
            </p>
            <DataTable columns={overviewCols} rows={overviewRows} />
          </div>

          <CallOutBox type="critical" title="المشكلة — لماذا نحتاج هذا المشروع؟">
            <p className="text-xs text-slate-700 leading-relaxed">
              تعمل الصيانة حالياً في كل موقع بشكل منفصل تماماً، مما يترتب عليه تفاوت كبير في جودة العمل الميداني، غياب كامل للصيانة الوقائية، تضخم فواتير المقاولين الخارجيين، وتكرار الأعطال الحرجة التي تؤدي لتوقف خدمات حيوية.
            </p>
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 2 */}
      <A4Page pageNum={2}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">أثر تشتت عمليات الصيانة الحالية</h4>
            <FlowChart
              nodes={[
                { id: "مشاكل", label: "مشاكل الوضع الحالي", icon: "⚠️", color: "red" },
                { id: "مالي", label: "💰 مشاكل مالية", icon: "💸", color: "red" },
                { id: "تشغيلي", label: "🔧 مشاكل تشغيلية", icon: "⚙️", color: "red" },
                { id: "سلامة", label: "🛡️ مشاكل سلامة", icon: "🚨", color: "red" },
                { id: "م1", label: "هدر مالي سنوي نتيجة عقود المقاولين والشراء المتكرر", icon: "📉" },
                { id: "ت1", label: "تفاوت جودة الخدمة وتكرار تعطل الأصول الحيوية", icon: "🛠️" },
                { id: "س1", label: "غياب توحيد الإجراءات وتوثيق متطلبات الدفاع المدني", icon: "📝" },
              ]}
              edges={[
                { from: "مشاكل", to: "مالي" },
                { from: "مشاكل", to: "تشغيلي" },
                { from: "مشاكل", to: "سلامة" },
                { from: "مالي", to: "م1" },
                { from: "تشغيلي", to: "ت1" },
                { from: "سلامة", to: "س1" },
              ]}
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">الأسباب الجذرية والأثر التشغيلي التراكمي</h4>
            <DataTable columns={reasonsCols} rows={reasonsRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 3 */}
      <A4Page pageNum={3}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Target} title="الحل المقترح — نظرة شاملة للمنظومة" subtitle="العناصر العشرة الأساسية لبناء الصيانة المركزية" />
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <DataTable columns={solCols} rows={solRows} />
          </div>

          <CallOutBox type="goal" title="رؤية المنظومة المركزية">
            تحويل عمليات الصيانة والأصول بالمجموعة بالكامل من صيانة رد الفعل العشوائية (ورقية وهاتفية) إلى صيانة وقائية رقمية ذكية تعتمد على التخطيط العلمي والدراسة الفنية الدقيقة.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 4 */}
      <A4Page pageNum={4}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Users} title="1. المكتب الفني المركزي" subtitle="الهيكل الإداري ومصفوفة الصلاحيات والمراقبة" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">هيكل الكادر الهندسي المقترح (Lean Structure)</h4>
            <DataTable columns={officeCols} rows={officeRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مصفوفة المسؤوليات (RACI Matrix) لمهمات الصيانة</h4>
            <DataTable columns={raciCols} rows={raciRows} />
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 mt-2 text-[10px] text-slate-500 font-medium">
              R: منفذ العمل المباشر | A: المسؤول النهائي والمحاسب | C: جهة الاستشارة الفنية | I: العلم بالنتيجة والإجراء
            </div>
          </div>
        </div>
      </A4Page>

      {/* Page 5 */}
      <A4Page pageNum={5}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">بطاقة الأداء الشهري للمقاولين (Scorecard)</h4>
            <DataTable columns={scorecardCols} rows={scorecardRows} />
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 mt-2 text-[10px] font-mono text-center" dir="ltr">
              Score = (Quality × 30%) + (Time × 25%) + (Cost × 20%) + (Safety × 15%) + (Response × 10%)
            </div>
          </div>

          <CallOutBox type="tip" title="خطة تعاقب الكفاءات وتأمين استمرارية العمل">
            لتفادي مخاطر غياب المهندسين أو الكوادر الفنية الاستراتيجية، يتم إقرار خطة تظليل وتأهيل مستمر لمدة 3 أشهر (مهندس أول ← مهندس التخطيط، ومهندس تخطيط ← مهندس الدعم الفني، ومهندس الدعم ← فني أول متميز).
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 6 */}
      <A4Page pageNum={6}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ClipboardList} title="2. توحيد فرق الصيانة الميدانية" subtitle="إطار التشغيل وتوزيع المهام الذكي ومستوى الخدمة SLA" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">آلية توزيع المهام المركزية</h4>
            <DataTable columns={distCols} rows={distRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">اتفاقية مستوى الخدمة المعتمدة (SLA Framework)</h4>
            <DataTable columns={slaCols} rows={slaRows} />
          </div>

          <CallOutBox type="tip" title="إعادة تقييم الموارد البشرية (بعد سنة)">
            إن استغلال الموارد الفنية الحالية هو خطة تشغيلية أولية. بعد مرور سنة على الأقل من التشغيل الكامل لنظام الصيانة المركزية واستقرار العمليات، سيتم إجراء إعادة تقييم شاملة لمستوى الخدمة والأداء الفعلي لإضافة أو إعادة توزيع الكوادر البشرية حسب الحاجة لضمان كفاءة التغطية.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 7 */}
      <A4Page pageNum={7}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">بنية ومسارات طلبات الصيانة</h4>
            <DataTable columns={reqCols} rows={reqRows} />
          </div>

          <SectionHeader icon={ShoppingCart} title="3. إدارة المخازن وقطع الغيار" subtitle="تصنيف المخزون وهيكلية التوزيع والربط المالي" />

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">تصنيف ABC لمخازن قطع الغيار</h4>
            <DataTable columns={abcCols} rows={abcRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 8 */}
      <A4Page pageNum={8}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">هيكل المخازن وآلية العمل المشتركة</h4>
            <DataTable columns={storeCols} rows={storeRows} />
          </div>

          <SectionHeader icon={Wrench} title="4. العدد والأدوات الفنية" subtitle="تسجيل العهد وحجز المعدات التخصصية بالباركود" />

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">تصنيف العدد والأدوات الفنية وعلاقتها بالفني</h4>
            <DataTable columns={toolCols} rows={toolRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 9 */}
      <A4Page pageNum={9}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Monitor} title="5. نظام CMMS — منصة GridFix الرقمية" subtitle="أتمتة دورة البلاغات وسيناريوهات العمل بدون إنترنت" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">سيناريو بلاغ صيانة نموذجي (من البلاغ للإغلاق)</h4>
            <SequenceDiagram
              participants={[
                { id: "موظف", label: "الموظف", icon: "👤", color: "slate" },
                { id: "نظام", label: "GridFix CMMS", icon: "💻", color: "blue" },
                { id: "مدير", label: "مدير الصيانة", icon: "👨‍💼", color: "green" },
                { id: "فني", label: "الفني الميداني", icon: "🔧", color: "amber" },
              ]}
              steps={[
                { from: "موظف", to: "نظام", label: "يرفع بلاغ عطل" },
                { from: "نظام", to: "مدير", label: "تنبيه بطلب صيانة جديد" },
                { from: "مدير", to: "نظام", label: "توزيع المهمة للفني" },
                { from: "نظام", to: "فني", label: "إشعار بالمهمة وموقعها" },
                { from: "فني", to: "نظام", label: "تنفيذ وإصلاح وإغلاق الطلب" },
              ]}
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">سيناريو طلبات الإضافة والتطوير (غير الأعطال)</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "موظف", label: "رفع طلب إضافة", icon: "📝", color: "navy" },
                { id: "نوع", label: "هل هو عطل أم إضافة؟", icon: "❓", color: "amber" },
                { id: "مباشر", label: "إصلاح عطل: مباشر للصيانة", icon: "🔧", color: "green" },
                { id: "اعتماد", label: "إضافة: موافقة المدير المباشر", icon: "👨‍💼", color: "amber" },
                { id: "تنفيذ", label: "مدير الصيانة: جدولة وتنفيذ", icon: "✅", color: "green" },
              ]}
              edges={[
                { from: "موظف", to: "نوع" },
                { from: "نوع", to: "مباشر", label: "إصلاح" },
                { from: "نوع", to: "اعتماد", label: "إضافة" },
                { from: "اعتماد", to: "تنفيذ", label: "مقبول" },
                { from: "مباشر", to: "تنفيذ" },
              ]}
            />
          </div>
        </div>
      </A4Page>

      {/* Page 10 */}
      <A4Page pageNum={10}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مقارنة نظام GridFix المقترح مع الأنظمة الجاهزة بالسوق</h4>
            <DataTable columns={cmmsCompareCols} rows={cmmsCompareRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 11 */}
      <A4Page pageNum={11}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">مقارنة GridFix مع كبرى أنظمة السوق العالمية</h4>
            <DataTable columns={marketCompareCols} rows={marketCompareRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">خطط التكامل الرقمي والربط مع أنظمة المجموعة</h4>
            <DataTable columns={integrationCols} rows={integrationRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 12 */}
      <A4Page pageNum={12}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Activity} title="6. الجدول الزمني ومراحل التنفيذ" subtitle="المراحل الخمس للتحول التدريجي إلى الصيانة المركزية" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">التسلسل الزمني لتنفيذ المشروع</h4>
            <FlowChart
              dir="LR"
              nodes={[
                { id: "m1", label: "المرحلة 1: تأسيس الفريق", sub: "شهر 1-2", icon: "🏗️", color: "navy" },
                { id: "m2", label: "المرحلة 2: تطوير النظام", sub: "شهر 2-4", icon: "💻", color: "blue" },
                { id: "m3", label: "المرحلة 3: حصر الأصول", sub: "شهر 3-6", icon: "🔍", color: "green" },
                { id: "m4", label: "المرحلة 4: تشغيل تجريبي", sub: "شهر 5-7", icon: "🔄", color: "amber" },
                { id: "m5", label: "المرحلة 5: تشغيل كامل", sub: "شهر 7-12", icon: "🚀", color: "green" },
              ]}
              edges={[
                { from: "m1", to: "m2" },
                { from: "m2", to: "m3" },
                { from: "m3", to: "m4" },
                { from: "m4", to: "m5" },
              ]}
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <DataTable columns={phasesCols} rows={phasesRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 13 */}
      <A4Page pageNum={13}>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">هيكل حوكمة المشروع (اللجنة التوجيهية)</h4>
            <DataTable columns={govCols} rows={govRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">خطة إدارة التغيير والتدريب للفرق التشغيلية</h4>
            <p className="text-[10px] text-slate-600 mb-2">
              تعتمد الخطة على نموذج ADKAR التوعوي لتهيئة المواقع قبل الإطلاق واستيعاب الفنيين وتدريبهم المستمر لرفع الامتثال.
            </p>
          </div>

          <CallOutBox type="safety" title="معايير قبول وإغلاق المشروع النهائي">
            يعتبر المشروع منجزاً ومغلقاً عند مرور 30 يوماً متواصلة بدون أي انقطاعات حرجة، مع تسجيل 100% من الأصول بـ QR، وتجاوز استخدام الفنيين والموظفين للنظام نسبة 95%، واستخراج كافة مؤشرات الأداء والتقارير آلياً.
          </CallOutBox>
        </div>
      </A4Page>

      {/* Page 14 */}
      <A4Page pageNum={14}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={ShoppingCart} title="7. التكاليف والميزانية التقديرية" subtitle="ميزانية مراحل التنفيذ وحساب الجدوى والتوفير السنوي" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">تكاليف المشروع مقسمة على مراحل التنفيذ</h4>
            <DataTable columns={budgetCols} rows={budgetRows} />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">حاسبة التوفير السنوي المتوقع (مقارنة بالوضع التقليدي)</h4>
            <DataTable columns={savingsCols} rows={savingsRows} />
          </div>
        </div>
      </A4Page>

      {/* Page 15 */}
      <A4Page pageNum={15}>
        <div className="space-y-4 mt-4">
          <SectionHeader icon={Shield} title="8. الاستدامة والأمن والنتائج المتوقعة" subtitle="الأمن السيبراني، استمرارية الأعمال ومؤشرات قياس الأداء" />
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 mb-2">أهداف ومؤشرات النجاح الرقمية (Key Performance Indicators)</h4>
            <DataTable columns={resultsCols} rows={resultsRows} />
          </div>

          <CallOutBox type="critical" title="التوصية النهائية للاعتماد">
            <p className="text-xs leading-relaxed text-slate-800 font-medium">
              <strong>نوصي باعتماد مشروع الصيانة المركزية فوراً للأسباب التالية:</strong>
              <br />
              1. استرداد كامل الاستثمار (NPV = 391,000 ريال) خلال أول 6 إلى 12 شهراً فقط من التشغيل الكامل.
              <br />
              2. تحقيق توفير مالي سنوي يقدر بـ <strong>384,000 - 668,000 ريال</strong> تذهب حالياً هباءً لمقاولين ومشتريات غير منضبطة.
              <br />
              3. تملك المجموعة أصلاً فنيًا ورقميًا بالكامل (نظام GridFix) بدلاً من استئجار رخص خارجية وهدر 587,000 ريال خلال 5 سنوات.
            </p>
          </CallOutBox>
        </div>
      </A4Page>
    </div>
  );
}
