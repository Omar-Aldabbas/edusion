import { BookOpen, Heart, User, Eye, Lightbulb, Mail } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Learn More \nAnywhere",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    bgColor: "bg-ice",
  },
  {
    icon: Heart,
    title: "Expert \nInstructor",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    bgColor: "bg-ice",
  },
  {
    icon: User,
    title: "Team \nManagement",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    bgColor: "bg-ice",
  },
  {
    icon: Eye,
    title: "Course \nPlaning",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    bgColor: "bg-ice",
  },
  {
    icon: Lightbulb,
    title: "Teacher Monitoring",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    bgColor: "bg-pinky/40",
  },
  {
    icon: Mail,
    title: "24/7 Strong Support",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    bgColor: "bg-ice",
  },
];

export const FeatureCardGen = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {features.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="group flex flex-col items-start gap-4 p-8 rounded-lg outline outline-gray-200 transition-transform duration-300 hover:-translate-y-[5px]"
          >
            <div className="flex items-center gap-3">
              <div className={`shrink-0 p-4 rounded-full ${item.bgColor}`}>
                <Icon size={28} className="text-gray-500" />
              </div>
              <h3 className="text-foreground font-bold text-lg leading-tight whitespace-pre-line">
                {item.title}
              </h3>
            </div>

            <p className="text-muted text-sm">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
