import React from "react";

const LegalAreaBadge = ({ children }) => (
  <div className="flex h-12 md:h-[60px] px-4 md:px-5 items-center gap-2 rounded-[30px] border border-white/50">
    <span className="text-white font-helvetica text-sm md:text-xl font-medium leading-[120%]">
      {children}
    </span>
  </div>
);

export default LegalAreaBadge;
