'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Button from './Button'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  bgColor: string
}

interface SliderProps {
  slides: Slide[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
}

const Slider = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = ''
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, autoPlayInterval)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, slides.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 1
    }
  }

  const slideTransition = {
    opacity: { duration: 0.8, ease: "easeInOut" },
    scale: { duration: 0.8, ease: "easeInOut" }
  }

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div 
      className={`relative w-full ${className}`}
      style={{
        height: '30vh'
      }}
      ref={(el) => {
        if (el) {
          const mediaQuery = window.matchMedia('(min-width: 768px)')
          const updateHeight = () => {
            if (mediaQuery.matches) {
              el.style.height = '100vh' // h-96 = 384px
            } else {
              el.style.height = '30vh'
            }
          }
          updateHeight()
          mediaQuery.addEventListener('change', updateHeight)
        }
      }}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0 w-full h-full"
          >
            {/* Simple Image Display */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      {autoPlay && slides.length > 1 && (
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && isPlaying && slides.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
            key={currentSlide}
          />
        </div>
      )}
    </div>
  )
}

export default Slider
