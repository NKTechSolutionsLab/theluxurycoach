import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import test from "../images/test.png"

const testimonials = [
  {
    quote:
      "Monica has a unique ability to help you see what is possible when you stop allowing old definitions of success to limit you.",
    name: "Client Perspective",
    role: "Executive Coaching",
  },
  {
    quote:
      "Working with Monica gave me the clarity to make decisions I had been avoiding and the confidence to move forward differently.",
    name: "Client Perspective",
    role: "Leadership Development",
  },
  {
    quote:
      "She creates the kind of space where you can be honest about where you are and intentional about where you want to go.",
    name: "Client Perspective",
    role: "Personal Transformation",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F5F0E8] text-[#171514]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-20%] h-[450px] w-[450px] rounded-full border border-[#171514]/[0.035]" />

        <div className="absolute bottom-[-30%] right-[-10%] h-[550px] w-[550px] rounded-full border border-[#C9A86A]/[0.08]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] lg:grid-cols-[35%_65%]">

        {/* =======================================================
            LEFT IMAGE
        ======================================================= */}
        <div className="relative min-h-[430px] overflow-hidden sm:min-h-[500px] lg:min-h-[620px]">
          <img
            src={test}
            alt="Monica Paque"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/65 via-transparent to-transparent" />

          {/* Image label */}
          <div className="absolute bottom-8 left-7 border-l border-[#D8BC88] pl-5 sm:bottom-10 sm:left-10">
            <p className="font-['Manrope'] text-[7px] uppercase tracking-[0.28em] text-[#D8BC88]">
              Real People
            </p>

            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] leading-none text-white">
              Real
              <br />
              Transformation.
            </p>
          </div>
        </div>

        {/* =======================================================
            RIGHT CONTENT
        ======================================================= */}
        <div className="flex flex-col justify-center px-7 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">

          {/* Label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-7 bg-[#C9A86A]" />

            <p className="font-['Manrope'] text-[7px] font-medium uppercase tracking-[0.3em] text-[#9A8667]">
              Words From The Journey
            </p>
          </div>

          {/* Quote icon */}
          <Quote
            size={30}
            strokeWidth={1}
            className="mb-5 text-[#C9A86A]"
          />

          {/* Quote */}
          <div className="min-h-[190px]">
            <blockquote
              key={active}
              className="max-w-[700px] animate-[fadeIn_500ms_ease-out] font-['Cormorant_Garamond'] text-[34px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[42px] lg:text-[48px] xl:text-[54px]"
            >
              &quot;{testimonial.quote}&quot;
            </blockquote>
          </div>

          {/* Attribution */}
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-8 bg-[#C9A86A]" />

            <div>
              <p className="font-['Manrope'] text-[8px] font-semibold uppercase tracking-[0.2em]">
                {testimonial.name}
              </p>

              <p className="mt-1 font-['Manrope'] text-[8px] text-[#171514]/45">
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* =====================================================
              CONTROLS
          ===================================================== */}
          <div className="mt-12 flex items-center justify-between border-t border-[#171514]/10 pt-6">

            {/* Counter */}
            <div className="flex items-center gap-2">
              <span className="font-['Manrope'] text-[8px] font-semibold tracking-[0.15em]">
                0{active + 1}
              </span>

              <span className="h-px w-6 bg-[#171514]/20" />

              <span className="font-['Manrope'] text-[8px] tracking-[0.15em] text-[#171514]/35">
                0{testimonials.length}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171514]/20 transition-all duration-300 hover:border-[#C9A86A] hover:bg-[#C9A86A] hover:text-[#171514]"
              >
                <ArrowLeft
                  size={14}
                  strokeWidth={1.2}
                />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171514]/20 transition-all duration-300 hover:border-[#C9A86A] hover:bg-[#C9A86A] hover:text-[#171514]"
              >
                <ArrowRight
                  size={14}
                  strokeWidth={1.2}
                />
              </button>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5 flex gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className="group h-[2px] flex-1 bg-[#171514]/10"
              >
                <span
                  className={`block h-full transition-all duration-500 ${
                    index === active
                      ? "w-full bg-[#C9A86A]"
                      : "w-0 bg-[#C9A86A]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          LOCAL ANIMATION
      ========================================================= */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;