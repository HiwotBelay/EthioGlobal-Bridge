"use client"

import { motion } from "framer-motion"
import { Star, Globe, Heart } from "lucide-react"

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Ethiopian Flag Spinner */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-transparent rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #10b981, #eab308, #dc2626, #10b981)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 bg-white rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <Globe className="w-6 h-6 text-emerald-600" />
          </motion.div>
        </div>

        {/* Floating Stars */}
        <div className="relative w-32 h-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${i * 20}%` }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              {i % 3 === 0 ? (
                <Star className="w-4 h-4 text-emerald-500 fill-current" />
              ) : i % 3 === 1 ? (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              ) : (
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          className="text-center"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <p className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-yellow-600 to-red-600 bg-clip-text text-transparent">
            Preparing Your Global Journey...
          </p>
          <p className="text-sm text-gray-600 mt-2">Connecting Ethiopian excellence to worldwide opportunities</p>
        </motion.div>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: i === 0 ? "#10b981" : i === 1 ? "#eab308" : "#dc2626",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
