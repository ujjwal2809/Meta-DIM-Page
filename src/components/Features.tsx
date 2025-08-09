import React, { useState } from 'react';
import { Users, Code, Trophy, Building, Briefcase, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Classroom Training",
      subtitle: "(Not an online course)",
      description:
        "Engage with mentors face-to-face. Learn in a structured, distraction-free environment with immediate support from real people.",
      benefits: [
        "Face-to-face interaction",
        "Immediate doubt resolution",
        "Peer learning environment",
      ],
      videoId: "WYGMPt4NfOk",
    },
    {
      icon: Code,
      title: "Project-Based Learning",
      subtitle: "(Not theory)",
      description:
        "Graduate with a portfolio of real-world projects. Gain proof of skills employers value — not just a certificate.",
      benefits: ["Hands-on experience", "Portfolio projects", "Industry-relevant skills"],
      videoId: "JTJwsGXo_JI",
    },
    {
      icon: Trophy,
      title: "Industry Experts",
      subtitle: "(Not outdated content)",
      description:
        "Get inside knowledge from professionals working in DevOps/Cloud roles today. Stay ahead of outdated syllabi.",
      benefits: ["Current industry practices", "Real-world insights", "Latest technologies"],
      videoId: "_hUoqPaCqRk",
    },
    {
      icon: Briefcase,
      title: "Placement Training",
      subtitle: "(From hiring managers)",
      description:
        "Learn directly what hiring managers look for in resumes, interviews, and attitude. Cut the guesswork.",
      benefits: ["Resume optimization", "Interview preparation", "Hiring manager insights"],
      videoId: "LKhYFb6R1rU",
    },
    {
      icon: Building,
      title: "450+ Company Network",
      subtitle: "(Placement assurance)",
      description:
        "Skip job boards. Get direct placement support through a trusted network. Build your future with clarity and confidence.",
      benefits: ["Direct company access", "Placement guarantee", "Network support"],
      videoId: "_hUoqPaCqRk",
    },
  ];

  return (
    <section className="section-padding bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 lg:mb-6">
            Why Our Program Works
            <span className="block text-brand-500">When Others Don't</span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-300 max-w-3xl mx-auto">
            Every feature is designed to address the real barriers keeping you from landing your dream job.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {features.map((feature, index) => (
            <VideoFeature key={index} feature={feature} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Video section with click-to-play logic and loop
const VideoFeature = ({ feature, reverse }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${feature.videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${feature.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${feature.videoId}`;

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Text Content */}
      <div className={`space-y-4 lg:space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-brand-50 rounded-md border border-brand-200">
            <feature.icon className="w-6 lg:w-8 h-6 lg:h-8 text-brand-500" />
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="text-brand-400 font-medium text-sm lg:text-base">{feature.subtitle}</p>
          </div>
        </div>

        <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">{feature.description}</p>

        <div className="space-y-2 lg:space-y-3">
          {feature.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-success-500 flex-shrink-0" />
              <span className="text-neutral-300 text-sm lg:text-base">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clickable Video */}
      <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
        <div
          className="relative overflow-hidden rounded-lg border border-neutral-700 shadow-lg aspect-video group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img src={thumbnail} alt="Video thumbnail" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </>
          ) : (
            <iframe
              src={embedUrl}
              title={feature.title}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
