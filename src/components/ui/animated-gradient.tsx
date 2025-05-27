"use client"

import { motion } from "framer-motion"

export const AnimatedGradient = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        background: [
          "radial-gradient(circle at 0% 0%, #2C5530 0%, transparent 50%)",
          "radial-gradient(circle at 100% 100%, #2C5530 0%, transparent 50%)",
          "radial-gradient(circle at 0% 100%, #2C5530 0%, transparent 50%)",
          "radial-gradient(circle at 100% 0%, #2C5530 0%, transparent 50%)",
          "radial-gradient(circle at 0% 0%, #2C5530 0%, transparent 50%)",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        opacity: 0.1,
      }}
    />
  )
}
