"use client";

import dynamic from "next/dynamic";
import { Check } from "lucide-react";
import "./pricing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function Pricingcomponent() {
  const plans = [
    {
      title: "Business",
      subtitle: "Standard Package",
      price: "19",
      cents: "99",
      trending: false,
      features: [
        "Availability Status",
        "Booking & Reservation",
        "Mobile App Linking",
        "One-Click Checkout",
      ],
    },
    {
      title: "Premium",
      subtitle: "Pro Package",
      price: "39",
      cents: "99",
      trending: true,
      features: [
        "Availability Status",
        "Booking & Reservation",
        "Mobile App Linking",
        "One-Click Checkout",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Pro Package",
      price: "79",
      cents: "99",
      trending: false,
      features: [
        "Availability Status",
        "Booking & Reservation",
        "Mobile App Linking",
        "One-Click Checkout",
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-natrader-backgorund">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Side */}
          <div className="lg:col-span-4">
            <p className="uppercase text-natrader-green font-semibold tracking-wider mb-2">
              Pricing
            </p>

            <h2 className="mb-6 border-l-4 border-natrader-green pl-5 text-4xl font-bold leading-tight">
              Explore our charging
              <span className="text-natrader-green"> Plans</span>
            </h2>

            <p className="mb-8 leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia expedita temporibus dolore, minus perspiciatis
              porro et modi.
            </p>

            <a
              href="/price"
              className="inline-flex items-center justify-center rounded-full bg-natrader-green px-8 py-3 font-semibold text-white transition hover:bg-[#5b8f14]"
            >
              View Plans
            </a>
          </div>

          {/* Slider */}
          <div className="lg:col-span-8">
            <Slider {...settings}>
              {plans.map((plan) => (
                <div key={plan.title} className="px-3">
                  <div className="relative overflow-hidden rounded-3xl border-2 border-[#d9eac0] bg-white p-8 shadow-sm">
                    {plan.trending && (
                      <div className="absolute -left-12 top-7 -rotate-45 bg-natrader-green px-14 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                        Trending
                      </div>
                    )}

                    {/* Title */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold uppercase text-natrader-green">
                        {plan.title}
                      </h4>

                      <p className="mt-1 font-medium text-gray-500">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="py-10 text-center text-natrader-green">
                      <div className="flex items-start justify-center">
                        <span className="mt-1 text-2xl font-bold">$</span>

                        <span className="mx-1 text-6xl font-bold leading-none">
                          {plan.price}
                        </span>

                        <span className="mt-1 text-2xl font-bold">
                          {plan.cents}
                        </span>
                      </div>

                      <p className="mt-2 text-gray-500">per Month</p>
                    </div>

                    {/* Features */}
                    <ul className="mb-10 space-y-4">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center border-b border-dashed border-gray-300 pb-3 last:border-none last:pb-0"
                        >
                          <Check
                            size={18}
                            className="mr-2 flex-shrink-0 text-natrader-green"
                          />

                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <div className="text-center">
                      <button className="rounded-full bg-natrader-green px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5b8f14]">
                        Choose Plan
                      </button>

                      <p className="mt-4 text-xs leading-6 text-gray-500">
                        *Please read our terms and conditions before ordering a package.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );

}