import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage = false, headingText, products }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((product, index) => {
          return (
            <Product
              key={index + 1}
              id={product.id}
              data={product.attributes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
