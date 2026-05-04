import React from 'react';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-[3rem] bg-primary p-12 lg:p-20 overflow-hidden shadow-2xl shadow-primary/40">
                    {/* Decorative Background Circles */}
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-white/10 blur-[80px] rounded-full"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-blue-400/20 blur-[80px] rounded-full"></div>
                    
                    <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                            Ready to Scale Your Startup?
                        </h2>
                        <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
                            Stop guessing and start growing. Let&apos;s build the systems that will take your business to the next level.
                        </p>
                        <div className="pt-4">
                            <button className="bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl cursor-pointer">
                                Book Your Free Growth Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
