"use client";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { Phone, Mail, MapPin, ArrowDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQSection from "../../components/FAQSection";
import { Button } from "../../components/ui/button";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [service, setService] = useState("consultation"); // 👈 track selected service

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    // 👇 service manually add karni hogi
    formData.append("service", service);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
        setService(""); // reset service
      } else {
        setStatus("❌ " + data.message);
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("❌ Could not send message.");
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
      <section
        className="relative lg:rounded-[50px] lg:m-7 lg:mb-0 overflow-hidden px-4 pt-30 bg-[url('/assets/images/about-bg.png')] bg-center bg-no-repeat h-[341px] lg:h-[541px] content-center"
        data-aos="fade-up"
      >
        <div
          className="relative z-10 mx-auto px-4 md:px-8 py-8"
          data-aos="fade-up"
        >
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-4 mb-16 xl:max-w-6xl mx-auto text-center">
            <p
              className="text-white font-inter-tight text-sm md:text-base Fleading-[150%] tracking-tight opacity-80 max-w-2xl"
              data-aos="fade-up"
            >
              Home {">"} Contact Us
            </p>
            <h1
              className="text-gradient font-helvetica text-3xl md:text-4xl lg:text-[64px] font-bold leading-[110%] tracking-tight capitalize"
              data-aos="fade-up"
            >
              Contact Us
            </h1>
          </div>
        </div>

        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white/20 blur-[127px]" />
        <div className="absolute bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-white/20 blur-[127px]" />
      </section>

      {/* Contact Section */}
      <section
        className="relative overflow-hidden px-6 lg:px-16  pt-10 lg:py-24"
        data-aos="fade-up"
      >
        {/* Help Widget */}
        {/* <div className="ml-auto mb-25 pr-6 w-[256px]">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/assets/images/contact-icon.png"
              alt="Legal scales decoration"
            />
          </div>
        </div> */}

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent  leading-tight mb-6">
                Get In Touch With Us
              </h2>
              <p className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent  mb-4">
                We Reply Within 24 Hours!
              </p>
              <p className="text-law-yeti-text-muted  text-base leading-relaxed">
              We’re here to make legal help simpler, faster, and more accessible — and that includes staying connected with you. Whether you have a question, need support, or want to explore partnership opportunities, our team is ready to help.


              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className="w-14 h-14 bg-law-yeti-accent rounded-full flex items-center justify-center"
                  style={{ background: "#D1995B" }}
                >
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white  text-base">Phone:</p>
                  <p className="text-law-yeti-text-muted  text-base">
                    703-209-7577
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="w-14 h-14 bg-law-yeti-accent rounded-full flex items-center justify-center"
                  style={{ background: "#D1995B" }}
                >
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white  text-base">Email:</p>
                  <p className="text-law-yeti-text-muted  text-base">
                    legal@lawyeti.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="w-14 h-14 bg-law-yeti-accent rounded-full flex items-center justify-center"
                  style={{ background: "#D1995B" }}
                >
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white  text-base">Location:</p>
                  <p className="text-law-yeti-text-muted  text-base">
                    9 425 31d St, SW Suite 101 Washington, DC 20024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form and Help Widget */}
          <div className="space-y-8 relative">
            {/* Contact Form */}
            <div className="bg-law-yeti-card-bg rounded-3xl lg:px-8 space-y-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Full Name"
                  required
                  className="bg-[#1A1A1A] border-[#484848] h-[70px] rounded-[42px] placeholder:text-[14px] px-10 focus-visible:border-white/60"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    placeholder="Phone"
                    required
                    className="bg-[#1A1A1A] border-[#484848] h-[70px] rounded-[42px] placeholder:text-[14px] px-10 focus-visible:border-white/60"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="bg-[#1A1A1A] border-[#484848] h-[70px] rounded-[42px] placeholder:text-[14px] px-10 focus-visible:border-white/60"
                  />
                </div>

                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="w-full bg-[#1A1A1A] border-[#484848]  rounded-[42px] placeholder:text-[14px] px-10 py-9 focus-visible:border-white/60">
                    <SelectValue placeholder="Select Services" />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-[#1A1A1A] text-white border-white/20">
                    <SelectItem value="consultation">
                      Legal Consultation
                    </SelectItem>
                    <SelectItem value="representation">
                      Legal Representation
                    </SelectItem>
                    <SelectItem value="document">Document Review</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  name="message"
                  placeholder="Write a Message"
                  required
                  className="bg-[#1A1A1A] h-[200px] border-[#484848]  rounded-[42px] placeholder:text-[14px] px-10 py-10 resize-none focus-visible:border-white/60"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-gold flex items-center justify-center border border-b-gold hover:bg-transparent hover:text-gold cursor-pointer w-full text-black text-lg px-12 py-6 rounded-full"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowDown className="h-4 w-4 -mb-1" />
                </Button>

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

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
