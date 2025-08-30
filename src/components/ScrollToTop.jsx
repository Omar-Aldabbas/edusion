import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg transition-opacity duration-300
        ${visible ? "opacity-100 z-50" : "opacity-0 pointer-events-none"}
        hover:scale-110 active:scale-110
      `}
    >
      <ChevronUp size={20} />
    </button>
  );
};
