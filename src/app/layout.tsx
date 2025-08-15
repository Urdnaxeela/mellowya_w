import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mellowya W',
  description: 'Generate the perfect song for the moments that matter',
  openGraph: {
    title: 'Mellowya W',
    description: 'Generate the perfect song for the moments that matter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mellowya W',
    description: 'Generate the perfect song for the moments that matter',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
