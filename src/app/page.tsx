"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SectionHeader } from "@/components/ui/section-header"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full">
      <main className="relative min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2C5530] via-[#4A90A0]/80 to-transparent opacity-90" />
            <AnimatedGradient />
            <ParticleBackground />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center px-4 max-w-4xl mx-auto"
          >
            <motion.div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                95% of California's Wetlands Are Gone
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We're protecting the largest remaining wetland complex in the Western United States
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                The Grassland Water District safeguards this vital ecosystem that supports millions of migratory birds, enhances water quality, and helps combat climate change
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton className="px-12">
                  Support Conservation
                </AnimatedButton>
                <AnimatedButton variant="secondary" className="px-12">
                  Learn More
                </AnimatedButton>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ opacity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur shadow-xl h-full border-t-4 border-[#2C5530] group hover:bg-gradient-to-br hover:from-white hover:to-[#2C5530]/5 transition-all duration-500">
                  <h3 className="text-2xl font-semibold text-[#2C5530] mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Natural Capital
                  </h3>
                  <p className="text-[#333333] leading-relaxed">
                    Our wetlands provide essential ecosystem services: water purification, flood control, carbon sequestration, and wildlife habitat - investing in their protection is investing in our future.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur shadow-xl h-full border-t-4 border-[#4A90A0] group hover:bg-gradient-to-br hover:from-white hover:to-[#4A90A0]/5 transition-all duration-500">
                  <h3 className="text-2xl font-semibold text-[#2C5530] mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Ecological Value
                  </h3>
                  <p className="text-[#333333] leading-relaxed">
                    As California's largest contiguous freshwater wetland complex, we're a critical stopover on the Pacific Flyway and home to diverse wildlife species.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader title="Protecting Our Natural Capital" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  {
                    title: "Water Quality",
                    description: "Our wetlands act as natural filters, purifying water and maintaining ecological balance in California's water systems.",
                    delay: 0,
                    borderColor: "#2C5530",
                    gradientColor: "from-white to-[#2C5530]/5"
                  },
                  {
                    title: "Climate Action",
                    description: "Wetlands and grasslands are powerful carbon sinks, helping combat climate change through natural carbon sequestration.",
                    delay: 0.2,
                    borderColor: "#4A90A0",
                    gradientColor: "from-white to-[#4A90A0]/5"
                  },
                  {
                    title: "Biodiversity",
                    description: "Supporting millions of migratory birds and diverse wildlife in one of California's last remaining wetland sanctuaries.",
                    delay: 0.4,
                    borderColor: "#8B6F4E",
                    gradientColor: "from-white to-[#8B6F4E]/5"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.8 }}
                  >
                    <Card className={`p-6 h-full border-t-4 group hover:bg-gradient-to-br ${item.gradientColor} transition-all duration-500`} style={{ borderColor: item.borderColor }}>
                      <h3 className="text-xl font-semibold mb-4 text-[#2C5530] group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                      <p className="text-[#333333] leading-relaxed">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader title="Investing in Our Future" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {[
                  {
                    title: "Ecosystem Services",
                    description: "Our wetlands provide vital services: flood control, groundwater recharge, and natural water filtration - nature working for us.",
                    delay: 0,
                    borderColor: "#2C5530",
                    gradientColor: "from-white to-[#2C5530]/5"
                  },
                  {
                    title: "Wildlife Conservation",
                    description: "Protecting critical habitat for endangered species and maintaining the Pacific Flyway for millions of migratory birds.",
                    delay: 0.2,
                    borderColor: "#4A90A0",
                    gradientColor: "from-white to-[#4A90A0]/5"
                  },
                  {
                    title: "Research & Innovation",
                    description: "Leading scientific research to understand and enhance the ecological value of our remaining wetlands.",
                    delay: 0.4,
                    borderColor: "#8B6F4E",
                    gradientColor: "from-white to-[#8B6F4E]/5"
                  },
                  {
                    title: "Community Impact",
                    description: "Engaging communities in protecting our natural heritage and understanding the true value of healthy ecosystems.",
                    delay: 0.6,
                    borderColor: "#2C5530",
                    gradientColor: "from-white to-[#2C5530]/5"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.8 }}
                  >
                    <Card className={`p-6 h-full border-t-4 group hover:bg-gradient-to-br ${item.gradientColor} transition-all duration-500`} style={{ borderColor: item.borderColor }}>
                      <h3 className="text-xl font-semibold mb-4 text-[#2C5530] group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                      <p className="text-[#333333] leading-relaxed">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader title="Act Now to Protect What Remains" />
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-[#333333] mb-8">
                  With only 5% of California's wetlands remaining, every acre we protect is crucial. Join us in safeguarding this irreplaceable natural capital for future generations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton className="px-12">
                    Support Our Mission
                  </AnimatedButton>
                  <AnimatedButton variant="secondary" className="px-12">
                    Contact Us
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#2C5530] text-white p-3 rounded-full shadow-lg hover:bg-[#2C5530]/90 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
