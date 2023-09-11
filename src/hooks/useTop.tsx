import { scrollBottom, scrollTop } from "@/redux/features/scroll/scrollSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useTop = (heightRef: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (heightRef.current) {
        const current = heightRef.current;
        // 48 is navbar height
        const top_element = current.offsetTop - 48;
        const bottom_element = current.offsetTop + current.clientHeight - 48;

        const top_screen = window.scrollY;
        const bottom_screen = window.scrollY + window.innerHeight;

        if (top_element <= parseInt(top_screen.toFixed())) {
          dispatch(scrollTop());
        } else if (bottom_element >= parseInt(top_screen.toFixed())) {
          dispatch(scrollBottom());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useTop;
