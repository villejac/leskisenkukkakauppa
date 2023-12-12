import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "@/app/components/Footer"
import ContactBox from './components/ContactBox'
import PcNav from './components/PcNav'
import MobileNav from './components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Konehuolto J. Filppula',
  description: 'Tarjoamme huolto- ja korjauspalveluja maatalouden ja koneurakoinnin tarpeisiin.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <div className="block lg:hidden">
          <MobileNav />
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <div className="bg-[url('/Valtra_Q_Series.jpg')] bg-cover h-96 bg-center mt-5"></div>
          <div className="mt-2 hidden lg:block">
            <PcNav />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
            <div className="md:col-span-8">
              {children}
            </div>
            <div className="md:col-span-4">
              <ContactBox />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
