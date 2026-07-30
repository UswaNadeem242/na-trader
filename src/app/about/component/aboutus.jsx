
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

// Images
import aboutImage from "@/assets/images/charging-an-electric-or-hybrid-phev-car-with-the-p-2022-01-29-11-17-07-utc.jpg";
import carEco from "@/assets/images/PNG/car_eco.png";
import carFlash from "@/assets/images/PNG/car_with_flash.png";
import ecology from "@/assets/images/PNG/ecology.png";
import batteryPlug from "@/assets/images/PNG/battery_plug.png";
import Image from "next/image";

export default function AboutUs() {
  // Counter Animation
  const [counts, setCounts] = useState({
    experience: 0,
    stations: 0,
    reviews: 0,
    customers: 0,
  });

  useEffect(() => {
    const targets = {
      experience: 20,
      stations: 80,
      reviews: 15,
      customers: 20,
    };

    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    let current = {
      experience: 0,
      stations: 0,
      reviews: 0,
      customers: 0,
    };

    const timer = setInterval(() => {
      current = {
        experience: Math.min(
          current.experience + targets.experience / steps,
          targets.experience
        ),
        stations: Math.min(
          current.stations + targets.stations / steps,
          targets.stations
        ),
        reviews: Math.min(
          current.reviews + targets.reviews / steps,
          targets.reviews
        ),
        customers: Math.min(
          current.customers + targets.customers / steps,
          targets.customers
        ),
      };

      setCounts({
        experience: Math.floor(current.experience),
        stations: Math.floor(current.stations),
        reviews: Math.floor(current.reviews),
        customers: Math.floor(current.customers),
      });
    }, interval);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Spare Part Management",
      image: carEco,
      bg: "bg-[#F5F5F5]",
      rounded: "rounded-tl-[20px] rounded-br-[20px]",
    },
    {
      title: "Fast DC Charging",
      image: carFlash,
      bg: "bg-white",
      rounded: "",
    },
    {
      title: "Warranty Extension",
      image: ecology,
      bg: "bg-white",
      rounded: "",
    },
    {
      title: "Preventive Maintenance",
      image: batteryPlug,
      bg: "bg-[#F5F5F5]",
      rounded: "rounded-tr-[20px] rounded-bl-[20px]",
    },
  ];

  return (
    <section className="py-10 pb-11 bg-gradient-to-b from-transparent to-natrader-backgorund">
      <div className="max-w-7xl mx-auto px-5">

        <div className="pb-11">

          <div className="grid xl:grid-cols-12 gap-10 items-center">

            {/* Counter Section */}
            <div className="xl:col-span-2 md:order-3 xl:order-1">

              <div className="text-center">

                <div className="border-b border-gray-300 pb-6 mb-6">
                  <h2 className="text-5xl font-bold text-natrader-green">
                    {counts.experience}+
                  </h2>

                  <p className="uppercase font-semibold text-[#1B1A1A] mt-2 tracking-wide text-sm">
                    Years Experience
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6 mb-6">
                  <h2 className="text-5xl font-bold text-natrader-green">
                    {counts.stations}+
                  </h2>

                  <p className="uppercase font-semibold text-[#1B1A1A] mt-2 tracking-wide text-sm">
                    Service Stations
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6 mb-6">
                  <h2 className="text-5xl font-bold text-natrader-green">
                    {counts.reviews}K+
                  </h2>

                  <p className="uppercase font-semibold text-[#1B1A1A] mt-2 tracking-wide text-sm">
                    Positive Reviews
                  </p>
                </div>

                <div>
                  <h2 className="text-5xl font-bold text-natrader-green">
                    {counts.customers}K+
                  </h2>

                  <p className="uppercase font-semibold text-[#1B1A1A] mt-2 tracking-wide text-sm">
                    Happy Customers
                  </p>
                </div>

              </div>
            </div>

            {/* About Image */}
            <div className="xl:col-span-4 md:order-2">
              <Image
                src={aboutImage}
                alt="About EVDriveX"
                width={100}
                height={100}
                className="w-full rounded-[20px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="xl:col-span-6 order-1 xl:order-3">

              <div className="text-center xl:text-left">

                {/* Section Title */}
                <div className="mb-8">

                  <h6 className="uppercase text-natrader-green font-semibold tracking-widest mb-3">
                    About Evdrivex
                  </h6>

                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight xl:border-l-4 xl:border-natrader-green xl:pl-6">
                    Reliable solutions for all{" "}
                    <span className="text-natrader-green">
                      EV Charging
                    </span>{" "}
                    programs!
                  </h2>

                </div>

                {/* Description */}
                <p className="pb-8 mb-8 border-b-2 border-dashed border-gray-300 text-gray-600 leading-8">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 overflow-hidden rounded-[20px]">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`
        ${service.bg}
        ${service.rounded}
        flex items-center gap-4
        p-6
        transition-all
        duration-300
        hover:bg-natrader-green
        hover:text-white
        group
      `}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={100}
                        height={100}
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />

                      <h4 className="font-bold text-lg text-[#1B1A1A] group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-natrader-green text-white font-semibold transition-all duration-300 hover:bg-[#052730]"
                  >
                    More About
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
