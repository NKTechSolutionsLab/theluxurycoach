import { ArrowRight, Play } from "lucide-react";
import hero from "../images/hero.png"
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#151412] text-[#F5F0E8]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Monica Paque"
          className="h-full w-full object-cover object-[65%_center]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left-side gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/95 via-[#0d0c0b]/65 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#151412] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-24 pt-32 sm:px-10 lg:px-14 xl:px-20">
        <div className="w-full max-w-[680px]">
          
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A86A]" />

            <p className="font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.3em] text-[#C9A86A]">
              Clarity · Strategy · Freedom
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-['Cormorant_Garamond'] text-[58px] font-medium leading-[0.88] tracking-[-0.035em] text-[#F5F0E8] sm:text-[76px] md:text-[88px] lg:text-[96px]">
            A Fuller You.
            <br />

            <span className="italic">
              A Bolder{" "}
              <span className="text-[#D8BC88]">Impact.</span>
            </span>

            <sup className="ml-1 align-top font-['Manrope'] text-[9px] font-medium not-italic tracking-normal text-[#C9A86A]">
              ™
            </sup>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[490px] font-['Manrope'] text-[13px] font-light leading-[1.8] text-white/75 sm:text-[14px]">
            Coaching, tools, and transformative experiences to help you
            think bigger, live with intention, and create what&apos;s next —
            in your life, your work, and your community.
          </p>

          {/* CTA Row */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex h-[50px] items-center gap-3 rounded-full bg-[#D8BC88] px-7 font-['Manrope'] text-[9px] font-semibold uppercase tracking-[0.16em] text-[#151412] transition-all duration-300 hover:bg-[#E5CEA0]"
            >
              Work With Monica

              <ArrowRight
                size={14}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Story CTA */}
            <a
              href="#about"
              className="group inline-flex items-center gap-3 font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.16em] text-[#F5F0E8]"
            >
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#C9A86A]/70 transition-all duration-300 group-hover:border-[#D8BC88] group-hover:bg-[#D8BC88]/10">
                <Play
                  size={12}
                  fill="currentColor"
                  strokeWidth={1.2}
                  className="ml-[2px]"
                />
              </span>

              Watch Story
            </a>
          </div>

          {/* Bottom Principles */}
          <div className="mt-16 grid max-w-[550px] grid-cols-3 border-t border-white/15 pt-6">
            
            <div className="border-r border-white/15 pr-5">
              <p className="font-['Manrope'] text-[9px] uppercase tracking-[0.22em] text-[#C9A86A]">
                People
              </p>

              <p className="mt-2 font-['Manrope'] text-[9px] leading-[1.5] text-white/65">
                More Clarity
              </p>
            </div>

            <div className="border-r border-white/15 px-5">
              <p className="font-['Manrope'] text-[9px] uppercase tracking-[0.22em] text-[#C9A86A]">
                Purpose
              </p>

              <p className="mt-2 font-['Manrope'] text-[9px] leading-[1.5] text-white/65">
                More Opportunity
              </p>
            </div>

            <div className="pl-5">
              <p className="font-['Manrope'] text-[9px] uppercase tracking-[0.22em] text-[#C9A86A]">
                Progress
              </p>

              <p className="mt-2 font-['Manrope'] text-[9px] leading-[1.5] text-white/65">
                A Fuller You
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side Quote */}
      <div className="absolute bottom-14 right-8 z-10 hidden w-[170px] lg:right-14 lg:block xl:right-20">
        <div className="mb-5 h-px w-8 bg-[#C9A86A]" />

        <blockquote className="font-['Cormorant_Garamond'] text-[16px] leading-[1.25] text-[#F5F0E8]">
          &quot;You get to have both — success and a life you love.&quot;
        </blockquote>

        <p className="mt-4 font-['Manrope'] text-[7px] uppercase tracking-[0.25em] text-[#C9A86A]">
          Monica Paque
        </p>

        {/* Signature */}
        <p className="mt-3 font-['Cormorant_Garamond'] text-[27px] italic text-[#D8BC88]">
          Monica
        </p>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-12 right-[18%] hidden h-16 w-px bg-white/10 lg:block" />
    </section>
  );
};

export default Hero;