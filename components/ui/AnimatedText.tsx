'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}: AnimatedTextProps) => {
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText
