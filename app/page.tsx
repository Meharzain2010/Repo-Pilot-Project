'use client'
import Link from 'next/link'
import Image from 'next/image'
import HexBackground from '../components/HexBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HexBackground />

      {/* 🔹 Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/backgrounds/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* 🔹 Iridescent background logo (your old effect) */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.8] h-full w-[40vw] max-w-md iridescent-logo"
          style={{ left: '83.3%' }}
        />
      </div>

      {/* 🔹 Content */}
      <div className="relative z-10 p-6 max-w-4xl mx-auto space-y-10 fade-in-fast text-center">
        {/* Hero */}
        <div>
          <h1 className="text-6xl font-extrabold tracking-tight">
            <span className="text-sky-400">REPO</span>
            <span className="text-white">pilot</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Your AI-powered co-pilot to{' '}
            <span className="text-sky-400 font-medium">manage, navigate</span>{' '}
            and <span className="text-sky-400 font-medium">automate repositories</span> effectively 🚀
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/ingest"
            className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition shadow-lg"
          >
            Ingest Project Data
          </Link>
          <Link
            href="/roaster"
            className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition shadow-lg"
          >
            Roast the Team
          </Link>
          <Link
            href="/toolset"
            className="group relative overflow-hidden rounded-xl px-6 py-3 font-medium text-white shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-500 transition-opacity group-hover:opacity-90" />
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-sky-400/50" />
            <span className="relative">REPO Mission Control</span>
          </Link>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-zinc-400 text-base leading-relaxed">
          <p>
            <span className="font-semibold text-sky-400">REPOpilot</span> streamlines onboarding,
            reveals integration gaps, highlights risks, and suggests next steps
            so your team can stay focused on building 🚀.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 text-sm text-zinc-300 bg-zinc-900/50 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Image src="https://logo.clearbit.com/openai.com" alt="OpenAI" width={28} height={28} className="rounded" />
            <span>LLM insights by OpenAI</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/aimlapi.svg" alt="AI/ML API" width={28} height={28} className="rounded" />
            <span>Data APIs via aimlapi.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="https://logo.clearbit.com/vercel.com" alt="Vercel" width={28} height={28} className="rounded" />
            <span>Edge deploys on Vercel</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="https://logo.clearbit.com/github.com" alt="GitHub" width={28} height={28} className="rounded" />
            <span>Repo intel by GitHub</span>
          </div>
        </div>
      </div>
    </main>
  )
}
