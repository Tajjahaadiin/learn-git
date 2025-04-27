import TextContent from "./_component/content";
import ExperienceSection from "./_component/experience";
import ImageProfile from "./_component/image";
import { MarqueeDemo } from "./_component/marquee";

const HomePage = () => {
  return (
    <>
      <div
        id="hero"
        className="grid grid-cols-1 md:flex md:gap-20 mt-50 px-10 w-full md:justify-center  "
      >
        <ImageProfile />
        <TextContent />
      </div>
      <div className="px-30 mb-20">
        <MarqueeDemo />
      </div>
      <div className="">
        <ExperienceSection />
      </div>
    </>
  );
};
export default HomePage;
