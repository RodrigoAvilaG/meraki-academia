export const cursoDelDia = {
  id: "clases",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Proxima clase",
  headLine: "Curso de cocina vegan, carnitas de setas estilo Michoacán",
  description:
    "En este curso aprenderás a cocinar unas carnitas con un sabor y un sazón espectacular y sus dos salsas tradicionales para carnitas usando como ingrediente principal la setas un hongo con una versatilidad y un sabor para chuparse los dedos en la cocina vegana.",
  buttonLabel: "Comprar",
  imgStart: false,
  img: require("../../images/svg-1.svg").default,
  alt: "Food",
  dark: true,
  primary: true,
  redirect: "/paypal",
  darkText: false
};

export const pagosInfo = {
  id: "pagos",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Pago seguros",
  headLine: "Paga de forma segura con PayPal",
  description:
    "Nosotros no gestionaremos ningun pago, dejamos que una plataforma segura como PayPal se encargue de todo, unete a una clase.",
  buttonLabel: "Intenta ahora",
  imgStart: true,
  img: require("../../images/svg-6.svg").default,
  alt: "Pagos",
  dark: false,
  primary: false,
  redirect: "clases",
  darkText: true
};
