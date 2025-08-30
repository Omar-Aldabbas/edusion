import { Award, Wand } from "lucide-react";
import Career2 from "../assets/Career2.png";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export const CareerSection2 = () => {
  return (
    <section
      className={cn(
        "flex justify-center items-center relative py-4 px-5 lg:px-28 w-full min-h-screen md:min-h-[40vh] xl:min-h-screen lg:mt-10"
      )}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-1 lg:gap-8 justify-center items-center w-full">
        <img
          src={Career2}
          alt="Peaple doing things"
          className=" w-full max-w-lg md:max-w-sm xl:max-w-lg p-3"
        />
        <div className="flex flex-col  max-w-2xl gap-8 p-5">
          <div className="space-y-3 md:space-y-7">
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl capitalize">
              Learn new skills to go{" "}
              <span className="text-primary underline">ahead for your</span>{" "}
              career.
            </h2>
            <p className="text-muted text-sm">
              orem ipsum dolor sit amet, consectetur notted adipisicing elit sed
              do eiusmod tempor incididunt ut labore et simply. From blogs to
              emails to ad copies, auto-generate catchy, original, and
              high-converting copies in popular tones languages.From blogs to
              emails to ad copies, auto-generate catchy, original and
              high-converting copies. <br />
              <br />
              <span className="font-semibold">
                {" "}
                Auto-generate catchy original and high-converting copies in
                popular tones languages. From blogs to emails to ad copies
                auto-generate catchy
              </span>
            </p>
          </div>
          <div>
            <Link className="relative inline-block px-6 py-2 rounded-full bg-primary font-semibold group">
              <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 group-active:scale-y-100 z-0 rounded-full"></span>
              <span className="relative z-10 text-background text-sm">
                Discover More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
