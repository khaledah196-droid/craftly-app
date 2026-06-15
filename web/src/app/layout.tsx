import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Craftly - Professional Social Network',
  description: 'Connect with professionals in your field',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  )
}