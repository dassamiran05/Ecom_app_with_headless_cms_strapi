import React, { useContext } from "react";
import { MdClose } from "react-icons/md";

import "./CartItem.scss";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const {
    cartItems,
    handleRemoveFromCart,
    handleCartProductQuantity,
  } = useContext(Context);
  return (
    <div className="cart-products">
      {cartItems?.map((item) => {
        const product = item?.attributes;
        return (
          <>
            <div className="cart-product">
              <div className="img-container">
                <img
                  src={product.img.data[0].attributes.url}
                  alt={product?.title}
                />
              </div>
              <div className="prod-details">
                <span className="name">{product?.title}</span>
                <MdClose
                  className="close-btn"
                  onClick={() => handleRemoveFromCart(item)}
                />
                <div className="quantity-button">
                  <span onClick={() => handleCartProductQuantity("dec", item)}>
                    -
                  </span>
                  <span>{product?.quantity}</span>
                  <span onClick={() => handleCartProductQuantity("inc", item)}>
                    +
                  </span>
                </div>
                <div className="text">
                  <span>{product?.quantity}</span>
                  <span>*</span>
                  <span>&#8377; {product?.price}</span>
                  <span>=</span>
                  <span>&#8377; {product?.quantity * product?.price}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CartItem;
