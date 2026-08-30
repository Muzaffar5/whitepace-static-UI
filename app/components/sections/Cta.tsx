import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="w-full bg-[#043873] pt-32 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center text-white">
      <h2 className="text-5xl lg:text-[64px] font-bold leading-tight mb-6">
        Try Whitepace <br /> today
      </h2>
      <p className="text-lg text-gray-200 mb-10">
        Get started for free. <br />
        Add your whole team as your needs grow.
      </p>
      <button className="bg-[#4F9CF9] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition shadow-sm mb-10">
        Try Taskey free <ArrowRight className="w-5 h-5" />
      </button>
      <p className="text-xl mb-10">On a big team? Contact sales</p>
      {/* OS Icons */}
      <div className="flex items-center gap-8">
        <Image
          src="/images/Apple01.svg"
          alt="Apple"
          width={36}
          height={42}
          className="object-contain invert"
        />
        <Image
          src="/images/window.svg"
          alt="Windows"
          width={40}
          height={40}
          className="object-contain"
        />
        <Image
          src="/images/Android.svg"
          alt="Android"
          width={36}
          height={42}
          className="object-contain"
        />
      </div>
    </section>
  );
}
