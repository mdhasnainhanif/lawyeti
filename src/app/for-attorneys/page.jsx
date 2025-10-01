"use client";
import ValueProposition from "../../components/for-attorneys/ValueProposition";
import FeatureBenefits from "../../components/for-attorneys/FeatureBenefits";
import AttorneyReviews from "../../components/for-attorneys/AttorneyReviews";
import HowItWorks from "../../components/for-attorneys/HowItWorks";
import Statistics from "../../components/for-attorneys/Statistics";
import FAQ from "../../components/for-attorneys/FAQ";
import Hero from "../../components/for-attorneys/Hero";
import StatItem from "../../components/Home/StatItem";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ForAttorneys = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Feature Benefits */}
      <FeatureBenefits />

      {/* Attorney Reviews */}
      <AttorneyReviews />

      {/* How It Works */}
      <HowItWorks />

      {/* Statistics */}
      <Statistics />

      {/* FAQ */}
      <FAQ />

      {/* Testimonials */}
       <section className="py-16 md:py-24 relative" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#090909]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-6 mb-10 lg:mb-12" data-aos="fade-up">
            <div className="flex px-6 md:px-8 py-3 items-start gap-3 rounded-full bg-gold/20">
              <span className="text-white font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight">
                Testimonials
              </span>
            </div>
          </div>

          <h2
            className="text-gradient-alt font-helvetica text-3xl text-center md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-16 max-w-2xl"
            data-aos="fade-up"
          >
            What Our Clients Say's About Us
          </h2>

          <div className="space-y-16">
  <div
    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center"
    data-aos="fade-up"
  >
    <StatItem number="1,102" label="Clients Matched Instantly" />
    <div className="lg:col-span-2">
      <blockquote className="flex items-start lg:flex-row flex-wrap gap-8 lg:gap-12 text-white font-helvetica text-lg md:text-2xl font-normal leading-[170%] text-justify capitalize mb-6">
        <img
          src="/assets/images/icons/quote.svg"
          className="w-10"
          alt="quote"
        />
        <p className="text-start">
          LAWYETI connected me with the right attorney in minutes. I felt
          supported and secure during a stressful time.
        </p>
      </blockquote>
      <div className="flex items-center gap-8 ">
        <div className="min-w-14 min-h-14 bg-gray-500/20 rounded-full" />
        <div>
          <div className="text-white font-helvetica text-xl md:text-2xl font-medium leading-[120%] mb-2">
            Sarah K.
          </div>
          <div className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%]">
            Client
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />

  <div
    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center"
    data-aos="fade-up"
  >
    <StatItem number="17,320" label="Attorneys Empowered" />
    <div className="lg:col-span-2">
      <blockquote className="flex lg:flex-row flex-wrap items-start gap-8 lg:gap-12 text-white font-helvetica text-lg md:text-2xl font-normal leading-[170%] text-justify capitalize mb-6">
        <img
          src="/assets/images/icons/quote.svg"
          className="w-10"
          alt="quote"
        />
        <p className="text-start">
          As an attorney, the platform makes it simple to connect with clients,
          manage sessions, and get paid quickly. It’s a game-changer for my
          practice.
        </p>
      </blockquote>
      <div className="flex items-center gap-6 ">
        <div className="min-w-14 min-h-14 bg-gray-500/20 rounded-full" />
        <div>
          <div className="text-white font-helvetica text-xl md:text-2xl font-medium leading-[120%] mb-2">
            James R.
          </div>
          <div className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%]">
            Attorney
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />

  <div
    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center"
    data-aos="fade-up"
  >
    <StatItem number="2,400" label="Instant Legal Matches" />
    <div className="lg:col-span-2">
      <blockquote className="flex items-start lg:flex-row flex-wrap gap-10 lg:gap-12 text-white font-helvetica text-lg md:text-2xl font-normal leading-[170%] text-justify capitalize mb-6">
        <img
          src="/assets/images/icons/quote.svg"
          className="w-10"
          alt="quote"
        />
        <p className="text-start">
          The AI matching was spot on — I didn’t have to waste time searching. I
          got the legal advice I needed instantly.
        </p>
      </blockquote>
      <div className="flex items-center gap-6 ">
        <div className="min-w-14 min-h-14 bg-gray-500/20 rounded-full" />
        <div>
          <div className="text-white font-helvetica text-xl md:text-2xl font-medium leading-[120%] mb-2">
            David M.
          </div>
          <div className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%]">
            Client
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />

  <div
    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center"
    data-aos="fade-up"
  >
    <StatItem number="3,850" label="Businesses Supported" />
    <div className="lg:col-span-2">
      <blockquote className="flex items-start lg:flex-row flex-wrap gap-10 lg:gap-12 text-white font-helvetica text-lg md:text-2xl font-normal leading-[170%] text-justify capitalize mb-6">
        <img
          src="/assets/images/icons/quote.svg"
          className="w-10"
          alt="quote"
        />
        <p className="text-start">
          As a business owner, I was able to find specialized legal advice for
          my company contracts without hassle. LAWYETI saved me time and gave me
          confidence in every decision.
        </p>
      </blockquote>
      <div className="flex items-center gap-6 ">
        <div className="min-w-14 min-h-14 bg-gray-500/20 rounded-full" />
        <div>
          <div className="text-white font-helvetica text-xl md:text-2xl font-medium leading-[120%] mb-2">
            Ayesha B.
          </div>
          <div className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%]">
            Business Owner
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
      {/* Disclaimers Section */}
      <section className="py-12 sm:py-16 md:py-20" data-aos="fade-up">
        <div
          className="container mx-auto px-4 sm:px-6 md:px-8 text-center"
          data-aos="fade-up"
        >
          <h2 className="font-helvetica text-3xl sm:text-4xl md:text-5xl font-medium gradient-text-2 mb-4 sm:mb-8">
            Disclaimers
          </h2>
          <p className="text-white/80 max-w-4xl mx-auto leading-relaxed px-2">
            Any role you play in connecting parties or facilitating services
            does not imply our endorsement or responsibility for the eventual
            case outcomes. We are not liable for any representations made or
            results promised
          </p>
        </div>
      </section>
    </>
  );
};

export default ForAttorneys;
