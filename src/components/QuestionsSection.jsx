import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Questions from "../assets/Questions.png";
import { cn } from "../utils/cn";

const faqData = [
  {
    question: "What does it take to be an excellent author?",
    answer:
      "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy, gotta love that.",
  },
  {
    question: "Who will view my content?",
    answer:
      "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy, gotta love that.",
  },
  {
    question: "What does it take to become an author?",
    answer:
      "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy, gotta love that.",
  },
  {
    question: "How to change my password easily?",
    answer:
      "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy, gotta love that.",
  },
  {
    question: "How does it create content?",
    answer:
      "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy, gotta love that.",
  },
];

export const QuestionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-4 px-6 md:px-10 lg:px-12 xl:px-40 my-10 w-full gap-8">
      <div className="flex flex-col items-start w-full md:w-1/2">
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
              Frequently Asked Question
            </h4>
            <span className="bg-primary h-[1px] w-20 rounded"></span>
          </div>
          <h2 className="text-4xl font-bold max-w-xl">
            General <span className="text-primary underline">Questions</span>
          </h2>
        </div>

        <div className="w-full flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="w-full border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-4 text-foreground font-semibold text-left focus:outline-none transition-colors duration-300"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-500 ease-in-out",
                    activeIndex === index ? "rotate-180 text-primary" : "text-foreground"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-700 ease-in-out",
                  activeIndex === index
                    ? "max-h-[500px] opacity-100 py-3 px-4"
                    : "max-h-0 opacity-0 py-0 px-4"
                )}
              >
                <div
                  className={cn(
                    "transform transition-transform duration-700 ease-in-out",
                    activeIndex === index ? "translate-y-0" : "-translate-y-2"
                  )}
                >
                  <p className="text-sm text-black">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-md">
        <img src={Questions} alt="Do you have any questions" />
      </div>
    </section>
  );
};
