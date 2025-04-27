import Link from "next/link";
import { PropsWithChildren } from "react";
import DownloadButton from "./_component/_button/download";
import WhatsappdButton from "./_component/_button/whatsapp";
import Dropdown from "./_component/dropdown";
import ThemeToggle from "./_component/theme-toggle";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#e8e8e8] dark:bg-gray-900 transition-color duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <img
                src="/logo.svg"
                alt="logo"
                className="h-10 shadow-lg shadow-gray-800 rounded-sm w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href={"#techstack"}
                className=" group text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900  dark:hover:text-white  "
              >
                <p className="transition delay-50 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110">
                  Tech Stack
                </p>
              </Link>
              <Link
                href={"#experiences"}
                className="group text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <p className="transition delay-50 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110">
                  experiences
                </p>
              </Link>
              <Link
                href={"#projects"}
                className="group text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <p className="transition delay-50 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110">
                  Projects
                </p>
              </Link>
              {/* Whatsapp Button */}
              <WhatsappdButton />
              {/* CV Download Button */}
              <DownloadButton />
              <ThemeToggle />
            </div>
            {/* Mobile Menu */}
            <div className="flex items-center space-x-4 md:hidden">
              <ThemeToggle />
              {/* dropdown */}
              <Dropdown />
            </div>
          </div>
        </div>
      </nav>
      <>{children}</>
    </div>
  );
};
export default HomeLayout;
