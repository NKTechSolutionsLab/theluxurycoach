import { ArrowUpRight, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#151412] text-[#F5F0E8]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large editorial circle */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A86A]/[0.07]" />

        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

        {/* Gold glow */}
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A86A]/[0.06] blur-[100px]" />

        {/* Fine vertical lines */}
        <div className="absolute left-[12%] top-0 h-full w-px bg-white/[0.035]" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-white/[0.035]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1600px] items-center justify-center px-6 py-24 text-center sm:px-10 lg:py-32">

        <div className="max-w-[900px]">

          {/* Label */}
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#C9A86A]" />

            <p className="font-['Manrope'] text-[13px] font-medium uppercase tracking-[0.32em] text-[#C9A86A]">
              Your Next Chapter
            </p>

            <span className="h-px w-7 bg-[#C9A86A]" />
          </div>

          {/* Heading */}
          <h2 className="font-['Cormorant_Garamond'] text-[60px] font-medium leading-[0.86] tracking-[-0.04em] sm:text-[78px] md:text-[92px] lg:text-[107px]">
            Let&apos;s Create
            <br />
            <span className="italic text-[#D8BC88]">What&apos;s Next.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-[520px] font-['Manrope'] text-[13px] font-light leading-[1.85] text-white/55 sm:text-[14px]">
            Whether you&apos;re ready to lead differently, think bigger, or
            create a life that feels more intentional, the next step starts
            with a conversation.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@theluxury.coach"
              className="group inline-flex h-[50px] items-center gap-3 rounded-full bg-[#D8BC88] px-8 font-['Manrope'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#151412] transition-all duration-300 hover:bg-[#E5CEA0] hover:shadow-[0_12px_40px_rgba(216,188,136,0.12)]"
            >
              Start a Conversation

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#coaching"
              className="group inline-flex h-[50px] items-center gap-3 rounded-full border border-white/20 px-7 font-['Manrope'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8] transition-all duration-300 hover:border-[#C9A86A] hover:text-[#D8BC88]"
            >
              Explore Coaching

              <ArrowRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* =====================================================
              BRAND STATEMENT
          ===================================================== */}
          <div className="mx-auto mt-20 flex max-w-[600px] items-center justify-center gap-5">
            <span className="h-px flex-1 bg-white/10" />

            <div>
              <p className="font-['Cormorant_Garamond'] text-[22px] tracking-[0.02em] text-[#F5F0E8]">
                The Luxury Coaching
                <sup className="ml-0.5 align-top font-['Manrope'] text-[8px] text-[#C9A86A]">
                  ™
                </sup>
              </p>

              <p className="mt-1 font-['Manrope'] text-[8px] uppercase tracking-[0.28em] text-white/35">
                Coach · Author · Speaker
              </p>
            </div>

            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;