import { ArrowRight } from "lucide-react";
import impact from "../images/impact.png";

const stats = [
  {
    value: "1K+",
    label: "Individuals\nCoached",
  },
  {
    value: "100+",
    label: "Leaders\nSupported",
  },
  {
    value: "50+",
    label: "Organizations\nImpacted",
  },
];

const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#151412] text-[#F5F0E8]"
    >
      {/* =========================================================
          BACKGROUND DETAIL
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-25%] h-[500px] w-[500px] rounded-full border border-[#C9A86A]/[0.06]" />

        <div className="absolute right-[-10%] bottom-[-35%] h-[650px] w-[650px] rounded-full border border-white/[0.035]" />

        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/[0.035] lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28 xl:px-16">

        {/* =======================================================
            HEADER
        ======================================================= */}
        <div className="max-w-[680px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#C9A86A]" />

            <p className="font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.3em] text-[#C9A86A]">
              The Impact
            </p>
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-[50px] font-medium leading-[0.9] tracking-[-0.03em] sm:text-[62px] lg:text-[72px]">
            Growth Is More Than
            <br />
            a Number.
          </h2>

          <p className="mt-6 max-w-[500px] font-['Manrope'] text-[13px] font-light leading-[1.8] text-white/60 sm:text-[14px]">
            Real transformation is measured in the decisions people make,
            the confidence they build, and the lives and organizations they
            go on to influence.
          </p>
        </div>

        {/* =======================================================
            STATS
        ======================================================= */}
        <div className="mt-16 grid grid-cols-1 border-y border-white/15 sm:grid-cols-3 lg:mt-20">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`
                relative py-9 sm:py-10
                ${
                  index !== stats.length - 1
                    ? "border-b border-white/15 sm:border-b-0 sm:border-r"
                    : ""
                }
                ${index === 0 ? "sm:pr-8" : ""}
                ${index === 1 ? "sm:px-8" : ""}
                ${index === 2 ? "sm:pl-8" : ""}
              `}
            >
              <span className="font-['Cormorant_Garamond'] text-[64px] font-medium leading-none tracking-[-0.04em] text-[#D8BC88] sm:text-[72px] lg:text-[84px]">
                {stat.value}
              </span>

              <p className="mt-3 whitespace-pre-line font-['Manrope'] text-[10px] font-medium uppercase leading-[1.6] tracking-[0.22em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* =======================================================
            TESTIMONIAL
        ======================================================= */}
        <div className="mt-20 grid gap-12 lg:mt-24 lg:grid-cols-[55%_45%] lg:gap-0">

          {/* Quote */}
          <div className="flex flex-col justify-center lg:pr-20 xl:pr-28">
            <span className="font-['Cormorant_Garamond'] text-[60px] leading-none text-[#C9A86A]">
              “
            </span>

            <blockquote className="-mt-2 max-w-[650px] font-['Cormorant_Garamond'] text-[32px] font-medium leading-[1.12] tracking-[-0.015em] text-[#F5F0E8] sm:text-[38px] lg:text-[42px]">
              Monica has a unique ability to help you see what&apos;s possible
              when you stop allowing old definitions of success to limit you.
            </blockquote>

            {/* Attribution */}
            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-8 bg-[#C9A86A]" />

              <div>
                <p className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F0E8]">
                  Client Perspective
                </p>

                <p className="mt-1 font-['Manrope'] text-[10px] text-white/45">
                  Leadership &amp; Coaching
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              IMAGE / STORY PANEL
          ===================================================== */}
          <div className="relative min-h-[400px] overflow-hidden sm:min-h-[480px] lg:min-h-[500px]">

            <img
              src={impact}
              alt="A moment of reflection"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151412]/80 via-transparent to-transparent" />

            {/* Corner label */}
            <div className="absolute bottom-7 left-7 border-l border-[#D8BC88] pl-4 sm:bottom-9 sm:left-9">
              <p className="font-['Manrope'] text-[9px] uppercase tracking-[0.25em] text-[#D8BC88]">
                Transformation
              </p>

              <p className="mt-2 max-w-[170px] font-['Cormorant_Garamond'] text-[22px] leading-[1] text-white">
                Starts with
                <br />
                one decision.
              </p>
            </div>

            {/* Image number */}
            <span className="absolute right-6 top-6 font-['Manrope'] text-[9px] tracking-[0.2em] text-white/50 sm:right-8 sm:top-8">
              04 / 06
            </span>
          </div>
        </div>

        {/* =======================================================
            CTA
        ======================================================= */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-['Manrope'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8BC88]"
          >
            Explore the Possibilities

            <ArrowRight
              size={16}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;