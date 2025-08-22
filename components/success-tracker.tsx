"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function SuccessTracker() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("all-time")

  const timeframes = [
    { id: "this-month", label: "This Month", icon: "📅" },
    { id: "this-year", label: "This Year", icon: "🗓️" },
    { id: "all-time", label: "All Time", icon: "⏰" },
  ]

  const userProgress = {
    profileCompletion: 85,
    applicationsSubmitted: 12,
    interviewsScheduled: 4,
    offersReceived: 2,
    mentorshipSessions: 8,
    skillsAssessed: 15,
    networkConnections: 34,
  }

  const achievements = [
    {
      id: 1,
      title: "Profile Pioneer",
      description: "Completed your profile with Ethiopian background",
      icon: "🏆",
      earned: true,
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Application Ace",
      description: "Submitted 10+ applications",
      icon: "📝",
      earned: true,
      date: "2024-02-03",
    },
    {
      id: 3,
      title: "Interview Champion",
      description: "Completed 5+ interviews",
      icon: "🎤",
      earned: false,
      progress: 80,
    },
    {
      id: 4,
      title: "Mentor Mentee",
      description: "Completed 10 mentorship sessions",
      icon: "👨‍🏫",
      earned: false,
      progress: 80,
    },
    {
      id: 5,
      title: "Network Builder",
      description: "Connected with 50+ professionals",
      icon: "🤝",
      earned: false,
      progress: 68,
    },
    {
      id: 6,
      title: "Success Story",
      description: "Received your first offer",
      icon: "🌟",
      earned: true,
      date: "2024-02-20",
    },
  ]

  const milestones = [
    {
      date: "2024-02-20",
      title: "Offer Received!",
      description: "Congratulations! You received an offer from Microsoft for Software Engineer Intern position.",
      type: "success",
      icon: "🎉",
    },
    {
      date: "2024-02-18",
      title: "Interview Completed",
      description: "Successfully completed final round interview with Microsoft team.",
      type: "progress",
      icon: "✅",
    },
    {
      date: "2024-02-15",
      title: "Mentorship Session",
      description: "Had a great session with Dr. Hanan Yosef about system design interviews.",
      type: "learning",
      icon: "📚",
    },
    {
      date: "2024-02-10",
      title: "Application Submitted",
      description: "Applied to Google Summer Internship program with strong recommendation.",
      type: "progress",
      icon: "📤",
    },
    {
      date: "2024-02-05",
      title: "Skill Assessment",
      description: "Completed JavaScript and React skill assessments with excellent scores.",
      type: "learning",
      icon: "💻",
    },
  ]

  const goals = [
    {
      id: 1,
      title: "Land Dream Internship",
      description: "Secure a software engineering internship at a top tech company",
      progress: 75,
      deadline: "2024-04-01",
      status: "on-track",
      steps: [
        { task: "Complete profile", done: true },
        { task: "Apply to 15+ companies", done: true },
        { task: "Complete 5+ interviews", done: false },
        { task: "Receive offer", done: false },
      ],
    },
    {
      id: 2,
      title: "Build Professional Network",
      description: "Connect with 100+ Ethiopian professionals globally",
      progress: 34,
      deadline: "2024-06-01",
      status: "on-track",
      steps: [
        { task: "Join mentor network", done: true },
        { task: "Attend 5+ networking events", done: false },
        { task: "Connect with 50+ professionals", done: false },
        { task: "Reach 100 connections", done: false },
      ],
    },
    {
      id: 3,
      title: "Scholarship Application",
      description: "Apply and secure scholarship for graduate studies",
      progress: 45,
      deadline: "2024-05-15",
      status: "needs-attention",
      steps: [
        { task: "Research scholarships", done: true },
        { task: "Prepare application materials", done: true },
        { task: "Submit 5+ applications", done: false },
        { task: "Complete interviews", done: false },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Timeframe Selection */}
      <div className="flex flex-wrap gap-4">
        {timeframes.map((timeframe) => (
          <motion.div key={timeframe.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedTimeframe === timeframe.id ? "default" : "outline"}
              onClick={() => setSelectedTimeframe(timeframe.id)}
              className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                selectedTimeframe === timeframe.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "hover:bg-muted border-border"
              }`}
            >
              <span className="mr-2">{timeframe.icon}</span>
              {timeframe.label}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: "Applications", value: userProgress.applicationsSubmitted, icon: "📝", color: "text-primary" },
          { label: "Interviews", value: userProgress.interviewsScheduled, icon: "🎤", color: "text-accent" },
          { label: "Offers", value: userProgress.offersReceived, icon: "🎉", color: "text-secondary" },
          { label: "Connections", value: userProgress.networkConnections, icon: "🤝", color: "text-chart-4" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
            <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Goals Tracking */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-heading text-foreground">Your Goals</h3>
        {goals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold font-heading text-foreground mb-2">{goal.title}</h4>
                <p className="text-muted-foreground">{goal.description}</p>
              </div>
              <div className="text-right">
                <Badge
                  variant={goal.status === "on-track" ? "default" : "destructive"}
                  className={
                    goal.status === "on-track" ? "bg-chart-4/20 text-chart-4" : "bg-destructive/20 text-destructive"
                  }
                >
                  {goal.status === "on-track" ? "On Track" : "Needs Attention"}
                </Badge>
                <div className="text-sm text-muted-foreground mt-1">Due: {goal.deadline}</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Progress</span>
                <span className="text-sm font-bold text-primary">{goal.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${goal.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              {goal.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      step.done ? "bg-chart-4 text-white" : "bg-muted"
                    }`}
                  >
                    {step.done && <span className="text-xs">✓</span>}
                  </div>
                  <span className={`text-sm ${step.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                    {step.task}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-heading text-foreground">Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                achievement.earned
                  ? "bg-gradient-ethiopian text-white border-primary shadow-lg"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-bold font-heading mb-2">{achievement.title}</h4>
                <p className={`text-sm mb-3 ${achievement.earned ? "opacity-90" : "text-muted-foreground"}`}>
                  {achievement.description}
                </p>
                {achievement.earned ? (
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Earned {achievement.date}
                  </Badge>
                ) : (
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Progress: {achievement.progress}%</div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Activity Timeline */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-heading text-foreground">Recent Activity</h3>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  milestone.type === "success"
                    ? "bg-chart-4/20 text-chart-4"
                    : milestone.type === "progress"
                      ? "bg-primary/20 text-primary"
                      : "bg-accent/20 text-accent"
                }`}
              >
                {milestone.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold font-heading text-foreground">{milestone.title}</h4>
                  <span className="text-sm text-muted-foreground">{milestone.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
