import { CarTaxiFront, Search, Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "py-4 px-6 flex justify-around items-center font-semibold cursor-pointer relative ",
        isScrolled ? "sticky top-0 bg-background/90 z-5000" : "bg-background"
      )}
    >
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={Logo} alt="Logo to go home" className="w-32 h-auto" />
      </Link>

      <ul className="hidden lg:flex justify-between gap-4 md:ml-20">
        <li>
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/pages" className="hover:text-primary">
            Pages
          </Link>
        </li>
        <li>
          <Link to="/courses" className="hover:text-primary">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </li>
      </ul>

      <ul className="hidden lg:flex justify-around items-center lg:space-x-30 ">
        <ul className="flex justify-between gap-8">
          <Search size={22} />
          <CarTaxiFront size={22} />
        </ul>

        <ul className="flex justify-between items-center gap-4 py-1">
          <Link className="relative inline-block px-6 py-2 rounded-full bg-primary font-semibold group">
            <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 rounded-full"></span>
            <span className="relative z-10 text-white">Login</span>
          </Link>

          <Link
            to="/signup"
            className="px-6 py-2 rounded-full outline outline-gray-400 hover:outline-none hover:bg-primary hover:text-background"
          >
            Sign Up
          </Link>
        </ul>
      </ul>

      <button
        className="lg:hidden flex items-center bg-foreground text-background p-1 rounded-md"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background flex flex-col items-center justify-center gap-6 transition-transform duration-300 z-40",
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-lg p-1 text-xl font-semibold"
        >
          Home
        </Link>
        <Link
          to="/pages"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-lg p-1 text-xl font-semibold"
        >
          Pages
        </Link>
        <Link
          to="/courses"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-lg p-1 text-xl font-semibold"
        >
          Courses
        </Link>
        <Link
          to="/blog"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-lg p-1 text-xl font-semibold"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-lg p-1 text-xl font-semibold"
        >
          Contact
        </Link>

        <div className="flex gap-4 mt-6">
          <Link className="relative inline-block px-6 py-2 rounded-full bg-foreground font-semibold group">
            <span className="absolute top-0 left-0 w-full h-full bg-white scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 rounded-full"></span>
            <span className="relative z-10 text-primary">Login</span>
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 rounded-full outline outline-white hover:outline-none hover:bg-white hover:text-primary"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
