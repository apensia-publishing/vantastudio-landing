import HamburgerButton from "../components/HamburgerButton";
import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";
import HamburgerMenu from "../components/HamburgerMenu";
import FooterSection from "@/components/section/Footer";

export default function AboutPage() {
  const { setHamburgerOpen } = useHandleHamburgerStore();

  return (
    <main>
      <HamburgerMenu />

      {/* Hero section */}
      <section
        id="hero"
        className="w-full h-svh bg-[url('https://images.pexels.com/photos/3987481/pexels-photo-3987481.jpeg')] bg-cover p-4 sm:p-6 text-white flex flex-col justify-between"
      >
        <div className="w-full flex justify-between items-center">
          <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl">
            about us
          </h1>
          <HamburgerButton onClick={() => setHamburgerOpen(true)} />
        </div>
        <div>
          <p className="leading-7 text-lg sm:text-xl sm:leading-8 md:text-2xl md:leading-10">
            We don't just design buildings
            <br />
            We create timeless spaces that tell stories
          </p>
        </div>
        <div>
          <button className="text-lg underline">Show More</button>
        </div>
      </section>

      {/* About section */}
      <section
        id="about"
        className="w-full flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] lg:grid-rows-[40svh_60svh] p-4 my-20 gap-20 sm:p-6 lg:gap-5"
      >
        <div>
          <h1 className="text-[max(1.75rem,3vw)] lg:text-2xl lg:max-w-[30rem]">
            At Vanda Studio, architecture is more than form and function. It's
            the art of shaping human experience.
          </h1>
        </div>
        <div className="hidden lg:block relative">
          <div className="aspect-video bg-[url('https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg')] bg-cover w-1/2 h-1/2" />
          <div className="aspect-video bg-[url('https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg')] bg-cover w-1/2 h-1/2 absolute bottom-0 right-0" />
        </div>
        <div className="h-[50svh] lg:h-auto border border-blue-400 bg-[url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg)] bg-cover" />
        <div className="relative">
          <p className="text-lg lg:absolute lg:bottom-0 lg:left-0">
            Our portfolio spans private residences, commercial properties, and
            cultrual landmarks. Each project tailored to reflect the character,
            needs, and aspirations of our clients. From the first sketch to the
            final detail, we approach every project with purpose, precision, and
            passion.
          </p>
        </div>
      </section>

      {/* Experience section */}
      <section
        id="experience"
        className="w-full flex flex-col justify-center p-4 my-20 gap-5 sm:p-6"
      >
        <h1 className="uppercase text-center text-[12vw] text-nowrap text-transparent bg-[linear-gradient(#fff,#efb100)] bg-clip-text lg:text-left lg:text-6xl">
          experience
        </h1>
        <div className="grid lg:grid-cols-[60%_40%] lg:h-[60svh] gap-5 w-full">
          <div className="bg-midnight flex justify-center items-center">
            <div className="lg:max-w-[20rem]">
              <h2 className="mb-5 font-semibold lg:text-3xl">1000+ Clients</h2>
              <p className="leading-7">
                We collaborate with clients locally and internationally. What
                unites every project is our commitment to quality, timeless
                aesthetics and a sense of place.
              </p>
            </div>
          </div>
          <div className="bg-[url('https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg')] bg-cover" />
        </div>
      </section>

      {/* Footer section */}
      <FooterSection />
    </main>
  );
}
