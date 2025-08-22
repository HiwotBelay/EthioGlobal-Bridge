"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth-modal"
import { motion } from "framer-motion"

export function EthiopianWelcomePage() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup")

  const handleGetStarted = () => {
    setAuthMode("signup")
    setShowAuth(true)
  }

  const handleSignIn = () => {
    setAuthMode("signin")
    setShowAuth(true)
  }

  return (
    <div className="min-h-screen relative overflow-hidden ethiopian-pattern">
      {/* Ethiopian Flag-Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-primary"></div>
      </div>

      {/* Floating Cultural Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-20"
            style={{
              background: i % 3 === 0 ? "#0891b2" : i % 3 === 1 ? "#dc2626" : "#f59e0b",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Ethiopian Flag & Logo */}
          <motion.div
            className="mb-8 flex items-center justify-center gap-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-12 h-8 bg-gradient-to-b from-secondary via-accent to-primary rounded-lg shadow-lg ethiopian-wave" />
            <div className="text-4xl md:text-5xl font-bold font-heading text-ethiopian-gradient">
              Ethiopian Education Bridge
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6 leading-tight"
          >
            From Addis Ababa to Silicon Valley
            <br />
            <span className="text-primary">Your Gateway to Global Success</span>
          </motion.h1>

          {/* Amharic Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-secondary font-medium mb-4"
          >
            ለአለም አቀፍ ስኬት የሚያደርስ ድልድይ
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with global universities, scholarships, and career opportunities. Bridge the gap between Ethiopian
            education and international standards with AI-powered guidance and mentorship from successful Ethiopian
            professionals worldwide.
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {[
              { number: "1,247", label: "Global Opportunities", icon: "🌍" },
              { number: "342", label: "Scholarships Available", icon: "🎓" },
              { number: "156", label: "Partner Universities", icon: "🏛️" },
              { number: "89%", label: "Success Rate", icon: "🚀" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 success-story"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {[
              {
                icon: "🎯",
                title: "Personalized Pathways",
                desc: "AI matches you with opportunities based on your Ethiopian background and global aspirations",
                amharic: "የግል መንገዶች",
              },
              {
                icon: "👥",
                title: "Ethiopian Alumni Network",
                desc: "Connect with successful Ethiopians at Google, Microsoft, Harvard, and more",
                amharic: "የኢትዮጵያውያን አልሙኒ ኔትወርክ",
              },
              {
                icon: "📚",
                title: "Curriculum Bridge",
                desc: "Transform your Ethiopian education credentials for international recognition",
                amharic: "የትምህርት ድልድይ",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -8 }}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cultural-glow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">{feature.title}</h3>
                <div className="text-sm text-secondary font-medium mb-3">{feature.amharic}</div>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="px-10 py-4 text-lg font-semibold bg-gradient-ethiopian hover:opacity-90 text-white border-0 rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 font-heading"
            >
              Start Your Journey 🚀
            </Button>
            <Button
              onClick={handleSignIn}
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 font-heading bg-transparent"
            >
              Sign In
            </Button>
          </motion.div>

          {/* Success Stories Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="bg-gradient-ethiopian rounded-xl p-8 text-white max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold font-heading mb-6">Recent Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Abel Tesfaye</div>
                    <div className="text-sm opacity-80">Stanford University → Google</div>
                  </div>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">
                  "From Addis Ababa University to Stanford CS program. The platform connected me with Ethiopian alumni
                  who guided every step. Now I'm a software engineer at Google!"
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Sara Bekele</div>
                    <div className="text-sm opacity-80">MIT → Microsoft Research</div>
                  </div>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">
                  "The scholarship matching was incredible. Got full funding for MIT and now I'm doing AI research at
                  Microsoft. This platform changed my life!"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} mode={authMode} onModeChange={setAuthMode} />
    </div>
  )
}
