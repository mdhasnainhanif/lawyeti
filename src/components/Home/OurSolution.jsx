import React from "react";

const OurSolution = () => {
  return (
    <section className="py-16 md:py-24" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div
          className="flex justify-center items-center gap-6 mb-8"
          data-aos="fade-up"
        >
          <div className="flex px-6 md:px-8 py-3 items-start gap-3 rounded-full bg-gold/20">
            <span className="text-white font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight">
              Our Solution
            </span>
          </div>
        </div>

        <h2
          className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-6 max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          Real-time Time Assistance that is fast, secure, and human
        </h2>
        <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-16 container">
        Fast. Secure. Human. Real-time legal support, when you need it most.
        </p>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-left"
          data-aos="fade-up"
        >
          <div className="content-center justify-end lg:text-end space-y-12">
            <div data-aos="fade-left">
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[40px] font-medium leading-[130%] tracking-tight capitalize mb-4">
              AI-Powered Matching 
              </h3>
              <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-4">
                Connect with the right attorney in seconds.
              </p>
            </div>

            <div data-aos="fade-right">
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[40px] font-medium leading-[130%] tracking-tight capitalize mb-4">
              Real-Time Legal Sessions 
              </h3>
              <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-4">
              Secure, fast, and human-driven assistance through audio/Video calls
              </p>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[40px] font-medium leading-[130%] tracking-tight capitalize mb-4">
              Seamless Billing & Payments
              </h3>
              <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-4">
              Transparent systems that make it easy to bill and get paid.
              </p>
            </div>
          </div>
          <div className="relative max-w-md mx-auto mb-16" data-aos="fade-up">
            <img
              src="/assets/images/feature-grid-image.png"
              alt="Mobile app interface"
              className="w-full h-auto rounded-[67px]"
            />
          </div>
          <div
            className="content-center justify-start text-start space-y-12"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[40px] font-medium leading-[130%] tracking-tight capitalize mb-4">
              Educational Resources 
              </h3>
              <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-4">
                LAWYETI Voice feature helps people understand their rights and mental wellness support.
              </p>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[40px] font-medium leading-[130%] tracking-tight capitalize mb-4">
              Hybrid Promometer Model
              </h3>
              <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-4">
              Incentivizes user and attorney growth via commission.
              </p>
            </div>

            <div data-aos="fade-right">
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[40px] font-medium leading-[130%] tracking-tight capitalize mb-4">
              	API and CRM Integration
              </h3>
              <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-4">
              Enabling enhanced functionality and user ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
