import Image from "next/image";

const services = [
  {
    title: "Home Charging",
    image: "/assets/images/PNG/filling_station.png",
  },
  {
    title: "Renewable Energy",
    image: "/assets/images/PNG/car_with_flash.png",
  },
  {
    title: "EV Drivers",
    image: "/assets/images/PNG/car_eco.png",
  },
  {
    title: "AC Charger",
    image: "/assets/images/PNG/accumulator.png",
  },
  {
    title: "DC Charger",
    image: "/assets/images/PNG/battery_full.png",
  },
  {
    title: "24/7 Support",
    image: "/assets/images/car_with_plug.png",
  },
];
export default function OurServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-natrader-backgorund via-natrader-backgorund to-transparent">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h6 className="uppercase text-[#87C332] font-semibold tracking-wider mb-3">
                Our Services
              </h6>

              <h2 className="text-4xl font-bold leading-tight lg:border-l-4 lg:border-[#87C332] lg:pl-5">
                Best EV{" "}
                <span className="text-[#87C332]">
                  charging service
                </span>{" "}
                for your electric vehicle
              </h2>
            </div>

            <div>
              <p className="text-gray-600 mb-6 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi dolor architecto molestias aritatis minima accusamus.
              </p>

              <a
                href="/service-list"
                className="inline-flex items-center bg-[#87C332] hover:bg-[#6ea524] text-white px-7 py-3 rounded-full transition duration-300"
              >
                More Services
              </a>
            </div>

          </div>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="
              bg-white
              border-2
              border-[#E3F2CF]
              rounded-3xl
              shadow-md
              p-8
              bg-[url('/images/img15_circle.png')]
              bg-cover
              bg-center
              transition-all
              duration-300
              hover:bg-[#052730]
              hover:text-white
              group
              "
            >
              <div className="mb-6">
                {/* <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                /> */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h4 className="text-2xl font-semibold mb-4">
                <a
                  href="/service-detail"
                  className="group-hover:text-white transition"
                >
                  {service.title}
                </a>
              </h4>

              <p className="text-gray-600 group-hover:text-gray-200 mb-6 leading-7 transition">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nulla voluptate amet enim atque impedit inventore.
              </p>

              <a
                href="/service-detail"
                className="
                inline-block
                border
                border-[#87C332]
                rounded-full
                px-6
                py-3
                transition
                duration-300
                group-hover:border-transparent
                group-hover:bg-[#87C332]
                group-hover:text-white
                "
              >
                Learn More
              </a>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}