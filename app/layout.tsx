import type { Metadata } from 'next'
import Head from 'next/head'
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pousada La Vita - São Miguel dos Milagres - AL',
  description: 'Pousada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Pousada La Vita</title>
        <meta name="robots" content="all" />
      </Head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
