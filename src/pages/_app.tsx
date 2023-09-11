import StateInformation from "@/Components/Context/ModalRelatedContext";
import TopLeftNavber from "@/Components/Shared/TopLeftNavber/TopLeftNavber";
import MainLayouts from "@/layouts/MainLayouts/MainLayouts";
import { store } from "@/redux/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
        <StateInformation>
    <Provider store={store}>
      <MainLayouts>
          <TopLeftNavber />
          <Component {...pageProps} />
      </MainLayouts>
    </Provider>
        </StateInformation>
  );
}
