import Hero from "./Hero";

const Sections = () => {
  return (
    <div className="flex flex-col w-[85%] ml-auto max-h-full">
      <div className="min-h-full relative">
        <Hero />
      </div>
      <div className="min-h-full">section2</div>
    </div>
  );
};

export default Sections;
