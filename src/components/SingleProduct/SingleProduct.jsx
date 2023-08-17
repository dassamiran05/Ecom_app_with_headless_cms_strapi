import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import useFetch from "../../hook/useFetch";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const product = data?.data[0]?.attributes;
  const imgUrl = product?.img?.data[0]?.attributes?.url;

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={imgUrl} alt="" />
          </div>
          <div className="right">
            <div className="name">{product?.title}</div>
            <div className="price">&#8377; {product?.price}</div>
            <div className="desc">{product?.desc}</div>

            <div className="cart-buttons">
              <div className="quantity-button">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product?.categories?.data[0]?.attributes?.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product?.categories?.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
