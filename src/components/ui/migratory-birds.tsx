"use client"

import { motion } from "framer-motion"

export const MigratoryBirds = () => {
  const birdVariants = {
    fly: {
      x: [0, 300, 600, 900],
      y: [0, -50, 50, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
        y: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "easeInOut",
        },
      },
    },
  }

  return (
    <motion.svg
      className="absolute top-20 left-0 w-24 h-24 z-30"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={birdVariants}
      animate="fly"
    >
      <path
        d="M2 32c10-10 20-10 30 0"
        stroke="#2C5530"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22c5-5 10-5 15 0"
        stroke="#2C5530"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}
