import CTA from "./CTA";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Main from "./Main";
import News from "./News";
import Players from "./Players";
import Whyus from "./Whyus";

const Sections = () => {
  return (
    <Main>
      <div id="sections" className="flex flex-col w-[85%] ml-auto max-h-full">
        <div className="min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] relative">
          <Hero />
        </div>
        <div className="min-h-max">
          <News />
        </div>
        <div className="min-h-max ">
          <Whyus />
        </div>
        <div className="min-h-max ">
          <Features />
        </div>
        <div className="min-h-max ">
          <Players />
        </div>
        <div className="min-h-max ">
          <CTA />
        </div>
        <div className="min-h-max ">
          <Contact />
        </div>
        <div className="min-h-max">
          <Footer />
        </div>
      </div>
    </Main>
  );
};

export default Sections;
