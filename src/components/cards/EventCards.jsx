import { Clock, MapPin } from "lucide-react";
import Event1 from "../../assets/Event1.png";
import Event2 from "../../assets/Event2.png";

const newsData = [
  {
    id: 1,
    day: "15",
    month: "Oct",
    title: "World Famous Talented Teachers",
    time: "10.00AM - 12.00PM",
    location: "School of Science",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the…",
    image: Event1,
  },
  {
    id: 2,
    day: "18",
    month: "Oct",
    title: "Electrical Engineering new event",
    time: "10.00AM - 12.00PM",
    location: "School of Science",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the…",
    image: Event2,
  },
  {
    id: 3,
    day: "15",
    month: "Oct",
    title: "World Famous Talented Teachers",
    time: "10.00AM - 12.00PM",
    location: "School of Science",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.…",
    image: "",
  },
  {
    id: 4,
    day: "18",
    month: "Oct",
    title: "Electrical Engineering new event",
    time: "10.00AM - 12.00PM",
    location: "School of Science",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.…",
    image: "",
  },
];

const EventCard = ({ news, hasImage }) => (
  <div
    className={`bg-background overflow-hidden shadow hover:shadow-md
      ${hasImage ? "rounded-t-lg h-[420px]" : "h-[220px]"}`}
  >
    <div className="relative">
      {news.image ? (
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-52 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-7" />
      )}

      <div className="absolute top-4 left-4 flex text-center rounded overflow-hidden shadow">
        <span className="bg-foreground text-background font-bold px-2 py-1 text-sm">
          {news.day}
        </span>
        <span className="bg-primary text-background font-bold px-2 py-1 text-sm">
          {news.month}
        </span>
      </div>
    </div>

    <div className="p-6 space-y-3">
      <a
        href="#"
        className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-800"
      >
        {news.title}
      </a>

      <div className="flex gap-3 text-sm">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-primary" />
          <span className="text-foreground">{news.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-primary" />
          <span className="text-foreground font-semibold">{news.location}</span>
        </div>
      </div>

      <p className="text-muted text-xs">{news.description}</p>
    </div>
  </div>
);

export const EventCards = () => {
  const withImage = newsData.filter((n) => n.image);
  const withoutImage = newsData.filter((n) => !n.image);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col md:flex-row gap-6 md:w-2/3">
        {withImage.map((news) => (
          <EventCard key={news.id} news={news} hasImage />
        ))}
      </div>

      <div className="flex flex-col gap-6 md:w-1/3">
        {withoutImage.map((news) => (
          <EventCard key={news.id} news={news} hasImage={false} />
        ))}
      </div>
    </div>
  );
};
