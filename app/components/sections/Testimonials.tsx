import Image from "next/image";

// Custom SVG for the filled double quotes
const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="32" height="24" viewBox="0 0 28 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.16 0C8.624 0 10.64 2.016 10.64 4.48V9.52C10.64 11.984 8.624 14 6.16 14H3.92C4.48 17.36 7.28 20.16 10.64 20.72V22C5.6 21.44 1.12 17.52 0 11.76V4.48C0 2.016 2.016 0 4.48 0H6.16ZM23.52 0C25.984 0 28 2.016 28 4.48V9.52C28 11.984 25.984 14 23.52 14H21.28C21.84 17.36 24.64 20.16 28 20.72V22C22.96 21.44 18.48 17.52 17.36 11.76V4.48C17.36 2.016 19.376 0 21.84 0H23.52Z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-[64px] font-bold text-[#212529] leading-tight z-10">
          What Our Clients{" "}
          <span className="relative inline-block whitespace-nowrap">
            Says
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
      </div>

      {/* Testimonials Grid */}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Card 1 - Light */}
        <div className="bg-white rounded-[10px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col justify-between gap-8 border border-gray-100">
          <div className="flex flex-col gap-6">
            <QuoteIcon className="text-[#043873]" />
            <p className="text-[#212529] text-lg leading-relaxed">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full h-px bg-[#212529] opacity-20"></div>
            <div className="flex items-center gap-4">
              <Image src="/images/Avater01.png" alt="Oberon Shaw" width={56} height={56} className="rounded-full object-cover" />
              <div>
                <h4 className="text-[#212529] font-bold text-lg">Oberon Shaw, MCH</h4>
                <p className="text-[#212529] text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Blue */}
        <div className="bg-[#4F9CF9] rounded-[10px] p-10 shadow-lg flex flex-col justify-between gap-8 text-white">
          <div className="flex flex-col gap-6">
            <QuoteIcon className="text-white" />
            <p className="text-white text-lg leading-relaxed">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full h-px bg-white opacity-30"></div>
            <div className="flex items-center gap-4">
              <Image src="/images/Avater02.png" alt="Oberon Shaw" width={56} height={56} className="rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-lg">Oberon Shaw, MCH</h4>
                <p className="text-blue-100 text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Blue */}
        <div className="bg-[#4F9CF9] rounded-[10px] p-10 shadow-lg flex flex-col justify-between gap-8 text-white">
          <div className="flex flex-col gap-6">
            <QuoteIcon className="text-white" />
            <p className="text-white text-lg leading-relaxed">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full h-px bg-white opacity-30"></div>
            <div className="flex items-center gap-4">
              <Image src="/images/Avater03.png" alt="Oberon Shaw" width={56} height={56} className="rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-lg">Oberon Shaw, MCH</h4>
                <p className="text-blue-100 text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}