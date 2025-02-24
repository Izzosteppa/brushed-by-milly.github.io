import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display as PlayfairDisplay, Montserrat } from "next/font/google"
import "./globals.css"

const playfair = PlayfairDisplay({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brushed by Milly - Beauty & Style",
  description: "Professional nail care and beauty services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#FDF8F7]`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'