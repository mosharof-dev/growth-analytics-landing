import React from "react";
import { Check } from "lucide-react";

const Services = () => {
  const plans = [
    {
      tag: "For Solo Founders",
      name: "Execution Partner",
      price: "249",
      description:
        "You need clarity and accountability. We'll guide your growth week by week with expert advice and hands-on support.",
      features: [
        "Weekly 1:1 accountability call",
        "Acquisition & Growth guidance",
        "Marketing & Growth Expert included",
        "WhatsApp DM support",
      ],
    },
    {
      tag: "For Solo Founders",
      name: "Execution Partner",
      price: "249",
      description:
        "You need clarity and accountability. We'll guide your growth week by week with expert advice and hands-on support.",
      features: [
        "Weekly 1:1 accountability call",
        "Acquisition & Growth guidance",
        "Marketing & Growth Expert included",
        "WhatsApp DM support",
      ],
      highlighted: true,
    },
    {
      tag: "For Solo Founders",
      name: "Execution Partner",
      price: "249",
      description:
        "You need clarity and accountability. We'll guide your growth week by week with expert advice and hands-on support.",
      features: [
        "Weekly 1:1 accountability call",
        "Acquisition & Growth guidance",
        "Marketing & Growth Expert included",
        "WhatsApp DM support",
      ],
    },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[85%] h-[85%] bg-[#2B61FF]/20 blur-[200px] opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-5">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-[#FFFFFF2B] text-white/50 text-[11px] uppercase tracking-widest">
            How We Can Help
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold text-white max-w-3xl mx-auto leading-tight">
            From strategy to execution — everything your business needs to grow
          </h2>

          <p className="text-white/40 max-w-xl mx-auto text-[15px]">
            All on a flexible monthly plan. No long-term contracts. No BS.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full bg-[#2B61FF] text-white font-medium border border-white/10 shadow-[0_0_20px_rgba(43,97,255,0.6)]">
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div
                className={`rounded-[27px] p-10 md:p-12 flex flex-col min-h-130 border-2
                ${
                  plan.highlighted
                    ? "border-[rgba(2,73,253,1)] bg-background"
                    : "border-[rgba(255,255,255,1)] bg-[radial-gradient(circle_at_top_left,rgba(43,97,255,0.22),transparent_50%),linear-gradient(to_bottom,#0B0F1A,#0A0A0A_60%,#050505)]"
                }
                `}
              >
                {/* Top */}
                <div className="space-y-5">
                  <p className="text-white/40 text-sm">{plan.tag}</p>

                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>

                  <p className="text-white/50 text-[15px] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-8">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-white/40 text-sm mb-1">/month</span>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-6 w-full py-3 rounded-md font-medium bg-[#2B61FF] hover:bg-[#1f4ed8] text-white transition-all">
                  Get Started
                </button>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#2B61FF] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
