const Testimonials = () => {
  const testimonials = [
    {
      statNumber: "1,102",
      statDescription: "Clients Matched Instantly",
      quote:
        "LAWYETI connected me with the right attorney in minutes. I felt supported and secure during a stressful time.",
      client: {
        name: "Sarah K.",
        title: "Client",
        avatar:
          "https://api.builder.io/api/v1/image/assets/TEMP/029855a08b87cbf211d867e950a85021ce167aec?width=135",
      },
    },
    {
      statNumber: "17,320",
      statDescription: "Attorneys Empowered",
      quote:
        "As an attorney, the platform makes it simple to connect with clients, manage sessions, and get paid quickly. It’s a game-changer for my practice.",
      client: {
        name: "James R.",
        title: "Attorney",
        avatar:
          "https://api.builder.io/api/v1/image/assets/TEMP/bfdfc274c2ab0b8f6f0d9ecf44bb4648fc2f6cd0?width=99",
      },
    },
    {
      statNumber: "2,400",
      statDescription: "Instant Legal Matches",
      quote:
        "The AI matching was spot on — I didn’t have to waste time searching. I got the legal advice I needed instantly.",
      client: {
        name: "David M.",
        title: "Client",
        avatar:
          "https://api.builder.io/api/v1/image/assets/TEMP/c8769ee36d7db71f48323e12db4ea61e48d87126?width=99",
      },
    },
    {
      statNumber: "3,850",
      statDescription: "Businesses Supported",
      quote:
        "As a business owner, I was able to find specialized legal advice for my company contracts without hassle. LAWYETI saved me time and gave me confidence in every decision.",
      client: {
        name: "Ayesha B.",
        title: "Business Owner",
        avatar:
          "https://api.builder.io/api/v1/image/assets/TEMP/ab3a2de56c96dbdb6ea1cf6ec2380d4d1df38492?width=120",
      },
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-lawyeti-black via-transparent to-transparent"></div>

      {/* Glowing orb effect */}
      <div className="absolute top-[-260px] left-1/2 transform -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-white/19 blur-[127px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-16 mb-20">
          {/* Testimonials Badge */}
          <div className="flex items-center gap-6">
            <div className="px-6 py-3 rounded-full bg-lawyeti-gold/20">
              <div className="flex items-center gap-2">
                <span className="text-white font-inter-tight text-base font-normal leading-none tracking-[-0.16px]">
                  Testimonials
                </span>
              </div>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-medium leading-[130%] tracking-[-1.04px] text-gradient capitalize max-w-[543px]">
            What Our Clients Say's About Us
          </h2>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Quote Mark */}
              <div className="absolute left-0 -top-4">
                <svg
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2848 2.93194L19.9938 3.49583e-06C7.60414 7.53927 1.79649 16.1256 0.247777 25.7592C-0.913754 33.7173 1.99007 40 9.34643 40C14.5733 40 19.6066 36.2304 20.7681 29.9476C21.7361 22.6178 17.8643 18.2199 13.0246 17.1728C14.9605 10.0524 23.0912 2.93194 23.2848 2.93194ZM39.9334 16.7539C42.0629 9.84295 49.8064 2.93194 50 2.93194L46.709 8.16686e-06C34.3193 7.53927 28.5117 16.1257 26.963 25.7592C25.8014 33.7173 28.7053 40 36.0616 40C41.2885 40 46.3218 36.2304 47.2898 29.9476C48.4513 22.6178 44.7731 17.8011 39.9334 16.7539Z"
                    fill="#D1995B"
                  />
                </svg>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                {/* Left: Statistics */}
                <div className="flex flex-col items-start gap-2 min-w-[241px]">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-helvetica font-medium leading-[120%] tracking-[-1.6px] text-gradient capitalize">
                    {testimonial.statNumber}
                  </span>
                  <span className="text-lawyeti-white-80 font-helvetica text-lg font-normal leading-[140%] capitalize">
                    {testimonial.statDescription}
                  </span>
                </div>

                {/* Right: Quote and Client */}
                <div className="flex flex-col items-start gap-6 max-w-[689px] flex-1">
                  {/* Quote */}
                  <blockquote className="text-white text-justify font-helvetica text-xl md:text-2xl font-normal leading-[170%] capitalize">
                    {testimonial.quote}
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-6">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={testimonial.client.avatar}
                        alt={testimonial.client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Client Details */}
                    <div className="flex flex-col justify-center items-start gap-2">
                      <h4 className="text-white font-helvetica text-xl md:text-2xl font-medium leading-[120%]">
                        {testimonial.client.name}
                      </h4>
                      <p className="text-lawyeti-white-80 font-helvetica text-base font-normal leading-[150%]">
                        {testimonial.client.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              {index < testimonials.length - 1 && (
                <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
