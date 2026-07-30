import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import evLogo from "@/assets/images/ev-logo-04.png";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { FeatureLinks, QuickLinks } from "@/constant";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#052730] to-[#1B1A1A] pt-20 pb-8">

      <div className="mx-auto max-w-7xl px-5">

        {/* ================= Newsletter ================= */}

        <div className="border-b border-white/20 pb-12">

          <div className="grid gap-12 xl:grid-cols-12">

            {/* Left */}

            <div className="xl:col-span-8">

              <h6 className="mb-2 text-sm lg:text-left text-center font-semibold uppercase tracking-widest text-white">
                Subscribe Newsletter
              </h6>

              <h2 className="max-w-2xl lg:text-left text-center text-4xl font-bold leading-tight text-white">
                Don't miss our future updates! Get subscribed today!
              </h2>

              <div className="mt-8 flex flex-col gap-4 md:flex-row">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 w-full lg:w-120 rounded-lg border border-white/20 bg-white px-5 outline-none transition focus:border-lime-500"
                />

                <button className="h-14 rounded-lg bg-lime-600 px-10 font-semibold uppercase text-white transition hover:bg-lime-700">
                  Subscribe
                </button>

              </div>

            </div>

            {/* Quick Links */}

            <div className="xl:col-span-2 text-center xl:text-left ">

              <h3 className="mb-3 text-2xl font-semibold text-white">
                Quick Link
              </h3>

              <div className="mx-auto mb-8 h-[2px] w-16 bg-white xl:mx-0"></div>

              <ul className="space-y-5">

                {QuickLinks?.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 transition hover:text-lime-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}

              </ul>

            </div>

            {/* Features */}

            <div className="xl:col-span-2 text-center xl:text-left">

              <h3 className="mb-3 text-2xl font-semibold text-white">
                Features
              </h3>

              <div className="mx-auto mb-8 h-[2px] w-16 bg-white xl:mx-0"></div>

              <ul className="space-y-5">

                {FeatureLinks?.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 transition hover:text-lime-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>
        {/* ================= Footer Bottom ================= */}

        <div className="flex flex-col items-center justify-between gap-6 py-10 lg:flex-row">

          {/* Logo */}

          <div className="flex justify-center lg:justify-start">
            <Image
              src={evLogo}
              alt="EVDriveX Logo"
              width={200}
              height={200}
              className="w-40 md:w-48"
            />
          </div>

          {/* Social Icons */}

          <div className="flex items-center gap-3">
            {[
              { icon: FaFacebookF, href: "#" },
              { icon: FaTwitter, href: "#" },
              { icon: FaGooglePlusG, href: "#" },
              { icon: FaInstagram, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B2B2B] text-white transition hover:bg-natrader-green"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>

        {/* ================= Copyright ================= */}

        <div className="relative overflow-hidden rounded-2xl bg-white/10 px-6 py-6">

          {/* Overlay */}

          <div className="absolute inset-0 bg-white opacity-10"></div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 xl:flex-row">

            {/* Contact Info */}

            <div>

              <ul className="flex flex-col items-center gap-5 text-sm text-white md:flex-row md:flex-wrap xl:justify-start">

                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>256 Elizabeth Ave, CA, 90025</span>
                </li>

                <li>
                  <a
                    href="tel:+56923162156"
                    className="flex items-center gap-2 transition hover:text-lime-400"
                  >
                    <Phone size={16} />
                    +569 2316 2156
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@evdrivex.com"
                    className="flex items-center gap-2 transition hover:text-lime-400"
                  >
                    <Mail size={16} />
                    info@evdrivex.com
                  </a>
                </li>

              </ul>

            </div>

            {/* Copyright */}

            <div className="text-center xl:text-right">

              <p className="text-sm text-white">
                © 2025 EVDriveX. All rights reserved.
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}