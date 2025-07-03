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
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initDraggable = () => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    // Wait for next frame to ensure elements are rendered
    requestAnimationFrame(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".carousel-slide");
      if (slides.length === 0) return;

      // Calculate total content width including gaps
      let totalWidth = 0;
      slides.forEach((slide, index) => {
        totalWidth += slide.offsetWidth;
        if (index < slides.length - 1) {
          totalWidth += 16; // gap between slides
        }
      });

      const containerWidth = container.offsetWidth;
      // Calculate how much we can scroll - ensure last slide is fully visible
      const maxScroll = Math.max(0, totalWidth - containerWidth);
      const maxX = -maxScroll;

      // Clear any existing transforms
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
        onDragEnd: function () {
          // Snap to nearest slide
          const slideWidth = slides[0].offsetWidth + 16; // slide width + gap
          const currentX = this.endX;
          const snapIndex = Math.round(-currentX / slideWidth);
          const snapX = Math.max(maxX, Math.min(0, -snapIndex * slideWidth));

          gsap.to(wrapper, {
            x: snapX,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      })[0];
    });
  };

  const cleanupDraggable = () => {
    if (draggableInstanceRef.current) {
      draggableInstanceRef.current.kill();
      draggableInstanceRef.current = null;
    }

    // Completely reset the wrapper element
    if (wrapperRef.current) {
      // Remove all GSAP-added properties
      gsap.set(wrapperRef.current, { clearProps: "all" });

      // Force remove any remaining transform styles
      wrapperRef.current.style.transform = "";
      wrapperRef.current.style.removeProperty("transform");

      // Remove any data attributes GSAP might have added
      wrapperRef.current.removeAttribute("data-draggable");

      // Trigger a reflow to ensure styles are applied
      wrapperRef.current.offsetHeight;
    }
  };

  useEffect(() => {
    // Use 1200px breakpoint as requested
    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    const handleMediaQueryChange = (
      e: MediaQueryListEvent | MediaQueryList
    ) => {
      if (e.matches) {
        // Above 1200px - disable draggable
        cleanupDraggable();
      } else {
        // Below 1200px - enable draggable
        setTimeout(() => initDraggable(), 100); // Small delay to ensure layout is stable
      }
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Add listener for changes
    mediaQuery.addListener(handleMediaQueryChange as any);

    // Also listen for resize events to recalculate bounds
    const handleResize = () => {
      if (window.innerWidth < 1200 && draggableInstanceRef.current) {
        cleanupDraggable();
        setTimeout(() => initDraggable(), 100);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange as any);
      window.removeEventListener("resize", handleResize);
      cleanupDraggable();
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden xl:overflow-visible">
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
