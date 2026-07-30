import HeroFeatureCard from "./heroFeatureCard";

export default function HeroSlide({ slide }) {
  return (
    <div className="grid items-center gap-12 xl:grid-cols-12">
      {/* ================= LEFT ================= */}

      <div className="order-2 xl:order-1 xl:col-span-8">
        <div className="flex justify-center">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full max-w-4xl object-contain -mb-6 "
          />
        </div>
      </div>

      {/* ================= RIGHT ================= */}

      <div className="order-1 xl:order-2 xl:col-span-4">
        <div className="mx-auto max-w-md xl:mx-0">
          <h2 className="mb-4 text-3xl font-bold text-white">
            {slide.title}
          </h2>

          <p className="mb-8 leading-8 text-gray-300">
            {slide.description}
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {slide.features.map((feature, index) => (
              <HeroFeatureCard
                key={index}
                value={feature.value}
                unit={feature.unit}
                title={feature.title}
                type={feature.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}