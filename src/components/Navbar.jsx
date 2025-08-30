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

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Courses", to: "/courses" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "py-4 px-1 md:px-10 xl:px-40 flex flex-col lg:flex-row justify-between items-center font-semibold cursor-pointer relative text-sm transition-all duration-500",
        isScrolled
          ? "sticky top-0 bg-background/95 shadow-sm z-50 animate-fade-down"
          : "bg-background z-50"
      )}
    >
      <div className="hidden lg:flex justify-between items-center w-full">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Logo} alt="Logo" className="w-28 h-auto" />
        </Link>

        <ul className="flex justify-center items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-sm hover:text-primary active:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-16">
          <div className="flex items-center gap-4">
            <Search size={20} />
            <CarTaxiFront size={20} />
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/auth"
              className="relative inline-block px-5 py-2 rounded-full bg-primary font-semibold group text-sm"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 group-active:scale-y-100 z-0 rounded-full"></span>
              <span className="relative z-10 text-white">Login</span>
            </Link>
            <Link
              to="/auth"
              className="px-5 py-2 rounded-full outline outline-gray-200 hover:outline-none hover:bg-primary hover:text-background active:outline-none active:bg-primary active:text-background text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full flex flex-col px-4">
        <div className="flex justify-between items-center mb-2 w-full px-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={Logo} alt="Logo" className="w-28 h-auto" />
          </Link>

          <button
            className="flex items-center bg-foreground text-background p-1 rounded-md z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={cn(
            "flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ",
            mobileOpen ? "max-h-60 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2 text-foreground hover:text-primary active:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center mt-2 w-full px-4">
          <div className="flex gap-4">
            <Search size={20} />
            <CarTaxiFront size={20} />
          </div>
          <div className="flex gap-2">
            <Link
              to="/auth"
              className="relative inline-block px-5 py-2 rounded-full bg-primary font-semibold group text-sm"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-foreground scale-y-0 origin-top transition-transform duration-300 ease-out z-0 rounded-full group-hover:scale-y-100 group-active:scale-y-100"></span>
              <span className="relative z-10 text-white">Login</span>
            </Link>
            <Link
              to="/auth"
              className="px-5 py-1.5 rounded-full outline-[1px] outline-gray-100 hover:outline-none hover:bg-white hover:text-primary active:outline-none active:bg-white active:text-primary text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
