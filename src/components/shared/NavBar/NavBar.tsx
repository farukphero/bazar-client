import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Logo from "../Logo/Logo";
import { ModalRelatedContext } from "@/Components/Context/ModalRelatedContext";
import Link from "next/link";
import SearchBar from "../SearchBars/SearchBars";

const NavBar = () => {
  const { signInModal, setSignInModal, handleOpenSignInModal }: any =
    useContext(ModalRelatedContext);
  const router = useRouter();

  const [openNav, setOpenNav] = React.useState(false);

  const { isScrollTop } = useSelector((state: RootState) => state.scroll);
  const handleSignInOpen = () => {
    setSignInModal(true);
    handleOpenSignInModal();
  };
  return (
    <nav className="sticky top-0 z-10 px-5 w-full h-12 flex items-center justify-between  bg-primary ">
      <div>
        <Logo />
      </div>
      <div
        className={` ${
          router.pathname === "/search/[id]" ||
          router.pathname === "/search" ||
          isScrollTop === true
            ? "visible static top-0  duration-700 max-w-[700px] w-full"
            : "invisible absolute top-full left-1/2 -translate-x-1/2"
        } `}
      >
        <SearchBar value={router?.query?.id} />
      </div>
      <Link href={"/signIn"}>
        <button
          onClick={handleSignInOpen}
          className="text-lg font-semibold bg-red-700 text-white px-5 py-1"
        >
          Sign In
        </button>
      </Link>
     
    </nav>
  );
};

export default NavBar;
