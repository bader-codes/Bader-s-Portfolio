import { useActiveSection } from "../../hooks/useActiveSection";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import Sidebar from "./Mobile";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  const links = [
    "About",
    "Skills",
    "Roadmap",
    "Projects",
    "Resume",
    "Social",
    "Contact",
  ];

  const activeSection = useActiveSection(links);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-10 bg-inherit 
          ${scrolled ? "bg-slate-900 shadow-lg" : "bg-transparent"}
        `}
      >
        <Navbar className="w-full! md:max-w-7xl flex items-centerjustify-center mx-auto bg-inherit">
          <NavbarBrand href="#">
            <span className="text-4xl font-bold bg-[linear-gradient(135deg,#4f9cf9_0%,#7b6cf9_100%)] bg-clip-text text-transparent">
              BM
            </span>
          </NavbarBrand>

          {/* Menu Button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <MdMenu size={30} className="cursor-pointer text-white" />
          </button>

          <NavbarCollapse className="mt-1.5">
            {links.map((link) => (
              <NavbarLink
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link);
                }}
                className={`
                            relative pb-2
                            transition-colors duration-300
                            after:absolute
                            after:left-0
                            after:-bottom-1
                            after:h-0.5
                            after:w-0
                            after:rounded-full
                            after:transition-all
                            after:duration-500
                            after:bg-linear-to-r
                            after:from-blue-500
                            after:to-violet-500
                            hover:text-white!
                            hover:after:w-full
                            text-[#8fa3bf]!
                            ${activeSection === link ? "text-gray-50 after:w-full" : "text-gray-400"}
                          `}
              >
                {link}
              </NavbarLink>
            ))}
          </NavbarCollapse>
        </Navbar>
      </header>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
