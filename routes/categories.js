const express = require('express');

const router = express.Router();

const category = require('../models/categories/categories-model.js')


router.post('/categories', createCategory);
router.get('/categories', getCategory);
router.get('/categories/:id', getById); 
router.put('/categories/:id', updateCategory); //put, patch
router.delete('/categories/:id', deleteCategory);


function createCategory(req, res, next){
    category.create(req.body)
          .then(data => {
            res.status(200).json(data);
          })
          .catch(next);
      }

function getCategory(req, res, next){
    category.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getById(req, res, next){
    category.get(req.params.id)
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(next);
}

function updateCategory(req, res, next){
    let { name, description} = req.body;
      category.update({_id: req.params.id}, {name, description} )
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

function deleteCategory(req, res, next){
  category.delete({_id: req.params.id})
    .then(data =>{
        res.status(200).json(data);
    })
}

module.exports = router;