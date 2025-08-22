"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { OpportunityExplorer } from "@/components/opportunity-explorer"
import { CurriculumBridge } from "@/components/curriculum-bridge"
import { MentorNetwork } from "@/components/mentor-network"
import { SuccessTracker } from "@/components/success-tracker"

export function EthiopianEducationPlatform() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("opportunities")
  const [searchQuery, setSearchQuery] = useState("")

  const tabs = [
    { id: "opportunities", label: "Global Opportunities", icon: "🌍" },
    { id: "curriculum", label: "Curriculum Bridge", icon: "📚" },
    { id: "mentors", label: "Mentor Network", icon: "👥" },
    { id: "progress", label: "Success Tracker", icon: "📈" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-6 bg-gradient-to-b from-secondary via-chart-4 to-primary rounded-sm shadow-lg ethiopian-wave" />
              <h1 className="text-xl font-bold text-ethiopian-gradient">Ethiopian Education Bridge</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                <span>Welcome back,</span>
                <span className="font-semibold text-foreground">{user?.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={logout}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search opportunities, universities, scholarships, or ask any question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-primary/20 focus:border-primary bg-card"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                  : "hover:bg-muted"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {activeTab === "opportunities" && <OpportunityExplorer searchQuery={searchQuery} />}
          {activeTab === "curriculum" && <CurriculumBridge />}
          {activeTab === "mentors" && <MentorNetwork />}
          {activeTab === "progress" && <SuccessTracker />}
        </div>
      </div>
    </div>
  )
}
