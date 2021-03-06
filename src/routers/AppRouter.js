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
            <Route path="/EditarProducto/:id">
               <EditarProducto/>
            </Route>
            <Route path="/GestordeVentas">
                <GestorVentas/>
            </Route>
            <Route path="/AdministradordeVentas">
               <AdmVentas/>
            </Route>
            <Route path="/Principal">
               <Principal/>
            </Route>
            <Route path="/CambiodeContrase├▒a">
               <Cambiarcontrasena/>
            </Route>
            <Route path="/RecuperarContrase├▒a">
               <Recuperarcontrasena/>
            </Route>
            <Route path="/HistorialVentas">
               <HistorialVentas/>
            </Route>
            <Route path="/CrearProducto">
               <CrearProducto/>
               </Route>
            <Route path="/">
                <Login/>
            </Route>

            </Switch>

        </Router>
        )
}

