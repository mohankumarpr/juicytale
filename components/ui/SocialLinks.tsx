'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

interface SocialLinksProps {
  variant?: 'default' | 'footer' | 'contact'
  className?: string
}

const SocialLinks = ({ variant = 'default', className = '' }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      href: '#',
      icon: Youtube,
      color: 'hover:text-red-600'
    }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: '123 Juice Street, Fresh City, FC 12345',
      href: '#'
    },
    {
      icon: Phone,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: Mail,
      text: 'hello@juicytale.com',
      href: 'mailto:hello@juicytale.com'
    }
  ]

  if (variant === 'footer') {
    return (
      <div className={`space-y-6 ${className}`}>
        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors duration-300 ${social.color}`}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'contact') {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
        <div className="space-y-4">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <contact.icon className="w-5 h-5 mr-3 text-primary-600" />
              <span>{contact.text}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 transition-colors duration-300 ${social.color}`}
          aria-label={social.name}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
