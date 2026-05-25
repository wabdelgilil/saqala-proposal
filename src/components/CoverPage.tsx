import { Building2 } from "lucide-react";

export default function CoverPage({ domain = "دراسة فنية &middot; النسخة الأولى" }: { domain?: string }) {
  return (
    <div className="page-break relative flex flex-col items-center justify-center min-h-[277mm] bg-white rounded-none no-break cover-bleed">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-navy-500" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-navy-500/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/5" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-12 max-w-[500px]">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-navy-500 text-white mb-8 shadow-lg">
          <Building2 size={40} />
        </div>

        <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4">
          دراسة فنية &middot; النسخة الأولى
        </span>

        <h1 className="text-3xl font-bold text-navy-500 leading-tight mb-3">
          دراسة تأسيس منظومة<br />
          <span className="text-accent">الصيانة المركزية</span>
        </h1>

        <p className="text-sm text-slate-500 leading-relaxed mb-2">
          مجموعة مؤسسات سقالة
        </p>

        <div className="w-16 h-0.5 bg-accent/60 my-6" />

        <p className="text-xs text-slate-400 leading-relaxed max-w-[360px]">
          دراسة شاملة لتوحيد إدارة الصيانة في جميع مباني ومرافق المجموعة
          تحت منظومة تشغيل مركزية مدعومة بنظام CMMS رقمي
        </p>

        <div className="mt-10 pt-6 border-t border-navy-100 w-full">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { val: "١٠", label: "أقسام رئيسية" },
              { val: "٣", label: "طبقات تشغيلية" },
              { val: "١٢", label: "شهراً للتنفيذ" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold text-navy-500">{s.val}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 text-xs text-slate-500 font-medium">
        تمت الدراسة وإعدادها بواسطة: وائل عبد الجليل
      </div>
    </div>
  );
}
