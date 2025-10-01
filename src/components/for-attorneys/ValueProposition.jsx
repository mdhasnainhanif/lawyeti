const ValueProposition = () => {
  return (
    <section className="relative py-20 overflow-hidden" data-aos="fade-up">
      {/* Background pattern */}
      <div className="absolute -top-10 -z-1">
        <img 
          src="/assets/images/page-shadow.png" 
          alt="Background pattern"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Main Headline */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-medium leading-[130%] tracking-[-1.04px] text-gradient capitalize max-w-4xl mx-auto">
            Join LAWYETI. Access Unlimited Leads. Get Paid Directly.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lawyeti-white-80 font-helvetica text-base leading-[170%] opacity-80">
              Join LAWYETI to streamline your practice, reduce client acquisition cost, and focus on what matters most: serving clients. Our platform connects you directly with individuals seeking immediate legal assistance — giving you unlimited leads and the tools to manage your practice more efficiently.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full  rounded-[50.74px] border-l border-white/50 bg-lawyeti-dark-grey overflow-hidden">
              <div className="p-7">
                <img 
                  src="/assets/images/valueProposition.png" 
                  alt="Professional meeting"
                  className="w-full h-[400px] object-cover rounded-[30px] border-l border-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
