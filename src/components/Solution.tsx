import React from 'react'
import { Zap, Target, Rocket } from 'lucide-react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import FormModal from './FormModal'
import { useFormModal } from '../hooks/useFormModal'

const Solution = () => {
  const { isOpen, openModal, closeModal } = useFormModal()

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: 'snap',
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  })

  return (
    <section id="program" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-background-secondary rounded-md border border-neutral-200 mb-6 lg:mb-8">
            <Zap className="w-4 lg:w-5 h-4 lg:h-5 text-brand-500 mr-2" />
            <span className="text-neutral-600 font-medium text-sm lg:text-base">
              The Game-Changing Solution
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-6xl font-semibold text-neutral-900 mb-6 lg:mb-8">
            A Practical, Classroom-Based
            <span className="block text-brand-500">DevOps & Cloud Career Accelerator</span>
          </h2>

          <p className="text-lg lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-8 lg:mb-12">
            Designed specifically for job seekers like you — with guaranteed placement support
            and mentorship from real hiring managers who know exactly what companies want.
          </p>
        </div>

        {/* Cards Carousel */}
        <div ref={sliderRef} className="keen-slider mb-12 lg:mb-16">
          {/* Card 1 */}
          <div className="keen-slider__slide group">
            <div className="card p-6 lg:p-8 h-full border border-neutral-200 rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-brand-50 rounded-md mb-4 lg:mb-6">
                <Target className="w-6 lg:w-8 h-6 lg:h-8 text-brand-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-3 lg:mb-4">
                Job-Ready Skills
              </h3>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                Learn exactly what hiring managers look for. No fluff, no outdated theory —
                just the skills that get you hired in today's market.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="keen-slider__slide group">
            <div className="card p-6 lg:p-8 h-full border border-neutral-200 rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-brand-50 rounded-md mb-4 lg:mb-6">
                <Rocket className="w-6 lg:w-8 h-6 lg:h-8 text-brand-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-3 lg:mb-4">
                Direct Placement
              </h3>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                Skip the job boards. Get direct access to our network of 450+ companies
                actively hiring DevOps and Cloud professionals.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="keen-slider__slide group">
            <div className="card p-6 lg:p-8 h-full border border-neutral-200 rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-brand-50 rounded-md mb-4 lg:mb-6">
                <Zap className="w-6 lg:w-8 h-6 lg:h-8 text-brand-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-3 lg:mb-4">
                Expert Mentorship
              </h3>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                Get guidance from industry professionals working in DevOps/Cloud roles today.
                Real experience, real results.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={openModal}
              className="group inline-flex items-center justify-center btn-primary transform hover:scale-105 hover:shadow-xl"
            >
              <Target className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Your Transformation Today
            </button>
          </div>
        </div>
      </div>
      
      {/* Form Modal */}
      <FormModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title="Start Your DevOps Transformation"
        subtitle="Get personalized guidance to accelerate your career change"
      />
    </section>
  )
}

export default Solution
