// import { Link } from "react-router-dom";
import Image from "next/image";
// import bgCircle from "../../../../../../public/assets/images/img15_circle.png";
const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "80+", label: "Service Stations" },
  { number: "15K+", label: "Positive Reviews" },
  { number: "20K+", label: "Happy Customers" },
];

export default function MoreAbout() {
  return (
    <section
      className="relative z-10 mx-[5%] rounded-3xl bg-[#052730] pt-10 bg-no-repeat bg-center bg-[length:50%]"
      style={{ backgroundImage: `url(/assets/images/img15_circle.png)` }}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="xl:px-0 text-center xl:text-left">
          <div className="grid items-center gap-12 xl:grid-cols-2">

            {/* Left Side */}
            <div>
              <div className="pb-10 xl:pb-20 xl:-mb-24">

                {/* Heading */}
                <div className="mb-6">
                  <h6 className="mb-1 text-sm font-medium uppercase tracking-widest text-[#87C332]">
                    Who we are
                  </h6>

                  <h2 className="border-l-4 border-[#87C332] pl-4 text-4xl font-bold leading-tight text-white">
                    Effortless Charging from{" "}
                    <span className="text-[#87C332]">
                      Best in business
                    </span>
                  </h2>
                </div>

                {/* Paragraphs */}
                <div className="text-white">
                  <p className="mb-4 leading-8 text-gray-300">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>

                  <p className="mb-6 leading-8 text-gray-300">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                  </p>

                  <a
                    href="/about.html"
                    className="inline-flex rounded-full bg-[#87C332] px-8 py-3 font-semibold text-white transition hover:bg-[#6da32b]"
                  >
                    Discover More
                  </a>

                  {/* Counter */}
                  <div className="mt-10 grid grid-cols-1 gap-y-8 text-center md:grid-cols-2 xl:text-left">
                    {stats.map((item, index) => (
                      <div
                        key={index}
                        className={`pb-6 ${index < 2
                          ? "border-b border-gray-600"
                          : ""
                          }`}
                      >
                        <h2 className="text-5xl font-bold text-[#87C332]">
                          {item.number}
                        </h2>

                        <span className="mt-2 block text-sm font-semibold uppercase tracking-wider text-white">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div className="relative text-center">
                <Image
                  src="/assets/images/electric-vehicle-charging-png.png"
                  alt="Charging"
                  width={500}
                  height={500}
                  className="mx-auto w-full rounded-2xl md:w-1/2 xl:w-3/4"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}