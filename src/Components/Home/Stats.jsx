import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "10+",
      label: "Years Combined Experience",
      description: "Deep expertise in marketing and growth systems",
    },
    {
      value: "2",
      label: "Expert Co-Founders",
      description: "Marketing Expert + Growth Expert = Your Dream Team",
    },
    {
      value: "100%",
      label: "Operator-Led",
      description: "We've built real businesses from the ground up",
    },
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-[#2B61FF]/20 blur-[160px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-[#FFFFFF2B] text-white/50 text-[11px] uppercase tracking-widest">
            The Numbers Don&apos;t Lie
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Real experience. Real results.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group rounded-[28px] p-px">
              {/* Outer subtle border */}
              <div
                className="absolute inset-0 rounded-[28px] 
              bg-linear-to-br from-[rgba(255,255,255,1)] via-white/20 to-transparent
               opacity-80 group-hover:opacity-100 transition"
              ></div>

              {/* Card */}
              <div
                className="relative rounded-[27px] p-10 md:p-12 flex flex-col min-h-90 h-full
              
              bg-[radial-gradient(circle_at_top_left,rgba(43,97,255,0.12),transparent_40%),linear-gradient(to_bottom,#0B0F1A,#0A0A0A_60%,#050505)]
              
              border border-white/5 backdrop-blur-sm"
              >
                {/* Top */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B61FF] shadow-[0_0_12px_#2B61FF]"></span>

                    <h3 className="text-5xl font-semibold text-white tracking-tight">
                      {stat.value}
                    </h3>
                  </div>

                  <h4 className="text-[22px] font-medium text-white leading-tight max-w-55">
                    {stat.label}
                  </h4>
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-12">
                  <p className="text-white/50 text-[15px] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
