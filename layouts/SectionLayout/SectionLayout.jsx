import React from "react";

export default function SectionLayout(props) {
  const { children, bg, vhAuto, spd } = props;
  return (
    <>
      <section
        className={`${vhAuto ? "section-layout vh-auto" : "section-layout"} ${
          bg ? "bg-2" : null
        }`}
      >
        <div className="section-content">
          <section
            className={`mx-w
            ${spd === 1 ? "s-pd1" : null}
            ${spd === 2 ? "s-pd2" : null}
            ${spd === 3 ? "s-pd3" : null}`}
          >
            {children}
          </section>
        </div>
      </section>
    </>
  );
}
