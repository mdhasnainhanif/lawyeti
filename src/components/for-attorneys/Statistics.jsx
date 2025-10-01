const Statistics = () => {
  const stats = [
    {
      number: "100k+",
      description: "Egestas odio justo leo at nunc non."
    },
    {
      number: "20+",
      description: "Egestas odio justo leo at nunc non."
    },
    {
      number: "98%",
      description: "Egestas odio justo leo at nunc non."
    },
    {
      number: "1200+",
      description: "Egestas odio justo leo at nunc non."
    }
  ];

  return (
    <section className="lg:py-20 pb-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-start" data-aos="fade-up">
              {/* Number */}
              <div>
                <span className="text-5xl md:text-6xl lg:text-7xl font-helvetica font-medium lg:leading-0 tracking-[-1.4px] text-gradient capitalize">
                  {stat.number}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-lawyeti-white-80 font-helvetica text-base leading-[150%] max-w-[252px] lg:mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Gradient Line */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Statistics;
