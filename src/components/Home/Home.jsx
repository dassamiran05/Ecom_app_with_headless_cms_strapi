import "./Home.scss";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  console.log(categories);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
