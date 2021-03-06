import React from "react";
import home from "../images/home.png";
import logo from "../images/logo.png";

function CrearUsuarioCliente() {
  return (
    <div>
      <div class="text-end">
        <label>"usuario"</label>
        <img src={logo} width="70" alt=""></img>
      </div>
      <center>
        <table Style="BORDER:GROOVE 10PX rgb(10, 10, 10)" />
      </center>
      <div class="login-container">
        <div class="register">
          <center>
            <h2>Crear (Administrador de Usuario)</h2>
          </center>
          <div class="col-2 container w-95 my-5">
            <form action="">
              <center>
                <label>Usuario:</label>
                <input type="text" class="numero documentoS" disabled value=""/>
                <br />
                <br />
                <label>Nombres:</label>
                <input type="text" placeholder="Ingrese sus Nombres" class="Nombre"/>
                <br /> <br />
                <label>Apellidos:</label>
                <input type="text" placeholder="Ingrese sus Apellidos" class="Apellido" />
                <br /> <br />
                <label>Numero de Documento:</label>
                <input type="text" placeholder="Ingrese Número de Documento" class="numero documento" />
                <br /> <br />
                <div class="mb-3">
                  <label for="email" class="form label">
                    Correo Electrónico
                  </label>
                  <input type="email" class="form-control" name="email" placeholder="Ingresa tu e-mail registrado"></input>
                </div>
                <label>
                    Rol
                    <input type="text" value="Cliente" class="rol" disabled/>
                </label>
                <br /> <br />
                <label>
                  Estado:
                  <input type="text" value="Pendiente" class="estado" disabled/>
                </label>
              </center>
            </form>
          </div>
        </div>
      </div>
      <div align="center">
        <div class="btn-group me-2" role="group">
          <button type="button" class="btn btn-secondary btn-lg">
            Guardar
          </button>
        </div>
        <div class="btn-group me-2" role="group">
          <button type="button" class="btn btn-secondary btn-lg">
            Limpiar
          </button>
        </div>
        <div class="btn-group me-2" role="group">
          <button type="button" class="btn btn-secondary btn-lg">
            Cancelar
          </button>
        </div>
        <a href="/Principal">
          <img src={home} alt="home" height="50" />
        </a>
      </div>
      <br />
    </div>
  );
}

export default CrearUsuarioCliente;
