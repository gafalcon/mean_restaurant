const express = require('express');
const router = express.Router();
const axios = require('axios');

//const API = 'https://jsonplaceholder.typicode.com';
const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ&location=42.652580,-73.756233&radius=5500&type=restaurant&keyword=';

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

module.exports = router;
