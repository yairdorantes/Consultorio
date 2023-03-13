// const axios = require('axios/dist/browser/axios.cjs'); // browser
const visible = false;
const formulario = document.getElementById("formulario-cita");
const urlLogin = "http://127.0.0.1:8000/api/login";
const urlSignup = "http://127.0.0.1:8000/api/signup";

const Login = () => {
  const email = document.getElementsByName("email")[0].value;
  const contrasena = document.getElementsByName("contrasena")[0].value;

  axios
    .post(urlLogin, { email, contrasena })
    .then((respuesta) => {
      if (respuesta.status === 200) {
        alert("login exitoso");
        /* window.location.href = "http://127.0.0.1:8000/admin/"; */
        window.location.href = "ejemplo.html";
      } else if (respuesta.status === 201) {
        window.location.href = "http://127.0.0.1:8000/admin/";
      } else {
        alert("algo mal");
      }
      console.log(respuesta);
    })
    .catch((error) => {
      // console.log(error)
      alert("ocurrio un error");
    });
};

const manejarEnvio = () => {
  const nombres = document.getElementsByName("nombres")[0].value;
  const apPaterno = document.getElementsByName("ap-paterno")[0].value;
  const apMaterno = document.getElementsByName("ap-materno")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const celular = document.getElementsByName("telefono")[0].value;
  const contrasena = document.getElementsByName("contrasena")[0].value;

  axios
    .post(urlSignup, {
      nombres: nombres,
      apPaterno,
      apMaterno,
      email,
      celular,
      contrasena,
    })
    .then((respuesta) => {
      if (respuesta.status === 200) {
        alert("login exitoso");
      } else {
        alert("algo mal");
      }
      console.log(respuesta);
    })
    .catch((error) => {
      console.log(error);
    });
};
const elementToToggle = document.getElementById("prueba");
const pregunta = document.getElementById("pregunta");
const elements = document.querySelectorAll(".ocultar");
const btnEnviar = document.getElementById("btnIniciar");
const btnRegistrar = document.getElementById("btnRegistrar");
elements.forEach((elementToToggle) => {
  elementToToggle.style.display = "none";
});

// console.log(pregunta.text)

function toggle() {
  if (pregunta.innerHTML === "Iniciar") {
    pregunta.innerHTML = "Registrar";
    btnRegistrar.style.display = "none";
    btnEnviar.style.display = "block";
  } else {
    pregunta.innerHTML = "Iniciar";
    btnRegistrar.style.display = "block";
    btnEnviar.style.display = "none";
  }
  elements.forEach((elementToToggle) => {
    if (elementToToggle.style.display === "none") {
      elementToToggle.style.display = "block";
    } else {
      elementToToggle.style.display = "none";
    }
  });
}

// alert("error")
