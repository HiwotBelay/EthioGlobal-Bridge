"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Code, Database, Globe, Smartphone, Server, Cpu, Palette, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  color: string
  gradient: string
  questionCount: number
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Mixed"
  subcategories: string[]
  popularQuestions: string[]
}

const categories: Category[] = [
  {
    id: "react",
    name: "React & Next.js",
    description: "Modern React development, hooks, state management, and Next.js framework",
    icon: Code,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
    questionCount: 1247,
    difficulty: "Mixed",
    subcategories: ["Hooks", "State Management", "Next.js", "SSR/SSG", "Performance"],
    popularQuestions: [
      "How to handle async operations in useEffect?",
      "Next.js API routes with TypeScript",
      "React state management best practices",
      "Server-side rendering vs static generation",
    ],
  },
  {
    id: "javascript",
    name: "JavaScript & TypeScript",
    description: "Core JavaScript concepts, ES6+, TypeScript, and modern JS patterns",
    icon: Globe,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-orange-500/20",
    questionCount: 2156,
    difficulty: "Mixed",
    subcategories: ["ES6+", "TypeScript", "Async/Await", "Closures", "Prototypes"],
    popularQuestions: [
      "Understanding JavaScript closures",
      "TypeScript generic constraints",
      "Promise vs async/await patterns",
      "JavaScript event loop explained",
    ],
  },
  {
    id: "python",
    name: "Python & FastAPI",
    description: "Python development, web frameworks, data science, and automation",
    icon: Server,
    color: "text-green-400",
    gradient: "from-green-500/20 to-emerald-500/20",
    questionCount: 1834,
    difficulty: "Mixed",
    subcategories: ["FastAPI", "Django", "Data Science", "Automation", "Testing"],
    popularQuestions: [
      "FastAPI async database operations",
      "Python decorators explained",
      "Django vs FastAPI comparison",
      "Python list comprehensions",
    ],
  },
  {
    id: "database",
    name: "Databases & APIs",
    description: "SQL, NoSQL, database design, API development, and data modeling",
    icon: Database,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
    questionCount: 987,
    difficulty: "Intermediate",
    subcategories: ["SQL", "MongoDB", "PostgreSQL", "Redis", "GraphQL"],
    popularQuestions: [
      "SQL joins explained with examples",
      "MongoDB aggregation pipelines",
      "Database indexing strategies",
      "REST vs GraphQL APIs",
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "React Native, Flutter, iOS, Android, and cross-platform development",
    icon: Smartphone,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-rose-500/20",
    questionCount: 743,
    difficulty: "Advanced",
    subcategories: ["React Native", "Flutter", "iOS", "Android", "Expo"],
    popularQuestions: [
      "React Native navigation patterns",
      "Flutter state management",
      "Mobile app performance optimization",
      "Cross-platform development tips",
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    description: "Docker, Kubernetes, AWS, deployment, CI/CD, and infrastructure",
    icon: Cpu,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-teal-500/20",
    questionCount: 654,
    difficulty: "Advanced",
    subcategories: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
    popularQuestions: [
      "Docker containerization best practices",
      "Kubernetes deployment strategies",
      "AWS Lambda functions",
      "CI/CD pipeline setup",
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Design",
    description: "CSS, Tailwind, animations, UI/UX, and modern frontend techniques",
    icon: Palette,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/20",
    questionCount: 1123,
    difficulty: "Beginner",
    subcategories: ["CSS", "Tailwind", "Animations", "Responsive", "Accessibility"],
    popularQuestions: [
      "CSS Grid vs Flexbox when to use",
      "Tailwind CSS best practices",
      "CSS animations and transitions",
      "Responsive design patterns",
    ],
  },
  {
    id: "security",
    name: "Security & Auth",
    description: "Authentication, authorization, security best practices, and encryption",
    icon: Shield,
    color: "text-red-400",
    gradient: "from-red-500/20 to-pink-500/20",
    questionCount: 456,
    difficulty: "Advanced",
    subcategories: ["JWT", "OAuth", "Encryption", "HTTPS", "Vulnerabilities"],
    popularQuestions: [
      "JWT vs session authentication",
      "OAuth 2.0 implementation",
      "Password hashing best practices",
      "Common security vulnerabilities",
    ],
  },
]

export function CategoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Explore by{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technology Stack
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Browse curated coding solutions organized by popular frameworks and technologies. Each category contains
          stack-specific answers and best practices.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`relative p-6 rounded-xl bg-gradient-to-br ${category.gradient} border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group`}
            onClick={() => setSelectedCategory(category)}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-lg bg-black/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <category.icon className={`w-6 h-6 ${category.color}`} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">{category.description}</p>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
              <span>{category.questionCount} questions</span>
              <span
                className={`px-2 py-1 rounded-full ${
                  category.difficulty === "Beginner"
                    ? "bg-green-500/20 text-green-400"
                    : category.difficulty === "Intermediate"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : category.difficulty === "Advanced"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {category.difficulty}
              </span>
            </div>

            {/* Subcategories */}
            <div className="flex flex-wrap gap-1 mb-4">
              {category.subcategories.slice(0, 3).map((sub) => (
                <span key={sub} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md">
                  {sub}
                </span>
              ))}
              {category.subcategories.length > 3 && (
                <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-md">
                  +{category.subcategories.length - 3}
                </span>
              )}
            </div>

            {/* Arrow */}
            <ChevronRight className="absolute top-4 right-4 w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Category Detail Modal */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCategory(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`p-6 bg-gradient-to-r ${selectedCategory.gradient} border-b border-white/10`}>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-black/20 flex items-center justify-center`}>
                  <selectedCategory.icon className={`w-8 h-8 ${selectedCategory.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedCategory.name}</h2>
                  <p className="text-gray-300">{selectedCategory.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">{selectedCategory.questionCount}</div>
                  <div className="text-sm text-gray-400">Questions</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className={`text-2xl font-bold ${selectedCategory.color}`}>{selectedCategory.difficulty}</div>
                  <div className="text-sm text-gray-400">Difficulty</div>
                </div>
              </div>

              {/* Subcategories */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Topics Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.subcategories.map((sub) => (
                    <span
                      key={sub}
                      className="px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-medium rounded-lg border border-cyan-400/30"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular Questions */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Popular Questions</h3>
                <div className="space-y-2">
                  {selectedCategory.popularQuestions.map((question, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer border border-white/10 hover:border-cyan-400/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">{question}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-xl"
                onClick={() => setSelectedCategory(null)}
              >
                Explore {selectedCategory.name} Questions
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
