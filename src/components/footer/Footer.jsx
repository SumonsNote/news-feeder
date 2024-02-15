import lwsLogo from "../../assets/logo_light.png";
import Copyright from "./Copyright";
import FooterCategory from "./FooterCategory";
import Socials from "./Socials";
import Subscribe from "./Subscribe";
import TermsCon from "./TermsCon";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
      <div className="container mx-auto">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
            <img
              className="max-md:col-span-2"
              src={lwsLogo}
              alt="Light Logo of LWS"
            />
            <FooterCategory />
            <TermsCon />
            <Socials />
          </div>
          <Subscribe />
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
