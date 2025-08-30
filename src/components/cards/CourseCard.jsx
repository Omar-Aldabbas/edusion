import { FileText, Clock, Star, Signal } from "lucide-react";

export const CourseCard = ({ course }) => {
  return (
    <div className="bg-background overflow-hidden outline outline-gray-200 relative rounded-t-lg">
      <div className="relative">
        <img
          src={new URL(`../../assets/${course.mainPic}`, import.meta.url).href}
          alt={course.title}
          className="w-full h-60 object-cover"
        />

        {course.price && (
          <div className="absolute top-6 left-3 bg-primary text-background w-12 h-12 flex items-center justify-center rounded-full text-md font-bold shadow-lg">
            {course.price}
          </div>
        )}
      </div>

      <div className="px-4 py-4">
        <div className="flex flex-wrap gap-2 px-4 ">
          {course.category && (
            <a
              href="/"
              className="bg-primary text-background px-3 py-1 rounded text-sm font-semibold"
            >
              {course.category}
            </a>
          )}
        </div>

        <h3 className="text-lg font-bold text-foreground px-4 mt-2 mb-3 hover:text-primary active:text-primary cursor-pointer">
          {course.title}
        </h3>

        <div className="flex flex-col px-4 mt-2 gap-2 max-w-[240px]">
          <div className="flex flex-wrap items-center gap-4 text-primary text-xs">
            <div className="flex items-center gap-2">
              <FileText size={16} />
              <span className="text-foreground">{course.lessons}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-foreground">{course.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={16} fill="currentColor" className="text-primary" />
              <span className="text-foreground">{course.rating}</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <Signal size={16} />
              <span className="text-foreground">{course.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
