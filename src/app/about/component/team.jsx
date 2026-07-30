import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Images
import review1 from "@/assets/images/review1.jpg";
import review2 from "@/assets/images/review2.jpg";
import review3 from "@/assets/images/review3.jpg";
import review4 from "@/assets/images/review4.jpg";
import Image from "next/image";

const teamMembers = [
  {
    name: "Robert Gates",
    role: "Engineer",
    image: review3,
  },
  {
    name: "Esther Howard",
    role: "Manager",
    image: review1,
  },
  {
    name: "Kelly Housen",
    role: "Technologist",
    image: review2,
  },
  {
    name: "Jack South",
    role: "Engineer",
    image: review4,
  },
];

export default function Team() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h6 className="uppercase tracking-[3px] font-semibold text-natrader-green mb-3">
            Our Team
          </h6>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B1A1A]">
            Our Experience{" "}
            <span className="text-natrader-green">Team</span> Member
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-[20px] border-2 border-[#D7F0AF] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src={member.image}
                  alt={member.name}
                  className="h-[160px] w-[160px] rounded-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="mb-5">
                <h5 className="mb-2 text-2xl font-bold">
                  <Link
                    href="/team-detail"
                    className="transition-colors duration-300 hover:text-natrader-green"
                  >
                    {member.name}
                  </Link>
                </h5>

                <span className="font-semibold text-natrader-green">
                  {member.role}
                </span>

                <p className="mt-3 leading-7 text-gray-600">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-3">
                <Link
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6D8] text-natrader-green transition-all duration-300 hover:bg-natrader-green hover:text-white"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6D8] text-natrader-green transition-all duration-300 hover:bg-natrader-green hover:text-white"
                >
                  <FaTwitter />
                </Link>

                <Link
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6D8] text-natrader-green transition-all duration-300 hover:bg-natrader-green hover:text-white"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}