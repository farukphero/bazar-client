import React, { useEffect, useRef } from "react";
import SearchBar from "../shared/SearchBar/SearchBar";
import useTop from "@/hooks/useTop";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const Banner = () => {
  const heightRef = useRef<HTMLDivElement | null>(null);

  useTop(heightRef);

  const {isScrollTop} = useSelector((state: RootState)=> state.scroll )
  

  return (
    <div className="bg-primary py-28 px-5">
      <h1 className="md:text-4xl text-xl font-bold text-white max-w-[500px]">
        Grocery Delivered at your Doorstep
      </h1>
      <div ref={heightRef} className={`max-w-[600px] mt-3 `}>
      <div className={` duration-700 ${isScrollTop ?"absolute -top-full left-1/2 -translate-x-1/2":"static top-0"} `}>
      <SearchBar value={""} />
      </div>
      </div>
    </div>
  );
};

export default Banner;
