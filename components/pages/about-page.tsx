import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"
import { Heart, Users, Award, Search, Palette, Package } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on the materials and craftsmanship that go into every card."
    },
    {
      icon: Heart,
      title: "Positivity",
      description: "Every message is designed to uplift, inspire, and spread joy to both sender and receiver."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of human connection and building stronger relationships."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Research",
      subtitle: "Psychology-based design",
      description: "We study positive psychology principles to understand what messages truly resonate and create emotional connections.",
      icon: Search
    },
    {
      step: "02",
      title: "Design",
      subtitle: "Beautiful, meaningful artwork",
      description: "Our design team creates stunning visuals that complement the carefully crafted messages, ensuring every card is a work of art.",
      icon: Palette
    },
    {
      step: "03",
      title: "Craft",
      subtitle: "Premium materials and printing",
      description: "We use only the finest sustainable materials and printing techniques to create cards that feel as good as they look.",
      icon: Package
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeIn" duration={1}>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
              Our Story
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.2}>
            <p className="text-2xl text-gray-600 mb-16 font-light">
              Building bridges of positivity across cultures and continents.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Story */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  From Shenzhen to America
                </h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    JoyCards was born from a simple observation: in our increasingly digital world, 
                    the power of a handwritten message has never been more meaningful.
                  </p>
                  <p>
                    Founded in Shenzhen with a deep understanding of both Eastern and Western cultures, 
                    we recognized the universal human need for connection and positivity. Our mission 
                    became clear: create greeting cards that don't just convey messages, but spread 
                    genuine joy and strengthen relationships.
                  </p>
                  <p>
                    Every card we design is infused with positive psychology principles, ensuring 
                    that each message not only reaches its recipient but truly resonates with them, 
                    creating moments of happiness that last long after the card is received.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/FounderPhoto.png"
                    alt="Founder"
                    width={480}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#007AFF] rounded-3xl flex items-center justify-center shadow-xl">
                  <Heart className="h-16 w-16 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Designed for Connection
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Our values guide everything we do, from the messages we craft to the materials we choose.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredGrid 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            staggerDelay={0.2}
          >
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#007AFF] rounded-3xl flex items-center justify-center mx-auto mb-8 transform transition-transform duration-300 hover:scale-110">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                How We Create
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Our three-step process ensures every card is thoughtfully designed and beautifully crafted.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-24">
            {process.map((step, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.2}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-[#007AFF] rounded-2xl flex items-center justify-center mr-6">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#007AFF] font-semibold uppercase tracking-wide">
                          Step {step.step}
                        </p>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700 mb-4">
                      {step.subtitle}
                    </h4>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={`/${step.title}Process.png`}
                        alt={`${step.title} Process`}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
