import { StepsData } from "@/constant";

export default function HowWork() {
  return (
    <section className="bg-natrader-backgorund py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h6 className="uppercase tracking-widest font-semibold text-natrader-green mb-2">
            How we work
          </h6>

          <h2 className="text-4xl font-bold text-[#052730] leading-tight">
            Professional{" "}
            <span className="text-natrader-green">EV Charging</span> solution for you
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center dashed line */}
          <div className="hidden md:block absolute left-1/2 top-[10%] h-[80%] border-r-2 border-dashed border-gray-400/40 -translate-x-1/2"></div>

          <div className="space-y-10">

            {StepsData?.map((step, index) => {
              const right = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`relative flex ${right ? "md:justify-end" : "md:justify-start"
                    }`}
                >
                  <div className="md:w-1/2 relative">

                    {/* Number Circle */}
                    <div
                      className={`w-16 h-16 rounded-full bg-natrader-green border-[6px] border-natrader-backgorund
                      flex items-center justify-center text-white font-bold text-lg
                      md:absolute md:top-1/2 md:-translate-y-1/2
                      ${right
                          ? "md:-left-8"
                          : "md:-right-8"
                        }
                      mb-5 md:mb-0`}
                    >
                      {step.number}
                    </div>

                    {/* Card */}
                    <div
                      className={`relative bg-[#E6F1D7] border-4 border-white rounded-2xl p-8
                      ${right
                          ? "md:ml-12"
                          : "md:mr-12"
                        }`}
                    >

                      {/* Arrow */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2
                        w-5 h-5 bg-[#87C332] rotate-45
                        ${right
                            ? "-left-2.5"
                            : "-right-2.5"
                          }`}
                      ></div>

                      <h4 className="text-2xl font-semibold text-[#052730] mb-4">
                        {step.title}
                      </h4>

                      <p className="text-gray-600 leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}