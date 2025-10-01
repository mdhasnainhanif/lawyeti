const FeatureBenefits = () => {
  const features = [
    {
      title: "Unlimited Leads ",
      description:
        "Access a steady stream of clients matched to your expertise.",
      icon: "/assets/images/beni-1.png",
    },
    {
      title: "Direct Payments",
      description: "Bill and get paid seamlessly through secure in-app tools",
      icon: "/assets/images/beni-2.png",
    },
    {
      title: "Practice Growth",
      description:
        "Expand visibility and reach new clients nationwide.",
      icon: "/assets/images/beni-3.png",
    },
    {
      title: "Time-Saving Tools",
      description: "Automated billing, referrals, and session management.",
      icon: "/assets/images/beni-4.png",
    },
    {
      title: "Professional Community",
      description: "Join a network of forward-thinking attorneys shaping the future of legal services.",
      icon: "/assets/images/beni-4.png",
    },
  ];

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-medium leading-[130%] tracking-[-1.04px] text-gradient capitalize">
            Feature Key Benefits
          </h2>
          {/* <p className="mt-6 text-lawyeti-white-80 font-helvetica text-base leading-[170%] opacity-80 max-w-2xl mx-auto" data-aos="fade-up">
            Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
            suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis sodales
            velit pretium quam.
          </p> */}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center">
          {features.map((feature, index) => (
            <div key={index} className="relative group" data-aos="fade-up">
              {/* Main Card */}
              <div className="bg-[#1A1A1A] h-full rounded-[30px] glow2 bg-lawyeti-dark-grey p-8 flex flex-col items-center text-center relative overflow-hidden">
                {/* Rotated Background Element */}

                {/* Icon Container */}
                <div className="relative z-10 mb-8 mt-8">
                  <div className="w-[111px] h-[111px]  relative overflow-hidden">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-lawyeti-gold rounded-full"></div> */}
                  </div>
                </div>

                <div className="w-full my-5 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center mt-5">
                  <h3 className="text-[26px] font-helvetica font-normal leading-[130%] tracking-[-0.72px] text-gradient capitalize mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lawyeti-white-80 font-helvetica text-base leading-[170%] opacity-80">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefits;
