import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";

function SingleProduct() {
  const [singleData, setSingleData] = useState([]);
  console.log(singleData);

  const { id } = useParams();

  useEffect(() => {
    gettingSingleData();
  }, []);

  //   Getting Single Data

  const gettingSingleData = async () => {
    const API_URL = `https://dummyjson.com/products/${id}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setSingleData([...singleData, data]);
  };

  return (
    <div>
      <div className="container">
        <div className="single-product">
          {singleData.map((data) => {
            return (
              <>
                <div className="left-section">
                  <div className="image-container">
                    <img src={data.images[0]} alt="images" />
                  </div>
                  <div className="images-container">
                    <div className="small-image">
                      <img src={data.images[1]} alt="" />
                    </div>
                    <div className="small-image">
                      <img src={data.images[2]} alt="" />
                    </div>
                    <div className="small-image">
                      <img src={data.images[3]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="right-section">
                  <div className="single-product-details">
                    <div className="product-name-brand">
                      <h1>{data.title}</h1>
                      <div className="category">Category : {data.category}</div>
                    </div>

                    <p className="description main">{data.description}</p>
                    <div className="rating">
                      <p>Rating: {data.rating}</p>
                    </div>
                    <div className="number-of-stocks">
                      <p>{data.stock} : Stocks Available</p>
                    </div>
                    <div className="prices main-prices">
                      <p className="price main-price">Rs {data.price}</p>
                      <p className="discount">
                        discount: {data.discountPercentage}%
                      </p>
                    </div>
                    <div className="buy">
                      <button>Buy Now</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
