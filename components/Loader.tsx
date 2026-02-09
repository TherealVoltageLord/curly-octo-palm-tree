'use client'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.pre
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-indigo-400 text-sm mb-12 font-mono"
    >
{`⚡ Thereal_VoltageLord ⚡
Booting system...
Loading modules...
`}
    </motion.pre>
  )
}
