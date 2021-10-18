import React from "react";
import home from "../images/home.png";
import logo from "../images/logo.png";

function GestorVentas() {
  return (
    <div align="center">
      <div class="text-end">
        <img src={logo} width="60" alt=""></img>
      </div>
      <h3>Gestor de Ventas</h3>
      <br />

      <div class="btn-group me-2" role="group">
        <a href="/Crear_Venta">
          <button type="button" class="btn btn-secondary btn-lg ">
            Crear
          </button>
        </a>
      </div>
      <div class="btn-group me-2" role="group">
        <a href="/Editar_Venta">
          <button type="button" class="btn btn-secondary btn-lg">
            Editar
          </button>
        </a>
      </div>
      <div class="btn-group me-5" role="group">
        <button type="button" class="btn btn-secondary btn-lg">
          Eliminar
        </button>
      </div>
      <div class="btn-group me-4" role="group">
        <input
          type="search"
          name="Buscar"
          id="Buscar"
          placeholder="Buscar"
          size="50"
        ></input>
      </div>
      <label>"Usuario"</label>

      <br />
      <br />

      <table border="2" class="table table-gray table-striped">
        <thead align="middle">
          <th>Codigo de Venta</th>
          <th>Estado</th>
          <th>Fecha Estado</th>
          <th>Fecha Estimada de Entrega</th>
        </thead>
        <tbody>
          <tr align="middle">
            <a href="/HistorialVentas">
              <td>No aplica</td>
            </a>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
          </tr>
          <tr align="middle">
            <a href="/HistorialVentas">
              <td>No aplica</td>
            </a>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
          </tr>
        </tbody>
      </table>

      <div class="btn-group me-2" role="group">
        <a href="/Reporte_Venta">
          <button type="button" class="btn btn-secondary btn-lg">
            Reporte
          </button>
        </a>
      </div>
      <div class="btn-group me-5" role="group">
        <a href="/CrearUsuarioCliente">
          <button type="button" class="btn btn-secondary btn-lg">
            Clientes
          </button>
        </a>
      </div>
      <a href="/Principal">
        <img src={home} alt="logo" height="50" />
      </a>
    </div>
  );
}

export default GestorVentas;
