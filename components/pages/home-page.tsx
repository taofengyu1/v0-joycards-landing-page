import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Leaf, Heart, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeIn" duration={1}>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
              Meet the JoyCards Collection.
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.2}>
            <p className="text-2xl text-gray-600 mb-16 font-light">
              Designed to spread positivity.
            </p>
          </AnimatedSection>
          
          {/* Hero Product Showcase */}
          <AnimatedSection animation="scaleIn" delay={0.4}>
            <div className="relative mb-16">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 shadow-2xl aspect-[3/4]">
                    <Image
                      src="/placeholder.svg?height=300&width=200&text=Holiday+Card"
                      alt="Holiday Card"
                      width={200}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="transform -rotate-2 hover:rotate-1 transition-transform duration-300 md:mt-8">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-2xl aspect-[3/4]">
                    <Image
                      src="/placeholder.svg?height=300&width=200&text=Thanksgiving+Card"
                      alt="Thanksgiving Card"
                      width={200}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="transform rotate-1 hover:-rotate-2 transition-transform duration-300 col-span-2 md:col-span-1">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl aspect-[3/4]">
                    <Image
                      src="/placeholder.svg?height=300&width=200&text=New+Year+Card"
                      alt="New Year Card"
                      width={200}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.6}>
            <p className="text-lg text-gray-500 mb-8 font-light">
              Coming Fall 2024
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.8}>
            <Button 
              className="bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Notified
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="w-full py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="slideUp">
            <h3 className="text-5xl font-bold text-gray-900 text-center mb-20 tracking-tight">
              Holiday Collections
            </h3>
          </AnimatedSection>
          
          <StaggeredGrid 
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            staggerDelay={0.15}
          >
            <div className="group cursor-pointer">
              <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Back+to+School"
                    alt="Back to School Collection"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Back to School Collection
                </h4>
                <p className="text-lg text-gray-600 mb-6 font-light">
                  Begin with confidence.
                </p>
                <Link href="#" className="inline-flex items-center text-[#007AFF] font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-6 right-6 bg-[#007AFF] text-white px-3 py-1 rounded-full text-sm font-medium">
                  New
                </div>
                <div className="aspect-[4/3] mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Thanksgiving"
                    alt="Thanksgiving Collection"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Thanksgiving Collection
                </h4>
                <p className="text-lg text-gray-600 mb-6 font-light">
                  Gratitude. Amplified.
                </p>
                <Link href="#" className="inline-flex items-center text-[#007AFF] font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Holiday"
                    alt="Holiday Collection"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Holiday Collection
                </h4>
                <p className="text-lg text-gray-600 mb-6 font-light">
                  Joy. Designed beautiful.
                </p>
                <Link href="#" className="inline-flex items-center text-[#007AFF] font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=New+Year"
                    alt="New Year Collection"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  New Year Collection
                </h4>
                <p className="text-lg text-gray-600 mb-6 font-light">
                  Fresh starts. Bold dreams.
                </p>
                <Link href="#" className="inline-flex items-center text-[#007AFF] font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </StaggeredGrid>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="slideUp">
            <h3 className="text-5xl font-bold text-gray-900 text-center mb-20 tracking-tight">
              Crafted for Connection
            </h3>
          </AnimatedSection>
          
          <StaggeredGrid 
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
            staggerDelay={0.2}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007AFF] rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-transform duration-300 hover:scale-110">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Psychology-Based Design
              </h4>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Every message crafted with positive psychology principles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#007AFF] rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-transform duration-300 hover:scale-110">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Premium Materials
              </h4>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Sustainable, high-quality printing that feels amazing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#007AFF] rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-transform duration-300 hover:scale-110">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Made for America
              </h4>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Designed specifically for US holidays and culture.
              </p>
            </div>
          </StaggeredGrid>
        </div>
      </section>

      {/* Email Collection */}
      <section className="w-full py-32 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="scaleIn">
            <div className="bg-white rounded-3xl p-16 shadow-xl text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Be the first to experience JoyCards.
              </h3>
              <p className="text-xl text-gray-600 mb-12 font-light">
                Join our community and get 20% off at launch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border-gray-300 px-6 py-3 text-lg focus:border-[#007AFF] focus:ring-[#007AFF]"
                />
                <Button className="bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  Sign Up
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 font-light">
                We respect your privacy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-2">JoyCards</h4>
            <p className="text-gray-600 font-light">Building something beautiful.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">Contact</Link>
          </div>
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} JoyCards. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
