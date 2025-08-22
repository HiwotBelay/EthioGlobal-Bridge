"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Copy, ThumbsUp, Clock, User, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchResult {
  id: string
  title: string
  description: string
  code: string
  language: string
  stack: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  likes: number
  timeAgo: string
  author: string
  tags: string[]
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    title: "How to handle async/await in React useEffect",
    description:
      "Learn the proper way to handle asynchronous operations in React useEffect hooks without causing memory leaks or race conditions.",
    code: `useEffect(() => {
  let isMounted = true;
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      
      if (isMounted) {
        setData(data);
      }
    } catch (error) {
      if (isMounted) {
        setError(error.message);
      }
    }
  };
  
  fetchData();
  
  return () => {
    isMounted = false;
  };
}, []);`,
    language: "javascript",
    stack: ["React", "JavaScript", "TypeScript"],
    difficulty: "Intermediate",
    likes: 234,
    timeAgo: "2 hours ago",
    author: "AI Assistant",
    tags: ["async", "useEffect", "React hooks", "memory leaks"],
  },
  {
    id: "2",
    title: "Next.js API Routes with TypeScript validation",
    description:
      "Create type-safe API routes in Next.js with proper request validation and error handling using Zod schema validation.",
    code: `import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = userSchema.parse(body);
    
    // Process the validated data
    const user = await createUser(validatedData);
    
    return NextResponse.json({ 
      success: true, 
      user 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`,
    language: "typescript",
    stack: ["Next.js", "TypeScript", "Zod"],
    difficulty: "Advanced",
    likes: 189,
    timeAgo: "4 hours ago",
    author: "AI Assistant",
    tags: ["Next.js", "API routes", "TypeScript", "validation", "Zod"],
  },
  {
    id: "3",
    title: "Python FastAPI with async database operations",
    description:
      "Build high-performance API endpoints with FastAPI using async database operations and proper dependency injection.",
    code: `from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import asyncio

app = FastAPI()

async def get_db() -> AsyncSession:
    async with async_session() as session:
        yield session

@app.get("/users/{user_id}")
async def get_user(
    user_id: int, 
    db: AsyncSession = Depends(get_db)
):
    try:
        result = await db.execute(
            select(User).where(User.id == user_id)
        )
        user = result.scalar_one_or_none()
        
        if not user:
            raise HTTPException(
                status_code=404, 
                detail="User not found"
            )
            
        return {"user": user}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )`,
    language: "python",
    stack: ["Python", "FastAPI", "SQLAlchemy"],
    difficulty: "Advanced",
    likes: 156,
    timeAgo: "6 hours ago",
    author: "AI Assistant",
    tags: ["Python", "FastAPI", "async", "database", "SQLAlchemy"],
  },
]

interface SearchResultsProps {
  query: string
}

export function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setResults(
          mockResults.filter(
            (result) =>
              result.title.toLowerCase().includes(query.toLowerCase()) ||
              result.description.toLowerCase().includes(query.toLowerCase()) ||
              result.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
          ),
        )
        setIsLoading(false)
      }, 800)
    } else {
      setResults([])
    }
  }, [query])

  const copyCode = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (!query.trim()) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
        <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Ready to Search</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Ask any coding question and get instant, stack-aware solutions with working code examples.
        </p>
      </motion.div>
    )
  }

  if (isLoading) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-600 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-600 rounded mb-4 w-full"></div>
              <div className="h-32 bg-gray-600 rounded"></div>
            </div>
          </div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      {results.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
          <p className="text-gray-400">Try searching for React, Next.js, Python, or other coding topics.</p>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Found {results.length} AI-powered solutions for "{query}"
          </motion.div>

          <AnimatePresence>
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {result.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      {result.timeAgo}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{result.description}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-400">
                        <User className="w-4 h-4" />
                        {result.author}
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          result.difficulty === "Beginner"
                            ? "bg-green-500/20 text-green-400"
                            : result.difficulty === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {result.difficulty}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-pink-400 hover:bg-pink-500/10"
                      >
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {result.likes}
                      </Button>
                    </div>
                  </div>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Block */}
                <div className="relative">
                  <div className="flex items-center justify-between px-6 py-3 bg-black/30 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Code className="w-4 h-4" />
                      {result.language}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyCode(result.code, result.id)}
                      className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      {copiedId === result.id ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <pre className="p-6 bg-black/50 text-sm text-gray-300 overflow-x-auto">
                    <code>{result.code}</code>
                  </pre>
                </div>

                {/* Tags */}
                <div className="p-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  )
}
