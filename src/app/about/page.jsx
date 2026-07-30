import AboutUs from "./component/aboutus";
import Banner from "./component/banner";
import Feature from "./component/feature";
import Mission from "./component/mission";
import Newsletter from "./component/newsletter";
import Team from "./component/team";
import Work from "./component/work";



export default function About()
 {
  return (
    <>
      <Banner/>
      <AboutUs/>
      <Feature/>
      <Work/>
      <Mission/>
      <Team/>
      <Newsletter/>
    </>
  );
}