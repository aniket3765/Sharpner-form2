const { query } = require('express');
const Expence = require('../models/expence');
const showItems = require('../public/js/Appointment');
const querystring = require('querystring'); 

exports.getItem = async (req, res, next) => {
    const data = await Expence.findAll();
    
    res.render('Add',{edit:false, item:{}, data:data});
    
    
}
exports.postItem = (req, res, next) => {

    
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.Category
    console.log(name+' : '+price+" "+category);
    Expence.create({
       product: name,
       price: price,
       category: category
    }).then(result => res.redirect('/')).catch(error =>{ console.log(error)})
};

exports.homePage = async (req, res, next) =>{
    const data = await Expence.findAll();
    res.render('Add',{edit:false, data:data});
}

 exports.editItem = async (req, res) => {
    const data = await Expence.findAll();
    const item = await Expence.findAll({where:{id:req.params.id}})
    console.log( req.params.id+"+++what")
     res.render('Add',{data:data, edit:true, item:item[0].dataValues});

 }
exports.eiditData= async (req, res)=> {
    console.log('post')
  await Expence.update(
        {product:req.body.name,
        price:req.body.price,
        category:req.body.Category
        },
       { where:{id:req.params.id}}
    ).then(result => {res.redirect('/')}).catch(err=>{console.log(err)})
    
}

exports.deleteItem = (req, res, next) => {
    Expence.destroy({
        where:{id:req.params.id}
    })
    res.redirect('/')
}
