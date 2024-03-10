import React from "react";
import SliderComponents from "../components/SliderComponents";
import { Outlet } from "react-router-dom";
import Categoriess from "../Products/Categoriess";
import FooterDefault from "../components/FooterDefault";
import { Product, ProductCard, Productss } from "../Products";


function Home() {
  return (
    <> 
    <SliderComponents />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <Productss />
          </div>
          <div class="col-sm-4">
            <Categoriess/>
          </div>
        </div>
        <hr />
      </div>

      <FooterDefault /></>
 
  );
}

export default Home;
