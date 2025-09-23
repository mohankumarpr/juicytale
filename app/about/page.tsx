'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  CheckCircle,
  Leaf,
  Zap,
  Clock
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import FeatureCard from '@/components/ui/FeatureCard'
import AnimatedText from '@/components/ui/AnimatedText'

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Passion for Health',
      description: 'We believe in the power of natural ingredients to transform lives and promote wellness.'
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Quality First',
      description: 'Every product is crafted with the highest standards and attention to detail.'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Community Focus',
      description: 'Building strong relationships with our customers and franchise partners.'
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: 'Innovation',
      description: 'Continuously improving our processes and products through innovation.'
    }
  ]

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      description: 'Passionate about bringing natural, healthy beverages to communities worldwide.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: '/api/placeholder/300/300',
      description: 'Ensuring quality and efficiency in every aspect of our operations.'
    },
    {
      name: 'Mike Chen',
      role: 'Franchise Director',
      image: '/api/placeholder/300/300',
      description: 'Helping entrepreneurs build successful businesses with our proven model.'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize the juice industry'
    },
    {
      year: '2021',
      title: 'First Franchise',
      description: 'Opened our first franchise location in Bengaluru'
    },
    {
      year: '2022',
      title: 'Product Innovation',
      description: 'Launched our signature 20-second magic premix technology'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded to multiple cities with 50+ franchise locations'
    },
    {
      year: '2024',
      title: 'Future Growth',
      description: 'Continuing to grow and serve communities nationwide'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
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
              About JuicyTale
            </motion.h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              We are more than just a juice shop; we are a movement towards healthier living. 
              Our franchise is built on the foundation of natural ingredients, innovative technology, 
              and a commitment to excellence.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedText direction="left">
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
                Our Story
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                JuicyTale was born from a simple yet powerful vision: to make fresh, natural fruit juices 
                accessible to everyone, everywhere. Founded in 2020, we recognized the gap in the market 
                for truly natural, preservative-free fruit beverages.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                Our innovative 20-second magic technology allows us to serve fresh, natural juices 
                without compromising on quality or taste. We've built a franchise model that empowers 
                entrepreneurs while bringing healthy options to communities.
              </p>
              <Button href="/franchise">
                Join Our Story
              </Button>
            </AnimatedText>

            <AnimatedText direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center"
                  >
                    <Leaf className="w-16 h-16 text-white" />
                  </motion.div>
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

      {/* Mission Section */}
      <section id="mission" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              To revolutionize the beverage industry by providing 100% natural, preservative-free 
              fruit juices that promote health and wellness in every community we serve.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
                className="bg-white/10 backdrop-blur-sm border border-white/20"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a growing franchise network, here's how we've evolved.
            </p>
          </AnimatedText>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6">
                      <div className="text-primary-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind JuicyTale's success.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-700 text-white">
        <div className="container-custom text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
              Become part of the JuicyTale family and help us bring natural, healthy beverages 
              to communities everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary-600">
                Start Franchise
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
