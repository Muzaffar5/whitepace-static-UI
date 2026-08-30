import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Integrations() {
  return (
    <section className="relative w-full bg-[#043873] py-24 overflow-hidden flex items-center justify-center">
      {/* Background Wavy Lines */}
      <div className="absolute inset-0 z-0 opacity-50 flex items-center justify-center">
        <Image
          src="/assets/Element02.png" 
          alt="Background wavy lines"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 md:px-12 lg:px-24">
        {/* Left Illustration */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px]">
          <Image
            src="/images/Apps.png" 
            alt="App integrations network"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 text-white max-w-xl">
          <h2 className="text-5xl lg:text-[64px] font-bold leading-tight">
            Work with Your Favorite Apps Using whitepace
          </h2>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          
          <div>
            <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition mt-4 shadow-sm">
              Read more <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}