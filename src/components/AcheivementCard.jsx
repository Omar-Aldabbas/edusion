import CountUp from "react-countup";
import { Smile, File, Headphones, User } from "lucide-react";
import { useInView } from "../hooks/useInView"; // adjust path

const stats = [
  { icon: Smile, number: 854, text: "Enrolled Students", color: "text-blue-600" },
  { icon: File, number: 521, text: "Academic Programs", color: "text-orange-600" },
  { icon: Headphones, number: 163, text: "Winning Awards", color: "text-green-600" },
  { icon: User, number: 93, text: "Certified Students", color: "text-violet-600" },
];

export const AcheivementCard = () => {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="w-full flex flex-wrap gap-6">
      {stats.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            className="flex-1 flex items-center gap-4 p-4 outline outline-gray-200 shadow-xl"
          >
            <div>
              <IconComponent size={38} className={`${item.color}`} />
            </div>

            <div className="flex flex-col">
              <span className="text-foreground font-bold text-3xl">
                {isVisible ? <CountUp start={0} end={item.number} duration={2.5} /> : 0}
              </span>
              <span className="text-muted text-sm">{item.text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
