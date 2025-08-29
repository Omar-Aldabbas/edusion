import { useRef } from "react";
import { TopicCards } from "./cards/Testimonialscards";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection = () => {
  const carouselRef = useRef(null);

  return (
    <section className="flex flex-col items-center py-4 px-10 lg:px-25 my-10 w-full gap-8 mt-5 relative">
      <div className="container">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
            Testimonial
          </h4>
          <span className="bg-primary h-[1px] w-20 rounded"></span>
        </div>
        <h2 className="text-4xl font-bold max-w-xl">
          What Says <span className="text-primary underline">Our Students</span>
        </h2>
      </div>

      <div className="w-full relative">
        <div className="absolute -top-12 right-2 flex gap-2 z-10">
          <button
            className="p-3 bg-white border border-gray-200 rounded-full shadow hover:bg-primary hover:text-background transition-colors duration-500"
            onClick={() => carouselRef.current?.prev()}
          >
            <ChevronLeft />
          </button>
          <button
            className="p-3 bg-white border border-gray-200 rounded-full shadow hover:bg-primary hover:text-background transition-colors duration-500"
            onClick={() => carouselRef.current?.next()}
          >
            <ChevronRight />
          </button>
        </div>

        <TopicCards ref={carouselRef} />
      </div>
    </section>
  );
};
