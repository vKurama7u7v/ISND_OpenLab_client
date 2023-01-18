import React from "react";

import AddAddress from "../AddAddress";

export default function ModalAddress(props) {
  const { setShowPopup, showForm, setShowForm } = props;

  return (
    <>
      {showForm === 0 ? (
        <AddAddress setShowForm={setShowForm} setShowPopup={setShowPopup} />
      ) : null}
    </>
  );
}
