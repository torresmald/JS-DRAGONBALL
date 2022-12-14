//* CUANDO EL USUARIO HACE SCROLL DE MÁS DE 500PX, MUESTRA EL BOTON, SINO ESTÁ DISPLAY NONE.
//* CUANDO SE HACE CLICK SOBRE EL BOTÓN, VOLVEMOS AL TOP DEL DOCUMENTO. 

let button$$ = document.querySelector('.toTop');


window.onscroll = function () {
  scrollFunction();
};

export const scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    button$$.style.display = "block";
  } else {
    button$$.style.display = "none";
  }
};

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

button$$.addEventListener("click", backToTop);