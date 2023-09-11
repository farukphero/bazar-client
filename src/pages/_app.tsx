 

import MainLayouts from "@/layouts/MainLayouts/MainLayouts";
import { store } from "@/redux/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <MainLayouts>
      <Component {...pageProps} />
    </MainLayouts>
    </Provider>
 
import "@/styles/globals.css";
import type { AppProps } from "next/app";
 
import { StickyNavbar } from "@/Components/Shared/NavBar/NavBar";
import StateInformation from "@/Components/Context/ModalRelatedContext";
 

import TopLeftNavber from "../Components/Shared/TopLeftNavber/TopLeftNavber";
 

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
