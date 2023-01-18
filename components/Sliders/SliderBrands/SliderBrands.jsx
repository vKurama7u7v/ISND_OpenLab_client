import React from "react";
import { map } from "lodash";

export default function SliderBrands() {
  const brands = [
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673647572/openlab/brands/oculus_uwgyda.svg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673647572/openlab/brands/python_lwmuru.svg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673647572/openlab/brands/unreal_vdeqq8.svg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673647572/openlab/brands/cisco_pv63bz.svg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673647572/openlab/brands/amd_lohl63.svg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673647573/openlab/brands/huawei_wyosqp.svg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673647572/openlab/brands/arduino_nptrgy.png",
  ];

  return (
    <>
      <section className="section-slider-brands">
        <div className="content mx-w">
          <div className="slider">
            <Brands brands={brands} />
            <Brands brands={brands} />
          </div>
        </div>
      </section>
    </>
  );
}

function Brands(props) {
  const { brands } = props;
  return (
    <>
      <div className="brands">
        {map(brands, (item, index) => (
          <div className="btn-reset item" index={index}>
            <img src={item ? item : null} alt={item ? item : null} />
          </div>
        ))}
      </div>
    </>
  );
}
