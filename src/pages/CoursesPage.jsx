import { useContext, useState, useMemo } from "react";
import { BreadcrumbHeader } from "../components/header/BreadcrumbHeader";
import { CourseContext } from "../context/CourseContext";
import { CourseCard } from "../components/cards/CourseCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CoursesPage = () => {
  const { courses, loading } = useContext(CourseContext);
  const [sortType, setSortType] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  // Sorting
  const sortedCourses = useMemo(() => {
    if (!courses) return [];
    const sorted = [...courses];
    switch (sortType) {
      case "newest":
        return sorted.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "title-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  }, [courses, sortType]);

  // Pagination
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-foreground">
        Loading courses...
      </div>
    );
  }

  return (
    <div>
      <BreadcrumbHeader name="Courses" subName="Courses" />

      <div className="px-6 md:px-20 py-6 relative lg:my-10">

        <div className="flex justify-end mt-6 mb-4 ">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 px-4 py-1 rounded-md focus:outline-none text-sm"
          >
            <option value="newest">Release Date (newest first)</option>
            <option value="oldest">Release Date (oldest first)</option>
            <option value="title-asc">Course Title (A-Z)</option>
            <option value="title-desc">Course Title (Z-A)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>


        <div className="mt-8 border border-gray-200 px-4 py-1 rounded-md flex justify-between items-center relative ">
          <span className="text-xs text-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <div className="flex items-center gap-3 relative">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="p-1 rounded bg-ice hover:bg-primary transition-colors"
              >
                <ChevronLeft size={16} className="text-foreground hover:text-background" />
              </button>
            )}

            <div className="space-x-0">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 text-sm ${
                    currentPage === i + 1
                      ? "text-primary border-b-2 border-primary font-semibold "
                      : "text-foreground hover:text-primary border-b-2 border-transparent"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-1 rounded bg-ice hover:bg-primary transition-colors"
              >
                <ChevronRight size={16} className="text-foreground hover:text-background" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
