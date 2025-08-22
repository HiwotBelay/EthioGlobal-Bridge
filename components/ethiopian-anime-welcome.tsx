"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth-modal"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Star, Globe, Award, Users, BookOpen, Rocket, Heart } from "lucide-react"

export function EthiopianAnimeWelcome() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup")
  const [animePhase, setAnimePhase] = useState(0)
  const [showWelcomeText, setShowWelcomeText] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimePhase(1), 1000)
    const timer2 = setTimeout(() => setAnimePhase(2), 2500)
    const timer3 = setTimeout(() => setShowWelcomeText(true), 3500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const handleGetStarted = () => {
    setAuthMode("signup")
    setShowAuth(true)
  }

  const handleSignIn = () => {
    setAuthMode("signin")
    setShowAuth(true)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50">
      {/* Magical Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 ? (
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            ) : i % 4 === 1 ? (
              <Sparkles className="w-3 h-3 text-emerald-400" />
            ) : i % 4 === 2 ? (
              <Heart className="w-3 h-3 text-red-400 fill-current" />
            ) : (
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Ethiopian Flag Waves */}
      <motion.div
        className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500"
        animate={{ scaleX: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500"
        animate={{ scaleX: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
      />

      {/* Ethiopian Anime Character */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <AnimatePresence>
          <motion.div
            initial={{ x: -200, opacity: 0, scale: 0.5 }}
            animate={{
              x: animePhase >= 1 ? 0 : -200,
              opacity: animePhase >= 1 ? 1 : 0,
              scale: animePhase >= 1 ? 1 : 0.5,
            }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            {/* Character Body */}
            <div className="relative w-32 h-40">
              {/* Head */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full border-2 border-amber-300"
                animate={{ rotate: animePhase >= 2 ? [0, 5, -5, 0] : 0 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {/* Hair */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-18 h-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full" />
                <div className="absolute -top-1 left-2 w-4 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full transform rotate-12" />
                <div className="absolute -top-1 right-2 w-4 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full transform -rotate-12" />

                {/* Eyes */}
                <motion.div
                  className="absolute top-4 left-3 w-3 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full"
                  animate={{ scaleY: animePhase >= 2 ? [1, 0.1, 1] : 1 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute top-4 right-3 w-3 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full"
                  animate={{ scaleY: animePhase >= 2 ? [1, 0.1, 1] : 1 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Smile */}
                <motion.div
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-gray-800 rounded-full"
                  animate={{ scaleX: animePhase >= 2 ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              {/* Body */}
              <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-12 h-20 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-lg">
                {/* Ethiopian Flag Pattern */}
                <div className="absolute top-2 left-1 right-1 h-2 bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 rounded" />
              </div>

              {/* Arms */}
              <motion.div
                className="absolute top-16 left-2 w-3 h-12 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full"
                animate={{ rotate: animePhase >= 2 ? [0, 20, -10, 0] : 0 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute top-16 right-2 w-3 h-12 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full"
                animate={{ rotate: animePhase >= 2 ? [0, -20, 10, 0] : 0 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Legs */}
              <div className="absolute bottom-0 left-3 w-3 h-8 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full" />
              <div className="absolute bottom-0 right-3 w-3 h-8 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full" />
            </div>

            {/* Speech Bubble */}
            <AnimatePresence>
              {showWelcomeText && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className="absolute -right-4 top-0 bg-white rounded-xl p-4 shadow-lg border-2 border-emerald-200 min-w-48"
                >
                  <div className="text-sm font-medium text-gray-800 mb-1">Welcome, Future Global Leader! 🌟</div>
                  <div className="text-xs text-gray-600">I'm Hanan, your Ethiopian guide to worldwide success!</div>
                  {/* Speech bubble tail */}
                  <div className="absolute left-0 top-4 transform -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-8 border-transparent border-r-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center ml-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo with Animation */}
          <motion.div
            className="mb-8 flex items-center justify-center gap-4"
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.8 }}>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-yellow-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-3 h-3 text-white fill-current" />
              </motion.div>
            </motion.div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-yellow-600 to-red-600 bg-clip-text text-transparent">
              EthioGlobal Bridge
            </div>
          </motion.div>

          {/* Main Headline with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          >
            From Ethiopia to
            <br />
            <motion.span
              className="bg-gradient-to-r from-emerald-600 via-yellow-600 to-red-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Global Excellence
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your AI-powered gateway to international universities, scholarships, and career opportunities. Join
            thousands of Ethiopian students achieving global success.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: "2,847", label: "Global Opportunities", icon: Globe, color: "emerald" },
              { number: "567", label: "Scholarships", icon: Award, color: "yellow" },
              { number: "234", label: "Partner Universities", icon: BookOpen, color: "red" },
              { number: "94%", label: "Success Rate", icon: Rocket, color: "emerald" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 3 + i * 0.2, duration: 0.8, type: "spring" }}
                whileHover={{ scale: 1.1, y: -10 }}
                className={`p-6 rounded-2xl bg-white shadow-lg border-2 border-${stat.color}-200 hover:border-${stat.color}-400 transition-all duration-300`}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: i }}
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color}-500 mx-auto mb-3`} />
                </motion.div>
                <motion.div
                  className={`text-3xl font-bold text-${stat.color}-600 mb-1`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 hover:from-emerald-600 hover:via-yellow-600 hover:to-red-600 text-white border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Start Your Global Journey
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleSignIn}
                variant="outline"
                size="lg"
                className="px-12 py-6 text-xl font-bold border-3 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-2xl transition-all duration-300 bg-white"
              >
                <Users className="w-6 h-6 mr-3" />
                Sign In
              </Button>
            </motion.div>
          </motion.div>

          {/* Success Stories Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 1 }}
            className="bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 fill-current" />
              Success Stories
              <Star className="w-8 h-8 fill-current" />
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Abel Tesfaye",
                  path: "Addis Ababa University → Stanford → Google",
                  quote:
                    "From studying computer science in Addis to working at Google's AI division. This platform connected me with the right mentors and opportunities!",
                  avatar: "A",
                },
                {
                  name: "Sara Bekele",
                  path: "Hawassa University → MIT → Microsoft Research",
                  quote:
                    "Got a full scholarship to MIT through the platform's guidance. Now I'm researching AI at Microsoft and mentoring other Ethiopian students!",
                  avatar: "S",
                },
                {
                  name: "Daniel Haile",
                  path: "Mekelle University → Oxford → UN",
                  quote:
                    "The platform helped me navigate from engineering in Mekelle to international development at Oxford, now working with the UN!",
                  avatar: "D",
                },
              ].map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 5 + i * 0.3, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center font-bold text-2xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: i }}
                    >
                      {story.avatar}
                    </motion.div>
                    <div>
                      <div className="font-bold text-xl">{story.name}</div>
                      <div className="text-sm opacity-90">{story.path}</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-95 leading-relaxed italic">"{story.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} mode={authMode} onModeChange={setAuthMode} />
    </div>
  )
}
