import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categoriess({user}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../Json/product.json/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  });
  return (
    <>
     
      <div className="list-group">
        {categories.map((category, index) => (
          <Link
            className="list-group-item list-group-item-action"
            key={index}
            to={`/products/categories/${category}`}
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}
export default Categoriess;
