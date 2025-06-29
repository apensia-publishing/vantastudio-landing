type ProcessCardProps = {
  name: string;
  exp: string;
  index: number;
};

export default function ProcessCard({ name, exp, index }: ProcessCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 py-5 lg:pt-5 lg:pb-15">
      <span className="lg:flex-1 text-midnight text-2xl font-semibold">
        0{index}
      </span>
      <h2 className="lg:flex-2 font-semibold text-2xl">{name}</h2>
      <div className="lg:flex-2">
        <p className="max-w-[20rem]">{exp}</p>
      </div>
    </div>
  );
}
