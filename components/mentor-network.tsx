"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function MentorNetwork() {
  const [selectedField, setSelectedField] = useState("all")

  const fields = [
    { id: "all", label: "All Fields", count: 234, icon: "🌍" },
    { id: "tech", label: "Technology", count: 89, icon: "💻" },
    { id: "business", label: "Business", count: 67, icon: "💼" },
    { id: "medicine", label: "Medicine", count: 45, icon: "🏥" },
    { id: "academia", label: "Academia", count: 33, icon: "🎓" },
  ]

  const mentors = [
    {
      id: 1,
      name: "Dr. Hanan Yosef",
      title: "Senior Software Engineer",
      company: "Google",
      field: "tech",
      location: "Mountain View, CA",
      flag: "🇺🇸",
      experience: "8 years",
      education: "Stanford CS → Google",
      specialties: ["Machine Learning", "System Design", "Career Growth"],
      mentees: 23,
      rating: 4.9,
      languages: ["English", "Amharic", "Oromo"],
      story:
        "From Addis Ababa University to Google. I help Ethiopian students navigate tech careers in Silicon Valley.",
      availability: "Weekends",
      responseTime: "< 24 hours",
    },
    {
      id: 2,
      name: "Abel Tesfaye",
      title: "Investment Banking VP",
      company: "Goldman Sachs",
      field: "business",
      location: "New York, NY",
      flag: "🇺🇸",
      experience: "12 years",
      education: "Harvard Business School",
      specialties: ["Finance", "Investment Banking", "MBA Applications"],
      mentees: 31,
      rating: 4.8,
      languages: ["English", "Amharic"],
      story: "Ethiopian-American helping students break into Wall Street. Passionate about financial inclusion.",
      availability: "Evenings",
      responseTime: "< 12 hours",
    },
    {
      id: 3,
      name: "Dr. Sara Bekele",
      title: "Research Scientist",
      company: "Microsoft Research",
      field: "tech",
      location: "Seattle, WA",
      flag: "🇺🇸",
      experience: "10 years",
      education: "MIT PhD → Microsoft",
      specialties: ["AI Research", "PhD Applications", "Research Methods"],
      mentees: 18,
      rating: 5.0,
      languages: ["English", "Amharic", "Tigrinya"],
      story: "Leading AI research at Microsoft. Helping Ethiopian students pursue advanced degrees in STEM.",
      availability: "Flexible",
      responseTime: "< 6 hours",
    },
    {
      id: 4,
      name: "Dr. Meron Tadesse",
      title: "Cardiothoracic Surgeon",
      company: "Johns Hopkins Hospital",
      field: "medicine",
      location: "Baltimore, MD",
      flag: "🇺🇸",
      experience: "15 years",
      education: "Johns Hopkins Medical School",
      specialties: ["Medical School Applications", "Residency", "Surgery"],
      mentees: 27,
      rating: 4.9,
      languages: ["English", "Amharic"],
      story: "First Ethiopian-American cardiothoracic surgeon at Johns Hopkins. Mentoring future doctors.",
      availability: "Weekends",
      responseTime: "< 48 hours",
    },
  ]

  const filteredMentors = mentors.filter((mentor) => selectedField === "all" || mentor.field === selectedField)

  const mentorshipPrograms = [
    {
      title: "1-on-1 Career Mentorship",
      duration: "6 months",
      sessions: "Bi-weekly 1-hour calls",
      price: "Free",
      features: ["Personalized career roadmap", "Resume/CV review", "Interview preparation", "Network introductions"],
    },
    {
      title: "Group Mentorship Circles",
      duration: "3 months",
      sessions: "Weekly group sessions",
      price: "Free",
      features: ["Peer learning", "Group projects", "Cultural exchange", "Alumni networking"],
    },
    {
      title: "Application Review Service",
      duration: "1 month",
      sessions: "Document review + feedback",
      price: "Free",
      features: ["University applications", "Scholarship essays", "Personal statements", "Portfolio review"],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Field Selection */}
      <div className="flex flex-wrap gap-4">
        {fields.map((field) => (
          <motion.div key={field.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedField === field.id ? "default" : "outline"}
              onClick={() => setSelectedField(field.id)}
              className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                selectedField === field.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "hover:bg-muted border-border"
              }`}
            >
              <span className="mr-2">{field.icon}</span>
              {field.label}
              <Badge variant="secondary" className="ml-2 bg-accent/20 text-accent">
                {field.count}
              </Badge>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Mentors Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredMentors.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 success-story"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-ethiopian rounded-full flex items-center justify-center text-white font-bold text-xl">
                {mentor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold font-heading text-foreground">{mentor.name}</h3>
                  <span className="text-lg">{mentor.flag}</span>
                </div>
                <p className="text-primary font-semibold">{mentor.title}</p>
                <p className="text-muted-foreground">{mentor.company}</p>
                <p className="text-sm text-muted-foreground">{mentor.location}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-accent">⭐</span>
                  <span className="font-semibold">{mentor.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground">{mentor.mentees} mentees</div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">{mentor.story}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Experience</div>
                <div className="text-sm text-muted-foreground">{mentor.experience}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Education</div>
                <div className="text-sm text-muted-foreground">{mentor.education}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Availability</div>
                <div className="text-sm text-muted-foreground">{mentor.availability}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Response Time</div>
                <div className="text-sm text-muted-foreground">{mentor.responseTime}</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold text-foreground mb-2">Specialties</div>
              <div className="flex flex-wrap gap-2">
                {mentor.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold text-foreground mb-2">Languages</div>
              <div className="flex flex-wrap gap-2">
                {mentor.languages.map((language, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Connect 🤝
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
              >
                View Profile 👤
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mentorship Programs */}
      <div className="bg-gradient-ethiopian rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold font-heading mb-6">Mentorship Programs</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {mentorshipPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <h4 className="text-xl font-bold font-heading mb-3">{program.title}</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm opacity-80">Duration:</span>
                  <span className="text-sm font-semibold">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-80">Sessions:</span>
                  <span className="text-sm font-semibold">{program.sessions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-80">Price:</span>
                  <span className="text-sm font-semibold text-accent">{program.price}</span>
                </div>
              </div>
              <div className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    <span className="text-sm opacity-90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { number: "234", label: "Active Mentors", icon: "👥" },
          { number: "1,247", label: "Students Mentored", icon: "🎓" },
          { number: "89%", label: "Success Rate", icon: "🚀" },
          { number: "45", label: "Countries Reached", icon: "🌍" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
            <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
