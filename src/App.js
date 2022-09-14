import "./App.css";
import { useState } from "react";
import Products from "./Components/Products";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct";

function App() {
  const [data, setData] = useState([]);

  // Getting all products data
  const API_URL = "https://dummyjson.com/products";
  const getAllProducts = async () => {
    const responce = await fetch(API_URL);
    const data = await responce.json();
    setData(data.products);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                data={data}
                getAllProducts={getAllProducts}
                setData={setData}
              />
            }
          />
          <Route path="product/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
