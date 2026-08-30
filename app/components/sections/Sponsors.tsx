import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl lg:text-[64px] font-bold text-[#212529] leading-tight z-10">
          Our{" "}
          <span className="relative inline-block whitespace-nowrap">
            sponsors
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
      </div>

      {/* Sponsor Logos */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-8">
        <div className="relative w-[55px] h-[65px]">
          <Image src="/images/Apple01.svg" alt="Apple logo" fill className="object-contain" />
        </div>
        <div className="relative w-[210px] h-[60px]">
          <Image src="/images/Microsoft.svg" alt="Microsoft logo" fill className="object-contain" />
        </div>
        <div className="relative w-[210px] h-[60px]">
          <Image src="/images/slack.svg" alt="Slack logo" fill className="object-contain" />
        </div>
        <div className="relative w-[150px] h-[50px]">
          <Image src="/images/google.svg" alt="Google logo" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}