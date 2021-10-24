//import React from 'react'
import logo from '../images/logo.png'
import React, { useState } from 'react'
//import { useParams } from 'react-router-dom';




const Editar_Producto = () => {
 
//    console.log(useParams());
    //useParams();
    var url = window.location.pathname;
    var iD = url.substring(url.lastIndexOf('/') + 1);
    //alert(id); 

   const [productos, setProductos] = useState([])

    /*constructor(props); {
        super(props);
        this.state = {  };
       
      }*/
   //ComponentDidMount(){
      //  console.log(match.params.id);
    //};
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
           
    const modificar = (e) => {
    
       e.preventDefault();
      
            fetch('http://localhost:5000/mo/'+iD)
                .then(response => response.json())
                .then(data => {
                    console.log('response', data)
                })
            };
    
    const listaTodo = (e) => {
                e.preventDefault();
                fetch('http://localhost:5000/ge/'+iD)
                    .then(response => response.json())
                    .then(data => {
                        console.log('response', data)
                       /*
                        console.log(data.id);
                        console.log(data.descripcion);
                        console.log(data.cantidad);
                        console.log(data.valor);
                        console.log(data.estado);*/
                        setProductos(data)
                            
                 
                             
                    })
            };


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
                        <input type="codigo" class="form-control" name="codigo" placeholder="Código" value={productos.id} ></input>
                        </div>
                        <div class="mb-3">
                        <label for="codigo" class="form label">Descripción:</label>
                        <input type="text" class="form-control" name="Descripción" placeholder="Descripción" value={productos.descripcion} ></input>
                        </div>
                        <div class="mb-3">
                        <label for="cantidad" class="form label">Cantidad Articulo:</label>  
                        <input type="cantidad" class="form-control" name="cantidad" placeholder="Ingrese la cantidad" value={productos.cantidad}></input> 
                        </div>
                        <div class="mb-3">
                        <label for="valor" class="form label">Valor Unitario:</label>
                        <input type="valor" class="form-control" name="valor" placeholder="Ingrese el valor" value={productos.valor}></input>
                        </div>
                        <div class="mb-3">
                        <label for="articulo" class="form label">Estado:</label>
                        <input type="estado" class="form-control" name="estado"  placeholder={productos.estado}></input>
                        {/*<select class="form-select" aria-label="Default select example" value={productos.estado} >
                            <option>        </option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
    </select>*/}
                    </div>
                    </div>
                </form>
            </div>  

            <div class="btn-group me-2" role="group">
                <button id="2"  onClick={modificar} class="btn btn-secondary btn-lg ">Guardar</button>
                <button id="1" onClick={listaTodo} type="submit" class="btn btn-secondary btn-lg ">Cargar</button>
                <a href="/CrearProducto"><button id="1" type="submit" class="btn btn-secondary btn-lg ">Volver</button></a></div>
           {/* <div class="btn-group me-2" role="group">
           </div>*/}
            

           
        </div>
    )
}

export default Editar_Producto
