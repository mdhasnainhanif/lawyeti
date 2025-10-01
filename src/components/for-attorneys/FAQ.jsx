"use client";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";

// Tab and FAQ data
const tabs = [
  { id: "payouts", label: "For Attorneys" },
  { id: "onboarding", label: "For Clients" },
];

const faqs = {
  payouts: [
    {
      id: "faq1",
      question: "How do I receive payouts?",
      answer:
        "You will receive payouts directly to your registered bank account. Please ensure your details are up to date.",
    },
    {
      id: "faq2",
      question: "When are payouts processed?",
      answer:
        "Payouts are processed every Friday. You will be notified once your payout is sent.",
    },
    {
      id: "faq3",
      question: "How does LAWYETI generate leads for attorneys?",
      answer:
        "LAWYETI uses AI to match clients directly with your expertise, providing you with unlimited, real-time leads.",
    },
    {
      id: "faq4",
      question: "How do attorneys get paid?",
      answer:
        "Payments are processed securely through LAWYETI’s billing system, ensuring direct and timely payouts.",
    },
    {
      id: "faq5",
      question: "What is the verification process?",
      answer:
        "After submitting your form, our team verifies your credentials and licensing before you can begin accepting clients.",
    },
    {
      id: "faq6",
      question: "Is there a cost for attorneys to join?",
      answer:
        "During prelaunch, we offer special packages, including Early Bird Discounts and limited-time commission-free billing.",
    },
    {
      id: "faq7",
      question: "Can I choose the types of clients I want to work with?",
      answer:
        "Yes. You’ll have the flexibility to define your areas of practice and accept clients aligned with your expertise.",
    },
  ],
  onboarding: [
    {
      id: "faq1",
      question: "What is LAWYETI, and how can it help me?",
      answer:
        "LAWYETI is an AI-powered platform that connects you with licensed attorneys in real time. Whether you need urgent legal advice or ongoing guidance, LAWYETI ensures fast, secure, and reliable access to the right legal expertise.",
    },
    {
      id: "faq2",
      question: "How quickly will I be matched with an attorney?",
      answer:
        "Our AI system matches you with a qualified attorney within seconds of submitting your request, ensuring there are no delays when you need support most.",
    },
    {
      id: "faq3",
      question: "Is there a cost to use LAWYETI?",
      answer:
        "Your initial match during the prelaunch phase is free of charge. Additional sessions or services may involve fees, which are always communicated transparently before you proceed.",
    },
    {
      id: "faq4",
      question: "What areas of law does LAWYETI cover?",
      answer:
        "LAWYETI currently provides access to attorneys across 27 legal specialties, including family law, real estate, business law, criminal defence, and more — with additional practice areas being added regularly.",
    },
    {
      id: "faq5",
      question: "How secure is my information?",
      answer:
        "Your privacy is our priority. All communications, sessions, and transactions on LAWYETI are fully encrypted, ensuring confidentiality and security at every step.",
    },
    {
      id: "faq6",
      question: "Can I use LAWYETI for emergencies?",
      answer:
        "Yes. LAWYETI is designed to handle urgent requests. Our system has already triaged thousands of emergency calls, connecting clients to the right attorney when every second matters.",
    },
    {
      id: "faq7",
      question: "Do I get to choose my attorney?",
      answer:
        "Our AI recommends the most suitable attorney based on your legal needs. You will be able to review their profile before starting your session.",
    },
    {
      id: "faq8",
      question: "What devices can I use to access LAWYETI?",
      answer:
        "LAWYETI is accessible through desktop, tablet, and mobile devices, allowing you to connect with attorneys anytime, anywhere.",
    },
  ],
};

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState("onboarding");
  const [openFaq, setOpenFaq] = useState(null);

  // When tab changes, close all FAQs
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
    setOpenFaq(null);
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Get FAQs for selected tab
  const currentFaqs = faqs[selectedTab];

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container px-8 lg:max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-medium leading-[130%] tracking-[-1.04px] text-gradient capitalize">
            Frequently Asked Question
          </h2>
          {/* <p
            className="mt-6 text-lawyeti-white-80 font-helvetica text-base leading-[150%] max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
            suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis sodales
            velit pretium quam.
          </p> */}
        </div>

        {/* Tabs */}
        <div
          className="flex lg:flex-row flex-wrap justify-center gap-6 mb-10"
          data-aos="fade-up"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-8 py-2 rounded-full border text-gold border-gold cursor-pointer font-helvetica text-base transition-colors ${
                selectedTab === tab.id ? "bg-gold text-white" : "bg-transparent"
              }`}
              // data-aos="fade-up"
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="space-y-4" data-aos="fade-up">
            {currentFaqs.map((faq) => (
              <Collapsible
                key={faq.id}
                open={openFaq === faq.id}
                onOpenChange={() => toggleFaq(faq.id)}
              >
                <div
                  className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 placeholder:text-[14px] px-10 focus-visible:border-white/60 overflow-hidden faqItem"
                  // data-aos="fade-up"
                >
                  <CollapsibleTrigger className="w-full focus-visible:outline-0 py-6 text-left flex items-center justify-between cursor-pointer">
                    <span className="text-white  text-xl font-medium">
                      {faq.question}
                    </span>
                    <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
                      {openFaq === faq.id ? (
                        <span className="flex -mt-1 text-white text-xl">-</span>
                      ) : (
                        <span className="flex -mt-1 text-white text-xl">+</span>
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pb-6">
                    <p className="text-law-yeti-text-muted  text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
