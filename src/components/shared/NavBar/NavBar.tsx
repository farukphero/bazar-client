import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const router = useRouter();

  const [openNav, setOpenNav] = React.useState(false);

  const { isScrollTop } = useSelector((state: RootState) => state.scroll);

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
        <SearchBar value={router.query.id} />
      </div>
      <button className="text-lg font-semibold bg-red-700 text-white px-5 py-1">
        Log in
      </button>
    </nav>
  );
};

export default NavBar;
