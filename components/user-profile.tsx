"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  BookmarkIcon,
  History,
  Settings,
  Trophy,
  Code,
  Zap,
  Calendar,
  Star,
  Trash2,
  ExternalLink,
  Copy,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/lib/auth-context"

interface Bookmark {
  id: string
  title: string
  description: string
  code: string
  language: string
  category: string
  createdAt: string
  tags: string[]
}

interface UserStats {
  totalSearches: number
  errorsFixed: number
  codeSnippetsRun: number
  bookmarksCount: number
  joinedDate: string
  streak: number
}

export function UserProfile() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<"profile" | "bookmarks" | "history" | "settings">("profile")
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [userStats, setUserStats] = useState<UserStats>({
    totalSearches: 127,
    errorsFixed: 43,
    codeSnippetsRun: 89,
    bookmarksCount: 0,
    joinedDate: "2024-01-15",
    streak: 12,
  })
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Load bookmarks from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem(`bookmarks_${user?.id}`)
    if (savedBookmarks) {
      const parsed = JSON.parse(savedBookmarks)
      setBookmarks(parsed)
      setUserStats((prev) => ({ ...prev, bookmarksCount: parsed.length }))
    } else {
      // Add some sample bookmarks for demo
      const sampleBookmarks: Bookmark[] = [
        {
          id: "1",
          title: "React useEffect Hook Pattern",
          description: "Clean way to handle side effects in React components",
          code: `useEffect(() => {\n  const fetchData = async () => {\n    const response = await fetch('/api/data');\n    setData(response.data);\n  };\n  \n  fetchData();\n}, []);`,
          language: "javascript",
          category: "React",
          createdAt: "2024-01-20",
          tags: ["React", "Hooks", "useEffect"],
        },
        {
          id: "2",
          title: "Python List Comprehension",
          description: "Elegant way to create lists in Python",
          code: `# Filter and transform in one line\nresult = [x**2 for x in range(10) if x % 2 == 0]\nprint(result)  # [0, 4, 16, 36, 64]`,
          language: "python",
          category: "Python",
          createdAt: "2024-01-18",
          tags: ["Python", "List Comprehension", "Functional"],
        },
        {
          id: "3",
          title: "CSS Flexbox Centering",
          description: "Perfect centering with flexbox",
          code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}`,
          language: "css",
          category: "CSS",
          createdAt: "2024-01-16",
          tags: ["CSS", "Flexbox", "Layout"],
        },
      ]
      setBookmarks(sampleBookmarks)
      setUserStats((prev) => ({ ...prev, bookmarksCount: sampleBookmarks.length }))
      localStorage.setItem(`bookmarks_${user?.id}`, JSON.stringify(sampleBookmarks))
    }
  }, [user?.id])

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const deleteBookmark = (id: string) => {
    const updated = bookmarks.filter((b) => b.id !== id)
    setBookmarks(updated)
    setUserStats((prev) => ({ ...prev, bookmarksCount: updated.length }))
    localStorage.setItem(`bookmarks_${user?.id}`, JSON.stringify(updated))
  }

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      javascript: "text-yellow-400 bg-yellow-500/20",
      python: "text-blue-400 bg-blue-500/20",
      css: "text-pink-400 bg-pink-500/20",
      html: "text-orange-400 bg-orange-500/20",
      react: "text-cyan-400 bg-cyan-500/20",
    }
    return colors[language.toLowerCase()] || "text-gray-400 bg-gray-500/20"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <img
            src={user?.avatar || "/placeholder.svg?height=80&width=80"}
            alt={user?.name}
            className="w-20 h-20 rounded-full border-4 border-cyan-400/30"
          />
          <div className="text-left">
            <h1 className="text-3xl font-bold text-white">{user?.name}</h1>
            <p className="text-gray-300">{user?.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">
                Joined {new Date(userStats.joinedDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="flex bg-white/5 rounded-xl p-1 backdrop-blur-sm border border-white/10">
          {[
            { id: "profile", label: "Profile", icon: User },
            { id: "bookmarks", label: "Bookmarks", icon: BookmarkIcon },
            { id: "history", label: "History", icon: History },
            { id: "settings", label: "Settings", icon: Settings },
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
        </div>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Total Searches",
                    value: userStats.totalSearches,
                    icon: Code,
                    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
                  },
                  {
                    label: "Errors Fixed",
                    value: userStats.errorsFixed,
                    icon: Zap,
                    color: "from-red-500/20 to-orange-500/20 border-red-500/30",
                  },
                  {
                    label: "Code Snippets Run",
                    value: userStats.codeSnippetsRun,
                    icon: Trophy,
                    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
                  },
                  {
                    label: "Current Streak",
                    value: `${userStats.streak} days`,
                    icon: Star,
                    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
                  },
                ].map((stat, index) => (
                  <Card key={index} className={`p-6 bg-gradient-to-r ${stat.color} backdrop-blur-sm`}>
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-8 h-8 text-white" />
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card className="p-6 bg-white/5 border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {[
                    { action: "Fixed React useEffect dependency warning", time: "2 hours ago", type: "error-fix" },
                    { action: "Ran JavaScript fibonacci function", time: "5 hours ago", type: "playground" },
                    { action: "Searched for 'async/await best practices'", time: "1 day ago", type: "search" },
                    { action: "Bookmarked Python list comprehension", time: "2 days ago", type: "bookmark" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.type === "error-fix"
                            ? "bg-red-400"
                            : activity.type === "playground"
                              ? "bg-green-400"
                              : activity.type === "search"
                                ? "bg-blue-400"
                                : "bg-purple-400"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="text-white text-sm">{activity.action}</div>
                        <div className="text-gray-400 text-xs">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Bookmarks Tab */}
          {activeTab === "bookmarks" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Your Bookmarks ({bookmarks.length})</h3>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                  <BookmarkIcon className="w-4 h-4 mr-2" />
                  Add Bookmark
                </Button>
              </div>

              <div className="grid gap-4">
                {bookmarks.map((bookmark) => (
                  <Card
                    key={bookmark.id}
                    className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{bookmark.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{bookmark.description}</p>
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(bookmark.language)}`}
                          >
                            {bookmark.language}
                          </span>
                          <span className="text-gray-400 text-xs">{bookmark.category}</span>
                          <span className="text-gray-400 text-xs">
                            {new Date(bookmark.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {bookmark.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyCode(bookmark.code, bookmark.id)}
                          className="text-gray-400 hover:text-white"
                        >
                          {copiedId === bookmark.id ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteBookmark(bookmark.id)}
                          className="text-gray-400 hover:text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{bookmark.code}</code>
                      </pre>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === "history" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Search History</h3>
              <div className="space-y-3">
                {[
                  { query: "How to handle async/await in React?", timestamp: "2024-01-20 14:30", results: 12 },
                  { query: "Python list comprehension examples", timestamp: "2024-01-20 10:15", results: 8 },
                  { query: "CSS flexbox centering techniques", timestamp: "2024-01-19 16:45", results: 15 },
                  { query: "JavaScript array methods cheatsheet", timestamp: "2024-01-19 09:20", results: 20 },
                  { query: "React useEffect cleanup function", timestamp: "2024-01-18 13:10", results: 6 },
                ].map((search, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-white font-medium">{search.query}</div>
                        <div className="text-gray-400 text-sm mt-1">
                          {search.timestamp} • {search.results} results
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Account Settings</h3>

              <Card className="p-6 bg-white/5 border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Profile Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
                    <Input defaultValue={user?.name} className="bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input defaultValue={user?.email} className="bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Preferences</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Email Notifications</div>
                      <div className="text-gray-400 text-sm">Receive updates about new features</div>
                    </div>
                    <Button variant="outline" size="sm" className="border-white/20 text-white bg-transparent">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Dark Mode</div>
                      <div className="text-gray-400 text-sm">Use dark theme (currently enabled)</div>
                    </div>
                    <Button variant="outline" size="sm" className="border-white/20 text-white bg-transparent">
                      On
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
