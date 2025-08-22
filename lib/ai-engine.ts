"use client"

export interface AIAnswer {
  id: string
  question: string
  answer: string
  codeExample?: string
  language?: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  upvotes: number
  timestamp: Date
  relatedQuestions: string[]
  stackContext?: string
}

export interface SearchContext {
  query: string
  stack?: string
  language?: string
  category?: string
}

class AIAnswerEngine {
  private knowledgeBase: AIAnswer[] = [
    {
      id: "1",
      question: "How to handle async/await in React components?",
      answer:
        "When using async/await in React components, you should never make the component function itself async. Instead, create async functions inside useEffect or event handlers. Always handle loading states and errors properly.",
      codeExample: `// ✅ Correct way
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch(\`/api/users/\${userId}\`)
        const userData = await response.json()
        setUser(userData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [userId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return <div>Welcome, {user?.name}!</div>
}`,
      language: "javascript",
      difficulty: "Intermediate",
      tags: ["React", "Async/Await", "useEffect", "Error Handling"],
      upvotes: 245,
      timestamp: new Date("2024-01-15"),
      relatedQuestions: [
        "How to handle loading states in React?",
        "What is the difference between async/await and promises?",
        "How to cancel async requests in React?",
      ],
      stackContext: "React",
    },
    {
      id: "2",
      question: "How to center a div with CSS?",
      answer:
        "There are several modern ways to center a div. Flexbox is the most reliable and widely supported method. CSS Grid is also excellent for centering. Avoid using absolute positioning unless necessary.",
      codeExample: `/* Method 1: Flexbox (Recommended) */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Method 2: CSS Grid */
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

/* Method 3: Flexbox with margin auto */
.container {
  display: flex;
  min-height: 100vh;
}

.centered-div {
  margin: auto;
}`,
      language: "css",
      difficulty: "Beginner",
      tags: ["CSS", "Flexbox", "Grid", "Layout", "Centering"],
      upvotes: 189,
      timestamp: new Date("2024-01-10"),
      relatedQuestions: [
        "What is the difference between flexbox and grid?",
        "How to center text vertically?",
        "CSS positioning explained",
      ],
      stackContext: "CSS",
    },
    {
      id: "3",
      question: "How to optimize Next.js app performance?",
      answer:
        "Next.js performance optimization involves several strategies: Image optimization, code splitting, static generation, proper caching, and bundle analysis. Focus on Core Web Vitals and use Next.js built-in optimizations.",
      codeExample: `// 1. Image Optimization
import Image from 'next/image'

function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={400}
      priority // For above-the-fold images
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  )
}

// 2. Dynamic Imports for Code Splitting
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable SSR if not needed
})

// 3. Static Generation with ISR
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 3600 // Revalidate every hour
  }
}`,
      language: "javascript",
      difficulty: "Advanced",
      tags: ["Next.js", "Performance", "Optimization", "Images", "Code Splitting"],
      upvotes: 312,
      timestamp: new Date("2024-01-20"),
      relatedQuestions: [
        "What is the difference between SSR and SSG?",
        "How to analyze Next.js bundle size?",
        "Next.js caching strategies",
      ],
      stackContext: "Next.js",
    },
    {
      id: "4",
      question: "How to handle forms in React with validation?",
      answer:
        "Modern React form handling should use controlled components with proper validation. Consider using libraries like React Hook Form for complex forms, but understand the fundamentals first.",
      codeExample: `// Basic controlled form with validation
function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    try {
      await submitForm(formData)
      setFormData({ email: '', message: '' })
    } catch (error) {
      setErrors({ submit: 'Failed to submit form' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Email"
      />
      {errors.email && <span className="error">{errors.email}</span>}
      
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Message"
      />
      {errors.message && <span className="error">{errors.message}</span>}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}`,
      language: "javascript",
      difficulty: "Intermediate",
      tags: ["React", "Forms", "Validation", "State Management"],
      upvotes: 198,
      timestamp: new Date("2024-01-12"),
      relatedQuestions: [
        "What is React Hook Form?",
        "How to handle file uploads in React?",
        "Form validation best practices",
      ],
      stackContext: "React",
    },
  ]

