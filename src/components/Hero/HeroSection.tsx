import Content from "./HeroContent";

export default function Hero() {
  return (
    <section className='min-h-svh flex items-center justify-center relative'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full blur-3xl opacity-20 w-150 h-150 bg-[#4f9bf9a4] -top-30 -left-30"></div>
        <div className="absolute rounded-full blur-3xl opacity-20 w-100 h-100 bg-[#7a6cf97e] -bottom-20 -right-10"></div>
        <div className="absolute rounded-full blur-3xl opacity-20 w-100 h-100 bg-[#4ff9d784] top-[40%] left-[50%]"></div>
        <div className="grid-lines absolute inset-0"></div>
      </div>

      <Content />
    </section>
  )
}