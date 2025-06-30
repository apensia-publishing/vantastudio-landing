import { Link } from "react-router";
import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";
import HamburgerButton from "../ui/HamburgerButton";
import ServiceCard from "../ui/ServiceCard";
import ProcessCard from "../ui/ProcessCard";
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";

const servicesData = [
  {
    name: "Architectural Design",
    exp: "From concept to construction, we translate ideas into architectural realities - from the first sketch to the last brick.",
    src: "../services/service_1.jpg",
  },
  {
    name: "Interior Design",
    exp: "Tailored environments that resonate. We craft interiors that reflect identity, inspire emotion, and enhance everyday life.",
    src: "../services/service_2.jpg",
  },
  {
    name: "3D Visualization & Concepting",
    exp: "Vision brought to life. We transform abstract ideas into vivid, immersive visuals. From moodboards to photorealistic renders.",
    src: "../services/service_3.jpg",
  },
  {
    name: "Project Supervision",
    exp: "Precision in every detail. We oversee the execution of your project with rigorous attention.",
    src: "../services/service_4.jpg",
  },
];

const processData = [
  {
    name: "Discovery",
    exp: "We begin by learning about your lifestyle, values, and spatial needs. We analyze the site, context and goals to set a strong foundation for the project.",
  },
  {
    name: "Concept Design",
    exp: "We translate insights into a clear architectural vision. The focus is on atmosphere, spatial flow, and aesthetics that reflect your story.",
  },
  {
    name: "Development",
    exp: "We prepare detailed documentation from technical drawings to material specs. Every element is refined for accuracy, buildability, and budget alignment.",
  },
  {
    name: "Execution",
    exp: "We stay involved through site supervision and design oversight. This ensures your vision is realized with precision, quality, and peac of mind.",
  },
];

export default function HeroSection() {
  const { setHamburgerOpen } = useHandleHamburgerStore();

  // const iframeRef = useRef(null);
  // useEffect(() => {
  //   if (document !== undefined || null) {
  //     const iframe = document.getElementById(
  //       "interim_iframe"
  //     ) as HTMLIFrameElement;
  //     iframe.muted = true;
  //   }
  // }, []);

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
            className="bg-[#CDC4A9] p-10 lg:p-10 flex flex-col gap-5 justify-center relative"
          >
            <h2 className="text-xl lg:text-2xl">
              Driven By dignity.
              <br />
              Grounded In Beauty.
            </h2>
            <p>
              We are a boutique architecture studio specializing in residential
              and commercial spaces for mordern living. Our mission is to create
              meaningful environments that reflect who you are and how you live.
              Every project is an opportunity to push boundaries - with clarity,
              elegance, and intent.
            </p>
            <Link
              to="/"
              className="absolute -bottom-10 right-0 underline text-[#efb100]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section
        id="projects"
        className="w-full flex flex-col justify-center p-4 my-20 gap-5 sm:p-6"
      >
        <h1 className="uppercase text-center text-[12vw] text-nowrap text-transparent bg-[linear-gradient(#fff,#efb100)] bg-clip-text lg:text-left lg:text-6xl">
          projects
        </h1>
      </section>

      {/* Services section */}
      <section
        id="services"
        className="w-full flex flex-col justify-center p-4 my-20 gap-15 sm:p-6"
      >
        <h1 className="uppercase text-center text-[12vw] text-nowrap text-transparent bg-[linear-gradient(#fff,#efb100)] bg-clip-text lg:text-left lg:text-6xl">
          services
        </h1>
        <ul id="services_wrapper" className="flex flex-col gap-5">
          {servicesData.map((i, index) => (
            <li key={index} className="border-t last:border-b">
              <ServiceCard name={i.name} exp={i.exp} src={i.src} />
            </li>
          ))}
        </ul>
      </section>

      {/* Interim section */}
      <section
        id="interim"
        className="w-full lg:h-[55svh] flex flex-col lg:flex-row gap-5 p-4 sm:p-6"
      >
        <div className="w-full h-full relative aspect-video lg:aspect-auto">
          <ReactPlayer
            src="https://player.vimeo.com/video/143145583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0"
            muted
            loop
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              aspectRatio: "16 / 9",
            }}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <h1 className="uppercase text-[8vw] lg:text-[4vw] text-midnight">
            vanda studio
          </h1>
          <div className="w-full h-[40svh] lg:h-full relative">
            <img
              src="../interim_bg.jpg"
              alt="Interim section background image"
              className="w-full h-full absolute inset-0 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process section */}
      <section
        id="process"
        className="w-full flex flex-col justify-center p-4 my-20 gap-15 sm:p-6"
      >
        <h1 className="uppercase text-center text-[12vw] text-nowrap text-transparent bg-[linear-gradient(#fff,#efb100)] bg-clip-text lg:text-left lg:text-6xl">
          process
        </h1>
        <ol id="process_wrapper" className="flex flex-col gap-5">
          {processData.map((i, index) => (
            <li key={index} className="border-t last:border-b">
              <ProcessCard name={i.name} exp={i.exp} index={index + 1} />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
