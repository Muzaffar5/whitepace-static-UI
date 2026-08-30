import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Everywhere() {
  return (
    <section className="relative w-full bg-[#043873] py-24 px-6 md:px-12 lg:px-24 mt-20 mb-12 flex items-center justify-center">
      {/* Left Background Pattern */}
      <div className="absolute left-0 top-0 h-full w-[40%] max-w-[500px] z-0 pointer-events-none">
        <Image
          src= '/images/Element04.png'
          alt="Concentric lines background"
          fill
          className="object-cover object-left"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-5xl lg:text-[48px] font-bold text-white leading-tight mb-6">
          Your work, everywhere{" "}
          <span className="relative inline-block whitespace-nowrap">
            you are
            {/* CSS approximation of the blue brush stroke */}
            <div className="absolute left-0 -bottom-3 w-50 h-12 -z-28">
                <Image
                  src="/images/Element05.png"
                  alt="Text highlight"                  
                  fill
                  className="object-contain"
                />
            </div>
            </span>
        </h2>
        
        <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
        
        <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition shadow-sm">
          Try Taskey <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right 3D Character Illustration */}
      <div className="hidden lg:block absolute bottom-[-50px] right-8 xl:right-[-110] z-20 w-[640px] h-[680%] pointer-events-none">
        <Image
          src="/images/07.png"
          alt="3D character using a tablet"
          fill
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}