'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Card from './Card'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  className?: string
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  className = ''
}: FeatureCardProps) => {
  return (
    <Card delay={delay} className={`${className} bg-white/95 backdrop-blur-sm border border-gray-200/50`}>
      <div className="p-8 text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed font-medium">{description}</p>
      </div>
    </Card>
  )
}

export default FeatureCard
