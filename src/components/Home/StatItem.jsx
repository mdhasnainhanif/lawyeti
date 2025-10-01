import React from "react";

const StatItem = ({ number, label }) => (
  <div className="flex flex-col items-start gap-2">
    <div className="text-gradient-alt font-helvetica text-4xl md:text-[80px] font-medium leading-[120%] tracking-tight capitalize">
      {number}
    </div>
    <div className="text-white/80 font-helvetica text-sm md:text-lg font-normal leading-[140%] capitalize">
      {label}
    </div>
  </div>
);

export default StatItem;
