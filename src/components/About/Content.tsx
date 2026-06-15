import { FaBolt, FaMobileAlt, FaEye, FaCodeBranch } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const highlights = [
  { icon: FaBolt, text: "Performance-first mindset" },
  { icon: FaMobileAlt, text: "Mobile-first development" },
  { icon: FaEye, text: "WCAG accessibility advocate" },
  { icon: FaCodeBranch, text: "Clean, documented code" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Content() {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-center lg:items-start text-center lg:text-left mx-auto mt-6 lg:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-center w-full">
          Crafting Code
          <br />
          That{" "}
          <span className="bg-linear-to-r tracking-widest from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent italic">
            Speaks
          </span>
        </h2>

        <p className="mt-6 mb-10 md:mb-12 text-base sm:text-lg text-gray-300 text-mtd text-center w-[90%] md:w-[70%] mx-auto">
          I'm a Front-End Developer passionate about creating modern and
          responsive web interfaces. I enjoy learning how things work under the
          hood, improving my problem-solving skills, and building projects that
          help me grow as a developer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-3 sm:gap-4 w-full">
          {highlights.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center border border-gray-800 rounded-md p-3 gap-2.5 text-sm sm:text-base text-slate-400"
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
      </motion.div>
    </div>
  );
}
