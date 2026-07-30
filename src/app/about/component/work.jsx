
import { WorkItemsData } from "@/constant";
import Image from "next/image";
import work4 from "@/assets/images/electric-car-charging-connected-to-the-grid-2023-02-07-21-01-15-utc.jpg";



export default function Work() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-20 lg:py-24 rounded-r-[30px] md:mr-[5%]"
      style={{
        backgroundImage: `url(${work4.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 rounded-r-[30px] bg-gradient-to-r from-[#052730] to-natrader-green opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">

          <h6 className="uppercase tracking-[3px] text-white font-semibold mb-3">
            Why Choose Us
          </h6>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Professional{" "}
            <span className="text-[#87C332]">
              EV Charging
            </span>{" "}
            Solution For You
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-8">

          {WorkItemsData?.map((item, index) => (
            <div
              key={index}
              className={`relative text-center ${item.offset ? "xl:mt-10" : ""
                }`}
            >
              {/* Number */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">

                <div className="rounded-full border-[3px] border-[#D7F0AF] bg-natrader-green p-2">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white">
                    {item.number}
                  </div>

                </div>

              </div>

              {/* Image */}
              <div className="mb-6 flex justify-center">

                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-[150px] w-[150px] rounded-full object-cover"
                />

              </div>

              {/* Content */}
              <div>

                <h4 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="leading-8 text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}