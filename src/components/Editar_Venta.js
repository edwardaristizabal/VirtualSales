import React from "react";
import home from "../images/home.png";
import logo from "../images/logo.png";

function Editar_Venta() {
  return (
    <div align="center">
      <div class="text-end">
        <label> "Usuario"</label>
        <img src={logo} width="60" alt=""></img>
      </div>
      <h3> Editar Venta</h3>

      <br />

      <div class="col-2 container w-90 my-5">
        <form action="#">
          <div align="Center">
            <div class="mb-3">
              <label for="codigo" class="form label">
                Codigo de Venta:
              </label>
              <input
                type="codigo"
                class="form-control"
                name="codigo"
                placeholder="Autoincrementable"
                disabled
              ></input>
            </div>
            <div class="mb-3">
              <label for="articulo" class="form label">
                Articulo:
              </label>
              <select class="form-select" aria-label="Default select example">
                <option value="1">Articulo 1</option>
                <option value="2">Articulo 2</option>
                <option value="3">Articulo 3</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="cantidad" class="form label">
                Cantidad Articulos:
              </label>
              <input
                type="cantidad"
                class="form-control"
                name="cantidad"
                placeholder="Ingrese la cantidad"
              ></input>
            </div>
            <div class="mb-3">
              <label for="valor" class="form label">
                Valor Unitario:
              </label>
              <input
                type="valor"
                class="form-control"
                name="valor"
                placeholder="Ingrese el valor"
              ></input>
            </div>
          </div>
        </form>
      </div>

      <div class="btn-group me-2" role="group">
        <a href="/GestordeVentas">
          <button type="button" class="btn btn-secondary btn-lg ">
            Guardar
          </button>
        </a>
      </div>
      <div class="btn-group me-2" role="group">
        <button type="button" class="btn btn-secondary btn-lg">
          Limpiar
        </button>
      </div>
      <div class="btn-group me-2" role="group">
        <a href="/GestordeVentas">
          <button type="button" class="btn btn-secondary btn-lg ">
            Cancelar
          </button>
        </a>
      </div>
      <div class="btn-group me-2" role="group">
        <button type="button" class="btn btn-secondary btn-lg">
          Agregar
        </button>
      </div>
      <a href="/AdmVentas">
        <img src={home} alt="logo" height="50" align="center" />
      </a>

      <br />
      <br />

      <table border="2" class="table table-gray table-striped">
        <thead align="middle">
          <th>Codigo de Venta</th>
          <th>Codigo Articulo</th>
          <th>Descripcion</th>
          <th>Cantidad Articulo</th>
          <th>Valor Total</th>
        </thead>
        <tbody>
          <tr align="middle">
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Editar_Venta;
