// import React from 'react';
// import { Quote } from 'lucide-react';

// const Testimonials = () => {
//     const reviews = [
//         {
//             name: "Cameron Williamson",
//             role: "Founder of Acme",
//             content: "The team at Growth Grade didn't just give us a strategy, they built the entire engine. Our ROI has never been higher."
//         },
//         {
//             name: "Cameron Williamson",
//             role: "CEO of TechFlow",
//             content: "Working with them felt like having a co-founder who only cared about growth. Highly recommend their execution partner plan."
//         },
//         {
//             name: "Cameron Williamson",
//             role: "Founder of ScaleUp",
//             content: "They simplified our entire marketing stack and automated our lead gen. We're now scaling predictably month over month."
//         }
//     ];

//     return (
//         <section className="py-24 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center mb-16 space-y-4">
//                     <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium">
//                         Testimonials
//                     </div>
//                     <h2 className="text-3xl lg:text-5xl font-bold">What founders say about working with us</h2>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {reviews.map((review, index) => (
//                         <div key={index} className="relative group">
//                             <div className="absolute -inset-0.5 bg-linear-to-b from-primary/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <div className="relative p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 h-full flex flex-col justify-between">
//                                 <div className="space-y-6">
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-4">
//                                             <div className="w-12 h-12 rounded-full bg-white/10"></div>
//                                             <div>
//                                                 <div className="font-bold text-white">{review.name}</div>
//                                                 <div className="text-xs text-white/40">{review.role}</div>
//                                             </div>
//                                         </div>
//                                         <Quote className="w-8 h-8 text-primary/40" />
//                                     </div>
//                                     <p className="text-white/60 leading-relaxed italic">
//                                         {review.content}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Testimonials;
