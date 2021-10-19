import React from 'react'
import logo from '../images/logo.png'
//import React, { useState } from 'react'




const Editar_Producto = () => {


    //const [productos, setProductos] = useState([])
    /* const changeField = (e) => {
     setFormValues({
     ...formValues,
     [e.target.name]: e.target.value
      })
     console.log('formValues', formValues);}
           const listaTodo = (e) => {
        e.preventDefault();
        console.log("Si es asi")}*/
   // componentDidMount(){}

      //  console.log(this.props.match.params.id);
        
    const modificar = (e) => {
       e.preventDefault();
      
            fetch('http://localhost:5000/mo/:id')
                .then(response => response.json())
                .then(data => {
                    console.log('response', data)
//                    setProductos(data)

                })
            }
    



    return (
        <div align="center">

            <div class="text-end">
                <label> "Usuario"</label>
                <a href="/Principal"><img src={logo} width="60" alt=""></img></a>
            </div>
            <h3>Editar Producto</h3>

            <br />

            <div class="col-2 container w-90 my-5">
                <form action="#">
                    <div align="Center">
                        <div class="mb-3">
                            <label for="codigo" class="form label">Código de Producto:</label>
                            <input type="codigo" class="form-control" name="codigo" placeholder="Código de Producto" disabled></input>
                        </div>
                        <div class="mb-3">
                            <label for="codigo" class="form label">Descripción:</label>
                            <input type="codigo" class="form-control" name="codigo" placeholder="Descripción"></input>
                        </div>

                        <div class="mb-3">
                            <label for="cantidad" class="form label">Cantidad Articulo:</label>
                            <input type="cantidad" class="form-control" name="cantidad" placeholder="Ingrese la cantidad"></input>
                        </div>
                        <div class="mb-3">
                            <label for="valor" class="form label">Valor Unitario:</label>
                            <input type="valor" class="form-control" name="valor" placeholder="Ingrese el valor"></input>
                        </div>
                        <div class="mb-3">
                            <label for="articulo" class="form label">Estado:</label>
                            <select class="form-select" aria-label="Default select example">
                            <option>        </option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

            <div class="btn-group me-2" role="group">
                <button id="2"  onClick={modificar} class="btn btn-secondary btn-lg ">Guardar</button></div>
            <div class="btn-group me-2" role="group">
            <a href="/AdmProductos"><button id="1"  type="submit" class="btn btn-secondary btn-lg ">Volver</button></a></div>
            

           
        </div>
    )
}

export default Editar_Producto
