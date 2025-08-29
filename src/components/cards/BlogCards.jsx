import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import EventImg1 from "../../assets/EventImg1.png";
import EventImg2 from "../../assets/EventImg2.png";

const eventData = [
  {
    id: 1,
    date: "Jun 01, 2024",
    subject: "Technology",
    title: "Professional Mobile Painting and Sculpting",
    img: "",
  },
  {
    id: 2,
    date: "May 29, 2024",
    subject: "Programming",
    title: "Professional Ceramic Moulding for Beginner",
    img: "",
  },
  {
    id: 3,
    date: "Jun 01, 2024",
    subject: "Technology",
    title: "Professional Mobile Painting and Sculpting",
    img: EventImg1,
  },
  {
    id: 4,
    date: "May 29, 2024",
    subject: "Programming",
    title: "Professional Ceramic Moulding for Beginner",
    img: EventImg2,
  },
];

const EventCard = ({ event }) => (
  <div className="bg-background shadow-md overflow-hidden flex flex-col">
    {event.img && (
      <img
        src={event.img}
        alt={event.title}
        className="max-h-60 object-cover rounded-t-lg"
      />
    )}
    <div className={`p-6 flex flex-col justify-between`}>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted">
          {event.date} | <span className="text-primary font-semibold">{event.subject}</span>
        </span>
        <a
          href="#"
          className="text-foreground font-bold text-lg hover:text-primary transition-colors duration-300"
        >
          {event.title}
        </a>
      </div>
      <div className="mt-4">
        <Link className="relative inline-block py-3 px-5 font-semibold overflow-hidden rounded-full group text-center max-w-max">
          <span className="absolute top-1/2 left-0 w-11 h-11 bg-ice rounded-full transform -translate-y-1/2 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-primary group-hover:h-full z-0"></span>
          <span className="relative uppercase z-10 text-foreground group-hover:text-background inline-flex items-center justify-center gap-1 font-bold text-xs">
            read more <ArrowRightIcon className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export const BlogCards = () => {
  const noImg = eventData.filter((e) => !e.img);
  const withImg = eventData.filter((e) => e.img);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col gap-6 md:w-1/3">
        {noImg.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="flex items-start gap-6 md:w-2/3">
        {withImg.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};
