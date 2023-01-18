import React from "react";

// import SectionVideoBG from "./Sections/SectionVideoBG";
import VideoLayout from "../../layouts/VideoLayout";
import SliderBrands from "../../components/Sliders/SliderBrands";
import SectionLayout from "../../layouts/SectionLayout";
import SliderContent from "../../components/Sliders/SliderContent/SliderContent";

export default function Home() {
  return (
    <>
      <main className="home">
        <VideoLayout>
          <h1>Aqui va mi landing page</h1>
        </VideoLayout>
        <SliderBrands />
        <SectionLayout vhAuto={true} spd={1} bg={false}>
          <div className="title-primary">
            <h3>
              ISND <span>OpenLab</span>
            </h3>
            <p className="">
              ISND OpenLab - Laboratorio de Ingeniería en Sistemas & Negocios
              Digitales
            </p>
          </div>
          <SliderContent />
        </SectionLayout>
      </main>
    </>
  );
}
