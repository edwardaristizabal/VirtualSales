import React from "react";
import home from "../images/home.png";
import logo from "../images/logo.png";

function Reporte_Ventas() {
  return (
    <div align="center">
      <div class="text-end">
        <img src={logo} width="60" alt=""></img>
      </div>
      <h3>Reporte Gestor de Ventas</h3>

      <br />
      <label for="start">Desde:</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        min="2021-01-01"
        max="2030-12-31"
      />
      <label for="start">Hasta:</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        min="2021-01-01"
        max="2030-12-31"
      />

      <div class="col-2 container w-90 my-5">
        <form>
          <div align="Center">
            <div class="mb-3">
              <label for="articulo" class="form label">
                Estado:{" "}
              </label>
              <select class="form-select" aria-label="Default select example">
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
            <div class="btn-group me-2" role="group">
              <button type="submit" class="btn btn-secondary btn-lg">
                Generar
              </button>
            </div>
          </div>
        </form>
      </div>

      <br />
      <br />

      <table class="table table-aqua table-striped">
        <thead align="middle">
          <th>Codigo de Venta</th>
          <th>Cliente</th>
          <th>Cantidad Artículos</th>
          <th>Costo Total</th>
          <th>Vendedor</th>
          <th>Fecha Pedido</th>
          <th>Estado</th>
        </thead>
        <tbody>
          <tr align="middle">
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
          </tr>
          <tr align="middle">
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
            <td>No aplica</td>
          </tr>
        </tbody>
      </table>

      <a href="/AdmVentas">
        <img src={home} alt="logo" height="50" align="center" />
      </a>
    </div>
  );
}

export default Reporte_Ventas;
