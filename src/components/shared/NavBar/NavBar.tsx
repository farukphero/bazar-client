import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { ModalRelatedContext } from "../../Context/ModalRelatedContext";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBars/SearchBars";

const NavBar = () => {
  const { signInModal, setSignInModal, handleOpenSignInModal }: any =
    useContext(ModalRelatedContext);
  const router = useRouter();
  const [openNav, setOpenNav] = React.useState(false);
  const [isScrollTop, setIsScrollTop] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Pages
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Account
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Blocks
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Docs
        </Link>
      </Typography>
    </ul>
  );

  const handleSignInOpen = () => {
    setSignInModal(true);

    handleOpenSignInModal();
  };
  return (
    <div className=" max-h-[768px] w-full ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-primary">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href={"/"}>
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 text-white text-2xl font-bold"
            >
              Bazar
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Link href={"/signIn"}>
              <Button
                onClick={handleSignInOpen}
                size="sm"
                className="hidden lg:inline-block bg-secondary"
              >
                <span>Sign In</span>
              </Button>
            </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit    lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button
            onClick={handleSignInOpen}
            size="sm"
            fullWidth
            className="mb-2 bg-secondary"
          >
            <span>Sign In</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
