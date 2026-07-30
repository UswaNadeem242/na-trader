// src/components/home/index.jsx

import Hero from "./hero/hero";
import AboutUs from "./aboutus/AboutUs";
import OurServices from "./ourservices/ourservices";
import MoreAbout from "./moreabout/moreabout";
import Portfolio from "./portfolio/portfolio";
// import Pricing from "./pricing/pricing";
import Testimonial from "./testimonial/testimonial";
import Blogs from "./blogs/blogs";
import ContactUs from "./contactus/contactus";
import Work from "./work/work";
import Pricingcomponent from "./pricing/pricing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <MoreAbout />
      <Portfolio />
      <Pricingcomponent/>
      <Testimonial />
      <Blogs />
      <Work />
      <ContactUs />
    </>
  );
}