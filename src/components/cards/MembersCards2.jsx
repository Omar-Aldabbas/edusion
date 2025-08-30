import { Facebook, Twitter, Linkedin, Book, User } from "lucide-react";
import Member1 from "../../assets/Member1.png";
import Member2 from "../../assets/Member2.png";
import Member3 from "../../assets/Member3.png";
import Member4 from "../../assets/Member4.png";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

const membersData = [
  {
    id: 1,
    name: "Daniel Miller",
    job: "Logo Expert",
    courses: 3,
    students: 3,
    image: Member1,
  },
  {
    id: 2,
    name: "Masum Billah",
    job: "Developer",
    courses: 6,
    students: 5,
    image: Member2,
  },
  {
    id: 3,
    name: "Kenneth Renteria",
    job: "Marketer",
    courses: 0,
    students: 0,
    image: Member3,
  },
  {
    id: 4,
    name: "Richard Hood",
    job: "UI UX Designer",
    courses: 2,
    students: 0,
    image: Member4,
  },
];

export const MembersCards2 = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full",
        isVisible ? "animate-fade-in-up" : "opacity-0"
      )}
    >
      {membersData.map((member) => (
        <div
          key={member.id}
          className="relative flex flex-col overflow-hidden shadow-md group"
        >
          <div className="relative h-[70%] w-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />

        
            <div className="absolute -top-4 right-2 bg-primary rounded-b-full flex flex-col gap-7 py-7 px-2 z-20">
              <Facebook
                className="text-white cursor-pointer hover:scale-110 active:scale-110 transition-transform p-1" fill="currentColor"
                size={20}
              />
              <Twitter
                className="text-white cursor-pointer hover:scale-110 active:scale-110 transition-transform p-1" fill="currentColor"
                size={20}
              />
              <Linkedin
                className="text-white cursor-pointer hover:scale-110 active:scale-110 transition-transform p-1" fill="currentColor"
                size={20}
              />
            </div>

            <div className="absolute inset-0 bg-white/40 transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
          </div>

          <div className="flex flex-col items-center justify-center h-[30%] p-4 text-center bg-white">
            <span className="text-primary font-semibold text-lg">
              {member.name}
            </span>

            <div className="relative flex items-center justify-center w-full my-2">
              <span className="block h-px bg-primary w-8 group-hover:w-12 group-active:w-12 transition-all duration-500"></span>
              <span className="w-2 h-2 rounded-full bg-primary mx-2"></span>
              <span className="block h-px bg-primary w-8 group-hover:w-12 group-active:w-12 transition-all duration-500"></span>
            </div>

            <span className="text-xs text-muted">{member.job}</span>

            <div className="flex items-center gap-4 mt-2 text-xs text-foreground">
              <div className="flex items-center gap-1">
                <Book size={14} className="text-primary" />
                <span className="underline">{member.courses} Courses</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} className="text-primary" />
                <span className="underline">{member.students} Students</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
