"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Zap, BookOpen, LogOut, Code2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { SearchResults } from "@/components/search-results"
import { CategoryGrid } from "@/components/category-grid"
import { ErrorFixPipeline } from "@/components/error-fix-pipeline"
import { CodePlayground } from "@/components/code-playground"
import { UserProfile } from "@/components/user-profile"

export function Dashboard() {
  const { user, signOut } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"search" | "categories" | "error-fix" | "playground" | "profile">("search")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              {"<AI Code Helper />"}
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { id: "search", label: "Search", icon: Search },
                { id: "categories", label: "Categories", icon: BookOpen },
                { id: "error-fix", label: "Error Fix", icon: Zap },
                { id: "playground", label: "Playground", icon: Code2 },
                { id: "profile", label: "Profile", icon: User },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              ))}
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <img
                  src={user?.avatar || "/placeholder.svg?height=32&width=32"}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full border-2 border-cyan-400/30"
                />
                <span className="hidden sm:block">Hey, {user?.name}!</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar - Hide on profile page */}
        {activeTab !== "profile" && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask anything about coding... (e.g., 'How to handle async/await in React?')"
                  className="pl-12 pr-4 py-4 text-base bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-lg px-4"
                >
                  Search
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "search" && <SearchResults query={searchQuery} />}
          {activeTab === "categories" && <CategoryGrid />}
          {activeTab === "error-fix" && <ErrorFixPipeline />}
          {activeTab === "playground" && <CodePlayground />}
          {activeTab === "profile" && <UserProfile />}
        </motion.div>
      </main>
    </div>
  )
}
