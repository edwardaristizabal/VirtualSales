<<<<<<< HEAD
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AdmVentas from '../components/AdmVentas'
import Cambiarcontrasena from '../components/Cambiar_contrasena'
import CrearProducto from '../components/CrearProducto'
import EditarProducto from '../components/Editar_Producto'
import GestorVentas from '../components/GestorVentas'
import HistorialVentas from '../components/HistorialVentas'
import Login from '../components/Login'
import Principal from '../components/Principal'
import Recuperarcontrasena from '../components/Recuperar_contrasena'

export default function AppRouter() {
    return (
        <Router>
            <Switch>
            <Route path="/GestordeVentas">
                <GestorVentas/>
            </Route>
            <Route path="/AdministradordeVentas">
               <AdmVentas/>
            </Route>
            <Route path="/Principal">
               <Principal/>
            </Route>
            <Route path="/CambiodeContraseña">
               <Cambiarcontrasena/>
            </Route>
            <Route path="/RecuperarContraseña">
               <Recuperarcontrasena/>
            </Route>
            <Route path="/HistorialVentas">
               <HistorialVentas/>
            </Route>
            <Route path="/CrearProducto">
               <CrearProducto/>
               </Route>
            <Route path="/EditarProducto">
               <EditarProducto/>
            </Route>
            <Route path="/">
                <Login/>
            </Route>

            </Switch>

        </Router>
        )
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdmProductos from "../components/AdmProductos";
import AdmUsuarios from "../components/AdmUsuarios";
import AdmVentas from "../components/AdmVentas";
import Cambiarcontrasena from "../components/Cambiar_contrasena";
import CrearVenta from "../components/Crear_Venta";
import CrearAdmUsuarios from "../components/CrearAdmUsuarios";
import CrearProducto from "../components/CrearProducto";
import CrearUCliente from "../components/CrearUsuarioCliente";
import EditarProducto from "../components/Editar_Producto";
import EditarVenta from "../components/Editar_Venta";
import EditarAdmUsuario from "../components/EditarAdmUsuario";
import GestorVentas from "../components/GestorVentas";
import HistorialVentas from "../components/HistorialVentas";
import HistorialCompraCliente from "../components/HistorialCompraCliente";
import Login from "../components/Login";
import Principal from "../components/Principal";
import Recuperarcontrasena from "../components/Recuperar_contrasena";
import ReporteProducto from "../components/Reporte_Productos";
import ReporteUsuarios from "../components/Reporte_Usuarios";
import ReporteVenta from "../components/Reporte_Venta";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/AdmProductos">
          <AdmProductos />
        </Route>
        <Route path="/AdmUsuarios">
          <AdmUsuarios />
        </Route>
        <Route path="/AdmVentas">
          <AdmVentas />
        </Route>
        <Route path="/Cambiar_Contrasena">
          <Cambiarcontrasena />
        </Route>
        <Route path="/Crear_Venta">
          <CrearVenta />
        </Route>
        <Route path="/CrearAdmUsuarios">
          <CrearAdmUsuarios />
        </Route>
        <Route path="/CrearProducto">
          <CrearProducto />
        </Route>
        <Route path="/CrearUsuarioCliente">
          <CrearUCliente />
        </Route>
        <Route path="/Editar_Producto">
          <EditarProducto />
        </Route>
        <Route path="/Editar_Venta">
          <EditarVenta />
        </Route>
        <Route path="/EditarAdmUsuario">
          <EditarAdmUsuario />
        </Route>
        <Route path="/GestorVentas">
          <GestorVentas />
        </Route>
        <Route path="/HistorialVentas">
          <HistorialVentas />
        </Route>
        <Route path="/HistorialCompraCliente">
          <HistorialCompraCliente />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Principal">
          <Principal />
        </Route>
        <Route path="/Recuperar_contrasena">
          <Recuperarcontrasena />
        </Route>
        <Route path="/Reporte_Productos">
          <ReporteProducto />
        </Route>
        <Route path="/Reporte_Usuarios">
          <ReporteUsuarios />
        </Route>
        <Route path="/Reporte_Venta">
          <ReporteVenta />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
>>>>>>> 364d32bc55471fe05a1543e998b539149081892a
}
