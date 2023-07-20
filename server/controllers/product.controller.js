const Product = require ('../models/product.model')

module.exports = {
    
    newProduct: (req, res)=>{
        Product.create(req.body)
            .then(newProduct =>{
                res.json(newProduct)
            })
            .catch((err)=>{
                res.status(400).json(err)
            });
    },
    AllProducts: (req,res)=> {
        Product.find()
        .then(Products=>{
            res.json(Products)
        })
        .catch((err)=>{
            res.status(400).json(err)
        });
    },
    
    OneProduct: (req,res)=> {
        Product.findOne( { _id:req.params.id } )
        .then(Product=>{
            res.json(Product)
        })
        .catch((err)=>{
            res.status(400).json(err)
        });
    },

    updateProduct : (req,res)=> {
        Product.findOneAndUpdate( { _id: req.params.id }, req.body, {new: true} )
            .then(Product=>{
                res.json(Product)
            })
            .catch((err)=>{
                res.status(400).json(err)
            });
    },

    deleteProduct : (req,res)=> {
        Product.deleteOne( { _id: req.params.id } )
            .then(Product=>{
                res.json(Product)
            })
            .catch((err)=>{
                res.status(400).json(err)
            });
    }

}
