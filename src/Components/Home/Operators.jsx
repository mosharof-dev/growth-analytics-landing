import React from "react";
import Image from "next/image";

const operators = [
  {
    role: "Marketing Expert",
    subRole: "Co-Founder",
    name: "Cameron Williamson",
    image: "/images/founder1.png",
    bio: "5+ years mastering acquisition, content strategy, and brand positioning. Built campaigns that scaled from zero to thousands of customers. Your go-to for everything marketing — from content to ads to brand.",
  },
  {
    role: "Marketing Engineer",
    subRole: "Co-Founder",
    name: "Jane Cooper",
    image: "/images/founder2.png",
    bio: "Specialist in building growth infrastructure, automation, and data-driven marketing systems. Built scalable marketing stacks that powered multi-million dollar growth cycles.",
  },
];

const Operators = () => {
  return (
    <section className="py-14 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-[#FFFFFF2B] text-white/50 text-[11px] uppercase tracking-widest">
            Meet Your Growth Partners
          </p>

          <h2 className="text-4xl m-4 md:text-4xl font-bold text-white leading-tight">
            Two operators, one mission
            <span className="text-white/70">your success</span>
          </h2>

          <p className="text-white/40 mt-4 text-lg">
            We’re not an agency. We’re founders helping other founders win.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {operators.map((op, i) => (
            <div
              key={i}
              className="
              group flex flex-col md:flex-row
              rounded-[28px]
              border border-white/10
              bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
              backdrop-blur-[80px]
              overflow-hidden
              transition duration-500
              hover:border-white/20
              "
            >
              {/* Image */}
              <div className="relative w-full md:w-[40%] h-65 md:h-auto">
                <Image
                  src={op.image}
                  alt={op.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                />

                {/* overlay fade */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-background hidden md:block"></div>
                <div className="absolute inset-0 bg-linear-to-t from-background to-transparent md:hidden"></div>
              </div>

              {/* Content */}
              <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {op.role}
                </h3>

                <p className="text-white/40 mt-1">{op.subRole}</p>

                <div className="w-12 h-0.5 bg-white/20 mt-4 mb-6 group-hover:w-20 group-hover:bg-primary transition-all"></div>

                <p className="text-white/60 leading-relaxed text-lg">
                  {op.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operators;
