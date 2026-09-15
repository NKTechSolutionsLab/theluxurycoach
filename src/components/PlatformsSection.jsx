const platforms = [
  {
    number: "01",
    category: "Core Experience",
    title: "The Luxury Coaching™",
    description:
      "Executive presence, leadership, and advisory work for people ready to lead with greater clarity, authority, and intention.",
    href: "#coaching",
    featured: true,
  },
  {
    number: "02",
    category: "Digital Product",
    title: "Corporate Fables™",
    description:
      "A different way to explore the stories, patterns, and dynamics that shape professional life.",
    href: "#book",
  },
  {
    number: "03",
    category: "Leadership",
    title: "Leadership & Advisory",
    description:
      "Strategic support for leaders navigating visibility, responsibility, change, and growth.",
    href: "#organizations",
  },
  {
    number: "04",
    category: "For Organizations",
    title: "Workplace Experiences",
    description:
      "Programs, workshops, and conversations designed around leadership, people, culture, and performance.",
    href: "#organizations",
  },
  {
    number: "05",
    category: "Digital Products",
    title: "SaaS & Platforms",
    description:
      "Digital experiences that extend Monica's work beyond traditional coaching and advisory.",
    href: "#platforms",
  },
];

const ArrowIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    className={className}
  >
    <path d="M5 19L19 5" />
    <path d="M8 5h11v11" />
  </svg>
);

