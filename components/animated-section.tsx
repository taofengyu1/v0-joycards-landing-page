'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
  delay?: number
  duration?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out'
    const durationClass = `duration-[${Math.round(duration * 1000)}ms]`
    const delayClass = delay > 0 ? `delay-[${Math.round(delay * 1000)}ms]` : ''

    switch (animation) {
      case 'slideUp':
        return `${baseClasses} ${durationClass} ${delayClass} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`
      case 'slideInLeft':
        return `${baseClasses} ${durationClass} ${delayClass} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`
      case 'slideInRight':
        return `${baseClasses} ${durationClass} ${delayClass} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`
      case 'scaleIn':
        return `${baseClasses} ${durationClass} ${delayClass} ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`
      default: // fadeIn
        return `${baseClasses} ${durationClass} ${delayClass} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
