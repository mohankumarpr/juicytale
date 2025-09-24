'use client'

import { motion } from 'framer-motion'
import { 
  Droplets, 
  Clock, 
  Leaf, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import FeatureCard from '@/components/ui/FeatureCard'
import AnimatedText from '@/components/ui/AnimatedText'
import Slider from '@/components/ui/Slider'
import ProductCarousel from '@/components/ui/ProductCarousel'
import Testimonials from '@/components/ui/Testimonials'
import Newsletter from '@/components/ui/Newsletter'
import SocialLinks from '@/components/ui/SocialLinks'

export default function HomePage() {
  const sliderData = [
    {
      id: 1,
      title: "12+ Flavors",
      subtitle: "Pure fruit juices & cold coffees",
      description: "Instant fresh fruit juice premix - 20 SEC MAGIC for Non Stop Seasonal Freshness with TIMELESS TASTE",
      image: "/Slider/FHMFG-01-scaled.jpg",
      buttonText: "View Menu",
      buttonLink: "/menu",
      bgColor: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 50%, #FF6B6B 100%)"
    },
    {
      id: 2,
      title: "100% Natural",
      subtitle: "Zero Preservatives",
      description: "Innovative extraction that preserves nutrients & flavor naturally. 100% Natural Fresh Fruit premix without artificial ingredients.",
      image: "/Slider/ZDFBGFDG-02-scaled.jpg",
      buttonText: "Learn More",
      buttonLink: "/about",
      bgColor: "linear-gradient(135deg, #FFA726 0%, #FFCC02 50%, #FFA726 100%)"
    },
    {
      id: 3,
      title: "Franchise Opportunity",
      subtitle: "Unlock Your Business Potential",
      description: "Join Juicy Tale's innovative franchise model. Premium products, comprehensive support, and proven business success in the fresh produce market.",
      image: "/Slider/JUICY-TALE-1-05-scaled.jpg",
      buttonText: "Franchise Now",
      buttonLink: "/franchise",
      bgColor: "linear-gradient(135deg, #4CAF50 0%, #8BC34A 50%, #4CAF50 100%)"
    },
    {
      id: 4,
      title: "Zero Wastage",
      subtitle: "Meticulously Processed",
      description: "Eliminate daily fresh fruit stock management and avoid fruit wastage. From sourcing finest fruits to employing state-of-the-art processing technology.",
      image: "/Slider/JUICY-TALE-1-03-scaled.jpg",
      buttonText: "Contact Us",
      buttonLink: "/contact",
      bgColor: "linear-gradient(135deg, #FF6B6B 0%, #FFA726 50%, #4CAF50 100%)"
    },
    {
      id: 5,
      title: "Premium Quality",
      subtitle: "State-of-the-Art Processing",
      description: "From sourcing finest fruits to employing cutting-edge processing technology. Experience the difference with Juicy Tale's premium selection.",
      image: "/Slider/ZDFBGFDG-04-scaled.jpg",
      buttonText: "Explore Products",
      buttonLink: "/menu",
      bgColor: "linear-gradient(135deg, #4CAF50 0%, #FFA726 50%, #FF6B6B 100%)"
    }
  ]

  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-white" />,
      title: 'ZERO PRESERVATIVES',
      description: 'Innovative extraction that preserves nutrients & flavor naturally.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: '100% ACCOUNTABILITY',
      description: 'Daily reporting made easy with each premix pack counting as one serving.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: 'ZERO WASTAGE',
      description: 'Eliminate daily fresh fruit stock management and avoid fruit wastage'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'METICULOUSLY PROCESSED',
      description: 'From sourcing finest fruits to employing state-of-the-art processing technology.'
    }
  ]

  const franchiseBenefits = [
    {
      icon: <Leaf className="w-6 h-6 text-primary-600" />,
      title: '100% NATURAL',
      description: 'Discover our 100% natural selection, free from additives'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-600" />,
      title: 'MINIMAL WORKFORCE',
      description: 'Streamline operations while maintaining high efficiency'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-600" />,
      title: 'ZERO WASTAGE',
      description: 'Reducing waste through eco-friendly practices'
    }
  ]

  const businessModels = [
    {
      title: 'CAFE',
      description: 'Experience the perfect blend of comfort and flavor at our Juicy Fruits Cafe!',
      icon: <Droplets className="w-8 h-8 text-white" />
    },
    {
      title: 'EVENT STALLS',
      description: 'Make your event unforgettable with Juicy Tale vibrant stalls!',
      icon: <Star className="w-8 h-8 text-white" />
    },
    {
      title: 'RESTAURANTS',
      description: 'Elevate your menu with Juicy Tale premium selection of fresh produce.',
      icon: <CheckCircle className="w-8 h-8 text-white" />
    },
    {
      title: 'FOOD COURT',
      description: 'Discover a world of flavors at Juicy Tale Food Court. Visit us today!',
      icon: <Zap className="w-8 h-8 text-white" />
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Health Enthusiast",
      content: "JuicyTale's fresh juices have completely transformed my morning routine. The quality is outstanding and the taste is incredible!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Business Owner",
      content: "As a franchise owner, I couldn't be happier with JuicyTale. The support is excellent and the products sell themselves.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Fitness Trainer",
      content: "My clients love these juices! They're the perfect post-workout refreshment. Natural, healthy, and absolutely delicious.",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Customer",
      content: "The variety of flavors is amazing. I've tried almost everything on the menu and haven't been disappointed yet.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Martinez",
      role: "Mom of Three",
      content: "Finally, a healthy drink option my kids actually love! No artificial ingredients, just pure natural goodness.",
      rating: 5
    },
    {
      id: 6,
      name: "James Brown",
      role: "Chef",
      content: "The quality of ingredients is restaurant-grade. These juices would fit perfectly in any fine dining establishment.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <Slider 
        slides={sliderData}
        autoPlay={true}
        autoPlayInterval={6000}
        showControls={true}
        showIndicators={true}
        className="h-screen"
      />

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
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
              We Love What We Do
            </motion.h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Juicy tale instant premix - 100% Natural Frozen Fruit premix, without preservatives & artificial ingredients, targeted at Food & Beverage outlets.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Your Favourite Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
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
              What's Your Favourite?
            </motion.h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover our premium selection of natural fruit juices and beverages. Each product is crafted with care to deliver the perfect taste experience.
            </p>
          </AnimatedText>

          <ProductCarousel
            products={[
              {
                image: "/Favourite/01-1536x1536.jpg",
                title: "Fresh Orange Juice",
                description: "100% natural orange extract with no preservatives"
              },
              {
                image: "/Favourite/02-1536x1536.jpg", 
                title: "Apple Delight Milkshakes",
                description: "Crisp and refreshing apple juice blend"
              },
              {
                image: "/Favourite/03-1536x1536.jpg",
                title: "Mixed Berry Fusion",
                description: "Premium blend of seasonal berries"
              },
              {
                image: "/Favourite/05-2048x1303.jpg",
                title: "Cold Coffee Tropical Paradise",
                description: "Exotic fruit combination for ultimate refreshment"
              },
              {
                image: "/Favourite/06-2048x1303.jpg",
                title: "Lassi Classic Lemonade",
                description: "Traditional lemonade with a modern twist"
              }
            ]}
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>
      </section>

      {/* Franchise Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 text-white">
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
                UNLOCK YOUR BUSINESS POTENTIAL
              </motion.h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed font-medium">
                Unlock your business potential with Juicy Tale's innovative flavors and market success. 
                Partner with us to elevate your fruit business with freshness and customer satisfaction.
              </p>
              <Button variant="secondary" size="lg" href="/franchise">
                Franchise Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </AnimatedText>

            <AnimatedText direction="right" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {franchiseBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-primary-100 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <AnimatedText className="text-center mb-16">
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
              Proven & Business Model
            </motion.h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              YOUR FRANCHISE PARTNER - Unlock the potential of your business by partnering with Juicy Tale! 
              Our franchise opportunities offer a proven model, premium products, and comprehensive support.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessModels.map((model, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    {model.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{model.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{model.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-700 dark:from-secondary-600 dark:to-secondary-800 text-white">
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
              Sweet Accessories
            </motion.h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Featured Products - Discover our premium selection of complementary accessories and products designed to enhance your Juicy Tale experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary-600">
                View Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Customer Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Newsletter Signup */}
      <Newsletter />

      {/* Social Media Links */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom text-center">
          <AnimatedText>
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6"
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
              Connect With Us
            </motion.h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
              Follow us on social media for the latest updates, health tips, and exclusive offers
            </p>
            <SocialLinks className="justify-center" />
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
