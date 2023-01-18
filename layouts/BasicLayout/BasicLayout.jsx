import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BasicLayout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
