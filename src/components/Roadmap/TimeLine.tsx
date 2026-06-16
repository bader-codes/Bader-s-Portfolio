import type { TargetAndTransition } from "framer-motion";
import { timelineData } from "./timelineData";
import { StatusDot } from "./StatusDot";
import { motion } from "motion/react";

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
  tags: string[];
  completed: boolean;
  initial?: TargetAndTransition;
  whileInView?: TargetAndTransition;
};

export default function Timeline() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Wrapper */}
        <div className="relative">
          {/* Center Line */}
          <div
            className="absolute left-1/2 top-0 -bottom-20 w-0.75 -translate-x-1/2
            hidden md:block bg-gray-800"
          />

          {timelineData.map((item: TimelineItem, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex mb-12 items-center overflow-hidden
                  justify-center ${isLeft ? "md:justify-start" : "md:justify-end"}
                 `}
              >
                {/* Dot */}
                <StatusDot completed={item.completed} />

                {/* Card */}
                <motion.div
                  initial={item.initial}
                  whileInView={item.whileInView}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  viewport={{ once: false }}
                  className={`w-full md:w-[45%] bg-zinc-900 p-6 rounded-2xl border border-zinc-700
                  ${isLeft ? "md:mr-auto" : "md:ml-auto"} relative`}
                >
                  {/* Mobile Dot */}
                  <StatusDot completed={item.completed} mobile={true} />

                  <span className="text-sm text-[#4f9cf9] font-medium">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold mt-2 mb-3 text-[#f0f4ff]">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-[#8fa3bf]">{item.desc}</p>

                  <div className="flex gap-2 flex-wrap mt-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-[#4f9cf9] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}