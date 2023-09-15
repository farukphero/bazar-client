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
        className="btn bg-primary text-white fixed right-0 m-auto"
        onClick={() => setOpenCart(!openCart)}
      >
        view cart
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
