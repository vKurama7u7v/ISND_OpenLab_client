import React, { useState } from "react";

import ChangeInfoAccount from "../../components/Forms/Account/ChangeInfoAccount";
import ChangePassAccount from "../../components/Forms/Account/ChangePassAccount";

import BasicModal from "../../layouts/BasicModal";
import ModalAddress from "../../components/Forms/Adresses/ModalAddress";

export default function Account(props) {
  const { user, logout, setReloadUser } = props;

  const [window, setWindow] = useState(0);
  const [showAddress, setShowAddress] = useState(false);
  const [showForm, setShowForm] = useState(0);

  const onSetWindow = () => {
    if (window === 0) {
      return (
        <>
          <Settings user={user} logout={logout} setReloadUser={setReloadUser} />
        </>
      );
    } else if (window === 1) {
      return (
        <>
          <Adresses
            showAddress={showAddress}
            setShowAddress={setShowAddress}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </>
      );
    }
  };

  const onResetShowForm = () => {
    setTimeout(() => {
      setShowForm(0);
    }, 200);
  };

  return (
    <>
      <main className="account main-content">
        <section className="section account mx-w s-pd1">
          <div className="list-options">
            <button
              className={window === 0 ? "btn-reset active" : "btn-reset"}
              onClick={() => setWindow(0)}
            >
              <i className="bx bx-cog"></i>
              <span>Configuraciónes</span>
            </button>
            <button
              className={window === 1 ? "btn-reset active" : "btn-reset"}
              onClick={() => setWindow(1)}
            >
              <i className="bx bx-map"></i>
              <span>Direcciones</span>
            </button>
          </div>
          <div className="content">{onSetWindow()}</div>
        </section>
      </main>
    </>
  );
}

function Settings(props) {
  const { user, logout, setReloadUser } = props;
  return (
    <div className="personal-info">
      <ChangeInfoAccount
        user={user}
        logout={logout}
        setReloadUser={setReloadUser}
      />
      <ChangePassAccount
        user={user}
        logout={logout}
        setReloadUser={setReloadUser}
      />
    </div>
  );
}

function Adresses(props) {
  const {
    user,
    logout,
    setReloadUser,
    showAddress,
    setShowAddress,
    showForm,
    setShowForm,
  } = props;
  return (
    <>
      <div className="personal-info">
        <button className="btn-reset" onClick={() => setShowAddress(true)}>
          Hola
        </button>
      </div>

      <BasicModal
        showPopup={showAddress}
        setShowPopup={setShowAddress}
        title={"Agregar Dirección"}
        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
        middleModal={true}
      >
        <ModalAddress
          showForm={showForm}
          setShowForm={setShowForm}
          setShowAddress={setShowAddress}
        />
      </BasicModal>
    </>
  );
}
