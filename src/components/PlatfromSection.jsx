import { ArrowRightIcon, Check } from "lucide-react";
import Platform from "../assets/Platform.png";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";

export const PlatformSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.3 });
  return (
    <section
      className={cn(
        "flex flex-wrap lg:flex-nowrap justify-center items-center",
        " lg:bg-gradient-to-r lg:from-ice lg:via-white lg:to-pinky xl:min-h-screen py-8 px-10 lg:px-25 overflow-hidden",
        "bg-gradient-to-b from-ice to-white"
      )}
    >
      <div
        ref={ref}
        className={cn(
          "xl:p-12 space-y-5 xl:min-h-full xl:-mt-20",
          isVisible ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        {/* head */}
        <div className={cn("space-y-5")}>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
              Best Online Learning Platforms
            </h4>
          </div>
          <h2 className="text-4xl font-bold traking-tight md:max-w-[70%] lg:max-w-full">
            One Platfrom & Many{" "}
            <span className="text-primary underline">Courses</span> For You
          </h2>
          <p className="text-muted text-sm">
            From blogs to emails to ad copies, auto-generate catchy, original,
            and high-converting copies in popular tones languages.
          </p>
        </div>
        {/* mid */}
        <div className="space-y-2">
          <div className="flex gap-3 items-end">
            <Check size={20} className="text-background bg-primary font-bold" />
            <p className="font-medium text-foreground">
              {" "}
              9/10 Average Satisfaction Rate
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Check size={20} className="text-background bg-primary font-bold" />
            <p className="font-medium text-foreground">
              {" "}
              96% Completitation Rate
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Check size={20} className="text-background bg-primary font-bold" />
            <p className="font-medium text-foreground">
              {" "}
              Friendly Environment & Expert Teacher
            </p>
          </div>
        </div>
        {/* button */}
        <div>
          <Link className="relative inline-block py-3 px-5 font-semibold overflow-hidden rounded-full group text-center max-w-max">
            <span className="absolute top-1/2 left-0 w-11 h-11 bg-ice rounded-full transform -translate-y-1/2 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-primary group-hover:h-full z-0"></span>
            <span className="relative uppercase z-10 text-foreground group-hover:text-background inline-flex items-center justify-center gap-1 font-bold text-xs">
              explore our courses <ArrowRightIcon size={16} />
            </span>
          </Link>
        </div>
      </div>

      <div>
        <img
          ref={ref}
          src={Platform}
          alt="Our platform is Easy to use"
          className={cn(
            "max-w-md md:max-w-xl md:max-w-lg lg:mt-20",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        />
      </div>
    </section>
  );
};
