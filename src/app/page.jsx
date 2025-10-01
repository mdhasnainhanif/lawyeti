"use client";
import {
  ArrowDown,
  Sparkles,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Check,
} from "lucide-react";
import { useEffect, useState } from "react";
import FeatureCard from "../components/Home/FeatureCard";
import TestimonialCard from "../components/Home/TestimonialCard";
import StatItem from "../components/Home/StatItem";
import LegalAreaBadge from "../components/Home/LegalAreaBadge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "../components/AboutUs";
import OurSolution from "../components/Home/OurSolution";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      setStatus("❌ Please agree to the terms & conditions.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message: "Signup Form Submission",
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Signup successful!");
        setName("");
        setEmail("");
        setIsChecked(false);
      } else {
        setStatus("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong!");
    }

    setLoading(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative lg:rounded-[50px] lg:m-7 lg:mb-0 overflow-hidden px-4 pt-25 lg:pt-40"
        data-aos="fade-up"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/assets/images/law-yeti-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="relative z-10 mx-auto px-4 md:px-8 py-8">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-4 mb-7 lg:mb-16 xl:max-w-6xl mx-auto text-center">
            <h1
              className="text-gradient font-helvetica text-3xl sm:text-4xl xl:text-[64px] font-semibold leading-[110%] tracking-tight capitalize"
              data-aos="fade-up"
            >
              Get Instant Legal Guidance with Our Free AI Legal Services
              Available Now
            </h1>
            <p
              className="text-white font-inter-tight text-sm md:text-base leading-[150%] tracking-tight opacity-80 max-w-2xl"
              data-aos="fade-up"
            >
              Real-time attorney access is coming soon and users can sign up for
              updates.
            </p>

            {/* Search Bar */}
            <div
              className="w-full lg:flex lg:flex-row flex-wrap lg:gap-0 max-w-[800px]   relative mt-6"
              data-aos="fade-up"
            >
              <input
                type="text"
                placeholder="Enter Your Legal area"
                className="glow w-full lg:mb-0 mb-2 pl-6 lg:pr-48 md:pr-52 h-[58px] bg-darker-gray text-white placeholder-white font-inter-tight text-sm md:text-base rounded-full focus:outline-none"
              />
              <button className="text-sm lg:text-lg lg:w-fit w-full lg:absolute lg:right-1 lg:top-[3px]  flex px-5 py-4 justify-center items-center gap-2 rounded-full bg-gold text-black font-inter-tight font-medium leading-none tracking-tight border border-gold hover:bg-transparent hover:text-gold cursor-pointer transition-colors">
                Get Started with AI
                <ArrowDown className="w-3 h-3 rotate-90" />
              </button>
            </div>

            <p className="text-white font-inter-tight text-sm md:text-base font-normal leading-[150%] tracking-tight mt-4">
              <span className="text-gold font-bold">63,214</span> Pre-Registered
              Across 50 States
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="flex h-12 px-5 items-center gap-2 rounded-[30px] bg-gold text-black font-inter-tight text-sm xl:text-lg font-medium shadow-lg border border-gold hover:bg-transparent hover:text-gold cursor-pointer transition-colors">
              Try the AI Agent Now
            </button>
            <button className="flex h-12 px-5 items-center gap-2 rounded-[30px] bg-gold text-black font-inter-tight text-sm xl:text-lg font-medium shadow-lg border border-gold hover:bg-transparent hover:text-gold cursor-pointer transition-colors">
              Join as an Attorney
            </button>
            <button className="flex h-12 px-5 items-center gap-2 rounded-[30px] bg-gold text-black font-inter-tight text-sm xl:text-lg font-medium shadow-lg border border-gold hover:bg-transparent hover:text-gold cursor-pointer transition-colors">
              Promote the Platform
            </button>
          </div>

          {/* Legal Areas */}
          <div
            className="flex flex-wrap justify-center gap-3 md:gap-6 opacity-70 mb-16"
            data-aos="fade-up"
          >
            <LegalAreaBadge>Criminal Defense</LegalAreaBadge>
            <LegalAreaBadge>Eviction</LegalAreaBadge>
            <LegalAreaBadge>Wage Theft</LegalAreaBadge>
            <LegalAreaBadge>Immigration</LegalAreaBadge>
            <LegalAreaBadge>Protective Orders</LegalAreaBadge>
            <LegalAreaBadge>Show More</LegalAreaBadge>
          </div>

          {/* Features */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 lg:gap-20 mb-12"
            data-aos="fade-up"
          >
            <FeatureCard
              icon={<img src="/assets/images/icons/hand-icon.svg" />}
              title="Real-Time Legal Help"
              description=""
            />
            <FeatureCard
              icon={<img src="/assets/images/icons/mobile.svg" />}
              title="Mobile-First, Always-On"
              description=""
            />
            <FeatureCard
              icon={<img src="/assets/images/icons/check-badge.svg" />}
              title="Verified Attorneys"
              description=""
            />
            <FeatureCard
              icon={<img src="/assets/images/icons/data-driven.svg" />}
              title="Data-Driven & Transparent"
              description=""
            />
          </div>
        </div>

        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white/20 blur-[127px]" />
        <div className="absolute bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-white/20 blur-[127px]" />
      </section>

      {/* Attorney Services Section */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        data-aos="fade-up"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/attorny-section.png')",
            backgroundSize: "100% 109.736%",
            backgroundPosition: "0px -2.96px",
          }}
        >
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div
                className="w-full max-w-2xl h-80 md:h-[582px] rounded-[37px] border-r border-white/50 bg-dark-gray relative overflow-hidden"
                data-aos="fade-right"
              >
                <img
                  src="/assets/images/attorny-left-img.png"
                  alt="Attorney interface"
                  className="w-full h-full object-cover rounded-[37px] p-6"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2
                className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize"
                data-aos="fade-up"
              >
                Real-Time Attorney <br /> Services Launching Soon
              </h2>
              <p
                data-aos="fade-up"
                className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80"
              >
                Real-time attorney access is coming soon and users can sign up
                for updates.
              </p>

              {/* Features */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-aos="fade-up"
              >
                <div className="flex items-start gap-6">
                  <div className="w-11 h-11 bg-gold/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                      Immediacy
                    </h3>
                    <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80">
                      (instant legal help)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-11 h-11 bg-gold/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize mb-5">
                      Access
                    </h3>
                    <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80">
                      (free, easy, fast)
                    </p>
                  </div>
                </div>
              </div>

              {/* Sign Up Form */}
              <form
                className="space-y-4"
                data-aos="fade-up"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Enter Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-14 md:h-[60px] px-5 bg-transparent border border-white/20 rounded-lg text-white placeholder-white font-helvetica text-sm md:text-base font-light focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-14 md:h-[60px] px-5 bg-transparent border border-white/20 rounded-lg text-white placeholder-white font-helvetica text-sm md:text-base font-light focus:outline-none focus:border-gold transition-colors"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex px-5 py-4 justify-center items-center gap-2 rounded-full bg-gold text-black font-inter-tight text-sm lg:text-lg font-medium leading-none tracking-tight border border-b-gold hover:bg-transparent hover:text-gold cursor-pointer mt-4 transition-colors"
                >
                  {loading
                    ? "Sending..."
                    : "Refer 3 Friends to Unlock Legal Calls"}
                  <ArrowDown className="w-3 h-3 rotate-90" />
                </button>

                <div
                  className="flex items-center gap-3 mt-6 cursor-pointer"
                  data-aos="fade-up"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  <div
                    className={`${
                      isChecked ? "bg-gold" : ""
                    } lg:w-7 lg:h-7 w-5 h-5 flex items-center justify-center border  border-white/50 rounded-md lg:rounded-lg`}
                  >
                    {isChecked && <Check />}
                  </div>
                  <span className="text-white font-helvetica text-sm lg:text-lg font-light leading-[120%]">
                    Agree With Terms & Conditions
                  </span>
                </div>

                {status && <p className="text-center text-sm mt-2">{status}</p>}
              </form>
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

      {/* About Section */}
      <AboutUs />

      <section className="pb-20" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8 text-center">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 h-full">
            <div className="space-y-6 relative">
              <div className="glow2 cardNew p-11 rounded-2xl">

              <img
                src="/assets/images/abt-1.png"
                alt="Quick signup"
                className="w-full object-bottom mx-auto max-w-[12rem]"
                />
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[30px] font-medium leading-none tracking-tight capitalize">
                Quick & Easy Sign-Up
              </h3>
              <p className="text-white/80 mt-3 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
            Getting started with LAWYETI takes just a few clicks. Whether you’re a client seeking urgent legal help or an attorney looking to expand your practice, our signup process is designed to be fast, simple, and secure.
              </p>
                </div>
             
            </div>

            <div className="space-y-6 relative">
              <div className="glow2 cardNew p-11 rounded-2xl">

              <img
                src="/assets/images/abt-2.png"
                alt="AI matching"
                className="w-full object-bottom mx-auto max-w-[12rem]"
                />
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[30px] font-medium leading-none tracking-tight capitalize">
                AI Matches You Instantly
              </h3>
              <p className="text-white/80 mt-3 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
              No more endless searching or waiting for callbacks. With LAWYETI, our advanced AI technology instantly connects you with the right attorney for your case.
              </p>
              {/* <ul className="text-start mt-3 list-disc list-inside pl-6">
                <li>Our system analyzes your legal needs and pairs you with the most qualified lawyer.</li>
                <li>Connect within minutes, anytime you need urgent assistance.</li>
                <li>Tailored matches ensure you get relevant, expert support.</li>
              </ul> */}
                </div>
              {/* Arrow */}
              {/* <div className="absolute bottom-1/4 -right-16 w-10 h-pxhidden md:block">
                <img
                  src="/assets/images/icons/long-arrow-right.svg"
                  alt="Right Arrow"
                />
              </div> */}
            </div>

            <div className="space-y-6 relative " data-aos="fade-up">
              <div className="glow2 cardNew p-11 rounded-2xl">

              <img
                src="/assets/images/abt-3.png"
                alt="Referral system"
                className="w-full object-bottom mx-auto max-w-[12rem]"
                />
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[30px] font-medium leading-none tracking-tight capitalize">
              Earn Rewards by Referring
              </h3>
              <p className="text-white/80 mt-3 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
              LAWYETI empowers both clients and attorneys through a simple and rewarding referral system. Clients can invite others to the platform and receive exclusive benefits for each successful referral, while attorneys can expand their professional network by introducing peers to LAWYETI. This program not only encourages growth but also strengthens a trusted community built around instant, AI-powered legal support.
              </p>
                </div>
             
            </div>

            <div className="space-y-6" data-aos="fade-up">
              <div className="glow2 cardNew p-11 rounded-2xl">

              <img
                src="/assets/images/abt-4.png"
                alt="Legal help anytime"
                className="w-full object-bottom mx-auto max-w-[12rem]"
                />
              <h3 className="text-gradient-alt font-helvetica text-2xl md:text-[30px] font-medium leading-none tracking-tight capitalize">
              Legal help anytime
              </h3>
              <p className="text-white/80 mt-3 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
              LAWYETI ensures that reliable legal support is always within reach. Our platform provides clients with on-demand access to licensed attorneys, available whenever and wherever legal assistance is needed. Whether it’s an urgent issue or ongoing guidance, LAWYETI’s AI-driven system connects you instantly with the right expertise — giving you peace of mind around the clock.
              </p>
                </div>
            </div>
          </div>

          {/* Legal Areas Section */}
          <div className="space-y-8">
            <div
              className="flex justify-center items-center gap-6 mb-8"
              data-aos="fade-up"
            >
              <div className="flex px-6 md:px-8 py-3 items-start gap-3 rounded-full bg-gold/20">
                <span className="text-white font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight">
                  Legal Areas
                </span>
              </div>
            </div>

            <h2
              className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-6 max-w-3xl mx-auto"
              data-aos="fade-up"
            >
              High Demand Legal Needs
            </h2>
            <p
              className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 mb-12 container"
              data-aos="fade-up"
            >
              LAWYETI operates in the Legal Tech industry, with a sharp focus on Legal Services and AI-powered solutions for on-demand legal assistance
            </p>

            <div className="space-y-4" data-aos="fade-up">
              <div className="flex flex-wrap lg:-translate-x-14 justify-center gap-3 md:gap-6">
                <LegalAreaBadge>Criminal Defense</LegalAreaBadge>
                <LegalAreaBadge>Eviction</LegalAreaBadge>
                <LegalAreaBadge>Wage Theft</LegalAreaBadge>
                <LegalAreaBadge>Immigration</LegalAreaBadge>
                <LegalAreaBadge>Protective Orders</LegalAreaBadge>
                <LegalAreaBadge>Consumer Fraud</LegalAreaBadge>
              </div>
              <div className="flex flex-wrap lg:translate-x-14 justify-center gap-3 md:gap-6">
                <LegalAreaBadge>Criminal Defense</LegalAreaBadge>
                <LegalAreaBadge>Eviction</LegalAreaBadge>
                <LegalAreaBadge>Wage Theft</LegalAreaBadge>
                <LegalAreaBadge>Immigration</LegalAreaBadge>
                <LegalAreaBadge>Protective Orders</LegalAreaBadge>
                <LegalAreaBadge>Consumer Fraud</LegalAreaBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Legal Help Section */}
      <section
        className="pt-16 lg:py-24 relative lg:m-7 lg:rounded-[42px] overflow-hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), #1A1A1A",
        }}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2
            className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-6"
            data-aos="fade-up"
          >
            Get Legal help Instantly Free with LAWYETI AI.
          </h2>
          <p
            data-aos="fade-up"
            className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 container"
          >
            By combining advanced technology with expert legal insight, we’re
            redefining how people access justice.
          </p>
          <p
            data-aos="fade-up"
            className="text-white/80 md:max-w-[60%] mx-auto mt-2 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 container"
          >
            At LAWYETI, we believe access to justice begins with access to
            knowledge. That’s why we provide educational resources designed to
            help individuals better understand their legal rights and
            responsibilities.
          </p>
          <div className="relative space-y-20" data-aos="fade-up">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="lg:p-10" data-aos="fade-left">
                <img
                  src="/assets/images/robot.png"
                  alt="AI Legal Assistant"
                  className="h-[250px] lg:w-full object-contain lg:h-auto mx-auto"
                />
              </div>
              <div
                className="text-left space-y-6 pb-10 lg:p-10"
                data-aos="fade-right"
              >
                <h3 className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-6">
                  12384 AI Legal Chats completed
                </h3>
                <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                  Each interaction strengthens our system, making it smarter,
                  faster, and more reliable — so you can be confident you’re
                  getting accurate and timely support every time.
                </p>
                <div className="space-y-4">
                  <div className="h-10 bg-gold/30 rounded-lg flex items-center px-4">
                    <span className="text-white/80 font-helvetica text-sm md:text-base font-medium">
                      Ask your legal question to our AI
                    </span>
                  </div>
                  <div className="h-10 bg-gold/30 rounded-lg flex items-center px-4">
                    <span className="text-white/80 font-helvetica text-sm md:text-base font-medium">
                      Get real answers instantly
                    </span>
                  </div>
                  <div className="h-10 bg-gold/30 rounded-lg flex items-center px-4">
                    <span className="text-white/80 font-helvetica text-sm md:text-base font-medium">
                      Need urgent help? Jump into a live attorney call
                    </span>
                  </div>
                  <div className="h-10 bg-gold/30 rounded-lg flex items-center px-4">
                    <span className="text-white/80 font-helvetica text-sm md:text-base font-medium">
                      Stay protected and informed
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:gap-24 gap-10">
              <div className="lg:p-10" data-aos="fade-left">
                <img
                  src="/assets/images/phonecall.png"
                  alt="AI Legal Assistant"
                  className="mx-auto w-[150px] lg:w-[200px] object-contain"
                />
              </div>
              <div className="text-left lg:p-10" data-aos="fade-right">
                <h3 className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-6">
                  3100+ Emergency Calls Triaged
                </h3>
                <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                  Our AI-powered system ensures that emergencies are
                  prioritized, handled efficiently, and directed to qualified
                  professionals who can act promptly.
                </p>
              </div>
              <div className="absolute -top-17 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:gap-24">
              <div
                className="text-left order-2 lg:p-10 lg:order-1"
                data-aos="fade-left"
              >
                <h3 className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-6">
                  Attorney in 27 Specialties and Growing
                </h3>
                <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[170%] opacity-80">
                  From family law to corporate, criminal defence to intellectual
                  property, our expanding network ensures you’ll always find the
                  right expert for your unique situation.
                </p>
              </div>
              <div className="absolute -top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="lg:p-10 order-1 lg:order-2" data-aos="fade-right">
                <img
                  src="/assets/images/law.png"
                  alt="AI Legal Assistant"
                  className="mx-auto w-[150px] lg:w-[200px] object-contain"
                />
              </div>
            </div>
            <div className="hidden lg:block absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/*  Pre-Launch Section */}
      <section className="py-16 md:py-24" data-aos="fade-up">
        <h2
          className="text-gradient-alt text-center font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-16"
          data-aos="fade-up"
        >
          Pre-Launch Section
        </h2>
        <div className="container px-8  mx-auto" data-aos="fade-up">
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-40 mt-16">
            <FeatureCard
              center
              icon={<img src="/assets/images/icons/upcoming.svg" />}
              title="Upcoming Packages"
              description="We’re introducing exclusive prelaunch packages designed to give early users and attorneys a head start."
              className="text-center"
            />
            <FeatureCard
              center
              icon={<img src="/assets/images/icons/discount.svg" />}
              title="Early Bird Discount"
              description="We’re offering an Early Bird Discount for both clients and attorneys who sign up before the official rollout."
              className="text-center"
            />
            <FeatureCard
              center
              icon={<img src="/assets/images/icons/payment.svg" />}
              title="Payment Options"
              description="Every transaction is encrypted and backed by trusted payment gateways, ensuring security, transparency, and peace of mind for both clients and attorneys."
              className="text-center"
            />
          </div>
        </div>
      </section>

      <OurSolution />

      {/* Testimonials Section */}
      <section
        className="py-16 md:py-24 relative  lg:m-7 lg:rounded-[42px] overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/30 bg-dark-gray  border-b border-white/70" />

        <div
          className="relative z-10 container mx-auto px-4 md:px-8"
          data-aos="fade-up"
        >
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="flex px-6 md:px-8 py-3 items-start gap-3 rounded-full bg-gold/20">
                <span className="text-white font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight">
                  Spotlight
                </span>
              </div>
            </div>
            <h2
              className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize"
              data-aos="fade-up"
            >
              LAWYETI in Action
            </h2>
          </div>
          <div data-aos="fade-up">
            <Swiper
              spaceBetween={24} // gap between slides
              pagination={{ clickable: true }}
              slidesPerView={1} // default to 1 slide per view
              breakpoints={{
                640: { slidesPerView: 2 }, // md:grid-cols-2
                1024: { slidesPerView: 4 }, // lg:grid-cols-5
              }}
            >
              <SwiperSlide>
                <TestimonialCard
                  quote="User saved from eviction"
                  author="James Carlos"
                  title="CEO"
                  videoThumbnail="/assets/images/profile1.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialCard
                  quote="Gig worker wins wage case"
                  author="Martin Cole"
                  title="CEO"
                  videoThumbnail="/assets/images/profile2.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialCard
                  quote="Solo attorney on their first LAWYETI call"
                  author="Carlton Walker"
                  title="CEO"
                  videoThumbnail="/assets/images/profile3.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialCard
                  quote="Promoter explaining their referral earning"
                  author="Emma O'Connor "
                  title="CEO"
                  videoThumbnail="/assets/images/profile4.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialCard
                  quote="Promoter explaining their referral earning"
                  author="James"
                  title="CEO"
                  videoThumbnail="/assets/images/profile5.png"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 relative" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#090909]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div
            className="flex items-center justify-center gap-6 mb-10 lg:mb-12"
            data-aos="fade-up"
          >
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
                    LAWYETI connected me with the right attorney in minutes. I
                    felt supported and secure during a stressful time.
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
                    As an attorney, the platform makes it simple to connect with
                    clients, manage sessions, and get paid quickly. It’s a
                    game-changer for my practice.
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
                    The AI matching was spot on — I didn’t have to waste time
                    searching. I got the legal advice I needed instantly.
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
                    As a business owner, I was able to find specialized legal
                    advice for my company contracts without hassle. LAWYETI
                    saved me time and gave me confidence in every decision.
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
    </>
  );
}
