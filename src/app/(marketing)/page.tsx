import TextContent from "./_component/content";
import ImageProfile from "./_component/image";

const HomePage = () => {
  return (
    <div
      id="hero"
      className="grid grid-cols-1 md:flex md:gap-20 mt-50 px-10 w-full md:justify-center  "
    >
      <ImageProfile />
      <TextContent />
    </div>
  );
};
export default HomePage;
