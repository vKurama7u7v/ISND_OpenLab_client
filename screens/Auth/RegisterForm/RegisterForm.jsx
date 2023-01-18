import React, { useState } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as Yup from "yup";

import { registerUserApi } from "../../../api/user.api";

function initialValues() {
  return {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  };
}

export default function RegisterForm(props) {
  const { setShowPopup, setShowForm, onResetShowForm } = props;

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: null,
    onSubmit: async (formData, { resetForm }) => {
      const { first_name, last_name, username, email, password, password2 } =
        formData;
      const schema = Yup.object().shape({
        password2: Yup.string()
          .required("¡Confirmar Contraseña Obligatoria!")
          .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        password: Yup.string()
          .required("¡Contraseña Obligatoria!")
          .min(8, "La Contraseña debe tener un minímo de 8 Carácteres")
          .matches(/\d/, "La Contraseña debe de contener un Carácter Númerico")
          .oneOf([Yup.ref("password2")], "Las contraseñas no coinciden"),
        email: Yup.string()
          .required("¡Correo Electrónico Obligatorio!")
          .email("Necesitas un Correo Electrónico Valido!"),
        username: Yup.string()
          .required("¡Username Obligatorio!")
          .min(4, "Necesitas un Username de 3 a 15 Carácteres")
          .matches(
            /^[a-zA-Z0-9\.\_\-]{4,16}$/,
            "El Username no debe de contener espacios"
          )
          .matches(
            /\d/,
            "El Username debe de contener por lo menos un Carácter Númerico"
          )
          .max(16, "Necesitas un Username de 3 a 15 Carácteres"),
        last_name: Yup.string()
          .required("¡Apellido Obligatorio!")
          .min(3, "Necesitas un Apellido de 3 a 30 Carácteres")
          .max(30, "Necesitas un Apellido de 3 a 30 Carácteres"),
        first_name: Yup.string()
          .required("¡Nombre Obligatorio!")
          .min(3, "Necesitas un Nombre de 3 a 30 Carácteres")
          .max(30, "Necesitas un Nombre de 3 a 30 Carácteres"),
      });

      const isValid = await schema
        .validate({
          first_name,
          last_name,
          username,
          email,
          password,
          password2,
        })
        .catch(function (err) {
          toast.error(err.errors[0]);
          setLoading(false);
        });

      if (isValid) {
        setLoading(true);
        const response = await registerUserApi(formData);

        // SI no hay respuesta
        if (!response) setLoading(false);

        // Confirmando Token
        if (response.jwt) {
          toast.success("😃 Usuario regístrado correctamente");
          resetForm(initialValues());
          setShowForm(0);
        } else {
          toast.error("😕 Ups! Algo salio mal");
        }
        setLoading(false);
      }
    },
  });

  return (
    <>
      <form className="container" onSubmit={formik.handleSubmit}>
        <div className="container-form">
          <div className="display-grid grd-2 form__column">
            <div className="form__div">
              <input
                type="text"
                name="first_name"
                id=""
                className="form__input"
                placeholder=""
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
              <label htmlFor="first_name" className="form__label">
                Nombre
              </label>
            </div>
            <div className="form__div">
              <input
                type="text"
                name="last_name"
                id=""
                className="form__input"
                placeholder=""
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
              <label htmlFor="last_name" className="form__label">
                Apellido
              </label>
            </div>
          </div>
          <div className="form__div">
            <input
              type="text"
              name="username"
              id=""
              className="form__input"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <label htmlFor="email" className="form__label">
              Nombre de Usuario
            </label>
          </div>
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
          <div className="form__div">
            <input
              type="password"
              name="password2"
              id=""
              className="form__input"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.password2}
            />
            <label htmlFor="password2" className="form__label">
              Confirmar Contraseña
            </label>
          </div>
        </div>

        <div className="footer-popup">
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
                  Procesando
                  <div className="loader">
                    <div className="borders"></div>
                  </div>
                </>
              ) : (
                <>Crear Cuenta</>
              )}
            </button>
          </div>
        </div>

        <hr />
        <p className="form-sign-in text-align-center">
          ¿Ya tienes una cuenta?{" "}
          <Link href={""} onClick={() => setShowForm(0)}>
            Iniciar Sesión
          </Link>
        </p>
      </form>
    </>
  );
}
