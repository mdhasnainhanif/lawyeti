"use client";
import { Sparkles, Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import OurSolution from "../../components/Home/OurSolution";
import FAQSection from "../../components/FAQSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUs from "../../components/AboutUs";
import LegalAreaBadge from "../../components/Home/LegalAreaBadge";


export default function Index() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = () => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
      delay: 0,
      easing: 'ease-in-out',
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  const teamMembers = [
    { name: "James - CEO Lawyeti", image: "/assets/images/james.png" },
    { name: "Alina - Strategic Partner", image: "/assets/images/alina.png" },
    { name: "John - COO", image: "/assets/images/john.png" },
    { name: "Alex - Developer", image: "/assets/images/alex.png" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative lg:rounded-[50px] lg:m-7 lg:mb-0 overflow-hidden px-4 pt-30 bg-[url('/assets/images/about-bg.png')] bg-center bg-no-repeat h-[341px] lg:h-[541px] content-center"
        data-aos="fade-up"
      >
        <div className="relative z-10 mx-auto px-4 md:px-8 py-8">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-4 mb-16 xl:max-w-6xl mx-auto text-center">
            <p
              className="text-white font-inter-tight text-sm md:text-base Fleading-[150%] tracking-tight opacity-80 max-w-2xl"
              data-aos="fade-up"
            >
              Home {">"} About Us
            </p>
            <h1
              className="text-gradient  text-3xl md:text-4xl lg:text-[64px] font-bold leading-[110%] tracking-tight capitalize"
              data-aos="fade-up"
            >
              About Us
            </h1>
          </div>
        </div>

        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white/20 blur-[127px]" />
        <div className="absolute bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-white/20 blur-[127px]" />
      </section>

      {/* About Section */}
      {/* <section
        className="relative overflow-hidden py-16 md:py-24"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-6 mb-8">
            <div
              className="flex px-6 md:px-8 py-3 items-start gap-3 rounded-full bg-gold/20"
              data-aos="fade-up"
            >
              <span className="text-white font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight">
                About Us
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <h2
                className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize "
                data-aos="fade-up"
              >
                GetCRM helps you Find Best Lawyers
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p
                className="text-white/80 ms-auto max-w-[500px] font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80"
                data-aos="fade-up"
              >
                Eu tempor luctus eget iaculis nisi. Aliquam lacus amet phasellus
                id feugiat faucibus etiam tortor. Scelerisque maecenas dui purus
                amet et neque mauris quis amet. Morbi lobortis
              </p>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div className="flex items-start gap-6" data-aos="fade-up">
                <div className="min-w-11 min-h-11 bg-gold/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                    Sign Up
                  </h3>
                  <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                    Eu tempor luctus eget iaculis nisi. Aliquam lacus amet
                    phasellus id feugiat faucibus etiam tortor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6" data-aos="fade-up">
                <div className="min-w-11 min-h-11 bg-gold/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                    Matched With Your Lawyer
                  </h3>
                  <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                    Eu tempor luctus eget iaculis nisi. Aliquam lacus amet
                    phasellus id feugiat faucibus etiam tortor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6" data-aos="fade-up">
                <div className="min-w-11 min-h-11 bg-gold/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                    Bill & Get Paid
                  </h3>
                  <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                    Eu tempor luctus eget iaculis nisi. Aliquam lacus amet
                    phasellus id feugiat faucibus etiam tortor.
                  </p>
                </div>
              </div>
            </div>

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
        <div className="absolute -top-10 -z-1">
          <img
            src="/assets/images/page-shadow.png"
            alt="Background pattern"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section> */}
      <AboutUs />

      {/* LAWYETI Section */}
      <section
        className="lg:p-20 p-10 lg:m-7 bg-[#1A1A1A] lg:rounded-[42px]"
        data-aos="fade-up"
      >
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="bg-lawyeti-card border border-white/10 rounded-[42px] p-5 relative overflow-hidden"
                data-aos="fade-right"
              >
                <div className="absolute inset-0"></div>
                <div className="relative">
                  <img
                    src="/assets/images/legal-platfarm.png"
                    alt="Legal platform"
                    className="w-full h-auto rounded-[37px]"
                  />
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="mb-3 text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize aos-init aos-animate">
              Who We Are
              </h2>
              <p className="text-white/80 font-helvetica text-lg leading-relaxed ">
              LAWYETI is a next-generation Legal Assistance platform in New York built to remove the barriers between clients and legal professionals. With a growing network of attorneys across 27 specialties and expanding, our platform ensures that no matter the legal challenge, the right expertise is always within reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Movement Section */}
  


      <section className="pt-20 pb-10" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8 text-center">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 h-full">
            <div className="space-y-6 relative">
              <div className="glow2 cardNew p-11 rounded-2xl items-center">

              <h2 className="text-3xl mb-4 bg-[#D1995B] p-4 rounded-full h-16 w-16 flex items-center justify-center ">01</h2>
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[30px] font-medium leading-none tracking-tight capitalize">
              Why We Exist
              </h3>
              <p className="text-white/80 mt-3 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
              We exist to make justice accessible-removing barriers of cost, time, and complexity. Traditional legal systems can feel slow, costly, and overwhelming — LAWYETI bridges that gap by making expert legal support simple, instant, and affordable.
              </p>
                </div>
             
            </div>

            <div className="space-y-6 relative">
              <div className="glow2 cardNew p-11 rounded-2xl items-center">

              <h2 className="text-3xl mb-4 bg-[#D1995B] p-4 rounded-full h-16 w-16 flex items-center justify-center ">02</h2>
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[30px] font-medium leading-none tracking-tight capitalize">
              Our Vision
              </h3>
              <p className="text-white/80 mt-3 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
              To become the global leader in AI-driven legal assistance, trusted by clients and attorneys alike for speed, security, and expertise.
              </p>
                </div>
            </div>

            <div className="space-y-6 relative ">
              <div className="glow2 cardNew p-11 rounded-2xl items-center">

              <h2 className="text-3xl mb-4 bg-[#D1995B] p-4 rounded-full h-16 w-16 flex items-center justify-center ">03</h2>
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[30px] font-medium leading-none tracking-tight capitalize">
              Our Mission
              </h3>
              <p className="text-white/80 mt-3 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
              Our goal is to ensure that anyone, anywhere, can get trusted legal help exactly when they need it — securely, affordably, and with confidence through our AI-powered legal assistance and verified attorneys. 
              </p>
                </div>             
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      {/* <section className="lg:py-20 pt-20" data-aos="fade-up">
        <div className="container mx-auto lg:px-24 px-10">
          <h2
            className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize aos-init aos-animates mb-3"
            data-aos="fade-up"
          >
            How We're Different
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div
              className="bg-lawyeti-card bg-[#1A1A1A] rounded-[42px] p-8 h-[477px] content-end"
              data-aos="fade-right"
            >
              <h3 className="text-3xl  font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                AI-first
              </h3>
              <p className="text-white/80 ">
                Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
                suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis
                sodales velit pretium quam.
              </p>
            </div>

            <div
              className="bg-lawyeti-card bg-[#1A1A1A]  rounded-[42px] p-8 h-[477px] content-end"
              data-aos="fade-left"
            >
              <h3 className="text-3xl  font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Crisis-ready hybrid model.
              </h3>
              <p className="text-white/80 ">
                Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
                suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis
                sodales velit pretium quam.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Journey */}
      {/* <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8">
        <h2
          className="text-gradient-alt text-center mb-5 pb-5 font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize aos-init aos-animate"
          data-aos="fade-up"
        >
          Our Journey
        </h2>
        <div
          className="max-w-7xl mx-auto px-6 lg:h-[95vh] lg:max-h-[700px] content-center"
          data-aos="fade-up"
        >
          <div className="relative">
            <div className="absolute xl:top-8 xl:left-0 xl:right-0 left-4 xl:h-px h-full xl:w-full w-px bg-white/50"></div>

            <div className="grid xl:grid-cols-4 gap-8">
              <div className="relative">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-3 border-gold xl:absolute xl:top-4 xl:left-1/2 transform xl:-translate-x-38 z-10">
                  <div className="absolute bg-gold w-4 h-4 rounded-full" />
                  <h3 className="translate-y-2 translate-x-13 xl:-translate-x-0 xl:translate-y-13 text-2xl  font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                    2001
                  </h3>
                </div>
                <div className="xl:translate-y-29 xl:-translate-x-5 lg:mt-0 mt-5 xl:ml-0 ml-15">
                  <div className="bg-lawyeti-card bg-[#1A1A1A] rounded-[20px] xl:rounded-[42px] p-10">
                    <p className="text-white/80 text-sm leading-relaxed ">
                      Egestas odio justo leo at nunc non. Quam nunc felis nibh
                      enim suspendisse in. Eros sit tortor sed quis. Mi aliquet
                      mattis sodales velit pretium quam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
             
                <div className="w-8 h-8  flex items-center justify-center rounded-full border-3 border-gold xl:absolute xl:top-4 xl:left-1/2 transform xl:-translate-x-1/2  z-10">
                  <div className="bg-gold w-4 h-4 absolute rounded-full" />
                  <h3 className="translate-y-2 translate-x-13 xl:-translate-x-0 xl:-translate-y-8 text-2xl  font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                    2003
                  </h3>
                </div>
                <div className="xl:-translate-y-60 xl:translate-x-28 lg:mt-0 mt-5 xl:ml-0 ml-15">
                  <div className="bg-lawyeti-card bg-[#1A1A1A] rounded-[20px] xl:rounded-[42px] p-10">
                    <p className="text-white/80 text-sm leading-relaxed ">
                      Egestas odio justo leo at nunc non. Quam nunc felis nibh
                      enim suspendisse in. Eros sit tortor sed quis. Mi aliquet
                      mattis sodales velit pretium quam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
              
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-3 border-gold xl:absolute xl:top-4 xl:left-1/2 transform xl:-translate-x-1/2 z-10">
                  <div className="bg-gold w-4 h-4 absolute rounded-full" />
                  <h3 className="translate-y-2 translate-x-13 xl:-translate-x-0 xl:translate-y-13 text-2xl  font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                    2005
                  </h3>
                </div>
                <div className="xl:translate-y-28 xl:translate-x-28 lg:mt-0 mt-5 xl:ml-0 ml-15">
                  <div className="bg-lawyeti-card bg-[#1A1A1A] rounded-[20px] xl:rounded-[42px] p-10">
                    <p className="text-white/80 text-sm leading-relaxed ">
                      Egestas odio justo leo at nunc non. Quam nunc felis nibh
                      enim suspendisse in. Eros sit tortor sed quis. Mi aliquet
                      mattis sodales velit pretium quam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
             
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-3 border-gold xl:absolute xl:top-4 xl:left-1/2 transform xl:translate-x-35 z-10">
                  <div className="absolute bg-gold w-4 h-4 rounded-full" />
                  <h3 className="translate-y-2 translate-x-13 xl:-translate-x-0 xl:-translate-y-10 text-2xl  font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                    2007
                  </h3>
                </div>
                <div className="xl:-translate-y-60 xl:translate-x-10 lg:mt-0 mt-5 xl:ml-0 ml-15">
                  <div className="bg-lawyeti-card bg-[#1A1A1A] rounded-[20px] xl:rounded-[42px] p-10 ">
                    <p className="text-white/80 text-sm leading-relaxed ">
                      Egestas odio justo leo at nunc non. Quam nunc felis nibh
                      enim suspendisse in. Eros sit tortor sed quis. Mi aliquet
                      mattis sodales velit pretium quam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section> */}

      {/* What Makes Us Different - Comparison Table */}
      <section
        className="py-20 bg-[#121212] lg:m-7 lg:rounded-[42px]"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="mb-4 text-center text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize aos-init aos-animate"
            data-aos="fade-up"
          >
            What makes us different
          </h2>
          <div className="overflow-x-auto -mx-6 px-6" data-aos="fade-up">
            <table className="w-full border-collapse table-fixed min-w-[800px]">
            <thead>
              <tr data-aos="fade-up">
                <th className="text-left text-white font-medium lg:text-[28px] py-3 w-20">
                  Symbol
                </th>
                <th className="text-left text-white font-medium lg:text-[28px] py-3 w-80">
                  Feature
                </th>
                <th className="text-center text-white font-medium lg:text-[28px] py-3 w-32">
                  LawYeti
                </th>
                <th className="text-center text-white font-medium lg:text-[28px] py-3 w-32">
                  Other Platforms
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "the AI features",
                  lawyeti: true,
                  others: false,
                  icon: "/assets/images/icons/dfr1.svg",
                },
                {
                  feature: "free sign-up process",
                  lawyeti: false,
                  others: true,
                  icon: "/assets/images/icons/dfr2.svg",
                },
                {
                  feature: "referral unlock",
                  lawyeti: true,
                  others: false,
                  icon: "/assets/images/icons/dfr3.svg",
                },
                {
                  feature: "real-time legal access with billing policy.",
                  lawyeti: true,
                  others: true,
                  icon: "/assets/images/icons/dfr4.svg",
                },
                {
                  feature: "First 8 mins free Emergency help",
                  lawyeti: true,
                  others: false,
                  icon: "/assets/images/icons/dfr5.svg",
                },
                {
                  feature: "Personalized advice",
                  lawyeti: true,
                  others: false,
                  icon: "/assets/images/icons/dfr6.svg",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#1A1A1A]" : ""}`}
                >
                  <td className="pl-5 rounded-l-[10px] w-20">
                    <img
                      src={row.icon}
                      className="w-[35px]"
                      alt={row.feature}
                    />
                  </td>
                  <td className="text-white text-base py-4 w-80 whitespace-nowrap">
                    {row.feature}
                  </td>
                  <td className="text-center py-4 w-32">
                    {row.lawyeti ? (
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0F8F59] mx-auto">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#D30000] mx-auto">
                        <X className="w-4 h-4 text-black" />
                      </div>
                    )}
                  </td>
                  <td className="text-center py-4 w-32">
                    {row.others ? (
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0F8F59] mx-auto">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#D30000] mx-auto">
                        <X className="w-4 h-4 text-black" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-Time Legal Assistance */}
      <OurSolution />

      {/* FAQ Section */}
      <FAQSection />

      {/* Team Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize aos-init aos-animate text-center mb-8"
            data-aos="fade-up"
          >
            Meet Our Team
          </h2>

          {/* <p className="text-white/80 text-center mb-16" data-aos="fade-up">
            Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
            suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis sodales
            velit pretium quam.
          </p> */}

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="group">
                  <div className="bg-[#1A1A1A] border border-white/10 rounded-[30px] overflow-hidden relative">
                    <div className="relative rounded-[20px] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#09090900] to-[#090909] from-50% to-100%"></div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-xl font-inter-tight font-medium text-gold mb-3">
                        {member.name}
                      </h3>
                      <div className="flex gap-3">
                        {/* Social icons */}
                        {["facebook", "twitter", "instagram", "linkedin"].map(
                          (icon, i) => (
                            <div
                              key={i}
                              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                            >
                              <img
                                src={`/assets/images/icons/${icon}.svg`}
                                className="w-5 h-5"
                                alt={icon}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
