"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text3D, Environment, Float, Sparkles } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, Zap, Code, Cpu, Rocket, Brain } from "lucide-react"
import { useRouter } from "next/navigation"
import type * as THREE from "three"

function HolographicSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={[3, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#ff6b6b"
          emissive="#4ecdc4"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

function FloatingCodeElements() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.4} height={0.15} position={[-3, 1, 0]}>
          {"AI"}
          <meshStandardMaterial color="#feca57" emissive="#ff9ff3" emissiveIntensity={0.5} />
        </Text3D>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.3} height={0.1} position={[2, -1, 1]}>
          {"</>"}
          <meshStandardMaterial color="#96ceb4" emissive="#45b7d1" emissiveIntensity={0.4} />
        </Text3D>
      </Float>
    </group>
  )
}

function Scene3D() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ff6b6b" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#4ecdc4" />
      <pointLight position={[0, 10, -10]} intensity={1} color="#feca57" />

      <Sparkles count={200} scale={15} size={3} speed={0.6} color="#ff9ff3" />
      <Sparkles count={150} scale={12} size={2} speed={0.4} color="#45b7d1" />

      <HolographicSphere />
      <FloatingCodeElements />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export function Hero3D() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full morphing-blob blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full morphing-blob blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full morphing-blob blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black mb-8 gradient-text leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Code Beyond
            <br />
            Imagination
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Experience the future of coding with AI that thinks, learns, and creates alongside you.
            <span className="gradient-text font-bold"> Revolutionary. Intelligent. Unstoppable.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="rainbow-border">
              <div className="rainbow-border-inner">
                <Button
                  size="lg"
                  className="bg-transparent hover:bg-transparent text-white font-bold text-xl px-12 py-6 pulse-glow"
                  onClick={() => router.push("/playground")}
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Launch Playground
                </Button>
              </div>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 glass-effect neon-glow bg-transparent"
              onClick={() => router.push("/error-fix")}
            >
              <Brain className="mr-3 h-6 w-6" />
              Fix My Code
            </Button>
          </motion.div>

          {/* Floating Feature Icons */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { icon: Search, label: "Smart Search", color: "from-pink-500 to-rose-500" },
              { icon: Code, label: "Live Playground", color: "from-purple-500 to-indigo-500" },
              { icon: Zap, label: "Instant Fixes", color: "from-yellow-500 to-orange-500" },
              { icon: Cpu, label: "AI Powered", color: "from-green-500 to-emerald-500" },
              { icon: Brain, label: "Smart Learning", color: "from-blue-500 to-cyan-500" },
              { icon: Rocket, label: "Deploy Fast", color: "from-red-500 to-pink-500" },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                className="floating glass-effect p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.1, y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-3 mx-auto group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center glass-effect">
          <div className="w-2 h-4 bg-gradient-to-b from-pink-500 to-cyan-500 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
