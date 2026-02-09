import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Voltunix Casino"
          desc="Casino platform with real backend logic and animations."
          status="Live"
        />
        <ProjectCard
          title="DevSync"
          desc="Developer collaboration & productivity platform."
          status="Upcoming"
        />
      </div>
    </section>
  )
}
