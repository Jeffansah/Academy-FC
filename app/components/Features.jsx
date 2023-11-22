import features from "@/data/features";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="py-20 lg:py-28 xl:pt-36 max-w-[1100px] mx-auto max-sm:px-6 sm:px-8 xl:px-0">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="grid max-sm:grid-cols-1 grid-cols-2 gap-8 max-sm:gap-20"
      >
        {features.map((feature) => (
          <Feature {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
