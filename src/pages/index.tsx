import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/Components/Banner/Banner";
import FaqSection from "@/Components/CommonQns/FaqSection";
 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <Banner></Banner>
      <FaqSection />
    </main>
  );
}
