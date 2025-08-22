"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function CurriculumBridge() {
  const [selectedLevel, setSelectedLevel] = useState("undergraduate")

  const levels = [
    { id: "high-school", label: "High School", icon: "🎒" },
    { id: "undergraduate", label: "Undergraduate", icon: "🎓" },
    { id: "graduate", label: "Graduate", icon: "👨‍🎓" },
    { id: "professional", label: "Professional", icon: "💼" },
  ]

  const bridgePrograms = [
    {
      id: 1,
      title: "Ethiopian to US University Credit Transfer",
      description: "Convert your Ethiopian university credits to US equivalent with official evaluation",
      duration: "2-4 weeks",
      cost: "Free with platform",
      successRate: "95%",
      features: [
        "Official transcript evaluation",
        "Credit equivalency mapping",
        "GPA conversion (4.0 scale)",
        "University acceptance letters",
      ],
      universities: ["Harvard", "MIT", "Stanford", "UC Berkeley"],
      testimonial: {
        name: "Daniel Haile",
        university: "From AAU to Harvard",
        quote: "My Ethiopian engineering credits were fully recognized. Now I'm at Harvard Business School!",
      },
    },
    {
      id: 2,
      title: "English Proficiency Accelerator",
      description: "Intensive English preparation tailored for Ethiopian students applying internationally",
      duration: "3-6 months",
      cost: "Scholarship available",
      successRate: "88%",
      features: [
        "TOEFL/IELTS preparation",
        "Academic writing skills",
        "Interview preparation",
        "Cultural adaptation training",
      ],
      universities: ["Oxford", "Cambridge", "Toronto", "Melbourne"],
      testimonial: {
        name: "Meron Tadesse",
        university: "From Amharic to Oxford",
        quote: "Went from struggling with English to getting into Oxford. The cultural bridge was amazing!",
      },
    },
    {
      id: 3,
      title: "Research Experience Bridge",
      description: "Connect Ethiopian students with international research opportunities and publications",
      duration: "6-12 months",
      cost: "Funded positions",
      successRate: "76%",
      features: [
        "Research methodology training",
        "International collaboration",
        "Publication opportunities",
        "Conference presentations",
      ],
      universities: ["ETH Zurich", "Max Planck", "CERN", "NASA"],
      testimonial: {
        name: "Yonas Bekele",
        university: "From AAU to CERN",
        quote: "Published 3 papers and now working at CERN. The research bridge opened incredible doors!",
      },
    },
  ]

  const skillsMapping = [
    {
      ethiopian: "Ethiopian Grade 12 Certificate",
      international: "High School Diploma + SAT/ACT",
      equivalency: "95% match",
      notes: "Additional math/science credits recognized",
    },
    {
      ethiopian: "Ethiopian University Degree",
      international: "Bachelor's Degree (US/EU)",
      equivalency: "90% match",
      notes: "Credit transfer available for most programs",
    },
    {
      ethiopian: "Amharic/Oromo Fluency",
      international: "Multilingual Advantage",
      equivalency: "Bonus points",
      notes: "Highly valued in global companies",
    },
    {
      ethiopian: "Ethiopian Work Experience",
      international: "International Experience",
      equivalency: "85% match",
      notes: "Leadership and problem-solving emphasized",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Level Selection */}
      <div className="flex flex-wrap gap-4">
        {levels.map((level) => (
          <motion.div key={level.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedLevel === level.id ? "default" : "outline"}
              onClick={() => setSelectedLevel(level.id)}
              className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                selectedLevel === level.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "hover:bg-muted border-border"
              }`}
            >
              <span className="mr-2">{level.icon}</span>
              {level.label}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Bridge Programs */}
      <div className="grid gap-8">
        <h2 className="text-3xl font-bold font-heading text-foreground">Bridge Programs</h2>
        {bridgePrograms.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{program.description}</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{program.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{program.cost}</div>
                    <div className="text-sm text-muted-foreground">Cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">{program.successRate}</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold font-heading mb-3 text-foreground">Program Features</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold font-heading mb-3 text-foreground">Partner Universities</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.universities.map((uni, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {uni}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-ethiopian rounded-lg p-6 text-white">
                <h4 className="font-semibold font-heading mb-4">Success Story</h4>
                <div className="mb-4">
                  <div className="font-semibold">{program.testimonial.name}</div>
                  <div className="text-sm opacity-80">{program.testimonial.university}</div>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">"{program.testimonial.quote}"</p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Start Bridge Program 🌉
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
              >
                Learn More 📚
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Equivalency Mapping */}
      <div className="bg-card border border-border rounded-xl p-8">
        <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Ethiopian to International Equivalency</h3>
        <div className="space-y-4">
          {skillsMapping.map((mapping, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg"
            >
              <div>
                <div className="font-semibold text-foreground">{mapping.ethiopian}</div>
              </div>
              <div>
                <div className="font-semibold text-primary">{mapping.international}</div>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {mapping.equivalency}
                </Badge>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{mapping.notes}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
