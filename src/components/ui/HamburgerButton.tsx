import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";

export default function HamburgerButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const hamburgerButtonRef = useRef<HTMLButtonElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ pause: true })
        .to("#top_line", {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "right",
        })
        .to("#middle_line", {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "right",
        })
        .to("#bottom_line", {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "right",
        });
    },
    { scope: hamburgerButtonRef }
  );

  const { hamburgerOpen } = useHandleHamburgerStore();
  useEffect(() => {
    if (hamburgerOpen) {
      tl?.current?.play();
    } else {
      tl?.current?.reverse();
    }
  }, [hamburgerOpen]);

  return (
    <button
      id="hamburger_button"
      className="w-8 h-5 flex flex-col items-end justify-center relative"
      ref={hamburgerButtonRef}
      {...props}
    >
      <div
        aria-labelledby="top_line"
        id="top_line"
        className="w-3/4 h-0.5 bg-white absolute top-0 right-0"
      />
      <div
        aria-labelledby="middle_line"
        className="w-1/2 h-0.5 bg-white"
        id="middle_line"
      />
      <div
        aria-labelledby="bottom_line"
        className="w-full h-0.5 bg-white absolute bottom-0 right-0"
        id="bottom_line"
      />
    </button>
  );
}
