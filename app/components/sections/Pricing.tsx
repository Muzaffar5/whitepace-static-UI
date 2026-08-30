import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-5xl lg:text-[64px] font-bold text-[#212529] leading-tight mb-6 z-10">
          Choose{" "}
          <span className="relative inline-block whitespace-nowrap">
            Your Plan
            <div className="absolute left-0 -bottom-1 w-110 h-12 -z-28">
              <Image 
                src="/images/Element03.png" 
                alt="Text highlight" 
                fill
                className="object-contain"
              />
            </div>
          </span>
        </h2>
        <p className="text-lg text-[#212529] leading-relaxed">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        
        {/* Free Plan */}
        <div className="bg-white border border-[#FFE492] rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-[#212529] mb-4">Free</h3>
            <div className="text-4xl font-bold text-[#212529] mb-4">$0</div>
            <p className="text-[#212529] font-medium">Capture ideas and find them quickly</p>
          </div>
          <ul className="flex flex-col gap-4 text-[#212529]">
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Sync unlimited devices</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> 10 GB monthly uploads</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> 200 MB max. note size</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Customize Home dashboard and access extra widgets</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Connect primary Google Calendar account</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="w-fit mt-4 border border-[#FFE492] text-[#212529] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-50 transition">
            Get Started
          </button>
        </div>

        {/* Personal Plan (Highlighted) */}
        <div className="bg-[#043873] border border-[#043873] rounded-2xl p-8 lg:p-14 shadow-xl flex flex-col gap-6 text-white transform md:-translate-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Personal</h3>
            <div className="text-4xl font-bold text-[#FFE492] mb-4">$11.99</div>
            <p className="font-medium">Keep home and family on track</p>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /> Sync unlimited devices</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /> 10 GB monthly uploads</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /> 200 MB max. note size</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /> Customize Home dashboard and access extra widgets</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /> Connect primary Google Calendar account</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /> Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="w-fit mt-4 bg-[#4F9CF9] text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition">
            Get Started
          </button>
        </div>

        {/* Organization Plan */}
        <div className="bg-white border border-[#FFE492] rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-[#212529] mb-4">Organization</h3>
            <div className="text-4xl font-bold text-[#212529] mb-4">$49.99</div>
            <p className="text-[#212529] font-medium">Capture ideas and find them quickly</p>
          </div>
          <ul className="flex flex-col gap-4 text-[#212529]">
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Sync unlimited devices</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> 10 GB monthly uploads</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> 200 MB max. note size</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Customize Home dashboard and access extra widgets</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Connect primary Google Calendar account</li>
            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="w-fit mt-4 border border-[#FFE492] text-[#212529] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-50 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}