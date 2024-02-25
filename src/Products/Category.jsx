import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/ProductCard";

function Category({ user }) {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`./src/Json/product.json/products/${categoryName}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const products = await response.json();
        const filteredProducts = products.filter(
          (product) => product.category === categoryName
        );
        setCategoryProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <>
      <h1>Category: {categoryName}</h1>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {categoryProducts.map((item) => (
          <ProductCard user={user} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Category;
