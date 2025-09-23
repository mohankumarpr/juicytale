'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Card from './Card'

interface Product {
  image: string
  title: string
  description: string
}

interface ProductCarouselProps {
  products: Product[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

const ProductCarousel = ({
  products,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = ''
}: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && products.length > 3) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (products.length - 2))
      }, autoPlayInterval)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, isHovered, products.length, autoPlayInterval])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (products.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (products.length - 2)) % (products.length - 2))
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + 3)

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {visibleProducts.map((product, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
            >
              <div className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square w-full">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-sm opacity-90">{product.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      {products.length > 3 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {products.length > 3 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: products.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductCarousel
