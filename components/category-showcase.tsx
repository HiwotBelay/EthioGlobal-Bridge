"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

const categories = [
  {
    name: "React",
    description: "Master the art of reactive interfaces with hooks, state, and performance wizardry",
    color: "from-blue-400 to-blue-600",
    glowColor: "shadow-blue-500/50",
    tags: ["Hooks Magic", "State Alchemy", "Performance Boost", "Component Craft"],
    icon: "⚛️",
  },
  {
    name: "Next.js",
    description: "Full-stack sorcery with App Router, Server Components, and deployment mastery",
    color: "from-gray-800 to-black",
    glowColor: "shadow-gray-500/50",
    tags: ["App Router", "SSR Power", "API Mastery", "Deploy Magic"],
    icon: "▲",
  },
  {
    name: "TypeScript",
    description: "Type-safe coding with generics, utility types, and advanced pattern recognition",
    color: "from-blue-500 to-blue-700",
    glowColor: "shadow-blue-600/50",
    tags: ["Type Safety", "Generic Power", "Interface Design", "Pattern Match"],
    icon: "🔷",
  },
  {
    name: "Node.js",
    description: "Backend brilliance with Express mastery, API architecture, and testing excellence",
    color: "from-green-500 to-green-700",
    glowColor: "shadow-green-500/50",
    tags: ["Express Pro", "API Design", "Middleware Magic", "Test Driven"],
    icon: "🟢",
  },
  {
    name: "Database",
    description: "Data manipulation mastery with SQL optimization, schema design, and query performance",
    color: "from-orange-500 to-red-500",
    glowColor: "shadow-orange-500/50",
    tags: ["SQL Ninja", "Schema Design", "Query Optimization", "Data Flow"],
    icon: "🗄️",
  },
  {
    name: "DevOps",
    description: "Infrastructure automation with CI/CD pipelines, containerization, and cloud deployment",
    color: "from-purple-500 to-indigo-600",
    glowColor: "shadow-purple-500/50",
    tags: ["CI/CD Master", "Docker Pro", "Cloud Deploy", "Monitor All"],
    icon: "🚀",
  },
]

export function CategoryShowcase() {
  const router = useRouter()

  return (
    <section id="categories" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl morphing-blob" />
        <div
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl morphing-blob"
          style={{ animationDelay: "2s" }}
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
            Master Every
            <br />
            Universe
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto font-medium">
            Dive into <span className="gradient-text font-bold">infinite dimensions</span> of coding knowledge. Each
            category is a portal to mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 30,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
              onClick={() => router.push(`/category/${category.name.toLowerCase()}`)}
            >
              <div className="relative p-8 h-full">
                {/* Portal Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-all duration-500`}
                />

                {/* Holographic Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 rounded-3xl group-hover:from-white/10 group-hover:via-white/30 group-hover:to-white/10 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Category Icon & Name */}
                  <div className="flex items-center mb-6">
                    <div className={`text-4xl mr-4 floating`} style={{ animationDelay: `${index * 0.2}s` }}>
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-black text-white group-hover:gradient-text transition-all duration-300">
                      {category.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-8 leading-relaxed text-lg font-medium group-hover:text-white/90 transition-colors duration-300">
                    {category.description}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          className={`bg-gradient-to-r ${category.color} text-white border-0 px-4 py-2 text-sm font-bold hover:scale-110 transition-transform duration-200 ${category.glowColor} hover:shadow-lg`}
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
