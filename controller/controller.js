const { query } = require('express');
const Stock = require('../models/Stock');

exports.home = async (req, res) =>{

    res.sendFile(__dirname+'/index.html')
}

exports.getItem = async (req, res, next) => {
    const data = await Stock.findAll();
   
    res.json(data);
    
  //  res.render('Add',{edit:false, item:{}, data:data});
    
    
}
exports.postItem = (req, res, next) => {   
    const name = req.body.name;
    const description = req.body.descreption;
    const price = req.body.price;
    const quantity = req.body.quantity
    Stock.create({
       name: name,
       description:description,
       price: price,
       quantity: quantity
    }).then(result => res.redirect('/')).catch(error =>{ console.log(error)})
 };


 exports.editItem = async (req, res) => {
  res.json    (await Stock.findAll({where:{id:req.params.id}}))
 }
exports.eiditData= async (req, res)=> {
    console.log(req.body)
    await Stock.update(

        {quantity:req.body.quantity
        },
       { where:{id:req.body.id}}
    ).then(result => {res.redirect('/')}).catch(err=>{console.log(err)})
    
}

exports.deleteItem = (req, res, next) => {
    console.log(req)
    Stock.destroy({
        where:{id:req.params.id}
    })
    res.redirect('/')
}
