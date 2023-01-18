import React, { useState } from "react";

import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as Yup from "yup";

import { updateNameUserApi } from "../../../../api/user.api";
import { setDateFormat } from "../../../../utils/setDate.utils";

function initialValues(first_name, last_name) {
  return {
    first_name: first_name || "",
    last_name: last_name || "",
  };
}

export default function ChangeInfoAccount(props) {
  const [loading, setLoading] = useState(false);

  const { user, logout, setReloadUser } = props;

  const formik = useFormik({
    initialValues: initialValues(user.first_name, user.last_name),
    validationSchema: null,
    onSubmit: async (formData, { resetForm }) => {
      const { first_name, last_name } = formData;
      const schema = Yup.object().shape({
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
        })
        .catch(function (err) {
          toast.error(err.errors[0], {
            theme: "dark",
          });
          setLoading(false);
        });

      if (isValid) {
        setLoading(true);
        const response = await updateNameUserApi(user.id, formData, logout);

        if (!response) {
          toast.error("Error al actualizar el nombre y apellido", {
            theme: "dark",
          });
        } else {
          setReloadUser(true);
          toast.success("Nombre y Apellido Actualizado 😃", {
            theme: "dark",
          });
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
            Mi <span>Cuenta</span>
          </h3>
          <p>
            <b>Usuarios Creado: </b>
            {setDateFormat(user.createdAt)}
            <br />
            <b>Ultima Actualización: </b>
            {setDateFormat(user.updatedAt)}
          </p>
          <div className="line"></div>
        </div>

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

          <div className="display-grid grd-2 form__column">
            <div className="form__div">
              <input
                type="text"
                name="username"
                id=""
                className="form__input"
                placeholder=""
                value={user.username}
                disabled={true}
              />
              <label htmlFor="username" className="form__label">
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
                value={user.email}
                disabled={true}
              />
              <label htmlFor="email" className="form__label">
                Correo Electrónico
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
