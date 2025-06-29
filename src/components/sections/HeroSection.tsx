import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";
import HamburgerButton from "../ui/HamburgerButton";

export default function HeroSection() {
  const { setHamburgerOpen } = useHandleHamburgerStore();

  return (
    <section
      id="hero"
      className="w-full h-svh bg-[url('../hero_bg.jpg')] bg-cover bg-no-repeat p-4 text-white flex flex-col justify-between sm:p-6"
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-3xl sm:text-[2.5rem] md:text-6xl">
          vanda studio
        </h1>
        <HamburgerButton onClick={() => setHamburgerOpen(true)} />
      </div>
      <div>
        <p className="leading-10 text-[clamp(1.125rem,5vw,1.75rem)] sm:text-2xl">
          Architecture Beyond Space
          <br />
          Design Beyond Experience
        </p>
      </div>
      <div>
        <button className="text-lg underline">Show More</button>
      </div>
    </section>
  );
}
