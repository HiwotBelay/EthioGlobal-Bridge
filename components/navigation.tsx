"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(path)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            {"<CodeHelper/>"}
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Categories", path: "#categories" },
              { name: "Playground", path: "/playground" },
              { name: "Error Fix", path: "/error-fix" },
              { name: "About", path: "#about" },
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="text-white/80 hover:text-white transition-colors relative group text-lg font-medium"
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hover:neon-glow hover:text-cyan-400 transition-all duration-300"
              onClick={() => handleNavigation("/signin")}
            >
              Sign In
            </Button>
            <div className="rainbow-border">
              <div className="rainbow-border-inner">
                <Button
                  className="bg-transparent hover:bg-transparent text-white font-bold"
                  onClick={() => handleNavigation("/signup")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
