import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() { // Component adı düzeltildi
  const [last10Products, setLast10Products] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/Json/product.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const last10 = data.slice(-10);
        setLast10Products(last10);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <h2>Products</h2>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {last10Products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </>
  );
}

export default Products;

