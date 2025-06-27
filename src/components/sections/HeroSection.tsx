export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full h-svh bg-[url('../hero_bg.jpg')] bg-cover bg-no-repeat p-4 text-white flex flex-col justify-between"
      // style={{ border: "1px solid red" }}
    >
      <div>
        <h1 className="uppercase text-[2rem]">vanda studio</h1>
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
