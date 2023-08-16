import "./Category.scss";
import img1 from "../../assets/category/cat-1.jpg";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  console.log(data);
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
