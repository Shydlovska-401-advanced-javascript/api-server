const express = require('express');

const router = express.Router();

const products = require('../../models/products.js');
const categories = require('../../models/categories.js');
function getModel(req, res, next) {
    // console.log('here is',req)
    let model = req.params.model; 
  
    
    switch (model) {
      case "products":
        req.model = products;
        next();
        return;
      case "categories":
        req.model = categories;
        next();
        return;
      default:
        next("Invalid Model");
        return;
    }
  }
  
router.param('model', getModel);


router.post('/:model', createAll);
router.get('/:model', getAll);
router.get('/:model/:id', getOne); 
router.put('/:model/:id', update); //put, patch
router.delete('/:model/:id', deleteOne);


function createAll(req, res, next){
    req.model.post(req.body)
        .then(data => {
            res.status(200).json(data);
          })
          .catch(next);
      }

function getAll(req, res, next){
    req.model.get()
    .then(data => {
      let count = data.length;
      res.status(200).json({count, data});
    })
    .catch(next);
}

function getOne(req, res, next){
    req.model.get(req.params.id)
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(next);
}

function update(req, res, next){
    console.log(req.body, req.params)
     req.model.update(req.params.id, req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

function deleteOne(req, res, next){
  req.model.delete({_id: req.params.id})
    .then(data =>{
        res.status(200).json(data);
    })
}

module.exports = router;