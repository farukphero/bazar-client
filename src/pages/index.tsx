import Banner from "@/Components/Banner/Banner";
import ProductCart from "@/Components/Cart/ProductCart";
import FaqSection from "@/Components/CommonQns/FaqSection";
import { Inter } from "next/font/google";
import { useState } from "react";
import { HiShoppingBag } from "react-icons/hi2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <button
        className={`p-2 bg-primary rounded text-white fixed top-1/2 right-0 z-50 ${openCart ? "hidden" : "block"}`}
        onClick={() => setOpenCart((prev) => !prev)}
      >
        <span className="flex flex-col justify-center items-center gap-2">
          <HiShoppingBag style={{ fontSize: "2rem" }} />
          <span className="text-sm">VIEW CART</span>
        </span>
      </button>
      <Banner></Banner>
      <FaqSection />
      <ProductCart openCart={openCart} setOpenCart={setOpenCart}></ProductCart>
    </main>
  );
}
