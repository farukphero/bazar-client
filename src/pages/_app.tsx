import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StateInformation from "./components/Context/ModalRelatedContext";

import TopLeftNavber from "./components/shared/TopLeftNavber/TopLeftNavber";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StateInformation>
        <TopLeftNavber />

        <Component {...pageProps} />
      </StateInformation>
    </>
  );
}
