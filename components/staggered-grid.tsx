'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode } from 'react'

interface StaggeredGridProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggeredGrid({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: StaggeredGridProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-800 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}s` : '0s'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
