// * ===== OBTENER SECCIÓN DE LA URL ===== *
export const getUrlComponent = (url) => {
  const _split = url.split("/");
  const response = _split[1];

  return response.toString();
};

// * ===== CREAR ARRAY DE PATHNAMES ===== *
export const setPathnames = () => {
  const pathnames = [
    { pathname: "", active: false, class: "" },
    { pathname: "about", active: false, class: "" },
    { pathname: "collection", active: false, class: "" },
    { pathname: "explore", active: false, class: "" },
    { pathname: "news", active: false, class: "" },
    { pathname: "events", active: false, class: "" },
    { pathname: "shop", active: false, class: "" },
    { pathname: "contact", active: false, class: "" },
  ];

  return pathnames;
};

// * ===== ESTABLECER ESTADOS ACTIVOS DE PATHNAMES ===== *
export const updatePathnames = (input) => {
  const pathnames = setPathnames();

  pathnames.map(function (dato) {
    if (input === dato.pathname) {
      dato.active = true;
      dato.class = "active";
    }

    return dato;
  });

  return pathnames;
};
