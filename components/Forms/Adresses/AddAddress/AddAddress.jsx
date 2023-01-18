import React, { useState } from "react";

export default function AddAddress(props) {
  const { setShowPopup, setShowForm, onResetShowForm } = props;

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form action="" className="container">
        <div className="container-form">
          <div className="form__div">
            <input
              type="text"
              name="title_address"
              id=""
              className="form__input"
              placeholder=""
            />
            <label htmlFor="title_address" className="form__label">
              Título de Dirección
            </label>
          </div>

          <div className="display-grid grd-2 form__column">
            <div className="form__div">
              <input
                type="text"
                name="name"
                id=""
                className="form__input"
                placeholder=""
              />
              <label htmlFor="name" className="form__label">
                Nombre y Apellidos
              </label>
            </div>

            <div className="form__div">
              <input
                type="text"
                name="address"
                id=""
                className="form__input"
                placeholder=""
              />
              <label htmlFor="address" className="form__label">
                Dirección
              </label>
            </div>
          </div>

          <div className="display-grid grd-2 form__column">
            <div className="form__div">
              <input
                type="text"
                name="city"
                id=""
                className="form__input"
                placeholder=""
              />
              <label htmlFor="city" className="form__label">
                Ciudad
              </label>
            </div>

            <div className="form__div">
              <input
                type="text"
                name="state"
                id=""
                className="form__input"
                placeholder=""
              />
              <label htmlFor="state" className="form__label">
                Estado/Provicia/Región
              </label>
            </div>
          </div>

          <div className="display-grid grd-2 form__column">
            <div className="form__div">
              <input
                type="text"
                name="cp"
                id=""
                className="form__input"
                placeholder=""
              />
              <label htmlFor="cp" className="form__label">
                Codigo Postal
              </label>
            </div>

            <div className="form__div">
              <input
                type="tel"
                name="state"
                id=""
                className="form__input"
                placeholder=""
              />
              <label htmlFor="state" className="form__label">
                Número de teléfono
              </label>
            </div>
          </div>
        </div>

        <div className="footer-popup">
          <div className="btn-wrap">
            <button
              className="btn-reset btn-secondary"
              type="button"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              Cancelar
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
                <>Agregar Dirección</>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
