import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectManagement() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden flex items-center">
      {/* Left Background Concentric Circles */}
      <div className="absolute left-[-15%] md:left-[-5%] top-1/2 -translate-y-1/2 z-0 opacity-40 pointer-events-none">
        <Image
          src="/assets/bg-circles.png"
          alt="Decorative background"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content Area */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h2 className="text-5xl lg:text-[64px] font-bold text-[#212529] leading-tight z-10">
            Project <br />
            <span className="relative inline-block whitespace-nowrap">
              Management
              {/* Brush Stroke Underline */}
              <div className="absolute left-0 -bottom-1 w-130 h-12 -z-28">
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
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <div>
            <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition mt-4 shadow-sm">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Illustration Area */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] z-10">
          <Image
            src="/images/02.jpg"
            alt="Team collaborating on project management"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
