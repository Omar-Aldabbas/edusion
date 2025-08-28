import { CourseCard } from "./CourseCard"; // same folder
import coursesData from "../data/courses.json";
import { useInView } from "../hooks/useInView";

export const TopCoursesSection = () => {
  const topCourses = coursesData.slice(0, 6); // first 6 courses
  const [containerRef, isVisible] = useInView({ threshold: 0.3 });

  return (
    <section className="flex flex-col items-center py-4 px-10 md:px-25 my-10 w-full gap-8">
      <div className="container">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
            Popular Courses
          </h4>
          <span className="bg-primary h-[1px] w-20 rounded"></span>
        </div>
        <h2 className="text-4xl font-bold">
          Choose Our <span className="text-primary underline">Top Courses</span>
        </h2>
      </div>

      {/* Cards container with animation */}
      <div
        ref={containerRef}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-6 transition-transform duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {topCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="mt-8">
        <a
          href="/"
          className="relative inline-block px-6 py-2 rounded-full bg-primary font-semibold group"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 rounded-full"></span>
          <span className="relative z-10 text-background text-sm">Discover More</span>
        </a>
      </div>
    </section>
  );
};
