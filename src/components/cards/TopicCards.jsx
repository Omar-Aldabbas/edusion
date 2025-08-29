import Business from "../../assets/Business.svg";
import Data from "../../assets/Data.svg";
import Digital from "../../assets/Digital.svg";
import Finance from "../../assets/Finance.svg";
import Modern from "../../assets/Modern.svg";
import UI from "../../assets/UI.svg";

const topics = [
  { img: Business, title: "Business", courses: 1 },
  { img: Data, title: "Data Science", courses: 1 },
  { img: Digital, title: "Digital Program", courses: 2 },
  { img: Finance, title: "Finance", courses: 2 },
  { img: Modern, title: "Modern Physics", courses: 3 },
  { img: UI, title: "UI/UX Design", courses: 3 },
];

export const TopicCards = () => {
  return (
    <>
      {topics.map((topic, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 bg-background shadow-md p-5 hover:shadow-md transition"
        >
          <img
            src={topic.img}
            alt={topic.title}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {topic.title}
            </h3>
            <span className="text-sm text-primary">
              {topic.courses} Courses
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
