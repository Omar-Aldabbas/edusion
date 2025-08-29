import { BlogCards } from "../components/cards/BlogCards";
import { BreadcrumbHeader } from "../components/header/BreadcrumbHeader";


export const BlogPage = () => {
  return (
    <div className="flex flex-col relative">
      <BreadcrumbHeader name="Latest Posts" subName="Blog" />
      <div className="flex flex-col items-center py-8 px-10 lg:px-25 mt-10 w-full gap-8 xl:min-h-screen">
        <div className="flex w-full md:mt-10">
          <BlogCards  />
        </div>
      </div>
    </div>
  );
};
