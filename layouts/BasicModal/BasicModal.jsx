import React, { useState } from "react";
import { map } from "lodash";
import Link from "next/link";

export default function BasicModal(props) {
  const {
    children,
    showPopup,
    setShowPopup,
    onResetShowForm,
    title,
    text,
    middleModal,
  } = props;

  return (
    <>
      <div className={showPopup ? "wrapper-popup active" : "wrapper-pop"}>
        <div className="popup-wrap">
          <div className="shadow close-btn"></div>
          <div className={middleModal ? "popup middle-modal" : "popup"}>
            <div className="header-popup">
              <div className="title-primary">
                <h3>
                  {!title ? null : (
                    <>
                      {title.split(" ").length === 3 ? (
                        <>
                          {map(
                            title.split(" ").slice(0, 2),
                            (word) => word + " "
                          )}
                          <span>
                            {title.split(" ")[title.split(" ").length - 1]}
                          </span>
                        </>
                      ) : (
                        <>
                          {title.split(" ")[0] + " "}
                          <span>{title.split(" ")[1]}</span>
                        </>
                      )}
                    </>
                  )}
                </h3>
                {text ? (
                  <>
                    <p className="">{text}</p>
                  </>
                ) : null}
              </div>
              <button
                className="btn-reset icon"
                onClick={() => {
                  setShowPopup(false);
                  try {
                    onResetShowForm();
                  } catch (error) {
                    console.log("Hola", error);
                    return null;
                  }
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <>{children}</>
          </div>
        </div>
      </div>
    </>
  );
}
