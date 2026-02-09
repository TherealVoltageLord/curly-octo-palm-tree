import Loader from '../components/Loader'
import Hero from '../components/Hero'
import Terminal from '../components/Terminal'
import NowPlaying from '../components/NowPlaying'
import Projects from '../components/Projects'

export default function Page() {
  return (
    <main className="min-h-screen px-5 py-14 max-w-5xl mx-auto">
      <Loader />
      <Hero />
      <Terminal />
      <NowPlaying />
      <Projects />

      <footer className="mt-24 text-xs text-gray-500">
        © {new Date().getFullYear()} Thereal_VoltageLord
      </footer>
    </main>
  )
}
