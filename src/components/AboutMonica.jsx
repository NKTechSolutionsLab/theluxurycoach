import { ArrowRight, Award, BookOpen, Mic2, Sparkles } from "lucide-react";
import about from "../images/monica.png"

const roles = [
  {
    icon: Award,
    title: "Coach",
    description: "Personalized guidance for your next chapter.",
  },
  {
    icon: BookOpen,
    title: "Author",
    description: "Insights that inspire a bigger you.",
  },
  {
    icon: Mic2,
    title: "Speaker",
    description: "Conversations that create change.",
  },
  {
    icon: Sparkles,
    title: "Change-Maker",
    description: "Building people, communities, and opportunities.",
  },
];

const AboutMonica = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#F5F0E8] text-[#171514]"
    >
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[46%_54%]">

        {/* =========================================================
            IMAGE SIDE
        ========================================================= */}
        <div className="relative min-h-[520px] overflow-hidden sm:min-h-[600px] lg:min-h-[650px]">
          <img
            src={about}
            alt="Monica Paque"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/75 via-transparent to-transparent" />

          {/* Vertical label */}
          <div className="absolute bottom-8 left-7 sm:bottom-10 sm:left-10">
            <div className="border-l border-[#D8BC88] pl-5">
              <p className="font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.28em] text-[#D8BC88]">
                More
                <br />
                Than
                <br />
                Success
              </p>

              <div className="my-5 h-px w-8 bg-[#D8BC88]/70" />

              <p className="font-['Manrope'] text-[9px] uppercase leading-[1.8] tracking-[0.24em] text-white/80">
                People
                <br />
                Purpose
                <br />
                Progress
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            CONTENT SIDE
        ========================================================= */}
        <div className="flex flex-col justify-center px-7 py-16 sm:px-10 sm:py-20 lg:px-12 xl:px-20 xl:py-24">

          {/* Section label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#C9A86A]" />

            <p className="font-['Manrope'] text-[11px] font-medium uppercase tracking-[0.3em] text-[#9A8667]">
              About Monica
            </p>
          </div>

          {/* Heading */}
          <h2 className="max-w-[620px] font-['Cormorant_Garamond'] text-[46px] font-medium leading-[0.95] tracking-[-0.03em] sm:text-[58px] lg:text-[62px] xl:text-[70px]">
            A Coach. A Voice.
            <br />
            A Catalyst for Change.
          </h2>

          {/* Body */}
          <p className="mt-7 max-w-[570px] font-['Manrope'] text-[13px] lg:text-[17px] font-light leading-[1.85] text-[#171514]/70 ">
            Monica Paque is a coach, author, and speaker dedicated to
            helping individuals and organizations create meaningful,
            lasting change. Through practical tools, real conversations,
            and transformative experiences, she empowers people to lead
            with clarity, live with intention, and make a greater impact.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#contact"
              className="group inline-flex h-[46px] items-center gap-3 rounded-full bg-[#171514] px-7 font-['Manrope'] text-[10px] font-semibold uppercase tracking-[0.17em] text-[#F5F0E8] transition-all duration-300 hover:bg-[#C9A86A] hover:text-[#171514]"
            >
              Get to Know Monica

              <ArrowRight
                size={13}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* =======================================================
              ROLES
          ======================================================= */}
          <div className="mt-12 border-l border-[#171514]/15 pl-6 sm:mt-14 sm:pl-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {roles.map((role) => {
                const Icon = role.icon;

                return (
                  <div
                    key={role.title}
                    className="group flex gap-4"
                  >
                    {/* Icon */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#9A8667]">
                      <Icon
                        size={19}
                        strokeWidth={1.2}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-[22px] font-semibold leading-none">
                        {role.title}
                      </h3>

                      <p className="mt-1.5 max-w-[190px] font-['Manrope'] text-[13px] leading-[1.55] text-[#171514]/55">
                        {role.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMonica;