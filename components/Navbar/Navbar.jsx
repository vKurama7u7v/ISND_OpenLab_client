import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import BasicModal from "../../layouts/BasicModal";
import ModalAuth from "../../screens/Auth/ModalAuth";

import Logo from "../../public/assets/images/Logo.svg";

import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user.api";
import { getUrlComponent, updatePathnames } from "../../utils/navigation.utils";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showForm, setShowForm] = useState(0);
  const [user, setUser] = useState(undefined);

  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  const onSetShowNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  const onResetShowForm = () => {
    setTimeout(() => {
      setShowForm(0);
    }, 200);
  };

  const onSetModalTitle = () => {
    if (showForm === 0) return "Iniciar Sesión";
    if (showForm === 1) return "Crear Cuenta";
    if (showForm === 2) return "¿Olvidaste tu Contraseña?";
  };

  const onSetModalText = () => {
    if (showForm === 2)
      return "Ingresa el correo electrónico que utilizaste para registrarte. Recibirás un correo electrónico con instrucciones sobre cómo restablecer tu contraseña.";
  };

  // Cambiar active de Navbar
  const url = useRouter();
  const setNavigation = updatePathnames(getUrlComponent(url.pathname));

  return (
    <>
      <header className="header">
        {/*<!-- LOGO -->*/}
        <div className="header__logo">
          <div className="polygon">
            <Link href="/">
              <span>ISND | OpenLab</span>
              <Image src={Logo} alt="ISND | OpenLab" className="img" />
            </Link>
          </div>
        </div>

        {/*<!-- NAVBAR -->*/}
        <nav className={showNavbar ? "nav show" : "nav"}>
          <div className="nav__content bd-grid">
            <div className="nav__menu">
              <ul className="nav__list left">
                <li className={`nav__item ${setNavigation[0].class}`}>
                  <Link
                    href="/"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Inicio
                  </Link>
                </li>
                <li className={`nav__item ${setNavigation[1].class}`}>
                  <Link
                    href="/about"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Nosotros
                  </Link>
                </li>
                <li className={`nav__item ${setNavigation[2].class}`}>
                  <Link
                    href="/"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Colección
                  </Link>
                </li>
                <li className={`nav__item ${setNavigation[3].class}`}>
                  <Link
                    href="/"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Explorar
                  </Link>
                </li>
              </ul>

              <ul className="nav__list right">
                <li className={`nav__item ${setNavigation[4].class}`}>
                  <Link
                    href="/"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Noticias
                  </Link>
                </li>
                <li className={`nav__item ${setNavigation[5].class}`}>
                  <Link
                    href="/"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Eventos
                  </Link>
                </li>
                <li className={`nav__item ${setNavigation[6].class}`}>
                  <Link
                    href="/"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Tienda
                  </Link>
                </li>
                <li className={`nav__item ${setNavigation[7].class}`}>
                  <Link
                    href="/"
                    className="nav__link"
                    onClick={() => setShowNavbar(false)}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="subnav__content">
            <div className="subnav__menu">
              {user !== undefined && (
                <MenuOptions
                  user={user}
                  logout={logout}
                  setShowSignIn={setShowSignIn}
                  setShowNavbar={setShowNavbar}
                  setShowLogOut={setShowLogOut}
                />
              )}
            </div>
          </div>
        </nav>

        {/*<!-- BTN RESPONSIVE -->*/}
        <button className="btn-reset header__toggle" onClick={onSetShowNavbar}>
          {showNavbar ? (
            <i className="uil uil-times" id="header-toggle"></i>
          ) : (
            <i className="uil uil-bars" id="header-toggle"></i>
          )}
        </button>
      </header>

      <BasicModal
        showPopup={showSignIn}
        setShowPopup={setShowSignIn}
        title={onSetModalTitle()}
        text={onSetModalText()}
        onResetShowForm={onResetShowForm}
      >
        <ModalAuth
          setShowPopup={setShowSignIn}
          showForm={showForm}
          setShowForm={setShowForm}
          onResetShowForm={onResetShowForm}
        />
      </BasicModal>

      <BasicModal
        showPopup={showLogOut}
        setShowPopup={setShowLogOut}
        title={"Cerrar Sesión"}
        text={"¿Estas seguro que deseas cerrar sesión?"}
      >
        <div className="container">
          <div className="footer-popup">
            <div className="btn-wrap">
              <button
                className="btn-reset btn-secondary"
                type="button"
                onClick={() => setShowLogOut(false)}
              >
                Cancelar
              </button>
              <button
                class="btn-reset btn-primary"
                onClick={() => {
                  setShowLogOut(false);
                  logout();
                }}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </BasicModal>
    </>
  );
}

function MenuOptions(props) {
  const { user, logout, setShowNavbar, setShowSignIn, setShowLogOut } = props;

  return (
    <>
      {user ? (
        <>
          {/* Mis Pedidos */}
          <Link href={"/"} onClick={() => setShowNavbar(false)}>
            <i className="bx bx-coffee"></i> <span>Mis Pedidos</span>
          </Link>
          {/* Wishlist */}
          <Link href={"/"} onClick={() => setShowNavbar(false)}>
            <i className="bx bx-heart"></i> <span>Wishlist</span>
          </Link>
          {/* Iniciar Sesión */}
          <Link
            href={"/account"}
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            <i className="bx bx-user"></i>
            <span>Mi Cuenta</span>
          </Link>
          {/* Mi Carrito */}
          <Link
            href={"/"}
            className="ocultar"
            onClick={() => setShowNavbar(false)}
          >
            <i className="bx bxs-cart-alt"></i>
            <span>Mi Carrito</span>
          </Link>
          {/* Cerrar Sesión */}
          <Link
            href={""}
            className="ocultar"
            onClick={() => {
              setShowNavbar(false);
              setShowLogOut(true);
            }}
          >
            <i className="bx bx-power-off"></i>
            <span>Cerrar Sesión</span>
          </Link>
        </>
      ) : (
        <Link
          href={"#"}
          onClick={() => {
            setShowNavbar(false);
            setShowSignIn(true);
          }}
        >
          <i className="bx bx-user"></i>
          <span>Iniciar Sesión</span>
        </Link>
      )}
    </>
  );
}
