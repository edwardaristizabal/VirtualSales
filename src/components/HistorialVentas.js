import React from 'react'
<<<<<<< HEAD
//import home from '../images/home.png'
import logo from '../images/logo.png'
=======
import logo from '../images/logo.png'
import home from "../images/home.png";
>>>>>>> 364d32bc55471fe05a1543e998b539149081892a

function HistorialVentas() {
    return (
        <div align="center" class="container">
        <div class="text-end">
        <img src={logo} width="60" alt=""></img>
        </div> 
        <header> <h4>Historial de Ventas</h4>  </header>
            <table class="table table-aqua table-striped">
        <thead align="middle">
            <th>Codigo de Venta</th>
            <th>Id Cliente</th>
            <th>Cliente</th>
            <th>Costo Total</th>
            <th>Vendedor</th>
            <th>Destino</th>
            <th>Fecha Pedido</th>
            <th>Estado</th>
            <th>Fecha Estimada de Entrega</th>

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
                <td>No aplica</td>
                <td>No aplica</td>
            </tr>
            </tbody>
        </table>
<<<<<<< HEAD
            
=======
            <a href="/Principal"><img src={home} alt="logo" height="50"/></a>
>>>>>>> 364d32bc55471fe05a1543e998b539149081892a
        </div>
    )
}

export default HistorialVentas
