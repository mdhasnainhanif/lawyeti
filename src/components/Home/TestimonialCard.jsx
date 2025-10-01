import { Play } from "lucide-react";
import React from "react";

const TestimonialCard = ({ quote, author, title, videoThumbnail }) => (
  <div
    className={`relative rounded-[20px] md:rounded-[30px] group overflow-hidden border border-white/30 transition-all duration-300 cursor-pointer`}
  >
    <div className="w-full h-64 md:h-[429px] relative">
      <h3
        className={`text-2xl md:text-3xl font-normal leading-[120%] tracking-tight p-6`}
      >
        {author}
      </h3>
      <img
        src={videoThumbnail}
        alt={`${author} testimonial`}
        className="w-full h-full object-cover rounded-[20px] md:rounded-[30px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
      {/* <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 rounded-full flex items-center justify-center">
          <Play
            className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
            fill="white"
          />
        </div>
      </button> */}
      {/* <div
        className={`absolute top-0 left-0 z-1 bg-[#1A1A1A] w-full group-hover:bg-gold group-hover:text-[#1A1A1A] transition-all text-gold py-4 px-6  mb-2 md:mb-3 text-xl md:text-2xl font-medium leading-[120%] tracking-tight `}
      >
        
      </div> */}
    </div>
    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
      <h3
        className={`text-2xl md:text-3xl font-normal leading-[120%] tracking-tight `}
      >
        {quote}
      </h3>
    </div>
  </div>
);

export default TestimonialCard;
