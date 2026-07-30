"use client";

import heroData from "./heroData";
import HeroHeader from "./heroHeader";
import HeroSlide from "./heroSlide";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bgImage from "@/assets/images/map-evcharge.png"
export default function Hero() {
  return (
    <section
      className=" relative overflow-hidden bg-[#052730] pt-28 pb-6 rounded-b-[40px]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-cover bg-[center_top] opacity-20"></div>

      {/* Background Image */}

      <div className="absolute inset-0 opacity-20">
        <Image
          src={bgImage}
          alt="Background Map"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <HeroHeader />

        {/* Slider */}

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="heroSwiper"
        >
          {heroData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}