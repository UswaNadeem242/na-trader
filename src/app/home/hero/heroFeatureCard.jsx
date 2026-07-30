import { BatteryCharging, Leaf } from "lucide-react";

export default function HeroFeatureCard({
  value,
  unit,
  title,
  type,
}) {
  const Icon =
    type === "battery" ? BatteryCharging : Leaf;

  return (
    <div
      className="
        rounded-2xl
        bg-white/10
        backdrop-blur-md
        border
        border-white/20
        p-5
        transition-all
        duration-300
        hover:-translate-y-2
        hover:bg-white/15
      "
    >
      {/* Top */}

      <div className="mb-6 flex items-center justify-between">

        <h3 className="flex items-end gap-1 text-white">

          <span className="text-4xl font-bold">
            {value}
          </span>

          <span className="text-lg font-medium">
            {unit}
          </span>

        </h3>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-lime-500
            text-black
          "
        >
          <Icon size={24} />
        </div>

      </div>

      {/* Bottom */}

      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-widest
          text-white
        "
      >
        {title}
      </p>
    </div>
  );
}