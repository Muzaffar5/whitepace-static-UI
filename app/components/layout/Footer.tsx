import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#043873] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex items-center">
            {/* Reusing the logo setup from Navbar */}
            <Image
              src="/logo/Logo01.png"
              alt="Whitepace Logo"
              width={160}
              height={40}
              className="w-auto h-8 brightness-0 invert"
            />
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg mb-2">Product</h4>
          <Link href="#" className="text-gray-200 text-sm hover:underline">
            Overview
          </Link>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            Pricing
          </Link>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            Customer stories
          </Link>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg mb-2">Resources</h4>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            Blog
          </Link>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            Guides & tutorials
          </Link>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            Help center
          </Link>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg mb-2">Company</h4>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            About us
          </Link>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            Careers
          </Link>
          <Link href="#" className="text-gray-200 text-sm hover:text-white">
            Media kit
          </Link>
        </div>

        {/* Try It Today Column */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <h4 className="font-bold text-[28px] leading-tight">Try It Today</h4>
          <p className="text-gray-200 text-sm leading-relaxed">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-[#4F9CF9] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 transition w-fit">
            Start today <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-200">
        {/* Left Options */}
        <div className="flex flex-wrap items-center gap-8">
          <button className="flex items-center gap-2 hover:text-white">
            <Globe className="w-4 h-4" /> English{" "}
            <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="#" className="hover:text-white">
            Terms & privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Security
          </Link>
          <Link href="#" className="hover:text-white">
            Status
          </Link>
          <span>©2021 Whitepace LLC.</span>
        </div>

        {/* Right Socials */}
      </div>
    </footer>
  );
}
