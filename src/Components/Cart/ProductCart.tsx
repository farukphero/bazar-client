import React, { useState } from "react";
import styles from "../../styles/ProductCart.module.css";

type productCart = {
    openCart: boolean,
    setOpenCart: (isOpen: boolean) => void
}

const ProductCart = ({openCart, setOpenCart}: productCart) => {

  return (
    <>
    <div className={`${openCart ? styles.productCart : styles.productCartHide} bg-secondary z-1000 relative duration-75`}>
    <button onClick={()=>setOpenCart(false)} className="btn btn-primary text-white text-4xl absolute top-0 bottom-0 left-0 h-40 w-5 m-auto">
        &gt;
    </button>
  </div></>
  )
  
};

export default ProductCart;
