import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

export const metadata: Metadata = {
  title: "Res Novae",
  description: "Découvrez nos rénovations d'appartements",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="text-white">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}

