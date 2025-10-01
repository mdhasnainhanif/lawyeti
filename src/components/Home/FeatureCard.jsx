import React from "react";

const FeatureCard = ({
  icon,
  title,
  description,
  center = false,
  className = "",
}) => (
  <div
    className={`flex flex-col items-start gap-5 md:gap-6 ${className} ${
      center ? "text-center items-center" : ""
    }`}
  >
    <div
      className={`${
        center ? "mx-auto" : ""
      } flex w-16 h-16 md:w-[70px] md:h-[70px] items-center justify-center rounded-full border border-transparent bg-dark-gray`}
    >
      {icon}
    </div>
    <h3
      className={`${
        center ? "mx-auto" : ""
      } text-white font-helvetica text-2xl md:text-[32px] font-medium leading-[110%] capitalize`}
    >
      {title}
    </h3>
    <p className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80">
      {description}
    </p>
  </div>
);

export default FeatureCard;
