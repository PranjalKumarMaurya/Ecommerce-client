import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ innerTitle, headingText }) => {
  return (
    <div className="products-container">
      {!innerTitle && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
