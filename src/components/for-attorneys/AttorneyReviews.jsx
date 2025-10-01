import { useState } from "react";
import { Play, X } from "lucide-react";

const AttorneyReviews = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-medium leading-[130%] tracking-[-1.04px] text-gradient capitalize"
              data-aos="fade-up"
            >
              Attorney Reviews
            </h2>
            <p
              className="mt-6 text-lawyeti-white-80 font-helvetica text-base leading-[170%] opacity-80  max-w-[600px] mx-auto"
              data-aos="fade-up"
            >
              Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
              suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis
              sodales velit pretium quam.
            </p>
          </div>

          {/* Video Testimonial Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Background Card */}
            <div
              className="w-full h-[512px] bg-[#1A1A1A]  lg:rounded-[30px] border-t border-b border-white/20 bg-lawyeti-dark-grey relative overflow-hidden"
              data-aos="fade-up"
            >
              {/* Video Background */}
              <div className="absolute inset-0  p-8">
                <img
                  src="/assets/images/review-bg.png"
                  alt="Attorney testimonial video"
                  className="w-full h-full object-cover rounded-[20px]"
                />
                {/* Video Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-lawyeti-black via-transparent to-transparent rounded-[20px] glass-blur"></div>
              </div>

              {/* Testimonial Content - Bottom Overlay */}
              <div
                className="absolute -bottom-2 left-0 right-0 lg:p-15 p-20 text-center videoBtn"
                data-aos="fade-up"
              >
                {/* Play Button */}
                <button
                  data-aos="fade-up"
                  className="w-20 h-20 mx-auto mb-5 rounded-full bg-[#1A1A1A] border border-white/20 flex items-center justify-center cursor-pointer"
                  onClick={() => setShowVideo(true)}
                  aria-label="Play testimonial video"
                >
                  <Play
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                  />
                </button>

                {/* Attribution */}
                <div className="mb-6 hideonMobile">
                  <p className="text-gold font-inter-tight text-2xl font-medium leading-[120%] tracking-[-0.78px]">
                    James - Legal lawyer
                  </p>
                </div>

                {/* Quote */}
                <blockquote
                  className="hideonMobile text-white font-inter-tight text-2xl md:text-3xl font-normal leading-[120%] tracking-[-1.08px] max-w-4xl mx-auto"
                  data-aos="fade-up"
                >
                  "Egestas odio justo leo at nunc non. Quam nunc felis nibh enim
                  suspendisse in. Eros sit tortor sed quis. Mi aliquet mattis
                  sodales velit pretium quam."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Video Popup Modal */}
      </section>
      {showVideo && (
        <div className="fixed top-0 left-0 min-w-screen  min-h-screen  z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-3xl mx-auto p-4">
            <button
              className="absolute top-2 right-2 z-10 bg-black/60 rounded-full p-2 cursor-pointer"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/eS6a6btDK8M?si=VHicLEaATB-0jVm4"
              title="Attorney Testimonial"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-[400px] aspect-video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default AttorneyReviews;
