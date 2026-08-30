import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";


export default function Navbar() {
  return (
    <nav className="w-full bg-[#043873] py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between z-50 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo/Logo01.png"
          alt="Whitepace Logo"
          width={160}
          height={40}
          className="w-auto h-8"
          priority
        />
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">
        <Link href="#" className="flex items-center gap-1 hover:text-gray-300">
          Products <ChevronDown className="w-4 h-4" />
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-gray-300">
          Solutions <ChevronDown className="w-4 h-4" />
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-gray-300">
          Resources <ChevronDown className="w-4 h-4" />
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-gray-300">
          Pricing <ChevronDown className="w-4 h-4" />
        </Link>
      </div>

      {/* Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-[#FFE492] text-[#043873] font-semibold px-6 py-2.5 rounded-lg hover:bg-yellow-300 transition">
          Login
        </button>
        <button className="bg-[#4F9CF9] text-white font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition">
          Try Whitepace free <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
