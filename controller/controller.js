const { query } = require('express');
const Item = require('../models/item');
const showItems = require('../public/js/Appointment');
const querystring = require('querystring'); 

exports.getItem = (req, res, next) => {
    res.render('Add',{edit:false, item:{}});
    
}
exports.postItem = (req, res, next) => {

    
    const name = req.body.name;
    const email = req.body.email;
    console.log(name+' : '+email);
    Item.create({
        Name: name,
        Email:email,
    }).then(result => res.redirect('/')).catch(error =>{ console.log(error)})
};

exports.homePage = async (req, res, next) =>{
    const data = await Item.findAll();
    res.render('Appointment',{edit:false, data:data});
}

 exports.editItem = async (req, res) => {
    const item = await Item.findAll({where:{id:req.params.id}})
    console.log( req.params.id+"+++what")
     res.render('Add',{edit:true, item:item[0].dataValues});

 }
exports.eiditData= async (req, res)=> {
  await Item.update(
        {Name:req.body.name,
        Email:req.body.email
        },
       { where:{id:req.params.id}}
    ).then(result => {res.redirect('/')}).catch(err=>{console.log(err)})
    
}

exports.deleteItem = (req, res, next) => {
    Item.destroy({
        where:{id:req.params.id}
    })
    res.redirect('/')
}
