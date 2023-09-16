import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

type propsType = {
    value: string | string[] | undefined
}
const SearchBar = ({value}:propsType) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");


  //   ------- Redrict search page, When type a letter
  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(e.target.value)
    router.push({ pathname: `/search/${e.target.value}` });
  };


  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if(searchValue === ""){
        if(event.key === "Backspace"){
            router.push({ pathname: `/search` });
        }
    }
  }

  return (
    <div className="flex border-2 rounded">
      <input
        onChange={handleSearchValue}
        onKeyDown={keyDownHandler}
        type="text"
        className="px-4 py-2 w-full outline-none border-none"
        placeholder="Search..."
        defaultValue={value}
      />
      <button className="flex items-center justify-center px-4 border-l bg-white">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
