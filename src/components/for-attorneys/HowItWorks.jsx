import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit Your Form",
      description:
        "Complete a brief application form with your details and specify your area of legal expertise.",
      illustration:
        "https://api.builder.io/api/v1/image/assets/TEMP/651c02455972b093e9a9c80066a2637c367bdeef?width=676",
    },
    {
      title: "Get Verified",
      description:
        "Our team reviews and verifies your credentials to ensure compliance and trust.",
      illustration:
        "https://api.builder.io/api/v1/image/assets/TEMP/5176c80aff67ca56449f4cab3203efdb20f1d44a?width=676",
    },
    {
      title: "Start Earning",
      description:
        "Once approved, you’ll begin receiving client leads instantly, connect in real time, and get paid directly for your services.",
      illustration:
        "https://api.builder.io/api/v1/image/assets/TEMP/3ed7fa91217014324595e1d09896ae6eadea912f?width=676",
    },
  ];

  const tabs = [
    { name: "payouts", active: false },
    { name: "onboarding", active: true },
    { name: "scheduling", active: false },
  ];

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-medium leading-[130%] tracking-[-1.04px] text-gradient capitalize" data-aos="fade-up">
            How Its Works
          </h2>
          <p className="mt-6 text-lawyeti-white-80 font-helvetica text-base leading-[150%] max-w-[600px] mx-auto" data-aos="fade-up">
          Getting started with LAWYETI is simple and seamless.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center" data-aos="fade-up">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
                data-aos="fade-up"
              >
                {/* Illustration */}
                <div className="w-[290px] h-[290px] mb-8 flex items-center justify-center">
                  <img
                    src={step.illustration}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-helvetica font-medium leading-[100%] tracking-[-0.6px] text-gradient capitalize">
                    {step.title}
                  </h3>
                  <p className="text-lawyeti-white-80 font-helvetica text-base leading-[150%] opacity-80 max-w-[344px]">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="absolute bottom-[20%] -right-10 w-10 h-px hidden md:block">
                      <img
                        src="/assets/images/icons/long-arrow-right.svg"
                        alt="Right Arrow"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
