import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="top-footer mx-w ">
          <div className="newletter">
            <div className="polygon">
              <div className="left">
                Recibe <span>Noticias</span>
              </div>
              <div className="right">
                <form action="">
                  <div className="form__div">
                    <i className="bx bx-envelope"></i>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input-reset"
                      placeholder="Introduce tu Correo Electrónico"
                    />
                  </div>

                  <button type="submit" className="btn-reset btn-newletter">
                    Suscribirse <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer mx-w">
          <div className="content mx-w">
            <div className="link-boxes">
              <div className="contact__info">
                <div className="footer__logo">
                  <Link href={"/"}>ISND | OpenLab</Link>
                </div>

                <div className="footer__info">
                  <div className="item">
                    <div>
                      <i className="bx bx-map"></i>
                    </div>
                    <div>
                      <p>
                        Av. Dr. Burton E. Grossman 501 Pte-SECTOR 1, Tampico
                        Altamira, 89605 Miramar, Tamps
                      </p>
                    </div>
                  </div>

                  <div className="item">
                    <div>
                      <i className="bx bx-phone"></i>
                    </div>
                    <div>
                      <p>+52 833 259 9772</p>
                    </div>
                  </div>

                  <div className="item">
                    <div>
                      <i className="bx bx-envelope"></i>
                    </div>
                    <div>
                      <p>aurelio.marin@iest.edu.mx</p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="box">
                <li className="link__name">Sección 1</li>
                <li>
                  <Link href={"#"}>Editar 1</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 2</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 3</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 4</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 5</Link>
                </li>
              </ul>

              <ul className="box">
                <li className="link__name">Sección 2</li>
                <li>
                  <Link href={"#"}>Editar 1</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 2</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 3</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 4</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 5</Link>
                </li>
              </ul>

              <ul className="box">
                <li className="link__name">Sección 3</li>
                <li>
                  <Link href={"#"}>Editar 1</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 2</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 3</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 4</Link>
                </li>
                <li>
                  <Link href={"#"}>Editar 5</Link>
                </li>
              </ul>

              <ul className="box">
                <li className="link__name">Social</li>
                <li>
                  <a href={"#"} target="_blank" rel="noreferrer">
                    <i className="bx bxl-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href={"#"} target="_blank" rel="noreferrer">
                    <i className="bx bxl-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href={"#"} target="_blank" rel="noreferrer">
                    <i className="bx bxl-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom-details">
            <div className="bottom_text">
              <p>
                Copyright &copy; 2023 -<Link href={"#"}> ISND | OpenLab</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
