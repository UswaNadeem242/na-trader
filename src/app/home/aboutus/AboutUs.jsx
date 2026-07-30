"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HomeServices } from "@/constant";


function ProgressBar({ title, value }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const t = setTimeout(() => setProgress(value), 200); return () => clearTimeout(t) }, [value]);
  return (
    <div className="mb-8">
      <p className="font-bold mb-2">{title}</p>
      <div className="relative h-[15px] w-full lg:w-3/4 rounded bg-[#052730]">
        <div className="h-full bg-[#87C332] rounded-l transition-all duration-[3000ms] relative"
          style={{ width: `${progress}%` }}>
          <div className="absolute -top-12 right-0 translate-x-1/2">
            <div className="relative h-10 w-10 rounded-full bg-[#87C332] text-white flex items-center justify-center text-xs font-bold">
              {progress}%
              <span className="absolute -bottom-2 h-2 w-[3px] bg-[#87C332]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutUs() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let c = 0;
    const i = setInterval(() => {
      c++;
      setCount(c);
      if (c >= 50) clearInterval(i);
    }, 40);
    return () => clearInterval(i);
  }, []);
  return (
    <section className="about-us bg-natrader-backgorund py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h6 className="uppercase text-natrader-green font-semibold mb-2">About Us</h6>
            <h2 className="text-4xl font-bold border-l-4 border-natrader-green pl-4 text-[#052730]">Charging Solutions For all <span className="text-natrader-green">business and EV Drivers</span></h2>
            <p className="text-gray-600 mt-6 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae id nihil, enim magni tempora quo! Officiis, maxime accusamus. voluptatum adipisci.</p>
            {HomeServices?.map(s => <ProgressBar key={s.title} {...s} />)}
          </div>
          <div className="relative">
            <Image src="/assets/images/kindelmedia-9800029.jpg" alt="About" className="w-full rounded-3xl" width={100} height={100} />
            <div className="lg:absolute lg:top-5 lg:-right-8 mt-6 lg:mt-0 bg-natrader-green border-4 border-natrader-backgorund rounded-3xl p-6 text-white shadow-xl">
              <Image src="/assets/images/charging-station.png" alt="" className="w-12 h-12 mb-3" width={100} height={100} />
              <h2 className="text-4xl font-bold">{count}+</h2>
              <p className="text-sm">Charging Stations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
