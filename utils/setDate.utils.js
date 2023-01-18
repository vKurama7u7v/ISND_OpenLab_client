export const getDateMonth = (date) => {
  const d = new Date(date);
  const month = d.getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

export const getDateYear = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  return year;
};

export const setDateFormat = (date) => {
  const d = new Date(date);
  const selectMonth = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

  const dateFormta =
    day + " " + selectMonth[d.getMonth()] + ", " + d.getFullYear();

  return dateFormta;
};
