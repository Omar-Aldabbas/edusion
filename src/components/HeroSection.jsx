import { ArrowRightIcon, NotepadTextIcon, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../assets/Hero.png";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";
import { HeroCards } from "./HeroCards";

export const HeroSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <section className="lg:min-h-screen bg-gradient-to-r from-ice/70 via-white to-pinky/40 flex flex-col justify-center items-center relative shadow-xl shadow-ice/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1">
        {/* <div className="absolute w-4 h-6-4 bg-red-600 z-100 top-0 left-0"></div> */}
        <div className="flex flex-col justify-center gap-4 md:text-left px-8 md:px-8 max-w-xl">
          <h1 className="text-6xl md:text-7xl text-foreground font-semibold md:tracking-[-4px] md:leading-[5.5rem]">
            Better <span className="text-primary">Learning Future</span> Starts
            With Edusion
          </h1>
          <p className="max-w-xl text-muted">
            It is a long established fact that reader will be distracted
            readable content of a page when.
          </p>

          <Link className="relative inline-block py-3 px-5 font-semibold overflow-hidden rounded-full group text-center max-w-max">
            <span className="absolute top-1/2 left-0 w-11 h-11 bg-ice rounded-full transform -translate-y-1/2 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-primary group-hover:h-full z-0"></span>
            <span className="relative uppercase z-10 text-foreground group-hover:text-background inline-flex items-center justify-center gap-1 font-bold text-xs">
              explore courses <ArrowRightIcon size={16} />
            </span>
          </Link>
        </div>

        <div className="relative flex justify-center p-0 overclow-hidden">
          <img
            src={Hero}
            alt="Hero"
            className="max-w-md lg:max-w-lg xl:max-w-xl relative z-100 lg:-left-3 xl:left-none"
          />
          <div className="absolute">
            <div
              ref={ref}
              className={cn(
                "flex gap-3 bg-background rounded-2xl rounded-4xl",
                "py-5 px-4 items-center relative top-3 -right-2/3 md:top-[60px] md:-right-[160px] z-100 ",
                isVisible ? " animate-fade-in-right" : "opacity-0"
              )}
            >
              <div className="flex mb-4 ">
                <User2 className="relative z-10 text-primary" />
                <User2
                  className="absolute z-8 text-background"
                  fill="currentcolor"
                />
                <User2 className="absolute z-5 left-[14px] text-primary" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl">4500+</h3>
                <p className="text-muted text-xs">Online Course</p>
              </div>
            </div>
            <div
              className={cn(
                "flex gap-3 bg-background rounded-4xl py-5 px-4 items-center relative",
                "-bottom-40 -left-2/3  md:top-[220px] md:-left-[200px] z-100",
                isVisible ? " animate-fade-in-right" : "opacity-0"
              )}
            >
              <div className="flex mb-4 ">
                <NotepadTextIcon
                  size={28}
                  className="relative z-10 text-primary"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl">7500+</h3>
                <p className="text-muted text-xs">Active student</p>
              </div>
            </div>
          </div>
          <div className="bg-pinky w-90 h-90 md:w-100 md:h-100 z-10 absolute rounded-full bottom-1/5 left-1/8 "></div>
        </div>
      </div>
      <HeroCards/>
    </section>
  );
};
