const featuredItems = [
  "Forbes",
  "TEDx",
  "Harvard Business Review",
  "Entrepreneur",
  "FAST COMPANY",
];

const FeaturedIn = () => {
  return (
    <section className="relative overflow-hidden border-y border-[#171514]/10 bg-[#F5F0E8] text-[#171514]">

      {/* =========================================================
          DESKTOP FEATURED ROW
      ========================================================= */}
      <div className="mx-auto hidden min-h-[92px] max-w-[1600px] items-center px-6 sm:px-10 md:flex lg:px-14 xl:px-16">

        {/* Label */}
        <div className="hidden shrink-0 border-r border-[#171514]/15 pr-8 md:block lg:pr-10">
          <p className="font-['Manrope'] text-[9px] font-medium uppercase tracking-[0.28em] text-[#9A8667]">
            As Featured In
          </p>
        </div>

        {/* Featured Logos / Names */}
        <div className="flex min-w-0 w-full items-center justify-between gap-6 md:pl-8 lg:pl-10">

          {featuredItems.map((item, index) => (
            <div
              key={item}
              className={`flex items-center ${
                index !== featuredItems.length - 1
                  ? "border-r border-[#171514]/10 pr-6 lg:pr-10"
                  : ""
              }`}
            >
              <span
                className={`
                  whitespace-nowrap
                  font-['Cormorant_Garamond']
                  font-semibold
                  leading-none
                  text-[#171514]
                  ${
                    item === "Harvard Business Review"
                      ? "max-w-[95px] text-[15px] leading-[0.9]"
                      : item === "FAST COMPANY"
                      ? "font-['Manrope'] text-[11px] tracking-[-0.04em]"
                      : "text-[21px]"
                  }
                `}
              >
                {item}
              </span>
            </div>
          ))}

          {/* Closing Statement */}
          <div className="hidden border-l border-[#171514]/15 pl-8 xl:block xl:pl-10">
            <p className="max-w-[105px] font-['Manrope'] text-[7px] font-semibold uppercase leading-[1.6] tracking-[0.2em] text-[#171514]">
              A Higher
              <br />
              Standard
              <br />
              for a More
              <br />
              Intentional Life.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE VERSION
      ========================================================= */}
      <div className="md:hidden">

        {/* Mobile Label */}
        <div className="border-b border-[#171514]/10 px-6 py-4">
          <p className="font-['Manrope'] text-[7px] font-medium uppercase tracking-[0.28em] text-[#9A8667]">
            As Featured In
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="flex gap-10 overflow-x-auto px-6 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          {featuredItems.map((item) => (
            <span
              key={item}
              className={`
                shrink-0 whitespace-nowrap
                font-['Cormorant_Garamond']
                font-semibold
                text-[#171514]
                ${
                  item === "Harvard Business Review"
                    ? "text-[15px]"
                    : item === "FAST COMPANY"
                    ? "font-['Manrope'] text-[10px]"
                    : "text-[20px]"
                }
              `}
            >
              {item}
            </span>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;