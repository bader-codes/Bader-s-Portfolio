import Content from "./Content";
import ProImage from "./ProImage";

export default function About() {
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
          <ProImage />

          {/* Content */}
          <Content />
        </div>
      </div>
    </section>
  );
}