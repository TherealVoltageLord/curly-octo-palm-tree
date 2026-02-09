import { motion } from 'framer-motion'

export default function ProjectCard({
  title,
  desc,
  status,
}: {
  title: string
  desc: string
  status: string
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-[#111118] border border-[#1f1f2a] rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
      <span className="text-indigo-400 text-xs mt-4 inline-block">
        {status}
      </span>
    </motion.div>
  )
}
