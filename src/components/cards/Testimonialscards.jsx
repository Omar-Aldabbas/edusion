import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { forwardRef, useEffect, useRef, useState, useImperativeHandle } from "react";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import User3 from "../../assets/User3.png";
import User4 from "../../assets/User4.png";

const testimonials = [
  { id: 1, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.", name: "James Clayton", job: "Design Expert", image: User1 },
  { id: 2, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.", name: "James Simmons", job: "Marketing Expert", image: User2 },
  { id: 3, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.", name: "Devid Max", job: "Max INC", image: User3 },
  { id: 4, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.", name: "Alex Feroundo", job: "Marketing Expert", image: User4 },
];

export const TopicCards = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setIndex(prev => Math.max(prev - 1, 0));
  const next = () => setIndex(prev => Math.min(prev + 1, testimonials.length - cardsPerView));

  useImperativeHandle(ref, () => ({
    prev,
    next
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1 > testimonials.length - cardsPerView ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div
        className="flex gap-6 transition-transform duration-500"
        style={{ transform: `translateX(-${index * (100 / cardsPerView)}%)` }}
        ref={carouselRef}
      >
        {testimonials.map(t => (
          <div
            key={t.id}
            className="flex-shrink-0 py-2"
            style={{ width: `calc(${100 / cardsPerView}% - 16px)` }}
          >
            <div className="bg-background shadow-lg flex flex-col gap-0">
              <div className="p-8 flex flex-col gap-3">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-muted">{t.text}</p>
              </div>

              <div className="p-6 flex items-center gap-3 bg-ice">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover hover:rounded-xs"
                />
                <div className="flex flex-col">
                  <span className="text-foreground font-medium">{t.name}</span>
                  <span className="text-foreground text-xs">- {t.job}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
