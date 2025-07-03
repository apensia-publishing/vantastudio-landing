type ServiceCardProps = {
  name: string;
  exp: string;
  src: string;
};

export default function ServiceCard({
  name,
  exp,
  src,
}: ServiceCardProps): React.JSX.Element {
  return (
    <div className="grid items-center lg:grid-cols-[1fr_15rem_15rem] gap-5 lg:gap-10 lg:grid-rows-[15rem] py-5">
      <h2 className="font-semibold text-2xl order-2 lg:order-1">{name}</h2>
      <p className="max-w-[20rem] order-3 lg:order-2">{exp}</p>
      <div
        id="service_image"
        className="w-full aspect-video lg:h-full order-1 lg:order-last"
      >
        <img
          src={src}
          alt={`${name} service thumbnail`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
