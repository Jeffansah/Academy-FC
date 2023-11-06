import features from "@/data/features";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="pt-36 max-w-[1000px] mx-auto">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="grid grid-cols-2 gap-8"
      >
        {features.map((feature) => (
          <Feature {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
