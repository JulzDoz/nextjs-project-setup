"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
}

export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  variant = "primary",
}: AnimatedButtonProps) => {
  const baseStyles = "relative overflow-hidden rounded-lg font-semibold transition-all duration-300"
  const variantStyles = {
    primary: "bg-[#2C5530] text-white hover:bg-[#2C5530]/90",
    secondary: "bg-white text-[#2C5530] hover:bg-white/90",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          opacity: 0.5,
        }}
      />
      <span className="relative z-10 block px-8 py-4">
        {children}
      </span>
    </motion.button>
  )
}
