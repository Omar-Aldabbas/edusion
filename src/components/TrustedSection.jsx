import { useEffect, useState } from "react";
import Nexeon from "../assets/Nexeon.png";
import Buth from "../assets/Buth.png";
import Arch from "../assets/Arch.png";
import Hoso from "../assets/Hoso.png";
import Hipster from "../assets/Hipster.png";

export const TrustedSection = () => {
  const logos = [Nexeon, Buth, Arch, Hoso, Hipster];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [stepPhase, setStepPhase] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (isMobile) {
          return (prev + 1) % logos.length;
        } else {
          let next = prev;
          if (stepPhase === 0) {
            next = (prev + 1) % logos.length;
            setStepPhase(1);
          } else if (stepPhase === 1) {
            next = (prev + 1) % logos.length;
            setStepPhase(2);
          } else {
            next = (prev - 2 + logos.length) % logos.length;
            setStepPhase(0);
          }
          return next;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile, stepPhase, logos.length]);

  const loopedLogos = logos.concat(logos);

  return (
    <section className="flex justify-center items-center py-4 px-4 sm:px-6 md:px-10 w-full mx-auto my-10 lg:my-30 text-center overflow-hidden">
      <div className="container flex flex-col justify-center items-center gap-6">
        <h3 className="text-xl font-semibold text-primary bg-ice px-5 py-2 w-[80%] sm:w-[70%] lg:w-[60%] rounded-full">
          Trusted Company Around The World!
        </h3>

        <div className="relative w-full overflow-hidden mt-6">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: isMobile
                ? `translateX(-${index * 50}%)` 
                : `translateX(-${index * 20}%)`, 
            }}
          >
            {loopedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex justify-center"
                style={{ width: isMobile ? "50%" : "20%" }}
              >
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
