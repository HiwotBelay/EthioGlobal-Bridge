"use client"

import { useAuth } from "@/lib/auth-context"
import { EthiopianAnimeWelcome } from "@/components/ethiopian-anime-welcome"
import { EthiopianEducationPlatform } from "@/components/ethiopian-education-platform"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function HomePage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50">
        <LoadingSpinner />
      </div>
    )
  }

  return user ? <EthiopianEducationPlatform /> : <EthiopianAnimeWelcome />
}
