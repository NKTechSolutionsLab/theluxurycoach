import { ArrowRight, ArrowLeft } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "1:1 Coaching",
    description:
      "Tailored guidance for clarity, confidence, and what’s next.",
  },
  {
    number: "02",
    title: "Group Programs",
    description:
      "Structured experiences for growth, connection, and real transformation.",
  },
  {
    number: "03",
    title: "For Organizations",
    description:
      "Leadership training, workshops, and custom experiences.",
  },
  {
    number: "04",
    title: "Speaking Engagements",
    description:
      "Inspire. Educate. Create change.",
  },
];

const CoachingPrograms = () => {
  return (
    <section
      id="coaching"
      className="relative overflow-hidden bg-[#151412] text-[#F5F0E8]"
    >
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large soft glow */}
        <div className="absolute -right-[10%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#C9A86A]/[0.06] blur-[120px]" />

        {/* Angular editorial shape */}
        <div className="absolute -right-[8%] bottom-[-25%] h-[620px] w-[620px] rotate-[32deg] border border-[#C9A86A]/10" />

        <div className="absolute right-[8%] bottom-[-15%] h-[480px] w-[480px] rotate-[32deg] border border-white/[0.04]" />

        {/* Subtle top curve */}
        <div className="absolute -right-[5%] -top-[45%] h-[650px] w-[850px] rounded-full border border-[#C9A86A]/10" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28 xl:px-16">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[40%_38%_22%] lg:items-end">
          
          {/* Heading */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C9A86A]" />

              <p className="font-['Manrope'] text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A86A]">
                Coaching & Programs
              </p>
            </div>

            <h2 className="font-['Cormorant_Garamond'] text-[48px] font-medium leading-[0.9] tracking-[-0.03em] sm:text-[60px] lg:text-[68px]">
              Different Journeys.
              <br />
              A Common Goal.
            </h2>
          </div>

          {/* Intro */}
          <p className="max-w-[400px] font-['Manrope'] text-[17px] font-light leading-[1.8] text-white/65 lg:pb-1 lg:text-[12px]">
            Support for wherever you are — whether you&apos;re navigating a
            personal transition, stepping into leadership, or driving change
            within your organization.
          </p>

          {/* Arrows */}
          <div className="hidden justify-end gap-3 lg:flex">
            <button
              type="button"
              aria-label="Previous program"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A86A]/50 text-[#C9A86A] transition-all duration-300 hover:bg-[#C9A86A] hover:text-[#151412]"
            >
              <ArrowLeft size={15} strokeWidth={1.2} />
            </button>

            <button
              type="button"
              aria-label="Next program"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A86A]/50 text-[#C9A86A] transition-all duration-300 hover:bg-[#C9A86A] hover:text-[#151412]"
            >
              <ArrowRight size={15} strokeWidth={1.2} />
            </button>
          </div>
        </div>

        {/* =========================================================
            PROGRAMS
        ========================================================= */}
        <div className="mt-16 grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {programs.map((program, index) => (
            <article
              key={program.number}
              className={`
                group relative py-8
                lg:px-6 lg:py-7
                ${index === 0 ? "lg:pl-0" : ""}
                ${index === programs.length - 1 ? "lg:pr-0" : ""}
                ${
                  index !== programs.length - 1
                    ? "border-b border-white/15 sm:border-r lg:border-b-0"
                    : "border-b-0"
                }
              `}
            >
              {/* Number */}
              <span className="font-['Manrope'] text-[12px] font-medium tracking-[0.18em] text-[#C9A86A]">
                {program.number}
              </span>

              {/* Title */}
              <h3 className="mt-5 max-w-[190px] font-['Cormorant_Garamond'] text-[25px] font-medium leading-[1] text-[#F5F0E8] sm:text-[27px]">
                {program.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-[220px] font-['Manrope'] text-[15px] font-light leading-[1.7] text-white/60">
                {program.description}
              </p>

              {/* Arrow */}
              <a
                href="#contact"
                aria-label={`Learn more about ${program.title}`}
                className="mt-7 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-[#F5F0E8] transition-all duration-300 group-hover:border-[#C9A86A] group-hover:bg-[#C9A86A] group-hover:text-[#151412]"
              >
                <ArrowRight
                  size={13}
                  strokeWidth={1.2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A86A] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingPrograms;