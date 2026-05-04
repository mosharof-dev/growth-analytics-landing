import React from 'react';

const Process = () => {
    const steps = [
        {
            number: "Step 1",
            title: "Diagnose",
            description: "We audit your current marketing stack and identify the biggest bottlenecks to growth."
        },
        {
            number: "Step 2",
            title: "Design",
            description: "We create a custom growth roadmap tailored to your specific business goals and market."
        },
        {
            number: "Step 3",
            title: "Execute",
            description: "Our team rolls up their sleeves to build and run the systems that drive real revenue."
        },
        {
            number: "Step 4",
            title: "Revise",
            description: "We constantly analyze performance and iterate on strategies to maximize your ROI."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium">
                        Our Framework
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold">A proven 4-step framework that drives results</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300">
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;
