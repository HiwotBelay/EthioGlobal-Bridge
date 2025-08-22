"use client"

import { motion } from "framer-motion"
import { Search, Code2, Zap, Sparkles, Rocket, Brain, Target } from "lucide-react"
import { useRouter } from "next/navigation"

const features = [
  {
    icon: Search,
    title: "Quantum Search",
    description: "AI that reads your mind and finds exactly what you need before you finish typing.",
    color: "from-pink-500 via-red-500 to-yellow-500",
    action: () => console.log("Navigate to search"),
  },
  {
    icon: Code2,
    title: "Reality Playground",
    description: "Code in a dimension where your ideas become reality instantly with live execution.",
    color: "from-purple-500 via-blue-500 to-cyan-500",
    action: () => console.log("Navigate to playground"),
  },
  {
    icon: Zap,
    title: "Error Annihilator",
    description: "Paste any error and watch our AI obliterate it with surgical precision and style.",
    color: "from-orange-500 via-red-500 to-pink-500",
    action: () => console.log("Navigate to error fix"),
  },
  {
    icon: Brain,
    title: "Neural Learning",
    description: "Adaptive learning paths that evolve with your coding DNA and skill mutations.",
    color: "from-green-500 via-teal-500 to-blue-500",
    action: () => console.log("Navigate to learning"),
  },
  {
    icon: Target,
    title: "Precision Deployment",
    description: "Deploy with the accuracy of a sniper and the speed of light across any platform.",
    color: "from-indigo-500 via-purple-500 to-pink-500",
    action: () => console.log("Navigate to deployment"),
  },
  {
    icon: Rocket,
    title: "Hyperspeed Development",
    description: "Build applications at warp speed with AI that codes faster than you can think.",
    color: "from-yellow-500 via-orange-500 to-red-500",
    action: () => console.log("Navigate to rapid dev"),
  },
]

export function FeaturesSection() {
  const router = useRouter()

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl morphing-blob" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl morphing-blob"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 gradient-text">
            Superpowers
            <br />
            Unleashed
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto font-medium">
            These aren't just features. They're{" "}
            <span className="gradient-text font-bold">reality-bending abilities</span> that will transform how you think
            about code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
              onClick={feature.action}
            >
              <div className="relative p-8 h-full">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-3xl blur-sm group-hover:blur-none transition-all duration-500" />
                <div className="absolute inset-0 holographic rounded-3xl opacity-50 group-hover:opacity-100 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Floating Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-5 mb-8 floating group-hover:scale-125 transition-all duration-500 neon-glow`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Title with gradient */}
                  <h3 className="text-3xl font-black mb-6 text-white group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed text-lg font-medium group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="rainbow-border inline-block">
            <div className="rainbow-border-inner">
              <button
                className="bg-transparent text-white font-bold text-xl px-16 py-6 pulse-glow"
                onClick={() => router.push("/playground")}
              >
                <Sparkles className="mr-3 h-6 w-6 inline" />
                Experience the Magic
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
