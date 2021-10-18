const express = require ('express');
const router = express.Router();
const Product = require('../../database/models/Producto');

/////CREA
router.post('/producto', (req, res) =>{
       console.log('req', req.body);
       Product.create(
       req.body
       ).then(product => {
       res.json(product);
       })
       });
       
////// LISTA TODO
router.get('/geT',(req,res)=>{
    Product.findAll().then(produc =>{
        res.json(produc);
    })
});

///// LISTA POR CODIGO DE PRODUCTO
router.get('/ge/:id',(req,res)=>{
    Product.findByPk(req.params.id).then(produc =>{
        res.json(produc);
    })
});

//////// MODIFICA
router.patch('/mo/:id', (req, res) => {
    Product.update({
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        valor: req.body.valor,
        estado: req.body.estado
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });

});

///////////ELIMINA
router.delete('/el/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;