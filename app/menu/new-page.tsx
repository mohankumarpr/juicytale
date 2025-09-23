'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'
import MenuCarousel from '@/components/ui/MenuCarousel'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function MenuPage() {
  const menuPages = [
    '/Menu/JT-MENU-1_page-0001.jpg',
    '/Menu/JT-MENU-1_page-0002.jpg',
    '/Menu/JT-MENU-1_page-0003.jpg',
    '/Menu/JT-MENU-1_page-0004.jpg',
    '/Menu/JT-MENU-1_page-0005.jpg',
    '/Menu/JT-MENU-1_page-0006.jpg',
    '/Menu/JT-MENU-1_page-0007.jpg'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom text-center">
          <AnimatedText>
            <motion.h1 
              className="text-5xl md:text-6xl font-display font-bold mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(45deg, #FF6B6B, #FFA726, #4CAF50, #FFA726, #FF6B6B)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Our Menu
            </motion.h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover our wide range of 100% natural fruit juices, cold coffees, and premium beverages. 
              All prepared in just 20 seconds with our innovative premix technology.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Menu Display */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedText className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(45deg, #FF6B6B, #FFA726, #4CAF50, #FFA726, #FF6B6B)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Browse Our Menu
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Browse through our complete menu of fresh, natural beverages and delicious treats
            </p>
          </AnimatedText>

          <div className="max-w-4xl mx-auto">
            <MenuCarousel menuPages={menuPages} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <AnimatedText>
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(45deg, #FF6B6B, #FFA726, #4CAF50, #FFA726, #FF6B6B)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Ready to Taste the Magic?
            </motion.h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
              Visit our locations or start your own JuicyTale franchise to bring these amazing 
              flavors to your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Find Locations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg">
                Start Franchise
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
