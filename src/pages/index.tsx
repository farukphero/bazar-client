 
import Banner from '@/components/Banner/Banner'

const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <div className='py-96'></div>
    </div>
  )
 
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Banner from "@/Components/Banner/Banner";
import FaqSection from "@/Components/CommonQns/FaqSection";
import ProductCart from "@/Components/Cart/ProductCart";
 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <button
        className="btn bg-primary text-white fixed right-0 m-auto"
        onClick={() => setOpenCart(!openCart)}
      >
        view cart
      </button>
      <Banner></Banner>
      <FaqSection />
      <ProductCart openCart={openCart} setOpenCart={setOpenCart}></ProductCart>
    </main>
  );
 
}

export default Home