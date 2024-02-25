import React from "react";
import { Outlet } from "react-router-dom";
import FooterDefault from "../components/FooterDefault";
import Categoriess from "../Products/Categoriess";
import SliderComponents from "../components/SliderComponents";

function ProductLayout() {
  return (
    <>
      <SliderComponents />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <Outlet />
          </div>
          <div className="col-sm-4">
            <Categoriess/>
          </div>
        </div>
      </div>

      <FooterDefault />
    </>
  );
}

export default ProductLayout;
