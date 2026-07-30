// Images
import carWithPlug from "@/assets/images/PNG/car_with_plug.png";
import flash from "@/assets/images/PNG/flash.png";
import carWithBattery from "@/assets/images/PNG/car_with_battery.png";
import work1 from "@/assets/images/modern-electric-car-charging-at-outdoors-ev-statio-2023-03-17-23-18-45-utc.jpg";
import work2 from "@/assets/images/hand-holding-electric-car-charger-electric-vehicl-2022-11-16-14-02-45-utc.jpg";
import work3 from "@/assets/images/indian-businessman-charging-car-at-outdoor-ev-stat-2023-03-17-23-18-50-utc.jpg";
import work4 from "@/assets/images/electric-car-charging-connected-to-the-grid-2023-02-07-21-01-15-utc.jpg";
import img1 from "@/assets/images/electric-car-charging-connected-to-the-grid-2023-02-07-21-01-15-utc.jpg"
import img2 from "@/assets/images/rearview-car-parked-in-luxury-showroom-car-dealer-2023-03-30-01-57-28-utc.jpg"
import img3 from "@/assets/images/hand-holding-electric-car-charger-electric-vehicl-2022-11-16-14-02-45-utc.jpg"
import img4 from "@/assets/images/indian-businessman-charging-car-at-outdoor-ev-stat-2023-03-17-23-18-50-utc.jpg"
export const menuItems = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "About",
    path: "/about",
  },

  {
    title: "Services",
    children: [
      { title: "Service List", path: "/service-list" },
      { title: "Service Detail", path: "/service-detail" },
    ],
  },

  {
    title: "Projects",
    children: [
      { title: "Project List", path: "/project-list" },
      { title: "Project Detail", path: "/project-detail" },
    ],
  },

  {
    title: "Pages",
    children: [
      { title: "Our Team", path: "/team" },
      { title: "Career", path: "/career-list" },
      { title: "Gallery", path: "/gallery" },
      { title: "Testimonials", path: "/testimonial" },
      { title: "Pricing", path: "/price" },
      { title: "FAQ", path: "/faq" },
    ],
  },

  {
    title: "Shop",
    children: [
      { title: "Products", path: "/product-list" },
      { title: "Cart", path: "/cart" },
      { title: "Checkout", path: "/checkout" },
    ],
  },

  {
    title: "Blogs",
    children: [
      { title: "Blog List", path: "/blog-list" },
      { title: "Blog Detail", path: "/blog-detail" },
    ],
  },

  {
    title: "Contact",
    path: "/contact",
  },
];
// home page data
export const HomeServices = [
  { title: "Eco-friendly Charging", value: 90 },
  { title: "Energy Storage Systems", value: 85 },
  { title: "EV Drivers Services", value: 89 },
];



export const Homeblogs = [
  {
    id: 1,
    image: img1,
    tag: "Electric",
    title: "Business benefits from EV management software",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor architecto ea veritatis.",
    date: "January 10, 2025",
    comments: "1 Comment",
  },
  {
    id: 2,
    image: img2,
    tag: "Electric",
    title: "Solar cells for electric charge appeared on sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor architecto ea veritatis.",
    date: "January 10, 2025",
    comments: "1 Comment",
  },
  {
    id: 3,
    image: img3,
    tag: "Electric",
    title: "Auto dealership need EV charging station",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor architecto ea veritatis.",
    date: "January 10, 2025",
    comments: "1 Comment",
  },
];

export const HomeFeaturedBlog = {
  image: img4,
  title: "What is EV charging load management",
  tag: "Charger",
  date: "January 10, 2025",
};


//   about page

export const featureData = [
  {
    title: "Fast DC Charging",
    image: carWithPlug,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    border: "lg:pr-10",
  },
  {
    title: "Save More Energy",
    image: flash,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    border:
      "lg:px-10 lg:border-x border-[#5F5F5F21] md:border-l md:border-r md:px-8 md:pr-0 md:border-r-0",
  },
  {
    title: "Fast DC Charging",
    image: carWithBattery,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    border:
      "lg:pl-10 md:border-t md:border-[#5F5F5F21] md:pt-10 md:pl-0 lg:border-none lg:pt-0",
  },
];


export const WorkItemsData = [
  {
    number: "01.",
    title: "Fast Charging",
    image: work1,
    offset: false,
  },
  {
    number: "02.",
    title: "Good Management",
    image: work2,
    offset: true,
  },
  {
    number: "03.",
    title: "Renewable Energy",
    image: work3,
    offset: false,
  },
  {
    number: "04.",
    title: "Quality Charger",
    image: work4,
    offset: true,
  },
];

export const StepsData = [
  {
    number: "01.",
    title: "Fast Charging",
    description:
      "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor amet.",
  },
  {
    number: "02.",
    title: "Good Management",
    description:
      "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor amet.",
  },
  {
    number: "03.",
    title: "Renewable Energy",
    description:
      "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor amet.",
  },
  {
    number: "04.",
    title: "Quality Charger",
    description:
      "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor amet.",
  },
];


// footer data
export const QuickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Attorneys", href: "#" },
  { name: "News & Articles", href: "/blog" },
  { name: "Policies", href: "#" },
  { name: "Contact Us", href: "/contact" },
];

export const FeatureLinks = [
  { name: "Support Plans", href: "#" },
  { name: "Benefits", href: "#" },
  { name: "Subscriptions", href: "#" },
  { name: "Payment Methods", href: "#" },
  { name: "Onsite Payment", href: "#" },
  { name: "Merchant Refund", href: "#" },
];
