import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex items-center gap-6 mb-20">
      <Image src="/launcher_1765346563997.jpg" alt="Volt" width={90} height={90} />
      <div>
        <h1 className="text-4xl font-bold">Thereal_VoltageLord ⚡</h1>
        <p className="text-gray-400">
          Frontend Developer · Python Dev · Breaking Limits
        </p>
      </div>
    </section>
  )
}
