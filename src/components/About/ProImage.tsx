import { motion } from "motion/react";

export default function ProImage() {
  return (
    <div className="overflow-hidden w-full h-100">
      <motion.div
        className="relative w-full max-w-70 sm:max-w-90 mx-auto lg:mx-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img
          src="/photo_2026-04-09_18-42-43.jpg"
          className="w-full rounded-2xl object-cover aspect-4/5"
          alt="Bader Mohammed"
        />
        <p className="absolute -bottom-4 -right-4 bg-sky-400 px-3 py-2 rounded-md font-semibold text-sm">
          {`</> Open to work`}
        </p>
      </motion.div>
    </div>
  );
}