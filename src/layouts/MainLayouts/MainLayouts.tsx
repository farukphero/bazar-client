import TopLeftNavber from "@/Components/Shared/TopLeftNavber/TopLeftNavber";
import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/NavBar/NavBar";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

type propsType = {
  children: ReactNode;
};

const MainLayouts = ({ children }: propsType) => {
  return (
    <>
      <NavBar />
      <TopLeftNavber />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayouts;
