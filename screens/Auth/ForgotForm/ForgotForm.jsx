import React, { useState } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as Yup from "yup";

import useAuth from "../../../hooks/useAuth";
import { resetUserPasswordApi } from "../../../api/user.api";

function initialValues() {
  return {
    email: "",
  };
}

export default function ForgotForm(props) {
  const { setShowPopup, setShowForm, onResetShowForm } = props;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: null,
    onSubmit: async (formData, { resetForm }) => {
      const { email } = formData;
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("¡Correo Electrónico Obligatorio!")
          .email("Necesitas un Correo Electrónico Valido!"),
      });

      const isValid = await schema
        .validate({
          email,
        })
        .catch(function (err) {
          toast.error(err.errors[0], {
            theme: "dark",
          });
        });

      if (isValid) {
        const { email: identifier } = formData;

        setLoading(true);
        const response = await resetUserPasswordApi(identifier);
        if (response.ok) {
          toast.success("✅ Correo enviado con exito", {
            theme: "dark",
          });
          resetForm(initialValues());
        } else {
          toast.error("😕 Ups! Algo salio mal", {
            theme: "dark",
          });
        }
        setLoading(false);
      }
    },
  });

  // const resetPassword = () => {};

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
              Cancelar
            </button>
            <button class="btn-reset btn-primary" type="submit">
              {loading ? (
                <>
                  Enviando{" "}
                  <div className="loader">
                    <div className="borders"></div>
                  </div>
                </>
              ) : (
                <>Enviar Correo</>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
