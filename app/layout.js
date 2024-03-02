import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "@/app/components/Footer"
import PcNav from './components/PcNav'
import MobileNav from './components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
    template: '%s | Leskisen kukkakauppa',
    default: 'Leskisen kukkakauppa',
  },
  description: 'Tervetuloa Kauniiden Kukkien maailmaan Ylihärmässä! Tarjoamme kukkakimput, hautalaitteet, juhlakoristelut ja morsiussidonnat. Tilaa nyt raikkaat kukat kaikkiin tilaisuuksiin!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen md:bg-[url('/taustakuva.jpg')] bg-cover bg-no-repeat bg-fixed bg-gradient-to-r from-fuchsia-300 via-pink-300 to-pink-500`}>
        <div className="block lg:hidden mt-28">
          <MobileNav />
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <div className="mt-5 hidden lg:block">
            <PcNav />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
            <div className="col-span-12">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
