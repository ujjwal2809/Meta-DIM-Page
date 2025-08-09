import React from 'react';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Sending 50+ Applications Weekly",
      description: "Zero callbacks, endless rejections. Your resume disappears into the void.",
      stat: "98% of resumes never reach hiring managers"
    },
    {
      icon: AlertTriangle,
      title: "Don't Know What Recruiters Want",
      description: "Guessing what skills to highlight. Following outdated YouTube advice.",
      stat: "70% of candidates lack industry-relevant skills"
    },
    {
      icon: Clock,
      title: "Watching Friends Get Ahead",
      description: "Less talented peers landing great jobs while you're still stuck searching.",
      stat: "Average job search takes 6+ months"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            You've Tried Everything.
            <span className="block text-red-400">Still No Results?</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            You're not less talented — you're just not being seen. 
            <span className="text-yellow-400 font-semibold"> The problem isn't you, it's the strategy you've been told to follow.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 lg:p-8 hover:border-red-400/40 transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-red-500/20 rounded-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 lg:w-8 h-6 lg:h-8 text-red-400" />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">{point.title}</h3>
                <p className="text-slate-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">{point.description}</p>
                
                <div className="bg-red-500/10 rounded-lg p-3">
                  <p className="text-red-300 text-sm font-semibold">{point.stat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-6 lg:p-8 border border-red-500/20">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
            Keep Waiting and You Risk Being Left Behind
          </h3>
          <p className="text-slate-300 text-base lg:text-lg">
            The tech market is rapidly changing. AI won't wait. 
            <span className="text-yellow-400 font-semibold"> Your window of opportunity is closing.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;