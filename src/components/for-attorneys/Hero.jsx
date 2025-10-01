import { ArrowDown, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative lg:rounded-[50px] lg:m-7 lg:mb-0 overflow-hidden px-4 pt-30 bg-[url('/assets/images/about-bg.png')] bg-center bg-no-repeat h-[341px] lg:h-[541px] content-center"
      data-aos="fade-up"
    >
      <div
        className="relative z-10 mx-auto px-4 md:px-8 py-8"
        data-aos="fade-up"
      >
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-4 mb-16 xl:max-w-6xl mx-auto text-center">
          <p
            className="text-white font-inter-tight text-sm md:text-base Fleading-[150%] tracking-tight opacity-80 max-w-2xl"
            data-aos="fade-up"
          >
            Home {">"} For Attorneys
          </p>
          <h1
            className="text-gradient font-helvetica text-3xl md:text-4xl lg:text-[64px] font-bold leading-[110%] tracking-tight capitalize"
            data-aos="fade-up"
          >
            For Attorneys
          </h1>
        </div>
      </div>

      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white/20 blur-[127px]" />
      <div className="absolute bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-white/20 blur-[127px]" />
    </section>
  );
};

export default Hero;
