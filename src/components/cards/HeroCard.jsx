import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const FeatureCard = ({ title, descr }) => {
  return (
    <div className="py-7 px-9 bg-white flex flex-col justify-center items-center shadow-md">
      <div className="space-y-4">
        <h2 className="font-bold text-foreground text-md">{title}</h2>
        <p className="text-muted text-xs">{descr}</p>
        <Link className="relative inline-block py-3 px-5 font-semibold overflow-hidden rounded-full group text-center max-w-max">
          <span className="absolute top-1/2 left-0 w-11 h-11 bg-ice rounded-full transform -translate-y-1/2 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-primary group-hover:h-full z-0"></span>
          <span className="relative uppercase z-10 text-foreground group-hover:text-background inline-flex items-center justify-center gap-1 font-bold text-xs">
            explore courses <ArrowRightIcon size={16} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export const HeroCard = ({ features }) => {
  return (
    <>
      {features.map((el, idx) => (
        <FeatureCard key={idx} title={el.title} descr={el.descr} />
      ))}
    </>
  );
};
