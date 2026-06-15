import { MdDownload, MdSend } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

type SataType = {
  number: string;
  label: string;
};

function Stat({ number, label }: SataType) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <div className="text-4xl font-extrabold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex items-center justify-center">
          <span>{number}</span>
          <span>+</span>
        </div>
      </div>

      <span className="text-xs uppercase tracking-widest text-gray-500 mt-1 text-mtd">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block w-px h-10 bg-white/10" />;
}

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative z-9 max-w-7xl mx-auto w-full px-4 md:px-8 pt-20 pb-16 flex flex-col items-start"
    >
      {/* Greeting */}
      <p className="flex items-center gap-2 text-gray-400 font-medium mb-4">
        <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
        Hello, World!
      </p>

      {/* Name */}
      <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-3">
        I'm{" "}
        <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Bader Mohammed
        </span>
      </h1>

      {/* Title */}
      <div className="flex items-center text-xl md:text-3xl font-semibold text-gray-400 mb-6">
        <span className="">A&nbsp;</span>
        <TypeAnimation
          sequence={[
            "Front-End Developer",
            2000,
            "React Developer",
            2000,
            "JavaScript Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        />
      </div>

      {/* Tagline */}
      <p className="max-w-2xl text-gray-400 leading-8 text-base md:text-lg mb-10 text-mtd">
        Front-End Developer focused on building responsive, accessible, and
        high-performance web experiences with modern technologies.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 mb-12 text-white">
        <a
          href="#resume"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-purple-500 text-white font-medium hover:scale-105 transition duration-500"
        >
          <MdDownload size={18} className="mt-0.5" />
          Download CV
        </a>

        <a
          href="#contact"
          className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
        >
          <MdSend size={18} className="mt-0.5" />
          Contact Me
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap items-center gap-8">
        <Stat number="3" label="Years Experience" />
        <Divider />

        <Stat number="40" label="Projects Built" />
        <Divider />

        <Stat number="15" label="Happy Clients" />
      </div>
    </div>
  );
}
