"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constant";
import logo from "@/assets/images/ev-logo-04.png"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };


    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = usePathname();

  //  const isHome = location.pathname === "/";


  const leftMenu = menuItems.slice(0, 4);
  const rightMenu = menuItems.slice(4);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-[#052730]/95 backdrop-blur-md shadow-lg py-5"
        : "bg-transparent py-3"
        }`}
    >
      <div className="mx-auto max-w-[1450px] px-6">

        <nav className="flex items-center justify-between">

          {/* Mobile Logo */}
          <Link href="/" className="xl:hidden">
            <Image
              src={logo}
              alt="na-trader"
              width={200}
              height={200}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu Starts Here */}
          {/* Desktop Navigation */}
          <div className="hidden xl:flex w-full items-center justify-between">

            {/* Left Menu */}
            <ul className="ml-16 flex items-center gap-12 ">

              {leftMenu.map((item) => (
                <li
                  key={item.title}
                  className="group relative"
                >
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-[15px] font-semibold uppercase tracking-wide text-white transition hover:text-[#87C332]"
                      >
                        {item.title}

                        <ChevronDown
                          size={16}
                          className="transition duration-300 group-hover:rotate-180"
                        />
                      </button>

                      <div
                        className="
                invisible
                absolute
                left-0
                top-full
                mt-6
                w-64
                rounded-xl
                bg-white
                py-3
                opacity-0
                shadow-2xl
                transition-all
                duration-300
                group-hover:visible
                group-hover:mt-4
                group-hover:opacity-100
              "
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.path}
                            className="block px-6 py-3 text-[15px] text-gray-700 transition hover:bg-natrader-green hover:text-white"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={
                        `text-[15px] font-semibold uppercase tracking-wide transition ${location === item.path
                          ? "text-[#87C332]"
                          : "text-white hover:text-[#87C332]"
                        }`
                      }
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}

            </ul>

            {/* Center Logo */}
            <Link
              href="/"
              className="mx-16 flex-shrink-0"
            >
              <Image
                src={logo}
                alt="EVDriveX"
                className="w-36 transition duration-300 hover:scale-105"
              />
            </Link>

            {/* Right Menu */}
            <ul className="mr-16 flex items-center gap-12">

              {rightMenu.map((item) => (
                <li
                  key={item.title}
                  className="group relative"
                >
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-[15px] font-semibold uppercase tracking-wide text-white transition hover:text-[#87C332]"
                      >
                        {item.title}

                        <ChevronDown
                          size={16}
                          className="transition duration-300 group-hover:rotate-180"
                        />
                      </button>

                      <div
                        className="
                invisible
                absolute
                right-0
                top-full
                mt-6
                w-64
                rounded-xl
                bg-white
                py-3
                opacity-0
                shadow-2xl
                transition-all
                duration-300
                group-hover:visible
                group-hover:mt-4
                group-hover:opacity-100
              "
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.path}
                            className="block px-6 py-3 text-[15px] text-gray-700 transition hover:bg-natrader-green hover:text-white"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={
                        `text-[15px] font-semibold uppercase tracking-wide transition ${location === item.path
                          ? "text-[#87C332]"
                          : "text-white hover:text-[#87C332]"
                        }`
                      }
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}

            </ul>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-white/20 p-2 text-white transition hover:bg-white hover:text-black xl:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* Mobile Menu */}
          <div
            className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileOpen
              ? "max-h-[900px] mt-6"
              : "max-h-0"
              }`}
          >
            <div className="rounded-2xl bg-[#052730] shadow-2xl">

              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-white/10 last:border-none"
                >

                  {/* Normal Link */}
                  {!item.children ? (
                    <Link
                      href={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={
                        `block px-6 py-4 text-sm font-semibold uppercase tracking-wide transition ${location === item.path
                          ? "bg-natrader-green text-white"
                          : "text-white hover:bg-natrader-green"
                        }`
                      }
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      {/* Dropdown Button */}
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title
                              ? null
                              : item.title
                          )
                        }
                        className="flex w-full items-center justify-between px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-natrader-green"
                      >
                        {item.title}

                        <ChevronDown
                          size={18}
                          className={`transition duration-300 ${activeDropdown === item.title
                            ? "rotate-180"
                            : ""
                            }`}
                        />
                      </button>

                      {/* Dropdown Items */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.title
                          ? "max-h-[600px]"
                          : "max-h-0"
                          }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.path}
                            onClick={() => {
                              setMobileOpen(false);
                              setActiveDropdown(null);
                            }}
                            className={
                              `block bg-[#0b3741] px-10 py-3 text-sm transition ${location === child.path
                                ? "text-[#87C332]"
                                : "text-gray-300 hover:text-[#87C332]"
                              }`
                            }
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}