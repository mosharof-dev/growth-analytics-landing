import React from "react";
import { Target, BarChart3, Users } from "lucide-react";
import Image from "next/image";
import Meet from "@/assets/meet.png";

const Benefits = () => {
  const benefits = [
    {
      title: "Operators, Not Consultants",
      description:
        "We've built, launched, and scaled real businesses. We don't theorize — we execute based on what we know works because we've done it ourselves.",
      icon: <Users className="w-5 h-5 text-white" />,
    },
    {
      title: "Accountability-Driven Execution",
      description:
        "Weekly calls. Clear milestones. Real progress. We hold you accountable, and you hold us accountable.",
      icon: <Target className="w-5 h-5 text-white" />,
    },
    {
      title: "Leverage & Clarity",
      description:
        "We help you focus on high-leverage activities that actually move the needle.",
      icon: <BarChart3 className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
            Why Growth Grain
          </div>

          <h2 className="text-4xl lg:text-4xl font-semibold text-white leading-tight max-w-md">
            We&apos;re different because we actually do the work
          </h2>

          {/* IMAGE FIX */}
          <div className="relative w-full max-w-150 h-65 rounded-[20px] overflow-hidden border border-white/10">
            <Image src={Meet} alt="team" fill className="object-cover" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="
              flex gap-4 p-6 rounded-[20px]
              border border-white
              bg-[rgba(255,255,255,0.06)]
              backdrop-blur-[124px]
              transition-all duration-300
              "
            >
              {/* ICON */}
              <div
                className="
                w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                bg-linear-to-br from-blue-500 to-blue-700
              "
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