  async simulateAIProcessing(query: string): Promise<void> {
    // Simulate AI processing time
    const processingTime = Math.random() * 1500 + 500 // 500-2000ms
    await new Promise((resolve) => setTimeout(resolve, processingTime))
  }

  async searchAnswers(context: SearchContext): Promise<AIAnswer[]> {
    await this.simulateAIProcessing(context.query)

    const query = context.query.toLowerCase()

    // Smart search algorithm
    const results = this.knowledgeBase.filter((answer) => {
      const questionMatch = answer.question.toLowerCase().includes(query)
      const answerMatch = answer.answer.toLowerCase().includes(query)
      const tagMatch = answer.tags.some((tag) => tag.toLowerCase().includes(query))
      const stackMatch = context.stack ? answer.stackContext?.toLowerCase() === context.stack.toLowerCase() : true

      return (questionMatch || answerMatch || tagMatch) && stackMatch
    })

    // Sort by relevance (upvotes and recency)
    return results.sort((a, b) => {
      const scoreA = a.upvotes + (Date.now() - a.timestamp.getTime()) / (1000 * 60 * 60 * 24) // Decay over time
      const scoreB = b.upvotes + (Date.now() - b.timestamp.getTime()) / (1000 * 60 * 60 * 24)
      return scoreB - scoreA
    })
  }

  async generateAnswer(question: string, context?: SearchContext): Promise<AIAnswer> {
    await this.simulateAIProcessing(question)

    // Generate a new AI answer based on the question
    const newAnswer: AIAnswer = {
      id: Date.now().toString(),
      question: question,
      answer: `AI-generated answer for: "${question}". This would be a comprehensive explanation with best practices, common pitfalls, and practical examples.`,
      codeExample: `// AI-generated code example
// This would be contextually relevant code
console.log("Generated solution for: ${question}")`,
      language: context?.language || "javascript",
      difficulty: "Intermediate",
      tags: this.extractTags(question),
      upvotes: 0,
      timestamp: new Date(),
      relatedQuestions: this.generateRelatedQuestions(question),
      stackContext: context?.stack,
    }

    return newAnswer
  }

  private extractTags(question: string): string[] {
    const commonTags = {
      react: ["React"],
      javascript: ["JavaScript"],
      typescript: ["TypeScript"],
      css: ["CSS"],
      html: ["HTML"],
      node: ["Node.js"],
      express: ["Express"],
      database: ["Database"],
      api: ["API"],
      async: ["Async/Await"],
      promise: ["Promises"],
      error: ["Error Handling"],
      performance: ["Performance"],
      security: ["Security"],
    }

    const tags: string[] = []
    const lowerQuestion = question.toLowerCase()

    Object.entries(commonTags).forEach(([keyword, tagList]) => {
      if (lowerQuestion.includes(keyword)) {
        tags.push(...tagList)
      }
    })

    return tags.length > 0 ? tags : ["General"]
  }

  private generateRelatedQuestions(question: string): string[] {
    // Simple related question generation
    return [
      `What are the best practices for ${question.split(" ").slice(-2).join(" ")}?`,
      `Common mistakes when ${question.toLowerCase().replace("how to ", "")}`,
      `Advanced techniques for ${question.split(" ").slice(-3).join(" ")}`,
    ]
  }

  async getPopularQuestions(category?: string): Promise<AIAnswer[]> {
    let filtered = this.knowledgeBase

    if (category) {
      filtered = this.knowledgeBase.filter(
        (answer) =>
          answer.stackContext?.toLowerCase() === category.toLowerCase() ||
          answer.tags.some((tag) => tag.toLowerCase().includes(category.toLowerCase())),
      )
    }

    return filtered.sort((a, b) => b.upvotes - a.upvotes).slice(0, 10)
  }
}

export const aiEngine = new AIAnswerEngine()
