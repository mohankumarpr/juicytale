'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  Users, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  Download,
  Phone
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import FeatureCard from '@/components/ui/FeatureCard'
import AnimatedText from '@/components/ui/AnimatedText'

export default function FranchisePage() {
  const [selectedPackage, setSelectedPackage] = useState('standard')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    investment: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
        city: '',
        experience: '',
        investment: '',
        message: ''
      })
    }, 3000)
  }

  const franchiseBenefits = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Proven Business Model',
      description: 'Join a successful franchise with a track record of profitability and growth.'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Complete Support',
      description: 'Training, marketing, operations, and ongoing support from our expert team.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Growth Potential',
      description: 'Expand your business with multiple locations and territory development.'
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Brand Recognition',
      description: 'Leverage our established brand and customer loyalty in your market.'
    }
  ]

  const investmentPackages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: '₹5-8 Lakhs',
      features: [
        'Single outlet setup',
        'Basic equipment',
        'Initial training',
        'Marketing support',
        '6 months support'
      ],
      description: 'Perfect for first-time entrepreneurs'
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: '₹8-12 Lakhs',
      features: [
        'Premium outlet setup',
        'Advanced equipment',
        'Comprehensive training',
        'Full marketing support',
        '12 months support',
        'Territory protection'
      ],
      description: 'Most popular choice for serious entrepreneurs',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '₹12-20 Lakhs',
      features: [
        'Multi-outlet setup',
        'Latest technology',
        'Advanced training',
        'Dedicated support',
        '24 months support',
        'Exclusive territory',
        'Revenue sharing'
      ],
      description: 'For experienced business owners'
    }
  ]

  const requirements = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary-600" />,
      title: 'Financial Investment',
      description: 'Minimum investment of ₹5-20 lakhs depending on package and location'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: 'Prime Location',
      description: 'Suitable commercial space in high-traffic areas (malls, markets, etc.)'
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: 'Business Experience',
      description: 'Previous business or management experience preferred but not mandatory'
    },
    {
      icon: <Heart className="w-6 h-6 text-primary-600" />,
      title: 'Passion for Health',
      description: 'Commitment to promoting healthy, natural beverages in your community'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Initial Inquiry',
      description: 'Contact us through our form or phone to express your interest'
    },
    {
      step: '02',
      title: 'Application Review',
      description: 'We review your application and conduct initial screening'
    },
    {
      step: '03',
      title: 'Location Assessment',
      description: 'Our team visits your proposed location for feasibility study'
    },
    {
      step: '04',
      title: 'Agreement Signing',
      description: 'Sign franchise agreement and complete legal formalities'
    },
    {
      step: '05',
      title: 'Training & Setup',
      description: 'Comprehensive training and outlet setup with our support'
    },
    {
      step: '06',
      title: 'Grand Opening',
      description: 'Launch your JuicyTale outlet with our marketing support'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse-slow"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedText direction="left">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Start Your <span className="text-secondary-400">JuicyTale</span> Franchise
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Join the natural beverage revolution! Own a proven business model with 
                comprehensive support, training, and marketing assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" href="#apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </AnimatedText>

            <AnimatedText direction="right" delay={0.2}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Proven Success</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-secondary-400">50+</div>
                        <div className="text-sm text-primary-100">Franchise Outlets</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary-400">₹2Cr+</div>
                        <div className="text-sm text-primary-100">Annual Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-secondary-400 rounded-full"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full"
                />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Why Choose JuicyTale Franchise?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a growing family of successful entrepreneurs with our proven business model
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {franchiseBenefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.1}
                className="bg-gradient-to-br from-primary-600 to-primary-800 text-white"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Investment Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the package that best fits your budget and business goals
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                delay={index * 0.1}
                className={`relative overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={pkg.popular ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Franchise Requirements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What you need to become a successful JuicyTale franchise partner
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {req.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{req.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{req.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 text-white">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Simple 6-step process to become a JuicyTale franchise partner
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-primary-100">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Apply for Franchise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </AnimatedText>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h4>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for your interest. We'll contact you within 24 hours.</p>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your city"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Business Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select experience level</option>
                        <option value="none">No business experience</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="investment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Investment Range
                      </label>
                      <select
                        id="investment"
                        name="investment"
                        value={formData.investment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select investment range</option>
                        <option value="5-8">₹5-8 Lakhs</option>
                        <option value="8-12">₹8-12 Lakhs</option>
                        <option value="12-20">₹12-20 Lakhs</option>
                        <option value="20+">₹20+ Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your business goals and why you're interested in JuicyTale..."
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-700 dark:from-secondary-600 dark:to-secondary-800 text-white">
        <div className="container-custom text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
              Join the JuicyTale family today and be part of the natural beverage revolution. 
              Contact us for more information or to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary-600">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: +91 9035574901
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
