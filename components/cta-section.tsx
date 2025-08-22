"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, Zap, Rocket } from "lucide-react"
import { useRouter } from "next/navigation"

export function CTASection() {
  const router = useRouter()

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Epic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full morphing-blob blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full morphing-blob blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full morphing-blob blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-6xl md:text-9xl font-black mb-8 gradient-text leading-tight"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to
            <br />
            Transcend Reality?
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl text-white/90 mb-16 max-w-4xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join the <span className="gradient-text font-bold">coding revolution</span> where AI and human creativity
            merge into something extraordinary.
            <br />
            <span className="text-white/70">The future of development starts now.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rainbow-border">
              <div className="rainbow-border-inner">
                <Button
                  size="lg"
                  className="bg-transparent hover:bg-transparent text-white font-black text-2xl px-16 py-8 pulse-glow"
                  onClick={() => router.push("/signup")}
                >
                  <Rocket className="mr-4 h-8 w-8" />
                  Begin Your Journey
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </div>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 text-2xl px-16 py-8 glass-effect neon-glow font-bold bg-transparent"
              onClick={() => router.push("/docs")}
            >
              <Zap className="mr-4 h-8 w-8" />
              Explore Powers
            </Button>
          </motion.div>

          {/* Social Links with Epic Styling */}
          <motion.div
            className="flex justify-center space-x-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com"
              className="text-white/60 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.3, rotate: 5 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-4 rounded-2xl glass-effect group-hover:neon-glow transition-all duration-300">
                <Github className="h-10 w-10" />
              </div>
            </motion.a>
            <motion.a
              href="https://twitter.com"
              className="text-white/60 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.3, rotate: -5 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-4 rounded-2xl glass-effect group-hover:neon-glow transition-all duration-300">
                <Twitter className="h-10 w-10" />
              </div>
            </motion.a>
          </motion.div>

          {/* Epic Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-white/50 text-lg font-medium"
          >
            Built for developers who dare to dream beyond limits
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
