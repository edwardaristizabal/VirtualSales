//import { response } from 'express';
//import React from 'react';
import logo from '../images/logo.png';

import React, { useState } from 'react'
//import { useHistory } from 'react-router'
//import React, {useEffect} from 'react';
/*    
fetch('localhost:5000/producto')
.then(response => response.json())
.then(data => console.log('response',data));*/

const CrearProducto = () => {

    /// const history = useHistory();
    const [formValues, setFormValues] = useState({})
    const [productos, setProductos] = useState([])

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    
    const submit = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);

        fetch('http://localhost:5000/producto', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    };


    ////////BUSCAR LOS DATOS
    const listaTodo = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/geT')
            .then(response => response.json())
            .then(data => {
                console.log('response', data)
                setProductos(data)
            })
    };
    //////ELIMINA DATO
    const eliminar = (id) => {
        console.log('esteee ess',id);
        fetch('http://localhost:5000/el/'+id, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                console.log('response', data)
                           })
                           

    };




    return (

        <div align="center" class="container" className="productForm">
            <form>
                <div class="text-end">
                    <img src={logo} width="60" alt=""></img>
                </div>
                <header> <h3>Producto</h3>  </header>
                <br /><br />
                {/*<label >Código Producto   <input type="text"></input></label><br /><br />*/}
                <label >Descripción <input onChange={changeField} value={formValues.descripcion} name="descripcion" type="text" class="form-control"></input></label><br /><br />
                <label >Cantidad Artículo<input onChange={changeField} value={formValues.cantidad} name="cantidad" type="number" class="form-control"></input></label><br /><br />
                <label >Valor Unitario    <input onChange={changeField} value={formValues.valor} name="valor" type="number" class="form-control"></input></label><br /><br />
                <label >Estado            <select onChange={changeField} value={formValues.estado} name="estado" type="text" class="form-control">
                    <option>        </option>
                    <option>Disponible</option>
                    <option>No Disponible</option> </select></label><br /><br /><br /><br />
                <button type="submit" onClick={submit} class="btn btn-secondary btn-lg">Guardar</button>
                <button type="button" class="btn btn-secondary btn-lg">Limpiar</button>
                <button type="button" onClick={listaTodo} class="btn btn-secondary btn-lg">Buscar</button>
          


            <br /><br />

            <table border="2" class="table table-gray table-striped">
                <thead align="middle">
                    <th>Código de Producto</th>
                    <th>Descripción</th>
                    <th>Cantidad Articulo</th>
                    <th>Valor Unitario</th>
                    <th>Estado</th>
                    <th>Opcion</th>

                </thead>
                <tbody>
                    {
                        productos.map(valor => {
                            return (
                                <tr align="middle" key={valor.id}>
                                    <td>{valor.id}</td>
                                    <td>{valor.descripcion}</td>
                                    <td>{valor.cantidad}</td>
                                    <td>{valor.valor}</td>
                                    <td>{valor.estado}</td>
                                    <td><a href={`/EditarProducto/${valor.id}`}><button type="button" >Editar</button></a>
                                    {/*<a href={'/EditarProducto/'+valor.id}><button type="button" >Editar</button></a>*/}
                                        <button type="button" onClick={()=>eliminar(valor.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>




            </form>

        </div>
    )

}

export default CrearProducto
