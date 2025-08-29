import { Award, Wand } from "lucide-react";
import Carear from "../assets/Carear.png";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export const CareerSection = () => {
  return (
    <section className={cn("flex justify-center items-center relative py-4 px-5 lg:px-25 w-full min-h-screen md:min-h-[70vh] lg:min-h-screen lg:mt-10")}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-1 lg:gap-8 justify-center items-center w-full">
        <img
          src={Carear}
          alt="Peaple doing things"
          className=" w-full max-w-lg md:max-w-sm lg:max-w-lg p-3"
        />
        <div className="flex flex-col  max-w-2xl gap-8 p-5">
          <div className="space-y-3 md:space-y-7">
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl capitalize">
              Learn new skills to go{" "}
              <span className="text-primary underline">ahead for your</span>{" "}
              career.
            </h2>
            <p className="text-muted text-sm">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et simply.
            </p>
          </div>
          <div className="space-y-5 ">
            <div className="flex justify-center items-center gap-2 rounded-lg border-l-1 border-transparent hover:border-l-4 hover:border-primary transition duration-400 py-6 px-8 outline outline-gray-200">
              <div className="p-5 bg-ice rounded-full -mt-3">
                <Award size={25} className="text-primary" />
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 rounded-lg border-l-1 border-transparent hover:border-l-4 hover:border-primary transition duration-400 py-6 px-8 outline outline-gray-200">
              <div className="p-5 bg-ice rounded-full -mt-3">
                <Wand size={25} className="text-primary" />
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link className="relative inline-block px-6 py-2 rounded-full bg-primary font-semibold group">
              <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 rounded-full"></span>
              <span className="relative z-10 text-background text-sm">Discover More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
