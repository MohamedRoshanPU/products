import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

function Products({ data, getAllProducts }) {
  const [filter, setFilter] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);


  //   Getting Product Categories
  const CAT_API = "https://dummyjson.com/products/categories";
  const getAllCategories = async () => {
    const response = await fetch(CAT_API);
    const data = await response.json();
    // console.log(data);
    setCategories(data);
  };

  //   Getting products based on categories

  const filterProducts = async (category) => {
    const CAT_API_PRODUCT = `https://dummyjson.com/products/category/${category}`;
    const response = await fetch(CAT_API_PRODUCT);
    const data = await response.json();
    setFilter(data);
  };

  return (
    <div>
      <div className="container">
        <header>
          <h1>All Products</h1>
        </header>
        <div className="buttons">
          {categories.map((cat, index) => {
            return (
              <li
                className="btns"
                onClick={() => {
                  filterProducts(cat);
                }}
                key={index}
              >
                {cat}
              </li>
            );
          })}
        </div>
        <div className="product-cards">
          {data.map((product) => {
            return (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.thumbnail} alt="product image" />
                </div>
                <div className="product-name">
                  <div className="product-name-brand">
                    <h2 className="title">{product.title}</h2>
                    <p className="category">Category : {product.category}</p>
                  </div>
                  <div className="product-details">
                    <p className="description">{product.description}</p>
                  </div>
                  <div className="prices">
                    <p className="price">Rs. {product.price}</p>
                    <p className="discount">{product.discountPercentage}%</p>
                  </div>
                  <div className="buy">
                    <Link to={`product/${product.id}`}>
                      <button>Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
