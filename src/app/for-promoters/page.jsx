"use client";
import { ArrowDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ForPromoters() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <section
        className="relative lg:rounded-[50px] lg:m-7 lg:mb-0 overflow-hidden px-4 pt-30 bg-[url('/assets/images/about-bg.png')] bg-center bg-no-repeat h-[341px] lg:h-[541px] content-center"
        data-aos="fade-up"
      >
        <div
          className="relative z-10 mx-auto px-4 md:px-8 py-8"
          data-aos="fade-up"
        >
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-4 mb-16 x:max-w-6xl mx-auto text-center">
            <p
              className="text-white font-inter-tight text-sm md:text-base Fleading-[150%] tracking-tight opacity-80 max-w-2xl"
              data-aos="fade-up"
            >
              Home {">"} For Promoters
            </p>
            <h1
              className="text-gradient font-helvetica text-3xl md:text-4xl lg:text-[64px] font-bold leading-[110%] tracking-tight capitalize"
              data-aos="fade-up"
            >
              For Promoters
            </h1>
          </div>
        </div>

        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white/20 blur-[127px]" />
        <div className="absolute bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-white/20 blur-[127px]" />
      </section>

      {/* Main Content Section */}
      <section className="py-12 relative overflow-hidden sm:py-16 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            data-aos="fade-up"
          >
            <h2 className="font-helvetica text-3xl sm:text-5xl font-medium gradient-text-2 mb-4 sm:mb-8">
              Love LAWYETI? Get Paid to Share It.
            </h2>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
            data-aos="fade-up"
          >
            <div className="space-y-6 sm:space-y-8">
              <h3 className="font-helvetica text-xl sm:text-2xl font-medium gradient-text-2 capitalize">
                Join Our Promoter Program And Earn Commission
                <br className="hidden sm:block" />
                By Sharing LAWYETI With Your Audience.
              </h3>

              <p className="text-white/80 leading-relaxed">
              Unlock an opportunity to grow your income while helping people access instant legal support. By joining our Promoters Program, you can help expand access to justice and earn attractive commissions simply by sharing LAWYETI with your network, audience, or community.
              </p>

              <p className="text-white/80 leading-relaxed">
              Whether you’re an influencer, content creator, or simply someone who believes in making legal help accessible, our program gives you the tools and rewards to succeed.
              </p>

              <Button className="bg-gold border border-b-gold hover:bg-transparent hover:text-gold flex items-center justify-center cursor-pointer text-black text-lg px-12 py-6 rounded-full">
                Become a Promoter
                <ArrowDown className="h-4 w-4 -mb-1" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-[#1A1A1A] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] border-l border-0 border-white/50 p-6">
                <img
                  src="/assets/images/promoter-img.png"
                  alt="Legal professionals"
                  className="w-full rounded-[20px] sm:rounded-[30px] border border-white/10"
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
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            data-aos="fade-up"
          >
            <h2 className="font-helvetica text-3xl sm:text-5xl font-medium gradient-text-2 mb-4 sm:mb-8">
              Ideal Promoter Use Cases
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            The LAWYETI Promoters Program is designed for individuals and organizations with influence, reach, and trust in their communities.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:mt-50 lg:px-20 mx-auto"
            data-aos="fade-up"
          >
            {[
              {
                title: "Legal Influencers & Content Creators",
                description:
                  "Share legal knowledge and earn while promoting a trusted AI-powered platform.",
                icon: "/assets/images/promoter-icon1.png",
              },
              {
                title: "Bloggers & Podcasters",
                description:
                  "Integrate LAWYETI into your Content as a resource for audiences seeking quick, reliable legal help.",
                icon: "/assets/images/promoter-icon2.png",
              },
              {
                title: "General Affiliates & Digital Marketers",
                description:
                  "Monetize your audience by promoting a high-demand, innovative legal service.",
                icon: "/assets/images/promoter-icon3.png",
              },
              {
                title: "Law Bloggers and YouTubers",
                description:
                  "Add value to your audience by giving them access to instant, AI-powered legal help.",
                icon: "/assets/images/promoter-icon4.png",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="relative">
                  <div className="w-full h-full bg-lawyeti-gold rounded-full" />
                  <img src={item.icon} alt="image" className="w-[100px]" />
                  {index === 1 && (
                    <img
                      src="/assets/images/twenty.png"
                      className="absolute top-5 left-25 rotate-[70deg] lg:-top-18 lg:-left-8 w-[80px]"
                      alt="image"
                    />
                  )}
                </div>
                <h3 className="font-helvetica text-xl sm:text-2xl font-medium gradient-text-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Steps Section */}
      <section className="py-12 sm:py-16 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 "
            data-aos="fade-up"
          >
            {[
              {
                title: "Sign Up",
                description:
                  "Join the LAWYETI Promoters Program with a quick and easy registration.",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/d35be9a0856c4cd08d7674683e75596278b17c22?width=1046",
              },
              {
                title: "Share Content",
                description:
                  "Share LAWYETI with your audience through engaging reels, stories, or posts.",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/3232f23cef73cf0815e9dea221f4cdabc274e7a7?width=1002",
              },
              {
                title: "Earn",
                description:
                  "Get rewarded with commissions every time someone signs up through your link.",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/f50dfd97731ef734800f234a7722f5014552998b?width=1052",
              },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4 sm:space-y-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full max-w-sm mx-auto h-[220px] sm:h-[240px] md:h-[263px] lg:h-[300px] object-cover"
                />
                <h3 className="font-helvetica text-2xl sm:text-3xl font-medium gradient-text-2">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
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
          LAWYETI is not a law firm and does not provide legal representation. All legal advice is delivered solely by independent, licensed attorneys — users should consult professionals for their specific legal needs.
          </p>
        </div>
      </section>
    </>
  );
}
