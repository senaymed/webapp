import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/LanguageContext"

export const metadata = {
  title: "SenayMed - Empowering Health Access in Ethiopia",
  description:
    "Search for drugs, explore traditional medicine, find hospitals, and get AI-powered health info — all in your language, online or offline.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/senaymed.png" type="image/png" />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
