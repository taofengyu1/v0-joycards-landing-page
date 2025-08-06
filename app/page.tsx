'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import HomePage from '@/components/pages/home-page'
import ProductsPage from '@/components/pages/products-page'
import AboutPage from '@/components/pages/about-page'
import ContactPage from '@/components/pages/contact-page'

type TabType = 'home' | 'products' | 'about' | 'contact'

export default function JoyCardsWebsite() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: 'home' as TabType, label: 'Home' },
    { id: 'products' as TabType, label: 'Products' },
    { id: 'about' as TabType, label: 'About' },
    { id: 'contact' as TabType, label: 'Contact' },
  ]

  const handleTabChange = (newTab: TabType) => {
    if (newTab === activeTab) return
    
    setIsTransitioning(true)
    setIsMobileMenuOpen(false)
    
    setTimeout(() => {
      setActiveTab(newTab)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Update URL without page reload
      window.history.pushState({}, '', `#${newTab}`)
      
      setTimeout(() => {
        setIsTransitioning(false)
      }, 150)
    }, 150)
  }

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1) as TabType
      if (hash && tabs.some(tab => tab.id === hash)) {
        setActiveTab(hash)
      }
    }

    window.addEventListener('popstate', handlePopState)
    
    // Set initial tab from URL
    const initialHash = window.location.hash.slice(1) as TabType
    if (initialHash && tabs.some(tab => tab.id === initialHash)) {
      setActiveTab(initialHash)
    }

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />
      case 'products':
        return <ProductsPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-4 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              JoyCards
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative text-sm font-medium transition-colors duration-200 py-2 ${
                  activeTab === tab.id
                    ? 'text-[#007AFF]'
                    : 'text-gray-900 hover:text-gray-600'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007AFF] rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex-1 md:flex-none" />
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="flex flex-col py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`text-left px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-[#007AFF] bg-blue-50'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <main className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderContent()}
      </main>
    </div>
  )
}
