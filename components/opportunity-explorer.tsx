"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface OpportunityExplorerProps {
  searchQuery: string
}

export function OpportunityExplorer({ searchQuery }: OpportunityExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Opportunities", count: 1247, icon: "🌍" },
    { id: "scholarships", label: "Scholarships", count: 342, icon: "🎓" },
    { id: "universities", label: "Universities", count: 156, icon: "🏛️" },
    { id: "jobs", label: "Remote Jobs", count: 489, icon: "💼" },
    { id: "internships", label: "Internships", count: 260, icon: "🚀" },
  ]

  const opportunities = [
    {
      id: 1,
      title: "Full Scholarship - MIT Computer Science",
      organization: "Massachusetts Institute of Technology",
      type: "scholarships",
      deadline: "March 15, 2024",
      amount: "$75,000/year",
      description: "Full tuition coverage for Ethiopian students in STEM fields with mentorship program",
      requirements: ["GPA 3.7+", "TOEFL 100+", "Strong Math Background", "Leadership Experience"],
      successRate: "12%",
      ethiopianAlumni: 23,
      location: "Cambridge, MA, USA",
      flag: "🇺🇸",
    },
    {
      id: 2,
      title: "Software Engineer - Remote Position",
      organization: "Stripe",
      type: "jobs",
      deadline: "Rolling Basis",
      amount: "$120,000-180,000",
      description: "Remote software engineering position with visa sponsorship and relocation support",
      requirements: ["3+ years experience", "React/Node.js", "English fluency", "Portfolio"],
      successRate: "8%",
      ethiopianAlumni: 12,
      location: "Remote Worldwide",
      flag: "🌍",
    },
    {
      id: 3,
      title: "African Leadership University - Business",
      organization: "ALU Rwanda",
      type: "universities",
      deadline: "June 30, 2024",
      amount: "Need-based aid available",
      description: "Pan-African university with strong Ethiopian connections and global partnerships",
      requirements: ["High School Diploma", "Leadership Experience", "English Proficiency"],
      successRate: "45%",
      ethiopianAlumni: 156,
      location: "Kigali, Rwanda",
      flag: "🇷🇼",
    },
    {
      id: 4,
      title: "Google Summer Internship",
      organization: "Google",
      type: "internships",
      deadline: "February 1, 2024",
      amount: "$8,000/month + Housing",
      description: "3-month internship program with mentorship from Ethiopian Googlers",
      requirements: ["CS Student", "Programming Skills", "English", "Problem Solving"],
      successRate: "15%",
      ethiopianAlumni: 34,
      location: "Mountain View, CA",
      flag: "🇺🇸",
    },
  ]

  const filteredOpportunities = opportunities.filter(
    (opp) => selectedCategory === "all" || opp.type === selectedCategory,
  )

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "hover:bg-muted border-border"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
              <Badge variant="secondary" className="ml-2 bg-accent text-accent-foreground">
                {category.count}
              </Badge>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Opportunities Grid */}
      <div className="grid gap-8">
        {filteredOpportunities.map((opportunity, index) => (
          <motion.div
            key={opportunity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="opportunity-card bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold font-heading text-foreground">{opportunity.title}</h3>
                  <span className="text-2xl">{opportunity.flag}</span>
                </div>
                <p className="text-primary font-semibold text-lg">{opportunity.organization}</p>
                <p className="text-muted-foreground mt-1">{opportunity.location}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-secondary mb-1">{opportunity.amount}</div>
                <div className="text-sm text-muted-foreground">Deadline: {opportunity.deadline}</div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{opportunity.description}</p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold font-heading mb-3 text-foreground">Requirements</h4>
                <ul className="space-y-2">
                  {opportunity.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">{opportunity.successRate}</div>
                <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
                <div className="mt-2 text-xs text-muted-foreground">Based on Ethiopian applicants</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">{opportunity.ethiopianAlumni}</div>
                <div className="text-sm text-muted-foreground font-medium">Ethiopian Alumni</div>
                <div className="mt-2 text-xs text-muted-foreground">Ready to mentor you</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                Apply Now 🚀
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary/10 font-semibold py-3 bg-transparent"
              >
                Connect with Alumni 👥
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success Stories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-ethiopian rounded-xl p-8 text-white"
      >
        <h3 className="text-3xl font-bold font-heading mb-6">Recent Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                A
              </div>
              <div>
                <div className="font-semibold text-lg">Abel Tesfaye</div>
                <div className="text-sm opacity-80">Stanford University → Google</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              "The platform helped me navigate the complex US university application process. The Ethiopian alumni
              network was invaluable - they guided me through every step!"
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                S
              </div>
              <div>
                <div className="font-semibold text-lg">Sara Bekele</div>
                <div className="text-sm opacity-80">MIT → Microsoft Research</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              "From Addis Ababa University to Microsoft Seattle - this platform made my dream possible. The mentorship
              and scholarship matching was life-changing!"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
