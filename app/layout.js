import Navigation from '<>/components/Navigation'
import '../styles/globals.css'
import '../styles/star-bg.css'
import BgStar from '<>/components/BgStar'
import Theme from '<>/components/Theme'
import Footer from '<>/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Jonatan P</title>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/Jonvtvn/Jonvtvn.github.io/main/logo/Logo-jp-sin-fondo.png" />
      </head>
      <body className='bg-neutral-900'>
        <Navigation />
        <BgStar />
        <Theme />
        {children}
        <Footer />
      </body>
    </html>
  )
}
