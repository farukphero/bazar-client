import Image from 'next/image'
import { Inter } from 'next/font/google'
import { StickyNavbar } from './components/shared/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
     <StickyNavbar></StickyNavbar>
    </main>
  )
}
