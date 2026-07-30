import Image from "next/image";


export default function HeroHeader() {
  return (
    <div className="mb-16">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left */}

        <div className="lg:col-span-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
            Eco Friendly Solution
          </p>

          <h1 className="border-l-4 border-lime-500 pl-6 text-5xl font-black uppercase leading-tight text-white md:text-6xl xl:text-7xl">
            <span className="text-lime-400">Powering</span>
            <br />
            A Sustainable Tomorrow
          </h1>
        </div>

        {/* Right */}

        <div className="flex justify-center lg:col-span-4 lg:justify-end">
          <a
            href="/service-list"
            className="group relative flex h-40 w-40 items-center justify-center"
          >
            <Image
              src="/assets/images/top-right.png"
              alt="Explore"
              width={64}
              height={64}
              className="absolute h-16 w-16 transition-transform duration-500 group-hover:scale-110"
            />

            <svg
              className="animate-[spin_12s_linear_infinite]"
              viewBox="0 0 200 200"
              width="170"
              height="170"
            >
              <defs>
                <path
                  id="circle"
                  d="
                    M100,100
                    m-75,0
                    a75,75 0 1,1 150,0
                    a75,75 0 1,1 -150,0
                  "
                />
              </defs>

              <text
                fill="white"
                fontSize="15"
                fontWeight="700"
                letterSpacing="2"
                className="uppercase"
              >
                <textPath href="#circle">
                  Explore Catalog • Explore Catalog •
                </textPath>
              </text>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}