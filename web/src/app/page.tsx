'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">🏆 Craftly</h1>
        <p className="text-2xl mb-8">Professional Social Network for Services</p>
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  )
}