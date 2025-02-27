import "./globals.css"
import "./modifiers.css"
import { GoogleAnalytics } from "@next/third-parties/google"

const date = new Date().toLocaleDateString("en-gb", {
  year: "numeric",
})

export const metadata = {
  title: "NEW MODELS " + date + "®",
  description:
    "NEW MODELS is a media channel and community addressing the emergent effects of networked technology on culture.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-F5JDCZV673" />
    </html>
  )
}
