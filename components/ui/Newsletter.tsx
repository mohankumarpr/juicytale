'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Gift, CheckCircle } from 'lucide-react'
import Button from './Button'

interface NewsletterProps {
  className?: string
}

const Newsletter = ({ className = '' }: NewsletterProps) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <section className={`py-16 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 ${className}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to JuicyTale!</h3>
            <p className="text-gray-600">Thank you for subscribing! Check your email for exclusive offers.</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 ${className}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Fresh with JuicyTale
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Get exclusive offers, new flavor announcements, and health tips delivered straight to your inbox.
            </p>
            <div className="flex items-center text-white/90">
              <Gift className="w-5 h-5 mr-2" />
              <span>Get 10% off your first order!</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-primary-600 hover:bg-white/90 font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600 mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe Now'
                )}
              </Button>
              
              <p className="text-xs text-white/70 text-center">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
