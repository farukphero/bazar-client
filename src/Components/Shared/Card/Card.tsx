import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineEye, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'

type propsTypes ={
    quantity:number
}
const Card = ({quantity}:propsTypes) => {
  return (
    <div
        className="relative  overflow-hidden bg-gray-100 p-4 group "
      >
        {quantity === 0 &&
          <div className="absolute top-5  -left-[1.8rem] flex justify-center bg-red-500 text-white text-sm px-7 -rotate-45 ">
            <p>Solut Out</p>
          </div>
        }

        <div className="bg-primary w-full h-[200px]">
          <Image alt="image" src={require("../../../images/asaus (3).png")} width={200} height={100} className="h-[200px] object-contain mx-auto " />
        </div>
        <div className="mt-3 ">
          <h4 className="text-base font-medium">
            {/* {title.length > 40 ? title.slice(0, 40) + '...' : title} */}
            Product For sell
          </h4>
          <div className="flex items-center justify-between mt-2">
            <p className=" font-bold text-xl"> <span className="text-sm font-normal">$</span>500</p>
            <div className='flex gap-4'>
              {/* <StarRating star={rating} /> */}
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </div>
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sapiente.</p>
        </div>
        <button  className="w-full h-10 bg-primary text-white font-medium mt-4 hover:scale-90 duration-700 ease-in-out  left-0">Add To Cart</button>
        <div className=" absolute top-1/3  right-0 invisible group-hover:visible group-hover:right-5 transition-all">
          <AiOutlineHeart  className="text-3xl text-white cursor-pointer" />
          <Link href={`/productDetails`}>
            <AiOutlineEye className="text-3xl mt-2 text-white cursor-pointer" />
          </Link>
        </div>
   
      </div>
  )
}

export default Card