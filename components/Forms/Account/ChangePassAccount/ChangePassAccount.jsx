import React, { useState } from "react";
import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as Yup from "yup";

import { updatePasswordUserApi } from "../../../../api/user.api";

function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

export default function ChangePassAccount(props) {
  const [loading, setLoading] = useState(false);

  const { user, logout, setReloadUser } = props;

  const formik = useFormik({
    initialValues: initialValues(user.first_name, user.last_name),
    validationSchema: null,
    onSubmit: async (formData, { resetForm }) => {
      const { password, repeatPassword } = formData;
      const schema = Yup.object().shape({
        repeatPassword: Yup.string()
          .required("¡Confirmar Contraseña Obligatoria!")
          .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        password: Yup.string()
          .required("¡Contraseña Obligatoria!")
          .min(8, "La Contraseña debe tener un minímo de 8 Carácteres")
          .matches(/\d/, "La Contraseña debe de contener un Carácter Númerico")
          .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
      });

      const isValid = await schema
        .validate({
          password,
          repeatPassword,
        })
        .catch(function (err) {
          toast.error(err.errors[0]);
          setLoading(false);
        });

      if (isValid) {
        setLoading(true);
        const response = await updatePasswordUserApi(
          user.id,
          formData.password,
          logout
        );

        if (!response) {
          toast.error("Error al actualizar la contraseña", {
            theme: "dark",
          });
        } else {
          toast.succes("La constraseña se cambio con exito", {
            theme: "dark",
          });
          logout();
        }
        setLoading(false);
      }
    },
  });

  return (
    <>
      <form
        action=""
        className="base-form container"
        onSubmit={formik.handleSubmit}
      >
        <div className="title-secondary">
          <h3>
            Cambiar <span>Contraseña</span>
          </h3>
          <p>
            ¿Deseas cambiar tu contraseña de usuario?. Rellena el siguiente
            formulario para cambiar tu contraseña de usuario.
          </p>
          <div className="line"></div>
        </div>

        <div className="container-form">
          <div className="display-grid grd-2 form__column">
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
                Tú nueva contraseña
              </label>
            </div>

            <div className="form__div">
              <input
                type="password"
                name="repeatPassword"
                id=""
                className="form__input"
                placeholder=""
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
              />
              <label htmlFor="repeatPassword" className="form__label">
                Confirmar Contraseña
              </label>
            </div>
          </div>
        </div>

        <div className="footer-popup">
          <div className="btn-wrap">
            <button class="btn-reset btn-primary" type="submit">
              {loading ? (
                <>
                  Guardando
                  <div className="loader">
                    <div className="borders"></div>
                  </div>
                </>
              ) : (
                <>Guardar Cambios</>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
