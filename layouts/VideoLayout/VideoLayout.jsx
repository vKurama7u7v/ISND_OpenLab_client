import React from "react";

export default function VideoLayout(props) {
  const { children, vhAuto } = props;
  return (
    <>
      <section
        className={
          vhAuto
            ? "section-layout vh-auto section-video"
            : "section-layout section-video"
        }
      >
        <div className="main-content">
          <section className="mx-w s-pd1">{children}</section>
        </div>
        <div className="overlay"></div>
        <video
          className="video-bg"
          autoPlay={true}
          loop={true}
          muted={true}
          // controls={false}
          playsInline={false}
          preload={"false"}
          x5-playsinline={"false"}
          webkit-playsinline={"false"}
        >
          <source
            src={
              "https://res.cloudinary.com/doi13m5h7/video/upload/v1673477082/assets/bg_oni09l.mp4"
            }
            type="video/mp4"
          />
        </video>
      </section>
    </>
  );
}
