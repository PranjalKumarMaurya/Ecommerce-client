import React from "react";
import "./Category.scss";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Category = () => {

  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
        <Products innerTitle={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
