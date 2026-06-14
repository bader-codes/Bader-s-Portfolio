import type { Dispatch, SetStateAction } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

type MobileProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ isOpen, setIsOpen }: MobileProps) {
  const links = [
    "About",
    "Skills",
    "Roadmap",
    "Projects",
    "Resume",
    "Social",
    "Contact",
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <aside className="block md:hidden">
      {/* Background */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-10 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:block`}
      />

      {/* Sidebar*/}
      <div
        className={`fixed top-0 right-0 z-10 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="p-4">
          <MdClose size={25} className="cursor-pointer text-gray-700" />
        </button>

        <ul className="p-4">
          {links.map((link) => (
            <li
              key={link}
              className="text-xl p-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <Link
                to='#'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link);
                  setIsOpen(false);
                }}
                className="text-slate-500 font-medium text-xl"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}