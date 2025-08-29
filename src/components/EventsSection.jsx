import { EventCards } from "./cards/EventCards";

export const EventsSection = () => {
  return (
    <section className="flex flex-col items-center py-4 px-10 md:px-10 lg:px-12 xl:px-40 my-10 w-full gap-8">
      <div className="container">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
            Upcoming Events
          </h4>
          <span className="bg-primary h-[1px] w-20 rounded"></span>
        </div>
        <h2 className="text-4xl font-bold max-w-xl">
          Join With Us
          <span className="text-primary underline"> Our Events</span>
        </h2>
      </div>
      <div className="mt-10  py-3 ">
        <EventCards/>
      </div>
    </section>
  );
};
