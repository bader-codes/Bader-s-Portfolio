import { FaBolt, FaMobileAlt, FaEye, FaCodeBranch } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const highlights = [
  { icon: FaBolt, text: "Performance-first mindset" },
  { icon: FaMobileAlt, text: "Mobile-first development" },
  { icon: FaEye, text: "WCAG accessibility advocate" },
  { icon: FaCodeBranch, text: "Clean, documented code" },
];

export default function About() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="About" className="py-8">
      <div className="w-full flex justify-center items-center">
        <p
          className={`inline-flex items-center gap-2 text-base font-medium uppercase tracking-[0.12em]
            text-blue-500 before:content-[''] before:inline-block before:w-6 before:h-px before:bg-blue-500
            after:content-[''] after:inline-block after:w-6 after:h-px after:bg-blue-500`}
        >
          Who I Am
        </p>
      </div>

      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative w-full max-w-[320px] sm:max-w-95 mx-auto lg:mx-0">
            <img
              src="/photo_2026-04-09_18-42-43.jpg"
              className="w-full rounded-2xl object-cover aspect-4/5"
              alt="Bader Mohammed"
            />
            <p className="absolute -bottom-4 -right-4 bg-sky-400 px-3 py-2 rounded-md font-semibold text-sm">
              {`</> Open to work`}
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mx-auto mt-6 lg:mt-0">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-center w-full">
              Crafting Code
              <br />
              That{" "}
              <span className="bg-linear-to-r tracking-widest from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent italic">
                Speaks
              </span>
            </h2>

            <p className="mt-6 mb-8 text-base sm:text-lg text-gray-300 max-w-xl">
              I'm a Front-End Developer passionate about creating modern and
              responsive web interfaces. I enjoy learning how things work under
              the hood, improving my problem-solving skills, and building
              projects that help me grow as a developer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl lg:max-w-none">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 text-sm sm:text-base text-slate-400"
                >
                  <Icon className="shrink-0 text-cyan-400" size={18} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <Link
              to="#"
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base
                sm:text-lg font-medium text-white mt-8 w-full bg-linear-to-r
                from-blue-500 to-cyan-400 transition-all duration-300 hover:-translate-y-1`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Contact");
              }}
            >
              Let's Work Together
              <MdArrowRight size={25} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
