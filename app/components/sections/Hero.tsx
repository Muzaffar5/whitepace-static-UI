import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#043873] overflow-hidden min-h-[600px] flex items-center pt-10 pb-20 px-6 md:px-12 lg:px-24">
      {/* Background Wavy Lines */}
      <div className="absolute inset-0 z-0 opacity-50 flex items-center justify-center">
        <Image
          src="/images/Element02.png"
          alt="Background graphic"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-white max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Get More Done with whitepace
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
            Project management software that enables your teams to collaborate, plan,
            analyze and manage everyday tasks
          </p>
          <div>
            <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition mt-4">
              Try Whitepace free <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative w-full h-[400px] lg:h-[500px]">
          {/* Replace 'hero-illustration.png' with your actual exported image */}
          <Image
            src="/images/01.svg"
            alt="Team collaborating on project management"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}