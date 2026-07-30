"use client"
import { Check, Leaf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Images
import missionMap from "@/assets/images/map-evcharge.png";

import partner1 from "@/assets/images/1.png";
import partner2 from "@/assets/images/2.png";
import partner3 from "@/assets/images/3.png";
import partner4 from "@/assets/images/4.png";
import partner5 from "@/assets/images/5.png";
import Image from "next/image";

const missionList = [
  "Duis aute irure dolor in reprehenderit in voluptate.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

const partners = [partner1, partner2, partner3, partner4, partner5];

export default function Mission() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Mission Section */}
        <div className="border-b-2 border-dashed border-gray-300 pb-16 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <Image
                src={missionMap}
                alt="Mission"
                className="w-full"
              />
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              {/* Heading */}
              <div className="mb-8">
                <h6 className="uppercase tracking-widest text-natrader-green font-semibold mb-3">
                  Convenient & Fast
                </h6>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight border-l-4 border-natrader-green pl-5">
                  <span className="text-natrader-green">
                    Our Mission
                  </span>{" "}
                  is to charge your electric vehicle properly
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-8">
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>

              {/* List */}
              <ul className="mt-8 pt-8 border-t-2 border-dashed border-gray-300 space-y-5">
                {missionList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start lg:items-center gap-3 font-semibold text-[#1B1A1A]"
                  >
                    <Leaf
                      size={18}
                      className="text-natrader-green mt-1 lg:mt-0 shrink-0"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="grid lg:grid-cols-12 items-center gap-8">
          {/* Left Heading */}
          <div className="lg:col-span-2">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold border-l-4 border-natrader-green pl-4">
                Our{" "}
                <span className="text-natrader-green">
                  Partners
                </span>
              </h3>
            </div>
          </div>

          {/* Slider */}
          <div className="lg:col-span-10 lg:border-l border-gray-300">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {partners.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center py-5">
                    <Image
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="max-h-20 object-contain transition duration-300 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}