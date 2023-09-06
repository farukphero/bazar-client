import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StateInformation from "./components/Context/ModalRelatedContext";
import { StickyNavbar } from "./components/shared/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateInformation>
      <StickyNavbar></StickyNavbar>
      <Component {...pageProps} />
    </StateInformation>
  );
}
