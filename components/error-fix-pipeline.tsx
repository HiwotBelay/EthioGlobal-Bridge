"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, CheckCircle, Copy, Play, Zap, Code, Lightbulb, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

interface ErrorFix {
  id: string
  title: string
  explanation: string
  brokenCode: string
  fixedCode: string
  language: string
  difficulty: "Easy" | "Medium" | "Hard"
  tags: string[]
}

export function ErrorFixPipeline() {
  const [errorInput, setErrorInput] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentFix, setCurrentFix] = useState<ErrorFix | null>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  // Mock AI analysis function
  const analyzeError = async (errorText: string): Promise<ErrorFix> => {
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock response based on error type
    if (errorText.toLowerCase().includes("cannot read property") || errorText.toLowerCase().includes("undefined")) {
      return {
        id: "1",
        title: "TypeError: Cannot read property of undefined",
        explanation:
          "This error occurs when you're trying to access a property on an undefined or null value. The most common cause is accessing nested object properties without checking if the parent object exists.",
        brokenCode: `// ❌ Broken Code
const user = null;
console.log(user.name); // TypeError: Cannot read property 'name' of null

// Another common case
const data = await fetchUserData();
console.log(data.profile.avatar); // Error if profile is undefined`,
        fixedCode: `// ✅ Fixed Code
const user = null;
console.log(user?.name); // undefined (safe)

// Better approach with optional chaining
const data = await fetchUserData();
console.log(data?.profile?.avatar); // Safe access

// Or with fallback values
const userName = user?.name || 'Anonymous';
const avatar = data?.profile?.avatar || '/default-avatar.png';`,
        language: "javascript",
        difficulty: "Easy",
        tags: ["JavaScript", "TypeError", "Optional Chaining", "Error Handling"],
      }
    }

    return {
      id: "2",
      title: "React Hook Dependency Warning",
      explanation:
        "This warning appears when useEffect has missing dependencies. React needs to know all values from component scope that are used inside the effect to properly re-run it when those values change.",
      brokenCode: `// ❌ Broken Code
const [count, setCount] = useState(0);
const [multiplier, setMultiplier] = useState(2);

useEffect(() => {
  const result = count * multiplier;
  console.log(result);
}, [count]); // Missing 'multiplier' dependency`,
      fixedCode: `// ✅ Fixed Code
const [count, setCount] = useState(0);
const [multiplier, setMultiplier] = useState(2);

useEffect(() => {
  const result = count * multiplier;
  console.log(result);
}, [count, multiplier]); // All dependencies included

// Or use useCallback for complex functions
const calculateResult = useCallback(() => {
  return count * multiplier;
}, [count, multiplier]);`,
      language: "javascript",
      difficulty: "Medium",
      tags: ["React", "useEffect", "Hooks", "Dependencies"],
    }
  }

  const handleAnalyze = async () => {
    if (!errorInput.trim()) return

    setIsAnalyzing(true)
    try {
      const fix = await analyzeError(errorInput)
      setCurrentFix(fix)
    } catch (error) {
      console.error("Analysis failed:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const copyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-500/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-500/20"
      case "Hard":
        return "text-red-400 bg-red-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
            <Zap className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Error Fix Pipeline
          </h1>
        </div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Paste your error message or broken code, and get instant AI-powered fixes with detailed explanations
        </p>
      </motion.div>

      {/* Input Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <AlertTriangle className="w-4 h-4" />
              <span>Paste your error message, stack trace, or broken code below</span>
            </div>

            <Textarea
              value={errorInput}
              onChange={(e) => setErrorInput(e.target.value)}
              placeholder={`Example:
TypeError: Cannot read property 'name' of undefined
    at getUserName (app.js:15:20)
    at handleClick (app.js:8:5)

Or paste your broken code here...`}
              className="min-h-[120px] bg-black/20 border-white/20 text-white placeholder-gray-500 focus:border-red-400 focus:ring-red-400/20 font-mono text-sm"
            />

            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">{errorInput.length} characters</div>
              <Button
                onClick={handleAnalyze}
                disabled={!errorInput.trim() || isAnalyzing}
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white border-0 px-6"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Fix My Error
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Loading Animation */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
              <Sparkles className="w-5 h-5 text-red-400 animate-spin" />
              <span className="text-red-400 font-medium">AI is analyzing your error...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {currentFix && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="space-y-6"
          >
            {/* Fix Header */}
            <Card className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{currentFix.title}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentFix.difficulty)}`}
                    >
                      {currentFix.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm">{currentFix.language}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentFix.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Explanation */}
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <h4 className="text-lg font-semibold text-white">Explanation</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">{currentFix.explanation}</p>
            </Card>

            {/* Code Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Broken Code */}
              <Card className="p-6 bg-red-500/5 border-red-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h4 className="text-lg font-semibold text-red-400">Broken Code</h4>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyCode(currentFix.brokenCode, "broken")}
                    className="text-gray-400 hover:text-white"
                  >
                    {copiedCode === "broken" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-gray-300">{currentFix.brokenCode}</code>
                </pre>
              </Card>

              {/* Fixed Code */}
              <Card className="p-6 bg-green-500/5 border-green-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <h4 className="text-lg font-semibold text-green-400">Fixed Code</h4>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyCode(currentFix.fixedCode, "fixed")}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedCode === "fixed" ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-gray-300">{currentFix.fixedCode}</code>
                </pre>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setCurrentFix(null)}
                variant="outline"
                className="border-white/20 text-gray-300 hover:text-white hover:bg-white/5"
              >
                Try Another Error
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0">
                <ArrowRight className="w-4 h-4 mr-2" />
                Save to My Fixes
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Examples */}
      {!currentFix && !isAnalyzing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-white text-center">Try these common errors:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "TypeError: Cannot read property 'map' of undefined",
              "React Hook useEffect has a missing dependency",
              "SyntaxError: Unexpected token '}'",
            ].map((example, index) => (
              <Card
                key={index}
                className="p-4 bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-200"
                onClick={() => setErrorInput(example)}
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-gray-300">{example}</span>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
