export const MembersSection = ({ CardsComponent }) => {
  return (
    <section className="flex flex-col items-center py-4 px-10 lg:px-12 xl:px-40 my-10 w-full gap-8 mt-10 mb-40 md:mb-3 relative md:min-h-[90vh] lg:min-h-[40vh] xl:min-h-screen">
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
      <div className="w-full">
        {CardsComponent && <CardsComponent />}
      </div>
    </section>
  );
};

