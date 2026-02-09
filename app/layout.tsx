import './globals.css'

export const metadata = {
  title: 'Thereal_VoltageLord ⚡',
  description: 'Frontend Developer · Python Dev · Breaking Limits',
  openGraph: {
    title: 'Thereal_VoltageLord',
    description: 'Breaking limits with code ⚡',
    images: ['/launcher_1765346563997.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
