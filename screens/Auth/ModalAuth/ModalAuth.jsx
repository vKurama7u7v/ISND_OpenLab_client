import React, { useState } from "react";
import Link from "next/link";

import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import ForgotForm from "../ForgotForm";

export default function ModalSignIn(props) {
  const { setShowPopup, showForm, setShowForm, onResetShowForm } = props;

  return (
    <>
      {showForm === 0 ? (
        <LoginForm
          setShowForm={setShowForm}
          setShowPopup={setShowPopup}
          onResetShowForm={onResetShowForm}
        />
      ) : null}

      {showForm === 1 ? (
        <RegisterForm
          setShowForm={setShowForm}
          setShowPopup={setShowPopup}
          onResetShowForm={onResetShowForm}
        />
      ) : null}

      {showForm === 2 ? (
        <ForgotForm
          setShowForm={setShowForm}
          setShowPopup={setShowPopup}
          onResetShowForm={onResetShowForm}
        />
      ) : null}
    </>
  );
}
