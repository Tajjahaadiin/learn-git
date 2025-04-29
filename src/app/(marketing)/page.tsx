import ContactSection from "./_component/contact";
import TextContent from "./_component/content";
import ExperienceSection from "./_component/experience";
import FooterSection from "./_component/footer";
import { MarqueeDemo } from "./_component/marquee";
import ProjectsSection from "./_component/projects";

const HomePage = () => {
  return (
    <>
      <div
        id="hero"
        className="grid grid-cols-1 md:flex md:gap-20 mt-50 px-10 w-full md:justify-center  "
      >
        <TextContent />
      </div>
      <div id="techstack" className="px-30 mb-20">
        <MarqueeDemo />
      </div>
      <div>
        <ExperienceSection />
      </div>
      <div id="projects" className="px-30 mb-20 mt-20">
        <ProjectsSection />
      </div>
      <ContactSection />
      <FooterSection />
    </>
  );
};
export default HomePage;
