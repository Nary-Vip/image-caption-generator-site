import './globals.css'

export const metadata = {
  title: 'Nary Captioner',
  description: 'A website to caption your images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
