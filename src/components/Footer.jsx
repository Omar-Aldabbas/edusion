import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  LucideMap,
  Smartphone,
} from "lucide-react";
import Logo2 from "../assets/Logo2.png";
import Pinterest from "../assets/pinterest.png";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2d62] text-background  py-4 px-10 lg:px-12 xl:px-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={Logo2} alt="Edusion Logo" className="h-15 w-40" />
          </div>

          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            risus nec dui venenatis dignissim.
          </p>

          <div className="flex gap-2 mt-2">
            <h4 className="uppercase text-sm">Connect with:</h4>
            <div className="flex gap-2">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-400"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-400"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-400"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-400"
              >
                <img src={Pinterest} alt="Pinterest" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold">Courses</h3>
          <div className="flex flex-col gap-2">
            {[
              "Creative Writing",
              "Digital Marketing",
              "SEO Business",
              "Social Marketing",
              "Graphic Design",
              "Website Development",
            ].map((course, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-primary transition-colors duration-400 text-sm"
              >
                {course}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold">Company</h3>
          <div className="flex flex-col gap-2">
            {[
              "About us",
              "Knowledge Base",
              "Affiliate Program",
              "Community",
              "Market API",
              "Support Team",
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-primary transition-colors duration-400 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold">Contact Info</h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-center p-1 gap-3">
              <Smartphone size={30} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-md font-semibold">Phone Number</span>
                <span className="text-sm">+88 457 845 695</span>
              </div>
            </div>

            <div className="flex items-center p-1 gap-3">
              <Mail size={30} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-md font-semibold">Email Address</span>
                <span className="text-sm">example@yourmail.com</span>
              </div>
            </div>

            <div className="flex items-center p-1 gap-3">
              <LucideMap size={30} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-md font-semibold">Location</span>
                <span className="text-sm">California, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ice/10 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-sm">
            © {year} <span className="font-semibold">Edusion</span>. All Rights
            Reserved.
          </span>

          <div className="flex gap-6 text-sm">
            {["Terms & Conditions", "Special", "Privacy Policy"].map(
              (link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-primary hover:underline active:underline transition-colors duration-400"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
