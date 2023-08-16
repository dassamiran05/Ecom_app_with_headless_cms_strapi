import { useNavigate } from "react-router-dom";
import "./Category.scss";
const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="categories">
          {categories?.data?.map((item) => {
            return (
              <div className="category" key={item.id} onClick={() => navigate(`/category/${item.id}`)}>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img.data.attributes.url
                  }
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
