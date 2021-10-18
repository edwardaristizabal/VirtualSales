import React from 'react'
import GoogleLogin from "react-google-login";
import logo from "../images/logo.png";
import FacebookLogin from "react-facebook-login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Login() {

    <script src="https://accounts.google.com/gsi/client" async defer></script>;

    const responseGoogle = (response) => {
      console.log("responseGoogle" + response.name);
      console.log("Este es el correo " + response.email);
      console.log("Este es la foto " + response.picture.data.url);
    };

    library.add(faFacebookF);

    const respuestaFacebook = (respuesta) => {
      console.log(respuesta);
    };

    return (
      <div class="container w-75 bg-primary mt-5 rounded shadow">
        <div class="row align-items-stretch">
          <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
          <div class="col bg-white p-5 rounded-end">
            <div class="text-end">
              <img src={logo} width="48" alt=""></img>
            </div>
            <h2 class="fw-bold text-center py-5">Bienvenido</h2>

            {/* inicio login */}

            <form action="#">
              <div class="mb-4">
                <label for="email" class="form label">
                  Correo Electrónico
                </label>
                <input type="email" class="form-control"name="email" placeholder="Ingresa tu Email"></input>
              </div>
              <div class="mb-4">
                <label for="password" class="form label">
                  Contraseña
                </label>
                <input type="password" class="form-control" name="password" placeholder="Ingresa tu contraseña"></input>
              </div>
              <div class="mb-4">
                <input type="checkbox" name="connected" class="form-checkbox-input" id=""></input>
                <label for="connected" class="form-checkbox-label">
                  Mantenerme Conectado
                </label>
              </div>
              <div class="d-grid">
                <a href="/Principal">
                  <button type="button" class="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </a>
              </div>
              <div class="my-3">
                <span> No tienes cuenta? <a href="/CrearUsuarioCliente">Regístrate</a></span>
                <br />
                <span><a href="/Recuperar_contrasena">Recupera tu Contraseña</a></span>
              </div>
            </form>

            {/*  Login con Redes */}

            <div class="container w-100 my-5">
              <div class="row">
                <div>
                  <FacebookLogin
                    appId="1017388979082856"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={respuestaFacebook}
                    textButton="Inicia Sesión con Facebook"
                    FontAwesomeIcon
                    icon="fa-facebook-f"
                  />
                  <br />
                </div>
                <br />
                <br />
                <div>
                  <GoogleLogin
                    clientId="129631780181-vhe1cjgrr9ffubinulvfcpk4sh68tdve.apps.googleusercontent.com"
                    buttonText="Inicia Sesión con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
