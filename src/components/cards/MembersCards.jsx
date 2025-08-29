import { Facebook, Twitter, Linkedin, Book, User } from "lucide-react";
import Member1 from "../../assets/Member1.png";
import Member2 from "../../assets/Member2.png";
import Member3 from "../../assets/Member3.png";
import Member4 from "../../assets/Member4.png";

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

export const MembersCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 md:gap-y-34 w-full">
      {membersData.map((member) => (
        <div key={member.id} className="relative ">
          <img
            src={member.image}
            alt={member.name}
            className="w-full rounded-lg"
          />

          <div className="absolute -bottom-26 left-1/2 transform -translate-x-1/2 bg-primary w-59 md:w-84 p-3 rounded-lg shadow-lg flex flex-col gap-1 text-background text-center">
            <span className="font-semibold text-lg cursor-pointer">{member.name}</span>
            <span>{member.job}</span>

            <div className="flex flex-col items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Book size={18} />
                <span className="underline">{member.courses} Courses</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={18} />
                <span className="underline">{member.students} Students</span>
              </div>
            </div>

            <div className="flex gap-3 mt-2 justify-center">
              <Facebook className="text-foreground bg-background rounded-full p-2 hover:text-primary transition-colors duration-300 cursor-pointer" fill="currentColor" size={28} />
              <Twitter className="text-foreground bg-background rounded-full p-2 hover:text-primary transition-colors duration-300 cursor-pointer" fill="currentColor" size={28} />
              <Linkedin className="text-foreground bg-background rounded-full p-2 hover:text-primary transition-colors duration-300 cursor-pointer" fill="currentColor" size={28} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
