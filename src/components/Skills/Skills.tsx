import SkillsHighLight from "./SkillsHighLight";

export default function Skills() {
  return (
    <section id="Skills" className="relative py-8">
      <div className="w-full flex justify-center items-center">
        <p
          className={`inline-flex items-center gap-2 text-base font-medium uppercase tracking-[0.12em]
            text-blue-500 before:content-[''] before:inline-block before:w-6 before:h-px before:bg-blue-500
            after:content-[''] after:inline-block after:w-6 after:h-px after:bg-blue-500`}
        >
          What I Work With
        </p>
      </div>

      <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-12">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-center w-full">
            My{" "}
            <span className="bg-linear-to-r tracking-widest from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent italic">
              Skill Set
            </span>
          </h2>

          <p className="my-2 text-base sm:text-lg text-gray-300 max-w-xl text-center text-mtd">
            A collection of technologies I've honed through real-world projects
            and continuous learning.
          </p>
        </div>
      </div>

      <SkillsHighLight />
    </section>
  );
}