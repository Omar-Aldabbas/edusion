import { MembersCards } from "./cards/MEmbersCards";

export const MembersSection = () => {
  return (
    <section className="flex flex-col items-center py-4 px-10 lg:px-25 my-10 w-full gap-8 mt-10 relative min-h-screen">
      <div className="container">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">
           Team Member
          </h4>
          <span className="bg-primary h-[1px] w-20 rounded"></span>
        </div>
        <h2 className="text-4xl font-bold max-w-xl">
          Our Expert <span className="text-primary underline">Instructors</span>
        </h2>
      </div>
      {/* Members */}
      <div className="w-full">
        <MembersCards/>
      </div>
    </section>
  );
};
