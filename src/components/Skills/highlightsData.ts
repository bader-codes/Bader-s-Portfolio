import { FaCloud, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BsDeviceSsd } from "react-icons/bs";
import type { IconType } from "react-icons";
import { TiHtml5 } from "react-icons/ti";

type Skill = {
  name: string;
  percent: number;
  desc: string;
  icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  {
    name: "HTML5",
    percent: 95,
    desc: "Semantic markup, accessibility, SEO-friendly structure.",
    icon: TiHtml5,
    color: "bg-orange-500",
  },
  {
    name: "CSS3 & Sass",
    percent: 92,
    desc: "Animations, Grid, Flexbox, custom properties, Sass.",
    icon: FaCss3Alt,
    color: "bg-blue-500",
  },
  {
    name: "JavaScript ES 2015",
    percent: 90,
    desc: "DOM manipulation, async/await, closures, patterns.",
    icon: PiBracketsCurly,
    color: "bg-yellow-400 text-black",
  },
  {
    name: "TypeScript",
    percent: 80,
    desc: "Strict typing, generics, interfaces, utility types.",
    icon: SiTypescript,
    color: "bg-sky-600",
  },
  {
    name: "React",
    percent: 88,
    desc: "Hooks, context, custom hooks, performance optimization.",
    icon: FaReact,
    color: "bg-cyan-500",
  },
  {
    name: "Next.js",
    percent: 78,
    desc: "SSR, SSG, App Router, server components.",
    icon: IoLogoNodejs,
    color: "bg-black",
  },
  {
    name: "Git & GitHub",
    percent: 85,
    desc: "Branching, PR workflows, CI/CD, GitHub Actions.",
    icon: FaGitAlt,
    color: "bg-red-500",
  },
  {
    name: "REST APIs",
    percent: 82,
    desc: "Fetch, Axios, REST design, error handling, caching.",
    icon: FaCloud,
    color: "bg-purple-500",
  },
  {
    name: "Responsive Design",
    percent: 94,
    desc: "Mobile-first, fluid grids, container queries.",
    icon: BsDeviceSsd,
    color: "bg-green-500",
  },
];