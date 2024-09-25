import "./globals.css"
import "./modifiers.css"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata = {
  title: "NEW MODELS 2024®",
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
      <GoogleAnalytics gaId="GTM-KNRX8VRH" />
    </html>
  )
}
