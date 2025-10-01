import { Sparkles } from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-6 mb-8 justify-center">
          <div
            className="flex px-6 md:px-8 justify-center py-3 items-start gap-3 rounded-full bg-gold/20"
            data-aos="fade-up"
          >
            <span className="text-white items-center justify-center block mx-auto font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight">
              About Us
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left 6/12 */}
          <div className="lg:col-span-12">
            <h2
              className="text-center text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize "
              data-aos="fade-up"
            >
              Get CRM helps you Find Best Lawyers
            </h2>
          </div>

          {/* Right 6/12 */}
          {/* <div className="lg:col-span-6">
            <p
              className="text-white/80 ms-auto max-w-[500px] font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80"
              data-aos="fade-up"
            >
              Eu tempor luctus eget iaculis nisi. Aliquam lacus amet phasellus
              id feugiat faucibus etiam tortor. Scelerisque maecenas dui purus
              amet et neque mauris quis amet. Morbi lobortis
            </p>
          </div> */}

          {/* Process Steps 6/12 */}
          <div className="lg:col-span-6 space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6" data-aos="fade-up">
              <div className="min-w-11 min-h-11 bg-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                  Sign Up
                </h3>
                <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                Be among the first to experience LAWYETI’s AI-powered legal platform. Sign up today to join our early access community and receive updates on our launch, exclusive previews, and special membership benefits.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6" data-aos="fade-up">
              <div className="min-w-11 min-h-11 bg-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                Matched with your Lawyer
                </h3>
                <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                Finding the right legal help shouldn’t be complicated. With LAWYETI, Legal help is just a click away- anytime, anywhere. Whether it’s urgent legal advice, ongoing representation, or expert guidance, you’ll be instantly matched with a licensed attorney who specializes in your specific situation
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6" data-aos="fade-up">
              <div className="min-w-11 min-h-11 bg-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                Bill & get paid
                </h3>
                <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                LAWYETI makes legal work hassle-free — not just for clients, but for attorneys too. With our built-in billing system, lawyers can manage invoices, track time, and receive payments securely — all within the platform.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section 6/12 */}
          <div className="lg:col-span-6 space-y-6" data-aos="fade-left">
            <div className="relative overflow-hidden">
              <img
                src="/assets/images/about-us-mobile.png"
                alt="Legal platform interface"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute -top-10 -z-1">
        <img
          src="/assets/images/page-shadow.png"
          alt="Background pattern"
          className="w-full h-full object-cover object-center"
        />
      </div> */}
    </section>
  );
};

export default AboutUs;
