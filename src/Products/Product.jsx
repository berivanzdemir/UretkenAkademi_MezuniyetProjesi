import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../Json/product.json"; 

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
   
    const selectedProduct = productData.products.find(
      (item) => item.id === parseInt(productId)
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productId]);

  return (
    <>
      <h3>{product.title}</h3>
      <img src={product.image} alt="" className="w-100 img-thumbnail" />
      <p>{product.description}</p>
    </>
  );
}

export default Product;
