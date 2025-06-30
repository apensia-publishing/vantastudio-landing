import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useEffect } from "react";

gsap.registerPlugin(Draggable);

type TestimonialCarouselCardProps = {
  author: string;
  exp: string;
  src: string;
};

export function TestimonialCarouselCard({
  author,
  exp,
  src,
  ...props
}: TestimonialCarouselCardProps & React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li {...props} className={`carousel-slide ${props.className || ""}`}>
      <img src={src} alt="Testimonial thumbnail" className="h-[40svh]" />
      <p className="xl:opacity-0 xl:group-hover:opacity-100 mt-3">{exp}</p>
      <span className="xl:opacity-0 xl:group-hover:opacity-100 self-end mt-3">
        {author}
      </span>
    </li>
  );
}

// Create a wrapper component for the carousel
export function TestimonialCarouselWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  const initDraggable = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Calculate the total width of all slides
    const slides = gsap.utils.toArray<HTMLElement>(".carousel-slide");
    const totalWidth = slides.reduce(
      (acc, slide) => acc + slide.offsetWidth + 16,
      0
    ); // 16px for gap
    const slideWidth = slides[0]?.offsetWidth || 0;
    const wrapperWidth = wrapper.offsetWidth;
    const maxX = -(totalWidth - wrapperWidth);

    // Set initial position
    gsap.set(wrapper, { x: 0 });

    // Create draggable instance
    draggableInstanceRef.current = Draggable.create(wrapper, {
      type: "x",
      inertia: true,
      bounds: {
        minX: maxX,
        maxX: 0,
      },
      edgeResistance: 0.65,
      dragResistance: 0.2,
      onDrag: function () {
        gsap.to(slides, {
          scale: 1,
          duration: 0.2,
        });
      },
      onDragEnd: function () {
        const x = this.endX;
        const snapX = Math.round(x / slideWidth) * slideWidth;
        gsap.to(wrapper, {
          x: gsap.utils.clamp(maxX, 0, snapX),
          duration: 0.5,
          ease: "power2.out",
        });
      },
    })[0];
  };

  const cleanupDraggable = () => {
    if (draggableInstanceRef.current) {
      draggableInstanceRef.current.kill();
      draggableInstanceRef.current = null;
      // Reset any transforms when disabling draggable
      if (wrapperRef.current) {
        gsap.set(wrapperRef.current, { x: 0 });
      }
    }
  };

  useEffect(() => {
    // Create a media query list
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    // Function to handle media query changes
    const handleMediaQueryChange = (
      e: MediaQueryListEvent | MediaQueryList
    ) => {
      if (e.matches) {
        // Above 1280px (xl) - disable draggable
        cleanupDraggable();
      } else {
        // Below 1280px - enable draggable
        initDraggable();
      }
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Add listener for changes
    mediaQuery.addListener(handleMediaQueryChange as any);

    // Cleanup
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange as any);
      cleanupDraggable();
    };
  }, []);

  return (
    <div className="overflow-hidden xl:overflow-visible">
      <ul
        ref={wrapperRef}
        className="flex gap-4 cursor-grab active:cursor-grabbing xl:cursor-default"
        style={{
          touchAction: "none",
          userSelect: "none",
        }}
      >
        {children}
      </ul>
    </div>
  );
}
