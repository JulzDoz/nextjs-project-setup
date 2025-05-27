"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  className?: string
}

export const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#2C5530] mb-16 text-center">
        {title}
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-[#2C5530]/20 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{ width: "10%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </h2>
    </motion.div>
  )
}
