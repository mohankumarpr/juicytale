'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Droplets, 
  Star, 
  Clock, 
  Leaf,
  Zap,
  Heart,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import AnimatedText from '@/components/ui/AnimatedText'
import MenuThumbnailGrid from '@/components/ui/MenuThumbnailGrid'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const menuPages = [
    '/Menu/JT-MENU-1_page-0001.jpg',
    '/Menu/JT-MENU-1_page-0002.jpg',
    '/Menu/JT-MENU-1_page-0003.jpg',
    '/Menu/JT-MENU-1_page-0004.jpg',
    '/Menu/JT-MENU-1_page-0005.jpg',
    '/Menu/JT-MENU-1_page-0006.jpg',
    '/Menu/JT-MENU-1_page-0007.jpg'
  ]

  const categories = [
    { id: 'all', name: 'All Items', icon: <Droplets className="w-5 h-5" /> },
    { id: 'juices', name: 'Fresh Juices', icon: <Leaf className="w-5 h-5" /> },
    { id: 'coffees', name: 'Cold Coffees', icon: <Zap className="w-5 h-5" /> },
    { id: 'smoothies', name: 'Smoothies', icon: <Heart className="w-5 h-5" /> },
    { id: 'premium', name: 'Premium', icon: <Star className="w-5 h-5" /> }
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Orange Fresh',
      category: 'juices',
      price: 89,
      description: 'Fresh orange juice with natural sweetness',
      image: '/Favourite/01-1536x1536.jpg',
      rating: 4.8,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Fresh Oranges', 'Natural Sweetener']
    },
    {
      id: 2,
      name: 'Apple Delight',
      category: 'juices',
      price: 95,
      description: 'Crisp apple juice with a hint of cinnamon',
      image: '/Favourite/02-1536x1536.jpg',
      rating: 4.7,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Fresh Apples', 'Cinnamon', 'Natural Sweetener']
    },
    {
      id: 3,
      name: 'Mixed Berry Fusion',
      category: 'juices',
      price: 105,
      description: 'Premium blend of seasonal berries',
      image: '/Favourite/03-1536x1536.jpg',
      rating: 4.9,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Mixed Berries', 'Natural Sweetener']
    },
    {
      id: 4,
      name: 'Tropical Paradise',
      category: 'juices',
      price: 115,
      description: 'Exotic fruit combination for ultimate refreshment',
      image: '/Favourite/05-2048x1303.jpg',
      rating: 4.8,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Mango', 'Pineapple', 'Passion Fruit']
    },
    {
      id: 5,
      name: 'Classic Lemonade',
      category: 'juices',
      price: 75,
      description: 'Traditional lemonade with a modern twist',
      image: '/Favourite/06-2048x1303.jpg',
      rating: 4.6,
      prepTime: '20 sec',
      featured: false,
      ingredients: ['Fresh Lemons', 'Natural Sweetener', 'Mint']
    },
    {
      id: 6,
      name: 'Iced Coffee Delight',
      category: 'coffees',
      price: 125,
      description: 'Rich and creamy iced coffee with premium beans',
      image: '/Favourite/05-2048x1303.jpg',
      rating: 4.9,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Premium Coffee', 'Vanilla', 'Milk', 'Foam']
    },
    {
      id: 7,
      name: 'Chocolate Frappe',
      category: 'coffees',
      price: 135,
      description: 'Rich chocolate frappe with whipped cream',
      image: '/Favourite/06-2048x1303.jpg',
      rating: 4.9,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Premium Coffee', 'Chocolate', 'Milk', 'Whipped Cream']
    },
    {
      id: 8,
      name: 'Berry Smoothie',
      category: 'smoothies',
      price: 145,
      description: 'Mixed berry smoothie with yogurt',
      image: '/Favourite/03-1536x1536.jpg',
      rating: 4.8,
      prepTime: '20 sec',
      featured: false,
      ingredients: ['Mixed Berries', 'Yogurt', 'Honey', 'Ice']
    },
    {
      id: 9,
      name: 'Green Detox',
      category: 'smoothies',
      price: 155,
      description: 'Healthy green smoothie with spinach and fruits',
      image: '/Favourite/01-1536x1536.jpg',
      rating: 4.7,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Spinach', 'Green Apple', 'Cucumber', 'Lemon']
    },
    {
      id: 10,
      name: 'Premium Pomegranate',
      category: 'premium',
      price: 165,
      description: 'Exotic pomegranate juice with premium quality',
      image: '/Favourite/02-1536x1536.jpg',
      rating: 4.9,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Premium Pomegranate', 'Natural Sweetener']
    },
    {
      id: 11,
      name: 'Watermelon Cooler',
      category: 'juices',
      price: 85,
      description: 'Refreshing watermelon juice perfect for summer',
      image: '/Favourite/05-2048x1303.jpg',
      rating: 4.7,
      prepTime: '20 sec',
      featured: false,
      ingredients: ['Fresh Watermelon', 'Mint', 'Lime']
    },
    {
      id: 12,
      name: 'Mango Lassi',
      category: 'premium',
      price: 175,
      description: 'Creamy mango lassi with traditional spices',
      image: '/Favourite/06-2048x1303.jpg',
      rating: 4.9,
      prepTime: '20 sec',
      featured: true,
      ingredients: ['Ripe Mangoes', 'Yogurt', 'Cardamom', 'Rose Water']
    }
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredItems = menuItems.filter(item => item.featured)

  const breadcrumbItems = [
    { label: 'Menu' }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="pt-20 pb-4 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom text-center">
          <AnimatedText>
            <motion.h1 
              className="text-3xl md:text-4xl font-display font-bold mb-3"
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
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Discover our wide range of 100% natural fruit juices, cold coffees, and premium beverages. 
              All prepared in just 20 seconds with our innovative premix technology.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Menu Thumbnail Grid */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <MenuThumbnailGrid menuPages={menuPages} />
        </div>
      </section>


      {/* Full Menu with Filters */}
      <section className="section-padding bg-white dark:bg-gray-900">
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
              All Items
            </motion.h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Browse and filter our complete selection of natural beverages
            </p>
          </AnimatedText>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    {category.icon}
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={item.id} delay={index * 0.05} className="overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{item.description}</p>
                  
                  {/* Ingredients */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Ingredients:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gradient-to-r from-red-100 via-orange-100 to-green-100 dark:from-red-900/30 dark:via-orange-900/30 dark:to-green-900/30 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-green-500 bg-clip-text text-transparent">₹{item.price}</span>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{item.prepTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Droplets className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
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