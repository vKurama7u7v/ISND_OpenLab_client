import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as Yup from "yup";

import useAuth from "../../../hooks/useAuth";
import { loginUserApi } from "../../../api/user.api";

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export default function LoginForm(props) {
  const { setShowPopup, setShowForm, onResetShowForm } = props;
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: null,
    onSubmit: async (formData, { resetForm }) => {
      const { email, password } = formData;
      const schema = Yup.object().shape({
        password: Yup.string().required("¡Contraseña Obligatoria!"),
        email: Yup.string()
          .required("¡Correo Electrónico Obligatorio!")
          .email("Necesitas un Correo Electrónico Valido!"),
      });

      const isValid = await schema
        .validate({
          email,
          password,
        })
        .catch(function (err) {
          toast.error(err.errors[0], {
            theme: "dark",
          });
        });

      if (isValid) {
        const { email: identifier, password } = formData;
        const credentials = { identifier, password };

        setLoading(true);
        const response = await loginUserApi(credentials);

        // SI no hay respuesta
        if (!response) setLoading(false);

        // Confirmando Token
        if (response.jwt) {
          login(response.jwt);
          toast.success("😃 Usuario Logueado con Exito", {
            theme: "dark",
          });
          resetForm(initialValues());
          setShowPopup(false);
        } else {
          toast.error("😕 Ups! Algo salio mal", {
            theme: "dark",
          });
        }

        setLoading(false);
      }
    },
  });

  return (
    <>
      <form className="container" onSubmit={formik.handleSubmit}>
        <div className="container-form">
          <div className="form__div">
            <input
              type="email"
              name="email"
              id=""
              className="form__input"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="email" className="form__label">
              Correo Electrónico
            </label>
          </div>
          <div className="form__div">
            <input
              type="password"
              name="password"
              id=""
              className="form__input"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label htmlFor="password" className="form__label">
              Contraseña
            </label>
          </div>
        </div>

        <p className="form-sign-in text-align-right pt-2">
          <Link href={""} onClick={() => setShowForm(2)}>
            ¿Olvide mi contraseña?
          </Link>
        </p>

        <div className="footer-popup">
          <div className="btn-wrap">
            <button type="button" className="btn-reset social">
              <i className="bx bxl-google"></i>
            </button>
            <button type="button" className="btn-reset social">
              <i className="bx bxl-microsoft"></i>
            </button>
            <button type="button" className="btn-reset social">
              <i className="bx bxl-facebook"></i>
            </button>
          </div>
          <div className="btn-wrap">
            <button
              className="btn-reset btn-secondary"
              type="button"
              onClick={() => {
                setShowPopup(false);
                onResetShowForm();
              }}
            >
              Cerrar
            </button>
            <button class="btn-reset btn-primary" type="submit">
              {loading ? (
                <>
                  Procesando{" "}
                  <div className="loader">
                    <div className="borders"></div>
                  </div>
                </>
              ) : (
                <>Iniciar Sesión</>
              )}
            </button>
          </div>
        </div>

        <hr />
        <p className="form-sign-in text-align-center">
          ¿Aún no tienes una cuenta?{" "}
          <Link href={""} onClick={() => setShowForm(1)}>
            Regístrate
          </Link>
        </p>
      </form>
    </>
  );
}
