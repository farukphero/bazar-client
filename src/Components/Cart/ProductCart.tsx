import React, { useState } from "react";
import styles from "../../styles/ProductCart.module.css";

type productCart = {
  openCart: boolean;
  setOpenCart: (isOpen: boolean) => void;
};

const ProductCart = ({ openCart, setOpenCart }: productCart) => {
  return (
    <div
      className={`${
        openCart ? styles.productCart : styles.productCartHide
      } bg-secondary`}
    >
      <button
        onClick={() => setOpenCart(false)}
        className="btn btn-primary text-white m-4"
      >
        Close
      </button>
    </div>
  );
};

export default ProductCart;
