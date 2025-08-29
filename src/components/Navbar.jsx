import { CarTaxiFront, Search, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "py-4 px-1 flex justify-around items-center font-semibold cursor-pointer relative text-sm",
        isScrolled ? "sticky top-0 bg-background/90 z-50" : "bg-background z-50"
      )}
    >
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={Logo} alt="Logo" className="w-28 h-auto" />
      </Link>

      <ul className="hidden lg:flex justify-between gap-4 md:ml-20 relative">
        <li>
          <Link to="/" className="hover:text-primary text-sm">
            Home
          </Link>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setPagesOpen(true)}
          onMouseLeave={() => setPagesOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary text-sm">
            Pages <ChevronDown size={14} />
          </div>

          {pagesOpen && (
            <ul className="absolute top-full -translate-x-4 mt-1 bg-background/70 rounded-none shadow-lg w-36 flex flex-col z-50">
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-foreground text-sm hover:bg-primary hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/courses" className="hover:text-primary text-sm">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-primary text-sm">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-primary text-sm">
            Contact
          </Link>
        </li>
      </ul>

      <ul className="hidden lg:flex justify-center items-center gap-14">
        <div className="flex gap-4">
          <Search size={20} />
          <CarTaxiFront size={20} />
        </div>

        <div className="space-x-4">
          <Link className="relative inline-block px-5 py-2 rounded-full bg-primary font-semibold group text-sm">
            <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 rounded-full"></span>
            <span className="relative z-10 text-white">Login</span>
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-full outline outline-gray-200 hover:outline-none hover:bg-primary hover:text-background text-sm"
          >
            Sign Up
          </Link>
        </div>
      </ul>

      <button
        className="lg:hidden flex items-center bg-foreground text-background p-1 rounded-md"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background flex flex-col items-center justify-center gap-4 transition-transform duration-300 z-50",
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-none p-2 text-base font-semibold"
        >
          Home
        </Link>

        <div className="flex flex-col items-center w-full">
          <button
            onClick={() => setPagesOpen(!pagesOpen)}
            className="flex items-center gap-1 px-4 py-2 text-foreground text-base font-semibold w-full justify-center hover:bg-primary hover:text-background transition-colors rounded-none"
          >
            Pages <ChevronDown size={14} />
          </button>
          {pagesOpen && (
            <ul className="flex flex-col w-full items-center mt-1 z-50">
              <li className="w-full">
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full px-4 py-2 text-center text-foreground hover:bg-primary hover:text-background transition-colors rounded-none"
                >
                  About Us
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          to="/courses"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-none p-2 text-base font-semibold"
        >
          Courses
        </Link>
        <Link
          to="/blog"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-none p-2 text-base font-semibold"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          onClick={() => setMobileOpen(false)}
          className="text-foreground hover:bg-foreground hover:text-background rounded-none p-2 text-base font-semibold"
        >
          Contact
        </Link>

        <div className="flex gap-2 mt-4">
          <Link className="relative inline-block px-5 py-1.5 rounded-full bg-foreground font-semibold group text-sm">
            <span className="absolute top-0 left-0 w-full h-full bg-white scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 rounded-full"></span>
            <span className="relative z-10 text-primary">Login</span>
          </Link>
          <Link
            to="/signup"
            className="px-5 py-1.5 rounded-full outline-[1px] outline-gray-100 hover:outline-none hover:bg-white hover:text-primary text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
