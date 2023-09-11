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
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayouts;
