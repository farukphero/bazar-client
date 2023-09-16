import Footer from "@/Components/Shared/Footer/Footer";
import StickyNavbar from "@/Components/Shared/NavBar/NavBar";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

type propsType = {
  children: ReactNode;
};

const MainLayouts = ({ children }: propsType) => {
  return (
    <>
      <StickyNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayouts;
