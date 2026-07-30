import { Apple, Play } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* =========================
              LEFT SIDE
          ========================== */}
          <div>
            {/* Title */}
            <div className="mb-10 text-center">
              <h6 className="mb-2 uppercase tracking-widest font-semibold text-natrader-green">
                Download EVCharge App
              </h6>

              <h2 className="text-4xl font-bold leading-tight">
                Discover Nearby{" "}
                <span className="text-natrader-green">
                  Charging Station
                </span>{" "}
                with our app
              </h2>
            </div>

            {/* Mobile Image */}
            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/assets/images/mockup-ev.png"
                alt="EV App"
                className="w-1/2 max-w-[280px] object-contain"
              />
            </div>

            {/* Download Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
              {/* Apple */}
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-natrader-green px-8 py-3 font-medium text-white transition duration-300 hover:bg-[#5a8d12]"
              >
                <Apple
                  size={20}
                  className="mr-2"
                />
                App Store
              </a>

              {/* Play Store */}
              <a
                href="#"
                className="inline-flex items-center rounded-full border-2 border-natrader-green px-8 py-3 font-medium text-natrader-green transition duration-300 hover:bg-natrader-green hover:text-white"
              >
                <Play
                  size={18}
                  className="mr-2"
                />
                Play Store
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT SIDE FORM
              (Part 2 starts here)
          ========================== */}
          <div className="rounded-2xl border-2 border-natrader-border bg-white p-8 shadow-sm">
            {/* Form Heading */}
            <div className="mb-8 text-center">
              <h3 className="mb-3 text-3xl font-bold text-gray-900">
                Any questions? Ask us!!
              </h3>

              <p className="leading-7 text-gray-600">
                Magna voluptatum dolorem! Dolores! Sociosqu commodo nobis
                imperdiet lacinia.
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-5">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full rounded-xl bg-natrader-backgorund px-5 py-4 outline-none transition focus:ring-2 focus:ring-natrader-green"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full rounded-xl bg-natrader-backgorund px-5 py-4 outline-none transition focus:ring-2 focus:ring-natrader-green"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl bg-natrader-backgorund px-5 py-4 outline-none transition focus:ring-2 focus:ring-natrader-green"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Enter your message*"
                className="w-full resize-none rounded-xl bg-natrader-backgorund px-5 py-4 outline-none transition focus:ring-2 focus:ring-natrader-green"
              />

              {/* Button */}
              <button
                type="submit"
                className="rounded-full bg-natrader-green px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#5a8d12]"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}