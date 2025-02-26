import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Animation Demo',
  description: 'HKTVmall',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
