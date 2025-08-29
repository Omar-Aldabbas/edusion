import { FeatureCardGen } from "./cards/FeatureCardGen";

export const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center py-4 px-10 lg:px-25 my-10 w-full gap-8">
      <div className="container">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-primary text-xs tracking-widest uppercase">Why Choose Edusion</h4>
          <span className="bg-primary h-[1px] w-20 rounded"></span>
        </div>
        <h2 className="text-4xl font-bold">
          Find the{" "}
          <span className="text-primary underline">best features</span> of
          Edusion
        </h2>
      </div>
      <div>
        <FeatureCardGen/>
      </div>
    </section>
  );
};
