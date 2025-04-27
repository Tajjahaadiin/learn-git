import { MapPin, Circle } from "lucide-react";
import WhatsappdButton from "./_button/whatsapp";
import DownloadButton from "./_button/download";
export type TextResponse = {
  surename: string;
  motto: string;
  location: string;
  content: string;
  isAvailable: boolean;
};
const TextContent = () => {
  const person = {
    surename: "Tajj",
    motto: "Aspiring Fullstack Developer",
    location: "Depok Sawangan, Indonesia",
    content:
      "So glad you stopped by! I'm an enthusiastic aspiring React developer eager to create intuitive and enjoyable web experiences. I'm excited to share my work with you! Explore my projects to see how I'm putting my React skills into practice. Feel free to connect and say hello!",
    isAvailable: true,
  };

  return (
    <div className="flex flex-col space-y-5">
      <h1
        className={`text-center font-bold text-2xl md:text-7xl md:text-left bg-gradient-to-r from-green-600 dark:from-green-200  via-green-400 dark:via-green-600 to-gray-900 dark:to-white bg-clip-text text-transparent `}
      >
        {`Hi There, I'm ${person.surename}`}
      </h1>
      <h2
        className={`text-center font-semibold text-1xl  md:text-left md:text-lg  `}
      >
        {person.motto}
      </h2>
      <div className="max-[1400px]:justify-center max-[1400px]:flex">
        <p className={`text-center md:text-left md:text-md `}>
          {person.content}
        </p>
      </div>
      <div className="flex space-y-1 flex-col  lg:flex-col ">
        <div className="flex gap-1 justify-center md:justify-start  ">
          <MapPin className="size-4" />
          <span className="text-1xl md:text-sm ">{person.location}</span>
        </div>
        <div className="flex items-center justify-center  lg:justify-start gap-2">
          <Circle className="font-extrabold size-2  justify-center ml-1 text-green-400 rounded-full bg-green-400" />
          <span className="right-7 text-center text-1xl md:text-sm ">
            {person.isAvailable
              ? "available for new project"
              : "already hired. for further information feel free to contact me"}
          </span>
        </div>
      </div>
      <div className="flex gap-5">
        <WhatsappdButton />
        <DownloadButton />
      </div>
    </div>
  );
};
export default TextContent;
