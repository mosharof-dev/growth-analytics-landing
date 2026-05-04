
import Hero from "@/Components/Home/Hero";
import Stats from "@/Components/Home/Stats";
import Services from "@/Components/Home/Services";
import Operators from "@/Components/Home/Operators";
import Benefits from "@/Components/Home/Benefits";
import Testimonials from "@/Components/Home/Testimonials";
import Process from "@/Components/Home/Process";
import CTA from "@/Components/Home/CTA";

export default function Home() {
  return (
   <div className="flex flex-col w-full">
    <Hero />
    <Stats />
    <Services />
    <Operators />
    <Benefits />
    {/* <Testimonials />
    <Process />
    <CTA /> */}
   </div>
  );
}
