import Image from "next/image";

const imgVar = "aspect-retro max-w-50  object-cover  md:max-w-80  max-h-full";

const ImageProfile = () => {
  return (
    <div className=" md:shrink-0 items-center ">
      <div className="flex w-full justify-center ">
        <img
          src="dummy-profile.jpg"
          alt="profile"
          className={`${imgVar} rounded-md shadow-gray-800 dark:shadow-sky-950  shadow-2xl  `}
        />
      </div>
    </div>
  );
};
export default ImageProfile;
