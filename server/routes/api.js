const express = require('express');
const router = express.Router();
const axios = require('axios');
// const json_rest_example = require('./place_details.json');

const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ&location=42.652580,-73.756233&radius=5500&type=restaurant&keyword=';

const PLACES_DETAIL_URL = 'https://maps.googleapis.com/maps/api/place/details/json?fields=name,rating,vicinity,formatted_address,photo,url,price_level,review,user_ratings_total&key=AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ&place_id=';

/* GET api listing */
router.get('/', (req, res) => {
    res.send('api works');
})


router.get('/restaurant/search', (req, res) =>{
    axios.get(`${GOOGLE_API_URL}${req.query.query}`)
        .then(response =>{
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.log("ERROR!!!");
            res.status(500).send(error);
        })
})

router.get('/restaurant/:id', (req, res) => {
    console.log(req.params);
    axios.get(`${PLACES_DETAIL_URL}${req.params.id}`)
        .then(response => {
            res.status(200).json(response.data.result);
        })
        .catch(error => {
            res.status(500).send(error);
        })
    // res.json(json_rest_example.result);
})

module.exports = router;
