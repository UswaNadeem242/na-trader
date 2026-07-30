import Link from "next/link";


import { featureData } from "@/constant";
import Image from "next/image";

export default function Feature() {

  return (
    <section className="relative pb-20 mt-50 lg:mt-60">
      <div className="max-w-7xl mx-auto px-5">

        {/* Main Card */}
        <div className="-mt-[150px] rounded-[20px] border-2 border-[#D7F0AF] bg-white p-8 md:p-10 lg:p-12 shadow-sm">

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10">

            {featureData?.map((feature, index) => (
              <div key={index} className={feature.border}>

                {/* Icon */}
                <div className="mb-5">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* Content */}
                <div>

                  <h5 className="text-[24px] font-bold mb-3">
                    <Link
                      href="#"
                      className="text-[#1B1A1A] transition duration-300 hover:text-natrader-green"
                    >
                      {feature.title}
                    </Link>
                  </h5>

                  <p className="text-[#676767] leading-8">
                    {feature.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}