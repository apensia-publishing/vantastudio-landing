import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type HamburgerButtonProps = {
  hamburgerOpen: boolean;
};

function HamburgerButton({
  hamburgerOpen,
  ...props
}: HamburgerButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const hamburgerButtonRef = useRef(null);
  useGSAP(
    () => {
      if (hamburgerOpen) {
        gsap.to("#top_line", {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "right",
        });
        gsap.to("#middle_line", {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "right",
        });
        gsap.to("#bottom_line", {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "right",
        });
      }
    },
    { scope: hamburgerButtonRef, dependencies: [hamburgerOpen] }
  );

  return (
    <button
      id="hamburger_button"
      className="w-8 h-5 flex flex-col items-end justify-center relative"
      ref={hamburgerButtonRef}
      {...props}
    >
      <div
        aria-label="Top line"
        id="top_line"
        className="w-3/4 h-0.5 bg-white absolute top-0 right-0"
      />
      <div
        aria-label="Middle line"
        className="w-1/2 h-0.5 bg-white"
        id="middle_line"
      />
      <div
        aria-label="Bottom line"
        className="w-full h-0.5 bg-white absolute bottom-0 right-0"
        id="bottom_line"
      />
    </button>
  );
}

export default function HeroSection() {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  console.log(hamburgerOpen);
  const handleHamburgerOpen = () => setHamburgerOpen(true);

  return (
    <section
      id="hero"
      className="w-full h-svh bg-[url('../hero_bg.jpg')] bg-cover bg-no-repeat p-4 text-white flex flex-col justify-between"
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-[2rem]">vanda studio</h1>
        <HamburgerButton
          hamburgerOpen={hamburgerOpen}
          onClick={handleHamburgerOpen}
        />
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
