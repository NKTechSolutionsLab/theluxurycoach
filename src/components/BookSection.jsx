const BookSection = () => {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-[#F5F0E8] text-[#171514]"
    >
      {/* =========================================================
          BACKGROUND DETAIL
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#171514]/[0.035]" />

        <div className="absolute -right-10 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#C9A86A]/[0.08]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#171514]/10" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center lg:grid-cols-[38%_30%_32%]">

        {/* =========================================================
            LEFT — PRODUCT INTRO
        ========================================================= */}
        <div className="px-7 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#C9A86A]" />

            <p className="font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.3em] text-[#9A8667]">
              A Digital Experience
            </p>
          </div>

          {/* Title */}
          <h2 className="max-w-[470px] font-['Cormorant_Garamond'] text-[52px] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[62px] lg:text-[68px]">
            The Little App
            <br />
            of Corporate
            <br />
            Fables™
          </h2>

          {/* Subtitle */}
          <p className="mt-6 max-w-[390px] font-['Cormorant_Garamond'] text-[25px] leading-[1.15] text-[#171514]/90 sm:text-[25px]">
            Stories that make the
            <br />
            workplace worth noticing.
          </p>

          {/* Description */}
          <p className="mt-5 max-w-[390px] font-['Manrope'] text-[15px] font-light leading-[1.85] text-[#171514]/65">
            Monica's Corporate Fables bring a different lens to work,
            leadership, people, and the everyday dynamics that shape
            the experience of being in an organization.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://fables.theluxury.coach/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex h-[46px] items-center gap-3
                rounded-full bg-[#171514] px-7
                font-['Manrope'] text-[13px] font-semibold
                uppercase tracking-[0.15em] text-[#F5F0E8]
                transition-all duration-300
                hover:bg-[#C9A86A]
                hover:text-[#171514]
              "
            >
              Explore The Fables

              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* =========================================================
            CENTER — DIGITAL EXPERIENCE VISUAL
        ========================================================= */}
        <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden px-8 sm:min-h-[540px] lg:min-h-[600px]">

          {/* Ambient circles */}
          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A86A]/[0.08] blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#171514]/10" />

          {/* Product frame */}
          <div className="relative z-10 w-[250px] sm:w-[280px] lg:w-[300px]">

            {/* Shadow */}
            <div className="absolute -bottom-8 left-1/2 h-10 w-[190px] -translate-x-1/2 rounded-[50%] bg-black/15 blur-2xl" />

            {/* Browser / app frame */}
            <div className="relative overflow-hidden rounded-[22px] border border-[#171514]/15 bg-[#171514] shadow-[20px_28px_50px_rgba(23,21,20,0.22)]">

              {/* Browser top */}
              <div className="flex h-8 items-center gap-1.5 border-b border-[#F5F0E8]/10 px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9A8667]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#9A8667]/45" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#9A8667]/25" />
              </div>

              {/* Product visual */}
              <div className="flex min-h-[470px] flex-col bg-[#171514] px-7 py-10 sm:min-h-[480px] lg:min-h-[450px]">

                {/* Brand */}
                <p className="font-['Manrope'] text-[14px] uppercase tracking-[0.3em] text-[#9A8667]">
                  The Luxury Coaching™
                </p>

                {/* Main content */}
                <div className="mt-10">

                  <p className="font-['Cormorant_Garamond'] text-[17px] italic text-[#9A8667]">
                    Workplace stories
                  </p>

                  <h3 className="mt-2 font-['Cormorant_Garamond'] text-[34px] leading-[0.9] text-[#F5F0E8]">
                    Corporate
                    <br />
                    Fables™
                  </h3>

                  <div className="mt-7 h-px w-12 bg-[#C9A86A]" />

                  <p className="mt-6 max-w-[185px] font-['Manrope'] text-[15px] leading-[1.8] text-[#F5F0E8]/55">
                    A different way to look at the stories,
                    patterns, and dynamics that shape work.
                  </p>
                </div>

                {/* Story card */}
                <div className="mt-8 w-full rounded-[12px] border border-[#9A8667]/20 bg-[#F5F0E8]/[0.04] p-4">

                  <p className="font-['Manrope'] text-[13px] uppercase tracking-[0.25em] text-[#9A8667]">
                    A Fable
                  </p>

                  <p className="mt-2 font-['Cormorant_Garamond'] text-[19px] italic leading-[1.1] text-[#F5F0E8]">
                    Every workplace has a story.
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* Vertical decorative line */}
          <div className="absolute bottom-0 left-1/2 h-[75%] w-px -translate-x-1/2 bg-[#171514]/[0.045]" />
        </div>

        {/* =========================================================
            RIGHT — EXPERIENCE / BRAND STORY
        ========================================================= */}
        <div className="px-7 pb-16 pt-4 sm:px-10 sm:pb-20 lg:px-12 lg:py-24 xl:px-16">

          <div className="border-l border-[#171514]/15 pl-7 sm:pl-9">

            {/* Small label */}
            <p className="font-['Manrope'] text-[13px] font-medium uppercase tracking-[0.25em] text-[#9A8667]">
              More Than A Story
            </p>

            {/* Main statement */}
            <h3 className="mt-5 max-w-[350px] font-['Cormorant_Garamond'] text-[31px] leading-[1.05] text-[#171514] sm:text-[36px]">
              The workplace has a
              <span className="italic text-[#9A8667]">
                {" "}story
              </span>
              <br />
              behind the story.
            </h3>

            <p className="mt-6 max-w-[340px] font-['Manrope'] text-[15px] font-light leading-[1.85] text-[#171514]/60 ">
              Corporate Fables creates space to notice the patterns,
              contradictions, behaviors, and moments that often go
              unspoken in professional life.
            </p>

            {/* Feature points */}
            <div className="mt-8 space-y-5">

              {/* Perspective */}
              <div className="flex gap-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A86A]" />

                <div>
                  <p className="font-['Manrope'] text-[13px] font-semibold uppercase tracking-[0.16em]">
                    Perspective
                  </p>

                  <p className="mt-1.5 max-w-[280px] font-['Manrope'] text-[15px] leading-[1.7] text-[#171514]/55">
                    Look at familiar workplace experiences through
                    a different lens.
                  </p>
                </div>
              </div>

              {/* Conversation */}
              <div className="flex gap-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A86A]" />

                <div>
                  <p className="font-['Manrope'] text-[12px] font-semibold uppercase tracking-[0.16em]">
                    Conversation
                  </p>

                  <p className="mt-1.5 max-w-[280px] font-['Manrope'] text-[15px] leading-[1.7] text-[#171514]/55">
                    Stories can open conversations that traditional
                    workplace language often cannot.
                  </p>
                </div>
              </div>

              {/* Reflection */}
              <div className="flex gap-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A86A]" />

                <div>
                  <p className="font-['Manrope'] text-[13px] font-semibold uppercase tracking-[0.16em]">
                    Reflection
                  </p>

                  <p className="mt-1.5 max-w-[280px] font-['Manrope'] text-[15px] leading-[1.7] text-[#171514]/55">
                    A moment to pause, recognize what is happening,
                    and see what might be possible.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom link */}
          <div className="mt-12 flex items-center gap-4 border-t border-[#171514]/10 pt-5">

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#9A8667]/30 text-[#9A8667]">
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>

            <p className="font-['Manrope'] text-[13px] uppercase tracking-[0.18em] text-[#171514]/55">
              Stories · Work · Leadership · Perspective
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;