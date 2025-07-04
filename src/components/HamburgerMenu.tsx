import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router";
import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";

gsap.registerPlugin(SplitText);

function HamburgerMenuCloseButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonRef = useRef(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      gsap.set(buttonRef.current, {
        onStart: (event: MouseEvent) => {
          event.preventDefault();
          event.stopImmediatePropagation();
        },
      });
      gsap.fromTo(
        "[aria-label=left_diagonal]",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, delay: 2.5, ease: "expo.out" }
      );
      gsap.fromTo(
        '[aria-label="right_diagonal"]',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, delay: 2.75, ease: "expo.out" }
      );
    },
    { scope: buttonRef }
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
      ref={buttonRef}
      className="w-7 h-7 md:w-10 md:h-10 relative"
      {...props}
    >
      <div
        aria-label="left_diagonal"
        className="w-8 h-0.5 md:w-12 bg-gray-900 origin-top-left rotate-45 absolute top-0 left-0.5"
      />
      <div
        aria-label="right_diagonal"
        className="w-8 h-0.5 md:w-12 bg-gray-900 origin-top-right -rotate-45 absolute top-0 right-1"
      />
    </button>
  );
}

export default function HamburgerMenu() {
  // Menu link list
  const menuLinkData = ["home", "about", "projects"];

  // GSAP
  const hamburgerMenuRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      gsap.set(hamburgerMenuRef.current, { top: "-100%" });
      let titleSplit = SplitText.create("[aria-labelledby=title]", {
        type: "lines",
        mask: "lines",
      });
      let menuSplit = SplitText.create("[aria-labelledby=menu_link]", {
        type: "lines",
        mask: "lines",
      });

      tl.current = gsap
        .timeline()
        .to(hamburgerMenuRef.current, {
          top: 0,
          duration: 0.75,
          delay: 0.5,
          ease: "power4.inOut",
        })
        .from(titleSplit.lines, { y: "100%", duration: 0.25 })
        .from(menuSplit.lines, {
          y: "100%",
          stagger: 0.1,
          delay: 0.1,
          duration: 0.25,
        });
    },
    { scope: hamburgerMenuRef }
  );

  const { hamburgerOpen, setHamburgerOpen } = useHandleHamburgerStore();
  useEffect(() => {
    if (hamburgerOpen) {
      tl?.current?.play();
    } else {
      tl?.current?.reverse();
    }
  }, [hamburgerOpen]);

  const handleHamburgerMenuClose = () => setHamburgerOpen(false);

  return (
    <aside
      id="hamburger"
      className="p-4 w-full h-svh bg-yellow-50 origin-top absolute z-30 sm:p-6"
      ref={hamburgerMenuRef}
    >
      <div className="w-full flex justify-between items-center">
        <h1
          aria-labelledby="title"
          className="uppercase text-3xl sm:text-[2.5rem] md:text-6xl overflow-hidden"
        >
          vanda studio
        </h1>
        <HamburgerMenuCloseButton onClick={handleHamburgerMenuClose} />
      </div>
      <ul
        id="menu_list"
        className="w-full h-[80svh] flex flex-col gap-7 justify-center items-center"
      >
        {menuLinkData.map((i, index) => (
          <li key={index} aria-labelledby="menu_link">
            <Link
              to={i === "home" ? "/" : `/${i}`}
              className="text-2xl md:text-4xl overflow-hidden"
              onClick={handleHamburgerMenuClose}
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
