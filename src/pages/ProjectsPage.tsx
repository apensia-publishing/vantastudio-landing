import HamburgerMenu from "@/components/HamburgerMenu";
import HamburgerButton from "@/components/HamburgerButton";
import useHandleHamburgerStore from "@/store/useHandleHamburgerStore";
import { Link } from "react-router";

const projectThumbnailData = [
  {
    id: "private_residence",
    title: "Private Residence",
    first_thumbnail:
      "https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg",
    second_thumbnail:
      "https://images.pexels.com/photos/8143668/pexels-photo-8143668.jpeg",
  },
  {
    id: "interior_renovations",
    title: "Interior Renovations",
    first_thumbnail:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    second_thumbnail:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
  },
  {
    id: "commercial_spaces",
    title: "Commercial Spaces",
    first_thumbnail:
      "https://images.pexels.com/photos/4178808/pexels-photo-4178808.jpeg",
    second_thumbnail:
      "https://images.pexels.com/photos/2062276/pexels-photo-2062276.jpeg",
  },
  {
    id: "public_cultural_buildings",
    title: "Public Cultural Buildings",
    first_thumbnail:
      "https://images.pexels.com/photos/7214795/pexels-photo-7214795.jpeg",
    second_thumbnail:
      "https://images.pexels.com/photos/10368411/pexels-photo-10368411.jpeg",
  },
];

export default function ProjectsPage() {
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
            our projects
          </h1>
          <HamburgerButton onClick={() => setHamburgerOpen(true)} />
        </div>
        <div>
          <p className="leading-7 text-lg sm:text-xl sm:leading-8 md:text-2xl md:leading-10">
            Every space we design tells a story
            <br /> -of people, place and purpose.
          </p>
        </div>
        <div>
          <button className="text-lg underline">Show More</button>
        </div>
      </section>

      {/* Projects section */}
      <section
        id="projects"
        className="w-full min-h-svh flex flex-col gap-10 p-4 sm:p-6 my-20"
      >
        <ul className="flex flex-col gap-20">
          {projectThumbnailData.map((i) => (
            <li key={i.id} id={i.id} className="flex flex-col gap-5 lg:gap-10">
              <span className="text-2xl font-semibold">{i.title}</span>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] h-[50svh] gap-5">
                <div
                  style={{ backgroundImage: `url(${i.first_thumbnail})` }}
                  className="bg-cover"
                />
                <div
                  style={{ backgroundImage: `url(${i.second_thumbnail})` }}
                  className="bg-cover"
                />
              </div>
              <Link
                to={`/projects/${i.id}`}
                className="self-end underline font-semibold text-midnight"
              >
                Show More
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
