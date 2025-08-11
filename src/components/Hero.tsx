import React from 'react';
import { Play } from 'lucide-react';

const HomePage = () => {
  const handleWatchSuccessStories = () => {
    const section = document.getElementById('placement-training');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        const iframe = section.querySelector('iframe');
        if (iframe) {
          const src = iframe.src;
          if (!src.includes("autoplay=1")) {
            iframe.src = src.includes("?")
              ? `${src}&autoplay=1`
              : `${src}?autoplay=1`;
          }
        }
      }, 600); // wait for scroll to complete
    }
  };

  return (
    <div>
      {/* Other sections */}

      {/* Success Stories Button */}
      <div className="text-center my-8">
        <button
          className="btn-secondary flex items-center"
          onClick={handleWatchSuccessStories}
        >
          <Play className="w-5 h-5 mr-2" />
          Watch Success Stories
        </button>
      </div>

      {/* Placement Training Section */}
      <section
        id="placement-training"
        className="py-12 bg-gray-50 flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Placement Training</h2>
        <p className="text-neutral-600 max-w-2xl text-center mb-6">
          Learn directly what hiring managers look for in resumes, interviews, and attitude.
          Cut the guesswork.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LKhYFb6R1rU"
          title="Placement Training"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <ul className="mt-6 text-left list-disc list-inside">
          <li>Resume optimization</li>
          <li>Interview preparation</li>
          <li>Hiring manager insights</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
