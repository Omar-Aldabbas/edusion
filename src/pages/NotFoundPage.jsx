import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-foreground text-primary px-6">
      <div className="bg-background rounded-full flex flex-col items-center justify-center p-4">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6 text-foreground">Page Not Found</h2>
        <p className="text-center max-w-md mb-6 text-sm">
          The page you are looking for does not exist. It might have been
          removed, renamed, or never existed.
        </p>
        <Link
          to="/"
          className="relative inline-block px-6 py-3 rounded-full bg-primary font-semibold group text-sm"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 rounded-full"></span>
          <span className="relative z-10 text-background">Go to Home</span>
        </Link>
      </div>
    </div>
  );
};
