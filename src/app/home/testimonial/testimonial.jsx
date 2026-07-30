"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Star, Quote, Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    image: "/assets/images/review1.jpg",
    name: "Miley Houdson",
    designation: "CEO, Houston",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    image: "/assets/images/review3.jpg",
    name: "Tyler Herro",
    designation: "Technician, Compton",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    image: "/assets/images/review4.jpg",
    name: "Kendrick Mathers",
    designation: "Driver, LA",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden rounded-none lg:rounded-r-[50px] bg-[#052730] py-10 md:py-14 lg:py-8 mt-16 lg:mt-32 mr-0 lg:mr-10">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7">

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop
              slidesPerView={1}
              spaceBetween={20}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>

                  <div className="relative rounded-3xl bg-white px-5 py-7 sm:px-8 sm:py-10 shadow-xl">

                    {/* Quote Icon */}
                    <div className="absolute right-4 top-4 sm:right-8 sm:top-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-natrader-backgorund">

                      <Quote
                        className="text-natrader-green"
                        size={26}
                        strokeWidth={2.5}
                      />

                    </div>

                    {/* Stars */}

                    <div className="mb-6 flex gap-1">

                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#69A316"
                          color="#69A316"
                        />
                      ))}

                    </div>

                    {/* Review */}

                    <p className="mb-8 text-base sm:text-lg lg:text-[22px] italic leading-7 sm:leading-8 lg:leading-10 text-[#4b5563]">

                      "{item.review}"

                    </p>

                    {/* Reviewer */}

                    <div className="flex items-center">

                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="mr-4 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
                      />
                      <div>

                        <h5 className="mb-1 text-lg sm:text-xl font-semibold text-[#052730]">

                          {item.name}

                        </h5>

                        <p className="font-medium text-natrader-green">

                          {item.designation}

                        </p>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] items-center justify-center lg:col-span-5">

            {/* Rating Text */}
            <div className="z-10 mt-28 lg:mt-24 max-w-xs sm:max-w-sm px-4 text-center lg:text-left">

              <div className="mb-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#69A316"
                    color="#69A316"
                  />
                ))}
              </div>

              <p className="text-sm sm:text-base leading-7 sm:leading-8 text-white">
                <span className="font-bold">
                  99.9% Customer Satisfaction
                </span>{" "}
                based on 550+ reviews of 2,250 completed projects and
                2,820 happy customers who trust us.
              </p>

            </div>

            {/* Ripple Animation */}
            <div className="absolute inset-0 flex items-center justify-center -translate-y-20 lg:-translate-y-28">

              {/* Wave 1 */}
              <span className="absolute h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 animate-ping rounded-full bg-natrader-green/20"></span>

              {/* Wave 2 */}
              <span
                className="absolute h-32 w-32 sm:h-36 sm:w-36 lg:h-40 lg:w-40 animate-ping rounded-full bg-natrader-green/15"
                style={{ animationDelay: "0.8s" }}
              ></span>

              {/* Wave 3 */}
              <span
                className="absolute h-44 w-44 sm:h-48 sm:w-48 lg:h-52 lg:w-52 animate-ping rounded-full bg-natrader-green/10"
                style={{ animationDelay: "1.6s" }}
              ></span>

              {/* Play Button */}
              <a
                href="https://youtu.be/VhBl3dHT5SY"
                target="_blank"
                rel="noreferrer"
                className="relative z-20 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-natrader-green text-white shadow-2xl transition duration-300 hover:scale-110"
              >
                <Play
                  size={20}
                  fill="white"
                  strokeWidth={2}
                />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}