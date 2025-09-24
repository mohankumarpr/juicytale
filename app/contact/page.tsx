'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Users,
  ChevronDown,
  HelpCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import AnimatedText from '@/components/ui/AnimatedText'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: 'general'
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: 'Address',
      details: [
        'No 18, 2nd Floor, Ratna Complex',
        'Tank Bund Road, SBM Colony',
        'Mathikire, Bengaluru - 560001'
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Phone',
      details: ['+91 9035574901', 'Mon - Sat: 9:00 AM - 7:00 PM']
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: 'Email',
      details: ['hello@juicytale.in', 'franchise@juicytale.in']
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 10:00 AM - 6:00 PM', 'Sun: Closed']
    }
  ]

  const franchiseInfo = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Franchise Inquiries',
      description: 'Interested in starting your own JuicyTale franchise? Get in touch with our franchise team.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: 'General Support',
      description: 'Have questions about our products or services? Our support team is here to help.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: 'Partnership Opportunities',
      description: 'Explore business partnership opportunities with JuicyTale.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 pt-20">
        <div className="container-custom text-center">
          <AnimatedText>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for franchise opportunities, general inquiries, or to learn more 
              about our natural fruit juice solutions.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300">{detail}</p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedText direction="left">
              <Card className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Interest
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="franchise">Franchise Opportunity</option>
                          <option value="partnership">Partnership</option>
                          <option value="support">Customer Support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </AnimatedText>

            {/* Map and Additional Info */}
            <AnimatedText direction="right" delay={0.2}>
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Bengaluru, Karnataka</p>
                    </div>
                  </div>
                </Card>

                {/* Franchise Info */}
                <div className="space-y-6">
                  {franchiseInfo.map((info, index) => (
                    <Card key={index} delay={index * 0.1} className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold mb-2">{info.title}</h4>
                            <p className="text-primary-100">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about JuicyTale
            </p>
          </AnimatedText>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "What makes JuicyTale different?",
                answer: "We use 100% natural ingredients with zero preservatives and our innovative 20-second premix technology ensures fresh taste every time. Our unique blend of traditional recipes with modern convenience sets us apart in the market."
              },
              {
                question: "How do I start a franchise?",
                answer: "Contact our franchise team through the form above or call us directly. We'll guide you through the entire process from application to opening, including site selection, training, and ongoing support."
              },
              {
                question: "What's the investment required?",
                answer: "Investment varies based on location and setup type (Cafe, Event Stall, Restaurant, or Food Court). Contact us for detailed information about franchise costs, equipment requirements, and financing options."
              },
              {
                question: "Do you provide training?",
                answer: "Yes, we provide comprehensive training for all franchise partners including operations, marketing, customer service, and product preparation. Training includes both theoretical and hands-on practical sessions."
              },
              {
                question: "What support do you offer after opening?",
                answer: "We provide ongoing marketing support, operational guidance, product updates, and regular performance reviews. Our dedicated support team is always available to help you succeed."
              },
              {
                question: "How long does it take to set up a franchise?",
                answer: "The setup process typically takes 2-4 weeks after site approval, depending on location and customization requirements. This includes equipment installation, staff training, and final inspections."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* FAQ CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <Button variant="outline" size="lg" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask a Question
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-700 dark:from-secondary-600 dark:to-secondary-800 text-white">
        <div className="container-custom text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
              Join the JuicyTale family and be part of the natural beverage revolution. 
              Contact us today to learn more about franchise opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary-600">
                Call Us Now
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
                Download Brochure
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
