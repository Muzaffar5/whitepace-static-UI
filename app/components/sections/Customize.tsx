import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Customize() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Illustration Area */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] z-10 order-2 lg:order-1">
          <Image
            src="/images/06.jpg"
            alt="People customizing an app interface"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col gap-6 max-w-xl order-1 lg:order-2">
          <h2 className="text-5xl lg:text-[64px] font-bold text-[#212529] leading-tight z-10">
            Customise it to <br />
            <span className="relative inline-block whitespace-nowrap">
              your needs
              {/* Brush Stroke Underline */}
              <div className="absolute left-0 -bottom-1 w-120 h-12 -z-28 ">
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
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          
          <div>
            <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition mt-4 shadow-sm">
              Let&apos;s Go <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}