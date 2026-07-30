"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ProjectSection() {
  return (
    <section className="pb-3 bg-gradient-to-b from-natrader-backgorund to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <div className="mb-12 text-center lg:text-left">
            <div className="grid lg:grid-cols-12 gap-8 items-center">

              {/* Left Side */}
              <div className="lg:col-span-7">
                <h6 className="mb-2 text-sm font-semibold uppercase tracking-widest text-natrader-green">
                  Our Portfolio
                </h6>

                <h2 className="border-l-4 border-natrader-green pl-4 text-4xl font-bold leading-tight text-[#052730]">
                  Take a look at some of our ongoing{" "}
                  <span className="text-natrader-green">EV Projects</span>
                </h2>
              </div>

              {/* Right Side */}
              <div className="lg:col-span-5">
                <p className="mb-6 text-gray-600 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi dolor architecto molestias a quodritatis minima
                  accusamus.
                </p>

                <a
                  href="/project-list"
                  className="inline-flex items-center rounded-full bg-natrader-green px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-[#052730]"
                >
                  All Projects
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>



  );
}


const projects = [
  {
    title: "EV Charging Station Finder",
    image: "/assets/images/modern-electric-car-charging-at-outdoors-ev-statio-2023-03-17-23-18-45-utc.jpg",
    progress: 90,
  },
  {
    title: "AI Based Charge Prediction",
    image: "/assets/images/hand-holding-electric-car-charger-electric-vehicl-2022-11-16-14-02-45-utc.jpg",
    progress: 85,
  },
  {
    title: "Smart EV Charging Platform",
    image: "/assets/images/rearview-car-parked-in-luxury-showroom-car-dealer-2023-03-30-01-57-28-utc.jpg",
    progress: 95,
  },
  {
    title: "EV Charging Blog & Guides",
    image: "/assets/images/electric-car-charging-connected-to-the-grid-2023-02-07-21-01-15-utc.jpg",
    progress: 88,
  },
  {
    title: "P2P EV Charging Network",
    image: "/assets/images/electric-car-plugged-in-outside-house-2022-05-01-23-53-51-utc.jpg",
    progress: 75,
  },
  {
    title: "EV Charging Cost Calculator",
    image: "/assets/images/multiracial-businesspeople-refilling-ev-at-chargin-2023-03-17-23-18-40-utc.jpg",
    progress: 86,
  },
];
export function Projects() {
  return (
    <div className="mt-6  max-w-7xl  mx-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={35}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="group overflow-hidden rounded-3xl border-2 border-[#d7efb7] bg-white">

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/50"></div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-full">
                  <div className="rounded-2xl bg-white/95 p-5 backdrop-blur">

                    <h4 className="mb-6 text-lg font-semibold text-[#052730]">
                      {project.title}
                    </h4>

                    {/* Progress */}
                    <div className="relative mb-5 h-2 rounded-full bg-[#052730]">

                      <div
                        className="relative h-full rounded-full bg-natrader-green"
                        style={{ width: `${project.progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-natrader-green text-sm font-bold text-black">
                          {project.progress}%
                        </div>
                      </div>
                    </div>

                    <span className="font-medium text-[#052730]">
                      <span className="font-bold text-natrader-green">
                        {project.progress}%
                      </span>{" "}
                      Completed
                    </span>

                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
