'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, Download, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface MenuThumbnailGridProps {
  menuPages: string[]
  className?: string
}

const MenuThumbnailGrid = ({
  menuPages,
  className = ''
}: MenuThumbnailGridProps) => {
  const [selectedPage, setSelectedPage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  const [itemsPerView, setItemsPerView] = useState(4)
  const maxIndex = Math.max(0, menuPages.length - itemsPerView)

  // Update itemsPerView based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // Tablet: 2 items
      } else {
        setItemsPerView(4) // Desktop: 4 items
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered && menuPages.length > itemsPerView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        )
      }, 3000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, maxIndex, menuPages.length, itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const openFullscreen = (index: number) => {
    setSelectedPage(index)
  }

  const closeFullscreen = () => {
    setSelectedPage(null)
  }

  const downloadMenu = (imageSrc: string, index: number) => {
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = `juicy-tale-menu-page-${index + 1}.jpg`
    link.click()
  }

  return (
    <div className={className}>
      {/* Horizontal Slider */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrows */}
        {menuPages.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * (100 / itemsPerView)}%`
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {menuPages.map((page, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-3 ${
                  itemsPerView === 1 ? 'w-full' : 
                  itemsPerView === 2 ? 'w-1/2' : 'w-1/4'
                }`}
              >
                <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Menu Thumbnail */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={page} 
                      alt={`Menu Page ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Page Number */}
                    {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-bold text-gray-700">Page {index + 1}</span>
                    </div> */}
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openFullscreen(index)}
                        className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200 shadow-lg"
                      >
                        <ZoomIn className="w-4 h-4 text-gray-700" />
                      </button>
                      <button
                        onClick={() => downloadMenu(page, index)}
                        className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200 shadow-lg"
                      >
                        <Download className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        {menuPages.length > itemsPerView && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-red-500 via-orange-500 to-green-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedPage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeFullscreen}
                className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* Menu Image */}
              <img 
                src={menuPages[selectedPage]} 
                alt={`Menu Page ${selectedPage + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Page Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {menuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === selectedPage
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Download Button */}
              <button
                onClick={() => downloadMenu(menuPages[selectedPage], selectedPage)}
                className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200 shadow-lg"
              >
                <Download className="w-5 h-5 text-gray-700" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuThumbnailGrid
