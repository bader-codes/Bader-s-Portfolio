import { timelineData } from "./timelineData";
import { TbLoader3 } from "react-icons/tb";
import { MdCheck } from "react-icons/md";

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
  tags: string[];
  completed: boolean;
};

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Wrapper */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 -top-25 -bottom-25 w-0.75 bg-gray-700 -translate-x-1/2 hidden md:block" />

          {timelineData.map((item: TimelineItem, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex mb-12 items-center
                ${isLeft ? "md:justify-start" : "md:justify-end"}
                justify-center`}
              >
                {/* Dot */}
                <div
                  className={`
                    absolute z-20 w-12 h-12 rounded-full flex items-center justify-center
                    border-4 right-2 top-2 md:left-1/2 md:right-auto md:-translate-x-1/2
                    ${
                      item.completed
                        ? "bg-linear-[135deg] from-[#4f9cf9] to-[#7b6cf9] border-purple-900"
                        : "bg-blue-500 border-blue-400 animate-pulse"
                    }
                `}
                >
                  {item.completed ? (
                    <MdCheck size={20} />
                  ) : (
                    <TbLoader3 size={20} className="animate-spin" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] bg-zinc-900 p-6 rounded-2xl border border-zinc-700
                  ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                >
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}