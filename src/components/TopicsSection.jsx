import { TopicCards } from "./cards/TopicCards";

export const TopicsSection = () => {
  return (
    <section className="flex flex-col items-center py-4 px-10 lg:px-25 my-10 w-full gap-8 mt-5">
      <div className="container">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
            Start Learning
          </h4>
          <span className="bg-primary h-[1px] w-20 rounded"></span>
        </div>
        <h2 className="text-4xl font-bold max-w-xl">
          Popular{" "}
          <span className="text-primary underline">Topics To Learn</span> From
          Today.
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <TopicCards/>
      </div>
    </section>
  );
};
