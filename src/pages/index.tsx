import Image from "next/image";
import { Inter } from "next/font/google";
import { StickyNavbar } from "./components/shared/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import FaqSection from "./components/CommonQns/FaqSection";
import ProductCart from "./components/Cart/ProductCart";
import { useState } from "react";

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
