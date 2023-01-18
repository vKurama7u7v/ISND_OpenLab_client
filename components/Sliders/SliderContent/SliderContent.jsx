import React, { useState, useEffect } from "react";
import Link from "next/link";
import SectionLayout from "../../../layouts/SectionLayout";
import { map } from "lodash";
import { getSlidesContent } from "../../../utils/content.utils.js";

export default function SliderContent(props) {
  const slides = getSlidesContent();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 8000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <>
      <SectionLayout vhAuto={true} spd={3} bg={false}>
        <section className="section-slider-content">
          <div className="container-slider">
            <div className="carousel">
              <div
                className="carousel-inner"
                style={{ transform: `translateY(${-currentSlide * 100}%)` }}
              >
                {map(slides, (slide, index) => (
                  <ItemSlider
                    slide={slide}
                    slides={slides}
                    index={index}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionLayout>
    </>
  );
}

function ItemSlider(props) {
  const { slide, slides, index, currentSlide, setCurrentSlide } = props;
  return (
    <>
      <div
        className={
          index === currentSlide ? "carousel-item active" : "carousel-item"
        }
      >
        <div className="content-slide">
          <div className="left">
            <div className="polygon"></div>
          </div>
          <div className="cont-img">
            <img src={slide ? slide.img : null} alt="" />
          </div>
          <div className="right">
            <div className="polygon">
              <div className="slide">
                <div className="content">
                  <h3>{slide ? slide.title : null}</h3>
                  <p className="text-align-justify">
                    {slide ? slide.content : null}
                  </p>
                  <Link href={"/about"} className="btn-reset">
                    Leer Más
                  </Link>
                </div>

                <Navigation
                  slides={slides}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Navigation(props) {
  const { slides, currentSlide, setCurrentSlide } = props;
  return (
    <>
      <div className="slider-navigation">
        <div className="options">
          {map(slides, (slide, index) =>
            index === currentSlide ? (
              <div
                className="btn-reset nav-btn active"
                index={index}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ) : (
              <div
                className="btn-reset nav-btn"
                index={index}
                onClick={() => setCurrentSlide(index)}
              ></div>
            )
          )}
        </div>
      </div>
    </>
  );
}
