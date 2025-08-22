import type React from "react"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <title>Ethiopian Education Bridge - Empowering Students for Global Success</title>
        <meta
          name="description"
          content="Connect Ethiopian students with global opportunities, scholarships, and mentorship. Bridge the gap between local education and international standards."
        />
        <meta
          name="keywords"
          content="Ethiopian education, scholarships, global opportunities, mentorship, university applications"
        />
      </head>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
