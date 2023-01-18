import React from "react";

import VideoLayout from "../../layouts/VideoLayout";
import SectionLayout from "../../layouts/SectionLayout";
import SliderImage from "../../components/Sliders/SliderImage";

export default function About() {
  const slides = [
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673645652/openlab/assets/IMG_1604_1_zchz3i.jpg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673642485/openlab/assets/IMG_1941_z72jzy.jpg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673642486/openlab/assets/IMG_1943_ruducb.jpg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673642484/openlab/assets/IMG_1940_uzuirj.jpg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673642486/openlab/assets/IMG_1939_c4ulra.jpg",
    "https://res.cloudinary.com/doi13m5h7/image/upload/v1673642486/openlab/assets/IMG_1942_lchvwd.jpg",
  ];
  return (
    <main className="home">
      <VideoLayout vhAuto={true}>
        <div className="header-title">
          <h1>
            Acerca de <br /> <span>ISND | OpenLab</span>
          </h1>
          <div className="line">
            <div className="polygon"></div>
          </div>
          <p>
            ISND OpenLab - Laboratorio de Ingeniería en Sistemas & Negocios
            Digitales
          </p>
        </div>
      </VideoLayout>

      <SectionLayout vhAuto={true} spd={1} bg={false}>
        <section className="about-s1">
          <div className="wrapper display-grid grd-2">
            <div className="left">
              <div className="title-secondary font-title">
                <h3>
                  Sobre <span>Nosotros</span>
                </h3>
                <div className="line"></div>
              </div>
              <div className="content">
                <p className="paragraph text-align-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="paragraph text-align-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="right">
              <SliderImage data={slides} />
            </div>
          </div>
        </section>
      </SectionLayout>

      <SectionLayout vhAuto={true} spd={3} bg={true}>
        <div className="title-primary">
          <h3>
            Editar <span>Texto</span>
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            quis.
          </p>
        </div>
      </SectionLayout>
    </main>
  );
}
