import CTA from "./CTA";
import Contact from "./Contact";
import Features from "./Features";
import Hero from "./Hero";
import News from "./News";
import Players from "./Players";
import Whyus from "./Whyus";

const Sections = () => {
  return (
    <div id="sections" className="flex flex-col w-[85%] ml-auto max-h-full">
      <div className="min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] relative">
        <Hero />
      </div>
      <div className="min-h-[80vh]">
        <News />
      </div>
      <div className="min-h-[80vh] ">
        <Whyus />
      </div>
      <div className="min-h-[85vh] ">
        <Features />
      </div>
      <div className="min-h-[85vh] ">
        <Players />
      </div>
      <div className="min-h-[80vh] ">
        <CTA />
      </div>
      <div className="min-h-[85vh] ">
        <Contact />
      </div>
    </div>
  );
};

export default Sections;
