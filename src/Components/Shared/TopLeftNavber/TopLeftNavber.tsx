import NavLinks from "./NavLinks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineGlobal } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { digitalContentLinks, programFeaturesLinks, shopByDepartmentLinks } from "./Links";

const TopLeftNavber = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" w-full absolute  bg-gray-900 ">
        <div className="flex items-center font-medium justify-between">
          <div className="z-50 p-3 md:w-auto w-full flex  items-center gap-4 ">
            <div className=" text-white  flex items-center gap-2">
              {open ? null : (
                <span
                  className={`text-2xl ${open ? "hidden" : ""}`}
                  onClick={() => setOpen(!open)}
                >
                  <RxHamburgerMenu />
                </span>
              )}
              {open ? (
                <span
                  className="relative text-2xl left-[340px]  "
                  onClick={() => setOpen(!open)}
                >
                  <MdClose />
                </span>
              ) : null}
              <span className="text-sm font-semibold"> All</span>
            </div>
            <ul className="flex items-center gap-4 text-white text-sm font-semibold">
              <li>{`Today's Deals`}</li>
              <li>Customer Service</li>
              <li>Registry</li>
              <li>Gift Cards</li>
              <li>Sell</li>
            </ul>
          </div>
          <div>
            <ul
              className={`
         bg-white fixed w-[350px] top-0 overflow-y-auto bottom-0 
        duration-500 pb-20 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <div className="py-3 bg-slate-800 text-white pl-8 flex items-center ">
                <span className="text-2xl pr-2">
                  <RxAvatar />
                </span>
                <span className="text-xl font-bold">Hello, sign in</span>
              </div>
              {/* -------------- First Section ------------------ */}
              <li className="">
                <Link
                  href="/"
                  className="py-3 inline-block pl-8 text-xl font-bold"
                >
                  Digital Content & Devices
                </Link>
              </li>
              <NavLinks open={open} links={digitalContentLinks} />
              {/*---------- End of First Section ------------- */}
              {/* -------------- Secend Section ------------------ */}
              <li>
                <Link
                  href="/"
                  className="py-3 inline-block pl-8 text-xl font-bold"
                >
                  Shop By Department
                </Link>
              </li>

              <NavLinks open={open} links={shopByDepartmentLinks} />
              {/*---------- End of secend Section ------------- */}
              {/* -------------- Third Section ------------------ */}
              <li>
                <Link
                  href="/"
                  className="py-3 inline-block pl-8 text-xl font-bold"
                >
                  Programs & Features
                </Link>
              </li>

              <NavLinks open={open} links={programFeaturesLinks} />
              {/*---------- End of Third Section ------------- */}
              {/* -------------- Four Section ------------------ */}
              <li>
                <Link
                  href="/"
                  className="py-3 inline-block pl-8 text-xl font-bold"
                >
                  Help & Settings
                </Link>
              </li>

              <h1 className="py-2 hover:bg-slate-200 px-8 text-base font-normal">
                Your Account
              </h1>
              <h1 className="py-2 flex items-center gap-2 hover:bg-slate-200 px-8 text-base font-normal">
                <span className="text-xl">
                  <AiOutlineGlobal />
                </span>{" "}
                English
              </h1>
              <h1 className="py-2 flex items-center gap-2 hover:bg-slate-200 px-8 text-base font-normal">
                <span className="text-xl text-red-800">
                  <LiaFlagUsaSolid />
                </span>{" "}
                United States
              </h1>
              <h1 className="py-2 hover:bg-slate-200 px-8 text-base font-normal">
                Customer Service
              </h1>
              <h1 className="py-2 hover:bg-slate-200 px-8 text-base font-normal">
                Sign in
              </h1>
              {/*---------- End of Four Section ------------- */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopLeftNavber;
