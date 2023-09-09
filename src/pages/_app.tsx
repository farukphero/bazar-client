import "@/styles/globals.css";
import type { AppProps } from "next/app";
 
import { StickyNavbar } from "@/Components/Shared/NavBar/NavBar";
import StateInformation from "@/Components/Context/ModalRelatedContext";
 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateInformation>
      <StickyNavbar></StickyNavbar>
      <Component {...pageProps} />
    </StateInformation>
  );
}
