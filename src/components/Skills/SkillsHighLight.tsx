import { skills } from "./highlightsData";
import { motion } from "motion/react";

export default function SkillsHighLight() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <article
              key={index}
              className="rounded-2xl border border-gray-700 p-5 bg-slate-900 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl text-white ${skill.color}`}
                >
                  <Icon size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">
                      {skill.name}
                    </span>

                    <span className="text-sm text-gray-400">
                      {skill.percent}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.2 }}
                      className="h-full bg-sky-400 rounded-full"
                    />
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed text-mtd">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
