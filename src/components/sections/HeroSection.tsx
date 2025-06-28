import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";
import HamburgerButton from "../ui/HamburgerButton";

export default function HeroSection() {
  const { setHamburgerOpen } = useHandleHamburgerStore();

  return (
    <section
      id="hero"
      className="w-full h-svh bg-[url('../hero_bg.jpg')] bg-cover bg-no-repeat p-4 text-white flex flex-col justify-between"
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-[2rem]">vanda studio</h1>
        <HamburgerButton onClick={() => setHamburgerOpen(true)} />
      </div>
      <div>
        <p className="leading-6 text-md">
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
