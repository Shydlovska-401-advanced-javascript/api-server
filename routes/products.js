const express = require('express');

const router = express.Router();

const product = require('../models/products/product-model.js')

router.post('/products', createProduct);
router.get('/products', getProduct);
router.get('/products/:id', getById); 
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

function createProduct(req, res, next){
    product.create(req.body)
          .then(data => {
            res.status(200).json(data);
          })
          .catch(next);
      }

function getProduct(req, res, next){
    product.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getById(req, res, next){
    product.get(req.params.id)
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(next);
}

function updateProduct(req, res, next){
    let { name, category, description, price, inStock} = req.body;
      product.update({_id: req.params.id}, {name, category, description, price, inStock} )
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}


function deleteProduct(req, res, next){
  product.delete({_id: req.params.id})
    .then(data =>{
        res.status(200).json(data);
    })
}


module.exports = router;