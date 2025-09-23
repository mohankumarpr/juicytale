'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn, Download } from 'lucide-react'

interface MenuCarouselProps {
  menuPages: string[]
  className?: string
}

const MenuCarousel = ({
  menuPages,
  className = ''
}: MenuCarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % menuPages.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [menuPages.length])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % menuPages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + menuPages.length) % menuPages.length)
  }

  const goToPage = (index: number) => {
    setCurrentPage(index)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const downloadMenu = () => {
    const link = document.createElement('a')
    link.href = menuPages[currentPage]
    link.download = `juicy-tale-menu-page-${currentPage + 1}.jpg`
    link.click()
  }

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <div className="relative max-w-6xl max-h-full p-8">
          <img 
            src={menuPages[currentPage]} 
            alt={`Menu Page ${currentPage + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {menuPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Menu Display */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img 
                src={menuPages[currentPage]} 
                alt={`Menu Page ${currentPage + 1}`}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200 shadow-lg"
              >
                <ZoomIn className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={downloadMenu}
                className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200 shadow-lg"
              >
                <Download className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevPage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {menuPages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPage
                ? 'bg-gradient-to-r from-red-500 via-orange-500 to-green-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Page Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-600 font-medium">
          Page {currentPage + 1} of {menuPages.length}
        </span>
      </div>
    </div>
  )
}

export default MenuCarousel
