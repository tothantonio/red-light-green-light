import type {Metadata} from 'next'
import './globals.css'

export const metadata = {
  title: 'Red-light-green-light',
  description: 'Squid Game Typing Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
