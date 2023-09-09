import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxAvatar, RxArrowLeft } from "react-icons/rx";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
export default function NavLinks({ open, links }) {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="border-b-2 ">
      <div>
        {links.slice(0, 4).map((link, index) => (
          <div key={index} className="">
            {/* start 1st nav section */}
            <div className="text-left md:cursor-pointer group">
              <h1
                className="py-2 flex justify-between items-center group hover:bg-slate-200 px-8 text-base font-normal "
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {/* 1st nav ittems name */}
                {link.name}
                <span className="text-xl font-normal  inline">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </h1>
            </div>
            {/* End of 1st nav section*/}
            {/* start 2nd nav section */}
            <div
              className={`  
              
                    ${
                      heading === link.name
                        ? `overflow-y-auto bottom-0 bg-white fixed w-[350px] top-0 left-0  ${
                            heading ? "left-0" : "left-[-100%]"
                          } `
                        : "hidden"
                    }
                  `}
            >
              <div className="py-3 bg-slate-800 text-white pl-8 flex items-center ">
                <span className="text-2xl pr-2">
                  <RxAvatar />
                </span>
                <span className="text-xl font-bold">Hello, sign in</span>
              </div>
              <div
                className="py-3 pl-7 text-base font-semibold flex items-center hover:bg-slate-200"
                onClick={() => setHeading("")}
              >
                <span className="text-xl font-normal pr-2">
                  <RxArrowLeft />
                </span>
                MAIN MENU
              </div>
              <h1 className="py-2 pl-8 text-xl font-bold border-t-2 ">
                Stream Music
              </h1>
              {link?.sublinks?.map((slinks, index) => (
                <div key={index}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="hover:bg-slate-200 py-2 pl-8 text-base font-normal md:pr-0 pr-5 flex justify-between items-center "
                    >
                      {/* 2nd nav ittems name */}
                      {slinks?.Head}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            {/* End of 2nd nav section*/}
          </div>
        ))}
      </div>
      {/* -------------------------------------------
             Start Condition for See All Menu 
      ----------------------------------------------*/}
      {links.length >= 5 ? (
        <h1
          className=" hover:bg-slate-200 px-8 text-base font-normal "
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? null : (
            <span className="flex items-center gap-1 py-2">
              See All{" "}
              <span className="text-2xl font-medium">
                <MdKeyboardArrowDown />
              </span>
            </span>
          )}
        </h1>
      ) : null}
      {/* End of Condition for See All Menu */}
      {seeMore ? (
        <div className="duration-700">
          <div className="border-t-2 ml-8"> </div>
          {seeMore ? (
            <>
              {links.slice(4).map((link, index) => (
                <div key={index} className="">
                  {/* start 1st nav section */}
                  <div className="text-left md:cursor-pointer group">
                    <h1
                      className="py-2 px-8  flex justify-between items-center group hover:bg-slate-200  text-base font-normal"
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading("");
                        setSubHeading("");
                      }}
                    >
                      {/* 1st nav ittems name */}
                      {link.name}
                      <span className="text-xl font-normal  inline">
                        <MdOutlineKeyboardArrowRight />
                      </span>
                    </h1>
                  </div>
                  {/* End of 1st nav section*/}
                  {/* start 2nd nav section */}
                  <div
                    className={`  
              
                    ${
                      heading === link.name
                        ? `overflow-y-auto bottom-0   duration-900 bg-white fixed w-[350px] top-0 left-0  ${
                            open ? "left-0" : "left-[-100%]"
                          } `
                        : "hidden"
                    }
                  `}
                  >
                    <div className="py-3 bg-slate-800 text-white pl-8 flex items-center ">
                      <span className="text-2xl pr-2">
                        <RxAvatar />
                      </span>
                      <span className="text-xl font-bold">Hello, sign in</span>
                    </div>
                    <div
                      className="py-3 pl-7 text-base font-semibold flex items-center hover:bg-slate-200"
                      onClick={() => setHeading("")}
                    >
                      <span className="text-xl font-normal pr-2">
                        <RxArrowLeft />
                      </span>
                      MAIN MENU
                    </div>
                    <h1 className="py-2 pl-8 text-xl font-bold border-t-2 ">
                      Stream Music
                    </h1>
                    {link?.sublinks?.map((slinks, index) => (
                      <div key={index}>
                        <div>
                          <h1
                            onClick={() =>
                              subHeading !== slinks.Head
                                ? setSubHeading(slinks.Head)
                                : setSubHeading("")
                            }
                            className="hover:bg-slate-200 py-2 pl-8 text-base font-normal md:pr-0 pr-5 flex justify-between items-center "
                          >
                            {/* 2nd nav ittems name */}
                            {slinks?.Head}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End of 2nd nav section*/}
                </div>
              ))}
            </>
          ) : null}
        </div>
      ) : null}
      {/* Start Condition for See All Menu */}
      {links.length >= 5 ? (
        <h1
          className=" hover:bg-slate-200 px-8 text-base font-normal"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? (
            <span className="flex items-center gap-1 py-2">
              See Less{" "}
              <span className="text-2xl font-mono">
                <MdKeyboardArrowUp />
              </span>
            </span>
          ) : null}
        </h1>
      ) : null}
      {/* End of Condition for See All Menu */}
    </div>
  );
}
