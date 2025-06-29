import { Link } from "react-router";
import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";
import HamburgerButton from "../ui/HamburgerButton";

export default function HeroSection() {
  const { setHamburgerOpen } = useHandleHamburgerStore();

  return (
    <>
      <section
        id="hero"
        className="w-full h-svh bg-[url('../hero_bg.jpg')] bg-cover bg-no-repeat p-4 text-white flex flex-col justify-between sm:p-6"
      >
        <div className="w-full flex justify-between items-center">
          <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl">
            vanda studio
          </h1>
          <HamburgerButton onClick={() => setHamburgerOpen(true)} />
        </div>
        <div>
          <p className="leading-7 text-lg sm:text-xl sm:leading-8 md:text-2xl md:leading-10">
            Architecture Beyond Space
            <br />
            Design Beyond Experience
          </p>
        </div>
        <div>
          <button className="text-lg underline">Show More</button>
        </div>
      </section>

      {/* About section */}
      <section
        id="about"
        className="w-full flex flex-col items-center justify-center p-4 my-20 gap-5 sm:p-6"
      >
        <div className="w-full">
          <h1 className="uppercase text-center text-[12vw] text-nowrap text-transparent bg-[linear-gradient(#fff,#efb100)] bg-clip-text lg:text-left lg:text-6xl">
            about studio
          </h1>
        </div>
        <div className="grid w-full gap-5 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[2fr_1fr] lg:h-[500px]">
          <div
            id="image_wrapper"
            className="bg-[url('../about_bg.jpg')] bg-cover"
          ></div>
          <div
            id="about_wrapper"
            className="bg-[#CDC4A9] p-10 lg:p-10 flex flex-col gap-5 justify-center"
          >
            <h2 className="text-xl lg:text-2xl">
              Driven By dignity.
              <br />
              Grounded In Beauty.
            </h2>
            <p className="">
              We are a boutique architecture studio specializing in residential
              and commercial spaces for mordern living. Our mission is to create
              meaningful environments that reflect who you are and how you live.
              Every project is an opportunity to push boundaries - with clarity,
              elegance, and intent.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
