import { useState } from "react";

import Banner from "@/Components/Banner/Banner";
import ProductCart from "@/Components/Cart/ProductCart";
import FaqSection from "@/Components/CommonQns/FaqSection";
import { Inter } from "next/font/google";
import CustomSlider from "@/Components/Shared/Slider/CustomSlider";
import Title from "@/Components/Shared/Title/Title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <main className={`  ${inter.className}`}>
      <button
        className={`p-2 bg-primary rounded text-white fixed top-1/2 right-0 z-50 ${openCart ? "hidden" : "block"}`}
        onClick={() => setOpenCart((prev) => !prev)}
      >
        <span className="flex flex-col justify-center items-center gap-2">
          <HiShoppingBag style={{ fontSize: "2rem" }} />
          <span className="text-sm">VIEW CART</span>
        </span>
      </button>
      <Banner />
      <section className="px-5 w-full mt-10 relative">
        <Title/>
        <div className="mt-5"><CustomSlider /></div>
      </section>
      <FaqSection />
      <ProductCart openCart={openCart} setOpenCart={setOpenCart} />
    </main>
  );
}
