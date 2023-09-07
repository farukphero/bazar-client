import Image from "next/image";
import { Inter } from "next/font/google";
import { StickyNavbar } from "./components/shared/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import FaqSection from "./components/CommonQns/FaqSection";

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
