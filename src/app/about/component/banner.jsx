import Link from "next/link";
import bannerImage from "@/assets/images/ev-vehicle.jpg";

export default function Banner() {
  return (
   <section
  className="relative min-h-[500px] lg:min-h-[500px] overflow-hidden rounded-bl-[20px]  rounded-br-[20px] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bannerImage.src})` }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#052730]/70" />
      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] items-center justify-center ">
        <div className="w-full text-center text-white lg:w-3/4">
          <h1 className="mb-5 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            About Us
          </h1>

          <ul className="flex items-center justify-center gap-5 text-lg md:text-xl">
            <li>
              <Link
                href="/"
                className="transition hover:text-[#87C332]"
              >
                Home
              </Link>
            </li>

            <li className="text-[#87C332] text-xl">★</li>

            <li>About Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
}