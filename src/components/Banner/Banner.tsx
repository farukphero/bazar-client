import SignInModal from "../Modals/SignInModal";
import React, { useRef } from "react";
import SearchBar from "../Shared/SearchBars/SearchBars";
import useTop from "@/hooks/useTop";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Image from "next/image";

const Banner = () => {
  const heightRef = useRef<HTMLDivElement | null>(null);

  useTop(heightRef);

  const { isScrollTop } = useSelector((state: RootState) => state.scroll);

  return (
    <div className="px-10">
      <div className="bg-primary pt-24 px-5 w-full">
        <div className="grid grid-cols-[60%_auto]">
          <div>
            <h1 className="md:text-4xl text-xl font-bold text-white max-w-[500px]">
              Grocery Delivered at your Doorstep
            </h1>
            <div ref={heightRef} className={`max-w-[600px] mt-3 `}>
              <div
                className={` duration-700 ${
                  isScrollTop
                    ? "absolute -top-full left-1/2 -translate-x-1/2"
                    : "static top-0"
                } `}
              >
                <SearchBar value={""} />
              </div>
            </div>
            <p className="text-base font-light py-4 my-4 text-white">
              Banner Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam cumque quisquam voluptatum voluptates tempora perferendis.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="lg:columns-3 md:columns-2 ">
              <div className="h-[350px]  flex items-center">
                <Image
                  src={require("../../images/bg (1).jpg")}
                  width={300}
                  height={400}
                  alt="bg"
                  className="rounded-xl mb-5 h-[250px] "
                />
              </div>
              <div>
                <Image
                  src={require("../../images/bg (3).jpg")}
                  width={200}
                  height={400}
                  alt="bg"
                  className="rounded-xl mb-5 hidden lg:block "
                />
              </div>
              <div>
                <Image
                  src={require("../../images/bg (4).jpg")}
                  width={300}
                  height={400}
                  alt="bg"
                  className="rounded-xl mb-5 h-[200px] "
                />
              </div>
              <div>
                <Image
                  src={require("../../images/bg (5).jpg")}
                  width={300}
                  height={400}
                  alt="bg"
                  className="rounded-xl mb-5"
                />
              </div>
              <div>
                <Image
                  src={require("../../images/bg (6).jpg")}
                  width={300}
                  height={400}
                  alt="bg"
                  className="rounded-xl mb-5 hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
