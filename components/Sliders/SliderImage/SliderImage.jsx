import React, { useState, useEffect } from "react";
import { map } from "lodash";

export default function SliderImage(props) {
  const { data: slides } = props;

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
      <section className="section-slider">
        <div className="container-slider">
          <div className="carousel">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(${-currentSlide * 100}%)` }}
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
        <Navigation
          slides={slides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </section>
    </>
  );
}

function ItemSlider(props) {
  const { slide, index, currentSlide } = props;
  return (
    <>
      <div
        className={
          index === currentSlide ? "carousel-item active" : "carousel-item"
        }
      >
        <div className="content-slide">
          <div className="cont-img">
            <div className="overlay"></div>
            <img src={slide} alt={index} />
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
