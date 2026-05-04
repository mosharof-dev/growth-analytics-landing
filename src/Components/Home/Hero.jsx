import React from "react";
import Image from "next/image";
import Banner from "@/assets/Banner-logo.png";
import Nav from "@/assets/nav.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* === Background Circles === */}

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-[-15%] w-[60%] h-[60%] bg-[#0f40df]/20 blur-[130px] rounded-full"></div>

        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2B61FF]/25 blur-[140px] rounded-full"></div>
      </div>

      {/* ===  Navbar === */}

      <nav className="relative  z-50 w-full px-6 py-5 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-28 h-8 md:w-32 md:h-10">
            <Image
              src={Nav}
              alt="NavLogo"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Right side CTA */}
          <button className="bg-[#2B61FF] hover:bg-[#1E4BE6] text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg font-medium transition-all duration-300 cursor-pointer text-sm">
            Book a Call
          </button>
        </div>
      </nav>

      {/* === Hero Content === */}

      <div className="relative z-10 px-6 md:px-0 max-w-7xl mx-auto  w-full pt-4 md:pt-8 lg:pt-8 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* === LEFT: Text Content === */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-[#1A1A1A] text-sm font-medium text-white/70">
              Author, Founders & Growth Experts
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white">
              Your Dedicated <br />
              Growth Architects
            </h1>

            <p className="text-base md:text-[17px] text-white/60 max-w-125 leading-relaxed">
              Helping founders get customers in a predictable, scalable way —
              with clear strategy and steady execution. We&apos;re operators
              who&apos;ve been in the trenches, not consultants guessing from
              the sidelines.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-[#2B61FF] hover:bg-[#1E4BE6] text-white px-6 py-3 md:px-7 md:py-3.5 rounded-xl font-medium transition-all duration-300 cursor-pointer w-full sm:w-auto text-center">
                Book a Meeting
              </button>
              <button className="bg-[#111111] border border-white/10 hover:bg-white/5 text-white px-6 py-3 md:px-7 md:py-3.5 rounded-xl font-medium transition-all duration-300 cursor-pointer w-full sm:w-auto text-center">
                Explore Services
              </button>
            </div>
          </div>

          {/* === RIGHT: Image Layout === */}

          <div className="relative w-full h-87.5 md:h-112.5 lg:h-150 lg:mt-0">
            <Image
              src={Banner}
              alt="Dashboard Mockups"
              fill
              className="object-contain lg:object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