const PlatformsSection = () => {
  return (
    <section
      id="platforms"
      className="relative overflow-hidden bg-[#F5F0E8] text-[#171514]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-18%] top-[-8%] h-[650px] w-[650px] rounded-full border border-[#171514]/[0.035]" />

        <div className="absolute right-[-8%] top-[8%] h-[460px] w-[460px] rounded-full border border-[#C9A86A]/[0.09]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#171514]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28 xl:px-16">

        {/* =======================================================
            INTRO
        ======================================================= */}
        <div className="grid gap-10 lg:grid-cols-[58%_42%] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C9A86A]" />

              <p className="font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.3em] text-[#9A8667]">
                Beyond Coaching
              </p>
            </div>

            <h2 className="max-w-[800px] font-['Cormorant_Garamond'] text-[50px] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[64px] lg:text-[74px]">
              One Brand.
              <br />
              <span className="italic text-[#9A8667]">
                Many Ways to Engage.
              </span>
            </h2>
          </div>

          <div className="max-w-[430px] lg:ml-auto">
            <p className="font-['Manrope'] text-[13px] font-light leading-[1.85] text-[#171514]/60 sm:text-[14px]">
              The Luxury Coaching™ extends beyond one-to-one coaching into
              leadership, organizational work, digital products, and new ways
              of thinking about the experience of work.
            </p>
          </div>
        </div>

        {/* =======================================================
            CENTRAL FEATURED PLATFORM
        ======================================================= */}
        <div className="mt-16 sm:mt-20 lg:mt-24">

          <a
            href="#coaching"
            className="
              group relative block overflow-hidden
              border border-[#171514]/10
              bg-[#171514]
              text-[#F5F0E8]
              transition-colors duration-500
              hover:bg-[#1d1b19]
            "
          >
            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-[430px] w-[430px] rounded-full border border-[#C9A86A]/10 transition-transform duration-700 group-hover:scale-110" />

            <div className="pointer-events-none absolute -right-4 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-white/[0.04]" />

            {/* Content */}
            <div className="relative z-10 grid lg:grid-cols-[18%_57%_25%]">

              {/* Number */}
              <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
                <span className="font-['Manrope'] text-[9px] tracking-[0.2em] text-[#D8BC88]">
                  01
                </span>

                <p className="mt-4 max-w-[100px] font-['Manrope'] text-[8px] uppercase leading-[1.5] tracking-[0.2em] text-white/40">
                  Core
                  <br />
                  Experience
                </p>
              </div>

              {/* Main Content */}
              <div className="p-7 sm:p-10 lg:p-14">

                <p className="font-['Manrope'] text-[9px] uppercase tracking-[0.25em] text-[#9A8667]">
                  The Front Door
                </p>

                <h3 className="mt-5 max-w-[720px] font-['Cormorant_Garamond'] text-[48px] font-medium leading-[0.9] tracking-[-0.03em] sm:text-[60px] lg:text-[68px]">
                  The Luxury
                  <br />
                  Coaching™
                </h3>

                <p className="mt-7 max-w-[570px] font-['Manrope'] text-[11px] font-light leading-[1.85] text-white/55 sm:text-[13px]">
                  {platforms[0].description}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="font-['Manrope'] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D8BC88]">
                    Explore Coaching
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A86A]/40 text-[#D8BC88] transition-all duration-300 group-hover:border-[#D8BC88] group-hover:bg-[#D8BC88] group-hover:text-[#171514]">
                    <ArrowIcon />
                  </span>
                </div>
              </div>

              {/* Side statement */}
              <div className="flex flex-col justify-end border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

                <span className="mb-4 h-px w-8 bg-[#C9A86A]" />

                <p className="max-w-[190px] font-['Cormorant_Garamond'] text-[26px] italic leading-[1.05] text-[#F5F0E8]">
                  Presence is not softness.
                  <br />
                  Authority is not volume.
                </p>

                <p className="mt-5 font-['Manrope'] text-[8px] uppercase tracking-[0.18em] text-white/30">
                  Leadership · Presence · Strategy
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* =======================================================
            SECONDARY EXPERIENCES
        ======================================================= */}
        <div className="mt-px border-x border-b border-[#171514]/10">

          {platforms.slice(1).map((platform, index) => (
            <a
              key={platform.number}
              href={platform.href}
              className="
                group relative grid
                border-t border-[#171514]/10
                transition-colors duration-500
                hover:bg-[#EDE7DD]
                lg:grid-cols-[10%_25%_45%_20%]
              "
            >

              {/* Number */}
              <div className="flex items-start p-6 sm:p-8 lg:items-center lg:p-10">
                <span className="font-['Manrope'] text-[9px] font-medium tracking-[0.2em] text-[#9A8667]">
                  {platform.number}
                </span>
              </div>

              {/* Category */}
              <div className="px-6 pb-2 sm:px-8 lg:flex lg:items-center lg:px-6 lg:py-10">
                <p className="font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.22em] text-[#9A8667]">
                  {platform.category}
                </p>
              </div>

              {/* Main Content */}
              <div className="px-6 pb-7 sm:px-8 lg:px-6 lg:py-10">
                <h3 className="font-['Cormorant_Garamond'] text-[31px] font-medium leading-[0.95] tracking-[-0.02em] sm:text-[36px]">
                  {platform.title}
                </h3>

                <p className="mt-4 max-w-[470px] font-['Manrope'] text-[10px] font-light leading-[1.75] text-[#171514]/55 sm:text-[12px]">
                  {platform.description}
                </p>
              </div>

              {/* Action */}
              <div className="flex items-end justify-start px-6 pb-7 sm:px-8 lg:items-center lg:justify-end lg:px-10 lg:py-10 lg:pb-10">
                <div className="flex items-center gap-3 text-[#9A8667] transition-colors duration-300 group-hover:text-[#171514]">
                  <span className="font-['Manrope'] text-[8px] font-semibold uppercase tracking-[0.18em]">
                    Explore
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#9A8667]/30 transition-all duration-300 group-hover:border-[#171514]/30 group-hover:bg-[#171514] group-hover:text-[#F5F0E8]">
                    <ArrowIcon />
                  </span>
                </div>
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A86A] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* =======================================================
            CONNECTING STATEMENT
        ======================================================= */}
        <div className="mt-16 grid gap-7 border-t border-[#171514]/10 pt-8 sm:mt-20 sm:pt-10 lg:grid-cols-[1fr_auto] lg:items-center">

          <div>
            <p className="font-['Cormorant_Garamond'] text-[25px] italic leading-[1.1] text-[#171514]/75 sm:text-[28px]">
              Different entry points.
              <br />
              <span className="text-[#9A8667]">
                One philosophy.
              </span>
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-['Manrope'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#171514]"
          >
            Discover Your Next Step

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171514]/20 transition-all duration-300 group-hover:border-[#C9A86A] group-hover:bg-[#C9A86A]">
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;