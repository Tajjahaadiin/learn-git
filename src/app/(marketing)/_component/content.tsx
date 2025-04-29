"use client";
import { MapPin, Circle } from "lucide-react";
import WhatsappdButton from "./_button/whatsapp";
import DownloadButton from "./_button/download";
import { useContent } from "../../hooks/use-contents";
import Spinner from "@/components/spinner";

const imgVar = "aspect-retro max-w-50  object-cover  md:max-w-80  max-h-full";
const TextContent = () => {
  const { content, isLoading, isError, error } = useContent();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-md">
        <p>Error loading content: {String(error)}</p>
      </div>
    );
  }

  if (!content) {
    return null;
  }
  const person = {
    surename: "Tajj",
    motto: "Aspiring Fullstack Developer",
    location: "Depok Sawangan, Indonesia",
    content:
      "So glad you stopped by! I'm an enthusiastic aspiring React developer eager to create intuitive and enjoyable web experiences. I'm excited to share my work with you! Explore my projects to see how I'm putting my React skills into practice. Feel free to connect and say hello!",
    isAvailable: true,
  };

  return (
    <>
      <div className=" md:shrink-0 items-center ">
        <div className="flex w-full justify-center ">
          <img
            src={content.image}
            alt={content.surename}
            className={`${imgVar} rounded-md shadow-gray-800 dark:shadow-sky-950  shadow-2xl  `}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <h1
          className={`text-center font-bold text-2xl md:text-7xl md:text-left bg-gradient-to-r from-green-600 dark:from-green-200  via-green-400 dark:via-green-600 to-gray-900 dark:to-white bg-clip-text text-transparent `}
        >
          {`Hi There, I'm ${content.surename}`}
        </h1>
        <h2
          className={`text-center font-semibold text-1xl  md:text-left md:text-lg  `}
        >
          {content.motto}
        </h2>
        <div className="max-[1400px]:justify-center max-[1400px]:flex">
          <p className={`text-center md:text-left md:text-md `}>
            {content.content}
          </p>
        </div>
        <div className="flex space-y-1 flex-col  lg:flex-col ">
          <div className="flex gap-1 justify-center md:justify-start  ">
            <MapPin className="size-4" />
            <span className="text-1xl md:text-sm ">{content.location}</span>
          </div>
          <div className="flex items-center justify-center  lg:justify-start gap-2">
            <Circle className="font-extrabold size-2  justify-center ml-1 text-green-400 rounded-full bg-green-400" />
            <span className="right-7 text-center text-1xl md:text-sm ">
              {content.isAvailable
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
    </>
  );
};
export default TextContent;
