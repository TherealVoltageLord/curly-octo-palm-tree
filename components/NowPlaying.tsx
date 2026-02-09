'use client'
import { useEffect, useState } from 'react'

export default function NowPlaying() {
  const [track, setTrack] = useState<any>(null)

  useEffect(() => {
    fetch('/api/spotify')
      .then(res => res.json())
      .then(setTrack)
  }, [])

  return (
    <section className="bg-[#111118] border border-[#1f1f2a] rounded-xl p-6 mb-20">
      <p className="text-xs text-gray-400 mb-2">Now Playing</p>

      {track ? (
        <div className="flex items-center gap-4">
          <img src={track.albumArt} className="w-14 h-14 rounded" />
          <div>
            <p className="font-semibold">{track.title}</p>
            <p className="text-sm text-gray-400">{track.artist}</p>
            <a
              href={track.url}
              target="_blank"
              className="text-indigo-400 text-xs"
            >
              Open Spotify
            </a>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Not playing</p>
      )}
    </section>
  )
}
