import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Extension() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#043873] flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content Area */}
        <div className="flex flex-col gap-6 max-w-xl text-white">
          <h2 className="text-5xl lg:text-[64px] font-bold leading-tight z-10">
            Use as{" "}
            <span className="relative inline-block whitespace-nowrap">
              Extension
              {/* Brush Stroke Underline */}
              <div className="absolute left-0 -bottom-1 w-90 h-12 -z-28 ">
                <Image 
                  src="/images/Element05.png" 
                  alt="Text highlight" 
                  fill
                  className="object-contain"
                />
              </div>
            </span>
          </h2>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          
          <div>
            <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition mt-4 shadow-sm">
              Let&apos;s Go <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Illustration Area */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] z-10">
          {/* Replace with your actual puzzle piece illustration asset */}
          <Image
            src="/images/05.png"
            alt="Team connecting puzzle pieces"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}