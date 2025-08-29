import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const BreadcrumbHeader = ({ name, subName }) => {
  return (
    <div
      className={cn(
        "w-full min-h-[30vh] md:min-h-[25vh] lg:min-h-[20vh] xl:min-h-[50vh] flex flex-col items-center justify-center text-center py-10 relative overflow-hidden",
        "bg-gradient-to-r from-ice via-white to-pinky"
      )}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 -bottom-1/2 -right-1/2">
        <span className="block bg-pink-200 h-[2px] w-[60px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[100px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[200px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[220px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[240px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[240px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[220px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[200px] rounded-full"></span>
        <span className="block bg-pink-200 h-[2px] w-[180px] rounded-full"></span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 right-1/2">
        <span className="block bg-blue-200 h-[20px] w-[20px] rounded-full relative top-1 left-40 "></span>
        <span className="block bg-pink-200 h-[20px] w-[20px] rounded-full relative top-50 left-60 border-5 border-pinky"></span>
        <span className="block bg-pink-200 h-[20px] w-[20px] rounded-full relative top-1 left-4 "></span>
        <span className="block  h-[20px] w-[20px] rounded-full relative -top-30 -left-40 border-5 border-blue-200"></span>
        <span className="block bg-pink-200 h-[20px] w-[20px] rounded-full relative top-10 -left-30 "></span>
        <span className="block h-[20px] w-[20px] rounded-full relative top-16 -left-12 border-5 border-pinky"></span>
      </div>


      <div className="relative z-10 space-y-6 flex flex-col items-center animate-fade-in-right">
        <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
          {name}
        </h1>

        <div className="mt-2 text-sm text-primary hover:text-foreground bg-background rounded-lg py-2 px-4 max-w-[170px]">
          <Link
            to="/"
            className="hover:text-foreground transition-colors duration-300"
          >
            Home
          </Link>{" "}
          <span className="text-foreground">/</span> <span className="text-foreground">{subName}</span>
        </div>
      </div>
    </div>
  );
};
