import { NextResponse } from 'next/server'

const TOKEN = 'https://accounts.spotify.com/api/token'
const NOW = 'https://api.spotify.com/v1/me/player/currently-playing'

async function getToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const res = await fetch(TOKEN, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  })

  return res.json()
}

export async function GET() {
  const { access_token } = await getToken()

  const res = await fetch(NOW, {
    headers: { Authorization: `Bearer ${access_token}` },
  })

  if (res.status === 204) return NextResponse.json(null)

  const data = await res.json()

  return NextResponse.json({
    title: data.item.name,
    artist: data.item.artists.map((a: any) => a.name).join(', '),
    albumArt: data.item.album.images[0].url,
    progress:
      (data.progress_ms / data.item.duration_ms) * 100,
  })
}
