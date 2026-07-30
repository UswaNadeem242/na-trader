"use client"
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your newsletter API here
    console.log("Subscribed:", email);

    setEmail("");
  };

  return (
    <section className="relative z-10 text-white -bottom-15" >
      <div className="max-w-7xl mx-auto px-5">
        <div className="rounded-[20px] bg-natrader-green p-8 lg:p-10">
          <div className="grid xl:grid-cols-12 gap-8 items-center">
            {/* Left Side */}
            <div className="xl:col-span-5 text-center xl:text-left">
              <h6 className="mb-2 uppercase tracking-[3px] font-semibold text-white">
                Subscribe Newsletter
              </h6>

              <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-white">
                Don't miss our future updates! Get subscribed today!
              </h3>
            </div>

            {/* Right Side */}
            <div className="xl:col-span-7 text-center xl:text-left">
              <p className="mb-6 leading-8 text-white/90">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 w-full rounded-full border border-white/20 bg-white px-6 text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-white"
                />

                <button
                  type="submit"
                  className="h-14 rounded-full bg-[#052730] px-8 font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[#052730]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}