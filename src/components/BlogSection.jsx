import { cn } from "../utils/cn";
import { BlogCards } from "./cards/BlogCards";

export const BlogSection = () => {
  return (
    <section className={cn("flex flex-col items-center py-4 px-10 lg:px-25 my-10 w-full gap-8",
      "bg-gradient-to-r from-ice/70 to-pinky/60"
    )}>
      <div className="container">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
            News
          </h4>
          <span className="bg-primary h-[1px] w-20 rounded"></span>
        </div>
        <h2 className="text-4xl font-bold">
          Our Latest <span className="text-primary underline">Blogs</span> 
        </h2>
      </div>
      <div className="flex w-full md:mt-10">
        <BlogCards/>
      </div>
    </section>
  );
};
