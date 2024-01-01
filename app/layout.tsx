import type { Metadata } from 'next'
import Head from 'next/head'
import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LaVita',
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
      </body>
    </html>
  )
}
