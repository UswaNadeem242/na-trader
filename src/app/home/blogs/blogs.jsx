"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Homeblogs, HomeFeaturedBlog } from "@/constant";
import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="bg-gradient-to-b from-natrader-backgorund via-natrader-backgorund to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <h6 className="mb-3 font-semibold uppercase tracking-widest text-natrader-green">
              Our News & Articles
            </h6>

            <h2 className="border-l-4 border-natrader-green pl-5 text-4xl font-bold leading-tight">
              Latest Buzz{" "}
              <span className="text-natrader-green">What's New?</span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <p className="mb-6 leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quasi dolor architecto ea veritatis minima accusamus.
            </p>

            <a
              href="/blog-list"
              className="inline-flex items-center justify-center rounded-full bg-natrader-green px-8 py-3 font-medium text-white transition hover:bg-[#5a8d12]"
            >
              All Blogs
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left Slider */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-2xl border-2 border-natrader-border bg-white p-6">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop
                className="pb-16 [&_.swiper-pagination]:bottom-0"
              >
                {Homeblogs?.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <div className="px-2 md:px-4">
                      <div className="grid items-center gap-8 md:grid-cols-12">
                        {/* Text */}
                        <div className="order-2 md:order-1 md:col-span-5">
                          <span className="inline-block rounded-lg bg-natrader-backgorund px-3 py-1 text-sm font-medium">
                            {blog.tag}
                          </span>

                          <h3 className="mt-4 text-2xl font-bold leading-snug">
                            <Link
                              href="/blog-detail"
                              className="transition hover:text-natrader-green"
                            >
                              {blog.title}
                            </Link>
                          </h3>

                          <p className="mt-4 leading-7 text-gray-600">
                            {blog.description}
                          </p>

                          <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
                            {blog.date}
                            <span className="mx-3">|</span>
                            {blog.comments}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 md:order-2 md:col-span-7">
                          <Link
                            href="/blog-detail"
                            className="group relative block overflow-hidden rounded-xl"
                          >
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                            <Image
                              src={blog.image}
                              alt={blog.title}
                              width={600}
                              height={400}
                              className="h-[260px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Featured Blog */}
          <div className="flex lg:col-span-4">
            <div className="h-full w-full rounded-2xl border-2 border-natrader-border bg-white p-6">
              <div className="group">
                <Link
                  href="/blog-detail"
                  className="relative mb-6 block overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                  <Image
                    src={HomeFeaturedBlog.image}
                    alt={HomeFeaturedBlog.title}
                    width={600}
                    height={400}
                    className="h-[250px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <h4 className="mb-5 text-2xl font-bold leading-snug">
                  <Link
                    href="/blog-detail"
                    className="transition hover:text-natrader-green"
                  >
                    {HomeFeaturedBlog.title}
                  </Link>
                </h4>

                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-natrader-backgorund px-3 py-1 text-sm font-medium">
                    {HomeFeaturedBlog.tag}
                  </span>

                  <span className="text-sm text-gray-500">
                    {HomeFeaturedBlog.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}