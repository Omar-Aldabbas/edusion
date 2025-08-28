import { HeroCard } from "./HeroCard";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";

const features = [
  {
    title: "Quality Education",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    title: "Experienced Teachers",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    title: "Delicious Food",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
];

export const HeroCards = () => {
  const [ref, isVisible] = useInView({ threshold: 0.4 });
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 md:gap-[2px] md:mt-[2px]",
        isVisible ? "animate-fade-in-up" : "opacity-0"
      )}
    >
      <HeroCard features={features} />
    </div>
  );
};
