import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DataSecurity() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content Area */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h2 className="text-5xl lg:text-[64px] font-bold text-[#212529] leading-tight z-10">
            100%{" "}
            <span className="relative inline-block whitespace-nowrap">
              your data
              {/* Brush Stroke Underline */}
              <div className="absolute left-0 -bottom-1 w-full h-6 -z-10">
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
            The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
          
          <div>
            <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition mt-4 shadow-sm">
              Read more <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Illustration Area */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] z-10">
          <Image
            src="/images/Element.png"
            alt="Data security and encryption diagram"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}