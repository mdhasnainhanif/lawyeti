"use client";
import { Button } from "./ui/button";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ArrowDown } from "lucide-react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState("faq2");

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="px-6 lg:px-16 py-16 lg:py-24" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-helvetica lg:text-5xl font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent  leading-tight mb-6"
            data-aos="fade-up"
          >
            Frequently Asked Question
          </h2>
          {/* <p
            className="text-law-yeti-text-muted  text-base leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
            suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis sodales
            velit pretium quam.
          </p> */}
        </div>

        <div className="space-y-4" data-aos="fade-up">
  {/* FAQ Item 1 */}
  <Collapsible
    open={openFaq === "faq1"}
    onOpenChange={() => toggleFaq("faq1")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          What is LAWYETI, and how can it help me?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq1" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          LAWYETI is an AI-powered platform that connects you with licensed attorneys in real time. Whether you need urgent legal advice or ongoing guidance, LAWYETI ensures fast, secure, and reliable access to the right legal expertise.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>

  {/* FAQ Item 2 */}
  <Collapsible
    open={openFaq === "faq2"}
    onOpenChange={() => toggleFaq("faq2")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          How quickly will I be matched with an attorney?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq2" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          Our AI system matches you with a qualified attorney within seconds of submitting your request, ensuring there are no delays when you need support most.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>

  {/* FAQ Item 3 */}
  <Collapsible
    open={openFaq === "faq3"}
    onOpenChange={() => toggleFaq("faq3")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          Is there a cost to use LAWYETI?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq3" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          Your initial match during the prelaunch phase is free of charge. Additional sessions or services may involve fees, which are always communicated transparently before you proceed.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>

  {/* FAQ Item 4 */}
  <Collapsible
    open={openFaq === "faq4"}
    onOpenChange={() => toggleFaq("faq4")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          What areas of law does LAWYETI cover?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq4" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          LAWYETI currently provides access to attorneys across 27 legal specialties, including family law, real estate, business law, criminal defence, and more — with additional practice areas being added regularly.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>

  {/* FAQ Item 5 */}
  <Collapsible
    open={openFaq === "faq5"}
    onOpenChange={() => toggleFaq("faq5")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          How secure is my information?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq5" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          Your privacy is our priority. All communications, sessions, and transactions on LAWYETI are fully encrypted, ensuring confidentiality and security at every step.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>

  {/* FAQ Item 6 */}
  <Collapsible
    open={openFaq === "faq6"}
    onOpenChange={() => toggleFaq("faq6")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          Can I use LAWYETI for emergencies?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq6" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          Yes. LAWYETI is designed to handle urgent requests. Our system has already triaged thousands of emergency calls, connecting clients to the right attorney when every second matters.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>

  {/* FAQ Item 7 */}
  <Collapsible
    open={openFaq === "faq7"}
    onOpenChange={() => toggleFaq("faq7")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          Do I get to choose my attorney?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq7" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          Our AI recommends the most suitable attorney based on your legal needs. You will be able to review their profile before starting your session.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>

  {/* FAQ Item 8 */}
  <Collapsible
    open={openFaq === "faq8"}
    onOpenChange={() => toggleFaq("faq8")}
  >
    <div className="bg-[#1A1A1A] border-0 border-l rounded-[42px] border-white/60 px-10 overflow-hidden faqItem">
      <CollapsibleTrigger className="w-full py-6 text-left flex items-center justify-between cursor-pointer">
        <span className="text-white text-xl font-medium">
          What devices can I use to access LAWYETI?
        </span>
        <div className="min-w-[54px] min-h-[54px] border border-gold rounded-full flex items-center justify-center">
          {openFaq === "faq8" ? (
            <span className="flex -mt-1 text-white text-xl">-</span>
          ) : (
            <span className="flex -mt-1 text-white text-xl">+</span>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-law-yeti-text-muted text-base leading-relaxed">
          LAWYETI is accessible through desktop, tablet, and mobile devices, allowing you to connect with attorneys anytime, anywhere.
        </p>
      </CollapsibleContent>
    </div>
  </Collapsible>
</div>


        {/* Send Message Button */}
        <div className="text-center mt-12">
          <Button className="bg-gold flex items-center justify-center border border-b-gold hover:bg-transparent hover:text-gold cursor-pointer w-full text-black text-lg px-12 py-6 rounded-full">
            Send Message
            <ArrowDown className="h-4 w-4 -mb-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
