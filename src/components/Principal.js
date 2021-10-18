import React from 'react'
import logo from '../images/logo.png'
import admusuarios from '../images/admusuarios.png'
import admventas from '../images/admventas.png'
import contacto from '../images/contacto.png'
import contrasena from '../images/contrasena.png'
import vendedores from '../images/vendedores.png'
import ventas from '../images/ventas.png'

function Principal() {
    return (

        <div>
            <div class="text-end">
                <label> "Usuario"</label>
                <a href="/Principal"><img src={logo} width="60" alt=""></img></a>
            </div>
            <div>
                <div class="container-xl" align="center">

                    <h1>Menu</h1><br /><br />
                    <nav class="navbar navbar-light bg-light" >
                        <a class="navbar-brand" href="/AdmVentas">
                            <img src={admventas} height="100" class="d-inline-block align-top" alt="" align="center" /><br />
                            <a href="/AdmVentas"><button type="button" class="btn btn-secondary btn-lg">Administrador de Ventas</button></a>
                        </a><br />
                        <a class="navbar-brand" href="/AdmUsuarios">
                            <img src={admusuarios} height="100" class="d-inline-block align-top" alt="" align="center" /><br />
                            <a href="/AdmUsuarios"><button type="button" class="btn btn-secondary btn-lg">Administrador de Usuarios</button></a>
                        </a><br />
                        <a class="navbar-brand" href="/GestorVentas">
                            <img src={ventas} height="100" class="d-inline-block align-top" alt="" align="center" /><br />
                            <a href="/GestorVentas"><button type="button" class="btn btn-secondary btn-lg">Gestor de Ventas</button></a>
                        </a><br />
                        <a class="navbar-brand" href="/Cambiar_contrasena">
                            <img src={contrasena} height="100" class="d-inline-block align-top" alt="" align="center" /><br />
                            <a href="/Cambiar_contrasena"><button type="button" class="btn btn-secondary btn-lg">Cambio de Contraseña</button></a>
                        </a><br />
                        <a class="navbar-brand" href="/AdmProductos">
                            <img src={vendedores} height="100" class="d-inline-block align-top" alt="" align="center" /><br />
                            <a href="/AdmProductos"><button type="button" class="btn btn-secondary btn-lg">Administrador de Productos</button></a>

                        </a><br />
                    </nav>



                </div>
            </div>
            <div align="center">
                <a class="navbar-brand" href="/HistorialCompraCliente" >
                    <img src={contacto} width="100" height="100" class="d-inline-block align-top" alt="" align="center" /><br />
                    <a href="/HistorialCompraCliente"><button type="button" class="btn btn-secondary btn-lg">Contactanos</button></a>
                </a>

            </div>
            <div class="text-end">
                <a href="/Login"><button type="button" class="btn btn-secondary btn-lg" text-alignt="right">Cerrar Sesion</button></a>
            </div>

        </div>
    )
}

export default Principal
