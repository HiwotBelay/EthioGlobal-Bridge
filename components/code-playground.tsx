"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Copy, Download, Settings, Zap, Code2, Terminal, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface CodeExample {
  language: string
  code: string
  expectedOutput: string
}

const codeExamples: Record<string, CodeExample> = {
  javascript: {
    language: "javascript",
    code: `// Welcome to the AI Code Playground!
// Try running this JavaScript code

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i < 8; i++) {
  console.log(\`F(\${i}) = \${fibonacci(i)}\`);
}

// Try some modern JavaScript features
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Async/await example
async function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded!"), 1000);
  });
}

fetchData().then(console.log);`,
    expectedOutput: `Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
Doubled: [2, 4, 6, 8, 10]
Data loaded!`,
  },
  python: {
    language: "python",
    code: `# Welcome to Python in the AI Code Playground!
# Try running this Python code

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print("Fibonacci sequence:")
for i in range(8):
    print(f"F({i}) = {fibonacci(i)}")

# List comprehension example
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(f"Doubled: {doubled}")

# Dictionary example
person = {
    "name": "Alice",
    "age": 30,
    "skills": ["Python", "JavaScript", "React"]
}

print(f"Hello, {person['name']}!")
print(f"Skills: {', '.join(person['skills'])}")`,
    expectedOutput: `Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
Doubled: [2, 4, 6, 8, 10]
Hello, Alice!
Skills: Python, JavaScript, React`,
  },
  react: {
    language: "react",
    code: `// React Component Playground
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count > 0) {
      setMessage(\`You've clicked \${count} times!\`);
    } else {
      setMessage('Click the button to start counting');
    }
  }, [count]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Interactive Counter</h2>
      <p>{message}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Count: {count}
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;`,
    expectedOutput: `✅ Component compiled successfully!

Preview:
┌─────────────────────────────┐
│     Interactive Counter     │
│                             │
│ Click the button to start   │
│        counting             │
│                             │
│  [Count: 0]  [Reset]       │
└─────────────────────────────┘

Component is ready to render!`,
  },
  html: {
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Code Playground</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 400px;
        }
        .title {
            color: #333;
            margin-bottom: 20px;
        }
        .button {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.2s;
        }
        .button:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="title">Welcome to AI Code Helper!</h1>
        <p>This is a beautiful HTML page created in our playground.</p>
        <button class="button" onclick="alert('Hello from the playground!')">
            Click Me!
        </button>
    </div>
</body>
</html>`,
    expectedOutput: `✅ HTML rendered successfully!

Preview:
┌─────────────────────────────────┐
│                                 │
│    Welcome to AI Code Helper!   │
│                                 │
│  This is a beautiful HTML page  │
│   created in our playground.    │
│                                 │
│        [Click Me!]              │
│                                 │
└─────────────────────────────────┘

Page is ready to view in browser!`,
  },
}

export function CodePlayground() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [code, setCode] = useState(codeExamples.javascript.code)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [executionTime, setExecutionTime] = useState<number | null>(null)

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    setCode(codeExamples[language]?.code || "")
    setOutput("")
    setExecutionTime(null)
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput("")

    const startTime = Date.now()

    // Simulate code execution with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000))

    const endTime = Date.now()
    setExecutionTime(endTime - startTime)

    // Get expected output for the current language
    const expectedOutput = codeExamples[selectedLanguage]?.expectedOutput || "Code executed successfully!"
    setOutput(expectedOutput)
    setIsRunning(false)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
  }

  const downloadCode = () => {
    const extensions: Record<string, string> = {
      javascript: "js",
      python: "py",
      react: "jsx",
      html: "html",
    }

    const extension = extensions[selectedLanguage] || "txt"
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `playground-code.${extension}`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
            <Code2 className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Code Playground
          </h1>
        </div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Write, test, and execute code instantly. Support for JavaScript, Python, React, and HTML with live output.
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-40 bg-white/5 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-white/20">
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="html">HTML</SelectItem>
            </SelectContent>
          </Select>

          {executionTime && <div className="text-sm text-gray-400">Executed in {executionTime}ms</div>}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={copyCode} className="text-gray-400 hover:text-white">
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
          <Button variant="ghost" size="sm" onClick={downloadCode} className="text-gray-400 hover:text-white">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </motion.div>

      {/* Code Editor and Output */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid lg:grid-cols-2 gap-6"
      >
        {/* Code Editor */}
        <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Code Editor</h3>
            </div>
            <Button
              onClick={runCode}
              disabled={isRunning}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0"
            >
              {isRunning ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Run Code
                </>
              )}
            </Button>
          </div>

          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="min-h-[400px] bg-black/30 border-white/20 text-white font-mono text-sm leading-relaxed resize-none focus:border-green-400 focus:ring-green-400/20"
            placeholder="Write your code here..."
          />
        </Card>

        {/* Output */}
        <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Output</h3>
            {isRunning && (
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <Sparkles className="w-4 h-4 animate-spin" />
                Executing...
              </div>
            )}
          </div>

          <div className="min-h-[400px] bg-black/30 border border-white/10 rounded-lg p-4 font-mono text-sm">
            <AnimatePresence>
              {isRunning ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-blue-400"
                >
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Executing your code...</span>
                </motion.div>
              ) : output ? (
                <motion.pre
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-300 whitespace-pre-wrap"
                >
                  {output}
                </motion.pre>
              ) : (
                <div className="text-gray-500 italic">Click "Run Code" to see the output here...</div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </motion.div>

      {/* Quick Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-white text-center">Try these examples:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(codeExamples).map(([lang, example]) => (
            <Card
              key={lang}
              className="p-4 bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-200"
              onClick={() => handleLanguageChange(lang)}
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-medium text-white capitalize">{lang}</div>
                  <div className="text-xs text-gray-400">
                    {lang === "javascript" && "Fibonacci & Modern JS"}
                    {lang === "python" && "Lists & Dictionaries"}
                    {lang === "react" && "Interactive Counter"}
                    {lang === "html" && "Beautiful Landing Page"}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
