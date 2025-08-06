'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"
import { Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "When will JoyCards be available for purchase?",
      answer: "We're launching our first collections in Fall 2024, starting with the Back to School Collection. Sign up for our newsletter to be notified when pre-orders begin."
    },
    {
      question: "Do you offer wholesale pricing for retailers?",
      answer: "Yes! We offer competitive wholesale pricing for retailers and businesses. Please contact us using the form above with 'Wholesale' as your subject for more information."
    },
    {
      question: "What makes JoyCards different from other greeting cards?",
      answer: "Our cards are designed using positive psychology principles to create genuine emotional connections. We focus on premium materials, meaningful messages, and beautiful design that spreads positivity."
    },
    {
      question: "Are your cards environmentally friendly?",
      answer: "We use sustainable, high-quality paper and eco-friendly printing processes. We're committed to creating beautiful cards while protecting our planet."
    },
    {
      question: "Can I customize cards for my business or event?",
      answer: "We offer custom design services for businesses and special events. Contact us with your requirements, and we'll work with you to create something special."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we focus on serving the United States market. However, we're exploring international shipping options for the future. Stay tuned for updates!"
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeIn" duration={1}>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
              Get in Touch
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.2}>
            <p className="text-2xl text-gray-600 mb-16 font-light">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection animation="slideInLeft">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a message
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border-gray-300 px-4 py-3 text-lg focus:border-[#007AFF] focus:ring-[#007AFF]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border-gray-300 px-4 py-3 text-lg focus:border-[#007AFF] focus:ring-[#007AFF]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Select>
                      <SelectTrigger className="w-full rounded-xl border-gray-300 px-4 py-3 text-lg focus:border-[#007AFF] focus:ring-[#007AFF]">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="wholesale">Wholesale</SelectItem>
                        <SelectItem value="press">Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="w-full rounded-xl border-gray-300 px-4 py-3 text-lg focus:border-[#007AFF] focus:ring-[#007AFF] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-xl py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="slideInRight" delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#007AFF] rounded-xl flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        <p className="text-lg text-gray-900">hello@joycards.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#007AFF] rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Based in</p>
                        <p className="text-lg text-gray-900">Shenzhen, China</p>
                        <p className="text-sm text-gray-600">Serving United States market</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Response Time
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For wholesale and press inquiries, please allow up to 48 hours for a detailed response.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Find answers to common questions about JoyCards.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredGrid 
            className="space-y-4"
            staggerDelay={0.1}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </section>
    </div>
  )
}
