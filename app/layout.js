import "./globals.css"

export const metadata = {
  title: "NEW MODELS 2024®",
  description:
    "NEW MODELS is a media channel and community addressing the emergent effects of networked technology on culture.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
