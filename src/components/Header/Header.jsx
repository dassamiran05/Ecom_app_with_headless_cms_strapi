import { useEffect, useState, useContext } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowcart] = useState(false);
  const [showSearch, setShowsearch] = useState(false);
  const {cartCount} =useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            Ecom.
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowsearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowcart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowcart={setShowcart} />}
      {showSearch && <Search setShowsearch={setShowsearch} />}
    </>
  );
};

export default Header;
