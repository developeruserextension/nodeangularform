const express = require('express');
const app = express();
const businessRoutes = express.Router();

let Business = require('../models/Business');

businessRoutes.route('/add').post(function(req, res){
    let business = new Business(req.body);
    business.save()
        .then(busiesss => {
            res.status(200).json({'Business': 'business in added successfully'})
        })
        .catch(err => { 
            res.status(400).send('unable to save to database');
        })
});

businessRoutes.route('/').get(function(req, res){
    Business.find(function(err, businesses){
        if(err) {
            console.log(err);
        } else {
            res.json(businesses);
        }
    })
});

businessRoutes.route('/edit/:id').get(function(req, res){
    let id = req.params.id;
    Business.findById(id, function(err, business){
        res.json(business);
    })
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
        //console.log(business);
    if (!business) {
        console.log('error throw',err);
        //return next(new Error('Could not load Document'));
    }
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;
          //console.log(req.body);
        business.save().then(business => {
          res.json('Update complete');
          //console.log('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
            //console.log(err);
      });
    }
  });
});

businessRoutes.route('/delete/:id').get(function(req, res){
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) {
            res.json(err);
        } else { 
            res.json('Successfully removed');
        }
    })
});

module.exports = businessRoutes;